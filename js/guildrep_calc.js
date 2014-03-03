// Guildrep calculator
var $interval = null;
$setup = false;
$ranks = {};
$ranks['Initiate'] = {'points': 0}
$ranks['Apprentice'] = {'points': 10000}
$ranks['Journeyman'] = {'points': 20000}
$ranks['Expert'] = {'points': 25000}
$ranks['Artisan'] = {'points': 30000}
$ranks['Master'] = {'points': 45000}
$ranks['Eastemnet Master'] = {'points': 60000}
$ranks['Westemnet Master'] = {'points': 90000}

$total = 0;
$rankcount = 0;
$.each($ranks, function(r, p) {
  $total += p['points'];
  $rankcount++;
})

$recipes = {};

$recipes['Expert'] = {};
$recipes['Expert']['Small Expert'] = {'points': 300, 'cd': 1}
$recipes['Expert']['Medium Expert'] = {'points': 900, 'cd': 3}

$recipes['Artisan'] = {};
$recipes['Artisan']['Small Artisan'] = {'points': 400, 'cd': 1}
$recipes['Artisan']['Medium Artisan'] = {'points': 1200, 'cd': 3}

$recipes['Master'] = {};
$recipes['Master']['Small Master'] = {'points': 500, 'cd': 1}
$recipes['Master']['Medium Master'] = {'points': 1500, 'cd': 3}
$recipes['Master']['Large Master'] = {'points': 3000, 'cd': 7}

$recipes['Supreme'] = {};
$recipes['Supreme']['Small Supreme'] = {'points': 600, 'cd': 1}
$recipes['Supreme']['Medium Supreme'] = {'points': 1800, 'cd': 3}
$recipes['Supreme']['Large Supreme'] = {'points': 3600, 'cd': 7}

$recipes['Westfold'] = {};
$recipes['Westfold']['Small Westfold'] = {'points': 700, 'cd': 1}
$recipes['Westfold']['Medium Westfold'] = {'points': 2100, 'cd': 3}
$recipes['Westfold']['Large Westfold'] = {'points': 4200, 'cd': 7}

$recipes['Eastemnet'] = {};
$recipes['Eastemnet']['Small Eastemnet'] = {'points': 800, 'cd': 1}
$recipes['Eastemnet']['Medium Eastemnet'] = {'points': 2400, 'cd': 3}
$recipes['Eastemnet']['Large Eastemnet'] = {'points': 4800, 'cd': 7}

$recipes['Westemnet'] = {};
$recipes['Westemnet']['Small Westemnet'] = {'points': 900, 'cd': 1}
$recipes['Westemnet']['Medium Westemnet'] = {'points': 2700, 'cd': 3}
$recipes['Westemnet']['Large Westemnet'] = {'points': 5400, 'cd': 7}

if($('.guild-rep-recipes').length > 0) {
  $.each($recipes, function(tier, recipes) {
    $('.crafting-tier.tpl').clone().removeClass('tpl').text(tier + " recipes").appendTo('.guild-rep-recipes').addClass('selected').attr('tier', tier)
    .on('click', function() {
      if($(this).hasClass('selected')) {
        $(this).add('.guild-rep-recipe[tier="'+tier+'"]').removeClass('selected');
      } else {
        $(this).add('.guild-rep-recipe[tier="'+tier+'"]').addClass('selected');
      }
      calcDays();
    });
    $.each(recipes, function(name, meta) {
      meta['tier'] = tier;
      meta['name'] = name;
      $('.guild-rep-recipe.tpl').clone().removeClass('tpl').text(name + " ("+ meta.points +")").attr(meta).appendTo('.guild-rep-recipes').addClass('selected')
      .on('click', function() { 
        $(this).toggleClass('selected');
        if($('.guild-rep-recipe[tier="'+tier+'"]').hasClass('selected')) {
          $('.crafting-tier[tier="'+tier+'"]').addClass('selected');
        } else {
          $('.crafting-tier[tier="'+tier+'"]').removeClass('selected');
        }
        calcDays();
      });
    });
  });
  $('.crafting-tier.tpl, .guild-rep-recipe.tpl').remove();
}

if($('.repbar').length > 0) {
  $counter = 0;
  $.each($ranks, function(rank, meta) {
    $('.repbar li').first().clone().text(rank).attr(meta).appendTo('.repbar ul');
  });
  $('.repbar li').first().remove();

  $('.goal .total').text($total);

  $('.current li').on('click', function(e) {
    $li = $(this);
    if($li.hasClass('disabled')) return;

    $li.parents('.repbar').find('.title').removeClass('hover').attr('rank', $li.text());
    $li.parents('.repbar').find('.selected').text($li.text());

    max = calcMax($li.text());
    $('.current input').attr('max', max);
    $('.current .maxexp').text(max);

    $('.goal .minexp').text(calcMin($li.text()));

    updateBars();

    $('.goal li.disabled').removeClass('disabled');
    $('.goal li').each(function(i,l) {
      $(l).addClass('disabled');
      if($(l).text() == $li.text()) {
        return false;
      }
    });
  });

  $('.goal li').on('click', function(e) {
    $li = $(this);
    if($li.hasClass('disabled')) return;

    $li.parents('.repbar').find('.title').removeClass('hover').attr('rank', $li.text());
    $li.parents('.repbar').find('.selected').text($li.text());

    $('.goal input').val($li.attr('points')).attr('max', $li.attr('points'));
    $subtotal = 0;
    $.each($ranks, function(rank, meta) {
      $subtotal += meta.points;
      if(rank == $('.goal .title').attr('rank')) {
        return false;
      }
    })
    $('.goal .total').text($subtotal);
    updateBars();

    $('.current li.disabled').removeClass('disabled');
    found = false;
    $('.current li').each(function(i,l) {
      if($(l).text() == $li.text()) {
        found = true;
      }
      if(found) {
        $(l).addClass('disabled');
      }
    });    
  });

  $('.current li').first().trigger('click');
  $('.goal li').last().trigger('click');

  updateBars();

  $('.repbar .title').on('mouseenter', function() {
    $(this).addClass('hover');
  })
  .on('mouseleave', function() {
    $(this).removeClass('hover');
  })

  $('.current input').on('change', function() {
    newinput(this);
  })
  .keyup(function() {
    t = this;
    if($interval) {
      clearInterval($interval);
    }
    $interval = setInterval(function() {
      clearInterval($interval);
      newinput(t);
    }, 500);
  });
}

function newinput(t) {
  if(parseInt($(t).val()) > parseInt($('.current .maxexp').text())) {
    $(t).val($('.current .maxexp').text());
  }
  $('.goal .minexp').text(calcMin($('.current .title').attr('rank')));
  updateBars();
}

function calcMin(r) {
  var min = 0;
  var found = false;
  $.each($ranks, function(rank, meta) {
    if(found) {
      return false;
    } else {
      min += meta.points;
    }
    if(rank == r) {
      found = true;
    }
  })
  return (min + parseInt($('.current input').val()));
}

function calcMax(r) {
  var max = 0;
  var found = false;
  $.each($ranks, function(rank, meta) {
    if(found) {
      max = meta.points;
      return false;
    }
    if(rank == r) {
      found = true;
    }
  })
  return max;
}

function updateBars() {
  $('.bar .inner').each(function() {
    total = parseInt($(this).parents('.repbar').find('.maxexp').text());
    if($(this).parents('.repbar').find('input').length > 0) {
      val = parseInt($(this).parents('.repbar').find('.minexp').val());
    } else {
      val = parseInt($(this).parents('.repbar').find('.minexp').text());
    }
    if(total == 0 && val == 0) {
      total = 1;
      val = 1;
    }
    $(this).css({width: 100/ total * val + "%"});
  })

  if($setup) {
    calcDays();
  }
}
function log(t) {
  $('#log').html($('#log').html() + "\n" + t);
}

function calcDays() {
  $('#log').html("");
  exprequired = (parseInt($('.goal .maxexp').text()) - parseInt($('.goal .minexp').text()));
  sr = Array(); // Selected recipes
  $('.guild-rep-recipe.selected').each(function(index, recipe) {
    //console.log(recipe);
    $(recipe).attr('cooldown', 0);
    sr.push(recipe);
  });

  if(sr.length == 0) {
    log("No recipes selected.");
    return false;
  }

  exp = 0;
  counter = 0;
  dayexp = 0;
  executed = Array();
  day = 1;
  while(exp < (exprequired+1) && day < 5000) {
    recipe = $(sr[counter]);
    tier = recipe.attr('tier');
    name = recipe.attr('name');
    cooldown = parseInt(recipe.attr('cooldown'));
    if(cooldown == 0) {
      exp += parseInt(recipe.attr('points'));
      dayexp += parseInt(recipe.attr('points'));
      recipe.attr('cooldown', (parseInt(recipe.attr('cd')) - 1));
      executed.push(recipe);
    } else {
      recipe.attr('cooldown', (cooldown-1));
    }
    counter++;
    if(counter >= sr.length || (exp >= exprequired)) {
      log("Day " + day);
      log("Total exp today: " + dayexp);
      $.each(executed, function(e_index, e_recipe) {
        log("- " + e_recipe.attr('name') + " ("+e_recipe.attr('points')+")")
      });
      log("______________________");
      log("Total exp: " + exp + "/" + exprequired);
      //log("Rank: ")
      log("\n\n");
      day++;
      dayexp = 0;
      counter = 0;
      executed = Array();
    }
  }
  $('.result-days').text((day-1));
  $('.result-goal-level').text($('.goal .selected').text());
  $('.result-level').text($('.current .selected').text());
}

$currentRank = null;
$currentExp = 0;

$setup = true;
calcDays();
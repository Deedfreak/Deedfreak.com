// Grants the skill: x (instead of earns the skill: x)
// Points available neerzetten.
// Points spent neerzetten
// re-spec button
// cancel button?
// save button
// multi unlocks/require ondersteunen.
// skill hover




document.oncontextmenu = function() {return false;};
$('#traittree, #class-select, .tt-trait').hide();
$('#tt-tooltip').appendTo('body');
var $activeClass = null, $activeTree = null, $trees = null, $skills = null, $traits = 0, br = "<br/>", $select = null,$startAt=0, $totalSpent=0, $maxSpent=65;

function reset() {
  $activeTree = null;
  $trees = null;
  $skills = null;
  $traits = 0;
  $select = null;
  $startAt=0;
  $totalSpent=0;
  $('.bonus[data-bonus-id]').remove();
}

$('.class-select').on('click', function() {
  reset();
  $activeClass = $(this).data('class');
  $('.class-select.active').removeClass('active');
  $('.class-select[data-class='+$(this).data('class')+']').addClass('active');
  $('#class-select').hide();
  $('#tree-spend').removeAttr('class').hide();
  $('#tree-select').show();
  init();
  return false;
})

if($('.class-select.active').length == 0) {
  $('#class-select').show();
} else {
  $activeClass = $('.class-select.active').data('class');
  init();
}

$('.tt-select-tree').on('click', function() {
  $activeTree = parseInt($(this).data('tree-id'));
  goSpend();
});


function init() {
  $.get('/tools/trait-tree-spender/class/'+$activeClass, function(data) {
    $trees = data['trees']; $skills = data['skills']; $traits = data['traits'];
    $.each($trees, function(index, tree) {
      buildTreeBonus(index, tree, 'select');
    });
    $('#traittree').removeAttr('class').addClass($activeClass).show();
    $('#tt-tooltip').removeAttr('class').addClass($activeClass);
    //$('.tt-select-tree[data-tree-id=1]').trigger('click');
  }, 'json');
}


/* TREE BUILD FUNCTION */

function buildTreeBonus(index, tree, select) {
  if(select) {
    $p = $('#tree-select .tree-'+index + ' .bonuses');
  } else {
    $p = $('#tree-spend .tt-tree-mastery');
  }

  startAt = ($traits + (index * 7)) * 32;

  $.each(tree.bonustraits, function(k, bonus){
    $p.find('.bonus').first().clone()
      .attr('data-bonus-id', k)
      .appendTo($p)
      .css({backgroundPosition: "-"+(startAt+k*32)+"px 0"})
      .show()
      .on('mouseenter', function(e) {
        tooltip('bonusTrait', $(this), bonus, e);
    });
  });

  $('.tt-tree-mastery .bonus').addClass('gray');
}

function buildSelectSkills(skills) {
  if(skills.length == 0) {return "";}
  var html = '<span class="ttF8">Skills earned:</span><br/>';
  $.each(skills, function(i, skill) {
    pos = ($traits + 21 + skill) * 32;
    skill = $skills[skill];
    html += '<div class="select-skill"><span class="icon" style="background-position: -'+pos+'px 0"></span> ' + skill.name + '</div>';
  });
  return html;
}


/* SPEND FUNCTIONS */
function goSpend() {
  // Reset first.
  $('.tt-trait[data-trait-id]').remove();

  // Build the trees, blabla

  $startAt = 0;
  $.each($trees, function(i, tree) {
    $trees[i]['spent'] = 0;
    $spend = $('#tree-spend .tt-tree.tree-' + i);
    $.each(tree['traits'], function(index, trait) {
      addTrait(index, trait);
    });
  });

  buildTreeBonus($activeTree, $trees[$activeTree]);

  $('#tree-select').hide();
  $('#tree-spend').addClass('tree-'+$activeTree).show();
}

function addTrait(i, t) {
  if(!t.name) {
    $('.tt-trait').first().clone().addClass('empty').attr('data-trait-id', i).appendTo($spend).show().find('.icon').remove();
  } else {
    $startAt++;
    $el = $('.tt-trait')
      .first()
      .clone()
      .attr('data-trait-id', i)
      .attr('rank', 0)
      .attr('max', t.maximum)
      .attr('tree', t.tree)
      .attr('level', Math.floor(i/4))
      .appendTo($spend)
      .on('mouseenter', function(e){ tooltip('trait', $(this), t, e); })
      .on('mousedown', function(e) {toggleRank($(this), t, e)})
      .show();

    if(t.requires) {
      $el.attr('link', t.requires.toString());
    }
    if(i > 3) {
      $el.addClass('gray');
    }
    $el.find('.max').text(t.maximum)
    $el.find('.icon')
      .css({backgroundPosition: "-"+(($startAt-1)*32)+"px 0"});
  }
}

function preventedByOtherLevels(t, level) {
  var spent = $trees[t.tree]['spent'];
  if ( spent < 5 ) return false;

  prevented = false;

  allSpent = $('.tt-trait[tree='+t.tree+'].spent');

  for( i = 6; i > 0; i-- ) {
    if($('.tt-trait[level='+i+'][tree='+t.tree+'].spent').length > 0) {
      subtotal = 0;
      allSpent.each(function(k, v) {
        v = $(v);
        if ( parseInt(v.attr('level')) < i) {
          subtotal += parseInt(v.attr('rank'));
        }
      })
      if(subtotal == i * 5) {
        prevented = true;
        break;
      }
    }
  }

  if(i == level) {
    prevented = false;
  }

  if(t.unlocks && t.unlocks.length > 0 && parseInt($('.tt-trait[tree='+t.tree+'][data-trait-id='+t.id+']').attr('rank')) == t.unlockrank[0] && parseInt($('.tt-trait[tree='+t.tree+'][data-trait-id='+t.unlocks[0]+']').attr('rank')) > 0) {
    prevented = true;
  }

  return prevented;
}

function toggleRank(el, t, e) {

  rightClick = (e.which == 3);
  if(el.hasClass('gray') || ($totalSpent == $maxSpent && !rightClick)) return;

  rank = parseInt(el.attr('rank'));
  level = parseInt(el.attr('level'));
  spent = (t.tree == $activeTree ? 1 : 2);

  if($totalSpent + spent > $maxSpent && !rightClick) return;

  if(rightClick) {
    if(rank > 0 && !preventedByOtherLevels(t, level) ) {
      $trees[t.tree]['spent'] -= 1;
      $totalSpent -= spent;
      rank--;
    }
  } else {
    if(rank < t.maximum) {
      $trees[t.tree]['spent'] += 1;
      $totalSpent += spent;
      rank++;
    }
  }
  el.attr('rank', rank).find('.spend').text(rank);

  if(rank == 0) {
    el.removeClass('spent');
  } else {
    el.addClass('spent');
  }

  if( rank == parseInt(t.maximum) ) {
    el.addClass('max');
  } else {
    el.removeClass('max');
  }

  tooltip('trait', el, t, e);

  for(i = 0; i <= 7; i++) {
    selector = $('.tt-tree.tree-'+t.tree+' .tt-trait[level='+i+'] ');
    if(t.tree == $activeTree) { // Otherwise ignore
      selector = $('.tt-tree.tree-'+t.tree+' .tt-trait[level='+i+'], .bonus[data-bonus-id='+(i-1)+']');
    }

    if(Math.floor($trees[t.tree]['spent']/5) >= i) {
      selector.removeClass('gray');
    } else {
      if(!(selector.attr('link')))
      selector.addClass('gray');
    }
  }

  $('.tt-trait[tree='+t.tree+'][link]').each(function (k, v) {
    v = $(v);
    if(Math.floor($trees[t.tree]['spent']/5) >= parseInt(v.attr('level'))) {
      link = parseInt(v.attr('link'));
      if(parseInt($('.tt-trait[tree='+t.tree+'][data-trait-id='+link+']').attr('rank')) < $trees[t.tree]['traits'][link]['unlockrank'][0]) {
        v.addClass('gray');
      }
    }
  });

  e.preventDefault();
  return false;
}


/* TOOLTIP FUNCTIONS */
function tooltip(type, el, data, e) {
  $('#tt-tooltip').html('');
  switch(type) {
    case 'trait':
      tthtml('<div class="ttImg icon" style="background-position: '+el.find('.icon').css('backgroundPosition')+'"></div>');
      tthtml('<div class="ttName"><span class="ttF9">'+data.name+'</span></div>');
      tthtml('<span class="ttF3">' + $activeClass + '</span><br/>');
      tthtml('<span class="ttF9">Not earned</span><br/><br/>');
      tthtml(data.label + '<br/><br/>');
      $rank = parseInt(el.attr('rank'));

      if($rank > 0) {
        tthtml('<span class="ttF3">' + data.ranks[$rank-1] + '</span><br/><br/>');
      }

      if(el.hasClass('gray')) {
        // Tree not active, give "warning";
        level = parseInt(el.attr('level'));
        if ($trees[data.tree]['spent'] < level * 5) {
          tthtml('<span class="ttF4">You need ' + (((level+1) * 5) - $trees[data.tree]['spent']) + ' more ranks in other traits in the ' + $trees[data.tree]['name'] + ' brand ('+ $trees[data.tree]['spent'] +'/'+ ((level + 1) * 5) +')<br/><br/>');
        } else {
          tthtml('<span class="ttF4">Requires trait<br/>'+$trees[data.tree]['traits'][data.requires[0]]['name'] + ' at rank ' + data.requirerank[0] + '<br/><br/>');
        }
      }

      if($rank < data.maximum) {
        tthtml('<span class="ttF2">'+(data.tree == $activeTree ? 1 : 2)+' Point to next rank</span><br/>');
      }
      $.each(data.ranks, function(rank, label) {
        if(rank >= $rank) {
          tthtml('<br/><span class="ttF3">Rank ' + (rank+1) + '</span><br/>');
          tthtml(label + "<br/>");
        }
      });
    break;
    case 'bonusTrait':
      bonusid = parseInt(el.data('bonus-id')) + 1;
      tree = $trees[($activeTree != null) ? $activeTree : parseInt(el.parents('.tt-tree').data('tree-id'))];
      notearned = (!tree['spent'] || tree['spent'] < bonusid * 5);

      tthtml('<div class="ttImg icon" style="background-position: '+el.css('backgroundPosition')+'"></div>');
      tthtml('<div class="ttName"><span class="ttF9">'+data.name+'</span></div>');
      tthtml('<span class="ttF3">' + $activeClass + '</span><br/>');
      tthtml('<span class="ttF9">' + (notearned ? "Not earned" : "Earned") + '</span><br/><br/>');
      tthtml(data.desc + '<br/><br/>');

      if(notearned) {
        tthtml('<span class="ttF4">You need '+(!tree['spent'] ? (bonusid * 5) : ((bonusid * 5) - tree['spent']))+' more ranks earned in the whole tree ('+(tree['spent'] || 0)+'/'+(bonusid * 5)+')</span>');
      }
    break;
  }
  $ttCancelled = false;
  el.on('mouseleave', function(){
    $ttCancelled = true;
    $('#tt-tooltip').hide();
  });
  setTimeout(function() {if(!$ttCancelled){$('#tt-tooltip').fadeIn('fast'); positionTooltip(e);}}, 100);
}

function positionTooltip(e) {
  var m = 24;
  left = (e.pageX < $(document).width()/2) ? e.pageX + m : e.pageX - (240 + m);
  tt_top = (e.pageY + ($('#tt-tooltip').height() + 75) > $(window).scrollTop() + $(window).height()) ? ($(window).scrollTop() + $(window).height()) - ($('#tt-tooltip').height() + 65) : (e.pageY + m);
  $('#tt-tooltip').css({left: left, top: tt_top});
}

function tthtml(html) {
  $('#tt-tooltip').html($('#tt-tooltip').html() + html);
}
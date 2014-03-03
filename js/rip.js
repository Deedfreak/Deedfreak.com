  var b1 = "<br/>";
  var b2 = "<br/><br/>";
  function TR(a){return "";} //RS(3,"Rank "+a)+b1}
  function RS(a,b){return "<span class='ttF"+a.toString()+"'>"+b+"</span>"}
  var cStr="% of Main-hand + bonus Damage;Cost: [?] Power;Melee Skill;Ranged Skill;% of Ranged + bonus Damage;% of Ranged Damage;Cost: [?] Morale".split(";");
  function TTReturnWardenMinis(a){for(var b=" ",e=0;e<a.length;e++)b+="<div class='ttMiniIcon' style='background-image: url(\"img/lttpWardenMini.png\"); background-position: "+-14*a[e]+"px 0px'></div> ";return b}
  function TTReturnRKMinis(a){for(var b=" ",e=0;e<a.length;e++)b+="<div class='ttMiniIconRK' style='background-image: url(\"img/lttpRKMini.png\"); background-position: "+-16*a[e]+"px 0px'></div> ";return b}

  $classid = 5;
  $("section").html("");
  function d(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/  /g, "&nbsp;&nbsp;");
  }

  function addText(t) {$("section").html($("section").html() + d(t) + "<br/>");}

  function loopBonus(b) {
    $.each(b, function(k, v) {
      addText('      array(');
      addText('      "name" => "'+v.n+'",');
      addText('      "desc" => "<span class="ttF11">'+v.tS[0]+'</span>'+v.tt1()+'",');
      if(v.linkSkill) {
        addText('      "skills" => array('+v.linkSkill.toString()+'), ');
      }
      addText('       ),');
    });
  }

  function loopTraits(i) {
    $.each(traits[i], function(index, t) {
      if(t.n != "") {
        addText('      array(');
        addText('        "name" => "'+t.n+'",');
        addText('        "label" => "'+t.tS[0]+'",');
        addText('        "maximum" => "'+t.tM+'",');
        var rank_labels = Array();
        for(j = 1;j<=t.tM;j++) {
          rank_labels.push('"'+t.tt1(j)+'"');
        }
        addText('        "ranks" => array('+rank_labels.toString()+'),');
        if(t.uT) {
          var unlock = Array();
          for(j = 1; j <= t.uT.length/3; j++) {
            unlock.push(t.uT[j*3-1]);
          }
        addText('        "unlocks" => array('+unlock.toString()+'),');
        addText('        "unlockrank" => array('+t.uR.toString()+'),');
        }
        if(t.linkSkill) {
        addText('        "skills" => array('+t.linkSkill.toString()+'),');
        }
        if(t.rT) {
          var require = Array();
          for(j = 1; j <= t.rT.length/3; j++) {
            require.push(t.rT[j*3-1]);
          }
        addText('        "requires" => array('+require.toString()+'),');
        addText('        "requirerank" => array('+t.rR.toString()+'),');
        }
        addText('       ),');        
      } else {
        addText('      array(),');
      }
    });
  }


  addText('$trees['+$classid+'] = array(');
  $.each(trees, function(k,v){
    addText('  array(');
    addText('    "name" => "'+v.n+'", ');
    addText('    "header" => "'+v.head+'", ');
    addText('    "bonus" => "'+v.tt1()+'", ');
    addText('    "skills" => array('+v.skills.toString()+'), ');
    addText('    "bonustraits" => array(');
    loopBonus(v.bonuses);
    addText('    ),');
    addText('    "traits" => array(');
    loopTraits(k);
    addText('    ),');
    addText('  ),');
  });
  addText(');');

  addText('$skills['+$classid+'] = array(');
  $.each(skills, function(k,s){
    addText('  array(');
    addText('    "name" => "'+s.n+'", ');
    if(s.range) {
    addText('    "range" => "'+s.range+'", ');
    }
    addText('    "description" => "'+s.tt1()+'", ');
    addText('  ),');
  });
  addText(');');


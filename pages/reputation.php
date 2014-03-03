<?php
// Reputation functions

function parse_faction($tpl, $faction, $id, $sorted) {
  $tpl->assign('faction', 'faction', $faction);
  $tpl->assign('faction', 'id', $id);

  $deedtpl = new Template('templates/deed-list.tpl');
  for($i = 0; $i < sizeof($sorted[$id])+1; $i++) {
    if(isset($sorted[$id][$i])) {
      $deedtpl = parse_deed($sorted[$id][$i], $deedtpl);
    }
  }
  $tpl->assign('faction', 'deeds', $deedtpl->implement());
  $tpl->parse('faction');

  return $tpl;
}

function parse_reputation_template() {
  global $D, $T, $menu, $factions;


  if(isset($_SESSION['loggedin'])) {
    $deeds = $D->getALL("SELECT d.*, c.char_id as completed FROM lotro_deeds as d LEFT OUTER JOIN lotro_deed_completed as c ON c.char_id = ? AND c.deed_id = d.id WHERE tab = 4", $_SESSION['active_char']['id']);
  } else {
    $deeds = $D->getAll("SELECT * FROM lotro_deeds WHERE tab = 4");
  }
  $sorted = array();
  $completed = 0;
  foreach($deeds as $deed) {
    if($deed['faction']) {
      if(!isset($sorted[$deed['faction']])) {$sorted[$deed['faction']] = array();}
      $sorted[$deed['faction']][$deed['faction_rank']] = $deed;
    } else {
      if(!isset($sorted['misc'])) {$sorted['misc'] = array();}
      $sorted['misc'][] = $deed;
    }
    if(isset($deed['completed']) && $deed['completed']) {
      $completed++;
    }
  }

  $tpl = new Template('templates/reputation.tpl');
  $tpl = subnav($menu["CRE"], $tpl, "Reputation");
  $tpl->assign('main', 'title', "Reputation");
  $tpl->assign('main', 'tab_id', 4);

  $tpl->assign('main', 'percent', round(100/sizeof($deeds)*$completed));

  $tpl = parse_faction($tpl, 'Miscellaneous', 'misc', $sorted);
  $tpl = parse_faction($tpl, 'Tasks', 99, $sorted);

  foreach($factions as $faction => $id) {
    $tpl = parse_faction($tpl, $faction, $id, $sorted);
  }



  $tpl->parse('main');
  $T->assign('main', 'content', $tpl->implement());
  $T->parse('main');
  $T->parse();
}

?>
<?php
function virtues($virtue = null) {
  global $T, $D, $menu, $virtues;

  $tpl = new Template('templates/virtues.tpl');
  foreach($virtues as $virt => $id) {
    if($virtue == $virt) {
      $tpl->parse('subnav-active');
    }
    //$tpl->assign('subnav', 'page', $page['slug']);
    //$tpl->assign('subnav', 'tab', urlencode($child['name']));
    $tpl->assign('subnav', 'name', $virt);
    $tpl->assign('subnav', 'virtue', $virt);
    $tpl->parse('subnav');
  }

  if($virtue) {
    $id = $virtues[$virtue];

    if(isset($_SESSION['loggedin'])) {
      $deeds = $D->getAll('SELECT d.*, c.char_id as completed FROM lotro_deeds as d LEFT OUTER JOIN lotro_deed_completed as c ON c.deed_id = d.id AND c.char_id = ? WHERE d.virtue = ? ', $_SESSION['active_char']['id'], $id);
    } else {
      $deeds = $D->getAll('SELECT * FROM lotro_deeds WHERE virtue = ?', $id);
    }
    $tpl = parse_deeds($deeds, $tpl, true);
    $tpl->assign('main', 'virtue', $virtue . " (" . sizeof($deeds) . ")");
  } else {
    foreach($virtues as $virt => $id) {
      $tpl->assign('overview', 'virtue', $virt);
      $tpl->parse('overview');
    }

    $tpl->assign('main', 'virtue', 'overview');
  }
  $tpl->parse('main');
  $T->assign('main', 'content', $tpl->implement());
  $T->parse('main');
  $T->parse();
}
?>
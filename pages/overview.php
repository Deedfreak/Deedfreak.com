<?php
function overview() {
  global $T, $D, $menu, $menu_by_id, $classes_by_id, $races, $races_by_id;

  $tpl = new Template('templates/overview.tpl');
  $tpl->assign('main', 'char_name', $_SESSION['active_char']['name']);
  $tpl->assign('main', 'race', $races[$races_by_id[$_SESSION['active_char']['race']]]['short']);
  $tpl->assign('main', 'class', $classes_by_id[$_SESSION['active_char']['class']]);
  $tpl->assign('main', 'world', $_SESSION['active_char']['world']);

  // Statistics
  $total_deeds = $D->getAll("SELECT COUNT(d.id) as total, d.page, COUNT(c.char_id) as completed FROM lotro_deeds as d LEFT OUTER JOIN lotro_deed_completed AS c ON c.deed_id = d.id AND c.char_id = ? GROUP BY d.page", $_SESSION['active_char']['id']);
  foreach($total_deeds as $d) {
      $tpl->assign("pageStats", "total", $d['total']);
      $tpl->assign("pageStats", "completed", $d['completed']);
      $tpl->assign("pageStats", "page", $menu[$menu_by_id[$d['page']]]['name']);
      $tpl->parse("pageStats");
  }

  $tpl->parse("main");

  $T->assign('main', 'content', $tpl->implement());
  $T->parse('main');
  $T->parse();
}
?>
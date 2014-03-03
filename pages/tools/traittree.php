<?php
function traittree() {
  global $T, $classes;

  $tpl = new Template('templates/traittree.tpl');
  foreach($classes as $class) {
    $tpl->assign('subnav', 'class', $class['name']);
    $tpl->assign('class-select', 'class', $class['name']);
    if(isset($_SESSION['loggedin']) && $class['id'] == $_SESSION['active_char']['class']) {
      $tpl->parse('subnav-active');
    }
    $tpl->parse('subnav');
    $tpl->parse('class-select');
  }
  for($i = 0; $i<3; $i++) {
    $tpl->assign('tree', 'id', $i);
    $tpl->assign('tree2', 'id', $i);
    $tpl->parse('tree');
    $tpl->parse('tree2');
  }

  $tpl->parse('main');
  $T->assign('main', 'content', $tpl->implement());
  $T->parse('main');
  $T->parse();
}
?>
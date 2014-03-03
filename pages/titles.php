<?php
function titles() {
  global $T, $title_sections;

  $tpl = new Template("templates/titles.tpl");

  /*foreach($title_sections as $section => $id) {
    $tpl->assign('overview', 'section_link', urlencode($section));
    $tpl->assign('overview', 'section', $section);
    $tpl->parse('overview');
    $tpl->assign('subnav', 'section', $section);
    $tpl->assign('subnav', 'section_link', urlencode($section));
    $tpl->parse('subnav');
  }*/
  $tpl->parse("main");

  $T->assign('main', 'content', $tpl->implement());
  $T->parse('main');
  $T->parse();
}
?>
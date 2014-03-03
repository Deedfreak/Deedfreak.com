<?php
$router->mount('/stable', function() use ($router) {
  $router->get("/", function() {
    global $T, $stable_sections_by_id;

    $tpl = new Template('templates/stable.tpl');
    foreach($stable_sections_by_id as $section) {
      $tpl->assign('section', 'section_link', urlencode($section));
      $tpl->assign('section', 'section', $section);
      $tpl->parse('section');
      $tpl->assign('subnav', 'section_link', urlencode($section));
      $tpl->assign('subnav', 'section', $section);
      $tpl->parse('subnav');
    }
    $tpl->parse('overview');
    $tpl->parse('main');

    $T->assign('main', 'content', $tpl->implement());
    $T->parse('main');
    $T->parse();
  });

  $router->get("/([^/]+)", function($section){
    global $T, $D, $stable_sections, $stable_sections_by_id;

    $section = urldecode($section);

    $tpl = new Template('templates/stable.tpl');
    foreach($stable_sections_by_id as $sect) {
      if($section == $sect) {
        $tpl->parse('subnav-active');
      }
      $tpl->assign('subnav', 'section_link', urlencode($sect));
      $tpl->assign('subnav', 'section', $sect);
      $tpl->parse('subnav');
    }

    $mounts = $D->getAll("SELECT * FROM lotro_deed_mounts WHERE section = ?", $stable_sections[$section]);
    foreach($mounts as $mount) {
      $tpl->assign('list', 'id', $mount['id']);
      $tpl->assign('list', 'name', $mount['name']);
      $tpl->assign('list', 'icon', $mount['icon']);
      $tpl->parse('list');
    }

    $tpl->parse('main');

    $T->assign('main', 'content', $tpl->implement());
    $T->parse('main');
    $T->parse();

  });
});  
?>
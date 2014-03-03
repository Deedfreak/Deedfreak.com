<?php
$router->mount('/deeds', function() use ($router) {
  
  $router->get("/", function() {
    global $T, $menu;

    $tpl = new Template('templates/deeds-overview.tpl');
    foreach($menu as $page_link => $page) {
      $tpl->assign('page', 'page', $page['name']);
      foreach($page['children'] as $tab) {
        $tpl->assign('tab', 'tab', $tab['name']);
        $tpl->assign('tab', 'tab_link', urlencode($tab['name']));
        $tpl->assign('tab', 'page_link', urlencode($page_link));
        $tpl->parse('tab');
      }
      $tpl->parse('page');
    }
    $tpl->parse('main');
    $T->assign('main', 'content', $tpl->implement());
    $T->parse('main');
    $T->parse();    
  });

  $router->get("/(\w+)", function($page) {
    deeds($page);
  });

  $router->get("/CRE/Reputation", function() {
    parse_reputation_template();
  });

  $router->get("/(\w+)/([^/]+)", function($page, $tab) {
    deeds($page, urldecode($tab));
  });

});
?>
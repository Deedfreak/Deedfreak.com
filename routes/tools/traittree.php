<?php
$router->mount('/tools', function() use ($router) {
  $router->get("/trait-tree-spender", function() {
    traittree();
  });

  $router->get("/trait-tree-spender/class/([^/]+)", function($class) {
    global $classes;
    if(!isset($classes[$class])) exit;
    header('Content-type: application/json');
    require_once($_SERVER['DOCUMENT_ROOT'].'/pages/tools/data/trees.php');
    $traits = 0;
    foreach($trees[$classes[$class]['id']] as $k => $tree) {
      foreach($tree['traits'] as $id => $trait) {
        if(isset($trait['name'])) {
          $trees[$classes[$class]['id']][$k]['traits'][$id]['id'] = $id;
          $trees[$classes[$class]['id']][$k]['traits'][$id]['tree'] = $k;
          $traits++;
        }
      }
    }
    echo json_encode(array(
      'trees' => $trees[$classes[$class]['id']], 
      'skills' => $skills[$classes[$class]['id']],
      'traits' => $traits));
  });
});
?>
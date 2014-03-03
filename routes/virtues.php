<?php

$router->mount('/virtues', function() use ($router) {

  $router->get("/", function() {
    virtues();
  });
  
  $router->get("/([^/]+)", function($virtue) {
    virtues($virtue);
  });
});

?>
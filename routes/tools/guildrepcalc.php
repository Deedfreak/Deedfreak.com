<?php
$router->get("/tools/guild-rep-calculator", function() {
  global $T;

  $tpl = new Template('templates/guildrepcalc.tpl');
  $tpl->parse('main');

  $T->assign('main', 'content', $tpl->implement());
  $T->parse('main');
  $T->parse();
});
?>
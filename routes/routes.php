<?php
function pre() {
  global $T, $classes_by_id;

  if(isset($_SESSION['loggedin'])) {
    returning_user();
  }

  if(isset($_SESSION['loggedin'])) {

    foreach($_SESSION['characters'] as $char) {
      $T->assign('characterlist', 'class', $classes_by_id[$char['class']]);
      $T->assign('characterlist', 'id', $char['id']);
      $T->assign('characterlist', 'charname', $char['name']);
      $T->parse('characterlist');
    }

    $T->assign('main', 'loggedin', 'loggedin');
    $T->assign('loggedin', 'charname', $_SESSION['active_char']['name']);
    $T->assign('loggedin', 'class', $classes_by_id[$_SESSION['active_char']['class']]);
    $T->parse('loggedin');
  } else {
    $T->assign('main', 'loggedin', '');
    $T->parse('notloggedin');
  } 

}

$router = new Router();

$router->before('GET', '/.*', function() {
  pre();
});

$router->get("/", function() {
  global $T;
  $T->assignTemplate('main', 'content', 'templates/home.tpl');
  $T->parse('main');
  $T->parse();
});

$router->get("/about", function() {
  global $T;

  $T->assignTemplate('main', 'content', 'templates/about.tpl');
  $T->parse('main');
  $T->parse();
});

$router->post("/about", function() {
  global $T, $contact_mailaddress;
  mail($contact_mailaddress, "Deed freak feedback", $_POST['message']);

  pre();

  $tpl = new Template('templates/about.tpl');
  $tpl->parse('messageSent');
  $tpl->parse('main');

  $T->assign('main', 'content', $tpl->implement());
  $T->parse('main');
  $T->parse();
});



$router->get("/titles", function() {
  titles();
});

$router->get("/register", function() {
  global $T;

  $T->assignTemplate('main', 'content', 'templates/register.tpl');
  $T->parse('main');
  $T->parse();
});

$router->post("/register", function() {
  register_user($_POST);
});

$router->get("/login", function() {
  global $T;

  $T->assignTemplate('main', 'content', 'templates/login.tpl');
  $T->parse('main');
  $T->parse();
});

$router->post("/login", function() {
  login_user($_POST);
});

$router->before('GET|POST', '/add-character', function() {
  if(!isset($_SESSION['loggedin'])) {
    header("Location: /login");
    exit;
  }
});

$router->get("/add-character", function() {
  global $T;

  $T->assignTemplate('main', 'content', 'templates/addcharacter.tpl');
  $T->parse('main');
  $T->parse();
});

$router->post("/add-character", function() {
  add_character($_POST);

  header("Location: /overview");
  exit;
});

$router->get("/character/(\d+)", function($id) {
  global $D;

  $active_char = null;
  foreach($_SESSION['characters'] as $char) {
    if($char['id'] == $id) {
      $_SESSION['active_char'] = $char;
      $D->run("UPDATE lotro_deed_users SET active_char = ? WHERE id = ?", $id, $_SESSION['userid']);
      break;
    }
  }

  header("Location: /overview");
  exit;
});

$router->get("/logout", function() {
  logout();

  header("Location: /");
  exit;
});


$router->get('/overview', function() {
  overview();
});

require_once($_SERVER['DOCUMENT_ROOT'].'/routes/deeds.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/routes/virtues.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/routes/complete.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/routes/stable.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/routes/tools/tools.php');

$router->run();
?>
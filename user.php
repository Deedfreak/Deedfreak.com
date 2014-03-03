<?php
function register_user($user) {
  global $T, $D;

  $tpl = new Template('templates/register.tpl');

  foreach($user as $k => $v) {
    $user[$k] = trim($v);
  }

  if($user['username'] == "" || $user['password'] == "" || $user['name'] == "" || $user['reg_race'] > 4 || $user['reg_class'] > 9) {
    $tpl->parse('error');
  } else {
    $D->run("INSERT INTO lotro_deed_users (`username`, `password`) VALUES (?,?)", $user['username'], md5(md5($user['password']) . md5('supersecret')));
    $errors = $D->getErrorInfo();

    if($errors[1] == 1062) {
      $tpl->parse('error');
    } else {
      $userid = $D->lastInsertId();

      $D->run("INSERT INTO lotro_deed_characters (`name`, `race`, `class`, `world`,`user`) VALUES (?,?,?,?,?)", $user['name'], $user['reg_race'], $user['reg_class'], $user['reg_world'], $userid);
      $charid = $D->lastInsertId();

      $D->run("UPDATE lotro_deed_users SET active_char = ? where id = ?", $charid, $userid);

      $active_char = array('id' => $charid, 'name' => $user['name'], 'class' => $user['reg_class'], 'race' => $user['reg_race'], 'world' => $user['reg_world']);
      $time = time();
      $D->run("UPDATE lotro_deed_users SET secret_key = ?, secret_date = ? WHERE userid = ?", session_id(), $time, $userid);

      silent_login($user['username'], $time, $userid, $active_char, array($active_char));

      header("Location: /overview");
    }

  }

  $tpl->parse('main');

  $T->assign('main', 'content', $tpl->implement());
  $T->parse('main');
  $T->parse();
  exit;
}

function add_character($char) {
  global $D;
  $D->run("INSERT INTO lotro_deed_characters (`name`, `race`, `class`, `world`,`user`) VALUES (?,?,?,?,?)", $char['name'], $char['reg_race'], $char['reg_class'], $char['reg_world'], $_SESSION['userid']);
  $charid = $D->lastInsertId();
  array_push($_SESSION['characters'], array('id' => $charid, 'name' => $char['name'], 'class' => $char['reg_class'], 'race' => $char['reg_race'], 'world' => $char['reg_world']));
}

function silent_login($username, $time, $userid, $active_char, $characters) {
  // Set cookies and sessions
  setcookie('username', $username, time()+25920000); // Expire in 300 days
  setcookie('_sessionid', session_id(), time()+25920000);
  setcookie('_sessiontime', $time, time()+25920000);
  $_SESSION['userid'] = $userid;
  $_SESSION['active_char'] = $active_char;
  $_SESSION['loggedin'] = true;
  $_SESSION['characters'] = $characters;
}

function login_user($user) {
  global $D, $T;
  // Check user details
  // Set last session-id and date and username in database
  // Set last md5(session-id) and date and username as cookie
  // Set sessions
  $user = $D->getOne('SELECT u.id as userid, c.id as charid, u.*, c.* FROM lotro_deed_users as u LEFT JOIN lotro_deed_characters as c ON c.id = u.active_char WHERE u.username = ? AND u.password = ?', $user['username'], md5(md5($user['password']) . md5('supersecret')));

  if(!$user) {
    $tpl = new Template('templates/login.tpl');
    $tpl->parse('error');
    $tpl->parse('main');
    $T->assign('main', 'content', $tpl->implement());
    $T->parse('main');
    $T->parse();
    exit;
  } else {
    $active_char = array('id' => $user['charid'], 'name' => $user['name'], 'class' => $user['class'], 'race' => $user['race'], 'world' => $user['world']);
    $time = time();
    $D->run("UPDATE lotro_deed_users SET secret_key = ?, secret_date = ? WHERE userid = ?", session_id(), $time, $user['userid']);
    $characters = $D->getAll('SELECT * FROM lotro_deed_characters WHERE user = ?', $user['userid']);
    silent_login($user['username'], $time, $user['userid'], $active_char, $characters);
  }

  header("Location: /overview");
}

function returning_user() {
  if($_COOKIE['_sessionid'] && $_COOKIE['_sessiontime']) {

  }
  // Check last session-id and date for username. If valid, silent_login
}

function logout() {
  unset($_SESSION['loggedin']);
  unset($_SESSION['active_char']);
  unset($_SESSION['characters']);
  unset($_COOKIE['username']);
  unset($_COOKIE['_sessionid']);
  unset($_COOKIE['_sessiontime']);
  setcookie('username', $username, 1); // Expire in 300 days
  setcookie('_sessionid', session_id(), 1);
  setcookie('_sessiontime', $time, 1);
}
?>
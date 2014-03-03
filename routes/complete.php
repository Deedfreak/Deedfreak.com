<?php
function completed($error) {
    header('Content-type: application/json');
    if($error[0] === '00000') {
      echo json_encode(array('success' => true));
    } else {
      echo json_encode(array('error' => $error));
    }
    exit;
}

$router->mount('/complete', function() use ($router) {

  $router->post("/deed_tab", function() {
    global $D;

    if(!isset($_SESSION['loggedin'])) {
      exit;
    }

    switch($_POST['id']) {
      case 998:
        $and = " hidden = ?";
        $id = 1;
      break;

      case 999:
        $and = " meta = ?";
        $id = 1;
      break;
      default:
        $id = $_POST['id'];
        $and = "d.tab = ?";
    }

    $ids = $D->getAll('SELECT d.id FROM lotro_deeds as d LEFT OUTER JOIN lotro_deed_completed as c ON c.deed_id = d.id AND c.char_id = ? WHERE c.char_id is null AND ' . $and . ' AND (d.race = ? OR d.race IS NULL) AND (d.class = ? OR d.class IS NULL)', $_SESSION['active_char']['id'], $id, $_SESSION['active_char']['race'], $_SESSION['active_char']['class']);

    foreach($ids as $id) {
      $D->run("INSERT INTO lotro_deed_completed (char_id, deed_id) VALUES (?,?)", $_SESSION['active_char']['id'], $id['id']);
      $error = $D->getErrorInfo();
      if($error[0] !== '00000') {
        break;
      }
    }

    completed($error);
  });


  $router->post('/deed', function() {
    global $D;

    if(!isset($_SESSION['loggedin'])) {
      exit;
    }

    if($_POST['complete'] && $_POST['complete'] == "true") {
      if($_POST['include'] && sizeof($_POST['include']) > 0) {
        $ids = explode(",", $_POST['include']);
        if(sizeof($ids) > 50) exit;
        foreach($ids as $id) {
          if(!is_integer((int)$id)) {
            exit;
          }
        }

        $completed = $D->getAll('SELECT deed_id as id FROM lotro_deed_completed WHERE char_id = ? AND deed_id in ('.implode(',', $ids).')', $_SESSION['active_char']['id']);

        if(sizeof($completed) > 0) {
          $newids = array();
          foreach($completed as $deed) {
            if(!in_array($deed['id'], $ids)) {
              $newids[] = $deed['id'];
            }
          }
          unset($ids);
          $ids = $newids;
        }

        $parameters = array($_SESSION['active_char']['id'], $_POST['id']);
        $questionmarks = array('(?,?)');

        foreach($ids as $id) {
          $parameters = array_merge($parameters, array($_SESSION['active_char']['id'], $id));
          $questionmarks[] = '(?,?)';
        }

        $q = "INSERT INTO lotro_deed_completed (char_id, deed_id) VALUES ".implode($questionmarks, ",");
        array_unshift($parameters, $q);
        call_user_func_array(array($D, 'run'), $parameters);
      } else {
        $D->run("INSERT INTO lotro_deed_completed (char_id, deed_id) VALUES (?,?)", $_SESSION['active_char']['id'], $_POST['id']);
      }
    } else {
      if($_POST['exclude'] && sizeof($_POST['exclude']) > 0) {
        $ids = explode(",", $_POST['exclude']);
        if(sizeof($ids) > 50) exit;
        foreach($ids as $id) {
          if(!is_integer((int)$id)) {
            exit;
          }
        }
        $ids[] = $_POST['id'];
        $D->run("DELETE FROM lotro_deed_completed WHERE char_id = ? AND deed_id in (".implode(",", $ids).")", $_SESSION['active_char']['id']);
      } else {
        $D->run("DELETE FROM lotro_deed_completed WHERE char_id = ? AND deed_id = ?", $_SESSION['active_char']['id'], $_POST['id']);
      }
    }

    completed($D->getErrorInfo());
  });

  $router->post('/mount', function() {
    global $D;

    if(!isset($_SESSION['loggedin'])) {
      exit;
    }

    if($_POST['complete'] && $_POST['complete'] == "true") {
      $D->run("INSERT INTO lotro_mount_completed (char_id, mount_id) VALUES (?,?)", $_SESSION['active_char']['id'], $_POST['id']);
    } else {
      $D->run("DELETE FROM lotro_mount_completed WHERE char_id = ? AND mount_id = ?", $_SESSION['active_char']['id'], $_POST['id']);
    }

    completed($D->getErrorInfo());
  });

});
?>
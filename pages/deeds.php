<?php
function parse_deed($deed, $t, $showRegion = false) {
  global $menu_children, $virtues_by_id;
  $t->assign('list', 'id', $deed['id']);
  $t->assign('list', 'name', $deed['name']);
  if($deed['title']) {
    $t->assign('listTitle', 'title', $deed['title']);
    $t->parse('listTitle');
  }
  if($deed['tp'] > 0) {
    $t->assign('listTP', 'tp', $deed['tp']);
    $t->parse('listTP');
  }
  if($deed['note']) {
    $t->assign('listNote', 'note', $deed['note']);
    $t->parse('listNote');
  }
  if($showRegion && ($deed['tab'] < 30 || $deed['tab'] > 36)) { // Virtues
    $t->assign('listRegion', 'region', $menu_children[$deed['tab']]);
    $t->parse('listRegion');
  }
  if($deed['virtue'] > 0) {
    $t->assign('listVirtue', 'virtue', $virtues_by_id[$deed['virtue']]);
    $t->assign('listVirtue', 'virtue_amount', $deed['virtue_amount']);
    $t->parse('listVirtue');        
  }
  if($deed['virtue2'] > 0) {
    $t->assign('listVirtue', 'virtue', $virtues_by_id[$deed['virtue2']]);
    $t->assign('listVirtue', 'virtue_amount', $deed['virtue2_amount']);
    $t->parse('listVirtue');        
  }
  if(isset($deed['completed']) && $deed['completed']) {
    $t->parse('completed');
  }
  if(isset($deed['include'])) {
    $t->assign('list', 'include', $deed['include']);
  }
  if(isset($deed['exclude'])) {
    $t->assign('list', 'exclude', $deed['exclude']);
  }
  $t->assign('list', 'category', $deed['category']);
  $t->parse('list');  
  return $t;
}

function parse_deeds($deeds, $tpl, $showRegion = false) {
  $t = new Template('templates/deed-list.tpl');
  $completed = 0;
  foreach ($deeds as $deed) {
    $t = parse_deed($deed, $t, $showRegion);
    if(isset($deed['completed']) && $deed['completed']) {
      $completed++;
    }
  }
  $tpl->assign('list', 'percent', round(100/sizeof($deeds)*$completed));
  $tpl->assign('list', 'list', $t->implement());
  $tpl->parse('list');
  return $tpl;
}

function deeds($page, $tab = null) {
  global $T, $D, $menu, $menu_by_id;

  $page = $menu[$page];

  if(!$page) {
    exit;
  }


  $tpl = new Template('templates/deeds.tpl');
  $tpl = subnav($page, $tpl, $tab);
  
  if($tab) {
    $tab = find_tab($page, $tab);
    if(isset($_SESSION['loggedin'])) {
      if($page['name'] == "Miscellaneous") {
        switch($tab['name']) {
          case "Hidden deeds":
            $deeds = $D->getAll('SELECT d.*, c.char_id as completed FROM lotro_deeds as d LEFT OUTER JOIN lotro_deed_completed as c ON c.deed_id = d.id AND c.char_id = ? WHERE d.hidden = 1 AND (d.race = ? OR d.race IS NULL) AND (d.class = ? OR d.class IS NULL) ORDER BY `order` DESC',$_SESSION['active_char']['id'], $_SESSION['active_char']['race'], $_SESSION['active_char']['class']);
          break;
          case "Meta deeds":
            $deeds = $D->getAll('SELECT d.*, c.char_id as completed FROM lotro_deeds as d LEFT OUTER JOIN lotro_deed_completed as c ON c.deed_id = d.id AND c.char_id = ? WHERE d.meta = 1 AND (d.race = ? OR d.race IS NULL) AND (d.class = ? OR d.class IS NULL) ORDER BY `order` DESC',$_SESSION['active_char']['id'], $_SESSION['active_char']['race'], $_SESSION['active_char']['class']);
          break;
        }
      } else {
        $deeds = $D->getAll('SELECT d.*, c.char_id as completed FROM lotro_deeds as d LEFT OUTER JOIN lotro_deed_completed as c ON c.deed_id = d.id AND c.char_id = ? WHERE d.tab = ? AND (d.race = ? OR d.race IS NULL) AND (d.class = ? OR d.class IS NULL) ORDER BY `order` DESC',$_SESSION['active_char']['id'], $tab['id'], $_SESSION['active_char']['race'], $_SESSION['active_char']['class']);
      }
    } else {
      if($page['name'] == "Miscellaneous") {
        switch($tab['name']) {
          case "Hidden deeds":
            $deeds = $D->getAll('SELECT * FROM lotro_deeds WHERE hidden = 1 ORDER BY `order` DESC');
          break;
          case "Meta deeds":
            $deeds = $D->getAll('SELECT * FROM lotro_deeds WHERE meta = 1 ORDER BY `order` DESC');
          break;
        }
      } else {
        $deeds = $D->getAll('SELECT * FROM lotro_deeds WHERE tab = ? ORDER BY `order` DESC', $tab['id']);
      }
    }
    if(isset($tab['map'])) {
      $tpl->assign('map', 'map', $tab['map']);
      $tpl->parse('map');
    }
    $tpl = parse_deeds($deeds, $tpl);
    $tpl->assign('main', 'title', $tab['name']);
    $tpl->assign('main', 'tab_id', $tab['id']);
    $tpl->assign('deedCounter', 'amount', sizeof($deeds));
    $tpl->parse('deedCounter');
  } else {
    $tpl->assign('main', 'title', $page['name']);
    $ids = array();
    foreach($page['children'] as $child) {
      $ids[] = $child['id'];
    }
    if(isset($_SESSION['loggedin'])) {
      $where = "d.tab IN (".implode(",", $ids).")";
      $groupby = "d.tab";
      if($page['name'] == "Miscellaneous") {
        $where = "d.hidden = 1 OR d.meta = 1";
        $groupby = "d.hidden, d.meta";
      }
      $d = $D->getAll("SELECT d.tab, COUNT( d.id ) AS deeds, COUNT( c.deed_id ) AS completed, 
        COUNT( IF(d.category = 1, 1, null) ) as category_1, 
        COUNT( IF(d.category = 1 AND c.deed_id, 1, null) ) as category_1_completed, 
        COUNT( IF(d.category = 2, 1, null) ) as category_2, 
        COUNT( IF(d.category = 2 AND c.deed_id, 1, null) ) as category_2_completed, 
        COUNT( IF(d.category = 3, 1, null) ) as category_3, 
        COUNT( IF(d.category = 3 AND c.deed_id, 1, null) ) as category_3_completed, 
        COUNT( IF(d.category = 4, 1, null) ) as category_4, 
        COUNT( IF(d.category = 4 AND c.deed_id, 1, null) ) as category_4_completed, 
        COUNT( IF(d.category = 5, 1, null) ) as category_5, 
        COUNT( IF(d.category = 5 AND c.deed_id, 1, null) ) as category_5_completed, 
        COUNT( IF(d.category = 6, 1, null) ) as category_6, 
        COUNT( IF(d.category = 6 AND c.deed_id, 1, null) ) as category_6_completed,
        d.meta, d.hidden
        FROM `lotro_deeds` AS d LEFT OUTER JOIN lotro_deed_completed AS c ON c.deed_id = d.id AND c.char_id = ? WHERE " . $where . " AND (d.race = ? OR d.race IS NULL) AND (d.class = ? OR d.class IS NULL) GROUP BY " . $groupby . " ORDER BY `order` DESC", $_SESSION['active_char']['id'], $_SESSION['active_char']['race'], $_SESSION['active_char']['class']);
    } else {
      $where = "d.tab IN (".implode(",", $ids).")";
      $groupby = "d.tab";
      if($page['name'] == "Miscellaneous") {
        $where = "d.hidden = 1 OR d.meta = 1";
        $groupby = "d.hidden, d.meta";
      }
      $d = $D->getAll("SELECT d.tab, COUNT( d.id ) AS deeds, 0 AS completed, 
        COUNT( IF(d.category = 1, 1, null) ) as category_1, 
        COUNT( IF(d.category = 2, 1, null) ) as category_2, 
        COUNT( IF(d.category = 3, 1, null) ) as category_3, 
        COUNT( IF(d.category = 4, 1, null) ) as category_4, 
        COUNT( IF(d.category = 5, 1, null) ) as category_5, 
        COUNT( IF(d.category = 6, 1, null) ) as category_6, 
        d.meta, d.hidden
        FROM `lotro_deeds` AS d WHERE " . $where . " GROUP BY " . $groupby . " ORDER BY `order` DESC");
    }

    foreach($d as $v) {
      $tabs[$v['tab']] = $v;
      if($v['hidden'] == 1) {
        $tabs['998'] = $v;
      }
      if($v['meta'] == 1) {
        $tabs['999'] = $v;
      }
    }
    if(isset($page['map'])) {
      foreach($page['children'] as $tab) {
        $tpl->assign('tabs', 'x', $tab['coordinates']['x']);
        $tpl->assign('tabs', 'y', $tab['coordinates']['y']);
        $tpl->assign('tabs', 'percent', round(100/$tabs[$tab['id']]['deeds'] * $tabs[$tab['id']]['completed']));
        $tpl->assign('tabs', 'completed', $tabs[$tab['id']]['completed']);
        $tpl->assign('tabs', 'total', $tabs[$tab['id']]['deeds']);
        $tpl->assign('tabs', 'tab_link', urlencode($tab['name']));
        $tpl->assign('tabs', 'page_link', urlencode($menu_by_id[$page['id']]));
        $tpl->assign('tabs', 'name', $tab['name']);
        $tpl->parse('tabs');
      }
      $tpl->assign('page_map', 'map', $page['map']);
      $tpl->parse('page_map');
    } else {
      foreach($page['children'] as $tab) {
        $tpl->assign('tab', 'percent', round(100/$tabs[$tab['id']]['deeds'] * $tabs[$tab['id']]['completed']));
        $tpl->assign('tab', 'completed', $tabs[$tab['id']]['completed']);
        $tpl->assign('tab', 'total', $tabs[$tab['id']]['deeds']);
        $tpl->assign('tab', 'tab_link', urlencode($tab['name']));
        $tpl->assign('tab', 'page_link', urlencode($menu_by_id[$page['id']]));
        $tpl->assign('tab', 'name', $tab['name']);
        $tpl->parse('tab');
      }

      $cat = array();
      foreach($d as $v) {
        foreach($v as $k => $t) {
          if(!isset($cat[$k])) { $cat[$k] = 0; }
          $cat[$k] += $t;
        }
      }

      $total = 0;
      $labels = array('', 'Event', 'Explorer', 'Lore', 'Reputation', 'Slayer', 'Class');

      for( $i = 1; $i <= 6; $i ++ ) {
        $total += $cat['category_' . $i];
      }

      for( $i = 1; $i <= 6; $i ++ ) {
        $d = $cat['category_' . $i];
        $tpl->assign('breakdown', 'total_percent', 100/$total*$d);
        $completed = isset($cat['category_' . $i . '_completed']) ? $cat['category_' . $i . '_completed'] : 0;
        $tpl->assign('breakdown', 'completed_percent', 100/$total*$completed);
        $tpl->assign('breakdown', 'label', $labels[$i]);
        $tpl->assign('breakdown', 'completed', $completed);
        $tpl->assign('breakdown', 'total', $d);
        $tpl->parse('breakdown');
      }

      $tpl->parse('overview');
    }
  }

  $tpl->parse('main');
  $T->assign('main', 'content', $tpl->implement());
  $T->parse('main');
  $T->parse();
}
?>
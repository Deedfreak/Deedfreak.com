<?php
session_start();
require_once('classes/cPDO.class.php');
require_once('classes/template.class.php');
require_once('classes/router.class.php');
require_once('menu.php');
require_once('user.php');
require_once('data.php');

$D = new cPDO();
$T = new Template('templates/main.tpl');

$contact_mailaddress = "";

foreach($menu as $key => $item) {
	$T->assign('deedsub-nav', 'name', $item['name']);
	$T->assign('deedsub-nav', 'link', $key);
	$T->parse('deedsub-nav');
}

function subnav($page, $tpl, $tab) {
	foreach($page['children'] as $child) {
		if($tab == $child['name']) {
			$tpl->parse('subnav-active');
		}
		$tpl->assign('subnav', 'page', $page['slug']);
		$tpl->assign('subnav', 'tab', urlencode($child['name']));
		$tpl->assign('subnav', 'name', $child['name']);
		$tpl->parse('subnav');
	}
	return $tpl;
}

function find_tab($page, $tab) {
	foreach($page['children'] as $child) {
		if($child['name'] == $tab) {
			return $child;
		}
	}
}

require_once('pages/pages.php');
require_once('routes/routes.php');
?>
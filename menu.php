<?php
$menu = array(
  "CRE" =>
  array(
    'id' => 1,
    'slug' => 'CRE',
    'name' => 'Class/Race/Epic',
    'children' => array(
        array('id' => 1, 'name' => "Class"),
        array('id' => 2, 'name' => "Racial & Social"),
        array('id' => 3, 'name' => "Epic"),
        array('id' => 4, 'name' => "Reputation"))),

  "Eriador" =>
  array(
    'id' => 2,
    'slug' => 'Eriador',
    'name' => 'Eriador',
    'map' => 'Eriador_map.jpg',
    'children' => array(
        array('id' => 5, 
            'name' => "Bree-land", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/bree-land.jpg",
            'coordinates' => array('x' => '61', 'y' => '45')),
        array('id' => 6, 
            'name' => "The Shire", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/theshire.jpg",
            'coordinates' => array('x' => '47', 'y' => '45')),
        array('id' => 7, 
            'name' => "Ered Luin", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/eredluin.jpg",
            'coordinates' => array('x' => '32', 'y' => '31')),
        array('id' => 8, 
            'name' => "North Downs", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/northdowns.jpg",
            'coordinates' => array('x' => '64', 'y' => '27')),
        array('id' => 9, 
            'name' => "Lone-lands", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/lonelands.jpg",
            'coordinates' => array('x' => '71', 'y' => '42')),
        array('id' => 10, 
            'name' => "Trollshaws", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/trollshaws.jpg",
            'coordinates' => array('x' => '89', 'y' => '40.5')),
        array('id' => 11, 
            'name' => "Misty Mountains", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/mistymountains.jpg",
            'coordinates' => array('x' => '91', 'y' => '25')),
        array('id' => 12, 
            'name' => "Evendim", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/evendim.jpg",
            'coordinates' => array('x' => '48', 'y' => '35')),
        array('id' => 14, 
            'name' => "Ettenmoors",
            'coordinates' => array('x' => '80', 'y' => '30')),
        array('id' => 13, 
            'name' => "Angmar", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/angmar.jpg",
            'coordinates' => array('x' => '73', 'y' => '20')),
        array('id' => 15, 
            'name' => "Forochel", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/forochel.jpg",
            'coordinates' => array('x' => '43', 'y' => '15')),
        array('id' => 16, 
            'name' => "Eregion", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/eregion.jpg",
            'coordinates' => array('x' => '86', 'y' => '61')),
        array('id' => 17, 
            'name' => "Enedwaith", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/enedwaith.jpg",
            'coordinates' => array('x' => '81', 'y' => '75')),
        array('id' => 18, 
            'name' => "Dunland", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/dunland.jpg",
            'coordinates' => array('x' => '80', 'y' => '85')))),

  "Rhovanion" =>
  array(
    'id' => 3,
    'slug' => 'Rhovanion',
    'name' => 'Rhovanion',
    'map' => 'Rhovanion_map.jpg',
    'children' => array(
        array('id' => 19, 
            'name' => "Lothlórien", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/lothlorien.jpg",
            'coordinates' => array('x' => '37', 'y' => '34')),
        array('id' => 20, 
            'name' => "Moria", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/moria.jpg",
            'coordinates' => array('x' => '33', 'y' => '28')),
        array('id' => 21, 
            'name' => "Moria Lower Deeps", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/moria.jpg",
            'coordinates' => array('x' => '23', 'y' => '28')),
        array('id' => 22, 
            'name' => "Moria Central Halls", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/moria.jpg",
            'coordinates' => array('x' => '23', 'y' => '38')),
        array('id' => 23, 
            'name' => "Moria Upper Levels", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/moria.jpg",
            'coordinates' => array('x' => '23', 'y' => '48')),
        array('id' => 24, 
            'name' => "Southern Mirkwood", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/southernmirkwood.jpg",
            'coordinates' => array('x' => '52', 'y' => '32')),
        array('id' => 25, 
            'name' => "Great River", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/greatriver.jpg",
            'coordinates' => array('x' => '42', 'y' => '45')),
        array('id' => 26, 
            'name' => "Eastern Rohan", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/eastrohan.jpg",
            'coordinates' => array('x' => '43', 'y' => '56')),
        array('id' => 27, 
            'name' => "Wildermore", 
            'map' => "http://toarda.com/t/wp-content/gallery/deed-location-maps/wildermore.jpg",
            'coordinates' => array('x' => '44', 'y' => '66')),
        array('id' => 38, 
            'name' => "Western Rohan",
            'coordinates' => array('x' => '32', 'y' => '67')))),

  "Skirmish" =>
  array(
    'id' => 4,
    'slug' => "Skirmish",
    'name' => "Skirmish",
    'children' => array(
        array('id' => 28, 'name' => 'Skirmishes'),
        array('id' => 29, 'name' => 'Skirmish Lieutenant'))),

  "Instances" =>
  array(
    'id' => 5,
    'slug' => "Instances",
    'name' => "Instances",
    'children' => array(
        array('id' => 30, 'name' => 'Shadows of Angmar'),
        array('id' => 31, 'name' => 'Mines of Moria'),
        array('id' => 32, 'name' => 'Scourge of Khazad-dûm'),
        array('id' => 33, 'name' => 'Tower of Dol Guldur'),
        array('id' => 34, 'name' => 'In Their Absence'),
        array('id' => 35, 'name' => 'Rise of Isengard'),
        array('id' => 36, 'name' => 'The Road to Erebor'))),

  "Hobbies" =>
  array(
    'id' => 6,
    'slug' => "Hobbies",
    'name' => "Hobbies",
    'children' => array(
        array('id' => 37, 'name' => 'Fishing'))),

  "Miscellaneous" =>
  array(
    'id' => 7,
    'slug' => "Miscellaneous",
    'name' => "Miscellaneous",
    'children' => array(
        array('id' => 998, 'name' => 'Hidden deeds'),
        array('id' => 999, 'name' => 'Meta deeds')))
);

$menu_by_id = array(
    1 => "CRE",
    2 => "Eriador",
    3 => "Rhovanion",
    4 => "Skirmish",
    5 => "Instances",
    6 => "Hobbies",
    7 => "Miscellaneous"
);

$menu_children = array("","Class","Racial & Social","Epic","Reputation","Bree-land","The Shire","Ered Luin","North Downs","Lone-lands","Trollshaws","Misty Mountains","Evendim","Angmar","Ettenmoors","Forochel","Eregion","Enedwaith","Dunland","Lothlórien","Moria","Moria Lower Deeps","Moria Central Halls","Moria Upper Levels","Southern Mirkwood","Great River","Eastern Rohan","Wildermore","Skirmishes","Skirmish Lieutenant","Shadows of Angmar","Mines of Moria","Scourge of Khazad-dûm","Tower of Dol Guldur","In Their Absence","Rise of Isengard","The Road to Erebor","Fishing","Western Rohan");
?>
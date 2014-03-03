<?php

// All hardcoded data for this site
$deed_categories = array(
  1 => 'Explorer',
  2 => 'Lore',
  3 => 'Reputation',
  4 => 'Slayer',
  5 => 'Event',
  6 => 'The ale association',
  7 => 'The inn league',
  8 => 'Hobby'
);

$races = array(
  'Dwarf' => array(
    'id' => 1,
    'name' => 'Dwarf',
    "short" => "Dwarf"
  ),
  'Elf' => array(
    'id' => 2,
    'name' => 'Elf',
    "short" => "Elf"
  ),
  'Hobbit' => array(
    'id' => 3,
    'name' => 'Hobbit',
    'short' => "Hobbit"
  ),
  'Race of Man' => array(
    'id' => 4,
    'name' => 'Race of Man',
    'short' => "Man"));

$races_by_id = array("", "Dwarf", "Elf", "Hobbit", "Race of Man");

$classes = array(
  'Burglar' => array(
    'id' => 1,
    'name' => 'Burglar'
  ),
  'Captain' => array(
    'id' => 2,
    'name' => 'Captain'
  ),
  'Champion' => array(
    'id' => 3,
    'name' => 'Champion'
  ),
  'Guardian' => array(
    'id' => 4,
    'name' => 'Guardian'
  ),
  'Hunter' => array(
    'id' => 5,
    'name' => 'Hunter'
  ),
  'Lore-master' => array(
    'id' => 6,
    'name' => 'Lore-master'
  ),
  'Minstrel' => array(
    'id' => 7,
    'name' => 'Minstrel'
  ),
  'Rune-keeper' => array(
    'id' => 8,
    'name' => 'Rune-keeper'
  ),
  'Warden' => array(
    'id' => 9,
    'name' => 'Warden'
  ));

$classes_by_id = array("", "Burglar", "Captain", "Champion", "Guardian", "Hunter", "Lore-master", "Minstrel", "Rune-keeper", "Warden");

$virtues = array(
  'Charity' => 1,
  'Compassion' => 2,
  'Confidence' => 3,
  'Determination' => 4,
  'Discipline' => 5,
  'Empathy' => 6,
  'Fidelity' => 7,
  'Fortitude' => 8,
  'Honesty' => 9,
  'Honour' => 10,
  'Idealism' => 11,
  'Innocence' => 12,
  'Justice' => 13,
  'Loyalty' => 14,
  'Mercy' => 15,
  'Patience' => 16,
  'Tolerance' => 17,
  'Valour' => 18,
  'Wisdom' => 19,
  'Zeal' => 20
);

$virtues_by_id = array(
  1 => 'Charity',
  2 => 'Compassion',
  3 => 'Confidence',
  4 => 'Determination',
  5 => 'Discipline',
  6 => 'Empathy',
  7 => 'Fidelity',
  8 => 'Fortitude',
  9 => 'Honesty',
  10 => 'Honour',
  11 => 'Idealism',
  12 => 'Innocence',
  13 => 'Justice',
  14 => 'Loyalty',
  15 => 'Mercy',
  16 => 'Patience',
  17 => 'Tolerance',
  18 => 'Valour',
  19 => 'Wisdom',
  20 => 'Zeal'
);

$title_sections = array(
  "Crafting" => 1,
  "Cartographile" => 2,
  "Deed" => 3,
  "Ettenmoors" => 4,
  "Event" => 5,
  "Heritage" => 6,
  "Hobby" => 7,
  "Kinship" => 8,
  "Pedigree" => 9,
  "Quest" => 10,
  "Skirmish" => 11,
  "Slayer Deed" => 12,
  "Slayer Deed – Ancient Evil" => 13,
  "Slayer Deed – Beast" => 14,
  "Slayer Deed – Corrupted Nature" => 15,
  "Slayer Deed – Dragon-kind" => 16,
  "Slayer Deed – Evil Peoples" => 17,
  "Slayer Deed – Giant-kind" => 18,
  "Slayer Deed – Orc-kind" => 19,
  "Slayer Deed – Spiders and Insects" => 20,
  "Slayer Deed – The Dead" => 21,
  "Slayer Deed – Troll-kind" => 22,
  "Social" => 23
);

$title_sections_by_id = array(
  1 => "Crafting",
  2 => "Cartographile",
  3 => "Deed",
  4 => "Ettenmoors",
  5 => "Event",
  6 => "Heritage",
  7 => "Hobby",
  8 => "Kinship",
  9 => "Pedigree",
  10 => "Quest",
  11 => "Skirmish",
  12 => "Slayer Deed",
  13 => "Slayer Deed – Ancient Evil",
  14 => "Slayer Deed – Beast",
  15 => "Slayer Deed – Corrupted Nature",
  16 => "Slayer Deed – Dragon-kind",
  17 => "Slayer Deed – Evil Peoples",
  18 => "Slayer Deed – Giant-kind",
  19 => "Slayer Deed – Orc-kind",
  20 => "Slayer Deed – Spiders and Insects",
  21 => "Slayer Deed – The Dead",
  22 => "Slayer Deed – Troll-kind",
  23 => "Social"
);

$stable_sections_by_id = array(
  0 => "First Horse",
  1 => "Common Mounts",
  2 => "PvMP Mounts",
  3 => "Reputation Mounts",
  4 => "Special Event",
  5 => "Lootbox",
  6 => "Bounder's Bounty Mounts",
  7 => "Quest Mount",
  8 => "Meta-deed Mounts",
  9 => "Store Mounts",
  10 => "Promotional Mounts"
);

$stable_sections = array(
  "First Horse" => 0,
  "Common Mounts" => 1,
  "PvMP Mounts" => 2,
  "Reputation Mounts" => 3,
  "Special Event" => 4,
  "Lootbox" => 5,
  "Bounder's Bounty Mounts" => 6,
  "Quest Mount" => 7,
  "Meta-deed Mounts" => 8,
  "Store Mounts" => 9,
  "Promotional Mounts" => 10
);

$factions = array(
  "Algraig" => 1, 
  "Council of the North" => 2,
  "Eglain" => 3,
  "Elves of Rivendell" => 4,
  "Entwash Vale" => 5,
  "Galadhrim" => 6,
  "Grey Company" => 7,
  "Heroes of the Limlight Gorge" => 8,
  "Iron Garrison Guards" => 9,
  "Iron Garrison Miners" => 10,
  "Lossoth" => 11,
  "Malledhrim" => 12,
  "Mathom Society" => 13,
  "Men of Bree" => 14,
  "Men of Dunland" => 15,
  "Norcrofts" => 16,
  "People of Wildermore" => 17,
  "Rangers of Esteldín" => 18,
  "Riders of Stangard" => 19,
  "Survivors of Wildermore" => 21,
  "Sutcrofts" => 22,
  "Thorin's Hall" => 23,
  "Théodred's Riders" => 24,
  "Wardens of Annúminas" => 25,
  "Wold" => 26,
  "Eorlingas" => 27,
  "Helmingas" => 28
);

$factions_by_id = array(
  "Algraig", "Council of the North", "Eglain", "Elves of Rivendell", "Entwash Vale", "Galadhrim", "Grey Company", "Heroes of the Limlight Gorge", "Iron Garrison Guards", "Iron Garrison Miners", "Lossoth", "Malledhrim", "Mathom Society", "Men of Bree", "Men of Dunland", "Norcrofts", "People of Wildermore", "Rangers of Esteldín", "Riders of Stangard", "Survivors of Wildermore", "Sutcrofts", "Thorin's Hall", "Théodred's Riders", "Wardens of Annúminas", "Wold", "Eorlingas", "Helmingas");

$ranks = array(
  "Acquaintance" => 1,
  "Ally" => 2,
  "Friend" => 3,
  "Kindred" => 4
);

$ranks_by_id = array("Acquaintance", "Ally", "Friend", "Kindred");
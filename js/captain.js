    trees = [{
        n: "Hands of Healing",
        head: "Heals allies while dealing melee damage.",
        main: "Hands of Healing Captains restore the morale of their allies by fighting on the front lines.",
        skills: [1],
        low: ["On every Captain Healing skill,<br>10% chance to<br>+4.66%[?]-6.66%[?] of Base Morale<br>Cooldown: 1s<br>Sure Strike has a chance to bestow Focus to the Fellowship."],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Readied Strike",
            tS: ["Valiant Strike triggers a Battle-ready event.",
                "Valiant Strike grants a Battle-ready Event."
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Uplift",
            tS: ["Critical Heals give the Captain a stacking Critical Hit buff.", "Critical Heals give the Captain +1% Critical Hit for 10 seconds, stacking up to 3 times"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Elendil's Favour",
            tS: ["Blade of Elendil makes your next Valiant Strike heal for more.", "Blade of Elendil causes your next Valiant Strike to heal for 20% more"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Tactician's Prowess",
            tS: ["Increases Critical Healing Magnitude.", "+50% Healing Critical Magnitude"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Song-brother's Call",
            linkSkill: [0],
            tS: ["Unlocks the Song-brother's Call skill.", "Skills Earned:<br>Song-brother's Call"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Blessing of the Song",
            tS: ["You gain the benefits of your Song-brother skills.", "You gain the benefits of your Song-brother skills"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Inspiriting Presence",
            tS: ["Critical heals with Inspire and Valiant Strike cause you and your Song-brother's next Tactical Skill to Crit.<br><br>Inspire's healing is enhanced based on the tier of your Gallant Display buff. When Inspire is used, the Gallant Display buff will be consumed.", "Critical heals with Inspire and Valiant Strike cause you and your Song-brother's next Tactical Skill to Crit<br>Inspire's healing is enhanced by Gallant Display. Using inspire removes the Gallant Display buff"],
            tt1: function () {
                return b2 +
                    RS(1, this.tS[1])
            }
        }]
    }, {
        n: "Lead the Charge",
        head: "Uses Tactical and Melee attacks to deal damage.",
        main: "Lead the Charge Captains inflict heavy damage to their foes while enhancing their allies' prowess.",
        skills: [3],
        low: ["Sure Strike has a chance to bestow Relentless Attack to the Fellowship.<br>Critically Hitting your opponent makes your next attack deal more damage."],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Readied Blade",
            tS: ["Shadow's Lament triggers a Battle-ready Event.", "Shadow's Lament grants Battle-ready"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Cutting Edge",
            tS: ["Cutting Attack causes you to deal additional critical damage for a short time.", "Cutting Attack causes you to deal additional Critical Damage for a short time"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Elendil's Fortune",
            tS: ["Blade of Elendil causes your next Shadow's Lament to deal additional damage.", "Blade of Elendil causes your next Shadow's Lament to deal 20% more damage"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Lacerate",
            tS: ["Grave Wound spreads a Bleed to targets around the Captain when used on a target with the Cutting Attack bleed.", "Grave Wound will apply a bleed to your targets in a small area when your Cutting Attack bleed is present<br>+25% Captain Bleed Skill Damage"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Blade-Brother's Call",
            linkSkill: [2],
            tS: ["Unlocks the Blade-Brother's Call skill.", "Skills Earned:<br>Blade-Brother's Call"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Blessing of the Blade",
            tS: ["You gain the benefits of your Blade-brother skills.", "You gain the benefits of your Blade-brother skills"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Master of War",
            tS: ["Critical Hits with Inspire and Shadow's Lament cause you and your Blade-brother's next Melee or Ranged Skill to Crit.<br><br>Banner of War causes a stacking Critical Rating buff to allies within its effect for each skillplay they perform.", "Critical Hits with inspire and Shadow's Lament cause you and your Blade-brother's next Melee or Ranged Skill to Crit<br>Banner of War grants allies a stacking Critical Rating buff when they use skills"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }]
    }, {
        n: "Leader of Men",
        head: "Defends allies while wielding two-handed weapons.",
        main: "Leader of Men Captains shield their allies from harm and make them more resilient.",
        skills: [6],
        low: ["Sure Strike has a chance to bestow On Guard to the Fellowship.<br>Partial Blocks, Parries and Evades grant the Captain a Defeat Event"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "2-handed Prowess",
            tS: ["You may Block with a 2-handed weapon and have more Morale.",
                "You may block with a two-handed weapon<br>+25% Maximum Morale"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Last Stand",
            linkSkill: [4],
            tS: ["Unlocks the Last Stand skill.", "Skills Earned:<br>Last Stand"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Elendil's Boon",
            tS: ["Blade of Elendil causes the next attack against you to deal less damage.", "Blade of Elendil causes the next attack against you to deal 20% less damage."],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Defensive Strike",
            tS: ["Sure Strike grants an Armour buff, and you Parry attacks more often.",
                "Sure Strike grants an Armour buff<br>+5% Parry Chance"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Shield-Brother's Call",
            linkSkill: [5],
            tS: ["Unlocks the Shield-Brother's Call skill.", "Skills Earned:<br>Shield-Brother's Call"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Blessing of the Shield",
            tS: ["You gain the benefits of your Shield-brother skills.", "You gain the benefits of your Shield-brother skills"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Exemplar",
            tS: ["When you or your Shield-brother is attacked, both have a chance to be healed.<br><br>Critical and Devastating Hits against you or your Shield-brother reduce the cooldown of Shield of the D&uacute;nedain and Strength in Numbers.",
                "When you or your Shield-brother is attacked, both have a chance to be healed<br>Shield-brother reduce the cooldown of Strength in Numbers by 1s and Shield of the D&uacute;nedain by 2s"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }]
    }];
    traits = [
        [{
            n: "Reversal",
            tM: 2,
            tS: ["Critical events briefly increase melee damage.", "Critical Events Increase your Melee Damage by ", "% Melee Damage on a Critical hit"],
            tt1: function (a) {
                return RS(1, this.tS[1] + 3 * a + "%")
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b =
                    1 == a ? b + this.tt1(a) : b + RS(1, "+" + 3 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Skilled Hands",
            tM: 3,
            tS: ["Increases Tactical damage and Outgoing Healing.", "% Tactical damage<br>+", "% Outgoing Healing Modifier"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Bolstered Resolve",
            tM: 5,
            tS: ["Increases Healing Critical Magnitude.", "% Healing Critical Magnitude"],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Blood of N&uacute;menor",
            tM: 3,
            tS: ["Reviving defeated allies restores additional Morale and Power.<br><br>Final rank turns Escape from Darkness into Cry of Vengeance.", "% Revive Power Total<br>+", "% Revive Morale Total", "Escape from Darkness becomes Cry of Vengeance."],
            tt1: function (a) {
                var b = "";
                3 == a && (b += RS(1, this.tS[3] + b1));
                return b += RS(1, "+" + 25 * (a - Math.floor(a / 3)) + this.tS[1] + 25 * (a - Math.floor(a / 3)) + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Revealing Mark",
            tM: 1,
            linkSkill: [7],
            uT: [1, 0, 14],
            uR: [1],
            tS: ["Earns the skill: Revealing Mark.", "Unlocks the skill Revealing Mark<br>", "Skills Earned:<br>Revealing Mark"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + RS(8, this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Dignified Spectacle",
            tM: 4,
            tS: ["Increases outgoing damage and healing.", "% Outgoing Healing Modifier<br>+", "% Tactical Damage<br>+", "% Melee Damage"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1] + a + this.tS[2] + a + this.tS[3])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Lifting Words",
            tM: 5,
            tS: ["Increases Words of Courage healing.", "% Words of Courage Healing"],
            tt1: function (a) {
                return RS(1, "+" + 3 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Gallant Display",
            tM: 1,
            linkSkill: [8],
            tS: ["Unlocks the Gallant Display skill.", "Skills Earned:<br>Gallant Display"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Rousing Cry",
            tM: 3,
            tS: ["When Rallying Cry consumes a Defeat Event, it briefly increases your Fellowship's outgoing damage.",
                "% Rallying Cry Damage Buff"
            ],
            tt1: function (a) {
                return RS(1, "+" + (2 * a - 1) + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Astute Hands",
            tM: 5,
            tS: ["Increases Tactical Critical Chance.", "% Tactical Critical Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Relentless Optimism",
            tM: 3,
            tS: ["Increases AoE Healing.", "% Captain Area-effect Healing"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Honourable Blow",
            tM: 1,
            rT: [1, 0, 6],
            rR: [1],
            tS: ["Captains strike with honour and integrity.<br>Valiant Strike grants an Incoming Healing buff to the Fellowship when used on a target with Revealing Mark.", "Valiant Strike applies an Incoming Healing buff to the Fellowship when used on a target with Revealing Mark"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Standard of Honour",
            tM: 5,
            linkSkill: [9],
            tS: ["Increases damage and healing of Standard of Honour.",
                "% Standard Skill Damage<br>+", "% Standard of Honour Heal over Time", "Skills Earned:<br>Standard of Honour"
            ],
            tt1: function (a) {
                return this.tt3(a) + b1 + RS(8, this.tS[3])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + this.tt3(a)
            },
            tt3: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1] + 5 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Courageous Convocation",
            tM: 1,
            tS: ["Muster Courage heals the Captain.", "Muster Courage heals the Captain on use."],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) +
                    this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Fellowship of the Song",
            tM: 3,
            tS: ["Gives your Fellowship a portion of the benefits from Song-brother skills.", "Your Inspire (Song-brother) and To Arms (Song-brother) apply ", "% of their benefit to your Fellowship."],
            tt1: function (a) {
                return RS(1, this.tS[1] + 20 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Rallying Roar",
            tM: 5,
            tS: ["Increases Morale healed by Rallying Cry.<br><br>Restores power when used with a Defeat Event.", "% Rallying Cry Healing"],
            tt1: function (a) {
                return RS(1,
                    "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Reform the Lines!",
            tM: 1,
            linkSkill: [10],
            tS: ["Earns the skill: Reform the Lines!.", "Skills Earned:<br>Reform the Lines!"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "React To Battle",
            tM: 3,
            tS: ["Increases damage of Devastating Bloc, Light of Elendil, Pressing Attack, and Routing Cry.<br><br>Increases Critical Chance at max rank.", "% Devastating Blow, Light of Elendil, Pressing Attack, and Routing Cry"],
            tt1: function (a) {
                var b;
                b = "" + RS(1, "+" + Math.floor(3.4 * a) + this.tS[1] + " Damage");
                3 == a && (b += RS(1, "<br>+5" + this.tS[1] + " Critical Chance"));
                return b
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Deafening Shouts",
            tM: 3,
            tS: ["Increases Light-type damage.", "% Light-type Damage"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Martial Prowess",
            tM: 3,
            tS: ["Increases melee damage and attack speed.", "% Attack Duration<br>+", "% Melee Damage"],
            tt1: function (a) {
                return RS(1,
                    "-" + 5 * a + this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Make Them Bleed",
            tM: 5,
            tS: ["Increases Bleed damage.", "% Bleed Damage"],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Hardened Heart",
            tM: 3,
            tS: ["Increases Critical hit damage of Melee skills while in Battle-hardened state.", "% Melee Skill Critical Damage"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Telling Mark",
            tM: 1,
            linkSkill: [11],
            uT: [1, 1, 11],
            uR: [1],
            tS: ["Earns the skill: Telling Mark.", "Unlocks the skill Telling Mark<br>", "Skills Earned:<br>Telling Mark"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + RS(8, this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Penetrating Cry",
            tM: 3,
            tS: ["When Routing Cry consumes a Defeat Event, it briefly grants the Fellowship a boost to Attack Speed.", "% Routing Cry Attack Speed Buff"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Arterial Strikes",
            tM: 3,
            tS: ["Increases Melee Critical Chance.", "% Melee Critical Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Time of Need",
            tM: 1,
            linkSkill: [12],
            tS: ["Earns the skill: Time of Need.", "Unlocks the skill Time of Need<br>", "Skills Earned:<br>Time of Need"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + RS(8, this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Advantageous Attack",
            tM: 1,
            rT: [1, 1, 7],
            rR: [1],
            tS: ["Shadow's Lament triggers a Light Damage proc on Telling Mark target.",
                "Shadow's Lament triggers additional Light damage when used on a Telling Mark target"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Grievous Wounds",
            tM: 5,
            tS: ["Increases initial and Bleed damage of Grave Wound.<br><br>Max rank causes Grave Wound to cause an incoming Healing debuff.", "% Grave Wound Damage", "Grave Wound causes an Incoming Healing debuff"],
            tt1: function (a) {
                var b = "";
                5 == a && (b += RS(2, this.tS[2] + b1));
                return b += RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Restraint",
            tM: 3,
            tS: ["Decreases power cost of damaging skills.", "% Melee Skill Power Cost"],
            tt1: function (a) {
                return RS(1, "-" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Heightened Allies",
            tM: 2,
            tS: ["Increases summoned Herald and Archer damage", "% Herald and Archer Damage", "% Damage"],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + RS(1, "+" + 20 * a + this.tS[a])
            }
        }, {
            n: ""
        }, {
            n: "Impactful Blows",
            tM: 3,
            tS: "Increases 2-handed weapon damage.;% Two-handed Sword Damage<br>+;% Two-handed Axe Damage<br>+;% Two-handed Club Damage<br>+;% Halberd Damage<br>+;% Two-handed Hammer Damage".split(";"),
            tt1: function (a) {
                for (var b = "+", c = 1; 6 > c; c++) b += 2 * a + this.tS[c];
                return RS(1, b)
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Standard of War",
            tM: 5,
            linkSkill: [13],
            tS: ["Increases damage and Offence buff of Standard of War.", "% Standard Skill Damage<br>+", "% Standard of War Damage Buff", "Skills Earned:<br>Standard of War"],
            tt1: function (a) {
                return this.tt3(a) + b1 + RS(8, this.tS[3])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + this.tt3(a)
            },
            tt3: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1] +
                    5 * a + this.tS[2])
            }
        }, {
            n: "Fellowship of the Blade",
            tM: 3,
            tS: ["Gives your Fellowship a portion of the benefit from Blade-brother skills.", "Your Inspire (Blade-brother) and To Arms (Blade-brother) apply ", "% of their benefit to your Fellowship."],
            tt1: function (a) {
                return RS(1, this.tS[1] + 20 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Vital Stroke",
            tM: 2,
            tS: ["Increases the Critical Damage Magnitude of Grave Wound's bleed.<br><br>Max rank reduces Grave Wound's cooldown.", "% Grave Wound Damage over Time Critical Magnitude",
                "-5 Grave Wound Cooldown"
            ],
            tt1: function (a) {
                var b = "";
                2 == a && (b += RS(1, this.tS[2] + b1));
                return b += RS(1, "+" + 25 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Oathbreaker's Shame",
            tM: 1,
            linkSkill: [14],
            tS: ["Earns the skill: Oathbreaker's Shame.", "Unlocks the skill Oathbreaker's Shame<br>", "Skills Earned:<br>Oathbreaker's Shame"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + RS(8, this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Situational Awareness",
            tM: 5,
            tS: ["Devastating Blow, Pressing Attack, Light of Elendil and Routing Cry have a chance to trigger an Evade buff.",
                "Devastating Blow, Light of Elendil and Routing Cry have a 33% chance to apply:", "% Evade Chance<br>Duration: 10s"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + "<br>+" + a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Steeled Resolve",
            tM: 4,
            tS: ["Increases max Morale.", "% Maximum Morale"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Call Them Out",
            tM: 5,
            tS: ["Cutting Attack and Grave Wound deal additional damage.",
                "% Captain Bleed Skill Damage"
            ],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Strong Voice",
            tM: 1,
            tS: ["Threatening Shout now affects up to 6 targets in a small radius.", "Threatening Shout now affects up to 6 targets in a small radius"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Noble Mark",
            tM: 1,
            linkSkill: [15],
            tS: ["Earns the skill: Noble Mark.", "Unlocks the skill Noble Mark<br>", "Skills Earned:<br>Noble Mark"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + RS(8, this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Terrifying Bellow",
            tM: 3,
            tS: ["Routing Cry stuns affected enemies when coupled with a Defeat Event. Additional ranks increase the stun duration.", " Routing Cry Stun Duration"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Shrug Blows Aside",
            tM: 5,
            tS: ["Increases Critical Defence.", "% Critical Defence"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "In Harm's Way",
            tM: 3,
            linkSkill: [16],
            tS: ["Earns the skill: In Harm's Way.<br><br>Additional ranks reduce the damage the Captain takes while the skill is active.", "Skills Earned:<br>In Harm's Way", "% Damage Reduction While In Harm's Way is Active"],
            tt1: function (a) {
                var b = RS(8, this.tS[1]);
                1 < a && (b += RS(1, "<br>+" + 10 * (a - 1) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "<br>+" + 10 * (a - 1) + this.tS[2])
            }
        }, {
            n: "Demand Attention",
            tM: 1,
            tS: ["Grave Wound will briefly Force Taunt a target.", "Grave Wound forces the target to attack the Captain for a short while."],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Turning Point",
            tM: 5,
            tS: ["Defeat Events grant Incoming Healing.", "Defeat Events grant the Captain Incoming Healing<br>+", "% Incoming Healing on a Defeat Event"],
            tt1: function (a) {
                return RS(1, this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) :
                    b + RS(1, "+" + a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Absorb Momentum",
            tM: 5,
            tS: ["Increases Block chance.", "% Block Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Standard of Valour",
            tM: 5,
            linkSkill: [17],
            tS: ["Increases the damage and Incoming Healing of Standard of Valour.", "% Standard Skill Damage<br>+", "% Standard of Valour Incoming Healing Buff", "Skills Earned:<br>Standard of Valour"],
            tt1: function (a) {
                return this.tt3(a) + b1 + RS(8, this.tS[3])
            },
            tt2: function (a) {
                var b =
                    b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + this.tt3(a)
            },
            tt3: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1] + 5 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Strength in Numbers",
            tM: 1,
            linkSkill: [18],
            tS: ["Earns the skill: Strength in Numbers.", "Skills Earned:<br>Strength in Numbers"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Fellowship of the Shield",
            tM: 3,
            tS: ["Grants your Fellowship a portion of the benefits from Shield-brother skills.", "Your Inspire (Shield-brother) and To Arms (Shield-brother) apply ",
                "% of their benefit to your Fellowship."
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 20 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Stand Tall",
            tM: 3,
            tS: ["Being hit reduces the cooldown of Last Stand.<br><br>Cannot trigger more than once per second.", "On every Harmful skill,<br>Targeted at you,", "s Last Stand Cooldown", "Cooldown: 1s"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + b1 + RS(2, "-" + a + this.tS[2]) + b1 + RS(1, this.tS[3])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b +
                    RS(2, "-" + a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Shield of the D&uacute;nedain",
            tM: 1,
            linkSkill: [19],
            tS: ["Earns the skill: Shield of the D&uacute;nedain.", "Unlocks the skill Shield of the D&uacute;nedain<br>", "Skills Earned:<br>Shield of the D&uacute;nedain"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + RS(8, this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }]
    ];
    skills = [{
        n: "Song-brother's Call",
        tt1: function () {
            return RS(7, "Skill Type: Buff") + b2 + RS(10, "You call out to your Song-brother, linking your actions. When one Crits, the other's Tactical Mastery is increased.") +
                b2 + RS(3, "Effects applied to you or your Shield-brother when the other is hit within 50 metres:") + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Valiant Strike",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee, Captain Heal") + b2 + RS(10, "A strike that instantly heals the Morale of nearby Fellows, and also grants a Heal-over-time.") + b2 + RS(5, "(150 + 1.5*Mastery%)" + cStr[0]) + b2 + RS(10, "Your attack inspires your fellowship, raising their Morale.") + b2 +
                RS(3, "Effects applied to your Fellowship within 30 metres:") + b1 + RS(2, "Heals (209[?]-229[?])*(100+Heal%)% Morale initially.<br>Heals 186[?]*(100+0.85[?]*Heal%)% Morale every 3 seconds for 27 seconds.<br><br>Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Blade-Brother's Call",
        tt1: function () {
            return RS(7, "Skill Type: Buff") + b2 + RS(10, "You call out to your Shield-brother, linking your actions. When one hits, the other's damage is increased.") + b2 + RS(3, "Effects applied to you or your Shield-brother when the other is hit within 50 metres:") +
                b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Shadow's Lament",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee") + b2 + RS(10, "A powerful melee attack that harms the foe.") + b2 + RS(5, "(125 + 1.25*Mastery%)" + cStr[0]) + b2 + RS(2, "Cost: 4% of Base Power") + b2 + RS(3, "Cooldown: 20s")
        }
    }, {
        n: "Last Stand",
        tt1: function () {
            return RS(7, "Immediate<br>Skill Type: Buff") + b2 + RS(10, "You are able to resist succumbing to defeat for a short time.") + b2 + RS(2, "You cannot be defeated.") +
                b1 + RS(3, "Duration: 7s") + b2 + RS(5, "Applied on expiration:") + b1 + RS(2, "+[?]-[?] Morale<br><br><br>Cost: 4% of Base Power") + b2 + RS(3, "Cooldown: 5m")
        }
    }, {
        n: "Shield-Brother's Call",
        tt1: function () {
            return RS(7, "Skill Type: Buff") + b2 + RS(10, "You call out to your Shield-brother, linking your actions. When one is injured, the other's ability to recover Morale is increased.") + b2 + RS(3, "Effects applied to you or your Shield-brother when the other is hit within 50 metres:") + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3,
                "Cooldown: 2m")
        }
    }, {
        n: "Threatening Shout",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Resistance: Cry") + b2 + RS(10, "A shout that draws threat, forcing the enemy to attack you.<br><br>Forced Attack") + b1 + RS(3, "Duration: 5s") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "Revealing Mark",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Skill Type: Debuff") + b2 + RS(10, "Mark an enemy so that allies can gain health when they attack it.<br><br>You may only mark one target at a time.") +
                b2 + RS(4, "On any damage:<br>Return 15% of damage") + b2 + RS(2, "Cost: 3% of Buffed Power") + b1 + RS(3, "Toggle Skill")
        }
    }, {
        n: "Gallant Display",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>SKill Type: Melee, Captain Heal") + b2 + RS(10, "An attack that heals the Fellowship.") + b2 + RS(5, "(125 + 1.25*Mastery%)" + cStr[0]) + b2 + RS(10, "Your gallant display raises your Fellowship's Morale. Subsequent uses will increase the cost, amount healed and amount of damage done.") + b2 + RS(3, "Effects applied to your Fellowship within 30 metres:") +
                b1 + RS(2, "+(95[?]-119[?])*(100+Heal%)% Morale<br><br>Cost: 10% of Base Morale<br>Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Standard of Honour",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Skill Type: Light") + b2 + RS(10, "Calls forth the Standard of Honour, dealing damage to enemies while healing the Morale of nearby allies.") + b2 + RS(3, "Duration: 30s") + b1 + RS(2, "Heals [?] Morale every 1 second.") + b1 + RS(4, "Effects applied to enemies within 7 metres:<br>[?] Light Damage") + b2 + RS(2,
                "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Reform the Lines!",
        range: "40.2m Range",
        tt1: function () {
            return RS(7, "Fast<br>Radius: 40m<br>Skill Type: Heal, Captain Heal") + b2 + RS(10, "Sacrifices Morale to heal the Fellowship.") + b2 + RS(3, "On application:") + b1 + RS(2, "Restores 10% of maximum Morale") + b2 + RS(3, "Every 2 seconds:") + b1 + RS(2, "Restores 4% of maximum Morale") + b1 + RS(3, "Duration 10s") + b1 + RS(2, "+15% Incoming Healing Modifier") + b1 + RS(3, "Duration 10s") + b2 + RS(2, "Cost: 30% of Buffed Morale<br>Cost: 3% of Base Power") +
                b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Telling Mark",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Skill Type: Debuff") + b2 + RS(10, "Mark an enemy so that allies can do increased damage to it.<br><br>You may only mark one target at a time.") + b2 + RS(4, "+5% Incoming Damage") + b2 + RS(2, "Cost: 3% of Buffed Power") + b1 + RS(3, "Toggle Skill")
        }
    }, {
        n: "Time of Need",
        tt1: function () {
            return RS(7, "Skill Type: Buff") + b2 + RS(10, "You gain a surge of energy for a short time.<br><br>Puts the Captain in a Battle-readied State.<br><br>Increases your damage output for a short time.<br><br>Enemy Defeat Response") +
                b1 + RS(3, "Duration:8s") + b1 + RS(10, "Battle-readied") + b1 + RS(2, "+5% Melee Damage<br>+5% Tactical Damage") + b1 + RS(3, "Duration:10s") + b1 + RS(2, "-20% Attack Duration<br>+20% Melee Damage<br>+20% Tactical Damage<br>+20% Melee Skills Critical Magnitude") + b1 + RS(3, "Duration:20s") + b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Standard of War",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Skill Type: Light") + b2 + RS(10, "Calls forth the Standard of War, dealing damage to enemies while enhancing the attacks of nearby allies.") +
                b2 + RS(3, "Duration: 30s") + b1 + RS(2, "+5% Melee Damage<br>+5% Ranged Damage<br>+5% Tactical Damage") + b1 + RS(4, "Effects applied to enemies within 7 metres:<br>[?] Light Damage") + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Oathbreaker's Shame",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Skill Type: Debuff") + b2 + RS(10, "Increases the damage your companions deal to the foe.") + b2 + RS(4, "+35% Incoming Damage") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 3% of Base Power") +
                b2 + RS(3, "Cooldown: 3m")
        }
    }, {
        n: "Noble Mark",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Skill Type: Debuff") + b2 + RS(10, "Mark an enemy to deal damage-over-time.<br><br>You may only mark one target at a time.") + b2 + RS(4, "[?] Light Damage every 3 seconds.") + b1 + RS(10, "The Captain restores 1% of his Maximum Morale when he deals damage to the target.") + b2 + RS(2, "Cost: 3% of Buffed Power") + b1 + RS(3, "Toggle Skill")
        }
    }, {
        n: "In Harm's Way",
        tt1: function () {
            return RS(7, "Immediate<br>Skill Type: Buff") +
                b2 + RS(10, "You put yourself in harm's way to defend your nearby companions, taking half of all damage dealt to them upon yourself.") + b2 + RS(3, "Aura - affects Fellowship members within 20 metres:<br>Duration: 20s") + b1 + RS(2, "-0% Incoming Damage") + b1 + RS(3, "Duration: 20s") + b2 + RS(2, "Cost: 10% of Buffed Power") + b2 + RS(3, "Cooldown: 3m")
        }
    }, {
        n: "Standard of Valour",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Skill Type: Light") + b2 + RS(10, "Calls forth the Standard of Valour, dealing damage to enemies while increasing the Morale healed to nearby allies.") +
                b2 + RS(3, "Duration: 30s") + b1 + RS(2, "+5% Incoming Healing Modifier") + b1 + RS(4, "Effects applied to enemies within 7 metres:<br>[?] Light Damage") + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Strength in Numbers",
        range: "7.2m Range",
        tt1: function () {
            return RS(7, "Fast<br>Max Targets: 5<br>Radius: 7m<br>Skill Type: Heal, Captain Heal") + b2 + RS(10, "Calls out to nearby allies and they respond in turn, granting you a Heal-over-time.") + b2 + RS(2, "Heals [?] Morale every 1 second for 5 seconds.<br><br>Cost: 3% of Base Power") +
                b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Shield of the D&uacute;nedain",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Immediate<br>Skill Type: Buff") + b2 + RS(10, "Spend Power to protect an ally.") + b2 + RS(2, "-75% Incoming Damage") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }]
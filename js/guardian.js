    trees = [{
        n: "The Defenced of the Free",
        head: "Uses mitigations and defence to protect allies.",
        main: "The true Tanking build, using both AoE and single-target taunts. The primary focus is protection and survival.",
        skills: [1, 2],
        low: ["Your shield skills have a 25% chance to apply a fortification effect that will increase your mitigations by 1%. This effect may stack up to five times."],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Guardian's Defence",
            tS: ["This trait enhances your armour, critical defence, block chance and mitigation, and reduces shield wear while blocking.",
                "+10% Armour<br>+10% Critical Defence<br>+2.5% Partial Block Mitigation<br>+2.5% Partial Block Chance<br>-25% Shield Wear when Blocking"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Adaptability",
            tS: ["Whenever you are hit by an attack, your block and parry ratings will increase.<br><br>This effect can stack up to 3 times and will last for 10s or until a response skill is used."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Shield Wall",
            linkSkill: [0],
            tS: ["Protects an ally by intercepting all incoming damage.",
                "Skills Earned:<br>Shield Wall"
            ],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Challenge the Darkness",
            tS: ["Your Challenge skill will affect additional targets and cast Guardian's Ward when used.", "+5 Challenge Targets"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Strengthen the Bulwark",
            tS: ["Your fortification buff will provide additional damage mitigation per stack.<br><br>Your critical hits with shield skills will also automatically apply a stack of fortification."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Bolstering Blocks",
            tS: ["Blocking attacks will restore a small amount of morale."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Shield the People",
            tS: ["Your shield skills are twice as likely to provide you with a Fortification buff. At five stacks, you will provide a fellowship-wide mitigation buff.", "+25% Chance for Shield Skills to apply a fortification buff"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }]
    }, {
        n: "The Keen Blade",
        head: "Uses Bleeds and high-damage attacks to defeat foes.",
        main: "Focuses on dealing damage. Skills have high base damage, bleeds, and powerful finishing skills.",
        skills: [4, 5],
        low: ["Your critical hits will apply a bleed to your enemies. This effect may stack up to five times."],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Overpower",
            tS: ["This trait enhances your melee damage, critical damage, and parry chance and mitigation.", "+5% Melee Damage<br>+10% Critical Damage Multiplier<br>+2.5% Partial Parry Mitigation<br>+2.5% Partial Parry Chance"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Reactive Parry",
            tS: ["Parrying attacks will cause a small amount of damage to your enemies."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Protection by the Sword",
            linkSkill: [3],
            tS: ["You may enhance your fellowship members, improving their physical mastery and parry. You will also be able to react to attacks that an ally parries if you are within 10m.", "Skills Earned:<br>Protection by the Sword"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Bleed Them Dry",
            tS: ["Your bleeds will stack up to ten times on a target.", "Your bleeds may stack up to ten times."],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Brutal Charge",
            tS: ["Charge will increase your damage and last for a longer period of time.", "Your Charge becomes Brutal Charge and will increase your melee damage for a short period of time. The first target you attack after activating this skill will be knocked down for a short period of time.<br>+5s Charge Duration"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Heavy Blows",
            tS: ["This trait further increases your melee damage and critical damage multiplier.", "Critical hits will apply an additional bleed to your targets.<br>+5% Melee Damage<br>+10% Critical Damage Multiplier"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Prey on the Weak",
            tS: ["Your attacks will deal additional damage based on the number of bleeds on your target.<br><br>Tiering up bleeds on a target provides you with a chance to restore some of your morale. This chance will increase with the number of bleeds currently on the target."],
            tt1: function () {
                return ""
            }
        }]
    }, {
        n: "The Fighter of Shadow",
        head: "Uses Light damage and two-handed tanking in combat.",
        main: "Excels at debuffing enemies, gaining survivability by making their enemies weaker. Guardians may Tank with a 2-handed weapon to inflict higher damage.",
        skills: [7, 8],
        low: ["Your attacks against your market target have a 5% chance to restore 10% of your max morale."],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Light-touched",
            tS: ["This trait enhances your melee damage, and block and parry chance.<br><br>You will also be able to block with 2-handed weapons.", "+5% Melee Damage<br>+5% Incoming Healing Modifier<br>You may block with a two-handed weapon"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Disabling Strikes",
            tS: ["The potency of all non-damaging debuffs is increased by 50%.",
                "-12.5% Run Speed<br>-7.5% Attack Speed<br>-2.5% Outgoing Damage<br>+2.5% Miss Chance"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Protection",
            linkSkill: [6],
            tS: ["You may protect one of your allies, improving his defence. You will also be able to react to attacks made against him if you are within 10m.", "Skills Earned:<br>Protection"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Flash of Light",
            tS: ["Attacks against marked targets will deal Light damage to nearby targets."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Mark of Permanence",
            tS: ["Non-damaging debuffs applied to your marked target become permanent in duration."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Manifested Ire",
            tS: ["Enemies are snared if they fail to continue attacking the Guardian after their use of damaging abilities."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Incapacitation",
            tS: ["The potency of all non-damaging debuffs is increased by 100% on your marked target.", "-25% Run Speed<br>-15% Attack Speed<br>-5% Outgoing Damage<br>+5% Miss Chance"],
            tt1: function () {
                return b2 +
                    RS(1, this.tS[1])
            }
        }]
    }];
    traits = [
        [{
            n: "Relentless Assault",
            tM: 5,
            tS: ["The Sting skill has a chance to provide a block and parry response.", "% Chance for Sting to provide a block and parry response"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Tireless Defender",
            tM: 3,
            tS: ["Your Guardian's Ward skill will reduce skill power cost while active.", "Guardian's Ward will reduce skill power costs by ", "% while active", "Reduces skill power cost by "],
            tt1: function (a) {
                return RS(1, this.tS[1] + 10 * a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[3] + 10 * a + "%")
            }
        }, {
            n: ""
        }, {
            n: "Defensive Expertise",
            tM: 5,
            tS: ["Increases your Block and Partial Block Rating.", "% Block Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Guardian's Pledge",
            tM: 1,
            linkSkill: [9],
            tS: ["Earns the skill: Guardian's Pledge.", "Skills Earned:<br>Guardian's Pledge"],
            tt1: function (a) {
                return RS(8,
                    this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Guardian's Ward: Tactics",
            tM: 5,
            tS: ["Guardian's Ward will now provide additional Tactical Mitigation with each rank.", "[?] Tactical Mitigation"],
            tt1: function (a) {
                return RS(1, "+" + (342 * a + 1368) + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Shield-smash",
            tM: 1,
            linkSkill: [10],
            uT: [3, 0, 12],
            uR: [1],
            tS: ["Earns the skill: Shield-smash.", "Skills Earned:<br>Shield-smash"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }, {
            n: "Reversal",
            tM: 5,
            tS: ["The Turn the Tables skill has a reduced cooldown, and will provide brief combat state immunity when used.", " Turn The Tables Cooldown<br>+", " Combat State Immunity Duration"],
            tt1: function (a) {
                return RS(1, "-" + 6 * a + this.tS[1] + 4 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Bellow",
            tM: 5,
            tS: ["Increases the range of your Challenge and Fray the Edge skills.", "% Challenge and Fray the Edge Range"],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Follow Through",
            tM: 3,
            rT: [3, 0, 8],
            rR: [1],
            tS: ["The Shield-smash skill will hit additional targets.", "Shield-smash will affect ", " targets"],
            tt1: function (a) {
                return RS(1, this.tS[1] + (a + 1) + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, a + 1 + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Smashing Stab",
            tM: 1,
            linkSkill: [11],
            tS: ["Earns the skill: Smashing Stab.", "Skills Earned:<br>Smashing Stab"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Improved Shield Spikes",
            tM: 5,
            tS: ["Increases the duration and Crit chance of shield spikes.", "% Shield-spikes Crit Chance<br>+", " Shield-spikes Duration"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1] + 120 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Disorientation",
            tM: 5,
            tS: ["The skills Shield-smash and Shield-blow make it harder for your enemy to avoid attacks.", "% Chance for your shield skills to leave your enemy unable to block, parry, or evade attacks"],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Warrior's Fortitude",
            tM: 1,
            tS: ["The skill Warrior's Heart will also increase your Physical Mitigation, Incoming Healing, and Block chance.", "Your Warrior's Heart skill will also increase your Physical Mitigation, Incoming Healing, Block, and Partial Block chances"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Stoic",
            tM: 5,
            tS: ["Your Warrior's Heart skill has a chance to apply a damage bubble on use.",
                "% Chance for Warrior's Heart to apply a damage bubble on use"
            ],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Juggernaut",
            tM: 1,
            linkSkill: [12],
            tS: ["Earns the skill: Juggernaut.", "Skills Earned:<br>Juggernaut"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Thrill of Battle",
            tM: 5,
            tS: ["Critical hits with response skills will heal you for a percentage of your max Morale.", "Your critical hits with block and parry response skills will heal you for ",
                "% of your max morale", "Heal for "
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 0.5 * a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[3] + 0.5 * a + "%")
            }
        }, {
            n: ""
        }, {
            n: "Skilled Deflection",
            tM: 5,
            tS: ["Increases your Parry/Partial Parry Rating.", "% Parry Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Heavy Weapons Training",
            tM: 5,
            tS: ["Increases damage with each of your skills.", "% Skill Damage"],
            tt1: function (a) {
                return RS(1,
                    "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Broad Strokes",
            tM: 2,
            tS: ["Sweeping Cut will affect additional targets and has a chance to apply a Bleed on hit.", "% Chance for Sweeping Cut to cause bleed on your targets<br>+", " Sweeping Cut Targets"],
            tt1: function (a) {
                return RS(1, "+" + 50 * a + this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Thrust",
            tM: 1,
            linkSkill: [13],
            uT: [3, 1, 14],
            uR: [1],
            tS: ["Earns the skill: Thrust.", "Skills Earned:<br>Thrust"],
            tt1: function (a) {
                return RS(8,
                    this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Brutal Assault",
            tM: 1,
            linkSkill: [14],
            uT: [3, 1, 9, 3, 1, 16],
            uR: [1, 1],
            tS: ["Earns the skill: Brutal Assault.", "Skills Earned:<br>Brutal Assault"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Tireless Blows",
            tM: 5,
            rT: [3, 1, 8],
            rR: [1],
            tS: ["Parry responses have a chance to reset the cooldown of Brutal Assault.", "% Chance for your Parry Response skills to reset the cooldown of Brutal Assault"],
            tt1: function (a) {
                return RS(1,
                    "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Invigourating Parry",
            tM: 4,
            tS: ["Critical hits with your parry response skills will restore power.", "Critical hit with your parry response skills will restore ", "% of your max power.", "% Max Power"],
            tt1: function (a) {
                return RS(1, this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, a + this.tS[3])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Raw Power",
            tM: 5,
            rT: [3, 1, 6],
            rR: [1],
            tS: ["Overwhelm will deal additional damage per Bleed, and has a chance to leave Bleeds on your target.",
                "% Overwhelm Bleed Removal Damage<br>-", "% Chance for Overwhelm to remove bleeds from your target"
            ],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1] + 5 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "To The King",
            tM: 1,
            linkSkill: [15],
            uT: [3, 1, 23],
            uR: [1],
            tS: ["Earns the skill: To the King.", "Skills Earned:<br>To the King"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Haemorrhage",
            tM: 5,
            rT: [3, 1, 8],
            rR: [1],
            tS: ["The Brutal Assault skill has a chance to apply a stackable Bleed. Each rank will increase Bleed damage done by the Guardian.",
                "% Chance for Brutal Assault to cause a bleed on your targets<br>+", "% Bleed Damage"
            ],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1] + 2 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "To The Rescue",
            tM: 5,
            tS: ["The Charge skill will provide additional run speed for a longer period of time.", "% Charge Run Speed<br>+", " Charge Attack Speed Duration"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Warrior's Fortitude",
            tM: 1,
            tS: ["The Warrior's Heart skill will also increase your Physical Mastery rating, Melee Crit chance, Parry chance, and Partial Parry chance."],
            tt1: function (a) {
                return RS(1, this.tS[0])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Blind Rage",
            tM: 5,
            rT: [3, 1, 15],
            rR: [1],
            tS: ["The To The King skill has a chance to trigger a Parry response.", "% Chance that To The King will increase your melee damage by 10% and attack speed by 20%"],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Hammer Down",
            tM: 1,
            linkSkill: [16],
            tS: ["Earns the skill: Hammer Down.", "Skills Earned:<br>Hammer Down"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Insult to Injury",
            tM: 5,
            tS: ["Your damaging attacks have a chance to renew all debuffs on your target.", "% chance on hit to renew all debuffs on target", "Increases Proc Chance to: "],
            tt1: function (a) {
                return RS(17, 10 * a + this.tS[1])
            },
            tt2: function (a) {
                var b =
                    b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(17, this.tS[2] + 10 * a + "%")
            }
        }, {
            n: "Radiate",
            tM: 3,
            tS: "Your damaging area of effect skills will transfer your damaging and non-damaging debuffs to additional targets.;Your damaging area effect skills will copy your marks and bleeds from one target onto another ; nearby.;;two;three;Onto two targets;Onto three targets".split(";"),
            tt1: function (a) {
                return RS(1, this.tS[1] + this.tS[a + 2] + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[a +
                    4])
            }
        }, {
            n: ""
        }, {
            n: "High-spirited",
            tM: 5,
            tS: ["Increases Incoming Healing.", "% Incoming Healing Modifier"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "War-chant",
            tM: 1,
            linkSkill: [17],
            uT: [3, 2, 13],
            uR: [1],
            tS: ["Earns the skill: War-chant.", "Skills Earned:<br>War-chant"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Numbed Senses",
            tM: 3,
            tS: ["Ignore the Pain will remove additional debuffs.", " Additional Debuffs"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Bolster",
            tM: 5,
            tS: ["Blocking attacks will increase your Critical Defence Rating until your next Sting is used. This effect may stack up to five times.<br>Using Sting at five stacks will stun your target for a short period of time.", "Blocking an attack will provide:<br>+", " Critical Defence<br>Expires if out of combat for 9 seconds."],
            tt1: function (a) {
                return RS(1, this.tS[1] + Math.ceil(193.325 * a) + "[?]" +
                    this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Thrill of Danger",
            tM: 1,
            linkSkill: [18],
            uT: [3, 2, 18],
            uR: [1],
            tS: ["Earns the skill: Thrill of Danger.", "Skills Earned:<br>Thrill of Danger"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Tenderize",
            tM: 5,
            tS: ["Parrying attacks will increase your Critical Rating until your next Sting is used. This effect may stack up to five times.<br>Using Sting at five stacks will apply a bleed to your target.",
                "Parrying an attack will provide:<br>+", " Critical Rating<br>Expires if out of combat for 9 seconds."
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + Math.ceil(75.813 * a) + "[?]" + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Demoralizing Anthem",
            tM: 5,
            rT: [3, 2, 5],
            rR: [1],
            tS: ["Increases the range and number of targets affected by your War-chant skill.", " War-chant Targets<br>+", "% War-chant Range"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1] + 20 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) +
                    this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Redirect",
            tM: 1,
            linkSkill: [19],
            uT: [3, 2, 23],
            uR: [1],
            tS: ["Earns the skill: Redirect.", "Skills Earned:<br>Redirect"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Strong Bursts",
            tM: 5,
            tS: ["Increases area of effect skill damage.", "% Area of Effect Skill Damage"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Bring on the Pain",
            tM: 5,
            rT: [3, 2, 10],
            rR: [1],
            tS: ["For a short period of time, your Thrill of Danger skill will allow you to restore a small amount of morale every time you are hit.",
                "Thrill of Danger will allow you to restore ", "% of your morale every time you are hit for the next 10 seconds.", "You will restore ", "% of your morale every time you are hit"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 0.5 * a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[3] + 0.5 * a + this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: "Warrior's Fortitude",
            tM: 1,
            tS: ["The Warrior's Heart skill will also increase your Physical Mastery rating, Tactical Mitigation, Partial Block chance, and Partial Parry chance.",
                "Your Warrior's Heart skill will also increase your Physical Mastery rating, Incomming Healing, and Evade, and Partial Evade chances."
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + "<br><br>[???]<br>[guess what this actually does...]")
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Vicious Rebuttal",
            tM: 5,
            rT: [3, 2, 15],
            rR: [1],
            tS: ["The Redirect skill will absorb and reflect additional damage.", "% Damage Absorb and Reflect"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Cataclysmic Shout",
            tM: 1,
            linkSkill: [20],
            tS: ["Earns the skill: Cataclysmic Shout.", "Skills Earned:<br>Cataclysmic Shout"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }]
    ];
    skills = [{
        n: "Shield Wall",
        range: "15m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill") + b2 + RS(10, "Protects an ally by intercepting all incoming damage.") + b2 + RS(2, "Target Cannot Evade, Parry or Block<br>Transfers all Damage from the Target to the Caster<br>Negates Armour Damage<br><br>Cost: 2% of Base Power<br>Cost: 0.95%[?] of Base Power Per Second") +
                b1 + RS(3, "Toggle Skill<br><br>Cooldown: 20s")
        }
    }, {
        n: "Shield-Taunt",
        range: "10.2m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Max Targets: 5<br>Radius: 10m<br>Resistance: Cry") + b2 + RS(10, "Laugh at your enemies after bashing them with your Shield-swipe, taunting them. This skill draws the enemy's attention to yourself.") + b2 + RS(6, "Requires the use of Shield-swipe.") + b2 + RS(10, "Moderately Increased threat.") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Litany of Defiance",
        range: "7.2m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Max Targets: 5<br>Radius: 7m<br>Resistance: Cry") + b2 + RS(10, "Cries out to surrounding enemies, slowing their attacks.<br>Cashes out all Fortification effects on the Guardian, in order to double their mitigations for a short period of time, while also intercepting 10% of the fellowship's damage for each stack removed.") + b2 + RS(4, "+20% Attack Duration") + b1 + RS(3, "Expires if out of combat for 9 seconds.<br>Duration: 15s") + b1 + RS(2,
                "+2% Physical Mitigation<br>+2% Tactical Mitigation") + b1 + RS(3, "Expires if out of combat for 9 seconds.<br>Duration: 15s<br>Effects applied to the Fellowship within 80 metres:") + b2 + RS(2, "Cost: 4% of Base Power") + b2 + RS(3, "Cooldown: 1m 30s")
        }
    }, {
        n: "Protection by the Sword",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Melee Skill") + b2 + RS(10, "Boosts melee damage of Fellowship.<br>Enables you to react to an attack parried by an ally if within 10m.") + b2 + RS(2, "If you parry an attack, the Guardian protecting you will be able to react.") +
                b1 + RS(3, "Every 10 seconds:") + b1 + RS(10, "You enhance your allies, improving their melee.") + b2 + RS(3, "Effects applied to the Fellowship within 10 metres:") + b1 + RS(2, "+2% Melee Damage") + b1 + RS(3, "Duration: 10s<br><br>Toggle Skill<br><br>Cooldown: 10s")
        }
    }, {
        n: "Force Opening",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Melee Skill") + b2 + RS(10, "An attack that will open a parry response.") + b2 + RS(5, "(90 + 0.9[?]*Mastery%)" + cStr[0]) + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Overwhelm",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill") + b2 + RS(10, "Deal a powerful attack, removing all bleeds on your target for additional damage.<br>Stuns target on critical hit.") + b2 + RS(6, "Requires the use of Retaliation or Whirling Retaliation.<br><br>Mounter Combat Enemies: Stun replaced with a mount speed debuff") + b2 + RS(5, "(100 + Mastery%)" + cStr[0]) + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Apply to target on Critical and Devastating Critical:") + b1 + RS(17, "3s Stun") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Protection",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Melee Skill") + b2 + RS(10, "Improve your ally's defences.<br>Enables you to react to attacks made against this ally if within 10m.") + b2 + RS(2, "+1150[?] Evade Rating<br>+1150[?] Parry Rating<br>+1150[?] Block Rating") + b2 + RS(3, "Toggle Skill<br><br>Cooldown: 10s")
        }
    }, {
        n: "Force Opening",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Melee Skill") + b2 + RS(10, "An attack that will open a parry response.") + b2 + RS(5, "(90 + 0.9[?]*Mastery%)" + cStr[0]) + b2 +
                RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Take to Heart",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill") + b2 + RS(10, "A toggle skill that will mark your target. While marked, your target will suffer a reduced chance to hit and is susceptible to more potent versions of your debuffs.") + b2 + RS(4, "+5% Miss Chance") + b1 + RS(3, "Expires if out of combat for 9 seconds.") + b2 + RS(2, "Cost: 3% of Buffed Power") + b1 + RS(3, "Toggle Skill")
        }
    }, {
        n: "Guardian's Pledge",
        tt1: function () {
            return RS(7,
                "Immediate") + b2 + RS(10, "Strengthens defences briefly.") + b2 + RS(2, "+50% Evade Chance<br>+50% Parry Chance<br>+50% Block Chance") + b1 + RS(3, "Duration: 15s") + b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 3m")
        }
    }, {
        n: "Shield-smash",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Melee Skill") + b2 + RS(10, "Strike a hard blow with your shield.") + b2 + RS(6, "Requires the use of Bash.<br><br>Mounted Combat Enemies: Stun replaced with a mount speed debuff") + b2 + RS(5, "[?] Common Damage") + b2 + RS(4, "3s Stun") + b1 + RS(10,
                "Interrupts Inductions") + b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Smashing Stab",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill") + b2 + RS(10, "After using Shield-swipe or Retaliation, smash the enemy with a shield-blow and weapon strike.<br>If after Shield-swipe: damage and stun.<br>If after Retaliation: damage and bleed.<br>If after both: damage and open a Fellowship Manouvre.") + b2 + RS(5, "[?] Common Damage") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Juggernaut",
        tt1: function () {
            return RS(7, "Immediate") + b2 + RS(10, "Blocks all attacks briefly, reflecting some damage back to your enemies.") + b2 + RS(2, "Sets Block Chance to 100%") + b1 + RS(3, "Expires if out of combat for 9 seconds.<br>Duration: 15s") + b1 + RS(2, "On every Harmful skill,<br>Targeted at you,<br>On Partial Block, Block:") + b1 + RS(5, "[?] Common Damage") + b1 + RS(3, "Duration: 15s") + b1 + RS(2, "You are immune to all combat states.") + b1 + RS(3, "Expires if out of combat for 9 seconds.<br>Duration: 15s") + b2 +
                RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 3m")
        }
    }, {
        n: "Thrust",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill") + b2 + RS(10, "Deal a thrusting blow to open a bleeding wound.") + b2 + RS(6, "Requires the use of Retaliation or Whirling Retaliation.") + b2 + RS(5, "(90 + 0.9[?]*Mastery%)" + cStr[0]) + b2 + RS(4, "[?] Common Damage initially.<br>[?] Common Damage every 2 seconds for 10 seconds.") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Brutal Assault",
        range: "2.5m Range",
        tt1: function () {
            return RS(7,
                "Fast<br>Melee Skill") + b2 + RS(10, "A heavy blow, damaging more over time.") + b2 + RS(5, "(110 + 1.1*Mastery%)" + cStr[0]) + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "To the King",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Melee Skill") + b2 + RS(10, "A powerful attack against a foe providing a chance to start a Fellowship Manoeuvre.") + b2 + RS(6, "Requires use of Thrust or Overwhelm.") + b2 + RS(5, "(100 + Mastery%)" + cStr[0]) + b2 + RS(2, "+15% Run Speed") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 4% of Base Power") +
                b2 + RS(3, "Apply to target on Critical and Devastating Critical:") + b1 + RS(17, "5s Stun") + b1 + RS(5, "Starts Fellowship Manoeuvre") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Hammer Down",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Melee Skill") + b2 + RS(10, "A powerful finishing blow against your foe.<br>Additional damage to targets under 25% health.<br>If your target is defeated, your melee damage will increase by 5% and the skill's cooldown will be reset.<br>(Stacks 3 times.)") + b2 + RS(5, "(150 + 1.5*Mastery%)" + cStr[0]) +
                b2 + RS(4, "On Defeat<br><br>Apply to the caster:") + b1 + RS(3, "Duration: 2s") + b2 + RS(5, "Applied on expiration:") + b1 + RS(2, "+5% Melee Damage") + b1 + RS(3, "Expires if out of combat for 9 seconds.<br>Duration: 15s<br><br>Duration: 1s") + b2 + RS(2, "Cost: 4% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "War-chant",
        range: "10.2m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Max Targets: 3<br>Radius: 10m<br>Resistance: Cry") + b2 + RS(10, "Shout out to dishearten and impede advancing enemies.") + b2 + RS(5, "[?] Light Damage") +
                b2 + RS(4, "-5% Damage") + b1 + RS(3, "Expires if out of combat for 9 seconds.<br>Duration: 10s") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Thrill of Danger",
        range: "10.2m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Max Targets: 3<br>Radius: 10m") + b2 + RS(10, "Regenerates Power, increasing with every enemy near you.<br>(This skill works in combat only.)<br><br>For each enemy:") + b2 + RS(4, "Target gains 0 Power<br>Attacker gains 10% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Redirect",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill") + b2 + RS(10, "Strike the enemy and reflect a portion of their damage back at them.") + b2 + RS(6, "Requires the use of Retaliation or Whirling Retaliation.") + b2 + RS(5, "(90 + 0.9[?]*Mastery%)" + cStr[0]) + b2 + RS(2, "On any damage:<br>Negate 10% damage<br>Reflect 10% of damage") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Cataclysmic Shout",
        range: "7.2m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 5<br>Radius: 7m<br>Resistance: Cry") +
                b2 + RS(10, "Deals damage and stuns surrounding enemies. Your marked target will take increased damage and will be stunned for a longer period of time. All non-damaging debuffs on your marked target will be spread to the 5 closest targets.") + b2 + RS(4, "[?] Light Damage") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }]
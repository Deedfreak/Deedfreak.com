    trees = [{
        n: "The Martial Champion",
        head: "Damage-soaking Tank who prefers offence over defence.",
        main: "A warrior line, forgoing the shield for better weapons. Managing Fervour, health, and power makes this Tank unstoppable.",
        skills: [1],
        low: ["On any damage:<br>10% chance to:<br>Receive effect:<br>", "Adds 1 Fervour Pip<br>", "Reflect 10% of damage<br>Reflect effect:<br>", "Increased threat<br><br><br>", "Passively gains +20% Morale"],
        tt1: function () {
            return RS(1, this.low[0]) +
                RS(2, this.low[1]) + RS(1, this.low[2]) + RS(2, this.low[3]) + RS(1, this.low[4])
        },
        bonuses: [{
            n: "Glory",
            tS: ["Reduces damage per point of Fervour.", "Reduces damage taken by 2% per Fervour pip"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Good Defense / Strong Offense",
            tS: ["If Sudden Defence's bubble is depleted, damage is dealt to all surrounding enemies."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Exalted Combatant",
            tS: ["Heals the champion for 25% of max Morale upon falling below 20% of max Morale."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Adamant",
            linkSkill: [0],
            tS: ["Reduces incoming damage for a short duration. The amount of damage reduced is dependant on how many pips of fervour is consumed.", "Skills Earned:<br>Adamant"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Masochism Increase",
            tS: ["Increases the chance of Masochism's effects to apply by 10% and increases the amount of damage it reflects by 20%.", "On any damage:<br>20% chance to:<br>Receive effect:<br>", "Adds 1 Fervour Pip<br>", "Reflect 30% of damage<br>Reflect effect:<br>",
                "Increased threat"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1]) + RS(2, this.tS[2]) + RS(1, this.tS[3]) + RS(2, this.tS[4])
            }
        }, {
            n: "Bracing Against Defeat",
            tS: ["Bracing Attack now generates 2 points of fervour and the amount of Morale it restores is increased.", "-1 Bracing Attack Fervour Cost<br>Bracing Attack places an Incoming Healing Buff on the Champion for 10s"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Invincible",
            tS: ["For each 5% of health the Champion is missing, his damage is increased while Adamant is active."],
            tt1: function () {
                return ""
            }
        }]
    }, {
        n: "The Berserker",
        head: "Deals single-target. Crit-based melee damage.",
        main: "Deals bursts of single-target high damage, relying on a high Crit chance to do massive damage.",
        skills: [2, 3],
        low: ["Emboldened Blades:<br>Strike skills have a 20% chance to grant:<br>", "This effect stacks up to five times:<br>", "+5% Remorseless Strike Critical Chance<br>Expires if out of combat for 9 seconds.<br>This effect can stack up to five times."],
        tt1: function () {
            return RS(1, this.low[0]) +
                RS(2, this.low[1]) + RS(1, this.low[2])
        },
        bonuses: [{
            n: "Fervour",
            tS: ["Increases Fate and damage per fervor point.", "Increases Champion skill damage by 5% per Fervour Pip<br><br>Reduces Attack Duration by 2% per Fervour Pip<br>+ICPR per Fervour Pip"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Precise Strikes",
            tS: "Hits with any strike skill decreases the Champion's attack duration. In addition, critical strikes generate an additional point of fervour.;On every Strike skill,<br>On Critical Hit:<br>;Adds 1 Fervour Pip<br>;On Every Hit:<br>;This effect stacks up to 5 times<br>;-3% Attack Duration<br>Duration: 8s".split(";"),
            tt1: function () {
                return b2 + RS(1, this.tS[1]) + RS(2, this.tS[2]) + RS(1, this.tS[3]) + RS(2, this.tS[4]) + RS(1, this.tS[5])
            }
        }, {
            n: "Emboldened Blades Increase",
            tS: ["Increases the Critical Damage of Remorseless Strike by 10% per stack.", "Emboldened Blades:<br>Strike skills have a 20% chance to grant:<br>", "This effect stacks up to five times:<br>", "+5% Remorseless Strike Critical Chance<br>+10% Remorseless Strike Critical Damage<br>Expires if out of combat for 9 seconds."],
            tt1: function () {
                return b2 + RS(1, this.tS[1]) +
                    RS(2, this.tS[2]) + RS(1, this.tS[3])
            }
        }, {
            n: "Renewing Strikes",
            tS: ["Strike Skills have a chance to return a percentage of max Morale.", "On every Strike skill,<br>10% chance to<br>Restores 5% of maximum Morale"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Red Haze",
            tS: ["Killing an enemy restores full Fervour.", "After every kill-<br><br>Apply to the target:<br>", "Adds 5 Fervour"],
            tt1: function () {
                return b2 + RS(1, this.tS[1]) + RS(2, this.tS[2])
            }
        }, {
            n: "Devastation",
            tS: ["Devastating Blow bypasses a portion of its targets mitigations.",
                "Devastating Blow Bypasses 40% of its target's mitigations."
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Continuous Blood Rage",
            tS: ["Blood Rage becomes Continuous Blood rage.<br><br>In addition to breaking the Champion out of all combat states, it provides immunity to combat states, reduces power costs, and increases resistances on the Champion for a moderate duration.<br><br>This skill also restores max fervour."],
            tt1: function () {
                return ""
            }
        }]
    }, {
        n: "The Deadly Storm",
        head: "Deals whirling AoE destruction upon foes.",
        main: "Uses a wide array of AoE attacks, inflicting whirling damage upon many foes at once.",
        skills: [6, 7],
        low: ["Flurry:<br>Blade skills have a 20% chance to grant:<br>-20% Attack Duration<br>Duration: 20s"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Ardour",
            tS: ["Increases damage and In-combat Power Regen per Fervour point.", "Reduces all Power Costs by 5% per Fervour Pip"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Sharpened Blades",
            tS: ["Increases the initial damage of Rend and increases the max number of stacks of it's bleed to five.",
                "Rend's Bleed now stacks up to five times"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Flurry Increase",
            tS: ["Increases the duration of Flurry and grants critical rating.", "+1535[?] Critical Rating while Flurry is Active<br>+10 seconds to Flurry's duration"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Exchange of Blows",
            linkSkill: [4],
            tS: ["Reflects a portion of damage taken for a moderate duration.", "Skills Earned:<br>Exchange of Blows"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Ardour Increase",
            tS: ["Increases damage and gives a Tactical Mitigation rating for each Fervour point.", "Increases Champion skill damage by 5% per Fervour Pip<br>Increases Tactical Mitigation by a rating per Fervour pip<br>Rating is based on Champion level"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Furious Swings",
            tS: ["Increases the damage of all Blade skills and gives them a chance to generate an additional point of fervour.", "On every Blade skill,<br>20% chance to<br>", "Adds 1 Fervour Pip<br>", "+30% Blade Skill Damage<br>"],
            tt1: function () {
                return b2 + RS(1, this.tS[1]) + RS(2, this.tS[2]) + RS(1, this.tS[3])
            }
        }, {
            n: "Born For Combat",
            linkSkill: [5],
            tS: ["Each time you are struck by an enemy, you gain a stack of Born for Combat. At 10 stacks, you gain a powerful AoE skill that damages foes all around you.", "Skills Earned:<br>Born For Combat<br><br>", "On every skill,<br>Targeted at you,"],
            tt1: function () {
                return b2 + RS(8, this.tS[1]) + RS(1, this.tS[2])
            }
        }]
    }];
    traits = [
        [{
            n: "Second Wind",
            tM: 1,
            linkSkill: [8],
            uT: [2, 0, 8],
            uR: [1],
            tS: ["Grants the skill: Second wind.",
                "Skills Earned:<br>Second Wind"
            ],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Tactical Mitigation Increase",
            tM: 5,
            tS: ["Increases Tactical Mitigation.", "% Tactical Mitigation"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Horn of Champions",
            tM: 1,
            linkSkill: [9],
            uT: [2, 0, 6],
            uR: [1],
            tS: ["Grants the skill: Horn of Champions.", "Skills Earned:<br>Horn of Champions"],
            tt1: function (a) {
                return RS(8,
                    this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Deafening Horn",
            tM: 2,
            rT: [2, 0, 5],
            rR: [1],
            tS: ["Increases Horn of Champions damage.", "% Horn of Champions Damage"],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Vitality Increase",
            tM: 5,
            tS: ["Increases Vitality.", " Vitality"],
            tt1: function (a) {
                return RS(1, "+" + Math.ceil(11.59 * a) + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Vigour of Champions",
            tM: 5,
            rT: [2, 0, 0],
            rR: [1],
            tS: ["Increases Power restored from Second Wind.", "% Second Wind Power Restore"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Aggressive Exchange",
            tM: 5,
            tS: ["Blade Wall debuffs enemy damage.", "Blade Wall reduces the damage of enemies for short duration", "% Additional Aggressive Exchange Debuff"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < this.tier && (b += b1 + RS(1, "-" + (2 * a - 2) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + RS(1, this.tS[1]) :
                    b + RS(1, "-" + (2 * a - 2) + this.tS[2])
            }
        }, {
            n: "Riposte",
            tM: 1,
            linkSkill: [10],
            uT: [2, 0, 14],
            uR: [1],
            tS: ["Grants the skill: Riposte.", "Skills Earned:<br>Riposte"],
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
            n: ""
        }, {
            n: "Placed Strike",
            tM: 4,
            rT: [2, 0, 10],
            rR: [1],
            tS: ["Increases the damage of Riposte.", "% Riposte Damage"],
            tt1: function (a) {
                return RS(1, "+" + 15 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Dire Need",
            tM: 1,
            linkSkill: [11],
            uT: [2, 0, 23],
            uR: [1],
            tS: ["Grants the skill: Dire Need.", "Skills Earned:<br>Dire Need"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Critical Defence Increase",
            tM: 5,
            uT: [2, 0, 18, 2, 0, 21],
            uR: [5, 5],
            tS: ["Increases Critical Defence rating.", " Critical Defence"],
            tt1: function (a) {
                return RS(1, "+" + Math.ceil(390.45 * a) + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Unstable",
            tM: 5,
            rT: [2, 0, 17],
            rR: [5],
            tS: ["Upon being Critically hit, the Champion deals bonus damage.",
                "On every skill,<br>Targeted at you<br>On Critical Hit:<br>+", "% Damage<br>Duration:8s", "Increases applied effect to:<br>+", "% Melee Damage<br>Duration: 8s"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + (5 * a + 5) + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[3] + (5 * a + 5) + this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Fight Through the Pain",
            tM: 5,
            rT: [2, 0, 17],
            rR: [5],
            tS: ["Buffs Parry rating upon being Critically hit.<br><br>Max rank grants the Champion a Parry response upon being Critically hit.",
                "On every skill,<br>Targeted at you<br>On Critical Hit:<br>+", "% Chance to Parry<br>Duration:8s", "Increases applied effect to:<br>+", "% Parry Chance<br>Duration: 8s"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 2 * a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[3] + 2 * a + this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: "Improved Dire Need",
            tM: 5,
            rT: [2, 0, 15],
            rR: [1],
            tS: ["Increases the heal of Dire Need.", "% Dire Need Heal"],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Unbreakable",
            tM: 1,
            linkSkill: [12, 13],
            tS: ["Grants the skill: Unbreakable.", "Skills Earned:<br>Unbreakable"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Critical Chance Increase",
            tM: 5,
            tS: ["Increases Critical Chance.", "% Melee Critical Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Brutal Strikes",
            tM: 1,
            linkSkill: [14],
            tS: ["Grants the skill: Brutal Strikes.", "Skills Earned:<br>Brutal Strikes"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Wild Swings",
            tM: 5,
            tS: ["Increases Wild Attacks damage.<br><br>At max rank, Wild Attack Critical hits increase Critical Chance for a short duration.", "% Wild Attack Damage", "Wild Attack critical hits increase Critical Chance by +5% for 6s"],
            tt1: function (a) {
                var b = "";
                5 == a && (b += RS(1, this.tS[2] + b1));
                return b += RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Ebbing Ire",
            tM: 1,
            linkSkill: [15],
            tS: ["Grants the skill: Ebbing Ire.", "Skills Earned:<br>Ebbing Ire"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Vicious Strikes",
            tM: 5,
            uT: [2, 1, 10],
            uR: [5],
            tS: ["Second and Third Strikes on skills have an increased chance to critically hit.", "% Critical Strike Chance for Additional Strikes", "% Additional Strikes Critical Chance"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return 1 == a ? b2 + TR(a) + this.tt1(a) : b2 + TR(a) + RS(1, "+" + 2 * a +
                    this.tS[2])
            }
        }, {
            n: "Battle Reflexes",
            tM: 5,
            tS: ["Decreases Attack Duration.", "% Attack Duration"],
            tt1: function (a) {
                return RS(1, "-" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Hamstrung",
            tM: 5,
            tS: ["Hamstring now briefly roots the target, with a longer root duration per rank.", "Hamstring Roots Enemies", " Root Duration"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 + RS(1, "+" + (a - 1) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                return 1 == a ? b2 + TR(a) + RS(1, this.tS[1]) : b2 + TR(a) + RS(1,
                    "+" + (a - 1) + this.tS[2])
            }
        }, {
            n: "Deadly Strikes",
            tM: 5,
            rT: [2, 1, 6],
            rR: [5],
            uT: [2, 1, 14],
            uR: [5],
            tS: ["Increases Critical damage for all Strike skills.", "% Critical Damage Multiplier for all Strike Skills"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Strong Armed Swings",
            tM: 5,
            tS: ["Second and Third Strikes on skills deal additional damage.", "% Damage for Additional Strikes", "% Additional Strikes Damage"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return 1 ==
                    a ? b2 + TR(a) + this.tt1(a) : b2 + TR(a) + RS(1, "+" + 2 * a + this.tS[2])
            }
        }, {
            n: "Ferocious Strikes",
            tM: 1,
            linkSkill: [16],
            tS: ["Grants the skill: Ferocious Strikes.", "Skills Earned:<br>Ferocious Strikes"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Deep Strikes",
            tM: 3,
            rT: [2, 1, 10],
            rR: [5],
            tS: ["Strike skills now apply a Bleed on Critical Hit.", "Strike Skills apply a bleed on Critical Hit", "% Deep Strikes Bleed Damage"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 +
                    RS(1, "+" + 20 * (a - 1) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                return 1 == a ? b2 + TR(a) + RS(1, this.tS[1]) : b2 + TR(a) + RS(1, "+" + 20 * (a - 1) + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Merciful Minded",
            tM: 2,
            tS: ["Increases the health Threshold for enabling Merciful Strike.", "% Merciful Strike Health Threshold"],
            tt1: function (a) {
                return RS(1, "+" + 15 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Controlled Burn",
            tM: 1,
            linkSkill: [17],
            tS: ["Grants the skill: Controlled Burn.", "Skills Earned:<br>Controlled Burn"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Athletic",
            tM: 3,
            tS: ["Reduces the cooldown of Sprint.<br><br>At max rank, Sprint will cause the Champion's next attack to briefly stun the target.", " Sprint Cooldown"],
            tt1: function (a) {
                return RS(1, "-" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Killing Spree",
            tM: 3,
            tS: ["Killing an enemy grants a portion of the Champion's max Morale.", "After every kill-<br><br>Apply to the target:<br>Restores ",
                "% of maximum Morale"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + (Math.floor(2.5 * (a - 1)) + 5) + this.tS[2])
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
            n: "A Champion's Duel",
            tM: 1,
            linkSkill: [18],
            tS: ["Debuffs the target's damage and movement speed, while increasing the strength of the Champion.", "Skills Earned:<br>Champion's Duel"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Battle Frenzy",
            tM: 1,
            linkSkill: [19],
            uT: [2, 2, 8],
            uR: [1],
            tS: ["Grants the skill: Battle Frenzy.", "Skills Earned:<br>Battle Frenzy"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Might Increase",
            tM: 5,
            tS: ["Increases Might.", " Might"],
            tt1: function (a) {
                return RS(1, "+" + Math.ceil(11.59 * a) + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Blade Damage",
            tM: 5,
            tS: ["Increases Blade skill damage.", "% Blade Skill Damage"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) +
                    this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Barbed Wall",
            tM: 5,
            tS: ["Increases the damage of Blade Wall.", "% Blade Wall Damage"],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Broad Sweep",
            tM: 5,
            tS: ["Increases the number of Targets for Area Effect Skills.<br><br>At max rank, Swift Strike becomes Swift Blade.", " Number of Area Effect Targets", " Number of Targets"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return 1 == a ? b2 + TR(a) + this.tt1(a) : b2 + TR(a) +
                    RS(1, "+" + a + this.tS[2])
            }
        }, {
            n: "Raging Blade",
            tM: 1,
            linkSkill: [20],
            uT: [2, 2, 11],
            uR: [1],
            tS: ["Grants the skill: Raging Blade.", "Skills Earned:<br>Raging Blade"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Ardent Rage",
            tM: 3,
            rT: [2, 2, 0],
            rR: [1],
            tS: ["Increases the Fervour generated by Battle Frenzy.", " Fervour from Battle Frenzy", " Fervour"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return 1 == a ? b2 + TR(a) + this.tt1(a) : b2 + TR(a) + RS(1, "+" + a + this.tS[2])
            }
        }, {
            n: "Mighty Blast",
            tM: 5,
            tS: ["Increases Horn of Gondor damage.<br><br>At max rank, Horn of Gondor reduces Cry resistance.", "% Horn of Gondor Damage", "% Horn Damage"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return 1 == a ? b2 + TR(a) + this.tt1(a) : b2 + TR(a) + RS(1, "+" + 10 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Improved Raging Blade",
            tM: 3,
            rT: [2, 2, 7],
            rR: [1],
            tS: ["Increases the damage of Raging Blade.", "% Raging Blade Damage"],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }, {
            n: "Finesse Increase",
            tM: 5,
            tS: ["Increases Finesse Rating.", " Finesse Rating"],
            tt1: function (a) {
                return RS(1, "+" + Math.ceil(506.35 * a) + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Great Cleave",
            tM: 1,
            linkSkill: [21],
            uT: [2, 2, 15],
            uR: [1],
            tS: ["Grants the skill: Great Cleave.", "Skills Earned:<br>Great Cleave"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Battle Acuity",
            tM: 5,
            rT: [2, 2, 14],
            rR: [1],
            tS: ["Great Cleave increases AoE damage.",
                "% Great Cleave's Area Effect Damage"
            ],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Blade of Courage",
            tM: 3,
            tS: ["Blade skills have a chance to return health to the Champion on hit.", "On every Blade skill,<br>", "% chance to<br>", "Restores 5% of maximum Morale", "Increases Proc Chance to: "],
            tt1: function (a) {
                return RS(1, this.tS[1] + (5 * a + 5) + this.tS[2] + this.tS[3])
            },
            tt2: function (a) {
                return 1 == a ? b2 + TR(a) + this.tt1(a) : b2 + TR(a) + RS(1, this.tS[4] + (5 * a + 5) +
                    "%<br>" + this.tS[3])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Champion's Advantage",
            tM: 3,
            tS: ["Blade skills have a chance to bypass the target's Physical mitigation.", "On every Blade skill,<br>20% chance to<br>Champions Blade skill attacks bypass ", "% of their enemies mitigations<br>Duration: 8s", "Increases applied effect to:<br>-", "% Mitigation bypassed<br>Duration: 8s"],
            tt1: function (a) {
                return RS(1, this.tS[1] + 5 * a + this.tS[2])
            },
            tt2: function (a) {
                return 1 == a ? b2 + TR(a) + this.tt1(a) : b2 + TR(a) + RS(1, this.tS[3] + 5 * a + this.tS[4])
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
            n: ""
        }, {
            n: "Fury of Blades",
            tM: 1,
            linkSkill: [22],
            tS: ["Grants the skill: Fury of Blades.", "Skills Earned:<br>Fury of Blades"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }]
    ];
    skills = [{
        n: "Adamant",
        tt1: function () {
            return RS(7, "Fast<br>Skill Type: Buff") + b2 + RS(10, "Champions shrug off damage that would bring many to their knees.") + b2 + RS(2, "Reduces incoming Ranged and Melee Damage by 4%") + b2 + RS(6, "Each Fervour consumed increases defense by 4%.") +
                b2 + RS(2, "Decreased incoming Tactical Damage by 2%") + b2 + RS(6, "Each Fervour consumed increases defense by 2%.") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 5% of Base Power") + b1 + RS(16, "Requires at least 1 Fervour") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Sudden Defence",
        tt1: function () {
            return RS(7, "Immediate<br>Skill Type: Buff") + b2 + RS(10, "You lose all Fervour and gain a protective morale shield defending you against incoming damage.") + b2 + RS(6, "The strength of the damage protection bubble increases with each fervour expended.") +
                b2 + RS(2, "Applies a damage preventing bubble granting [?] temporary Morale.") + b1 + RS(3, "Duration: 15s") + b2 + RS(16, "Requires at least 1 Fervour<br>Removes 5 from Fervour") + b2 + RS(3, "Cooldown: 40s")
        }
    }, {
        n: "Remorseless Strike",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Melle Skill<br>Skill Type: Harmful, Strike") + b2 + RS(10, "Uses fervour to deal a devastating attack.<br><br>This attack is hard to defend.<br><br>Critical hits deal massive damage.<br><br><br>Critical hits will consume the current tier of Emboldened Blades.") +
                b2 + RS(5, "(150 + 1.5*Mastery%)" + cStr[0]) + b2 + RS(2, "Cost: 6% of Base Power") + b1 + RS(16, "Cost: 4 Fervour") + b2 + RS(3, "Cooldown: 1.8s")
        }
    }, {
        n: "Devastating Strike",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Skill Type:Harmful") + b2 + RS(10, "Single-target attack that briefly increases the enemy's miss chance.") + b2 + RS(5, "(150 + 1.5*Mastery%)" + cStr[0]) + b2 + RS(4, "+10% Miss Chance") + b1 + RS(3, "Expires if out of combat for 9 seconds.<br>Duration: 8s") + b2 + RS(2, "Cost: 5% of Base Power") + b1 + RS(16, "Adds 2 to Fervour") +
                b2 + RS(3, "Cooldown: 12s")
        }
    }, {
        n: "Exchange of Blows",
        tt1: function () {
            return RS(7, "Melee Skill") + b2 + RS(10, "You reflect damage to your attacker when hit.") + b2 + RS(2, "On any damage:<br>Reflect 50% of damage") + b1 + RS(3, "Duration 15s") + b2 + RS(2, "Cost: 6% of Base Power") + b1 + RS(16, "Cost: 2 Fervour") + b2 + RS(3, "Cooldown: 40s")
        }
    }, {
        n: "Born for Combat",
        range: "5.2m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Max Targets: 5<br>Radius: 5m<br>Skill Type: Harmful, Blade") + b2 + RS(10, "Makes a full AoE attack.") + b2 + RS(5,
                "(100 + Mastery%)" + cStr[0]) + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 20s")
        }
    }, {
        n: "Blade Storm",
        range: "5.2m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Max Targets: 5<br>Radius: 5m<br>Skill Type: Harmful, Blade") + b2 + RS(10, "Makes a full AoE attack.") + b2 + RS(5, "(100 + Mastery%)" + cStr[0]) + b2 + RS(2, "Cost: 5% of Base Power") + b1 + RS(16, "Cost: 4 Fervour") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Rend",
        range: "5.2m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Max Targets: 5<br>Radius: 5m<br>Skill Type: Harmful, Blade") +
                b2 + RS(10, "Makes a full AoE attack, which causes medium damage-over-time.") + b2 + RS(5, "(100 + Mastery%)" + cStr[0]) + b2 + RS(4, "[?] Common Damage every 2 seconds for 10 seconds.") + b1 + RS(10, "Armour protection is reduced.") + b1 + RS(4, "-722[?] Armour Value") + b1 + RS(3, "Duration: 30s") + b2 + RS(2, "Cost: 3% of Base Power") + b1 + RS(16, "Adds 2 to Fervour") + b2 + RS(3, "Cooldown: 4.2s")
        }
    }, {
        n: "Second Wind",
        tt1: function () {
            return RS(7, "Fast<br>Skill Type: Buff") + b2 + RS(10, "Consumes all current fervour and restores power. Amount of power restored is based off the amount of fervour consumed.") +
                b2 + RS(2, "+16% of Base Power per Fervour[?]") + b2 + RS(16, "Removes 5 from Fervour") + b2 + RS(3, "Cooldown: 25s")
        }
    }, {
        n: "Horn of Champions",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Max Targets: 6<br>Radius: 8m") + b2 + RS(10, "Area Effect attack that reduces enemies damage for a short duration.") + b2 + RS(5, "(100 + Mastery%)" + cStr[0]) + b2 + RS(4, "-20% Damage") + b1 + RS(3, "Duration: 6s") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Riposte",
        range: "2.5m Range",
        tt1: function () {
            return RS(7,
                "Immediate<br>Melee Skill<br>SKill Type: Harmful") + b2 + RS(10, "Powerful attack that cannot be blocked, parried, or evaded. This skill requires a parry event.") + b2 + RS(5, "(150 + 1.5*Mastery%)" + cStr[0]) + b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 2s")
        }
    }, {
        n: "Dire Need",
        tt1: function () {
            return RS(7, "Fast<br>Skill Type: Buff") + b2 + RS(10, "30% of your current power is expended. Twice the amount of power lost is transferred to Morale.") + b2 + RS(2, "Caster is drained of 30% of their current Power<br>Caster adds 200% of ammount drained to Morale") +
                b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Unbreakable",
        range: "5.2m Range",
        tt1: function () {
            return RS(7, "Immediate<br>Tactical Skill<br>Max Targets: 5<br>Radius: 5m<br>Skill Type: Harmful") + b2 + RS(10, "A mighty roar that damages surrounding opponents.") + b2 + RS(5, "(100 + [???])" + cStr[0]) + b2 + RS(16, "Requires at least 1 Fervour") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Unbreakable",
        tt1: function () {
            return RS(7, "Immediate<br>Skill Type: Buff") + b2 + RS(10, "The Champion empowers themselves by releasing a mighty cry. Each time they are hit, they grow tougher until eventually letting out a mighty roar, damaging all those around them.<br><br>Every Time you are hit, you gain a stack of Unbreakable, raising your Tactical Mitigation and Morale. At max stacks, you gain a powerful Area Effect skill to unleash upon your enemies.") +
                b2 + RS(2, "On any Common, Fire, Shadow damage:<br>Receive effect:<br>+155[?] Tactical Mitigation<br>+2% Max Morale") + b1 + RS(2, "Duration:12s<br>Duration:30s") + b2 + RS(16, "Requires at least 1 Fervour") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Brutal Strikes",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Skill Type: Harmful, Strike") + b2 + RS(10, "Makes three deadly attacks that are difficult to parry or evade.") + b2 + RS(5, "3 Attacks:" + this.tt2()) + b2 + RS(2, "Cost: 4% of Base Power") + b1 + RS(16, "Cost: 3 Fervour") +
                b2 + RS(3, "Cooldown: 4.2s")
        },
        tt2: function () {
            for (var a = "", b = 0; 3 > b; b++) a += "<br>(100 + Mastery%)" + cStr[0];
            return a
        }
    }, {
        n: "Ebbing Ire",
        range: "5.2m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Radius: 5m") + b2 + RS(10, "Reduces threat generated by the Champion.") + b2 + RS(2, "Cost: 3% of Base Power") + b1 + RS(16, "Cost: 4 Fervour") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Ferocious Strikes",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Skill Type: Harmful, Strike") + b2 + RS(10, "Makes three deadly attacks.<br><br>This attack can only be evaded; it will never miss, be parried by or blocked by an on level opponent.") +
                b2 + RS(5, "3 Attacks:" + this.tt2()) + b2 + RS(2, "Cost: 5% of Base Power") + b1 + RS(16, "Requires at least 5 Fervour<br>Removes 4 from Fervour") + b2 + RS(3, "Cooldown: 14s")
        },
        tt2: function () {
            for (var a = "", b = 0; 3 > b; b++) a += "<br>(100 + Mastery%)" + cStr[0];
            return a
        }
    }, {
        n: "Controlled Burn",
        tt1: function () {
            return RS(7, "Melee Skill<br>Skill Type: Buff") + b2 + RS(10, "Briefly increases damage, Power regen, and attack speed.<br><br>Adds 1 Fervour Pip every 5 seconds.") + b2 + RS(2, "+[?] to power regeneration<br>+15% to Melee Damage<br>Increases attack speed by 5%") +
                b1 + RS(3, "Duration: 20s<br>On application:") + b1 + RS(10, "Adds 1 Fervour Pip") + b2 + RS(3, "Every 5 seconds:") + b1 + RS(10, "Adds 1 Fervour Pip") + b1 + RS(3, "Duration:20s") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Champion's Duel",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Skill Type: Debuff") + b2 + RS(10, "Duel the enemy, increasing your damage every few seconds.<br><br>Debuffs the foe's damage and movement speed.") + b2 + RS(3, "Every 3 seconds:") + b1 + RS(2, "-10% Target Run Speed<br>Reduces out-going damage by -5%") +
                b1 + RS(3, this.tt2() + "<br>Every 3 seconds:") + b1 + RS(2, "+3% Melee Damage") + b1 + RS(3, this.tt2()) + b2 + RS(2, "Cost: 3% of Base Power") + b1 + RS(16, "Adds 1 to Fervour") + b2 + RS(3, "Cooldown: 1m")
        },
        tt2: function () {
            return "Expires if out of combat for 9 seconds.<br>Duration: 30s"
        }
    }, {
        n: "Battle Frenzy",
        tt1: function () {
            return RS(7, "Immediate") + b2 + RS(10, "Your Fervour is instantly increased.<br><br>Gain a Point of Fervour every 3 seconds for 45 seconds.") + b2 + RS(2, "Cost: 6% of Base Power") + b1 + RS(16, "Adds 2 to Fervour") + b2 + RS(3,
                "Cooldown: 1m")
        }
    }, {
        n: "Raging Blade",
        range: "8.2m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Max Targets: 8<br>Radius: 8m<br>Radius: 8m<br>Skill Type: Harmful, Blade") + b2 + RS(10, "Makes a full AoE attack, inflicting heavy damage.<br><br>Draws the enemies' attention to yourself.<br><br>This attack never misses on level opponents.") + b2 + RS(5, "2 Attacks:" + this.tt2()) + b2 + RS(2, "Cost: 3% of Base Power") + b1 + RS(16, "Cost: 3 Fervour") + b2 + RS(3, "Cooldown: 10s")
        },
        tt2: function () {
            for (var a = "", b = 0; 2 > b; b++) a += "<br>(100 + Mastery%)" +
                cStr[0];
            return a
        }
    }, {
        n: "Great Cleave",
        tt1: function () {
            return RS(10, "All AoE attacks cost 1 less Fervour Pip.") + b2 + RS(2, "-10% Power Cost") + b1 + RS(3, "Duration: 15s") + b2 + RS(2, "Cost: 4% of Base Power") + b1 + RS(16, "Requires at least 5 Fervour") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Fury of Blades",
        range: "5.2m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Radius: 5m<br>Skill Type: Harmful, Blade") + b2 + RS(10, "Deals AoE damage in front of the Champion.<br><br>Damage is increased by 30% per pip consumed.") + b2 + RS(5,
                "2 Attacks:" + this.tt2()) + b2 + RS(2, "Cost: 5% of Base Power") + b1 + RS(16, "Removes 5 from Fervour") + b2 + RS(3, "Cooldown: 20s")
        },
        tt2: function () {
            for (var a = "", b = 0; 2 > b; b++) a += "<br>(100 + Mastery%)" + cStr[0];
            return a
        }
    }];
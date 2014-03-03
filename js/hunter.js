    trees = [{
        n: "Huntsman",
        head: "A mobile, harassing mid- ranged Hunter.",
        main: "A mid-ranged mobile harasser who deals sustained damage while free to move. They unload rapid volleys, dealing damage quickly.",
        skills: [0, 1],
        low: ["No Focus Loss on Movement.<br>No Miss Chance Penalty for Movement."],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Nock on The Move",
            tS: ["Reduces the induction movement penalty.", "+20% Induction Movement Speed"],
            tt1: function () {
                return b2 +
                    RS(1, this.tS[1])
            }
        }, {
            n: "Fleetness",
            tS: ["All harmful skills have a chance to apply an effect that increases your Movement Speed.", "On every Harmful skill,<br>10% chance to<br>+10% Run Speed<br>Duration: 20s"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Barbed Hinderance",
            tS: ["Increases Barbed Arrow's damage and Slow potency.", "+30% Barbed Arrow Damage<br>+30% Barbed Arrow Slow"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Swift Release",
            tS: ["Reduces the inductions of Barbed Arrow and Split Shot.",
                "-25% Barbed Arrow and Split Shot's Induction"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Earthborn",
            tS: ["In addition to Power, Strength of Earth now restores Morale and Focus.", "+1 Focus per second while using Strength of the Earth<br><br>Strength of the Earth now restores Morale when active"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Improved Fleetness",
            tS: ["Fleetness buff now restores Focus in addition to granting a Speed buff.", "On every Harmful skill,<br>10% chance to<br>+10% Run Speed<br>+1 Focus per 5 seconds<br>Duration: 20s"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Intensified Fire",
            tS: ["Every attack made while rapid fire is active puts a stacking Physical Mastery buff on the Hunter."],
            tt1: function () {
                return ""
            }
        }]
    }, {
        n: "Bowmaster",
        head: "A stationary, long- ranged Hunter dealing great damage.",
        main: "A stationary, high-impact line that rains bursts of damage upon the assailant, using a rhythm of generating and consuming Focus to maximize DPS.",
        skills: [2],
        low: ["Needful Haste:<br>Your attacks have a 10% chance to grant:<br>-.5s Swift Bow Induction<br>-25% Attack Duration<br>Duration: 15s<br>+10 Max distance of ranged skills"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Needful Haste Increase",
            tS: ["Increases the application chance of Needful Haste.", "+15% Needful Haste Application Chance"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Shoot to Kill",
            tS: ["Increases Ranged Damage.", "+10% Ranged Damage"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Archer's Mark",
            tS: ["Attacks have a chance to apply a stacking Critical Defence Debuff on enemies.", "On every Harmful skill,<br>20% chance to", "<br>-192[?] Critical Defence",
                "<br>Duration: 10s"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1]) + RS(17, this.tS[2]) + RS(1, this.tS[3])
            }
        }, {
            n: "Hemorrhaging Shot",
            tS: ["Increases the Critical Damage of all Bow Attacks.", "+10% Critical Damage of all Bow Attacks"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Swift Mercy",
            tS: ["Increases the target health threshold of Merciful Shot and makes Swift Bow reduce the Focus cost of Merciful Shot per use.", "Merciful Shot is now useable on Targets at 70% Health or less.<br><br>Swift Bow lowers the Focus cost of Merciful Shot by 1 per use."],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Hidden Stalker",
            tS: ["Greatly increases the Stealth level of Camouflage and increases Ranged Critical Chance while camouflaged.", "+8 Camouflage Stealth Level<br>+50% Ranged Critical Chance While Camouflaged"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Marksman",
            tS: ["Heart Seeker and Upshot's cooldowns are reduced by a certain amount for every Critical and Devastating hit.", "On Every Harmful Skill,<br>On Critical Hit:<br>", "s UpShot and Heart Seeker's Cooldown",
                "<br>On Devastate:<br>"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1]) + RS(2, "-2" + this.tS[2]) + RS(1, this.tS[3]) + RS(2, "-4" + this.tS[2])
            }
        }]
    }, {
        n: "Trapper of Foes",
        head: "Uses AoE and CC ranged skills to hinder foes.",
        main: "Focuses on sustained damage, AoE, and CC, controlling the flow of battle while providing buffs for allies to gain leverage on their opponents.",
        skills: [3, 4],
        low: ["All Traps can be used while moving and have no inductions."],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Deadly Decoy",
            tS: ["Decoy becomes Deadly Decoy, which now explodes after a duration, causing damage and stunning enemies around it.", "Deadly Decoy explodes, damaging all enemies after 15s"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Triple Trap",
            tS: ["Set Trap becomes Triple Trap, placing three traps instead of one.", "Set Trap is now called Triple Trap, placing three traps instead of one."],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Master Trapper",
            tS: ["Adds effects to your traps:<br><br>Triple Trap: +15% incoming damage debuff.<br><br>Piercing Trap: Restores morale to all those who hit the target.<br><br>Deadly Decoy: +10% incoming critical chance debuff."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Strong Intimidation",
            tS: ["Increases Hunter's Fear duration and reduces the chance of their Fear being resisted.", "+5s Fear Duration<br>-5% Fear Resists"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Heightened Senses",
            tS: ["Increases the Hunter's Stealth Detection and Evasion. In addition, when the Hunter evades an attack, it will reduce the active cooldown of all Trap skills.", "On every skill,<br>Targeted at you,<br>On Evade, Partial Evade:<br>", "-5s All Trap Cooldowns<br>",
                "+6 Stealth Detection<br>+5% Evade Chance"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1]) + RS(2, this.tS[2]) + RS(1, this.tS[3])
            }
        }, {
            n: "Purge Poison",
            tS: ["Purge Poison now cures your entire Fellowship.", "Purge Poison now affects your fellowship"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Sturdy Traps",
            tS: ["Increases the grace period of your traps and removes any focus loss from movement.", "+5s Traps Grace Period.<br>No Focus Loss on Movement."],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }]
    }];
    traits = [
        [{
            n: "Impact Arrows",
            tM: 5,
            tS: ["Increases Ranged Damage.", "% Ranged Damage"],
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
            n: "Quick Draw",
            tM: 5,
            tS: ["Reduces all Inductions.", "% All Skill Inductions"],
            tt1: function (a) {
                return RS(1, "-" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Strong Draw",
            tM: 5,
            tS: ["Increases damage for skills that consume Focus.", "% Damage for skills that consume Focus"],
            tt1: function (a) {
                return RS(1,
                    "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Quick Shot Focus",
            tM: 5,
            tS: ["Quick Shot has a chance to generate 1 additional Focus.", "% Quick Shot Bonus Focus Application Chance"],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Split Shot",
            tM: 4,
            linkSkill: [6],
            tS: ["Earns the skill: Split Shot.<br><br>Subsequent ranks increase number of targets.", "Skills earned:", "Split Shot", " Split Shot Max Targets"],
            tt1: function (a) {
                var b = RS(8,
                    this.tS[1] + b1 + this.tS[2]);
                1 < a && (b += b2 + RS(1, "+" + (a - 1) + this.tS[3]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + RS(8, this.tS[1] + b1 + this.tS[2]) : b + RS(1, "+" + (a - 1) + this.tS[3])
            }
        }, {
            n: ""
        }, {
            n: "Barbed Fury",
            tM: 5,
            tS: ["Increased damage for any skill that deals damage over time.", "% Hunter Damage Over Time"],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Pathfinder",
            tM: 5,
            tS: ["Increased Find the Path movement speed buff.", "% Find the Path Movement Speed"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Precision",
            tM: 2,
            tS: ["Increases the amount of Focus Precision Stance generates.", "Precision Stance now generates ", " Focus per 5 seconds"],
            tt1: function (a) {
                return RS(1, this.tS[1] + (a + 1) + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+3" + this.tS[2])
            }
        }, {
            n: "Blood Arrow",
            tM: 2,
            linkSkill: [5],
            uT: [4, 0, 13],
            uR: [2],
            tS: ["Earns the skill: Blood Arrow.", "Skills Earned:<br>Blood Arrow",
                "Blood Arrow grants 6% of max Morale on critical hits."
            ],
            tt1: function (a) {
                var b = RS(8, this.tS[1]);
                1 < a && (b += b2 + RS(1, this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + RS(8, this.tS[1]) : b + RS(1, this.tS[2])
            }
        }, {
            n: "Exsanguinate",
            tM: 3,
            rT: [4, 0, 12],
            rR: [2],
            linkSkill: [7],
            tS: ["Blood Arrow has a chance to grant a bonus attack called Exsanguinate that costs 1 Focus and applies a strong bleed to the target.", "Skills Earned:<br>Exsanguinate", "% Exsanguinate Application Chance"],
            tt1: function (a) {
                return RS(8,
                    this.tS[1]) + b2 + this.tt3(a)
            },
            tt2: function (a) {
                var b = b2 + TR(a) + this.tt3(a);
                1 == a && (b += b1 + RS(8, this.tS[1]));
                return b
            },
            tt3: function (a) {
                return RS(1, "+" + 20 * a + this.tS[2])
            }
        }, {
            n: "Improved Intent Concentration",
            tM: 1,
            tS: ["Adds a Power restore and reduces the cooldown of Intent Concentration.", "-30s Intent Concentration Cooldown"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Strength of Earth",
            tM: 1,
            linkSkill: [8],
            tS: ["Earns the skill: Strength of the Earth.", "Skills Earned:<br>Strength of the Earth"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Shot Through The Heart",
            tM: 1,
            tS: ["Heart Seeker and Merciful Shot do additional damage to targets with bleeds on them.", "Merciful Shot and Heart Seeker deal additional damage to bleeding targets"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Volley",
            tM: 5,
            tS: ["Using a skill that costs Focus has a chance of removing the bow induction time of your next attack.", "Using a skill that cost Focus has a ",
                "% chance of removing the bow induction time of your next attack.<br>Expires if out of combat for 9 seconds.", "Increases Application Chance to: ", "%<br>Expires if out of combat for 9 seconds."
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 3 * a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[3] + 3 * a + this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Bow of the Righteous",
            tM: 1,
            tS: ["Recover Power with each successful ranged skill.", "Hunter ranged skills return a small amount of power"],
            tt1: function (a) {
                return RS(1,
                    this.tS[1])
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
            n: "Rapid Fire",
            tM: 1,
            linkSkill: [9],
            tS: ["Earns the skill: Rapid Fire.", "Skills Earned:<br>Rapid Fire"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Heart Seeker",
            tM: 2,
            linkSkill: [10],
            tS: ["First rank unlocks the Skill Heart Seeker. Second rank causes Heart Seeker to deal additional damage to Crowd Controlled targets.", "Skills Earned:<br>Heart Seeker"],
            tt1: function (a) {
                return RS(8,
                    this.tS[1])
            },
            tt2: function (a) {
                return 1 == a ? b2 + TR(a) + this.tt1(a) : ""
            }
        }, {
            n: "True Shot",
            tM: 5,
            tS: ["Decreases the target's mitigation against Penetrating Shot.", "% Target Penetrating Shot Mitigation"],
            tt1: function (a) {
                return RS(1, "-" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Critical Eye",
            tM: 5,
            uT: [4, 1, 10],
            uR: [5],
            tS: ["Increased Critical Chance.", "% Ranged Critical Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Press Onward",
            tM: 1,
            linkSkill: [11],
            uT: [4, 1, 8],
            uR: [1],
            tS: ["Earns the skill: Press Onward.", "Skills Earned:<br>Press Onward"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return 1 == a ? b2 + TR(a) + this.tt1(a) : ""
            }
        }, {
            n: "Swift and True",
            tM: 5,
            tS: ["Increases Swift Bow's damage per rank. Max rank gives Quick Shot a chance to reduce the induction of Swift Bow.", "% Swift Bow Damage", "Quick Shot has a 20% chance to reduce the induction of Swift Bow by -100%."],
            tt1: function (a) {
                var b = "";
                5 == a && (b += RS(1, this.tS[2]) + b1);
                return b += RS(1, "+" + 6 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Fast Draw",
            tM: 5,
            tS: ["Using Quick Shot grants a stacking buff which reduces the inductions of attacks.", "On each Quick Shot use:<br>", "Increases applied effect to:<br>", "This effect stacks up to three times<br>", "% Bow Inductions<br>Duration: 6s"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + RS(2, this.tS[3]) + RS(1, "-" + (5 + a) + this.tS[4])
            },
            tt2: function (a) {
                var b = b2 + TR(a),
                    b = 1 == a ? b + RS(1, this.tS[1]) : b + RS(1, this.tS[2]);
                return b += RS(2, this.tS[3]) + RS(1, "-" + (5 + a) + this.tS[4])
            }
        }, {
            n: "Perseverance",
            tM: 3,
            rT: [4, 1, 4],
            rR: [1],
            tS: ["Increases the Power and Morale gain of Press Onward.", "% Press Onward Heal<br>", "% Press Onward Power"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1] + "+" + 5 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Quick Escape",
            tM: 1,
            tS: ["Low Cut applies a root and temporarily allows you to move without losing Focus.", "No focus loss on movement for a short duration after using Low Cut<br>Low Cut now applies a 3s Root"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Deadly Precision",
            tM: 1,
            rT: [4, 1, 2],
            rR: [5],
            tS: ["Critical hits generate 1 Focus.", "On Every Harmful Skill,<br>On Critical Hit:<br>", "+1 Focus"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + RS(2, this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Strength",
            tM: 2,
            tS: ["Increases the Ranged Damage bonus of Strength Stance.", "% Strength Stance Damage"],
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
            n: "Draw Weight",
            tM: 5,
            tS: ["Increases damage for bow skills that require an induction.", "% Induction Bow Damage"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Rain of Arrows",
            tM: 2,
            linkSkill: [12],
            uT: [4, 1, 19],
            uR: [2],
            tS: ["Earns the skill: Rain of Arrows.", "% Rain of Arrows Critical ", "Skills Earned:<br>Rain of Arrows"],
            tt1: function (a) {
                return RS(8, this.tS[2]) + b2 + this.tt3(a)
            },
            tt2: function (a) {
                var b = b2 + TR(a) + this.tt3(a);
                1 == a && (b += b1 + RS(8, this.tS[2]));
                return b
            },
            tt3: function (a) {
                return RS(1, "+" + a + this.tS[1] + "Chance<br>+" + 5 * a + this.tS[1] + "Multiplier")
            }
        }, {
            n: "Mercy Kill",
            tM: 3,
            tS: ["Increases Merciful Shot's Critical Multiplier.", "% Merciful Shot Critical Multiplier"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Burn Hot",
            tM: 2,
            linkSkill: [13],
            tS: ["Earns the skill: Burn Hot.<br>Second rank reduces the cooldown and increases the damage and ranged power cost reduction of Burn Hot.",
                "+20% Burn Hot Damage<br>-30 Burn Hot Cooldown<br>-50% Burn Hot Power Cost", "Skills Earned:<br>Burn Hot"
            ],
            tt1: function (a) {
                var b = RS(8, this.tS[2]);
                1 < a && (b += b2 + RS(1, this.tS[1]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + RS(8, this.tS[2]) : b + RS(1, this.tS[1])
            }
        }, {
            n: "Hail of Arrows",
            tM: 2,
            rT: [4, 1, 15],
            rR: [2],
            tS: ["When you critically hit with Rain of Arrows, the skill has a chance to reset its cooldown.", "Rain of Arrows Critical Hits have a ", "% chance to:<br>", "Resets the Cooldown of Rain of Arrows",
                "Increases Proc Chance to: 100%"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 50 * a + this.tS[2]) + RS(2, this.tS[3])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: "Bodkin Arrows",
            tM: 5,
            tS: ["Grants mitigation penetration to your Bow attacks.", "% Mitigation Bypass", " for Bow Attacks"],
            tt1: function (a) {
                return RS(1, "-" + 2 * a + this.tS[1] + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a) + RS(1, "-" + 2 * a + this.tS[1]);
                1 == a && (b += RS(1, this.tS[2]));
                return b
            }
        }, {
            n: ""
        }, {
            n: "In For The Kill",
            tM: 1,
            tS: ["Heart Seeker puts a moderate bleed on the target and reduces incoming healing.", "Heart Seeker applies:<br>Moderate bleed damage<br>-50% incoming Healing for 8s"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Upshot",
            tM: 1,
            linkSkill: [14],
            tS: ["Earns the skill: Upshot.", "Skills Earned:<br>Upshot"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Tripwire",
            tM: 1,
            linkSkill: [15],
            tS: ["Earns the skill: Tripwire.",
                "Skills Earned:<br>Tripwire"
            ],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Natural Extracts",
            tM: 5,
            tS: ["Increased damage-over-time damage.", "% Damage Over Time Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Survival Gear",
            tM: 5,
            uT: [4, 2, 7],
            uR: [5],
            tS: ["Increases Physical and Tactical Mitigation.", "% Physical Mitigation<br>", "% Tactical Mitigation"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1] +
                    "+" + a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Combat Traps",
            tM: 5,
            tS: ["Increases Trap damage and reduces Trap cooldowns.", " Seconds off all Trap Skill Cooldowns<br>", "% Trap Damage"],
            tt1: function (a) {
                return RS(1, "-" + 3 * a + this.tS[1] + "+" + 10 * a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a),
                    b = 1 == a ? b + RS(1, "-" + 3 * a + this.tS[1]) : b + RS(1, "-" + 3 * a + " Seconds<br>");
                return b += RS(1, "+" + 10 * a + this.tS[2])
            }
        }, {
            n: "Explosive Arrow",
            tM: 1,
            linkSkill: [16],
            uT: [4, 2, 10],
            uR: [1],
            tS: ["Earns the skill: Explosive Arrow.",
                "Skills Earned:<br>Explosive Arrow"
            ],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Elusive",
            tM: 5,
            rT: [4, 2, 3],
            rR: [5],
            tS: ["Increases partial Evade Chance.", "% Partial Evade Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Rain of Thorns",
            tM: 4,
            linkSkill: [17],
            tS: ["Earns the skill: Rain of Thorns.", "Skills Earned:<br>Rain of Thorns", "% Rain of Thorns Damage"],
            tt1: function (a) {
                var b = RS(8, this.tS[1]);
                1 < a &&
                    (b += b2 + RS(1, "+" + (10 * (a - 1) + 10 * Math.floor(a / 4)) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + RS(8, this.tS[1]) : b + RS(1, "+" + (10 * (a - 1) + 10 * Math.floor(a / 4)) + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Explosive Powder",
            tM: 5,
            rT: [4, 2, 6],
            rR: [1],
            tS: ["Increases damage for Deadly Decoy and Explosive Arrow.", "% Deadly Decoy and Explosive Arrow Damage"],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Endurance",
            tM: 2,
            tS: ["Increases the Parry, and Evade Bonuses of Endurance Stance.",
                " Endurance Parry Rating<br>", " Endurance Evade Rating"
            ],
            tt1: function (a) {
                return RS(1, "+" + 365 * a + "[?]" + this.tS[1] + "+" + 365 * a + "[?]" + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Complex Mechanisms",
            tM: 5,
            tS: ["Increased Resistance penetration for all Traps.", "% Trap Resistance Penetration"],
            tt1: function (a) {
                return RS(1, "-" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Advanced Placement",
            tM: 3,
            tS: ["Changes all Traps to ranged, ground-targeted skills.", " Trap Max Range"],
            tt1: function (a) {
                return 1 < a ? RS(1, "+" + 5 * (a - 1) + this.tS[1]) : ""
            },
            tt2: function (a) {
                return 1 == a ? "" : b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Piercing Trap",
            tM: 1,
            linkSkill: [18],
            tS: ["Places a Trap that does damage over time and slows all enemies in the Trap radius.", "Skills Earned:<br>Piercing Trap"],
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
            n: "Armour Rend",
            tM: 5,
            tS: "Penetrating Shot debuffs the target's Block, Parry, and Evade ratings.;Penetrating Shot now debuffs your target:<br>; Parry Rating<br>; Evade Rating<br>; Block Rating<br>;Duration: 10s".split(";"),
            tt1: function (a) {
                return RS(1, this.tS[1]) + this.tt3(a) + RS(1, this.tS[5])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                1 == a && (b += RS(1, this.tS[1]));
                return b += this.tt3(a) + RS(1, this.tS[5])
            },
            tt3: function (a) {
                a = this.tt4(a);
                return RS(17, a + this.tS[2] + a + this.tS[3] + a + this.tS[4])
            },
            tt4: function (a) {
                var b = 0;
                3 > a ? b = 192 * a : 3 == a ? b = 768 : 4 == a ? b = 1152 : 5 == a && (b = 1920);
                return "-" + b + "[?]"
            }
        }, {
            n: ""
        }, {
            n: "Improved Distracting Shot",
            tM: 2,
            tS: ["Reduces Distracting Shot's cooldown and increases the grace period of the applied Daze.", " Distracting Shot Cooldown<br>",
                " Daze Grace Period"
            ],
            tt1: function (a) {
                return RS(1, "-" + 30 * a + this.tS[1] + "+" + a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Wounded Prey",
            tM: 1,
            tS: ["Merciful Shot applies an additional damage effect if Lingering Wound is present. Potency is based off the number of stacks on the target.", "Merciful Shot consumes the current tier of Lingering Wound on a target, dealing bonus damage."],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "The One Trap",
            tM: 1,
            linkSkill: [19],
            tS: ["Earns the skill: The One Trap.", "Skills Earned:<br>The One Trap"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }]
    ];
    skills = [{
        n: "Scourging Blow",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, cStr[2]) + b2 + RS(10, "A melee attack dealing additional damage if the enemy suffers from Barbed Arrow.<br><br>Using this skill will stop the bleeding.") + b2 + RS(5, "(100 + Mastery%)" + cStr[0]) + b2 + RS(2, "Cost: 4% of Base Power") +
                b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Barrage",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Fast<br>" + cStr[3]) + b2 + RS(10, "A quick attack that deals more damage each time it is used.") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(2, "+30% Barrage Damage<br>+50% Barrage Power Cost<br>") + RS(3, "Duration: 5s") + b2 + RS(2, "Cost: 4% of Base Power") + b1 + RS(16, "Cost: 3 Focus") + b2 + RS(3, "Cooldown: 1s")
        }
    }, {
        n: "Pinning Shot",
        range: "20m Range",
        tt1: function () {
            return RS(7, "Fast<br>" + cStr[3]) + b2 + RS(10, "A short range attack that will briefly root the target.") +
                b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(4, "5s Root<br>50% break chance on damage after 1s") + b2 + RS(2, "Cost: 4% of Base Power") + b1 + RS(16, "Cost: 3 Focus") + b2 + RS(3, "Cooldown: 8s")
        }
    }, {
        n: "Lingering Wound",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Fast<br>" + cStr[3] + "<br>Resistance: Physical") + b2 + RS(10, "Arrows leave a lingering wound.<br>This effect stacks up to 4 times.") + b2 + RS(5, "(100 + Mastery%)" + cStr[5]) + b2 + RS(4, "[?] Common Damage initially.<br>[?] Common Damage every 2 seconds for 8 seconds.") +
                b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 1s")
        }
    }, {
        n: "Decoy",
        tt1: function () {
            return RS(7, "Fast") + b2 + RS(10, "Drops a decoy that draws the attention of nearby foes.") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Blood Arrow",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Fast<br>" + cStr[3]) + b2 + RS(10, "An exceptionally damaging shot, but drains the Hunter's resolve.") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(2, "Cost: 5% of Buffed Morale") + b1 + RS(16, "Cost: 3 Focus") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Split Shot",
        range: "30m Range",
        tt1: function () {
            return RS(7, cStr[3] + "<br>Max Targets: 2<br>Radius: 5m<br>Induction: 1.5s") + b2 + RS(10, "Looses multiple arrows at once, hitting several targets in a small area.") + b2 + RS(5, "(81.65 + 0.815*Mastery%)" + cStr[4]) + b2 + RS(2, "Cost: 4% of Base Power") + b1 + RS(16, "Adds 1 to Focus") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Exsanguinate",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Fast<br>" + cStr[3]) + b2 + RS(10, "A powerful attack that leaves the target bleeding.") + b2 + RS(5, "(100 + Mastery%)" +
                cStr[4]) + b2 + RS(4, "[?] Damage initially.<br>[?] Damage every 2 seconds for 10 seconds.") + b2 + RS(2, "Cost: 2% of Base Power") + b1 + RS(16, "Cost 1 Focus") + b2 + RS(3, "Cooldown: 45s")
        }
    }, {
        n: "Strength of The Earth",
        tt1: function () {
            return RS(7, "Channel Duration: 5s") + b2 + RS(10, "Quickly recover Power in combat.<br><br>This skill is easily interrupted.") + b2 + RS(2, "Restores 2% of Base Power every 1 second.") + b2 + RS(3, "Channeled Skill<br><br>Cooldown: 1m 30s")
        }
    }, {
        n: "Rapid Fire",
        tt1: function () {
            return RS(7, "Fast") + b2 + RS(10,
                "Rapidly draw and fire shots with ease.") + b2 + RS(2, "Focus Bow skills have no Focus Cost or Requirements<br>") + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 1m 30s")
        }
    }, {
        n: "Heart Seeker",
        range: "30m Range",
        tt1: function () {
            return RS(7, cStr[3] + "<br>Induction: 3s") + b2 + RS(10, "A shot that cannot be missed, parried, evaded, or blocked.") + b2 + RS(5, "(200 + 2*Mastery%)" + cStr[4]) + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Press Onward",
        tt1: function () {
            return RS(7,
                "Fast<br>Induction: 2s") + b2 + RS(10, "Quickly heals a great deal of Morale and Power while in combat.") + b2 + RS(2, "+85% of Base Morale<br>+25% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Rain of Arrows",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Fast<br>" + cStr[3] + "<br>Max Targets: 5<br>Radius: 10m") + b2 + RS(10, "Rains arrows down upon your enemies, allowing you to hit multiple targets.") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(2, "Cost: 5% of Base Power") + b1 + RS(16, "Cost: 3 Focus") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Burn Hot",
        tt1: function () {
            return RS(7, "Fast") + b2 + RS(10, "Drawing upon deep reserves, you let fly with great strength and precision.") + b2 + RS(2, "+20% Ranged Damage<br>-10% Ranged Skill Power Cost<br>") + RS(3, "Duration: 20s") + b2 + RS(2, "Cost: 20% of Buffed Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Upshot",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Fast<br>" + cStr[3]) + b2 + RS(10, "This attack does additional damage for each point of Focus consumed.") + b2 + RS(5, "(50+(10*Focus)+(0.5+0.1*Focus)*Mastery%) " + cStr[4] +
                "<br>OR at 9 Focus:<br>(60+(10*Focus)+(0.6+0.1*Focus)*Mastery%)<br><br>e.g.<br>0 Focus = (50+0.5*Mastery%)%<br>9 Focus = (150+1.5*Mastery%)%") + b2 + RS(10, "Consumes up to 9 Focus") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 25s")
        }
    }, {
        n: "Tripwire",
        tt1: function () {
            return RS(7, "Resistance: Physical") + b2 + RS(10, "A tripwire trap can knock a monster down, sometimes creating the opportunity to use a Fellowship Manoeuvre.<br><br>Trap remains for 1 minute after being placed.") + b2 + RS(3, "Duration: 1m<br>") +
                RS(4, "5s Knockdown<br>5s Knockout") + b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Explosive Arrow",
        range: "5.2m Range",
        tt1: function () {
            return RS(7, "Fast<br>" + cStr[3] + "<br>Radius: 5m") + b2 + RS(10, "Fires an explosive arrow at your target.<br><br>The damage from Explosive Arrow is distributed among all nearby enemies.") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(2, "Cost: 2% of Base Power") + b1 + RS(16, "Cost: 3 Focus") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Rain of Thorns",
        range: "30m Range",
        tt1: function () {
            return RS(7,
                "Immediate<br>" + cStr[3] + "<br>Max Targets: 5<br>Radius: 10m<br>Resistance: Physical") + b2 + RS(10, "Rains thorn arrows down upon your enemies, allowing you to pin multiple targets.") + b2 + RS(6, "Mounted Combat Enemies: Root replaced with a mount acceleration debuff") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(4, "30s Root<br>25% break chance on damage") + b2 + RS(2, "Cost: 5% of Base Power") + b1 + RS(16, "Cost: 6 Focus") + b2 + RS(3, "Cooldown: 3m")
        }
    }, {
        n: "Piercing Trap",
        tt1: function () {
            return RS(7, "Induction: 2.5s<br>Resistance: Physical") +
                b2 + RS(10, "Places a snare to slow the enemy and cause damage over time.<br><br>Trap remains for 60 seconds after being placed.") + b2 + RS(3, "Duration: 1m<br>") + RS(4, "[?] Fire Damage initially.<br>[?] Fire Damage every 2 seconds for 20 seconds.<br>-30% Target Run Speed") + b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "The One Trap",
        range: "10m Range",
        tt1: function () {
            return RS(7, "Fast<br>Resistance:Physical") + b2 + RS(10, "Places a trap at a target location that deals heavy damage upfront and over time while slowing the enemy's movement speed.") +
                b2 + RS(3, "Duration: 1m<br>") + RS(4, "-30% Target Run Speed<br>[?] Light Damage initially.<br>[?] Light Damage every 2 seconds for 20 seconds.<br>[?]-[?] Light Damage") + b2 + RS(2, "Cost: 4% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }]
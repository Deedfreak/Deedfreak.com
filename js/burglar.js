    trees = [{
        n: "The Gambler",
        head: "Uses damage-over-time and chance to defeat foes.",
        main: "Gambler Burglars rely on the roll of the dice to inflict damage and influence outcomes.",
        skills: [2, 3],
        low: ["Your Crit Chain now unlocks on Evades<br>+40% Stealth Movement Speed"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Bob and Weave",
            tS: ["Grants a Heal-over-time when you Evade and attack.", "Evading an attack applies a Heal over Time to the Burglar. This can only trigger once every five seconds.<br>Heals [?] Morale initially.<br>Heals [?] Morale every 2 seconds for 6 seconds."],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Blind Bet",
            linkSkill: [0],
            tS: ["You make an additional attack after using Double-edged Strike, inflicting moderate damage. A random Gamble is applied to your target.", "Skills Earned:<br>Blind Bet"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Reveal Weakness",
            tS: ["Reveal Weakness gains the ability to reduce the target's Finesse.", "-[?] Reveal Weakness Finesse Debuff"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Overwhelming Odds",
            tS: ["Completing a Fellowship Manoeuvre will empower the burglar, based on what Manoeuvre was completed.",
                "Strength: +10% Melee Damage<br><br>Tactics: -10% Skill Power Cost<br><br>Conviction: +10% Gamble Chance<br><br>Guile: +5 Pulses for Cunning Attack and Gambler's Advantage"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Dealings Done",
            tS: ["You know what to do with the cards you are dealt. Lucky Strike becomes Gambler's Strike, which has a reduced cooldown, no longer requires Double-edged Strike, and can now upgrade Gambles to their max tier. Your chance of applying a gamble is also increased.",
                "Lucky Strike becomes Gambler's Strike<br>+10% Gamble Chance"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Cash Out",
            linkSkill: [1],
            tS: ["Unlocks the Song-brother's Call skill.", "Skills Earned:<br>Cash Out"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Loaded Dice",
            tS: ["You always play to win.", "+20% Even the Odds Proc Potency<br>-10s Blind Bet Cooldown<br>-10s Cash Out Cooldown"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }]
    }, {
        n: "The Quiet Knife",
        head: "Uses Stealth and positional tactics to deal damage.",
        main: "Quiet Knife Burglars pounce on their enemy from the shadows, dealing large amounts of damage on their opening attack.",
        skills: [4, 5],
        low: ["+2 Stealth Level<br>+40% Stealth Movement Speed"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Improved Knives Out",
            tS: ["Reduces the cooldown of Knives Out", "-45s Knives Out Cooldown"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Critical magnitude",
            tS: ["Increases the Critical and Devastating Critical Damage of all your skills.", "+10% Critical and Devastating Critical Damage"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Reveal Weakness",
            tS: ["Reveal Weakness gains the ability to reduce the target's Critical Defence.", "-[?] Reveal Weakness Critical Defence Debuff"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Relish Battle",
            tS: ["Your Critical hits grant a Heal-over-time.", "On every Melee skill,<br>On Critical Hit:<br>Heals [?] Morale initially.<br>Heals [?] Morale every 3 seconds for 12 seconds.<br>Cooldown: 10s"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Location is Everything",
            tS: ["Striking at the weak links in your opponent's armour allows your Critical chain attacks to bypass their defences.", "Critical Chain skills bypass 10% of your target's mitigations"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Practiced Bluff",
            tS: ["Your ability to bluff an attack through has been well practiced. Feint Attack becomes Improved Feint Attack and now activates more stealth skills. Your damage from Stealth attacks, including Improved Feint, is also increased.", "Feint Attack becomes Improved Feint Attack<br>+5% Damage from Stealth"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Improved Sneak",
            tS: ["When using Surprise Strike or Cunning Attack from Sneak they are now guaranteed to be Critical Hits.", "Note: This does not affect Feint Attack or Improved Feint Attack.", "+100% Surprise Strike Critical Chance from Stealth"],
            tt1: function () {
                return b2 + RS(4, this.tS[1]) + b2 + RS(1, this.tS[2])
            }
        }]
    }, {
        n: "The Mischief-maker",
        head: "Applies and removes Tricks to hinder foes.",
        main: "Mischief-maker Burglars control fights by tricking their foes into submission.",
        skills: [7, 8],
        low: ["Subtle Stab reduces the active cooldown of Trick Removals."],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "A Small Snag",
            linkSkill: [6],
            tS: ["Sometimes we just get caught up on the little things in life. You make sure this tends to happen more often than not.", "Skills Earned:<br>A Small Snag"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Disabling Attack",
            tS: ["You are able to use your Disable skill to greatly reduce your enemy's speed.", "Trick: Disable:<br> +5% Attack Duration<br> -5% Melee Damage<br>Trick: Improved Disable:<br> +5% Attack Duration<br> -5% Melee Damage<br> Finesse Debuff Increased"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Reveal Weakness",
            tS: ["Reveal Weakness gains the ability to reduce the target's Resistance.", "-[?] Reveal Weakness Resistance Debuff"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Joke With Legs",
            tS: ["Increases the range of your Trick skills.", "+5 Trick Range<br>-30s Riddle Cooldown"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "A Trick for all Tastes",
            tS: ["Your Trick Removal buffs are now applied to your Fellowship.", "Mischievous Glee, Mischievous Delight and Clever Retort apply their buffs to the Fellowship"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Little Annoyances",
            tS: ["You know how to make those little things really distract people. Small Snag becomes Quite a Snag, which has increased range, a more potent debuff, and no longer requires Double-edged Strike to be used first.", "A Small Snag becomes Quite a Snag"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Confound the Fools",
            tS: ["Your mastery of the Trick is second to none.", "-15s Trickster Cooldown<br>Mischievous Glee becomes Mischievous Delight<br>Trick: Disable becomes Trick: Improved Disable"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }]
    }];
    traits = [
        [{
            n: ""
        }, {
            n: "Leaf Walker",
            tM: 5,
            tS: ["You are harder to detect while Stealthed.", " Stealth Level"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Stick and Move",
            tM: 5,
            uT: [0, 0, 11],
            uR: [5],
            tS: ["Boosts Evade chance.", "% Evade Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Honed Wit",
            tM: 5,
            tS: ["Increases the damage of damage-over-time effects.",
                "% Burglar Bleed Damage"
            ],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Gambler's Advantage",
            tM: 1,
            linkSkill: [9],
            uT: [0, 0, 14],
            uR: [1],
            tS: ["Earns the skill: Gambler's Advantage.", "Skills Earned:<br>Gambler's Advantage"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Roll the Dice",
            tM: 5,
            tS: ["Increases Physical Mastery.", "% Melee Damage"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }, {
            n: "Cruel Odds",
            tM: 5,
            tS: ["Increases chance of applying a Gamble.", "% Gamble Chance"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Swift and Subtle",
            tM: 5,
            rT: [0, 0, 3],
            rR: [5],
            tS: ["Improves the Heal over Time from Bob and Weave.", "% Bob and Weave Healing"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Double Down",
            tM: 1,
            tS: ["The skills Provoke and Diversion have a chance to apply a Gamble.<br>Provoke's chance is increased when applied from Stealth.",
                "Provoke and Diversion have a chance to apply a Gamble."
            ],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Aggravated Bleeds",
            tM: 2,
            rT: [0, 0, 6],
            rR: [1],
            tS: ["Increases the duration of damage-over-time dealt by Gambler's Advantage and Cunning Attack.", " Damage over Time Pulses"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Exposed Throat",
            tM: 1,
            linkSkill: [10],
            tS: ["Earns the skill: Exposed Throat.", "Skills Earned:<br>Exposed Throat"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Even the Odds",
            tM: 5,
            tS: ["The skill Double-edged Strike may grant you a random buff when used on a target with an active Gamble.", "% Even the Odds Chance"],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "High Roller",
            tM: 5,
            tS: ["Increases the damage of skills:<br>Lucky Strike<br>Gambler's Strike<br>Hedge Your Bet<br>Blind Bet<br>Gambler's Advantage<br>Cash Out.",
                "% Gamble-applying Skill Damage"
            ],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "A Sure Thing",
            tM: 5,
            tS: ["Increases the damage done by harmful Gambles.", "% Harmful Gamble Damage"],
            tt1: function (a) {
                return RS(1, "+" + 3 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "All In",
            tM: 1,
            linkSkill: [11],
            tS: ["Earns the skill: All In.", "Skills Earned:<br>All In"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Footpad",
            tM: 5,
            uT: [0, 1, 8],
            uR: [5],
            tS: ["You are harder to detect while Stealthed.", " Stealth Level"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Agile Hands",
            tM: 5,
            tS: ["Increases Critical Magnitude.", "% Skills Critical Multiplier"],
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
            n: "Stun Dust",
            tM: 1,
            linkSkill: [12],
            tS: ["Earns the skill: Stun Dust.", "Skills Earned:<br>Stun Dust"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Strike From Shadows",
            tM: 5,
            tS: ["Attacks enhanced by Stealth are more likely to Crit.", "% Stealth-enhanced Skills Crit Chance", "% Critical Chance from Stealth"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + a + this.tS[2])
            }
        }, {
            n: "Deft Strikes",
            tM: 5,
            tS: ["Increases Critical Chance.", "% Melee Critical Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Hidden Dagger",
            tM: 5,
            rT: [0, 1, 0],
            rR: [5],
            tS: ["Deal more damage from Stealth.", "% From Stealth Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Dance of Blades",
            tM: 5,
            uT: [0, 1, 13],
            uR: [5],
            tS: ["Increases the damage of your Critical Chain attacks.", "% Critical Response Skill Damage"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Aim",
            tM: 1,
            linkSkill: [13],
            uT: [0, 1, 19],
            uR: [1],
            tS: ["Earns the skill: Aim.", "Skills Earned:<br>Aim"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Vital Points",
            tM: 3,
            rT: [0, 1, 9],
            rR: [5],
            tS: "Critical Response skills have a chance to lower your target's Critical Defence.;On every Critical Chain skill,<br>;% chance to;-5% Critical Defence;Duration: 8s;Increases Proc Chance to: ".split(";"),
            tt1: function (a) {
                return RS(1, this.tS[1] + 15 * a + this.tS[2]) + b1 + RS(17, this.tS[3]) +
                    b1 + RS(1, this.tS[4])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[5] + 15 * a + "%")
            }
        }, {
            n: "Back Stab",
            tM: 5,
            tS: ["Positional attacks deal more damage.", "% Positional Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Flashing Blades",
            tM: 1,
            linkSkill: [14],
            tS: ["Earns the skill: Flashing Blades.", "Skills Earned:<br>Flashing Blades"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Well-practiced",
            tM: 3,
            rT: [0, 1, 11],
            rR: [1],
            tS: ["The skills Aim and Find Footing have reduced cooldowns.", "s Aim Cooldown<br>-", "s Find Footing Cooldown"],
            tt1: function (a) {
                return RS(1, "-" + 3 * a + this.tS[1] + 20 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Improved Hide In Plain Sight",
            tM: 5,
            tS: ["The skill Hide in Plain Sight has a reduced cooldown.", "s Hide in Plain Sight Cooldown", "Hide in Plain Sight removes all Poison, Disease, Fear and Wound effects from the Burglar"],
            tt1: function (a) {
                var b =
                    "";
                5 == a && (b += RS(1, this.tS[2] + b1));
                return b += RS(1, "-" + 36 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Trip",
            tM: 1,
            linkSkill: [15],
            tS: ["Earns the skill: Trip.", "Skills Earned:<br>Trip"],
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
            n: "Coup De Gr&acirc;ce",
            tM: 1,
            linkSkill: [16],
            tS: ["Earns the skill: Coup De Gr&acirc;ce.", "Skills Earned:<br>Coup De Gr&acirc;ce"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Heartening Prank",
            tM: 5,
            tS: ["Increases max Morale.", "% Maximum Morale"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Practical Joke",
            tM: 5,
            uT: [0, 2, 9],
            uR: [5],
            tS: ["Increases Trick and Trick Removal skill damage.", "% Trick and Trick Removal Damage"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Trick: Dust in the Eyes",
            tM: 1,
            linkSkill: [17],
            tS: ["Earns the skill: Trick: Dust in the Eyes.",
                "Skills Earned:<br>Trick: Dust in the Eyes"
            ],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Thick Skin",
            tM: 5,
            tS: ["Increases Physical and Tactical mitigation.", "% Physical Mitigation<br>+", "% Tactical Mitigation"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Startling Twist",
            tM: 2,
            linkSkill: [18],
            tS: ["Rank 1 earns the skill: Startling Twist.<br><br>Rank 2 allows Startling Twist to affect multiple enemies.",
                "Skills Earned:<br>Startling Twist", "Startling Twist affects multiple enemies"
            ],
            tt1: function (a) {
                var b = RS(8, this.tS[1]);
                1 < a && (b += RS(1, b1 + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Trick: Counter Defence",
            tM: 2,
            linkSkill: [19],
            tS: ["Earns Trick: Counter-Defence.", "Skills Earned:<br>Trick: Counter Defence", "-2% Critical Hit Chance on Trick: Counter Defence"],
            tt1: function (a) {
                var b = RS(8, this.tS[1]);
                1 < a && (b += RS(1, b1 + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[2])
            }
        }, {
            n: "Perplexing Proposition",
            tM: 5,
            rT: [0, 2, 1],
            rR: [5],
            tS: ["Trick Removal skills can be used more often.", "s Trick Removal Cooldown"],
            tt1: function (a) {
                return RS(1, "-" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Playful Mind",
            tM: 3,
            tS: ["Increases the duration of your Tricks.", "s Tricks Duration"],
            tt1: function (a) {
                return RS(1, "+" + 3 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Trick: Enrage",
            tM: 2,
            linkSkill: [20],
            tS: ["Earns Trick: Enrage.", "Skills Earned:<br>Trick: Enrage", "+3% Enrage Incoming Damage"],
            tt1: function (a) {
                var b = RS(8, this.tS[1]);
                1 < a && (b += RS(1, b1 + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[2])
            }
        }, {
            n: "Complicated Terms",
            tM: 5,
            tS: ["Increases the grace period of your crowd control effects.", "s Dazed Grace Period", "s Grace Period"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b =
                    1 == a ? b + this.tt1(a) : b + RS(1, "+" + a + this.tS[2])
            }
        }, {
            n: "Comedic Timing",
            tM: 2,
            tS: ["Tricks and Trick Removal skills are harder to resist.", "% Resistance Penetration"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Self Adulation",
            tM: 5,
            tS: ["Increases the potency of heals.", "% Trick Removal Healing"],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Clever Retort",
            tM: 1,
            linkSkill: [21],
            tS: ["Earns the skill: Clever Retort.",
                "Skills Earned:<br>Clever Retort"
            ],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Burglar's Antidote",
            tM: 1,
            tS: ["The skill Burglar's Antidote now applies to the Fellowship.", "Cure Poison and Burglar's Antidote now affect the entire Fellowship"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Appraising Eye",
            tM: 1,
            tS: ["The skill reveal Weakness does more damage.", "+2% Reveal Weakness Damage"],
            tt1: function (a) {
                return RS(1,
                    this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Opportunist",
            tM: 5,
            tS: ["The skill Subtle Stab does additional damage to targets with an active Trick on them. Additional ranks increase the damage dealt.", "Subtle Stab deals additional damage against Tricked foes", "% Opportunism Damage"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += RS(1, "<br>+" + 10 * (a - 1) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 10 * (a - 1) + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Trickster",
            tM: 1,
            linkSkill: [22],
            tS: ["Your next Trick is applied to multiple targets and can stack a normal Trick.", "Skills Earned:<br>Trickster"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }]
    ];
    skills = [{
        n: "Blind Bet",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee, Critical Hit Chain") + b2 + RS(10, "After using Double-edged Strike, make a quick attack to apply a random Gamble to the target.") + b2 + RS(5, "(110 + 1.1*Mastery%)" +
                cStr[0]) + b2 + RS(10, "Applies a Debuffing Gamble of random strength") + b1 + RS(4, "60% chance to apply") + b2 + RS(2, "Cost: 1% of Base Power") + b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "Cash Out",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Resistance: Physical<br>Skill Type: Melee") + b2 + RS(10, "A quick attack that consumes an existing Damaging or Debuffing Gamble to apply an effect based on type and tier.") + b2 + RS(5, "(125 + 1.25*Mastery%)" + cStr[0]) + b2 + RS(6, "Consumes Damaging Gamble for instant damage.<br><br>Consumes Debuffing Gamble to give the Burglar an Evade Rating buff.") +
                b2 + RS(2, "Cost: 1% of Base Power") + b2 + RS(3, "Cooldown: 20s")
        }
    }, {
        n: "Lucky Strike",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee, Critical Hit Chain") + b2 + RS(10, "Activated by Double-edged Strike, this attack applies a Damaging Gamble.") + b2 + RS(5, "(110 + 1.1*Mastery%)" + cStr[0]) + b2 + RS(10, "Applies a Damaging Gamble of random Strength") + b2 + RS(2, "Cost: 1% of Base Power") + b2 + RS(3, "Apply to target on Critical and Devastating Critical:") + b1 + RS(1, "+40% Gamble Chance<br>Duration: 15s") +
                b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "Hedge Your Bet",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee") + b2 + RS(10, "A quick attack that increases the potency of an existing Gamble.") + b2 + RS(5, "(125 + 1.25*Mastery%)" + cStr[0]) + b2 + RS(10, "Increases the tier of an existing Gamble") + b2 + RS(2, "Cost: 1% of Base Power") + b2 + RS(3, "Cooldown: 7s")
        }
    }, {
        n: "Knives Out",
        range: "5.2m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Max Targets: 3<br>Radius: 5m") + b2 + RS(10, "A quick attack that enables counter-attacks.<br><br>Temporarily reduces incoming melee damage, but you cannot Parry, Evade or Block while concentrating on counter-attacks.") +
                b2 + RS(5, "(110 + 1.1*Mastery%)" + cStr[0]) + b2 + RS(2, "Cannot Parry, Evade or Block<br>Sets Incoming Melee Damage to 20%<br>On Melee Skill damage:<br>Reflect 30% of damage") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 1% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Feint Attack",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee, Critical Hit Chain") + b2 + RS(10, "Activated by Double-edged Strike, this quick feint attack enables Surprise Strike while out of stealth.") + b2 + RS(5,
                "(110 + 1.1*Mastery%)" + cStr[0]) + b2 + RS(2, "Enables Surprise Strike from Stealth") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Apply to target on Critical and Devastating Critical:") + b1 + RS(1, "+10% Positional Damage<br>+20% Skills Critical Multiplier<br>Duration: 15s") + b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "A Small Snag",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee, Critical Hit Chain") + b2 + RS(10, "Activated by Double-edged Strike, you attack the enemy's foot, rooting them to the spot and weakening their defences.") +
                b2 + RS(6, "Mounted Combat Enemies: Root replaced with a mount acceleration debuff") + b2 + RS(5, "(110 + 1.1*Mastery%)" + cStr[0]) + b2 + RS(4, "15s Root<br>50% break chance on damage<br>+2% Incoming Damage<br>+5% Attack Duration") + b1 + RS(3, "Duration: 15s") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Apply to target on Critical and Devastating Critical:") + b1 + RS(1, "+15% Trick Removal Effect<br>Duration: 15s") + b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "Mischievous Glee",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Skill Type: Debuff") +
                b2 + RS(10, "Restore your Morale by removing an active Trick from the foe.<br><br>This skill will never miss against on-level targets, nor can it be parried, blocked, or evaded.") + b2 + RS(2, "Heals [?] Morale initially.<br>Heals [?] Morale every 3 seconds for 18 seconds.") + b2 + RS(10, "Breaks target out of Dazed") + b2 + RS(2, "Cost: 4% of Base Power") + b2 + RS(3, "Cooldown: 45s")
        }
    }, {
        n: "Trick: Disable",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Resistance: Physical<br>Skill Type: Debuff") +
                b2 + RS(10, "Strike to slow the foe's attacks.<br><br>Limit: One Trick per target.") + b2 + RS(5, "(125 + 1.25*Mastery%)" + cStr[0]) + b2 + RS(4, "+15% Attack Duration<br>-10% Damage") + b1 + RS(3, "Duration: 15s") + b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Gambler's Advantage",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee, Critical Hit Chain") + b2 + RS(10, "A Critical hit enables the Burglar to strike, applying a stacking bleed to the target.<br><br>Deals extra damage when attacking from behind.") +
                b2 + RS(5, "(110 + 1.1*Mastery%)" + cStr[0]) + b2 + RS(4, "[?] Common Damage every 3 seconds for 15 seconds.") + b2 + RS(2, "Cost: 1% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Exposed Throat",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee, Critical Hit Chain") + b2 + RS(10, "After using Double-edged Strike, make a harmful attack.<br><br>Chance to stun an enemy for 6s to enable a Fellowship Manoeuvre for your group.") + b2 + RS(5, "(110 + 1.1*Mastery%)" + cStr[0]) + b2 + RS(4, "20% chance to apply<br>6s Stun") +
                b2 + RS(5, "Starts Fellowship Manoeuvre") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "All In",
        tt1: function () {
            return RS(7, "Fast<br>Skill Type: Buff") + b2 + RS(10, "Briefly boost your damage, Evade chance, and Finesse rating to try to finish a fight -- but beware if the enemy survives.") + b2 + RS(6, "Landing a Killing Blow before All In expires prevents the negative effect") + b2 + RS(2, "Increases attack speed by 50%<br>+50% Melee Damage<br>+20% Evade Chance<br>+[?] Finesse Rating") + b1 + RS(3, "Duration: 15s") +
                b2 + RS(5, "Applied on expiration:") + b1 + RS(2, "Slows attack speed by 50%<br>-50% Melee Damage<br>-20% Evade Chance<br>-[?] Finesse Rating") + b1 + RS(3, "Duration: 15s") + b2 + RS(2, "Cost: 4% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Stun Dust",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Debuff") + b2 + RS(10, "Stunning the enemy by blowing dust in its face.") + b2 + RS(6, "Mounted Combat Enemies: Stun replaced with a mount speed debuff") + b2 + RS(4, "5s Stun") + b2 + RS(2, "Cost: 4% of Base Power") +
                b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Aim",
        tt1: function () {
            return RS(7, "Fast<br>Skill Type: Buff") + b2 + RS(10, "Careful aim results in a Critical Hit and reduced miss chance on the next damaging attack.<br><br>Using this skill will not break Stealth.") + b2 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 1m 20s")
        }
    }, {
        n: "Flashing Blades",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee, Critical Hit Chain") + b2 + RS(10, "After using Double-edged Strike, make a pair of powerful attacks against the enemy.") +
                b2 + RS(24, "Dual-wielding required.") + b2 + RS(5, "2 Attacks:<br>(110 + 1.1*Mastery%)" + cStr[0] + "<br>(125 + 1.25*Mastery%) of Off-hand + bonus Damage") + b2 + RS(2, "Cost: 1% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Trip",
        range: "3.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee") + b2 + RS(10, "While Stealthed, stun an enemy to enable a Fellowship Manoeuvre for your group.") + b2 + RS(5, "(110 + 1.1*Mastery%)" + cStr[0]) + b2 + RS(4, "5s Stun") + b1 + RS(5, "Starts Fellowship Manoeuvre") + b2 + RS(2,
                "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Coup De Gr&acirc;ce",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Skill Type: Melee") + b2 + RS(10, "A powerful triple attack that boosts Critical damage and marks the target.<br><br>If the target is defeated while still marked, you will temporarily enter Stealth.") + b2 + RS(5, "3 Attacks:<br>(110 + 1.1*Mastery%)" + cStr[0] + "<br>(125 + 1.25*Mastery%) of Off-hand + bonus Damage<br>(150 + 1.5*Mastery%)" + cStr[0]) + b2 + RS(10, "If the target of Coup de Gr&acirc;ce is killed while marked, the Burglar enters Stealth.") +
                b1 + RS(3, "Duration: 4s") + b2 + RS(2, "Cost: 4% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Trick: Dust in the Eyes",
        range: "5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Max Targets: 3<br>Radius: 5m<br>Resistance: Physical<br>Skill Type: Debuff") + b2 + RS(10, "Blind the enemy, causing them to miss often.<br><br>Limit: One Trick per target.") + b2 + RS(3, "+20% Miss Chance") + b1 + RS(3, "Duration: 15s") + b1 + RS(3, "-25% Run Speed") + b1 + RS(3, "Duration: 15s") + b1 + RS(10, "Breaks target out of Dazed") + b2 + RS(2,
                "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Startling Twist",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Resistance: Physical<br>Skill Type: Debuff") + b2 + RS(10, "Stun the enemy and remove Corruptions by removing an active Trick.") + b2 + RS(6, "Mounted Combat Enemies: Stun replaced with a mount speed debuff") + b2 + RS(4, "8s Stun") + b1 + RS(10, "Breaks target out of Dazed") + b1 + RS(4, "Removes up to 3 Corruption effects from the target") + b2 + RS(2, "Cost: 4% of Base Power") + b2 +
                RS(3, "Cooldown: 45s")
        }
    }, {
        n: "Trick: Counter Defence",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill<br>Resistance: Physical<br>Skill Type: Debuff") + b2 + RS(10, "Strike to lower the enemy's defences.<br><br>Limit: One Trick per target.") + b2 + RS(5, "(125 + 1.25*Mastery%)" + cStr[0]) + b2 + RS(4, "-[?] Target Block, Parry, and Evade Ratings<br>-[?] Critical Defence") + b1 + RS(3, "Duration: 15s") + b2 + RS(2, "Cost: 2% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Trick: Enrage",
        range: "20m Range",
        tt1: function () {
            return RS(7,
                "Fast<br>Melee Skill<br>Resistance: Physical<br>Skill Type: Debuff") + b2 + RS(10, "Cause the enemy to take more damage.<br><br>Limit: One Trick per target.") + b2 + RS(5, "(125 + 1.25*Mastery%)" + cStr[0]) + b2 + RS(4, "+2% Incoming Damage") + b1 + RS(3, "Duration: 15s") + b1 + RS(10, "Breaks target out of Dazed") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Clever Retort",
        range: "2.5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Resistance: Song<br>Skill Type: Debuff") + b2 + RS(10, "Take a chance when removing an active Trick; apply one of four effects to the enemy based on the Trick removed.<br><br>Breaks target out of Dazed") +
                b2 + RS(2, "Cost: 4% of Base Power") + b2 + RS(3, "Cooldown: 45s")
        }
    }, {
        n: "Trickster",
        tt1: function () {
            return RS(7, "Fast<br>Skill Type: Buff") + b2 + RS(10, "Tricks affect many enemies, and different tricks can stack. Your Tricks and Trick Removals deal additional damage for a short time.") + b2 + RS(2, "Trick Skills are now AoE and the next Trick can stack with an existing Trick") + b1 + RS(3, "Expires if out of combat for 9 seconds.") + b1 + RS(2, "+50% Trick and Trick Removal Damage") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 4% of Base Power") +
                b2 + RS(3, "Cooldown: 1m")
        }
    }]
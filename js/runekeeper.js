    trees = [{
        n: "Benediction of Peace",
        head: "Provides heal-over-time support for allies.",
        main: "Powerful healers, using Heal-over-time skills to sustain the Fellowship's health, able to redirect or absorb attacks flung at their allies.",
        skills: [2, 3],
        low: ["Frost Armour:<br>Healing skills have a 20% chance to apply:<br>-10% Incoming Damage<br>Duration: 8s"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Frost Affinity",
            tS: ["Grants bonus healing.", "Sets Outgoing Healing Modifier to 20%<br>+20% Chill of Winter Damage"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Writ of Well-being",
            tS: ["Writ of Health now tiers down instead of dispelling upon expiration.", "Writ of Health now tiers down instead of dispelling"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Rousing Words",
            linkSkill: [0],
            tS: ["A channelled skill that heals Morale with every second.", "Skills Earned:<br>Rousing Words"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Fellowship Narrative",
            tS: ["Healing attunement increases the Critical chance of healing abilities and effects. Also increases the healing of Epic For The Ages.",
                "+1.5% Critical Chance per Healing Attunement Pip<br>+25% Epic For The Ages Heal"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Glorious Foreshadowing",
            tS: ["Incoming healing is increased by 5% for each Writ of Health tier on a target.", "Writ of Health increases the Incoming Healing of the target by +5% of every tier"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Master of Allusion",
            tS: ["Benediction of Peace: Crits reduce the induction time of the Runekeeper's healing skills for a short duration.",
                "Healing skill Critical Hits:<br>-40% Healing Skill Inductions<br>Duration: 8s"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Our Fates Entwined",
            linkSkill: [1],
            tS: ["Grants a Runestone that can be placed at range, redirecting damage to itself for a moderate duration.", "Skills Earned:<br>Our Fates Entwined"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }]
    }, {
        n: "Cleansing Flame",
        head: "Deals damage-over-time using inductions.",
        main: "Uses long-range, induction-based attacks that deal damage-over-time for sustained high DPS.",
        skills: [5, 6],
        low: ["Searing Words:<br>Fire skills have a 20% chance to apply:", "30[?]-43[?]*(100+Tact%)% Fire Damage initially.<br>157[?]-222[?]*(100+Tact%)% Fire Damage every 2 seconds for 6 seconds."],
        tt1: function () {
            return RS(1, this.low[0]) + b1 + RS(17, this.low[1])
        },
        bonuses: [{
            n: "Fire Affinity",
            tS: ["Grants bonus Fire damage.", "+20% Wrath of Flame Damage"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Writ of Blazing Fire",
            tS: ["Writ of Fire now tiers down instead of dispelling upon expiration", "Writ of Fire now tiers down instead of dispelling"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Scathing Retort",
            tS: ["Reduces the cooldown of Smouldering Wrath.<br><br>Smouldering Wrath puts a stacking Tactical Mastery buff on the Runekeeper for 8s.", "Smouldering wrath puts a Stacking Tactical Mastery Buff on the Runekeeper<br>-5s Smouldering Wrath Cooldown"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Essay of Fire",
            linkSkill: [4],
            tS: ["Powerful damage over time skill that removes the induction of your next fire attack.", "Skills Earned:<br>Essay of Fire"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Master of Connotation",
            tS: ["Fire skills put a stack of Master of Connotation on the Runekeeper.<br><br>At 5 stacks, their next Writ heals Morale and has no induction.", "Fire skills place Master of Connotation place a stacking buff on the Runekeeper. At five stacks, Writ of Fire has no induction and heals the Runekeeper for 3% of max Morale."],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Extreme Heat",
            tS: ["Searing Words: damage is increased by 10% for each current tier of Writ of Fire on the target.",
                "On every Fire skill, 20% chance to", "[?]-[?] Fire Damage initially.<br>[?]-[?] Fire Damage every 2 seconds for 6 seconds."
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1]) + b1 + RS(17, this.tS[2])
            }
        }, {
            n: "Seething Truth",
            tS: ["Grants various bonuses to Fire Skills.", "Seething Truth: Combustion spreads the current tier of Writ of Fire to all enemies hit<br>Increases Smouldering Wrath Damage by 100%<br>Essay of Fire's Initial Damage is increased by 30%"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }]
    }, {
        n: "Solitary Thunder",
        head: "Deals short-ranged instant damage.",
        main: "A mobile, burst-damage line, with a number of instant-cast and potent skills to increase DPS.",
        skills: [8, 9],
        low: ["Charged:<br>Lightning skills have a 20% chance to apply:<br>Sustaining Bolt is now free.<br>Duration: 8s"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Lightning Affinity",
            tS: ["Grants bonus lightning damage.", "+20% Fury of Storm Damage"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Shocked",
            tS: ["Writ of Lightning also increases enemy inductions and attack duration.",
                "Writ of Lightning Increases enemy inductions by 8% and attack duration by 5% per tier"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Master of Tragedy",
            tS: ["Lightning skills critical hits restore a portion of the Rune-keepers max power.", "Lightning skill Critical Hits:<br>Restores 2% of maximum Power"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Tale of the Storm",
            tS: ["Grants bonus Critical Chance and Critical Damage per Battle attunement.", "+1% Critical Chance per Battle Attunement Pip<br>+3% Critical Damage per Battle Attunement Pip"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Sustenance",
            tS: ["Sustaining Bolt also heals Morale, its potency based on Battle attunement.", "Sustaining Bolt now heals the Runekeeper as well. Potency of heal is based off Battle Attunement"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Refutation",
            tS: ["Critical strikes cause the next lightning skill to penetrate 10% of the target's Tactical mitigation.", "On every Lightning skill,<br>On Critical Hit:<br>Next Lightning Attack will Penetrate 10% of Target's Tactical Mitigations<br>Expires if out of combat for 9 seconds.<br>Duration: 30m"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Static Surge",
            linkSkill: [7],
            tS: ["Lightning skills have a chance to grant a skill that deal lightning damage to enemies in front of you.", "Skills Earned:<br>Static Surge", "Lightning skills have a 10% to grant the Rune-keeper the skill Static Surge"],
            tt1: function () {
                return b2 + RS(8, this.tS[1]) + b2 + RS(1, this.tS[2])
            }
        }]
    }];
    traits = [
        [{
            n: "Light on One's Feet",
            tM: 5,
            tS: ["Increases Evade Chance", "% Evade Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Mending Verse",
            tM: 1,
            linkSkill: [10],
            tS: ["Earns the skill: Mending Verse.", "Skills Earned:<br>Mending Verse"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Determination",
            tM: 5,
            tS: ["Increases Will", " Will"],
            tt1: function (a) {
                return RS(1, "+" + Math.ceil(12.54 * a) + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Rune of Restoration",
            tM: 1,
            linkSkill: [11],
            uT: [7, 0, 8],
            uR: [1],
            tS: ["Earns the skill: Rune of Restoration.",
                "Skills Earned:<br>Rune of Restoration"
            ],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Prelude of Power",
            tM: 5,
            tS: ["Prelude of Hope also gives a Power-over-time effect to its target.", "Adds a Power over time gain to Prelude to Hope", "% Power Restore"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 + RS(1, "+" + 5 * (a - 1) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 5 * (a - 1) + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Prophetic Word",
            tM: 5,
            tS: ["Healing skills have a chance to reduce healing skill cooldowns", "% Mending Verse Healing"],
            tt1: function (a) {
                return RS(1, "+" + 6 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Rune of Endurance",
            tM: 3,
            rT: [7, 0, 4],
            rR: [1],
            tS: ["Increases the healing done by Rune of Restoration. Max Rank makes the Rune of Restoration Ground Targeted.", "Increases Rune of Restoration Healing by +", "% Rune of Restoration Heal"],
            tt1: function (a) {
                return RS(1, this.tS[1] + 10 * a + "%")
            },
            tt2: function (a) {
                var b =
                    b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 10 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Rallying Verse",
            tM: 5,
            tS: ["Targets revived by Nothing Truly Ends return with additional Power and Morale.", "Increases the amount of Morale allies revive with from Nothing Truly Ends by +", "%<br>Increases the amount of Power allies revive with from Nothing Truly Ends by +", "% Nothing Truly Ends Morale Restore<br>+", "% Nothing Truly Ends Power Restore"],
            tt1: function (a) {
                return RS(1, this.tS[1] + 5 * a + this.tS[2] + 5 * a + "%")
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 5 * a + this.tS[3] + 5 * a + this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: "Unwavering Confidence",
            tM: 5,
            tS: ["Epic for The Ages provides additional Heal-over-time.", "Adds a heal over time to Epic for the Ages", "% Epic For The Ages Heal Over Time"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 + RS(1, "+" + 5 * (a - 1) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 5 * (a - 1) + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Truly Epic",
            tM: 4,
            tS: ["Critical heals with Epic for The Ages heal all allies around the target for a percentage of the heal.", "Critical heals with Epic for The Ages heal all allies around the target.", "% Epic For The Ages Splash Heal"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 + RS(1, "+" + 10 * (a - 1) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 10 * (a - 1) + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Self-esteem Boost",
            tM: 5,
            tS: ["Epic for The Ages, Mending Verse, or Rousing Words heal the Rune-keeper for a small amount.",
                "Epic for The Ages, Mending Verse, and Rousing Words heal the Runekeeper for:<br>+[?]-[?] Morale", "% Self Esteem Heal"
            ],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 + RS(1, "+" + 5 * (a - 1) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 5 * (a - 1) + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Essay of Exaltation",
            tM: 1,
            linkSkill: [12],
            uT: [7, 0, 23],
            uR: [1],
            tS: ["Earns the skill: Essay of Exaltation.", "Skills Earned:<br>Essay of Exaltation"],
            tt1: function (a) {
                return RS(8,
                    this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Exalted",
            tM: 5,
            rT: [7, 0, 22],
            rR: [1],
            tS: ["Increases the Bubble duration of Words of Exaltation and Essay of Exaltation.<br><br>Also increases the Heal of Essay of Exaltation.", "% Essay of Exaltation Heal<br>+", " Essay of Exaltation Bubble Duration"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1] + Math.floor(1.2 * a) + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Bombastic Inspiration",
            tM: 1,
            linkSkill: [13],
            tS: ["Earns the skill: Bombastic Inspiration.",
                "Skills Earned:<br>Bombastic Inspiration"
            ],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Deliberate Address",
            tM: 5,
            tS: ["Increases Tactical Damage.", "% Tactical Damage"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Conflagration of Runes",
            tM: 5,
            tS: ["Increases the damage of Fiery Ridicule.<br><br>At max rank, Fiery Ridicule affects up to three targets.", "% Fiery Ridicule Damage"],
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
            n: "Overflowing Confidence",
            tM: 5,
            tS: ["Self Motivation now heals Morale and reduces Power cost of skills.", "Adds a heal and a power cost reduction buff to Self Motivation", "% Self Motivation heal<br>-", "% Self Motivation power Cost"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 + this.tt3(a - 1));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + this.tt3(a - 1)
            },
            tt3: function (a) {
                return RS(1, "+" + 5 * a + this.tS[2] +
                    4 * a + this.tS[3])
            }
        }, {
            n: ""
        }, {
            n: "Tale of Rage",
            tM: 5,
            tS: ["Fire skills increase the fire damage of the Runekeeper.<br><br>This effect can stack up to five times.", "On every Fire skill,", "This effect stacks up to five times", "% Fire-Type Damage<br>Duration: 10s"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + b1 + RS(2, this.tS[2]) + b1 + RS(1, "+" + a + this.tS[3])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Essence of Flame",
            tM: 1,
            linkSkill: [14],
            uT: [7, 1, 10],
            uR: [1],
            tS: ["Single target attack that refreshes the current tier of Fiery Ridicule on a target.",
                "Skills Earned:<br>Essence of Flame"
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
            n: "Volcanic Runestone",
            tM: 1,
            linkSkill: [15],
            uT: [7, 1, 12],
            uR: [1],
            tS: ["Earns the skill: Volcanic Runestone.", "Skills Earned:<br>Volcanic Runestone"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Explosive Rhetoric",
            tM: 3,
            uT: [7, 1, 11],
            uR: [3],
            rT: [7, 1, 6],
            rR: [1],
            tS: ["Increases the damage of Essence of Flame.", "Increases Essence of Flame Damage by +",
                "% Essence of Flame Damage"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 10 * a + "%")
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 10 * a + this.tS[2])
            }
        }, {
            n: "Linnod of Flame",
            tM: 2,
            rT: [7, 1, 10],
            rR: [3],
            tS: ["Increases the number of targets affected by Essence of Flame.", " Essence of Flame Max Targets"],
            tt1: function (a) {
                return RS(1, "+" + (a + 1) + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Molten Rock",
            tM: 3,
            rT: [7, 1, 8],
            rR: [1],
            tS: ["Increases the damage of Volcanic Runestone. Max Rank makes the Volcanic Runestone Ground Targeted.",
                "Increases Volcanic Runestone Damage by +", "% Volcanic Runestone Damage"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 10 * a + "%")
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 10 * a + this.tS[2])
            }
        }, {
            n: "Guile and Subtlety",
            tM: 5,
            tS: ["Increases Finesse.", " Finesse Rating"],
            tt1: function (a) {
                return RS(1, "+" + Math.ceil(464.55 * a) + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Molten Flame",
            tM: 3,
            tS: ["Fire skills reduce the armour of a target.", "On every Fire skill,",
                "% Target Armour Rating", "Duration: 8s", "-5% Additional Target Armour Rating"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1]) + b1 + RS(17, "-" + 5 * a + this.tS[2]) + b1 + RS(1, this.tS[3])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Mystifying Flames",
            tM: 3,
            uT: [7, 1, 22],
            uR: [3],
            tS: ["Fire skills have a chance to briefly reduce the target's resistance to fire.", "On every Fire skill,<br>30% chance to", "% Fire Mitigation", "Duration: 20s", "Increases applied effect to:"],
            tt1: function (a) {
                return RS(1, this.tS[1]) + b1 + this.tt3(a)
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + (RS(1, this.tS[4]) + b1 + this.tt3(a))
            },
            tt3: function (a) {
                return RS(17, "-" + 5 * a + this.tS[2]) + b1 + RS(1, this.tS[3])
            }
        }, {
            n: "Scathing Mockery",
            tM: 1,
            linkSkill: [16],
            tS: ["Earns the skill: Scathing Mockery.", "Skills Earned:<br>Scathing Mockery"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "After-burn",
            tM: 5,
            tS: ["Increases fire damage-over-time.", "Increases Fire Damage Over Time by +",
                "% Wrath of Flame Damage Over Time"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 5 * a + "%")
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 5 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Empowering Flame",
            tM: 3,
            rT: [7, 1, 18],
            rR: [3],
            tS: ["Mystifying Flame procs briefly reduce inductions.", "Mystifying Flame proc reduces Rune-keepers Inductions by ", "% for 8s", "% Runekeeper Inductions"],
            tt1: function (a) {
                return RS(1, this.tS[1] + 10 * a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1,
                    "-" + 10 * a + this.tS[3])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Combustion",
            tM: 1,
            linkSkill: [17],
            tS: ["Earns the skill: Combustion.", "Skills Earned:<br>Combustion"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Ceaseless Argument",
            tM: 1,
            linkSkill: [18],
            tS: ["Earns the skill: Ceaseless Argument.", "Skills Earned:<br>Ceaseless Argument"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Exacting Wards",
            tM: 5,
            tS: ["Increases Critical defence.",
                "% Critical Defence"
            ],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Confounding Principles",
            tM: 5,
            tS: ["Increases the damage and daze duration of Shocking Touch.", "Increases Shocking Touch Daze by +", "s<br>Increases Shocking Touch Damage by +", " Shocking Touch Daze Duration<br>+", "% Shocking Touch Damage"],
            tt1: function (a) {
                return RS(1, this.tS[1] + a + this.tS[2] + 5 * a + "%")
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + a + this.tS[3] +
                    5 * a + this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: "Cutting Remarks",
            tM: 5,
            tS: ["Increases Tactical Critical Chance.", "% Tactical Critical Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Fortune Smiles",
            tM: 5,
            tS: ["Increases Fate.", " Fate"],
            tt1: function (a) {
                return RS(1, "+" + Math.ceil(12.54 * a) + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Fulgurite Runestone",
            tM: 1,
            linkSkill: [19],
            uT: [7, 2, 12],
            uR: [1],
            tS: ["Earns the skill: Fulgurite Runestone.",
                "Skills Earned:<br>Fulgurite Runestone"
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
            n: ""
        }, {
            n: "Thunderous Words",
            tM: 5,
            uT: [7, 2, 15],
            uR: [5],
            tS: ["Lightning skills have a chance to briefly buff lightning skill's Critical Chance.", "15% chance on every lightning skill,<br>+", "% Fury of Storm Critical Hit Chance<br>Duration: 20s", "Increases applied effect to:<br>+"],
            tt1: function (a) {
                return RS(1, this.tS[1] + 4 * a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b =
                    1 == a ? b + this.tt1(a) : b + RS(1, this.tS[3] + 4 * a + this.tS[2])
            }
        }, {
            n: "Statically Charged",
            tM: 3,
            rT: [7, 2, 8],
            rR: [1],
            tS: ["Fulgurite Runestone slows nearby enemies and deals more damage.<br>Max Rank makes the Fulgurite Runestone Ground Targeted.", "Increases Fulgurite Runestone Damage by +", "Increases Fulgurite Runestone Slow by +", "% Fulgurite Runestone Damage<br>+", "% Fulgurite Runestone Slow"],
            tt1: function (a) {
                var b = RS(1, this.tS[1] + 10 * a + "%");
                1 < a && (b += RS(1, b1 + this.tS[2] + 20 * (a - 1) + "%"));
                return b
            },
            tt2: function (a) {
                var b =
                    b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 10 * a + this.tS[3] + 20 * (a - 1) + this.tS[4])
            }
        }, {
            n: "Epic Conclusion",
            tM: 1,
            linkSkill: [20],
            tS: ["Earns the skill: Epic Conclusion.", "Skills Earned:<br>Epic Conclusion"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Harsh Debate",
            tM: 5,
            uT: [7, 2, 19],
            uR: [5],
            rT: [7, 2, 11],
            rR: [5],
            tS: ["Lightning skills have a chance to briefly buff Tactical Damage.", "On every Lightning skill,<br>15% chance to<br>+", "% Tactical Damage<br>Duration: 20s"],
            tt1: function (a) {
                return RS(1, this.tS[1] + 3 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Vivid Imagery",
            tM: 1,
            linkSkill: [21],
            uT: [7, 2, 22],
            uR: [1],
            tS: ["Earns the skill: Vivid Imagery.", "Skills Earned:<br>Vivid Imagery"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Closing Remarks",
            tM: 5,
            rT: [7, 2, 15],
            rR: [5],
            tS: ["Increases the proc chance of Thunderous Words and Harsh Debate.<br><br>When both buffs become active on the Rune-keeper, they become one buff that can be consumed by Epic Conclusion to increases its damage and reduce its cooldown.",
                "Thunderous Words and Harsh Debate combined into Closing Remarks when both applied to Rune-keeper", "% Epic Conclusion Combo Damage", "% Thunderous Words Proc Chance<br>+", "% harsh Debate Proc Chance"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1]) + b1 + this.tt3(a)
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + this.tt3(a)
            },
            tt3: function (a) {
                var b = "";
                1 < a && (b += "+" + 10 * (a - 1) + this.tS[2] + b1);
                b += "+" + a + this.tS[3] + a + this.tS[4];
                return RS(1, b)
            }
        }, {
            n: "Furious Storms",
            tM: 5,
            tS: "Lightning skills place a stack of Fury of Storm on the Rune-keeper, increasing the Critical Damage of their next attack.<br><br>Critical hits will consume this effect.;On every Lightning skill,<br>;% chance to;This effect stacks up to five times.;+5% Lightning Critical Damage<br>Expires if out of combat for 9 seconds.;Increases Proc Chance to: ".split(";"),
            tt1: function (a) {
                return RS(1, this.tS[1] + 20 * a + this.tS[2]) + b1 + RS(2, this.tS[3]) + b1 + RS(1, this.tS[4])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[5] + 20 * a + "%")
            }
        }, {
            n: ""
        }, {
            n: "Perfect Imagery",
            tM: 3,
            rT: [7, 2, 18],
            rR: [1],
            tS: ["Increases the number of targets Vivid Imagery affects.", "Increases the number of targets of Vivid Imagery by +", " Vivid Imagery Targets"],
            tt1: function (a) {
                return RS(1, this.tS[1] + a)
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Concession and Rebuttal",
            tM: 1,
            linkSkill: [22],
            tS: ["Earns the skill: Concession and Rebuttal.<br><br>Places 5 Charges that can be consumed to enhance the Rune-keepers Lightning skills.<br><br>Using one of these Enhanced skills consumes a Charge.", "Skills Earned:<br>Concession and Rebuttal"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }]
    ];
    skills = [{
        n: "Rousing Words",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Channel Duration: 6.5s") +
                b2 + RS(10, "A channelled skill that heals Morale with every second.<br><br>+2 to Healing attunement.<br><br>This skill generates no threat.<br>Allies affected for at least 5 seconds will gain a tier of Writ of Health") + b2 + RS(3, "Aura - affects Fellowship members within 20 metres:<br>Every 1 seconds:") + b1 + RS(1, "+[?]-[?] Morale") + b1 + RS(3, "On Use:") + b1 + RS(1, "Aura - affects Fellowship members within 20 metres:<br>Every 5 seconds:<br>Heals [?]-[?] Morale initially.<br>Heals [?]-[?] Morale every 4 seconds for 20 seconds.") +
                b2 + RS(2, "Cost: 3.85% of Base Power") + b1 + RS(24, "Attunes: 1") + TTReturnRKMinis([1]) + b1 + RS(3, "Channelled Skill<br><br>Cooldown: 10s")
        }
    }, {
        n: "Our Fates Entwined",
        range: "20m Range",
        tt1: function () {
            return RS(7, "Resistance: Tactical") + b2 + RS(10, "Places a Runestone on the ground that redirects damage taken by allies to itself.") + b2 + RS(2, "Cost: 6.15% of Base Power") + b1 + RS(24, "Attunes: 1") + TTReturnRKMinis([1]) + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Rune-sign of Winter",
        range: "25m Range",
        tt1: function () {
            return b2 + RS(10, "A heal-over-time that always applies the Frost Armour passive buff.") +
                b2 + RS(1, "Heals [?]-[?] Morale initially.<br>Heals [?]-[?] Morale every 3 seconds for 12 seconds.<br>-10% Incoming Damage") + b1 + RS(3, "Duration: 8s") + b2 + RS(2, "Cost: 3.075% of Base Power") + b1 + RS(24, "Attunes: 1") + TTReturnRKMinis([1]) + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Writ of Health",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Induction: 0.8s") + b2 + RS(10, "Stacking Heal-over-time.<br><br>May be applied up to three times, increasing the Writ's tier.<br><br>+20% Heal per tier increase.") + b2 +
                RS(1, "Heals [?]-[?] Morale initially.<br>Heals [?]-[?] Morale every 4 seconds for 20 seconds.") + b2 + RS(2, "Cost: 2.32% of Base Power") + b1 + RS(24, "Attunes: 2") + TTReturnRKMinis([1]) + b2 + RS(3, "Cooldown: 1s")
        }
    }, {
        n: "Essay of Fire",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Induction: 2.5s<br>Resistance: Tactical") + b2 + RS(10, "A powerful fire attack dealing damage-over-time.") + b2 + b1 + RS(4, "[?]-[?] Fire Damage initially.<br>[?]-[?] Fire Damage every 2 seconds for 6 seconds.") + b1 + RS(2, "Your next fire skill has no induction") +
                b1 + RS(3, "Expires if out of combat for 9 seconds.") + b2 + RS(2, "Cost: 3.85% of Base Power") + b1 + RS(24, "Attunes: 3") + TTReturnRKMinis([0]) + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Smouldering Wrath",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Channel Duration: 1s<br>Resistance: Tactical") + b2 + RS(10, "A channelled skill dealing huge amounts of fire damage every second.<br><br>Duration increases per battle attunement.<br><br>This skill consumes 1 attunement per second.") + b2 + RS(3, "Every 1 second:") +
                b1 + RS(4, "[?]-[?] Fire Damage") + b2 + RS(2, "Cost: 4.615% of Base Power") + b1 + RS(3, "Channelled Skill<br><br>Cooldown: 15s")
        }
    }, {
        n: "Writ of Fire",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Induction: 0.8s<br>Resistance: Tactical") + b2 + RS(10, "Stacking fire damage-over-time.<br><br>May be applied up to three times, increasing the Writ's tier.<br><br>+20% damage per tier increase.") + b2 + RS(4, "[?]-[?] Fire Damage initially.<br>[?]-[?] Fire Damage every 4 seconds for 20 seconds.") + b2 + RS(2, "Cost: 1.55% of Base Power") +
                b1 + RS(24, "Attunes: 2") + TTReturnRKMinis([0]) + b2 + RS(3, "Cooldown: 1s")
        }
    }, {
        n: "Static Surge",
        range: "5.2m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Radius: 5m<br>Resistance: Tactical") + b2 + RS(10, "A powerful attack that deals lightning damage in front of the Rune-keeper.") + b2 + RS(5, "[?]-[?] Lightning Damage") + b2 + RS(2, "Cost: 2.32% of Base Power") + b1 + RS(24, "Attunes: 1") + TTReturnRKMinis([0]) + b2 + RS(3, "Cooldown: 3s")
        }
    }, {
        n: "Sustaining Bolt",
        range: "20m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Resistance: Tactical") +
                b2 + RS(10, "A lightning attack dealing +Damage per attunement consumed.<br><br>Reduces power cost of skills.") + b2 + RS(5, "[?]-[?] Lightning Damage") + b2 + RS(2, "-5% Power Cost") + b1 + RS(3, "Duration: 15s") + b1 + RS(10, "Returns to Neutral Attunement") + b2 + RS(2, "Cost: 3.075% of Base Power") + b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "Writ of Lightning",
        range: "20m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Resistance: Tactical") + b2 + RS(10, "Deals lightning damage and lowers target's Lightning Resistance.<br><br>This effect stacks up to 3 times.") +
                b2 + RS(5, "[?]-[?] Lightning Damage") + b2 + RS(4, "-5% Lightning Mitigation") + b1 + RS(3, "Duration: 15s") + b2 + RS(2, "Cost: 0.785% of Base Power") + b1 + RS(24, "Attunes: 3") + TTReturnRKMinis([0]) + b2 + RS(3, "Cooldown: 1s")
        }
    }, {
        n: "Mending Verse",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Induction: 2s") + b2 + RS(10, "Hardships are forgotten and spirits are lifted by such writings.<br>This heal over time stacks with itself. -1% Power cost per healing Attunement.") + b2 + RS(1, "+[?]-[?] Morale<br>Heals [?]-[?] Morale every 2 seconds for 6 seconds.") +
                b2 + RS(2, "Cost: 2.3% of Base Power") + b1 + RS(24, "Attunes: 2") + TTReturnRKMinis([1]) + b2 + RS(3, "Cooldown: 1s")
        }
    }, {
        n: "Rune of Restoration",
        tt1: function () {
            return RS(7, "Tactical Skill") + b2 + RS(10, "Places a healing Runestone upon the ground, healing nearby allies.") + b2 + RS(2, "Cost: 3.075% of Base Power") + b1 + RS(24, "Attunes: 1") + TTReturnRKMinis([1]) + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Essay of Exaltation",
        range: "10.2m Range",
        tt1: function () {
            return RS(7, "Immediate<br>Tactical Skill<br>Radius: 10m") + b2 + RS(10, "Ground-targeted skill that applies a Morale bubble as well as a powerful Heal-over-time to affected allies.<br><br>+Bubble potency and +Healing per attunement consumed.") +
                b2 + RS(2, "Applies a damage preventing bubble granting [?] temporary Morale.") + b1 + RS(3, "Duration: 12s") + b1 + RS(1, "Heals [?]-[?] Morale initially.<br>Heals [?]-[?] Morale every 2 seconds for 10 seconds.") + b1 + RS(10, "Returns to Neutral Attunement") + b2 + RS(2, "Cost: 6.15% of Base Power") + b2 + RS(3, "Cooldown: 40s")
        }
    }, {
        n: "Bombastic Inspiration",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Tactical Skill") + b2 + RS(10, "Places a heal-over-time on an ally. When it expires, the target is healed for a large amount.<br><br>Stacks up to 3 times, and expiration heal is increased per stack.") +
                b2 + RS(1, "Heals [?]-[?] Morale initially.<br>Heals [?]-[?] Morale every 2 seconds for 8 seconds.") + b2 + RS(2, "Cost: 2.3% of Base Power") + b1 + RS(24, "Attunes: 3") + TTReturnRKMinis([1]) + b2 + RS(3, "Cooldown: 2s")
        }
    }, {
        n: "Essence of Flame",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Induction: 2s<br>Resistance: Tactical") + b2 + RS(10, "Fire attack that refreshes Fiery Ridicule on the target.") + b2 + RS(5, "[?]-[?] Fire Damage") + b2 + RS(2, "Cost: 3.85% of Base Power") + b1 + RS(24, "Attunes: 3") + TTReturnRKMinis([0]) +
                b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "Volcanic Runestone",
        tt1: function () {
            return RS(7, "Resistance: Tactical") + b2 + RS(10, "Places a Runestone upon the ground that deals damage-over-time to nearby enemies.<br><br>The Runestone will persist for 11s.") + b2 + RS(2, "Cost: 6.15% of Base Power") + b1 + RS(24, "Attunes: 3") + TTReturnRKMinis([0]) + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Scathing Mockery",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 5<br>Radius: 8m<br>Induction: 3s<br>Resistance: Tactical") +
                b2 + RS(10, "AoE Fire damage-over-time.") + b2 + RS(5, "[?]-[?] Fire Damage") + b2 + RS(4, "[?]-[?] Fire Damage every 6 seconds for 30 seconds.") + b2 + RS(2, "Cost: 3.075% of Base Power") + b1 + RS(24, "Attunes: 3") + TTReturnRKMinis([0]) + b2 + RS(3, "Cooldown: 20s")
        }
    }, {
        n: "Combustion",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Induction: 1.5s<br>Resistance: Tactical") + b2 + RS(10, "Targeted fire attack dealing damage to all enemies near the target, dealing +Damage per attunement consumed.") + b2 + RS(5, "[?]-[?] Fire Damage") +
                b2 + RS(10, "Deals Damage to all enemies around Target") + b2 + RS(4, "Effects applied to enemies within 5 metres:<br>[?]-[?] Fire Damage") + b1 + RS(10, "Returns to Neutral Attunement") + b2 + RS(2, "Cost: 3.85% of Base Power") + b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "Ceaseless Argument",
        range: "20m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Resistance: Tactical") + b2 + RS(10, "A quick lightning attack, hard to resist.") + b2 + RS(5, "[?]-[?] Lightning Damage") + b2 + RS(2, "Cost: 3.075% of Base Power") + b1 + RS(24, "Attunes: 1") + TTReturnRKMinis([0])
        }
    }, {
        n: "Fulgurite Runestone",
        tt1: function () {
            return RS(7, "Resistance: Tactical") + b2 + RS(10, "Places a Runestone upon the ground which, after a few seconds, is struck by lightning, damaging and briefly stunning nearby foes.") + b2 + RS(2, "Cost: 3.075% of Base Power") + b1 + RS(24, "Attunes: 3") + TTReturnRKMinis([0]) + b2 + RS(3, "Cooldown: 3s")
        }
    }, {
        n: "Epic Conclusion",
        range: "20m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Resistance: Tactical") + b2 + RS(10, "An enormously powerful lightning attack dealing +Damage per attunement consumed.") +
                b2 + RS(5, "[?]-[?] Lightning Damage") + b2 + RS(10, "Returns to Neutral Attunement") + b2 + RS(2, "Cost: 3.85% of Base Power") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Vivid Imagery",
        range: "5m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Max Targets: 3<br>Radius: 5m<br>Resistance: Tactical") + b2 + RS(10, "AoE lightning attack that dazes your foes.") + b2 + RS(6, "Mounted Combat Enemies:<br>Daze replaced with a debuff that reduces damage against dismounted players.") + b2 + RS(5, "[?]-[?] Lightning Damage") + b2 + RS(4, "10s Daze<br>100% break chance on damage after 1s") +
                b2 + RS(2, "Cost: 3.075% of Base Power") + b1 + RS(24, "Attunes: 3") + TTReturnRKMinis([0]) + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Concession and Rebuttal",
        tt1: function () {
            return RS(10, "Grants additional effects to the following skills:<br>Sustaining Bolt: Returns power<br>Writ of Lightning: Applies max rank of debuff<br>Epic Conclusion: Leaves a trailing DoT for a portion of the damage dealt<br>Shocking Words: Slows targets for 5s after being stunned.") + b2 + RS(2, "Grants additional effects to your skills") + b1 + RS(3, "Expires if out of combat for 9 seconds.<br>Duration: 3m") +
                b2 + RS(24, "Attunes: 6") + TTReturnRKMinis([0]) + b2 + RS(3, "Cooldown: 3m")
        }
    }]
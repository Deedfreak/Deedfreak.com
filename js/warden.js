    trees = [{
        n: "Determination",
        head: "Wields Shield and Fist to protect allies from harm.",
        main: "A tanking build which boosts defences while healing, able to survive attacks from many foes at once.",
        skills: [4],
        low: ["+25% Healing Potency<br>+5% Spear Gambit Damage<br><br>Gambit Builders build a stacking Partial Block, Parry, and Evade buff - max of 6%.<br><br>Individual Gabmit Bonuses (10% Chance to Apply):<br>Spear: +5% Incoming Healing Modifier<br>Fist: -2% Outgoing Damage on Target<br>Shield: +Block Rating"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Thrill of Battle",
            tS: ["", "+20% Morale-tap Damage"],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Shield Mastery",
            linkSkill: [0, 1],
            tS: ["Grants access to Shield Mastery, a skill which enhances your avoidances.", "Skills Earned:<br>Shield Mastery<br>Shield Mastery"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Elegant Finish",
            tS: ["You gain a swath of unique bonuses to your Buff chain finishers.", "Surety of Death Grants a 2% Physical Mitigation buff<br><br>Conviction grants a 2% Tactical Mitigation buff<br><br>Dance of War now grants 760[?] Block and Parry Rating<br><br>Celebration of Skill grants a +2% Incoming Healing buff<br><br>Restoration now grants an Instant Heal<br><br>Desolation now has a chance to inflict fear upon foes"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Shield Tactics",
            linkSkill: [2, 3],
            tS: ["Clever use of the shield greatly increases your Tactical Mitigation.", "Skills Earned:<br>Shield Tactics<br>Shield Tactics"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Close Call",
            tS: ["", "Dodging an attack brings a moment of relief, restoring 1% of your maximum Morale."],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Exultation of Battle",
            tS: ["Your Morale-taps last longer.", "+2 Pulses to area of effect Morale-taps"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Revel in Combat",
            tS: ["", "All Gambit Builders now perform a Morale-tap on the enemy."],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }]
    }, {
        n: "Recklessness",
        head: "Wields deadly war-like techniques to defeat foes.",
        main: "A powerful damaging build that stacks single-target bleeds with the potential for sweeping AoE blows.",
        skills: [5],
        low: ["+5% Warden DoT Damate<br>-10% Attack Duration<br><br>Gambit Builders build a stacking melee damage buff - max of 6%.<br><br>Individual Gambit Bonuses (10% Chance to Apply):<br>Spear: +5% Chance to reduce target armour<br>Fist: +5% Chance to reduce target Cry Resistance Rating<br>Shield: +5% chance to increase Morale-tap damage by 5%"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Sharpened Spears",
            tS: ["", "+5% Spear Gambit Damage"],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Unconventional Strikes",
            tS: ["", "+15% Chance to trigger Gambit Builder Bonuses"],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Precision Training",
            tS: ["", "+2.5% Critical Chance<br>+2.5% Critical Damage"],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Taking Advantage",
            tS: ["After Parrying or Partially Parrying, you heal a small amount of Morale and your Gambit Builders cost no Power for 5s."],
            tt1: function () {
                return ""
            }
        }, {
            n: "One After another",
            tS: ["You gain a small amount of Morale after defeating an enemy.<br><br>You deal extra damage with Spear Gambits.", "+10% Spear Gambit Damage"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Grand Master Weapons Training",
            tS: ["", "+5% Melee Damage<br>The inherent bleed damage from Spears happens more often.<br>The inherent attack speed debuff from Clubs happens more often.<br>+1% Inherent Sword Parry bonus modifier<br>Damage from intrinsic spear bleeds is greatly increased."],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Martial Fury",
            tS: ["Gambits in the Power Attack Gambit line and the Precise Blow Gambit line have 15% chance to apply a secondary DoT to their target which stacks with the normal DoT.<br><br>Secondary DoTs cannot stack with each other."],
            tt1: function () {
                return ""
            }
        }]
    }, {
        n: "Assailment",
        head: "Wields Javelin and clever tactics to harm and hinder foes.",
        main: "A ranged support line that debuffs enemies while dealing significant damage from afar, useful when fighting either alone or in a Fellowship.",
        skills: [],
        low: ["+5% Ranged Damage<br>+380[?] Critical Rating<br><br>Gain the skill: Improved Hampering Javelin.<br><br>Gambit Builders build a stacking ranged damage buff - max of 4.5%.<br><br>Individual Gambit Bonuses (10% Chance to Apply):<br>Javelin: -5% Fellowship Attack Duration<br>Fist: +5% Chance to Crit with Ranged Attacks<br>Shield: +10% Morale return for fellows when they strike the target"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Throwing Arm",
            tS: ["A strong throwing arm puts more power behind your Javelins.",
                "+10% Ranged Damage"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Makeshift Caltrops",
            tS: ["Improved Hampering Javelin now slows enemies around your target.", "Hampering Javelin now slows up to 5 enemies around the target"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Focus Fire",
            tS: ["You excel at marking priority targets for your fellows.", "Market Target removes an additional 2.5% Physical Mitigation<br>Diminished Target removes an additional 2.5% Tactical Mitigation"],
            tt1: function () {
                return b2 +
                    RS(1, this.tS[1])
            }
        }, {
            n: "Fire at Will",
            linkSkill: [6],
            tS: ["You call for your fellowship to rain attacks down upon your enemies, granting them bonuses to their damage..", "Skills Earned:<br>Fire at Will"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Dodge This!",
            linkSkill: [7],
            tS: ["When an enemy avoids an attack, you gain access to an unavoidable Javelin skill.", "Skills Earned:<br>Dodge This!", "If an enemy dodges one of your attacks, you gain access to a quick Javelin skill which cannot be avoided."],
            tt1: function () {
                return b2 + RS(8, this.tS[1]) + b2 + RS(1, this.tS[2])
            }
        }, {
            n: "Endurance Training",
            tS: ["Exercising your throwing arm prevents you from wearing out during battle.", "-10% Attack Duration in Assailment"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Snap Shot",
            linkSkill: [8, 9, 10, 11, 12],
            tS: ["Gambit Builders have a chance of triggering the ability to use one of your Javelin Skills, even if it is on cooldown. You cannot gain this effect more than once every 20s.", "Skills Earned:<br>Snap Shot - Ambush<br>Snap Shot - Shield Piercer<br>Snap Shot - Hampering Javelin<br>Snap Shot - Wages of Fear<br>Snap Shot - Javelin of Deadly Force"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }]
    }];
    traits = [
        [{
            n: "War-Cry",
            tM: 5,
            tS: ["The War-cry Gambit increases Evade rating.", " Evade Rating from War-cry Evade Buff"],
            tt1: function (a) {
                return RS(1, "+" + 76 * a + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Persevere",
            tM: 5,
            tS: ["Increases healing and damage done when the Persevere Gambit is used.", "% Persevere Gambit Line Healing<br>+", "% Persevere Gambit Line Damage"],
            tt1: function (a) {
                return RS(1, "+" + 3 * a + this.tS[1] +
                    2 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Warden's Challenge",
            tM: 1,
            linkSkill: [13],
            uT: [8, 0, 9],
            uR: [1],
            tS: ["Earns the skill Defiant Challenge, enabling the Warden to draw threat and attack many foes at once.", "Skills Earned:<br>Defiant Challenge"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Careful Shield-work",
            tM: 5,
            tS: ["Gains bonuses to Block Chance when using Persevere Gambits.", " Persevere Block Rating<br>+", " Safeguard Block Rating"],
            tt1: function (a) {
                return RS(1, "+" + Math.round(76.76 * a) + "[?]" + this.tS[1] + Math.round(115.14 * a) + "[?]" + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Bane of Shadow",
            tM: 5,
            tS: ["Increases Light damage.", "% Light-type Damage."],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Defiance",
            tM: 3,
            rT: [8, 0, 5],
            rR: [1],
            tS: ["For each enemy affected by your Challenge, you gain Physical and Tactical Mitigation.", "% to Physical and Tactical Mitigation for each enemy affected by Defiant Challenge",
                "% Mitigation"
            ],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + RS(1, this.tt1(a)) : b + RS(1, "+" + 2 * a + this.tS[2])
            }
        }, {
            n: "Impressive Flourish",
            tM: 5,
            tS: ["Increases the bonuses of Impressive Flourish.", " Critical Defence<br>+", " Physical Mitigation<br>+", " Tactical Mitigation"],
            tt1: function (a) {
                return RS(1, "+" + Math.round(76.76 * a) + "[?]" + this.tS[1] + Math.round(43.1775 * a) + "[?]" + this.tS[2] + Math.round(43.1775 * a) + "[?]" + this.tS[3])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Unassailable",
            tM: 1,
            tS: ["Increases your Desolation Miss Chance and Surety of Death Evade Rating.", "+2% to Desolation Miss Chance<br>+10% to Surety of Death Evade Rating"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Counter-attack",
            tM: 1,
            tS: ["Allows you to reset your Mastery skills upon Evading an enemy attack, leading to a quick response.", "On an Evade or Partial Evade, your Gambit Masteries' cooldowns will be reset.<br>You cannot gain this effect more than once every 15s",
                "Reset Gambit Masteries"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1]) + b1 + RS(2, this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Indefatigable",
            tM: 1,
            tS: ["Increases the heal of Restoration and the Block Rating of Celebration of skill.", "+10% Restoration Base Heal<br>+10% Celebration of Skill Block Rating"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Thick Skin",
            tM: 1,
            tS: ["Gains further bonuses to your ratings from Dance of War and Conviction.",
                "+10% to Critical Defence and Physical Mitigation from Dance of War<br>+10% to Critical Defence and Tactical Mitigation from Conviction<br>+54[?] Finishing Skill Mitigation"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Critical Protection",
            tM: 5,
            tS: ["Increases Critical Defence.", "% Critical Defence"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Lasting Hope",
            tM: 3,
            tS: ["Healing-over-Time effects last longer.",
                " HoT Pulse(s)"
            ],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Never Surrender",
            tM: 1,
            tS: ["The cooldown of Never Surrender is reduced, helping you to survive difficult battles.", "-300s to Never Surrender Cooldown"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Fear No Darkness",
            tM: 5,
            tS: ["Skills that drain enemy Morale and heal the Warden are more potent.", "% Morale-tap Damage"],
            tt1: function (a) {
                return RS(1,
                    "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Stand Your Ground",
            tM: 3,
            tS: ["Sacrifice Evade to boost Block and Parry ratings.", " Block Rating<br>+", " Parry Rating<br>-", " Evade Rating"],
            tt1: function (a) {
                return RS(1, "+" + 76 * a + this.tS[1] + 76 * a + this.tS[2] + 152 * a + this.tS[3])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "For the Free Peoples",
            tM: 1,
            linkSkill: [14],
            tS: ["Earns the skill For the Free Peoples, enabling you to buff your Fellowship.", "Skills Earned:<br>For the Free Peoples"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: ""
        }, {
            n: "Basic Strikes",
            tM: 5,
            tS: ["Your Gambit Builders are more powerful.", "% Gambit Builder Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Vital Points",
            tM: 5,
            tS: ["Increases the potency of your Bleeds.", "% Bleed Damage"],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Spear Sweep",
            tM: 1,
            uT: [8,
                1, 12
            ],
            uR: [1],
            tS: ["Grants Onslaught the ability to consume the bleed from Power Attack to deal AoE damage.<br><br>Grants Wall of Steel the ability to consume the bleed from Mighty Blow to deal greater AoE damage."],
            tt1: function (a) {
                return ""
            },
            tt2: function (a) {
                return ""
            }
        }, {
            n: ""
        }, {
            n: "Physical Mastery",
            tM: 5,
            tS: ["Increase your Physical Mastery, which improves melee and ranged damage output.", " Physical Mastery Rating"],
            tt1: function (a) {
                return RS(1, "+" + 152 * a + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) +
                    this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Way of the Spear",
            tM: 3,
            tS: ["Makes your Spear Gambits more effective.", "% Spear Gambit Damage"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Foe of the Darkness",
            tM: 5,
            tS: ["Increases Light skill damage.", "% Light-type Damage"],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "On the Offence",
            tM: 5,
            tS: ["Enhances the Morale-tap ability of Offensive Strike.", "% Offensive Strike Morale-tap Damage<br>+",
                "% Morale-tap Damage"
            ],
            tt1: function (a) {
                return RS(1, "+" + 3 * a + this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Quick Sweep",
            tM: 3,
            uT: [8, 1, 16],
            uR: [1],
            rT: [8, 1, 4],
            rR: [1],
            tS: ["A refined version of Spear Sweep<br><br>There is a chance that Onslaught and Wall of Steel will trigger Bleeds on your AoE targets in addition to burst damage.", "% Chance to trigger Quick Sweep"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "No Respite for the Wicked",
            tM: 3,
            tS: "The Offensive Strike Gambit line applies an Incoming Healing debuff to enemies.;The Offensive Strike Gambit line will apply a 10% Incoming Healing debuff to the target.<br>Stacks ;once.;twice.;thrice.;Each rank will unlock an additional stack".split(";"),
            tt1: function (a) {
                return RS(1, this.tS[1] + this.tS[1 + a])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + RS(1, this.tt1(a)) : b + RS(1, this.tS[5])
            }
        }, {
            n: ""
        }, {
            n: "Aggravating Wounds",
            tM: 5,
            tS: ["Bleeds and damage-over-time effects are more likely to achieve a Critical Hit.",
                "% DoT Critical Chance"
            ],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "No mercy",
            tM: 1,
            rT: [8, 1, 12],
            rR: [1],
            tS: ["Onslaught and Wall of Steel now have a 50% chance not to consume the bleed on the primary target."],
            tt1: function (a) {
                return ""
            },
            tt2: function (a) {
                return ""
            }
        }, {
            n: ""
        }, {
            n: "Deep Wounds",
            tM: 5,
            tS: ["Further increases the Critical Damage of Bleeds and other damage-over-time effects.", "% DoT Critical Database"],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Warden's Triumph",
            tM: 3,
            tS: ["Boosts the duration of Adroit Manoeuvre, and the damage dealt from Warden's Triumph.", "% Adroit Manoeuvre Attack Duration bonus<br>+", "% Warden's Triumph damage bonus"],
            tt1: function (a) {
                return RS(1, "-" + 4 * a + this.tS[1] + 3 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Lasting Impression",
            tM: 1,
            tS: ["Bleeds and Damage-over-time effects gain an additional pulse.", "+1 DoT Pulse"],
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
            n: "Recklessness",
            tM: 1,
            linkSkill: [15],
            tS: ["Greatly increases Melee Damage and Critical Rating, and decreases Block, Evade, and Parry chance for a short time.", "Skills Earned:<br>Recklessness"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: ""
        }, {
            n: "Momentum",
            tM: 5,
            tS: ["Swapping into melee stance will grant you a temporary Melee damage buff.", "% Melee Damage After Entering Melee"],
            tt1: function (a) {
                return RS(1,
                    "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Marked Target",
            tM: 5,
            uT: [8, 2, 10],
            uR: [1],
            tS: ["You mark your target to make it easier for your allies to damage it.", "Marked Target removes an additional -", "% of target Physical Mitigation", "% Physical Mitigation"],
            tt1: function (a) {
                return RS(1, this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + RS(1, this.tt1(a)) : b + RS(1, "-" + a + this.tS[3])
            }
        }, {
            n: ""
        }, {
            n: "Finesse",
            tM: 5,
            tS: ["Increases your Finesse rating.", " Finesse Rating"],
            tt1: function (a) {
                return RS(1, "+" + Math.round(463.6 * a) + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Ranged Damage",
            tM: 5,
            tS: ["Increases your Ranged damage rating.", "% Ranged Damage"],
            tt1: function (a) {
                return RS(1, "+" + 3 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Bulls-eye",
            tM: 5,
            tS: ["Increases your Critical rating, and grants 1% Ranged Critical damage per rank.", "% Melee Critical Chance<br>+", "% Ranged Critical Damage<br>+", "% Ranged Critical Chance<br>+",
                "% Tactical Critical Chance"
            ],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1] + a + this.tS[2] + a + this.tS[3] + a + this.tS[4])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Shield's Up",
            tM: 1,
            tS: ["Swapping into melee stance will grant you a temporary Block buff.", "+5% Block Chance after entering 'In the Fray'"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Diminished Target",
            tM: 5,
            linkSkill: [16],
            uT: [8, 2, 14],
            uR: [1],
            rT: [8, 2, 2],
            rR: [1],
            tS: ["Earns the skill Diminished Target, granting an attack which debuffs Tactical Mitigation.",
                "Diminished Target removes an additional -", "% of target Tactical Mitigation", "Skills Earned:<br>Diminished Target", "% Tactical Mitigation"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + a + this.tS[2]) + b1 + RS(8, this.tS[3])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + RS(1, this.tt1(a)) : b + RS(1, "-" + a + this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: "Piercing Javelins",
            tM: 3,
            tS: ["Ranged Gambits bypass enemy armour.", " Armour Penetration"],
            tt1: function (a) {
                return RS(1, "+[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Barbed Javelins",
            tM: 5,
            uT: [8, 2, 17],
            uR: [1],
            tS: ["All Javelin Gambits have a chance to trigget a Bleed. The more builders used to make the Gambit, the more damaging the Bleed will be.<br><br>Bleeds of the same tier will not stack.", "% Bleed Chance"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Area Targeting",
            tM: 1,
            rT: [8, 2, 10],
            rR: [1],
            tS: ["Marked Target and Diminished Target will affect up to 4 additional targets."],
            tt1: function (a) {
                return ""
            },
            tt2: function (a) {
                return ""
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Shattered Javelins",
            tM: 1,
            rT: [8, 2, 13],
            rR: [1],
            tS: ["Attempting to stack a Barbed Javelins bleed will instead consume the bleed for an area effect damage burst.<br><br>The more powerful the bleed, the more powerful the damage burst will be."],
            tt1: function (a) {
                return ""
            },
            tt2: function (a) {
                return ""
            }
        }, {
            n: ""
        }, {
            n: "Hurry Up with That!",
            tM: 3,
            tS: ["Ranged Adroit Manoeuvre triggers an Induction duration buff to your fellowship.", "% Induction Duration"],
            tt1: function (a) {
                return RS(1, "-" + (5 * a + 5) + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Battering Strikes",
            tM: 3,
            tS: ["Increases the Critical Defence debuff rating in the Precise Throw Gambit line.", " Precise Throw Critical Defence Rating<br>+", " Piercing Toss Critical Defence Rating<br>+", " Javelin of Virtue Critical Defence Debuff"],
            tt1: function (a) {
                return RS(1, "+" + Math.round(77.235 * a) + "[?]" + this.tS[1] + Math.round(96.425 * a) + "[?]" + this.tS[2] + Math.round(115.9 * a) + "[?]" + this.tS[3])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Suppression",
            tM: 3,
            tS: ["Increases the outgoing damage debuff in the Ranged Offensive Strike Gambit line.", "% Outgoing Damage Debuff"],
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
            n: "Javelin of Deadly Force",
            tM: 1,
            linkSkill: [17],
            tS: ["Earns the skill Javelin of Deadly Force, enabling a Javelin attack that can pierce many enemies at once.<br><br>For every target hit, you gain a stack of a Ranged Damage and Critical Damage buff.", "Skills Earned:<br>Javelin of Deadly Force"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }]
    ];
    skills = [{
        n: "Shield Mastery",
        tt1: function () {
            return RS(7, "Melee Skill") + b2 + RS(10, "Boosts block and evade rating.") + b2 + RS(2, "+1919[?] Block Rating<br>+1919[?] Evade Rating<br>+1919[?] Ranged Block Rating") + b1 + RS(3, "Duration: 1m") + b2 + RS(2, "Cost: 4% of Base Power<br>Requires:" + TTReturnWardenMinis([0, 1, 2, 0]) + "<br>Clears All Gambits") + b2 + RS(3, "Cooldown: 1s")
        }
    }, {
        n: "Shield Mastery",
        tt1: function () {
            return RS(7,
                "Melee Skill") + b2 + RS(10, "Boosts block and evade rating.") + b2 + RS(2, "+1919[?] Block Rating<br>+1919[?] Evade Rating<br>+1919[?] Ranged Block Rating") + b1 + RS(3, "Duration: 1m") + b2 + RS(2, "Cost: 1% of Base Power<br>Requires:" + TTReturnWardenMinis([0, 3, 2, 0]) + "<br>Clears All Gambits") + b2 + RS(3, "Cooldown: 1s")
        }
    }, {
        n: "Shield Tactics",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill") + b2 + RS(10, "Briefly raise your shield to increase your defences.") + b2 + RS(6, "This Gambit grants immunity to stuns.") + b2 + RS(2, "+1584[?] to Tactical Mitigation") +
                b1 + RS(3, "Duration: 1m") + b2 + RS(10, "Immune to Stun Effects.") + b2 + RS(23, "After the stun immunity expires you cannot gain the benefit of Stun Immunity from Shield Tactics for 20 seconds.") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 4% of Base Power<br>Requires:" + TTReturnWardenMinis([0, 2, 1, 0]) + "<br>Clears All Gambits") + b2 + RS(3, "Cooldown: 1s")
        }
    }, {
        n: "Shield Tactics",
        tt1: function () {
            return RS(7, "Fast<br>Melee Skill") + b2 + RS(10, "Briefly raise your shield to increase your defences.") + b2 + RS(6, "This Gambit grants immunity to stuns.") +
                b2 + RS(2, "+1584[?] to Tactical Mitigation") + b1 + RS(3, "Duration: 1m") + b2 + RS(10, "Immune to Stun Effects.") + b2 + RS(23, "After the stun immunity expires you cannot gain the benefit of Stun Immunity from Shield Tactics for 20 seconds.") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 1% of Base Power<br>Requires:" + TTReturnWardenMinis([0, 2, 3, 0]) + "<br>Clears All Gambits") + b2 + RS(3, "Cooldown: 1s")
        }
    }, {
        n: "Warning Shot",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Ranged Skill") + b2 + RS(10, "A powerful toss which weakens your target's resolve, lowering their attack damage for a short time.") +
                b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(4, "-5% Outgoing Damage") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 8s")
        }
    }, {
        n: "Shield Piercer",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Ranged Skill") + b2 + RS(10, "Special javelins will pierce a defender's shield and bend, making the javelin difficult to remove and the shield nearly useless.") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(4, "-4222[?] Block Rating") + b1 + RS(3, "Duration: 20s") + b2 + RS(2, "Cost: 4% of Base Power") +
                b2 + RS(3, "Cooldown: 45s")
        }
    }, {
        n: "Fire at Will",
        tt1: function () {
            return RS(7, "Skill Type: Buff") + b2 + RS(10, "Briefly enables fellowship members within range to deal more damage.") + b2 + RS(3, "Effects applied to the Fellowship within 40 metres:") + b1 + RS(2, "+760[?] Physical Mastery Rating<br>+760[?] Tactical Mastery Rating") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 45s")
        }
    }, {
        n: "Dodge This!",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Ranged Skill") + b2 + RS(10, "A javelin throw which cannot be avoided.<br><br>This skill is only available after an enemy avoids one of your attacks.") +
                b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Snap Shot - Ambush",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Ranged Skill") + b2 + RS(10, "When given time to prepare, a Warden can deliver a powerful opening volley.") + b2 + RS(6, "Mounted Combat Enemies:<br>Knockout replaced with a mount turn rate debuff") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(4, "5s Knockout") + b1 + RS(2, "+50% Run Speed") + b1 + RS(3, "Duration: 5s") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Snap Shot - Shield Piercer",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Ranged Skill") + b2 + RS(10, "Special javelins will pierce a defender's shield and bend, making the javelin difficult to remove and the shield nearly useless.") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(4, "-4222[?] Block Rating") + b1 + RS(3, "Duration: 20s") + b2 + RS(3, "Cooldown: 20s")
        }
    }, {
        n: "Snap Shot - Hampering Javelin",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Ranged Skill") + b2 + RS(10, "Javelins can pierce body parts or equipment and slow the target until the javelin can be removed.") +
                b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(4, "-30% Target Run Speed") + b1 + RS(3, "Duration: 20s") + b2 + RS(3, "Cooldown: 20s")
        }
    }, {
        n: "Snap Shot - Wages of Fear",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Ranged Skill") + b2 + RS(10, "Turning your back on a Warden with javelin at hand is likely to be the last thing you do.<br><br>This skill deals extra damage when used from behind.") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(3, "Cooldown: 45s")
        }
    }, {
        n: "Snap Shot - Javelin of Deadly Force",
        range: "30.2m Range",
        tt1: function () {
            return RS(7,
                "Ranged SKill<br>Max Targets: 10") + b2 + RS(10, "With preparation, some Wardens can throw their Javelins with such deadly force that it will pass completely through several bodies.<br><br>For every target hit, you gain a stack of a Ranged Damage and Critical Damage buff.") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Defiant Challenge",
        range: "10.2m Range",
        tt1: function () {
            return RS(7, "Melee Skill<br>Radius: 10m") + b2 + RS(10, "Forces up to 10 nearby enemies to attack the Warden.<br><br>Allows the Warden to damage all attackers after each blow.") +
                b2 + RS(2, "On any Common, Fire, Shadow damage:<br>Reflect 92[?] damage") + b1 + RS(3, "Duration: 30s") + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 20s")
        }
    }, {
        n: "For the Free Peoples",
        tt1: function () {
            return RS(10, "Enter a state in which every Gambit Builder builds a stacking Mitigation buff for the Fellowship.") + b2 + RS(3, "Duration: 15s") + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 1m 30s")
        }
    }, {
        n: "Recklessness",
        tt1: function () {
            return RS(10, "An all-out attack which sacrifices defence for offence for a short time.") +
                b2 + RS(2, "-10% Block Chance<br>-10% Parry Chance<br>-10% Evade Chance<br>+50% Melee Damage<br>+1368[?] Critical Rating") + b1 + RS(3, "Duration: 20s") + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 1m 30s")
        }
    }, {
        n: "Diminished Target",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Ranged Skill") + b2 + RS(10, "Attack and weaken the defences of the target.") + b2 + RS(5, "(120 + 1.2*Mastery%)" + cStr[4]) + b2 + RS(4, "-5% Tactical Mitigation") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 3% of Base Power") + b2 + RS(3, "Cooldown: 18s")
        }
    }, {
        n: "Javelin of Deadly Force",
        range: "30.2m Range",
        tt1: function () {
            return RS(7, "Ranged SKill<br>Max Targets: 10") + b2 + RS(10, "With preparation, some Wardens can throw their Javelins with such deadly force that it will pass completely through several bodies.<br><br>For every target hit, you gain a stack of a Ranged Damage and Critical Damage buff.") + b2 + RS(5, "(100 + Mastery%)" + cStr[4]) + b2 + RS(2, "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }]
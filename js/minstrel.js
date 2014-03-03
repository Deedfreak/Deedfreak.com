    trees = [{
        n: "The Watcher of Resolve",
        head: "Shields and heals your allies with song.",
        main: "Powerful healers, offering buffs to healing potency and frequency. These Minstrels heal the Morale of the Fellowship and themselves.",
        skills: [3],
        low: ["Scoring a Critical Hit increases Outgoing Healing by 10% for 10s.<br>You cannot gain this effect more than once every 25s.<br>+10% Outgoing Healing Modifier<br>Duration: 10s<br><br>+60[?] Fate<br>+60[?] Will"],
        tt1: function () {
            return RS(1,
                this.low[0])
        },
        bonuses: [{
            n: "Open Ears",
            tS: ["Coda of Resonance has a 50% chance to grant a +10% Incoming Healing Buff to nearby fellows for 10s. You cannot gain this effect more than once every 30s.", "Coda of Resonance has a 50% chance to trigger an Incoming Healing buff for your fellows."],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Resonant Ballads",
            tS: ["All Ballads increase Outgoing Healing by an extra 3%.", "+3% Ballad Healing Bonus"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Snowball",
            linkSkill: [0],
            tS: ["Healing skills build a stacking buff.<br>At maximum stack, you can use a powerful heal.", "Skills Earned:<br>Perfect Ending", "Healing Skills will build a stacking effect on the Minstrel.<br>At 7 stacks, the potent healing skill Perfect Ending will be made available for use for a short time."],
            tt1: function () {
                return b2 + RS(8, this.tS[1]) + b2 + RS(1, this.tS[2])
            }
        }, {
            n: "Bolster Our Courage",
            tS: ["A portion of Bolster Courage's heal is also applied to nearby Fellows."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Call to Ioreth",
            linkSkill: [1],
            tS: ["Grants access to Call to Ioreth, which causes your next heal to be a critical heal.", "Skills Earned:<br>Call to Ioreth"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Rally!",
            linkSkill: [2],
            tS: ["The ways of the elder ages are not lost to all races yet. You may bring new inspiration to those whose Morale has been entirely depleted, reviving a defeated ally in combat.", "Skills Earned:<br>Rally!"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Chord of Legend",
            tS: ["", "+100% Chord of Salvation Healing"],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }]
    }, {
        n: "The Warrior-Skald",
        head: "Uses harsh words to damage foes.",
        main: "The damage line for Minstrels, inflicting heavy damage and moving quickly through battles.",
        skills: [4],
        low: ["+20% Light Skill Damage<br>+5m Range to Ballads and Cries"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Discordant Ballads",
            tS: ["All Ballads now grant you a Tactical Damage Buff.<br><br>Entering Dissonance Stance now grants 'Fresh Voice', a short-term Tactical Damage Buff.",
                "All Ballads will now grant a 5% Tactical Damage Bonus to yourself"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Piercing Calls",
            tS: ["", "The chance to resist your Cries and Calls is reduced by 10%"],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Concentration",
            tS: ["You gain immunity to interruption and induction setback for 5 seconds after scoring a Critical Hit.", "On every skill,<br>On Critical Hit:<br>Damage will not set back Inductions<br>Duration: 6s<br>Scoring a Critical or Devastating Hit with a Cry of Call will grant 5s of Induction Setback Immunity"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Haste",
            tS: ["Ballads reduce the active cooldown of your Cries and Calls by 1s.", "Ballads will reduce the active cooldowns of Cries and Calls by 1s"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Freedom",
            tS: ["Calls have a chance to trigger the ability to use a single healing skill from another stance.", "+10% Chance for War-speech Calls and Cry of the Wizards to allow for use of Raise the Spirit, Chord of Salvation or the improved versions of these skills for 10 seconds"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Fierce Cries",
            tS: ["Your Cry and Call damage is increased.", "+15% to Cry and Call Critical Damage"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Encore",
            tS: ["There is a small chance that a Coda will not consume your Ballads.", "-30% Chance for Codas to cashout Ballad Buffs"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }]
    }, {
        n: "The Protector of Song",
        head: "Spins tales to motivate allies to great feats.",
        main: "Supports allies with powerful buffs, using enhanced Anthem skills with great effectiveness.",
        skills: [6],
        low: ["Coda of Melody applies a +2.5% Partial B/P/E Buff to your fellowship<br><br>Coda of Resonance applies a +5% Incoming Healing Buff to your fellowship<br><br>Coda of Dissonance applies a +5% Outgoing Damage Buff to your fellowship<br><br>You may have 2 Anthems active at once"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Perfect Ballad",
            tS: ["Perfect Ballad restores twice the Power cost of a Ballad.", "Perfect Ballad will now restore a small amount of Power"],
            tt1: function () {
                return b2 +
                    RS(1, this.tS[1])
            }
        }, {
            n: "Gripped by Fear",
            tS: ["", "The 'break on damage' Grace Period for Invocation of Elbereth is extended by 3s."],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Song of Restoration",
            tS: ["Story of Courage is now a targeted skill, and will remove an additional Poison, Disease, Wound, or Fear in an area around your target."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Improved Call of the Second Age",
            tS: ["Call of the Second Age offers improved bonuses.", "-10% Induction Duration from Call of the Second Age<br>-10% Attack Duration from Call of the Second Age"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Tale of Tales",
            tS: ["Grants access to Tale of Tales, a powerful Aura which carries different buffs based on what stance you are in."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Song of Aid",
            linkSkill: [5],
            tS: ["Grants access to Song of Aid, which gives each member of your fellowship a unique buff based on their class.", "Skills Earned<br>Song of Aid"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Harmonious Anthems",
            tS: ["", "You may now have three anthems active at once."],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }]
    }];
    traits = [
        [{
            n: "Poignant Phrases",
            tM: 5,
            uT: [6, 0, 4],
            uR: [3],
            tS: ["Increases Critical Healing.", "% Critical Healing Mod"],
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
            n: "Soothing Voice",
            tM: 5,
            tS: ["Increases the potency of Heals.", "% Outgoing Healing Effect Modifier"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Strong Appeal",
            tM: 5,
            rT: [6, 0, 0],
            rR: [3],
            uT: [6, 0, 16],
            uR: [3],
            tS: ["Increases the Crit chance of heals.", "% Healing Critical Chance"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Improved Bolster Courage",
            tM: 5,
            tS: ["Bolster Courage delivers a more potent heal.", "% Bolster Courage Healing"],
            tt1: function (a) {
                return RS(1, "+" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Pause for Breath",
            tM: 3,
            tS: ["Healing skills have a chance to refund their Power cost.<br><br>At max rank, heals refund more than their Power cost.",
                "% Healing Skill Power Cost"
            ],
            tt1: function (a) {
                return RS(1, "-" + (50 + 25 * a) + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Quick Melody",
            tM: 5,
            tS: ["Lowers skill induction time, letting you heal faster.", "% All Skill Inductions"],
            tt1: function (a) {
                return RS(1, "-" + 4 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Inspiring Finish",
            tM: 3,
            tS: ["Ballads have a chance to build a stacking enchancement for Coda of Resonance.<br><br>Each stack will cause Coda of Resonance to add 3% Outgoing Healing, up to 15%.",
                "% Inspiring Finish Application Chance"
            ],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Resonant Piercing Cry",
            tM: 3,
            linkSkill: [7],
            tS: ["Scoring a Critical Hit with Resonant Piercing Cry opens the ability to use Inspiring Echoes, an AoE Healing skill.", "Resonant Piercing Cry will grant an AoE Heal on a Critical Hit.", "Skills Earned:<br>Inspiring Echoes", "% Healing on Crit"],
            tt1: function (a) {
                var b = RS(8, this.tS[2]) + b1 + RS(1, this.tS[1]);
                1 < a && (b += b1 + RS(1, "+" + 10 * (a - 1) + this.tS[3]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + (RS(1, this.tS[1]) + b1 + RS(8, this.tS[2])) : b + RS(1, "+" + 10 * (a - 1) + this.tS[3])
            }
        }, {
            n: "Improved Chord of Salvation",
            tM: 3,
            tS: ["Chord of Salvation gains a fellowship-wide heal-over-time.", "Chord of Salvation now grants a fellowship-wide HoT", "% Chord of Salvation Hot Strength"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 + this.tt3(a));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + RS(1, this.tS[1]) :
                    b + this.tt3(a)
            },
            tt3: function (a) {
                return RS(1, "+" + (5 * a + 10 * Math.floor(a / 3)) + this.tS[2])
            }
        }, {
            n: "Improved Song of the Hammerhand",
            tM: 1,
            tS: ["Enhances the potency of the bubble from Song of the Hammerhand.", "+15% Song of the Hammerhand Bubble Strength"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Follow Up",
            tM: 2,
            rT: [6, 0, 4],
            rR: [3],
            tS: ["Critical Heals speed up skill use.", "On every Heal skill,<br>On Critical Hit:<br>-", "% All Skill Inductions<br>Duration: 6s"],
            tt1: function (a) {
                return RS(1, this.tS[1] + 10 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Triumphant Spirit",
            tM: 2,
            linkSkill: [8],
            tS: ["Earns the skill: Triumphant Spirit", "Skills Earned:<br>Triumphant Spirit", "-75 Triumphant Spirit Cooldown"],
            tt1: function (a) {
                var b = RS(8, this.tS[1]);
                1 < a && (b += b1 + RS(1, this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Improved Coda of Resonance",
            tM: 3,
            tS: ["Coda of Resonance briefly reduces incoming damage.",
                " Incoming Damage Buff Duration"
            ],
            tt1: function (a) {
                return RS(1, "+" + (2 * a + 2) + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Inspiring Cries and Calls",
            tM: 5,
            tS: ["Healing skills have a chance to reset the cooldown of Cries and Calls. You cannot gain this effect more than once every 25s.", "% Chance to Reset Cry and Call Cooldown"],
            tt1: function (a) {
                return RS(1, "+" + 6 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Legend of Helm Hammerhand",
            tM: 1,
            linkSkill: [9],
            tS: ["Earns the skill: Legend of Helm Hammerhand", "Skills Earned:<br>Legend of Helm Hammerhand"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "The Fundamentals",
            tM: 5,
            uT: [6, 1, 4],
            uR: [3],
            tS: ["Increases the damage of Ballads and Codas.", "% Ballad and Coda Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Concussive Shout",
            tM: 1,
            tS: ["Critical Hits with Piercing Cry will stun the target for 5s.",
                "5s Stun<br>+30% Piercing Cry Critical Chance"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Critical Strikes",
            tM: 5,
            tS: ["Increases Critical Chance and Critical Damage.", "% Melee Critical Chance<br>", "% Ranged Critical Chance<br>", "% Tactical Critical Chance<br>", "% Tactical Critical Multiplier"],
            tt1: function (a) {
                for (var b = "", c = 1; 5 > c; c++) b += RS(1, "+" + a + this.tS[c]);
                return b
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Piercing Ballads",
            tM: 5,
            rT: [6, 1,
                0
            ],
            rR: [3],
            tS: ["Increases the Critical Chance of Ballad skills.", "% Critical Chance of Ballads"],
            tt1: function (a) {
                return RS(1, "+" + 3 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Discordant Cries",
            tM: 5,
            tS: ["Increases the damage of Cries and Calls.", "% Dissonance Cry and Call Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Call of Orom&euml;",
            tM: 1,
            linkSkill: [10],
            uT: [6, 1, 10],
            uR: [1],
            tS: ["Earns the skill: Call of Orom&euml;.",
                "Skills Earned:<br>Call of Orom&euml;"
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
            n: "Emboldening Finish",
            tM: 3,
            tS: ["Ballads have a chance to build a stacking enhancement for Coda of Dissonance.<br><br>Each stack will cause Coda of Dissonance to add a +3% damage buff, up to 15%.", "% Emboldening Finish Application Chance"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Improved Call of Orom&euml;",
            tM: 2,
            rT: [6, 1, 6],
            rR: [1],
            tS: ["Call of Orom&euml; affects more targets and deals more damage.", " Call of Orom&euml; Max Targets<br>+", "% Call of Orom&euml; Damage"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1] + (10 * a + 5) + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Enduring Morale",
            tM: 5,
            tS: ["Increases max Morale.", " Maximum Morale"],
            tt1: function (a) {
                return RS(1, "+[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Echoing Anthem of War",
            tM: 1,
            tS: ["Anthem of War lasts longer.",
                "+5 Anthem of War Duration"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Finesse",
            tM: 5,
            tS: ["Finesse rating is improved.", " Finesse Rating"],
            tt1: function (a) {
                return RS(1, "+" + Math.floor(517.275 * a) + "[?]" + this.tS[1])
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
            n: "Cacophonous Timeless Echoes",
            tM: 3,
            tS: ["Increases the damage done by Timeless Echoes.", "% Echoes of Battle Damage"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Herald's Strength",
            tM: 5,
            tS: ["Dissonant Strike steals Morale from the enemy on a Critical Hit.", "% Morale stolen"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Cry of the Valar",
            tM: 1,
            linkSkill: [11],
            tS: ["Earns the skill: Cry of the Valar.", "Skills Earned:<br>Cry of the Valar"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Improved Coda of Fury",
            tM: 3,
            tS: ["Coda of Fury has a chance to reset the cooldown of all Cries and Calls. You cannot gain this effect more than once every 25s.",
                "% Chance to Reset Cry and Call Cooldown"
            ],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
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
            n: "Cry of the Wizards",
            tM: 1,
            linkSkill: [12],
            tS: ["Earns the skill: Cry of the Wizards.", "Skills Earned:<br>Cry of the Wizards"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Vocal Stamina",
            tM: 5,
            uT: [6, 2, 4],
            uR: [3],
            tS: ["Reduces Anthem Cooldowns.", " Anthem Cooldown"],
            tt1: function (a) {
                return RS(1, "-" +
                    2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Anthem of Composure",
            tM: 1,
            linkSkill: [13],
            tS: ["Earns the skill: Anthem of Composure.", "Skills Earned:<br>Anthem of Composure"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Improved Inspire Fellows",
            tM: 5,
            tS: ["Inspire Fellows costs less Power, heals more Morale, and briefly reduces incoming damage.", "% Inspire Fellows Power Cost<br>+", "% Inspire Fellows Healing<br>-", "% Incoming Damage"],
            tt1: function (a) {
                return RS(1, "-" + 4 * a + this.tS[1] + 4 * a + this.tS[2] + (Math.floor(a / 2.5) + 1) + this.tS[3])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Extended Anthems",
            tM: 5,
            rT: [6, 2, 0],
            rR: [3],
            tS: ["Increases Anthem Duration.", " Anthem Duration"],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Tactical Mastery",
            tM: 5,
            tS: ["Increases Tactical mastery rating.", " Tactical Mastery Rating"],
            tt1: function (a) {
                return RS(1, "+" + 152 * a + "[?]" + this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }, {
            n: "Weakening Echoes of Battle",
            tM: 3,
            tS: ["Echoes of Battle deals more damage and further reduces the enemy's Resistance.", "% Echoes of Battle Damage<br>-", " Echoes of Battle Resistance"],
            tt1: function (a) {
                return RS(1, "+" + 20 * a + this.tS[1] + Math.floor(2508 * a) / 10 + "[?]" + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Improved Hero's Strike",
            tM: 3,
            tS: ["Increases damage and healing done by Hero's Strike.", "% Hero's Strike Damage<br>+", "% Hero's Strike Healing"],
            tt1: function (a) {
                return RS(1,
                    "+" + 10 * a + this.tS[1] + 10 * a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 10 * a + "% Damage<br>+" + 10 * a + "% Healing")
            }
        }, {
            n: ""
        }, {
            n: "Exposing Weakness",
            tM: 1,
            tS: ["Echoes of Battle now grants a Critical Defence Debuff."],
            tt1: function (a) {
                return ""
            },
            tt2: function (a) {
                return ""
            }
        }, {
            n: "Bracing Finish",
            tM: 3,
            tS: ["In Melody, Ballads have a chance to build a stacking enhancement for Coda of Vigour.<br><br>Each stack will cause Coda of Vigour to give you 2.5% to Outgoing Healing and 1.5% to damage.",
                "% Bracing Finish Application Chance"
            ],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Sharing a Story",
            tM: 2,
            tS: ["A Critical hit with a Ballad will reset Piercing Cry cooldowns.", "Ballad critical hits will reset the cooldown of all versions of Piercing Cry.", "+2.5% Critical Chance of Ballads"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 + RS(1, this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[2])
            }
        }, {
            n: "Shielding Cry",
            tM: 3,
            tS: ["Piercing Cry causes some of the damage the Fellowship takes to be reflected upon your enemies.", "Piercing Cry now grants allies a short-term damage reflection shield.", " Shield Duration"],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 + RS(1, "+" + 2 * (a - 1) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 2 * (a - 1) + this.tS[2])
            }
        }, {
            n: "Strength of Helm Hammerhand",
            tM: 1,
            tS: ["Adds a Physical and Tactical mastery buff to Song of the Hammerhand's and Gift of the Hammerhand's bubble.",
                "+456[?] Physical and Tactical Mastery"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Change of Pace - Heal!",
            tM: 5,
            tS: ["Offensive skills have a chance to grant you a buff that will make your next healing skill crit.", "Damaging skills have a ", "% chance to make your next healing skill crit.<br>+100% Healing Critical Chance<br>Expires if out of combat for 9 seconds.<br>Healing skills have a ", "% chance to make your next damaging skill crit.<br>+100% Damage Skills Critical Chance<br>Expires if out of combat for 9 seconds.",
                "Increases Proc Chance to: "
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 5 * a + this.tS[2] + 5 * a + this.tS[3])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tS[4] + 5 * a + "%")
            }
        }, {
            n: ""
        }, {
            n: "Word Spreads",
            tM: 2,
            tS: ["Each rank increases the amount of maximum targets for Gift of the Hammerhand by 1.", " Gift of the Hammerhand target(s)"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Improved Coda of Melody",
            tM: 3,
            tS: ["Coda of Melody will also increase the fellowships Incoming Healing.",
                "+10% Incoming Healing from Coda of Melody", " Buff Duration"
            ],
            tt1: function (a) {
                var b = RS(1, this.tS[1]);
                1 < a && (b += b1 + RS(1, "+" + Math.floor(3.5 * (a - 1)) + this.tS[2]));
                return b
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + Math.floor(3.5 * (a - 1)) + this.tS[2])
            }
        }, {
            n: "Perfect Performance",
            tM: 3,
            tS: ["Your ballads provide a portion of their bonuses to your fellowship.", "Major Ballad gives ", "% Outgoing Healing to the fellowship<br>Minor Ballad gives ", "% Tactical Damage to the fellowship<br>Perfect Ballad reduces the fellowship's skill costs by ",
                "% Buff Potency"
            ],
            tt1: function (a) {
                return RS(1, this.tS[1] + 0.5 * a + this.tS[2] + 0.5 * a + this.tS[3] + 0.5 * a + "%")
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 0.5 * a + this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Call to Greatness",
            tM: 1,
            linkSkill: [14],
            tS: ["Earns the skill: Call to Greatness.", "Skills Earned:<br>Call to Greatness"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }]
    ];
    skills = [{
        n: "Perfect Ending",
        range: "25m Range",
        tt1: function () {
            return RS(7,
                "Fast<br>Tactical Skill<br>Skill Type: Heal") + b2 + RS(10, "Greatly heals a single ally.") + b2 + RS(2, "+(1378[?]-1972[?])*(100+Heal%)% Morale" + b2 + "Cost: 3.1% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Call to Ioreth",
        tt1: function () {
            return RS(10, "Invoke the n of the expert Gondorian Healer. Remembrances of her techniques guarantee your next Heal to be a Critical Heal.") + b2 + RS(2, "+100% Healing Critical Chance" + b2 + "Cost: 5% of Base Power") + b2 + RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Rally!",
        range: "25m Range",
        tt1: function () {
            return RS(7,
                "Tactical Skill<br>Skill Type: Heal") + b2 + RS(10, "Revives a defeated ally in combat, with their Health and Power mostly intact.") + b2 + RS(2, "Target revives with 80% Morale<br>Target revives with 50% Power") + b1 + RS(3, "Effects to apply on revival:") + b1 + RS(2, "You have been recently revived.") + b1 + RS(3, "Duration: 30s") + b2 + RS(2, "Cost: 3.875% of Base Power") + b2 + RS(3, "Cooldown: 7m 30s")
        }
    }, {
        n: "Soliloquy of My Spirit",
        tt1: function () {
            return RS(7, "Immediate<br>Tactical Skill") + b2 + RS(10, "Your tune is like a slow burning Soliloquy that keeps your spirit bolstered for a time. This is one of the few minstrel morale heals that can be used on the move.") +
                b2 + RS(2, "Heals [?]-[?] Morale every 3 seconds for 30 seconds." + b2 + "Cost: 0.775% of Base Power") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Call to Fate",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Resistance: Cry<br>Skill Type: Call") + b2 + RS(10, "Requires Dissonance Stance.<br><br>Deals Light damage to a single target, with a high Critical chance.") + b2 + RS(5, "[?]-[?] Light Damage") + b2 + RS(2, "Cost: 3.1% of Base Power") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Song of Aid",
        tt1: function () {
            return RS(7, "Channel Duration: 10s<br>Skill Type: Buff") +
                b2 + RS(10, "Inspires Fellows to perform heroic feats.<br><br>Burglar: Gains a Critical Response.<br><br>Captain: Gains an Enemy Defeat Response.<br><br>Champion: Gains an Enemy Defeat Response.<br><br>Guardian: Gains a Block Response and a Parry Response.<br><br>Hunter: Gains a Parry Response.<br><br>Lore-Maste: Beacon of Hope has a decreased Cooldown and Morale cost.<br><br>Minstrel: Unlocks Bolster Courage for free and Dissonance Calls.<br><br>Rune-Keeper: Scribe's Spark and Prelude to Hope have decreased Cooldowns.<br><br>Warden: Shield Piercer has a decreased Cooldown.") +
                b2 + RS(3, "Aura - affects Fellowship members within 20 metres:") + b2 + RS(2, "Cost: 0.4%[?] of Base Power Per Second") + b1 + RS(3, "Channeled Skill") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Anthem of Prowess",
        range: "40.2m Range",
        tt1: function () {
            return RS(7, "Radius: 40m<br>Skill Type: Buff") + b2 + RS(10, "Anthem: Increases Armour, Evade and Attack speed of all fellowship members.") + b2 + RS(6, "Requires 3 ballad buffs present on the Minstrel.") + b2 + RS(2, "Alters Coda: Coda will cause your next three Hero's/Herald's/Dissonant Strikes to have no cooldown.<br><br>-5% Attack Duration<br>+1497[?] Armour Value<br>+1920[?] Evade Rating") +
                b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 2.325% of Base Power") + b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "Inspiring Echoes",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Fast<br>Tactical Skill<br>Max Targets: 6<br>Radius: 6m<br>Skill Type: Heal") + b2 + RS(10, "Scoring a Critical Hit with Resonant Piercing Cry will unlock this skill which heals allies.") + b2 + RS(2, "+[?] Morale" + b2 + "Cost: 3.1% of Base Power") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Triumphant Spirit",
        tt1: function () {
            return RS(7, "Immediate<br>Tactical Skill<br>Skill Type: Heal") +
                b2 + RS(10, "In desperate times, instantly heals the Morale of the Fellowship.") + b2 + RS(2, "+10% Healing Skills Power Cost") + b1 + RS(3, "Duration: 8s<br>Effects applied to the Fellowship within 20 metres:") + b1 + RS(2, "+[?]-[?] Morale" + b2 + "Cost: 3.1% of Base Power") + b2 + RS(3, "Cooldown: 4m")
        }
    }, {
        n: "Legend of Helm Hammerhand",
        range: "20.2m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Radius: 20m<br>Skill Type: Heal") + b2 + RS(10, "All Fellows gain a Morale Bubble.<br><br>If the bubble is broken, no effect will be gained.<br><br>If the bubble expires, it will grant a small fellowship heal.") +
                b2 + RS(2, "Applies a damage preventing bubble granting [?] temporary Morale.") + b1 + RS(3, "Duration: 15s") + b2 + RS(5, "Applied on expiration:") + b2 + RS(3, "Effects applied to the Fellowship within 20 metres:") + b1 + RS(2, "+[?] Morale" + b2 + "Cost: 4.65% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Call of Orom&euml;",
        range: "30m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 3<br>Radius: 5m<br>Resistance: Cry<br>Skill Type: Call") + b2 + RS(10, "Requires Dissonance Stance.<br><br>Deals AoE Light damage and reduces further Light damage resistance.") +
                b2 + RS(5, "[?]-[?] Light Damage") + b2 + RS(4, "-[?] Light Mitigation") + b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 3.1% of Base Power") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Cry of the Valar",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 3<br>Radius: 5m<br>Resistance: Cry<br>Skill Type: Cry") + b2 + RS(10, "Call upon a song to blast your enemies with an area-of-effect of light. This attack will also remove a Corruption buff from enemies you hit.") + b2 + RS(5, "[?]-[?] Light Damage") + b2 + RS(4,
                "Removes up to 1 Corruption effect from the target.") + b1 + RS(2, "+2470[?] in-Combat Morale Regen") + b1 + RS(3, "Duration: 30s") + b2 + RS(2, "Cost: 0.775% of Base Power") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Cry of the Wizards",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 8<br>Radius: 10m<br>Resistance: Cry<br>Skill Type: Cry") + b2 + RS(10, "Call upon a powerful song to blast your enemies with an area-of-effect of light that will slow the creatures who are hit by it.") + b2 + RS(5, "[?]-[?] Light Damage") +
                b2 + RS(4, "The targets' movement is slowed by 30%.<br>+20% Target Attack Duration") + b1 + RS(3, "Duration: 15s") + b2 + RS(2, "Cost: 1.55% of Base Power") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Anthem of Composure",
        range: "40.2m Range",
        tt1: function () {
            return RS(7, "Radius: 40m<br>Skill Type: Buff") + b2 + RS(10, "Anthem: Increases Resistances and Tactical Mitigation of all fellowship members.") + b2 + RS(6, "Requires 3 ballad buffs present on the Minstrel.") + b2 + RS(2, "Alters Coda: Coda applies a short-term power-over-time restoring effect to the caster.<br><br>+1929[?] Resistance Rating<br>+1584[?] Tactical Mitigation") +
                b1 + RS(3, "Duration: 10s") + b2 + RS(2, "Cost: 2.325% of Base Power") + b2 + RS(3, "Cooldown: 15s")
        }
    }, {
        n: "Call to Greatness",
        tt1: function () {
            return RS(7, "Skill Type: Buff") + b2 + RS(10, "You call out to your fellows, inspiring them to Greatness for 15s.<br><br>Burglar: +15% Damage to positional attack skills and Surprise Strike recovers in 5 seconds.<br><br>Captain: Gains an Enemy Defeat Response and gains the Battle-readied state every 5 seconds.<br><br>Champion: Restores Power over time and gains 2 Fervour initially, then 1 Fervour every 5 seconds.<br><br>Guardian: Increased Morale and Healing from Warrior's Heart. +Block/Parry Rating.<br><br>Hunter: +10% Ranged Damage, +3 Focus and +2 Focus every 5 seconds.<br><br>Lore-master: Reduced chance for enemies to resist blinding flash, and cooldown is reduced by 10s.<br><br>Minstrel: +10% Outgoing Healing and Chord of Salvation recovers 5 seconds faster.<br><br>Rune-keeper: -10% Power Costs and Steady Hands recovers in 5 seconds.<br><br>Warden: +5% Damage and Masteries recover in 5 seconds.") +
                b2 + RS(3, "Effects applied to the Fellowship within 25 metres:") + b2 + RS(2, "Cost: 3.875% of Base Power") + b2 + RS(3, "Cooldown: 1m 30s")
        }
    }]
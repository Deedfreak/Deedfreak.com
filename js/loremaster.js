    trees = [{
        n: "Keeper of Animals",
        head: "A strong bond with beasts for attack and defence.",
        main: "Animal companions ensure their keeper's survival, using bonuses and pet-master interactions to help both thrive in battle.",
        skills: [],
        low: ["Your companions have the following bonuses:<br> +5% Morale<br> +5% Power<br> +2% Attack Speed<br> +2% Outgoing Damage<br> +1% Critical Chance<br> +2% Block Chance<br> +2% Parry Chance<br> +2% Evade Chance<br> +1 Stealth<br> +1 Stealth Detection<br>Coordination:<br>When your animal companion lands a critical strike, your next skill has no induction.<br>This effect cannot trigger more than once every 10s."],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Stamp Out the Fire",
            tS: ["Your pets deal bonus damage to enemies suffering from Burning Embers."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Peerless Wisdom",
            tS: ["You have a greater chance of reflecting damage when using Wisdom of the Council.", "+10% Wisdom of the Council Damage Negation Chance"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }, {
            n: "Raven's Protection",
            tS: ["The Raven now offers a Tactical Mitigation Buff to you and your fellows."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Critical Coordination",
            tS: ["When your Pet scores a Critical Hit, your next induction skill is instant."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Fellowship Friend",
            tS: ["When your Pet scores a Critical Hit, a unique buff will be bestowed from your pet unto your fellowship."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Noble Savage",
            tS: ["", "Your companions have following bonuses:<br> +10% Morale<br> +10% Power<br> +5% Attack Speed<br> +15% Outgoing Damage<br> +5% Critical Chance<br> +1% Block Chance<br> +1% Parry Chance<br> +1% Evade Chance<br> +1 Stealth<br> +1 Stealth Detection<br> Immune to Knockback"],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Tutelage of the Brown Wizard",
            tS: ["", "Your pets gain 3 levels<br><br>Legendary Skill Mod:<br>Sic 'em will now summon a Bog-Guardian."],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }]
    }, {
        n: "Master of Nature's Fury",
        head: "Uses the strength of nature to damage foes.",
        main: "A DPS build focused on dealing significant damage from a distance.<br>Skills interact to maximize damage to one or multiple targets.",
        skills: [],
        low: ["+15% Fire-type Damage<br>+20% Chance for Lightning Strike to strike twice.<br><br>Your feline companions have increased attack damage and slightly increased Morale and Power"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Improved Ignition",
            tS: ["", "+15% cashout damage from Lightning-strike and Lightning-storm"],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Master of the Elements",
            tS: ["", "+10% Fire-type Damage<br>+10% Light-type Damage<br>+10% Lightning-type Damage<br>+10% Frost-type Damage"],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Exposure to the Elements",
            tS: ["", "+20% Elemental Critical Damage"],
            tt1: function () {
                return RS(1, this.tS[1])
            }
        }, {
            n: "Liquid Fire",
            tS: ["Sticky Gourd becomes Improved Sticky Gourd, and applies Burning Embers to targets stuck in its area of effect every 4 seconds."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Buying Time",
            linkSkill: [0],
            tS: ["When your pet flanks, you have the choice to reduce the cooldown on one of your more potent skills.", "Skills Earned:<br>Hasten Sticky Gourd"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Ents go to War",
            linkSkill: [1, 2],
            tS: ["Grants you Ents go to War.", "Skills Earned:<br>Ents go to War<br>Hasten Ents go to War"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Flame of Anor",
            tS: ["Sign of Battle: Wizard's Fire now affects up to 2 additional targets.",
                "+35% chance to trigger a lightning strike during Nature's Fury"
            ],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }]
    }, {
        n: "The Ancient Master",
        head: "Uses lore knowledge to hinder and confound foes.",
        main: "A CC build with a wide range of debuffs and Power-restoring abilities for the Fellowship, using chains of harmful skills to enhance debuffs.",
        skills: [7],
        low: ["Insult to Injury: Burning Embers will deal bonus damage to Stunned Targets"],
        tt1: function () {
            return RS(1, this.low[0])
        },
        bonuses: [{
            n: "Warding Lore",
            linkSkill: [3],
            tS: ["You learn to use Warding Knowledge", "Skills Earned:<br>Warding Knowledge"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Beacon of Hope",
            tS: ["Light of Hope becomes Beacon of Hope, which heals allies in an area around your target."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Enough for Everyone",
            linkSkill: [4],
            tS: ["Grants the Skill: Share the Power - Fellowship", "Skills Earned:<br>Share the Power - Fellowship"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Herb-lore",
            linkSkill: [5],
            tS: ["You learn to use Herb Lore",
                "Skills Earned:<br>Herb-lore"
            ],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Air-lore",
            linkSkill: [6],
            tS: ["You learn to use Air-lore", "Skills Earned:<br>Air-lore"],
            tt1: function () {
                return b2 + RS(8, this.tS[1])
            }
        }, {
            n: "Advanced Knowledge of Cures",
            tS: ["Knowledge of Cures is now instant-cast."],
            tt1: function () {
                return ""
            }
        }, {
            n: "Force of Will",
            tS: ["Your mastery of Lore makes your debuffs last longer.", "The duration of the following debuffs is increased by 15s:<br>Fire-lore<br>Frost-lore<br>Sign of Power: Command<br>Sign of Power: See All Ends<br>Ancient Craft<br><br>Legendary Skill Mod: Fire-lore and Frost-lore affect up to 4 additional targets when The Ancient Master is active"],
            tt1: function () {
                return b2 + RS(1, this.tS[1])
            }
        }]
    }];
    traits = [
        [{
            n: ""
        }, {
            n: ""
        }, {
            n: "Sign of the Wild: Protection",
            tM: 5,
            tS: ["Sign of the Wild: Protection increases your pet's defences.", "% Pet Morale<br>-", "% Pet Incoming Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Sign of the Wild: Rage",
            tM: 5,
            tS: ["Sign of the Wild: Rage increases your pet's damage and attack speed.", "% Pet Attack Duration<br>+", "% Pet Damage"],
            tt1: function (a) {
                return RS(1,
                    "-" + a + this.tS[1] + 5 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Go for the Throat",
            tM: 5,
            tS: ["Increases your pet's Critical rating.", "% Pet Critical Chance and Damage"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Lesser Giant Eagle",
            tM: 1,
            linkSkill: [8],
            tS: ["Earns the skill: Eagle-friend.", "Skills Earned:<br>Eagle-friend"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Inner Flame",
            tM: 3,
            linkSkill: [9],
            tS: ["Earns the skill: Inner Flame.<br><br>Heals additional Morale and increases Fire damage.", "Skills Earned:<br>Inner Flame", "% Inner Flame Base Healing<br>+", "% Fire Damage Buff"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[2] + a + this.tS[3]) + b1 + RS(8, this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 5 * a + this.tS[2] + a + this.tS[3])
            }
        }, {
            n: ""
        }, {
            n: "Prepare for War",
            tM: 5,
            tS: ["Increase Tactical damage dealt by both your pet and yourself.", " Tactical Mastery Rating<br>+",
                " Pet Physical and Tactical Mastery"
            ],
            tt1: function (a) {
                return RS(1, "+" + 76 * a + "[?]" + this.tS[1] + 152 * a + "[?]" + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Prepared Materials",
            tM: 3,
            tS: ["You attack faster now that you are prepared for battle.", "% All Skill Inductions"],
            tt1: function (a) {
                return RS(1, "-" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Hearty Diet",
            tM: 5,
            tS: ["Boosts the max Morale of your pet and yourself.", " Maximum Morale<br>+", "% Pet Morale"],
            tt1: function (a) {
                return RS(1, "+" + 1.5 * a + "%[?]" + this.tS[1] + a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Don't You Touch Him!",
            tM: 3,
            tS: ["Protective of your pet, you gain a damage buff if your pet is hit by a Critical attack.", "% Damage Buff", "<br>If your pet is hit with a critical attack, you gain a damage bonus."],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1] + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 5 * a + this.tS[1])
            }
        }, {
            n: "Catmint",
            tM: 1,
            linkSkill: [10],
            tS: ["Earns the skill: Catmint.", "Skills Earned:<br>Catmint"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Loyalty",
            tM: 5,
            tS: ["Your pet loves you. If you are hit by a Critical attack, your pet will sacrifice some Morale to heal you.", "Upon receiving a Critical Hit, your pet will sacrifice ", "% of its Morale to heal ", "% of yours. You cannot gain this effect more than once every 15s", "% Morale Exchanged"],
            tt1: function (a) {
                return RS(1, this.tS[1] + 2 * a +
                    this.tS[2] + 2 * a + this.tS[3])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 2 * a + this.tS[4])
            }
        }, {
            n: "After-battle Treat",
            tM: 3,
            tS: ["After a battle is finished, your pet receives positive reinforcement from you; it gains Morale and a damage buff.", "On enemy defeat: Your pet heals 2% of its Maximum Morale and gains an Outgoig Damage buff<br>", "% Attack Damage"],
            tt1: function (a) {
                return RS(1, this.tS[1] + "+" + 2.5 * a + this.tS[2])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) :
                    b + RS(1, "+" + 2.5 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Don't Interrupt Me",
            tM: 3,
            tS: ["Enemies who interrupt your inductions pay dearly for their rudeness.<br><br>At base, you return and absorb 7% of damage.", "You absorb and reflect a percentage of all damage done to you whilst inducting.", "% Damage Returned<br>+", "% Damage Absorbed"],
            tt1: function (a) {
                var b = this.tS[1];
                1 < a && (b += b1 + this.tt3(a));
                return RS(1, b)
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, this.tt3(a))
            },
            tt3: function (a) {
                return "+" +
                    Math.ceil(6.5 * (a - 1)) + this.tS[2] + Math.ceil(6.5 * (a - 1)) + this.tS[3]
            }
        }, {
            n: "Synchronized Movement",
            tM: 3,
            tS: ["You and your pet execute attacks more quickly.", "% All Skill Inductions<br>-", "% Pet Attack Duration"],
            tt1: function (a) {
                return RS(1, "-" + 3 * a + this.tS[1] + 3 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Sic 'em",
            tM: 1,
            linkSkill: [11, 12],
            tS: ["Earns the skill: Sic 'em.<br><br>Enables you to summon a host of wild animals to your aid, but they cannot be controlled.", "Skills Earned:<br>Command Pet<br>Sic 'em"],
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
            n: "Master of Fire",
            tM: 5,
            tS: ["Increases Fire skill damage.", "% Fire-type Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Tactical Mastery",
            tM: 5,
            tS: ["Deal more damage with Tactical skills.", " Tactical Mastery Rating"],
            tt1: function (a) {
                return RS(1, "+" + 152 * a + "[?]" + this.tS[1])
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
            n: "Burning Earth",
            tM: 3,
            tS: ["The Cracked Earth skill burns hotter, dealing additional damage.", "% Cracked Earth Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Knowledge of Storms",
            tM: 5,
            tS: ["Deal more damage with Lightning attacks.", "% Lightning-type Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Ancient Fire",
            tM: 5,
            tS: ["Gives Sign of Battle: Wizard's Fire a chance to upgrade 2 Burning Embers DoT effects at once.",
                "% Chance to Upgrade 2 Burning Embers DoTs"
            ],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Sword and Storm",
            tM: 1,
            uT: [5, 1, 14],
            uR: [1],
            tS: ["Staff-strike deals bonus Lightning damage and stuns the foe.", "Staff-strike will call down Lightning on your foe, dealing significant damage and stunning it. This effect cannot occur more than once every 60s.", "% Lightning-storm Base Damage"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) +
                    this.tt1(a)
            }
        }, {
            n: "Lightning-storm",
            tM: 3,
            linkSkill: [13],
            uT: [5, 1, 19],
            uR: [1],
            tS: ["Earns the skill: Lightning-storm.", "Skills Earned:<br>Lightning-storm", "% Lightning-storm Base Damage"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[2]) + b1 + RS(8, this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 10 * a + this.tS[2])
            }
        }, {
            n: "Slow Burn",
            tM: 3,
            uT: [5, 1, 16],
            uR: [1],
            tS: ["Burning Embers lasts much longer.", " Burning Embers Pulse(s)"],
            tt1: function (a) {
                return RS(1, "+" + a + this.tS[1])
            },
            tt2: function (a) {
                return b2 +
                    TR(a) + this.tt1(a)
            }
        }, {
            n: "Empowering Fires",
            tM: 3,
            tS: ["Increases Morale and Power healed when using Sign of Battle: Wizard's Fire on a flanked target.", "% Morale Restored<br>+", "% Power Restored"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1] + 8 * a + this.tS[2])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Fend Them Off",
            tM: 3,
            rT: [5, 1, 10],
            rR: [1],
            tS: "Sword and Storm temporarily boosts your Parry Chance, Evade Chance, and Fire Skill Damage.;Triggering Sword and Storm will also grant a temporary buff on the Lore-master:<br>+;% Parry Chance<br>+;% Evade Chance<br>+;% Fire Damage;% to All Avoidances<br>+".split(";"),
            tt1: function (a) {
                return RS(1, this.tS[1] + 2 * a + this.tS[2] + 2 * a + this.tS[3] + 4 * a + this.tS[4])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 2 * a + this.tS[5] + 4 * a + this.tS[4])
            }
        }, {
            n: ""
        }, {
            n: "Dry Kindling",
            tM: 3,
            rT: [5, 1, 12],
            rR: [1],
            tS: ["Burning Embers has a chance to burn hotter and last longer.", "% Chance to apply 2 stacks of Burning Embers at once"],
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
            n: "Fierce Lightning",
            tM: 5,
            rT: [5,
                1, 11
            ],
            rR: [1],
            tS: ["Lightning-storm may set the ground beneath the enemy afire, dealing additional Fire damage.", "% Chance to Lightning-storm to ignite the ground", "% Chance to trigger Fierce Lightning"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 10 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Mighty Wind",
            tM: 3,
            tS: ["Gust of Wind has a chance to spread the flames of Burning Embers from foe to foe.", "% Chance for Gust of Wind to spread Burning Embers"],
            tt1: function (a) {
                return RS(1, "+" + 10 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Ring of Fire",
            tM: 3,
            linkSkill: [14],
            tS: ["Earns the skill: Ring of Fire.", "Skills Earned:<br>Ring of Fire", "% Ring of Fire Avoidance Debuffs"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[2]) + b1 + RS(8, this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 5 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Nature's Fury",
            tM: 1,
            linkSkill: [15],
            tS: ["Earns the skill: Nature's Fury.", "Skills Earned:<br>Nature's Fury"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }],
        [{
            n: "Fire-lore",
            tM: 5,
            linkSkill: [16],
            uT: [5, 2, 8],
            uR: [3],
            tS: ["Improves the potency of Fire-lore's Melee Damage Debuff.", "Skills Earned:<br>Fire-lore", "% Melee Damage Debuff"],
            tt1: function (a) {
                return RS(1, "+" + 3 * a + this.tS[2]) + b1 + RS(8, this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 3 * a + this.tS[2])
            }
        }, {
            n: "Frost-lore",
            tM: 5,
            linkSkill: [17],
            uT: [5, 2, 9],
            uR: [3],
            tS: ["Improves the potency of Frost-lore's Tactical Damage Debuff.",
                "Skills Earned:<br>Frost-lore", "% Tactical Damage Debuff"
            ],
            tt1: function (a) {
                return RS(1, "+" + 2 * a + this.tS[2]) + b1 + RS(8, this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 2 * a + this.tS[2])
            }
        }, {
            n: "Storm-lore",
            tM: 3,
            linkSkill: [18],
            tS: ["Earns the skill: Storm-lore.<br><br>Increases Lightning Damage per rank.", "Skills Earned:<br>Storm-lore", "% Lightning-type Damage"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[2]) + b1 + RS(8, this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 ==
                    a ? b + this.tt1(a) : b + RS(1, "+" + 5 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: ""
        }, {
            n: "Mending Lore",
            tM: 5,
            tS: ["Increases Outgoing Healing per Rank. At max rank, increases the Incoming Healing buff on Water-lore.", "% Outgoing Healing", "<br>+5% Water-lore Incoming Healing Buff Mod"],
            tt1: function (a) {
                var b = "+" + 5 * a + this.tS[1];
                5 == a && (b += this.tS[2]);
                return RS(1, b)
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Power of Knowledge",
            tM: 1,
            tS: ["Increases the Power and Morale restoration from Power of Knowledge.", "+15% Morale and Power Healing from Power of Knowledge"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Playing with Fire",
            tM: 1,
            rT: [5, 2, 0],
            rR: [3],
            uT: [5, 2, 12],
            uR: [1],
            tS: ["Adds unique debuffs when using a Fire, Frost, or Lightning skill on a target afflicted with Fire-lore:", "Fire: +15% Attack Duration<br>Frost: +10% Miss Chance<br>Lightning: -50% Ranged Damage<br><br>This event cannot be triggered by Sticky Gourd or Nature's Fury"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Out in the Cold",
            tM: 1,
            rT: [5, 2, 1],
            rR: [3],
            uT: [5, 2, 13],
            uR: [1],
            tS: ["Adds unique debuffs when using a Fire, Frost, or Lightning skill on a target afflicted with Frost-lore:", "Frost: Tactical Mastery Debuff<br>Fire: +20% Skill Inductions<br>Lightning: +15% Power Cost<br><br>This event cannot be triggered by Sticky Gourd or Nature's Fury"],
            tt1: function (a) {
                return RS(1, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Level-headed",
            tM: 5,
            tS: ["Decreases Morale Cost of skills.", "% Morale Cost"],
            tt1: function (a) {
                return RS(1, "-" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: ""
        }, {
            n: "Wild Fire",
            tM: 1,
            rT: [5, 2, 8],
            rR: [1],
            tS: ["Using Wind-lore on an enemy afflicted by Fire-lore will spread the flames to nearby foes."],
            tt1: function (a) {
                return ""
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Chill Wind",
            tM: 1,
            rT: [5, 2, 9],
            rR: [1],
            tS: ["Using Wind-lore on an enemy afflicted by Frost-lore will spread the cold to nearby foes."],
            tt1: function (a) {
                return ""
            },
            tt2: function (a) {
                return b2 + TR(a) +
                    this.tt1(a)
            }
        }, {
            n: "Ancient Craft",
            tM: 3,
            tS: ["Increases Armour Debuff of Ancient Craft<br><br>At max rank, Ancient Craft causes the first Lightning Skill to be used against a target to deal bonus damage.", "% Armour Debuff Potency"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Flow of Power",
            tM: 5,
            tS: ["Increases Power restoration by Power of Knowledge and Share the Power.", "% Power Restored"],
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
            n: "Disable",
            tM: 3,
            tS: ["Increases Stun duration.", "s Stun Duration"],
            tt1: function (a) {
                return RS(1, "+" + (0.75 * a + 0.25 * Math.floor(a / 3)) + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Pleasant Breeze",
            tM: 5,
            linkSkill: [19],
            tS: ["A critical hit with Gust of Wind will allow you to direct a pleasant breeze to your allies, restoring some Power.", "Skills Earned:<br>Pleasant Breeze", "% Power Restoration"],
            tt1: function (a) {
                return RS(1, "+" + 5 * a + this.tS[2]) + b1 + RS(8, this.tS[1])
            },
            tt2: function (a) {
                var b = b2 + TR(a);
                return b = 1 == a ? b + this.tt1(a) : b + RS(1, "+" + 5 * a + this.tS[2])
            }
        }, {
            n: ""
        }, {
            n: "Quick Hands",
            tM: 3,
            tS: ["Reduces duration of all Lore-master inductions.", "% All Skill Inductions"],
            tt1: function (a) {
                return RS(1, "-" + 5 * a + this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }, {
            n: "Firm Grasp",
            tM: 3,
            tS: ["Increases Breakout Grace Period on all crowd-control skills.", "s Breakout Grace Period Duration"],
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
            n: "The Ancient Master",
            tM: 1,
            linkSkill: [20],
            tS: ["Earns the skill: The Ancient Master.", "Skills Earned:<br>The Ancient Master"],
            tt1: function (a) {
                return RS(8, this.tS[1])
            },
            tt2: function (a) {
                return b2 + TR(a) + this.tt1(a)
            }
        }]
    ];
    skills = [{
        n: "Hasten Sticky Gourd",
        tt1: function () {
            return RS(10, "Your pet has flanked your enemy, giving you some breathing room to prepare an ability.") + b2 + RS(6, "Reduces the cooldown of Sticky Gourd by 5s.") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Ents go to War",
        range: "15m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 5<br>Radius: 5m<br>Induction: 2s<br>Resistance: Tactical<br>Skill Type: Fire") + b2 + RS(10, "Shakes the Earth as if an Ent stamped his foot, damaging and stunning several enemies.") + b2 + RS(6, "Mounted Combat Enemies: Stun replaced with a mount speed debuff") + b2 + RS(5, "[?]-[?] Fire Damage") + b2 + RS(4, "6s Stun") + b2 + RS(2, "Cost: 10.5% of Base Morale<br>Cost: 3.075% of Base Power") + b2 + RS(3, "Cooldown: 5m")
        }
    }, {
        n: "Hasten Ents Go To War",
        tt1: function () {
            return RS(10,
                "Your pet has flanked your enemy, giving you some breathing room to prepare an ability.") + b2 + RS(6, "Reduces the cooldown of Ents Go To War by 12s.") + b2 + RS(3, "Cooldown: 5s")
        }
    }, {
        n: "Warding Knowledge",
        tt1: function () {
            return RS(7, "Induction: 2s") + b2 + RS(10, "Creates a circle in which enemies are vulnerable to tactical damage and more likely to miss.") + b2 + RS(3, "Duration: 40s") + b1 + RS(4, "+2% Miss Chance<br>+10% Incoming Tactical Damage") + b2 + RS(2, "Cost: 3.075% of Base Power") + b2 + RS(3, "Cooldown: 45s")
        }
    }, {
        n: "Share the Power - Fellowship",
        tt1: function () {
            return RS(7, "Induction: 1s<br>Skill Type: Heal") + b2 + RS(10, "Transfers Power to nearby Fellows.") + b2 + RS(3, "Effects applied to the Fellowship within 25 metres:") + b1 + RS(2, "+[?]-[?] Power<br><br>Cost: 11.1% of Base Morale")
        }
    }, {
        n: "Herb-Lore",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 3<br>Radius: 8m<br>Resistance: Tactical") + b2 + RS(10, "Roots several enemies in place.") + b2 + RS(6, "Mounted Combat Enemies: Root replaced with a mount acceleration debuff") + b2 + RS(4,
                "30s Root<br>50% break chance on damage after 1s") + b2 + RS(2, "Cost: 10.5% of Base Morale<br>Cost: 4.6% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Air-Lore",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Induction: 1s<br>Skill Type: Wind") + b2 + RS(10, "Air continually swirls around your target ally, inflicting damage on any who strike it.<br><br>Cannot be used on self.<br><br>Damages attackers.") + b1 + RS(2, "On any damage:<br>5% chance to Negate 15% damage<br>Reflect 15% of damage<br><br>Cost: 0.1% Power Per Second") +
                b1 + RS(3, "Toggle Skill<br><br>Cooldown: 5s")
        }
    }, {
        n: "Test of Will",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Induction: 1.5s<br>Resistance: Tactical<br>Skill Type: Light") + b2 + RS(10, "Damages and stuns the target.<br><br>This skill has a large bonus to its Critical chance and magnitude.") + b2 + RS(6, "Mounted Combat Enemies: Stun replaced with a mount speed debuff") + b2 + RS(5, "[?]-[?] Light Damage") + b2 + RS(4, "5s Stun") + b2 + RS(2, "Cost: 10.5% of Base Morale<br>Cost: 2.3% of Base Power") + b2 +
                RS(3, "Cooldown: 1m")
        }
    }, {
        n: "Eagle-friend",
        tt1: function () {
            return RS(7, "Induction: 1.5s") + b2 + RS(10, "Summons an eagle companion.<br><br>The eagle is a noble creature which can deal damage and, if called upon, will sacrifice itself to save you.") + b2 + RS(2, "Cost: 3.075% of Base Power")
        }
    }, {
        n: "Inner Flame",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Channel Duration: 10s<br>Skill Type: Fire, Heal") + b2 + RS(10, "Use Power to heal Morale for both yourself and your companion.<br><br>Must have a companion summoned.") +
                b2 + RS(2, "Heals [?]-[?] Morale every 1 second.<br><br>Cost: 2.3% of Base Power<br>Cost: 0.15% of Power Per Second") + b2 + RS(3, "Cooldown: 1m 30s")
        }
    }, {
        n: "Catmint",
        range: "40m Range",
        tt1: function () {
            return b2 + RS(10, "An herb enjoyed by your pets, giving them unique buffs.") + b2 + RS(2, "Bear: Increased Armour and Damage<br>Raven: Increase Benediction of the Raven Fire Mitigation Debuff and Damage<br>Cats: Attack Duration and Damage<br>Eagle: Beak Rend Morale-tap and Damage<br>Spirit: Nature's Gift Morale restoration and Nature's Light Morale Return<br>Bog-guardian: Bursting Root Stun Chance and Damage") +
                b1 + RS(3, "Duration: 12s") + b2 + RS(2, "Cost: 2.3% of Base Power") + b2 + RS(3, "Cooldown: 45s")
        }
    }, {
        n: "Command Pet",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Tactical Skill") + b2 + RS(10, "Command your pets to attack a target of your choosing.") + b2 + RS(2, "Cost: 1.55% of Base Power") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "Sic 'em!",
        tt1: function () {
            return RS(7, "Induction: 1.5s") + b2 + RS(10, "You summon a host of companions to swarm your enemies. These creatures are wild, and cannot be controlled.<br><br>Summoned companions will last for 20s before de-spawning.") +
                b2 + RS(2, "Cost: 3.1% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Lightning-storm",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 5<br>Radius: 7m<br>Induction: 2s<br>Resistance: Tactical<br>Skill Type: Lightning") + b2 + RS(10, "Vicious lightning strikes at the enemy, but this costs the Lore-master some Morale.") + b2 + RS(25, "This skill can cash-out Burning Embers for bonus damage.") + b2 + RS(5, "3 Attacks:<br>[?]-[?] Lightning Damage<br>[?]-[?] Lightning Damage<br>[?]-[?] Lightning Damage") +
                b2 + RS(2, "Cost: 10.5% of Base Morale<br>Cost: 5.35% of Base Power") + b2 + RS(3, "Cooldown: 1m 30s")
        }
    }, {
        n: "Ring of Fire",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 5<br>Radius: 5m<br>Induction: 1s<br>Resistance: Physical<br>Skill Type: Fire") + b2 + RS(10, "An attack leaving a flaming circle upon the ground that enemies fear to enter.") + b2 + RS(5, "[?]-[?] Fire Damage") + b2 + RS(3, "Duration: 20s") + b1 + RS(4, "-[?] Block Rating<br>-[?] Parry Rating<br>-[?] Evade Rating") + b1 + RS(3, "Expires if out of combat for a short amount of time.<br>Duration: 20s") +
                b1 + RS(4, "[?] Damage") + b2 + RS(2, "Cost: 2.3% of Base Power") + b2 + RS(3, "Cooldown: 30s")
        }
    }, {
        n: "Nature's Fury",
        range: "25m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Induction: 2s<br>Resistance: Tactical<br>Skill Type: Lightning") + b2 + RS(10, "Whirls Frost damage around the enemy, with a chance to deal Lightning damage-over-time.") + b2 + RS(5, "[?] Frost Damage") + b2 + RS(3, "Every 1 second:") + b1 + RS(4, "Effects applied to enemies within 5 metres:<br>[?] Frost Damage<br>Effects applied to enemies within 5 metres:<br>15% chance to apply<br>[?] Lightning Damage") +
                b1 + RS(3, "Duration: 5s") + b2 + RS(2, "Cost: 10.5% of Base Morale<br>Cost: 5.35% of Base Power") + b2 + RS(3, "Cooldown: 1m 30s")
        }
    }, {
        n: "Fire-lore",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Resistance: Tactical<br>Skill Type: Fire") + b2 + RS(10, "Debuffs enemies' physical attack damage.") + b2 + RS(4, "-10% Melee Damage") + b1 + RS(3, "Duration: 30s") + b2 + RS(2, "Cost: 1.55% of Base Power")
        }
    }, {
        n: "Frost-lore",
        range: "40m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Resistance: Tactical<br>Skill Type: Frost") +
                b2 + RS(10, "Debuffs enemies' tactical attack damage.") + b2 + RS(4, "-10% Tactical Damage") + b1 + RS(3, "Duration: 30s") + b2 + RS(2, "Cost: 1.55% of Base Power")
        }
    }, {
        n: "Storm-lore",
        range: "5.2m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 3<br>Radius: 5m<br>Resistance: Physical<br>Skill Type: Lightning") + b2 + RS(10, "A thunder-clap stuns surrounding enemies briefly, inflicting weak damage.") + b2 + RS(6, "Mounted Combat Enemies: Stun replaced with a mount speed debuff") + b2 + RS(5, "[?]-[?] Lightning Damage") +
                b2 + RS(4, "3s Stun") + b2 + RS(2, "Cost: 5.35% of Base Power") + b2 + RS(3, "Cooldown: 2m")
        }
    }, {
        n: "Pleasant Breeze",
        range: "7.2m Range",
        tt1: function () {
            return RS(7, "Tactical Skill<br>Max Targets: 7<br>Radius: 7m<br>Skill Type: Heal") + b2 + RS(10, "Direct a pleasant breeze towards your allies to re-invigourate them.") + b2 + RS(2, "+[?]-[?] Power<br><br>Cost: 2.3% of Base Power") + b2 + RS(3, "Cooldown: 10s")
        }
    }, {
        n: "The Ancient Master",
        tt1: function () {
            return RS(7, "Resistance: Tactical") + b2 + RS(10, "Mastery of lore enables Fire-lore and Frost-lore to cost no power and build a stacking Power reserve.<br><br>When this effect expires, the Power reserve is distributed amongst your Fellows.") +
                b2 + RS(2, "Fire-lore and Frost-lore skills cost no power and can target up to 6 enemies.") + b1 + RS(3, "Duration: 25s") + b2 + RS(2, "Cost: 10.5% of Base Morale<br><br>Cost: 2.3% of Base Power") + b2 + RS(3, "Cooldown: 1m 30s")
        }
    }]
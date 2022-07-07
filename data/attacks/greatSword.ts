import { Attack } from ".";

export const GreatSwordAttacks: Attack[] = [
	{ name: "Overhead Slash", mv: 52 },
	{ name: "Charged Slash Lv1", mv: 52, eleMod: 1.1, statusMod: 1.1, hzMod: 1.1 },
	{ name: "Charged Slash Lv2", mv: 77, eleMod: 1.2, statusMod: 1.2, hzMod: 1.2 },
	{ name: "Charged Slash Lv3", mv: 105, eleMod: 1.5, statusMod: 1.5, hzMod: 1.3 },
	{ name: "Strong Charged Slash Lv0", mv: 65 },
	{ name: "Strong Charged Slash Lv1", mv: 65, eleMod: 1.65, statusMod: 1.65, hzMod: 1.1 },
	{ name: "Strong Charged Slash Lv2", mv: 90, eleMod: 1.8, statusMod: 1.8, hzMod: 1.2 },
	{ name: "Strong Charged Slash Lv3", mv: 128, eleMod: 2.25, statusMod: 2.25, hzMod: 1.3 },
	{ name: "True Charged Slash Lv0 (1st Hit)", mv: 15 },
	{ name: "True Charged Slash Lv1 (1st Hit)", mv: 15 },
	{ name: "True Charged Slash Lv2 (1st Hit)", mv: 20 },
	{ name: "True Charged Slash Lv3 (1st Hit)", mv: 22 },
	{ name: "True Charged Slash Lv0 (2nd Hit)", mv: 120 },
	{ name: "True Charged Slash Lv1 (2nd Hit)", mv: 120, eleMod: 1.4, statusMod: 1.4, hzMod: 1.1 },
	{ name: "True Charged Slash Lv2 (2nd Hit)", mv: 182, eleMod: 1.5, statusMod: 1.5, hzMod: 1.2 },
	{ name: "True Charged Slash Lv3 (2nd Hit)", mv: 225, eleMod: 1.7, statusMod: 1.7, hzMod: 1.3 },
	{ name: "(Power) True Charged Slash Lv0 (2nd Hit)", mv: 144 },
	{
		name: "(Power) True Charged Slash Lv1 (2nd Hit)",
		mv: 144,
		eleMod: 1.4,
		statusMod: 1.4,
		hzMod: 1.1,
	},
	{
		name: "(Power) True Charged Slash Lv2 (2nd Hit)",
		mv: 220,
		eleMod: 1.5,
		statusMod: 1.5,
		hzMod: 1.2,
	},
	{
		name: "(Power) True Charged Slash Lv3 (2nd Hit)",
		mv: 290,
		eleMod: 1.8,
		statusMod: 1.8,
		hzMod: 1.3,
	},
	{ name: "Rage Slash Lv0", mv: 118 },
	{ name: "Rage Slash Lv1", mv: 118, eleMod: 1.5, statusMod: 1.5, hzMod: 1.1 },
	{ name: "Rage Slash Lv2", mv: 138, eleMod: 2, statusMod: 2, hzMod: 1.2 },
	{ name: "Rage Slash Lv3", mv: 179, eleMod: 3, statusMod: 3, hzMod: 1.3 },
	{ name: "Rage Slash Lv0 (25 Damage Taken)", mv: 177 },
	{ name: "Rage Slash Lv1 (25 Damage Taken)", mv: 177, eleMod: 1.5, statusMod: 1.5, hzMod: 1.1 },
	{ name: "Rage Slash Lv2 (25 Damage Taken)", mv: 207, eleMod: 2, statusMod: 2, hzMod: 1.2 },
	{ name: "Rage Slash Lv3 (25 Damage Taken)", mv: 268.5, eleMod: 3, statusMod: 3, hzMod: 1.3 },
	{ name: "Tackle Lv0", mv: 26, eleMod: 0, statusMod: 0 },
	{ name: "Tackle Lv1", mv: 28, eleMod: 0, statusMod: 0 },
	{ name: "Tackle Lv2", mv: 35, eleMod: 0, statusMod: 0 },
	{ name: "Tackle Lv3", mv: 48, eleMod: 0, statusMod: 0 },
	{ name: "Guard Tackle Lv0", mv: 34 },
	{ name: "Guard Tackle Lv1", mv: 37 },
	{ name: "Guard Tackle Lv2", mv: 46 },
	{ name: "Guard Tackle Lv3", mv: 62 },
	{ name: "Rising Slash", mv: 41 },
	{ name: "Wide Sweep", mv: 34 },
	{ name: "Side Blow", mv: 15 },
	{ name: "Strong Wide Slash Lv0", mv: 72 },
	{ name: "Strong Wide Slash Lv1", mv: 72, eleMod: 1.65, statusMod: 1.65, hzMod: 1.1 },
	{ name: "Strong Wide Slash Lv2", mv: 82, eleMod: 1.8, statusMod: 1.8, hzMod: 1.2 },
	{ name: "Strong Wide Slash Lv3", mv: 90, eleMod: 2.25, statusMod: 2.25, hzMod: 1.3 },
	{ name: "Leaping Wide Slash Lv0", mv: 70, eleMod: 1.65, statusMod: 1.65 },
	{ name: "Leaping Wide Slash Lv1", mv: 70, eleMod: 1.82, statusMod: 1.82, hzMod: 1.1 },
	{ name: "Leaping Wide Slash Lv2", mv: 45, eleMod: 1.65, statusMod: 1.65, hzMod: 1.1 },
	{ name: "Leaping Wide Slash Lv3", mv: 40, eleMod: 1.32, statusMod: 1.32, hzMod: 1.1 },
	{ name: "Mid-Air Slash", mv: 70 },
	{ name: "Mid-Air Charged Slash Lv0", mv: 70 },
	{ name: "Mid-Air Charged Slash Lv1", mv: 70, eleMod: 1.1, statusMod: 1.1 },
	{ name: "Mid-Air Charged Slash Lv2", mv: 92, eleMod: 1.2, statusMod: 1.2 },
	{ name: "Mid-Air Charged Slash Lv3", mv: 106, eleMod: 1.5, statusMod: 1.5 },
	{ name: "Plunging Thrust", mv: 15 },
	{ name: "Plunging Thrust Finisher", mv: 30 },
	{ name: "Adamant Charged Slash Lv0", mv: 78 },
	{
		name: "Adamant Charged Slash Lv1",
		mv: 78,
		eleMod: 1.65,
		statusMod: 1.65,
		hzMod: 1.1,
		silkbind: true,
	},
	{
		name: "Adamant Charged Slash Lv2",
		mv: 108,
		eleMod: 1.8,
		statusMod: 1.8,
		hzMod: 1.2,
		silkbind: true,
	},
	{
		name: "Adamant Charged Slash Lv3",
		mv: 138,
		eleMod: 2.25,
		statusMod: 2.25,
		hzMod: 1.3,
		silkbind: true,
	},
	{ name: "Hunting Edge (1st Hit)", mv: 30, silkbind: true },
	{ name: "Hunting Edge (2nd Hit)", mv: 80, silkbind: true },
	{ name: "Hunting Edge Mid-Air Charged Slash Lv0", mv: 118, silkbind: true },
	{
		name: "Hunting Edge Mid-Air Charged Slash Lv1",
		mv: 118,
		eleMod: 1.5,
		statusMod: 1.5,
		silkbind: true,
	},
	{
		name: "Hunting Edge Mid-Air Charged Slash Lv2",
		mv: 132,
		eleMod: 1.65,
		statusMod: 1.65,
		silkbind: true,
	},
	{
		name: "Hunting Edge Mid-Air Charged Slash Lv3",
		mv: 144,
		eleMod: 2,
		statusMod: 2,
		silkbind: true,
	},
	{ name: "Hunting Edge Plunging Thrust Lv0", mv: 28, silkbind: true },
	{ name: "Hunting Edge Plunging Thrust Lv1", mv: 28, eleMod: 1.5, statusMod: 1.5, silkbind: true },
	{ name: "Hunting Edge Plunging Thrust Lv2", mv: 38, eleMod: 1.7, statusMod: 1.7, silkbind: true },
	{ name: "Hunting Edge Plunging Thrust Lv3", mv: 45, eleMod: 2, statusMod: 2, silkbind: true },
];

export default GreatSwordAttacks;

import { Weapon, WeaponElement, WeaponStatus, WeaponType } from "../data/weapons";

export const formatElement = (e: WeaponElement | WeaponStatus) => `${e.type} ${e.value}`;

const formatWeaponPropertyKey = (t: WeaponType): string | undefined => {
	switch (t) {
		case "Switch Axe":
		case "Charge Blade":
			return "Phial";
		case "Gunlance":
			return "Shelling";
	}
};

const formatWeaponProperties = (w: Weapon): { key: string; value: string } | undefined => {
	switch (w.type) {
		case "Gunlance":
			return { key: "Shelling", value: `${w.properties.type} ${w.properties.value}` };
		case "Switch Axe":
			switch (w.properties.type) {
				case "Power":
				case "Element":
					return { key: "Phial", value: w.properties.type };
				default:
					return { key: "Phial", value: `${w.properties.type} ${w.properties.value}` };
			}
	}
};

export default {
	formatElement,
	formatWeaponPropertyKey,
	formatWeaponProperties,
};
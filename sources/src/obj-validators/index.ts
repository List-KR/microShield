// We need to refactor this function for easier future use
const knownAdShieldPropertyNames = [
	['inventories', (obj: unknown) => Array.isArray(obj) && Object.getOwnPropertyNames(obj[0]).includes('originalAds')],
	['key', (obj: unknown) => typeof obj === 'string' && obj.startsWith('as')],
] as const;

export const isAdShieldObj = (obj: unknown) => {
	if (typeof obj !== 'object') {
		return false;
	}

	if (Array.isArray(obj)) {
		for (const item of obj) {
			if (isAdShieldObj(item)) {
				return true;
			}
		}
	}

	const propertyNames = Object.getOwnPropertyNames(obj);

	for (const [name, check] of knownAdShieldPropertyNames) {
		// @ts-expect-error obj[name] checked by getOwnPropertyNames
		if (propertyNames.includes(name) && check(obj[name])) {
			return true;
		}
	}

	return false;
};

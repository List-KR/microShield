// We need to refactor this function for easier future use
const KnownAdShieldPropertyNames = [
	['inventories', (Obj: unknown) => Array.isArray(Obj) && Object.getOwnPropertyNames(Obj[0]).includes('originalAds')],
	['key', (Obj: unknown) => typeof Obj === 'string' && Obj.startsWith('as')]
] as const

export const IsAdShieldObj = (Obj: unknown) => {
	if (typeof Obj !== 'object') {
		return false
	}

	if (Array.isArray(Obj)) {
		for (const Item of Obj) {
			if (IsAdShieldObj(Item)) {
				return true
			}
		}
	}

	const PropertyNames = Object.getOwnPropertyNames(Obj)

	for (const [Name, Check] of KnownAdShieldPropertyNames) {
		// @ts-expect-error obj[name] checked by getOwnPropertyNames
		if (PropertyNames.includes(Name) && Check(Obj[Name])) {
			return true
		}
	}

	return false
}

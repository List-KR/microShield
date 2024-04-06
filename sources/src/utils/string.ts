export const hasSubstringSetsInString = (text: string, substrings: string[]) => {
	for (const substring of substrings) {
		if (text.includes(substring)) {
			return true;
		}
	}

	return false;
};
export const HasSubstringSetsInString = (Text: string, Substrings: string[]) => {
	for (const Substring of Substrings) {
		if (Text.includes(Substring)) {
			return true
		}
	}

	return false
}
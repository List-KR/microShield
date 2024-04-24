export const HasSubstringSetsInString = (Text: string, Substrings: string[], CaseInsensitive?: boolean) => {
	for (const Substring of Substrings) {
		if ((CaseInsensitive ? Text.toLowerCase() : Text).includes(Substring)) {
			return true
		}
	}

	return false
}
type Analyzer = (line: string) => boolean

class MemoizedCallAnalyzer {
	private readonly Cache: Map<string, boolean>
	private readonly Analyzer: Analyzer

	constructor(Analyzer: Analyzer) {
		this.Cache = new Map()
		this.Analyzer = Analyzer
	}

	analyze(Line: string) {
		if (this.Cache.has(Line)) {
			return this.Cache.get(Line)!
		}

		const Result = this.Analyzer(Line)

		this.Cache.set(Line, Result)

		return Result
	}
}

export const AnnoymousCallAnalyzer = new MemoizedCallAnalyzer(Line => Line.startsWith('[') || Line.startsWith('<'))

export const ExtensionCallAnalyzer = new MemoizedCallAnalyzer(Line => Line.startsWith('chrome') || Line.startsWith('webkit') || Line.startsWith('moz'))

export const KnownAdShieldOrigins = [
	'07c225f3.online',
	'css-load.com',
	'html-load.com',
	'content-loader.com',
	'22d2d4d9-0c15-4a3a-9562-384f2c100146.xyz',
	'f97ae142.online',
	'html-load.cc',
	'2aeabdd4-3280-4f03-bc92-1890494f28be.xyz'
]

export const AdShieldCallAnalyzer = new MemoizedCallAnalyzer(Line => {
	for (const Origin of KnownAdShieldOrigins) {
		if (Line.includes(Origin)) {
			return true
		}
	}

	return false
})

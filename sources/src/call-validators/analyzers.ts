import type {getCallStack} from '../utils';
type Analyzer = (line: string) => boolean;

class MemoizedCallAnalyzer {
	private readonly cache: Map<string, boolean>;
	private readonly analyzer: Analyzer;

	constructor(analyzer: Analyzer) {
		this.cache = new Map();
		this.analyzer = analyzer;
	}

	analyze(line: string) {
		if (this.cache.has(line)) {
			return this.cache.get(line)!;
		}

		const result = this.analyzer(line);

		this.cache.set(line, result);

		return result;
	}
}

export const annoymousCallAnalyzer = new MemoizedCallAnalyzer(line => line.startsWith('[') || line.startsWith('<'));

export const extensionCallAnalyzer = new MemoizedCallAnalyzer(line => line.startsWith('chrome') || line.startsWith('webkit') || line.startsWith('moz'));

export const knownAdShieldOrigins = [
	'07c225f3.online',
	'css-load.com',
	'html-load.com',
	'content-loader.com',
	'22d2d4d9-0c15-4a3a-9562-384f2c100146.xyz',
];

export const adShieldCallAnalyzer = new MemoizedCallAnalyzer(line => {
	if (line.endsWith('/script.min.js') || line.endsWith('/loader.min.js')) {
		return true;
	}

	for (const origin of knownAdShieldOrigins) {
		if (line.includes(origin)) {
			return true;
		}
	}

	return false;
});

export const isNotResourceInfectedByAdShield = (callstack: ReturnType<typeof getCallStack>): boolean => {
	let result = false;

	for (let i = 0; i < callstack.trace.length; i++) {
		if ((i === (callstack.trace.length - 1)) && knownAdShieldOrigins.every(origin => !callstack.trace[i].startsWith(origin))) {
			result ||= true;
		}

		if ((i !== (callstack.trace.length - 1) && i !== 0) && knownAdShieldOrigins.some(origin => callstack.trace[i].startsWith(origin))) {
			result ||= true;
		}
	}

	return result;
};

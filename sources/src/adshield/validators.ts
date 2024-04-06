import {justifyCallStack} from '../utils/call-stack.js';
import {hasSubstringSetsInString} from '../utils/string.js';

export const adshieldDomains = [
	'css-load.com',
	'07c225f3.online',
	'content-loader.com',
	'error-report.com',
	'html-load.com',
];

export const adshieldKeywords = [
	...adshieldDomains,
	'failed to load website',
	'blocking software',
];

const adshieldDomainSize = adshieldDomains.length;

// eslint-disable-next-line no-bitwise
export const getRandomAdShieldHost = () => adshieldDomains[(Math.random() * adshieldDomainSize) >>> 0];

export const isAdShieldCall = (trace = justifyCallStack()) => {
	if (trace.length === 0) {
		return false;
	}

	if (hasSubstringSetsInString(trace[trace.length - 1], adshieldDomains)) {
		return true;
	}

	const url = new URL(trace[trace.length - 1]);

	if (url.hostname !== location.hostname && url.pathname === '/loader.min.js') {
		return true;
	}

	return false;
};
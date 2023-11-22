export const createDebug = (namespace: string) => new Proxy(console.debug, {
	apply(target, thisArg, argArray) {
		Reflect.apply(target, thisArg, [`${namespace} (${location.href})`, ...argArray as unknown[]]);
	},
});

const debug = createDebug('[microShield:utils]');

export const isSubFrame = () => {
	try {
		return window.self !== window.top;
	} catch (_error) {
		return true;
	}
};

const isSafari = navigator.userAgent.includes('Safari') && navigator.userAgent.includes(') Version/');

export const getStackTrace = () => {
	const e = new Error();

	if (!e.stack) {
		throw new Error('Stack trace is not available!');
	}

	const href = location.origin + location.pathname;

	if (isSafari) {
		const trace = e.stack.split('\n').slice(-10);
		const stack: string[] = [];

		for (const line of trace) {
			const start = line.indexOf('@') + 1;
			const lastColon = line.lastIndexOf(':');
			const dump = lastColon < 0 ? line.slice(start) : line.slice(start, line.lastIndexOf(':', lastColon - 1));

			if (
				dump.startsWith('[')
				|| href === dump
			) {
				continue;
			}

			stack.push(dump);
		}

		return stack;
	}

	// Not Apple
	const trace = e.stack.slice(6).split('\n').slice(-10);
	const stack: string[] = [];

	for (const line of trace) {
		const dump = line.slice(
			(line.indexOf('(') + 1) || line.indexOf('at') + 3,
			line.lastIndexOf(':', line.lastIndexOf(':') - 1),
		);

		if (
			dump.startsWith('<')
			|| href === dump
		) {
			continue;
		}

		stack.push(dump);
	}

	return stack;
};

export type FeedbackFunction = () => unknown;

const isAsCall = (line: string) => line.includes('/script.min.js') || line.includes('loader.min.js');

export const isAsSource: FeedbackFunction = () => {
	const stack = getStackTrace();

	if (!stack.length) {
		return;
	}

	if (
		stack[0].startsWith('https://local.adguard.com/')
		|| stack[0].startsWith('webkit')
		|| stack[0].startsWith('chrome')
	) {
		debug('isAsSource trusted stack=internal');

		return;
	}

	const report = stack.map(line => isAsCall(line));
	const rating = report.reduce((state, item) => state + Number(item), 0);

	if (!rating) {
		debug('isAsSource trusted stack=clean');

		return;
	}

	if (
		report[report.length - 1]
		&& rating - 1 < 0
	) {
		debug('isAsSource trusted stack=modified');

		return;
	}

	return true;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const makeProxy = <F extends Function>(f: F, feedback: FeedbackFunction) => {
	const proxy = new Proxy(f, {
		apply(target, thisArg, argArray) {
			const alt = feedback();

			if (typeof alt === 'undefined') {
				return Reflect.apply(target, thisArg, argArray) as F;
			}

			debug(`makeProxy name=${f?.name} args=`, argArray);

			return alt;
		},
	});

	return proxy;
};

export const documentReady = async (document: Document) => {
	if (document.readyState !== 'loading') {
		return true;
	}

	return new Promise(resolve => {
		document.addEventListener('readystatechange', () => {
			resolve(true);
		});
	});
};

export const useBannedKeywords = (data: string) => data.includes('loader.min.js') && data.includes('as-async') && /try(.|\n)*{(.|\n)*}(.|\n)*catch(.|\n)*{(.|\n)*}/.test(data);

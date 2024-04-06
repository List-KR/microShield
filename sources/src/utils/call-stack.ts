export const generateCallStack = () => {
	const e = new Error();

	if (!e.stack) {
		throw new Error('Stack trace is not available!');
	}

	return e.stack;
};

export const parseCallStack = (stack = generateCallStack()) => {
	if (stack.includes('@')) {
		const raw = stack.split('\n').slice(2);
		const trace: string[] = [];

		if (navigator.userAgent.includes('Firefox/')) {
			raw.splice(-1, 1);
		}

		for (const line of raw) {
			const start = line.indexOf('@') + 1;
			const lastColon = line.lastIndexOf(':');
			const dump = lastColon < 0 ? line.slice(start) : line.slice(start, line.lastIndexOf(':', lastColon - 1));

			trace.push(dump);
		}

		return trace;
	}

	const raw = stack.slice(6).split('\n').slice(2);
	const trace: string[] = [];

	for (const line of raw) {
		const dump = line.slice(
			(line.indexOf('(') + 1) || line.indexOf('at') + 3,
			line.lastIndexOf(':', line.lastIndexOf(':') - 1),
		);

		trace.push(dump);
	}

	return trace;
};

export const justifyCallStack = (stack = parseCallStack()) => {
	let skipLines = 0;

	for (const line of stack) {
		const index = line.indexOf('://');

		if (index === 5 || index === 4) {
			break;
		}

		skipLines++;
	}

	return stack.slice(skipLines);
};
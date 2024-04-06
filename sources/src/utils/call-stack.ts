export const GenerateCallStack = () => {
	const E = new Error()

	if (!E.stack) {
		throw new Error('Stack trace is not available!')
	}

	return E.stack
}

export const ParseCallStack = (Stack = GenerateCallStack()) => {
	if (Stack.includes('@')) {
		const Raw = Stack.split('\n').slice(2)
		const Trace: string[] = []

		if (navigator.userAgent.includes('Firefox/')) {
			Raw.splice(-1, 1)
		}

		for (const Line of Raw) {
			const Start = Line.indexOf('@') + 1
			const LastColon = Line.lastIndexOf(':')
			const Dump = LastColon < 0 ? Line.slice(Start) : Line.slice(Start, Line.lastIndexOf(':', LastColon - 1))

			Trace.push(Dump)
		}

		return Trace
	}

	const Raw = Stack.slice(6).split('\n').slice(2)
	const Trace: string[] = []

	for (const Line of Raw) {
		const Dump = Line.slice(
			(Line.indexOf('(') + 1) || Line.indexOf('at') + 3,
			Line.lastIndexOf(':', Line.lastIndexOf(':') - 1),
		)

		Trace.push(Dump)
	}

	return Trace
}

export const JustifyCallStack = (Stack = ParseCallStack()) => {
	let SkipLines = 0

	for (const Line of Stack) {
		const Index = Line.indexOf('://')

		if (Index === 5 || Index === 4) {
			break
		}

		SkipLines++
	}

	return Stack.slice(SkipLines)
}
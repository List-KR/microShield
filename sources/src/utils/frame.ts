export const IsMainFrame = () => {
	try {
		return window.self === window.top
	} catch (_e) {
		return false
	}
}

export const DocumentReady = async (Doc = document) => {
	if (Doc.readyState === 'loading') {
		return new Promise<void>(Resolve => {
			Doc.addEventListener('readystatechange', () => {
				Resolve()
			})
		})
	}
}
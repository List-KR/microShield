export const isMainFrame = () => {
	try {
		return window.self === window.top;
	} catch (_e) {
		return false;
	}
};

export const documentReady = async (doc = document) => {
	if (doc.readyState === 'loading') {
		return new Promise<void>(resolve => {
			doc.addEventListener('readystatechange', () => {
				resolve();
			});
		});
	}
};
export const decode = (init: string) => {
	const a = Buffer.from(init, 'base64').toString('binary');
	const binary = a.slice(2);

	let key = parseInt(a.slice(0, 2), 16);

	if (key < 16 || key > 255) {
		key = Math.abs(key % 239);
	}

	const buffer = new Uint8Array(binary.length);

	for (let i = 0; i < binary.length; i++) {
		// eslint-disable-next-line no-bitwise
		buffer[i] = binary.charCodeAt(i) ^ key;
	}

	const decoder = new TextDecoder();
	const out = decoder.decode(buffer);

	return out;
};

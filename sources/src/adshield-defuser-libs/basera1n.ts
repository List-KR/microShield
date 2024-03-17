export const Decode = (Init: string) => {
	const FullBinary = Buffer.from(Init, 'base64').toString('binary')
	const Binary = FullBinary.slice(2)

	let Key = parseInt(FullBinary.slice(0, 2), 16)

	if (Key < 16 || Key > 255) {
		Key = Math.abs(Key % 239)
	}

	const BufferInstance = new Uint8Array(Binary.length)

	for (let I = 0; I < Binary.length; I++) {
		// eslint-disable-next-line no-bitwise
		BufferInstance[I] = Binary.charCodeAt(I) ^ Key
	}

	const Decoder = new TextDecoder()
	const Out = Decoder.decode(BufferInstance)

	return Out
}

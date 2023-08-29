import * as asKit from 'adshield-defuser/out/loaders/shortwave.js';
import * as fss from 'fs';
import * as fs from 'fs/promises';
import * as readline from 'readline/promises';

const getAnswer = async question => {
	const instance = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	const answer = await instance.question(question);

	instance.close();

	return answer;
};

const getInput = async () => {
	if (process.env.INPUT) {
		return process.env.INPUT;
	}

	const filename = await getAnswer('put path to the script (paste file into terminal): ');

	return filename;
};

const getOutput = async () => {
	if (process.env.OUTPUT) {
		return process.env.OUTPUT;
	}

	const filename = await getAnswer('put path to the output (paste file into terminal): ');

	return filename;
};

(async () => {
	const input = await getInput();

	if (!fss.existsSync(input)) {
		throw new Error('Input not found!');
	}

	console.log('generating deploy cache...');

	const script = (await fs.readFile(input)).toString();
	const keySources = asKit.getKeySources(script);
	const dictionarySources = asKit.getDictionarySources(script);

	let keySourcesScript = '';

	for (const keyType of Object.keys(keySources)) {
		keySourcesScript += `${keyType}: Buffer.from(${JSON.stringify(keySources[keyType].toJSON().data)}),\n`;
	}

	const output = await getOutput();

	await fs.writeFile(output, `/* eslint-disable */
export const source = {
  keySources: {
${keySourcesScript}},
  dictionarySources: ${JSON.stringify(dictionarySources)}
};`, 'utf-8');

	console.log('cache has been deployed');
})();

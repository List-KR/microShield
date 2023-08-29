module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
	},
	ignorePatterns: [
		'loader.min.js',
		'script.min.js',
	],
};

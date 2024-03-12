module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: '../tsconfig.json'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-unused-vars': 'off'
	},
	ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs']
}
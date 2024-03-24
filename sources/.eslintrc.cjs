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
	plugins: ['@typescript-eslint', '@stylistic'],
	rules: {
		'@typescript-eslint/naming-convention': ['error', {
			selector: ['variableLike', 'parameterProperty', 'classProperty', 'typeProperty'],
			format: ['PascalCase']
		}],
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'new-cap': 'off',
    'no-var': 'off',
		'@stylistic/indent': ['off', 'tab'],
		'@stylistic/semi': ['error', 'never'],
		'@stylistic/comma-dangle': ['error', 'never'],
		'@stylistic/comma-spacing': ['error', { before: false, after: true }],
		'@stylistic/quotes': ['error', 'single'],
		'@typescript-eslint/no-unused-vars': 'off'
	},
	ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs']
}

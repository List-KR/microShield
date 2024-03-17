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
		'@typescript-eslint/naming-convention': ['warn', {
			selector: ['variableLike', 'parameterProperty', 'classProperty', 'typeProperty'],
			format: ['PascalCase']
		}],
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'new-cap': 'off',
    'no-var': 'off',
		'comma-dangle': 'off',
		indent: ['off', 'tab'],
		semi: ['error', 'never'],
		'@typescript-eslint/no-unused-vars': 'off'
	},
	ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs']
}
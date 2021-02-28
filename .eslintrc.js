module.exports = {
	env: {
		node: true,
		es6: true,
		jest: true
	},
	parserOptions: {
		project: './tsconfig.eslint.json',
	},
	plugins: ['jest'],
	extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
	rules: {
		// This interacts very badly with oclif
		'no-shadow': 'off',
		'import/prefer-default-export': 'off',
	},
};

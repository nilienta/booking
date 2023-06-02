module.exports = {
	env: {
	  browser: true,
	  es2021: true,
	  node: true,
	},
	extends: ['htmlacademy/vanilla', 'plugin:import/recommended', 'prettier'
	],
	parserOptions: {
	  ecmaVersion: 12,
	  sourceType: 'module',
	},
	rules: {
	  'no-param-reassign': 0,
	  'no-console': 'off',
	  'import/prefer-default-export': 'off',
	  'import/no-default-export': 'error',
	  'import/no-cycle': 'off',
	  'import/no-unresolved': 'off',
	  'import/no-extraneous-dependencies': 'off',
	  'import/order': [
		 'error',
			{
			groups: [
					['builtin', 'external'
					],
			  'internal',
					['parent', 'sibling'
					],
			  'index',
				],
			'newlines-between': 'always',
			},
		],
	},
};

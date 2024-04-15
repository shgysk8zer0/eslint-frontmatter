import js from '@eslint/js';
import globals from 'globals';
import { frontmatter } from 'eslint-plugin-frontmatter2';

export default [
	// 'files': ['*.js', '**/*.js'],
	{
		'ignores': [
			'/node_modules/*',
			'package.js',
			'**/*.cjs',
			'./*.cjs',
			'**/*.mjs',
			'./*.mjs',
			'**/*.min.js',
			'*.min.js',
		],
	}, {
		'plugins': {
			'frontmatter2': frontmatter
		},
		processor: 'frontmatter2/frontmatter',
		'rules': {
			...js.configs.recommended.rules,
			'indent': [2, 'tab', { 'SwitchCase': 1 }],
			'quotes': [2, 'single'],
			'semi': [2, 'always'],
			'no-console': 0,
			'no-async-promise-executor': 0,
			'no-prototype-builtins': 0,
			'no-unused-vars': 'error',
		},
		linterOptions: {
			noInlineConfig: false,
			reportUnusedDisableDirectives: 'error'
		},
		'languageOptions': {
			'ecmaVersion': 'latest',
			'sourceType': 'module',
			'globals': {
				'globalThis': 'readonly',
				'trustedTypes': 'readonly',
				'cookieStore': 'readonly',
				'scheduler': 'readonly',
				...globals.browser,
			}
		}
	}
];

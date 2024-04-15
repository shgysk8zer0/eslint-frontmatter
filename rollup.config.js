import json from '@rollup/plugin-json';

export default {
	input:'plugin.js',
	plugins: [json()],
	output: [{
		file: 'plugin.cjs',
		format: 'cjs'
	}, {
		file: 'plugin.mjs',
		format: 'module'
	}]
};

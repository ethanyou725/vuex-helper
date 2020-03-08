import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from "@rollup/plugin-buble"; // Transpile/polyfill with reasonable browser support
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'index',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			buble(),
			commonjs()
		]
	},
	{
		input: 'src/index.js',
		// external: [],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];

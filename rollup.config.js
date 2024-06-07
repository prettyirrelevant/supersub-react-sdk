import pkg from './package.json';
import json from '@rollup/plugin-json';
import styles from 'rollup-plugin-styles';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import external from 'rollup-plugin-peer-deps-external';

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      inlineDynamicImports: true,
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      inlineDynamicImports: true,
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    typescript(),
    commonjs(),
    styles(),
    json(),
    nodePolyfills(),
    terser(),
  ],
};

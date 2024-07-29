import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import typescript from '@rollup/plugin-typescript';

const fileName = 'index';
const indexFile = `src/${fileName}.ts`;

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: indexFile,
    output: {
      file: `${fileName}.js`,
      format: 'es',
    },
  },
  {
    plugins: [dts()],
    input: indexFile,
    output: {
      file: `${fileName}.d.ts`,
    },
  },
]);

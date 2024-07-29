import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import typescript from '@rollup/plugin-typescript';

const fileName = 'index';
const indexFile = `src/${fileName}.ts`;
const handlers = [typescript(), minify()];

export default defineConfig([
  {
    plugins: handlers,
    input: indexFile,
    output: {
      file: `${fileName}.js`,
      format: 'es',
    },
  },
  {
    plugins: handlers,
    input: indexFile,
    output: {
      file: `${fileName}.ts`,
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

import { describe, expectTypeOf, test } from 'vitest';

import type { UserConfig } from '@commitlint/types';

import { defineConfig } from '../src/index.ts';

describe('Define Commitlint Config', () => {
  test('define empty config', () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<UserConfig>();
  });

  test('define config', () => {
    expectTypeOf(
      defineConfig({
        defaultIgnores: true,
        extends: [],
        formatter: 'string',
        helpUrl: '',
        ignores: [],
        parserPreset: '',
        plugins: [],
        prompt: {},
        rules: {},
      }),
    ).toEqualTypeOf<UserConfig>();
  });
});

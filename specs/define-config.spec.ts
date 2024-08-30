import { describe, expectTypeOf, test as spec } from 'vitest';

import type { UserConfig } from '@commitlint/types';

import { defineConfig } from '#app';

describe('Commitlint Config', () => {
  spec('empty config', async () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<UserConfig>();
  });

  spec('config', async () => {
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

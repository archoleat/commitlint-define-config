import { describe, expectTypeOf, test as spec } from 'vitest';

import type { UserConfig } from '@commitlint/types';

import { defineConfig } from '#src';

describe('Define Commitlint Config', () => {
  spec('define empty config', async () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<UserConfig>();
  });

  spec('define config', async () => {
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

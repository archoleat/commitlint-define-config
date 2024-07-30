import { describe, expectTypeOf, test as spec } from 'vitest';

import type { UserConfig } from '@commitlint/types';

import { defineConfig } from '#src';

describe('Define Commitlint Config', () => {
  spec('define empty config', () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<UserConfig>();
  });

  spec('define config', () => {
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

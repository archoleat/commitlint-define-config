import { describe, expectTypeOf, test } from 'vitest';

import { UserConfig } from '@commitlint/types';

import { defineConfig } from '../define-config.ts';

describe('Define Config', () => {
  test('define empty config', () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<UserConfig>();
  });

  test('define Commitlint config', () => {
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

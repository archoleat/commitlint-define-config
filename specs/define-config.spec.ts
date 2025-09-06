import { describe, test as spec } from 'bun:test';
import { expectTypeOf } from 'expect-type';

import type { UserConfig } from '@commitlint/types';

import { defineConfig } from '#src/index.ts';

const generateEnum = () => ({
  customProperty: {
    description: '',
    title: '',
    emoji: '',
  },
});

const promptQuestions = () => ({
  description: '',
  messages: {
    customMessage: '',
  },
  enum: generateEnum(),
});

const config = defineConfig({
  defaultIgnores: true,
  extends: [''],
  formatter: '',
  helpUrl: '',
  ignores: [() => true],
  parserPreset: {
    name: '',
    parserOpts: '',
    path: '',
  },
  plugins: [
    {
      rules: {},
    },
    '',
  ],
  prompt: {
    messages: {
      emptyWarning: '',
      lowerLimitWarning: '',
      max: '',
      min: '',
      skip: '',
      upperLimitWarning: '',
    },
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: '',
    },
    questions: {
      body: promptQuestions(),
      breaking: promptQuestions(),
      breakingBody: promptQuestions(),
      footer: promptQuestions(),
      header: promptQuestions(),
      isBreaking: promptQuestions(),
      isIssueAffected: promptQuestions(),
      issues: promptQuestions(),
      issuesBody: promptQuestions(),
      scope: promptQuestions(),
      subject: promptQuestions(),
      type: promptQuestions(),
    },
  },
  rules: {},
});

describe('Commitlint Config', () => {
  spec('should return empty config', () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<UserConfig>();
  });

  spec('should return config', async () => {
    expectTypeOf(defineConfig(config)).toEqualTypeOf<UserConfig>();
  });
});

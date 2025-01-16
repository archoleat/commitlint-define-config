import { describe, expect, test as spec } from 'bun:test';
import type { UserConfig } from '@commitlint/types';

import { defineConfig } from '#src/index.ts';

describe('Commitlint Config', () => {
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

  spec('should return empty config', () => {
    const config = defineConfig({});

    expect(config).toMatchObject({});
    expect(config satisfies UserConfig).toBeDefined();
  });

  spec('should return config with all properties', () => {
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

    expect(config).toMatchObject({
      defaultIgnores: true,
      extends: [''],
      formatter: '',
      helpUrl: '',
      ignores: [expect.any(Function)],
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
          body: expect.any(Object),
          breaking: expect.any(Object),
          breakingBody: expect.any(Object),
          footer: expect.any(Object),
          header: expect.any(Object),
          isBreaking: expect.any(Object),
          isIssueAffected: expect.any(Object),
          issues: expect.any(Object),
          issuesBody: expect.any(Object),
          scope: expect.any(Object),
          subject: expect.any(Object),
          type: expect.any(Object),
        },
      },
      rules: {},
    });

    expect(config satisfies UserConfig).toBeDefined();
  });
});

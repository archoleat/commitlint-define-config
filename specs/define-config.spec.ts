import { describe, expectTypeOf, test as spec } from 'vitest';
import type { UserConfig } from '@commitlint/types';

import { defineConfig } from '#index';

describe('Commitlint Config', async () => {
  const generateEnum = async () => ({
    customProperty: {
      description: '',
      title: '',
      emoji: '',
    },
  });

  const promptQuestions = async () => ({
    description: '',
    messages: {
      customMessage: '',
    },
    enum: await generateEnum(),
  });

  spec('should return empty config', async () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<UserConfig>();
  });

  spec('should return config', async () => {
    expectTypeOf(
      defineConfig({
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
            body: await promptQuestions(),
            breaking: await promptQuestions(),
            breakingBody: await promptQuestions(),
            footer: await promptQuestions(),
            header: await promptQuestions(),
            isBreaking: await promptQuestions(),
            isIssueAffected: await promptQuestions(),
            issues: await promptQuestions(),
            issuesBody: await promptQuestions(),
            scope: await promptQuestions(),
            subject: await promptQuestions(),
            type: await promptQuestions(),
          },
        },
        rules: {},
      }),
    ).toEqualTypeOf<UserConfig>();
  });
});

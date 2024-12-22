import { describe, expect, test as spec } from 'bun:test';

import { defineConfig } from '#src/index.ts';

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
    expect(defineConfig({}));
  });

  spec('should return config', async () => {
    expect(
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
    );
  });
});

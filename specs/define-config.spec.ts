import { describe, expectTypeOf, test as spec } from 'vitest';

import type { UserConfig } from '@commitlint/types';

import { defineConfig } from '#index';

describe('Commitlint Config', async () => {
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
            header: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            type: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            scope: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            subject: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            body: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            footer: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            isBreaking: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            breakingBody: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            breaking: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            isIssueAffected: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            issuesBody: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
            issues: {
              description: '',
              messages: {
                customMessage: '',
              },
              enum: {
                customProperty: {
                  description: '',
                  title: '',
                  emoji: '',
                },
              },
            },
          },
        },
        rules: {},
      }),
    ).toEqualTypeOf<UserConfig>();
  });
});

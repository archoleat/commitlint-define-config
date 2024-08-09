import { UserConfig } from '@commitlint/types';

/**
 * Define an Commitlint config.
 *
 * @param {object} config Commitlint config.
 *
 * @returns Commitlint config.
 */
declare const defineConfig: (config: UserConfig) => UserConfig;

export { defineConfig };

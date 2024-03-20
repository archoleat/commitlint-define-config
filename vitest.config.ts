import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['specs/**/*.spec-d.ts'],
    watch: false,
    coverage: {
      all: false,
      provider: 'v8',
      reporter: 'text',
    },
  },
});

# Commitlint Define Config

![NPM Version](https://img.shields.io/npm/v/%40archoleat%2Fcommitlint-define-config)
![NPM Downloads](https://img.shields.io/npm/dm/%40archoleat%2Fcommitlint-define-config)
![Specs](https://img.shields.io/github/actions/workflow/status/archoleat/commitlint-define-config/spec.yaml?label=Specs)
![Commitlint](https://img.shields.io/github/actions/workflow/status/archoleat/commitlint-define-config/commitlint.yaml?label=Commitlint)
![Editorconfig](https://img.shields.io/github/actions/workflow/status/archoleat/commitlint-define-config/editorconfig.yaml?label=Editorconfig)
![Prettier](https://img.shields.io/github/actions/workflow/status/archoleat/commitlint-define-config/prettier.yaml?label=Prettier)
![ESLint](https://img.shields.io/github/actions/workflow/status/archoleat/commitlint-define-config/eslint.yaml?label=ESLint)
![Remark](https://img.shields.io/github/actions/workflow/status/archoleat/commitlint-define-config/remark.yaml?label=Remark)
![Zero Deps](https://img.shields.io/badge/zero_dependencies-blue)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

Use `defineConfig` for completion and option checking when composing a
Commitlint configuration. It returns the object unchanged; native JSDoc with
`import('@commitlint/types').UserConfig` or `satisfies UserConfig` avoids the
extra helper. The declared peers cover Commitlint CLI, conventional config,
and types 19–21; configuration execution and rule validation remain Commitlint's
responsibility.

## Installation

```shell
bun i -D @archoleat/commitlint-define-config
```

## Usage

See [Commitlint Configuration](https://commitlint.js.org/reference/configuration.html).

Add the following code to the `commitlint.config.ts` or `commitlint.config.js`
file:

```js
import { defineConfig } from '@archoleat/commitlint-define-config';

export default defineConfig({});
```

## Contributing

Please read [**CONTRIBUTING**](https://github.com/archoleat/.github/blob/main/CONTRIBUTING.md)
to start contributing.

## License

This project is licensed under the [**MIT license**](LICENSE).

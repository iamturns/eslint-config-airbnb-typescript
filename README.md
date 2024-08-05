# eslint-config-airbnb-typescript

[![Version](https://img.shields.io/npm/v/eslint-config-airbnb-typescript.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-airbnb-typescript?activeTab=versions) [![Downloads](https://img.shields.io/npm/dt/eslint-config-airbnb-typescript.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-airbnb-typescript) [![Last commit](https://img.shields.io/github/last-commit/iamturns/eslint-config-airbnb-typescript.svg?style=flat-square)](https://github.com/iamturns/eslint-config-airbnb-typescript/graphs/commit-activity) [![Build](https://img.shields.io/circleci/project/github/iamturns/eslint-config-airbnb-typescript/master.svg?style=flat-square)](https://circleci.com/gh/iamturns/eslint-config-airbnb-typescript) [![License](https://img.shields.io/github/license/iamturns/eslint-config-airbnb-typescript.svg?style=flat-square)](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/CONTRIBUTING.md) [![Code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/CODE_OF_CONDUCT.md)

Enhances [Airbnb's ESLint config](https://www.npmjs.com/package/eslint-config-airbnb) with TypeScript support.

> [!WARNING]
> We currently **do not** support ESLint v9 or above. Please see issue #331 to track progress.

## Setup

### Installation

Start by installing both ESLint and Typescript in your project. Afterwards, you can install this config through your favorite package manager normally:

```sh
npm install -D eslint-config-airbnb-typescript
```

If you're using React, you'll also need to install the appropriate Airbnb rules separately:

```sh
npm install -D eslint-config-airbnb
```

> [!NOTE]
> While current versions of NPM will automatically install peer dependencies, if you're using a version of NPM prior to v7, you will need to install them manually instead:
>
> ```sh
> npm install -D \
>   eslint@^8.56 \
>   eslint-config-airbnb-base \
>   @stylistic/eslint-plugin \
>   @typescript-eslint/eslint-plugin@^8 \
>   @typescript-eslint/parser@^8
> ```

### Configuration

Next, tell ESLint to extend from this configuration. And since we need to access type information, a `tsconfig.json` and some setup for [`@typescript-eslint/parser`](https://typescript-eslint.io/packages/parser/) to recognize it are required.

> [!IMPORTANT]
> These instructions assume you are on the current LTS version of Node. If you are using a Node version older than v20, you will need to update any references to `import.meta.dirname` to use [a `__dirname` workaround](https://github.com/iamturns/eslint-config-airbnb-typescript/issues/307#issuecomment-2153373493) instead.

#### Recommended - Flat Config

Since we don't yet have first-class support for the new flat configuration format (see #307 for progress), [ESLint's compatability utility](https://www.npmjs.com/package/@eslint/eslintrc) is needed:

```sh
npm install -D @eslint/eslintrc
```

Then you'll want to set up your `eslint.config.js` something like this:

```js
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  // Without React
  ...compat.extends('airbnb-base'),
  ...compat.extends('airbnb-typescript/base'),

  // With React
  ...compat.extends('airbnb'),
  ...compat.extends('airbnb-typescript'),

  // Either way
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
```

#### Legacy Config

If you're stuck on the legacy `.eslintrc` format, you'll want to set up your `.eslintrc.js` similar to this:

```js
module.exports = {
  extends: [
    // Without React
    'airbnb-base',
    'airbnb-typescript/base'

    // With React
    'airbnb',
    'airbnb-typescript'
  ],
  parserOptions: {
    projectService: true,
    tsconfigRootDir: import.meta.dirname,
  },
};
```

### Running ESLint

Once set up, you can use ESLint as you would normally. In the root directory of your project, run:

```sh
npx eslint . --ext .js,.jsx,.ts,.tsx
```

ESLint will lint all .js, .jsx, .ts, and .tsx files within the current folder, and output results to your terminal.

You can also get results in realtime inside most IDEs via a plugin. See [ESLint's integration documentation](https://eslint.org/docs/latest/use/integrations) for more details.

## FAQ

### I get this error when running ESLint: "The file must be included in at least one of the projects provided"

This means you are attempting to lint a file that `tsconfig.json` doesn't include.
Please refer to the [`typescript-eslint`](https://typescript-eslint.io/troubleshooting/typed-linting#traditional-project-issues) FAQ on how best to resolve this.

### I wish this config would support [...]

This config simply enhances the Airbnb with TypeScript support. It's not a single config to cater for all TypeScript linting requirements. For additional functionality, alter your ESLint config file. For example:

```js
import typescriptPlugin from 'typescript-eslint';

// ...

export default [
  ...compat.extends('airbnb-base'),
  ...compat.extends('airbnb/hooks'),
  ...compat.extends('airbnb-typescript/base'),
  ...typescriptPlugin.configs.recommendedTypeChecked,
  ...typescriptPlugin.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
```

### I use Prettier / StandardJS, how do I remove formatting rules?

There are a couple of approaches to achieve this.

#### Configuration

Since the base Airbnb configs still use ESLint's legacy formatting rules, you can extend [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to disable them. However, with ESLint [deprecating all formatting rules](https://eslint.org/blog/2023/10/deprecating-formatting-rules/) and [`typescript-eslint` outright removing them](https://typescript-eslint.io/users/what-about-formatting/), all our styling rules now originate from [ESLint Stylistic](https://eslint.style), which is not supported by the Prettier config (see upstream issue [#283](https://github.com/prettier/eslint-config-prettier/issues/283) to track progress).

Therefore, you'll need to disable all these rules manually. Luckily, this is pretty easy with flat configurations:

```js
import stylistic from '@stylistic/eslint-plugin';

export default [
  // ...

  {
    rules: Object.fromEntries(
      Object.keys(stylisticPlugin.configs['all-flat'].rules ?? {}).map((key) => [key, 'off']),
    ),
  },
];
```

#### Combined Tooling

Another approach is to use [`prettier-eslint`](https://github.com/prettier/prettier-eslint), which keeps the styling rules enabled and just combines the execution of ESLint and Prettier so the conflicts aren't user-facing. The CLI tool itself can be found under [`prettier-eslint-cli`](https://github.com/prettier/prettier-eslint-cli).

### Why is `import/no-unresolved` disabled?

Two reasons:

1. It requires additional configuration, which may be different for monorepo's, webpack usage, etc
2. The rule offers little value in a TypeScript world, as the TypeScript compiler will catch these errors

If you would like to enable this rule, then:

- Enable the rule within your config: `'import/no-unresolved': 'error'`
- Install and configure the TypeScript import resolver: [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)

## Additional Documentation

- [CHANGELOG.md](CHANGELOG.md)
- [DEVELOPING.md](DEVELOPING.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [MAINTAINING.md](MAINTAINING.md)

## Credits

Authored and maintained by Matt Turnbull ([iamturns.com](https://iamturns.com) / [@iamturns](https://twitter.com/iamturns))

A big thank you to all [contributors](https://github.com/iamturns/eslint-config-airbnb-typescript/graphs/contributors)!

## License

Open source [licensed as MIT](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE).

# eslint-config-airbnb-typescript

> Airbnb's ESLint config with TypeScript support

Works with both JS and TS files.

## Installation

#### 1) Install Dependences

If you do not need React support (e.g. you use `eslint-config-airbnb-base`), then install the following:

```bash
npm install eslint-config-airbnb-typescript \
            eslint-plugin-import@^2.22.0 \
            @typescript-eslint/eslint-plugin@^4.2.0 \
            --save-dev
```

If you need React support (e.g. you use `eslint-config-airbnb`), then install the following:

```bash
npm install eslint-config-airbnb-typescript \
            eslint-plugin-import@^2.22.0 \
            eslint-plugin-jsx-a11y@^6.3.1 \
            eslint-plugin-react@^7.20.3 \
            eslint-plugin-react-hooks@^4.0.8 \
            @typescript-eslint/eslint-plugin@^4.2.0 \
            --save-dev
```

Note that ESLint plugins [must also be installed](https://github.com/eslint/rfcs/pull/5) for this ESLint config to work.

#### 2) Create/Modify Your ESLint Config

Create a new ESLint config file at the root of your project called `.eslintrc.js` (or modify your existing config file).

```js
module.exports = {
  extends: [
    // Chose one or the other
    'airbnb-typescript', // Delete this line if you do not need React support
    'airbnb-typescript/base', // Delete this line if you need React support
  ],
  parserOptions: {
    // ESLint needs to know about the project's TypeScript settings in order for TypeScript-specific
    // things to lint correctly
    // We do not point this at "./tsconfig.json" because certain files (such at this file) should be
    // linted but not included in the actual project output
    project: './tsconfig.eslint.json',
  },
};
```

#### 3) Create tsconfig.eslint.json

Create a new file at the root of your project called `tsconfig.eslint.json` that will extend your normal `tsconfig.json`:

```
// A special TypeScript project file, used by ESLint only
{
  "extends": "./tsconfig.json",
  "include": [
    // This part needs to be copy-pasted from from the base tsconfig.json's "include" setting
    "./src/**/*.ts", // Replace this with something corresponding to your project's directory layout

    // These are ESLint-only inclusions
    ".eslintrc.js"
  ]
}
```

## I wish this config would support [...]

The goal of `eslint-config-airbnb-typescript` is decorate `eslint-config-airbnb` with TypeScript support. All rules and settings are identical. It's a drop-in replacement for `eslint-config-airbnb`, including linting for JavaScript files.

It's recommended to alter your ESLint config for additional functionality. Here's an example:

```js
{
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
}
```

My personal ESLint config file with support for Jest, Promises, and Prettier can be found in [create-exposed-app](https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js).

## Additional Documentation

- [CHANGELOG.md](CHANGELOG.md)
- [DEVELOPING.md](DEVELOPING.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [MAINTAINING.md](MAINTAINING.md)

## Credits

Authored and maintained by Matt Turnbull ([iamturns.com](https://iamturns.com) / [@iamturns](https://twitter.com/iamturns))

To all [contributors](https://github.com/iamturns/eslint-config-airbnb-typescript/graphs/contributors) (if you exist) - thank you!

## License

Open source [licensed as MIT](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE).

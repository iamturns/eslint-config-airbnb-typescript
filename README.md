# eslint-config-airbnb-typescript

> Airbnb's ESLint config with TypeScript support

Works with both JS and TS files.

## Setup

### 1) Install

```
npm install eslint-config-airbnb-typescript --save-dev
```

### 2) Install ESLint plugins

Unfortunately, ESLint plugins used by this config [must also be installed](https://github.com/eslint/rfcs/pull/5).

```bash
npm install eslint-plugin-import@^2.22.0 \
            eslint-plugin-jsx-a11y@^6.3.1 \
            eslint-plugin-react@^7.20.3 \
            eslint-plugin-react-hooks@^4.0.8 \
            @typescript-eslint/eslint-plugin@^4.2.0 \
            --save-dev
```

If you don't need React support:

```bash
npm install eslint-plugin-import@^2.22.0 \
            @typescript-eslint/eslint-plugin@^4.2.0 \
            --save-dev
```

### 3) Configure ESLint

Add `"extends": "airbnb-typescript"` to your ESLint config file.

If you don't need React support, extend `airbnb-typescript/base` instead.

An example `.eslintrc.js`:

```js
module.exports = {
  extends: ['airbnb-typescript'],
};
```

### 4) Configure the TypeScript ESLint parser

This config requires knowledge of your TypeScript config.

In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.json`.

For example:

```diff
 module.exports = {
   extends: ['airbnb-typescript'],
+  parserOptions: {
+    project: './tsconfig.json',
+ }
 };
```

### 5) Run ESLint

Open a terminal to the root of your project, and run the following command:

```
npx eslint . --ext .js,.jsx,.ts,.tsx
```

ESLint will lint all .js, .jsx, .ts, and .tsx files within the current folder, and will output the results to your terminal.

You can also get results in realtime inside most IDEs via a plugin - just search your IDE's extension store.

## FAQ

### I get this error when running ESLint: "The file must be included in at least one of the projects provided"

This means you are attempting to lint a file that `tsconfig.json` doesn't include.

A common fix is to create a `tsconfig.eslint.json` file, which extends from your `tsconfig.json` file, and includes all the files you are linting.

```json
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.ts", "src/**/*.js", "test/**/*.ts"]
}
```

Update your ESLint config file:

```diff
parserOptions: {
-  project: './tsconfig.json',
+  project: './tsconfig.eslint.json',
}
```

### I get peer dependency warnings for ESLint React plugins, but I'm using `airbnb-typescript/base`

This is a known problem. Some suggestions exist in this [GitHub issue](https://github.com/iamturns/eslint-config-airbnb-typescript/issues/6).

### I wish this config would support [...]

The goal of `eslint-config-airbnb-typescript` is to simply decorate `eslint-config-airbnb` with TypeScript support. All rules and settings are identical. It's a drop-in replacement for `eslint-config-airbnb`, including linting for JavaScript files.

It's not a single config to cater for all TypeScript linting requirements.

For additional functionality, alter your ESLint config file. For example:

```js
module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
};
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

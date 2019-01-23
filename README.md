# eslint-config-airbnb-typescript

> Airbnb's ESLint config with TypeScript support

Use this when you're trying to mix [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).

## I use eslint-config-airbnb (with React support)

Install dependencies (including ESLint plugins):

```bash
npm install eslint-config-airbnb-typescript \
            eslint-plugin-import@^2.14.0 \
            eslint-plugin-jsx-a11y@^6.1.1 \
            eslint-plugin-react@^7.11.0 \
            @typescript-eslint/eslint-plugin@^1.0.0 \
            --save-dev
```

Within your ESLint config file:

```js
module.exports = {
  extends: ["eslint-config-airbnb-typescript"],
}
```

## I use eslint-config-airbnb-base (no React support)

Install dependencies (including ESLint plugins):

```bash
npm install eslint-config-airbnb-typescript \
            eslint-plugin-import@^2.14.0 \
            @typescript-eslint/eslint-plugin@^1.0.0 \
            --save-dev
```

Within your ESLint config file:

```js
module.exports = {
  extends: ["eslint-config-airbnb-typescript/base"],
}
```

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

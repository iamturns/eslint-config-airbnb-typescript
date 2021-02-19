### To migrate to v13

in versions <=12 you would have the following config

```js
module.exports = {
  extends: ['airbnb-typescript'],
};
```

or for base

```js
module.exports = {
  extends: ['airbnb-typescript/base'],
};
```

from version >=v13 you will need to install the config you want to decorate and add that prior to `airbnb-typescript` e.g.

first

```bash
npm install eslint-config-airbnb --save-dev
```

Then change eslint config to

```js
module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
};
```

or for base

```bash
npm install eslint-config-airbnb-base --save-dev
```

Then change eslint config to

```js
module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base'],
};
```

const stylisticPlugin = require('@stylistic/eslint-plugin');

module.exports = {
  extends: ['eslint-config-airbnb-base', './base.js', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: Object.fromEntries(
    Object.keys(stylisticPlugin.configs['all-flat'].rules ?? {}).map((key) => [key, 'off']),
  ),
};

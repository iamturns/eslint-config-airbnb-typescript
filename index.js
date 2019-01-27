module.exports = {
  extends: ['eslint-config-airbnb', './lib/shared'].map(require.resolve),
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
          },
        },
        'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
      },
      rules: {
        // only .jsx and .tsx files may have JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
      },
    },
  ],
};

// This file adds some React specific settings. Not using React? Use base.js instead.
module.exports = {
  extends: ['./lib/shared'].map(require.resolve),
  settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    // Prepend 'mjs' to match shared config
    // Original: ['.js', '.jsx', '.json']
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
    // Original: ['.jsx']
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};

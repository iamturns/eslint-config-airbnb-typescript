module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.mjs', '.js', '.ts', '.json'],
          },
        },
        'import/extensions': ['.js', '.ts', '.mjs'],
      },
      rules: {
        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // paths are treated both as absolute paths, and relative to process.cwd()
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              'test/**', // tape, common npm pattern
              'tests/**', // also common npm pattern
              'spec/**', // mocha, rspec-like pattern
              '**/__tests__/**', // jest pattern
              '**/__mocks__/**', // jest pattern
              'test.{js,jsx,ts,tsx}', // repos with a single test file
              'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
              '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
              '**/jest.config.js', // jest config
              '**/vue.config.js', // vue-cli config
              '**/webpack.config.js', // webpack config
              '**/webpack.config.*.js', // webpack config
              '**/rollup.config.js', // rollup config
              '**/rollup.config.*.js', // rollup config
              '**/gulpfile.js', // gulp config
              '**/gulpfile.*.js', // gulp config
              '**/Gruntfile{,.js}', // grunt config
              '**/protractor.conf.js', // protractor config
              '**/protractor.conf.*.js', // protractor config
            ],
            optionalDependencies: false,
          },
        ],

        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],

        // Prevent imported interface types from being treated as an unused import and enable
        // the @typescript-eslint version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ],
};

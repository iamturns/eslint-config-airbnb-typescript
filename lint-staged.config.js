module.exports = {
  '**/*.{json,md,yml}': ['prettier --write', 'git add'],
  '**/*.js': ['prettier --write', 'eslint --cache --fix', 'git add'],
  '.editorconfig': ['prettier --write', 'git add'],
  LICENSE: ['prettier --write', 'git add'],
  'package.json': ['prettier --write', 'npm run format:package', 'git add'],
};

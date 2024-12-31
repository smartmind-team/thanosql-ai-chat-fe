const path = require('path');

module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/friendly-locals',
    '@tanstack/eslint-plugin-query',
    'plugin:jsx-a11y/recommended',
    'plugin:no-relative-import-paths/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: path.join(__dirname, 'tsconfig.json'),
  },
  rules: {
    // 원하는 룰을 커스텀 (예: 세미콜론 사용 off)
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

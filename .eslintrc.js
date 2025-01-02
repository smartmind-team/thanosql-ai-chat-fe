module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/friendly-locals',
    'plugin:@tanstack/query/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@tanstack/query', 'jsx-a11y', 'prettier'],
  rules: {
    // 원하는 룰을 커스텀 (예: 세미콜론 사용 off)
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

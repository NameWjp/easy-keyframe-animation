module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  env:{
    browser: true,
    node: true,
  },
  rules: {
    'semi': 2,
    '@typescript-eslint/no-empty-function': 1
  }
};

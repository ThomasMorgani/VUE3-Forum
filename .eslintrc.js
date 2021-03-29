module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-unreachable': 'off',
    'no-unused-vars': 'off',
    quotes: [0, 'single', { avoidEscape: true }],
    semi: [2, 'never'],
  },
}

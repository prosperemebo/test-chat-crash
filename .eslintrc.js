// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  env: {
    jest: true,
    'jest/globals': true,
  },
  extends: 'expo',
  plugins: [
    'jest',
  ],
  'globals': {
    'URLSearchParams': 'true',
    'atob': 'true',
  },
  'rules': {
    'no-console': ['error', { allow: ['warn', 'error'] }],

    'no-undef': 'error',
    'semi': ['error', 'never'],
    'semi-spacing': 'error',

    'eqeqeq': 'warn',
    'no-invalid-this': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': ['error', { 'allowTernary': true }],
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-constant-condition': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { 'argsIgnorePattern': '^_' },
    ],

    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-mixed-spaces-and-tabs': 'warn',
    'space-before-blocks': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'quotes': ['error', 'single'],

    'max-len': ['error', {
      'code': 120,
      'ignoreRegExpLiterals': true,
      'ignoreTemplateLiterals': true,
      'ignoreStrings': true,
      'ignoreUrls': true,
    }],
    'max-lines': ['error', { 'max': 500 }],
    'keyword-spacing': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-mixed-operators': 'error',

    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-property-newline': [
      'error',
      { 'allowAllPropertiesOnSameLine': true },
    ],

    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'object-shorthand': 'off',
    'prefer-const': 'error',
    'prefer-template': 'warn',

    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'no-empty': 0,
    'no-irregular-whitespace': 0,
    'object-curly-spacing': ['error', 'always'],
  },
}

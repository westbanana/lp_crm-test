module.exports = {
  root: true,
  extends: ['react-app', 'airbnb'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '~': './src',
        },
      },
    },
  },
  rules: {
    'react/prop-types': 0,
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          'external',
          'internal',
          'builtin',
          'index',
          'sibling',
          'parent',
          'object',
        ],
      },
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'no-nested-ternary': 'off',
    'no-throw-literal': 'off',
    'no-param-reassign': 'off',
    'max-len': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'default-param-last': 0,
    'arrow-parens': [
      2,
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/no-cycle': 'off',
    'no-mixed-operators': [
      'error',
      {
        groups: [['*', '/']],
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
  },
};

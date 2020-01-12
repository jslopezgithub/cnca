module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['plugin:react/recommended', 'airbnb-base'],
  // plugins: ['react'],
  // extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  ignorePatterns: ['temp.js', 'node_modules/', 'Frontend/build', '*.test.js'],
  rules: {
    'comma-dangle': 'off',
    'no-console': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'import/no-named-as-default': 0,
    'implicit-arrow-linebreak': 'off'
  },
  settings: {
    react: {
      version: 'detect',

      flowVersion: '0.53'
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }]
  },
  settings: {
    react: {
      version: 'detect',
      flowVersion: '0.53'
    }
  }
};

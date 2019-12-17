module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  //extends: ['plugin:react/recommended', 'airbnb-base'],
  //plugins: ['react'],
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  rules: {
    'comma-dangle': 'off',
    'no-console': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'import/no-named-as-default': 0
  },
  settings: {
    react: {
      version: 'detect',

      flowVersion: '0.53'
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
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

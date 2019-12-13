module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['plugin:react/recommended', 'airbnb-base'],
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
  plugins: ['react'],
  rules: {
<<<<<<< HEAD
    'comma-dangle': 'off',
    'no-console': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off'
=======
    'comma-dangle': 'off'
>>>>>>> 56460ff1e356afcd24588b010556d4bb55a429a8
  }
};

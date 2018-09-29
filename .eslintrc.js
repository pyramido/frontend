// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/strongly-recommended',
  ],
  // // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
    },
  },
  // add your custom rules here
  rules: {
    'max-len': 'off',
    'no-duplicate-imports': 'error',
    'no-implicit-globals': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    // risk only exist with semi-colon auto insertion. Not our case.
    'no-plusplus': 'off',
    'no-underscore-dangle': [
      'error', {
        allowAfterSuper: true,
        allowAfterThis: true,
      }],
    'prefer-destructuring': 'off',
    'prefer-spread': 'off',
    'class-methods-use-this': 'off',
    indent: [
      'error', 2, {
        SwitchCase: 1,
      }],
    // don't require .vue extension when importing
    'import/extensions': [
      'error', 'always', {
        js: 'never',
        vue: 'never',
      }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error', {
        optionalDependencies: ['test/unit/index.js'],
      }],
    'import/prefer-default-export': 'off',
    // Vue plugin rules overrides
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': [
      2, {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: true,
        },
      }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};

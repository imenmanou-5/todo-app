module.exports = {
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off'
  }
}

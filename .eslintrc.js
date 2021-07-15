/* eslint-disable import/no-commonjs */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:eslint-comments/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'array-bracket-spacing': 2,
    'no-var': 2,
    'no-eval': 2,
    'arrow-spacing': 2,
    'block-spacing': 2,
    'key-spacing': 2,
    'brace-style': 2,
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-spacing': [2, 'always'],
    'no-shadow': 'off',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-absolute-path': 2,
    'import/no-deprecated': 2,
    'import/no-commonjs': 2,
    'import/no-amd': 2,
    'import/first': 2,
    'import/no-duplicates': 2,
    'import/export': 2,
    'import/no-unresolved': 2,
    'import/no-self-import': 2,
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/order': ['error'],
    'import/max-dependencies': ['error', { max: 20 }],
    'import/newline-after-import': ['error', { count: 1 }],

    'vue/camelcase': 2,
    'vue/require-component-is': 0,
    'vue/require-default-prop': 0,
    'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true,
      },
    ],

    // 设置 typescript-eslint 规则
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['function', 'classProperty', 'typeMethod', 'typeProperty'],
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['enumMember'],
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['variable'],
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 1, // 允许非空断言运算符
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/prefer-as-const': 1,
    '@typescript-eslint/prefer-optional-chain': 1,
    '@typescript-eslint/prefer-for-of': 1,
    '@typescript-eslint/ban-tslint-comment': 1,
    // disable the rule for all files
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './',
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.js', '.jsx', '.ts', '.tsx', '.vue'],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': [
          2,
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'explicit',
              constructors: 'no-public',
              methods: 'explicit',
              properties: 'explicit',
              parameterProperties: 'explicit',
            },
          },
        ],
      },
    },
  ],
}
/* eslint-enable import/no-commonjs */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    /** Prettier */
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
      },
    ],

    /** Quotes */
    quotes: ['error', 'single', { avoidEscape: true }],

    /** Spacing */
    'no-multi-spaces': 'error',
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],

    /** Console */
    'no-console': 'warn',

    /** Variables */
    camelcase: ['error', { properties: 'always' }],

    /** React */
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    /** Clean code */
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

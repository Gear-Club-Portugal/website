import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierConfig from 'eslint-config-prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
  // Global ignores (replaces .eslintignore and ignorePatterns)
  {
    ignores: ['node_modules/', 'dist/', 'env.d.ts'],
  },

  // Global settings (react version, import resolver)
  {
    settings: {
      react: { version: '18.2' },
      'import/resolver': {
        alias: {
          map: [['~', resolve(__dirname, './src')]],
        },
      },
    },
  },

  // Base recommended rules
  js.configs.recommended,

  // React flat recommended (includes plugin registration and languageOptions)
  reactPlugin.configs.flat.recommended,

  // React Hooks flat recommended-latest
  reactHooksPlugin.configs.flat['recommended-latest'],

  // Import plugin flat recommended (scoped to src to avoid resolver crashes on vite config)
  {
    ...importPlugin.flatConfigs.recommended,
    files: ['src/**/*.{js,jsx}'],
  },

  // JSX a11y flat recommended
  jsxA11yPlugin.flatConfigs.recommended,

  // Node.js scripts (CJS files)
  {
    files: ['scripts/**/*.cjs', '**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },

  // Main config for JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-refresh': reactRefreshPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Prettier config last (disables conflicting formatting rules)
  prettierConfig,
];

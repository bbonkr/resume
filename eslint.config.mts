import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { configs as tseslintConfigs } from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

const eslintConfig = [
    ...compat.extends(
        // "next/core-web-vitals",
        // "next/typescript",
        'plugin:import/recommended',
        'plugin:import/typescript',
    ),
    ...tseslintConfigs.recommended,
    prettierConfigRecommended,
    {
        ignores: ['**/node_modules/*', '**/out/*', '**/.next/*', 'src/app/globals.css'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        rules: {
            'prettier/prettier': 'warn',
            // 'no-unused-vars': 'off',
            // '@typescript-eslint/no-unused-vars': 'warn',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                        'type',
                    ],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'builtin',
                            position: 'before',
                        },
                        {
                            pattern: 'next/**',
                            group: 'builtin',
                            position: 'before',
                        },
                        { pattern: '~/**', group: 'internal' },
                        { pattern: '*.css', group: 'index', position: 'after' },
                        {
                            pattern: '*.scss',
                            group: 'index',
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react', 'next'],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    vars: 'all',
                    args: 'none',
                    ignoreRestSiblings: false,
                },
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    vars: 'all',
                    args: 'none',
                    ignoreRestSiblings: false,
                },
            ],
            '@typescript-eslint/triple-slash-reference': 'warn',
            'import/no-unresolved': 'warn',
        },
    },
];
export default eslintConfig;

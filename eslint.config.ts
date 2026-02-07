import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    {
        ignores: [
            'coverage',
            '**/public',
            '**/dist',
            'pnpm-lock.yaml',
            'pnpm-workspace.yaml',
        ],
    },
    prettier,
]);

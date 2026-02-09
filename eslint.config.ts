// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([{
    ignores: [
        'coverage',
        '**/public',
        '**/dist',
        'pnpm-lock.yaml',
        'pnpm-workspace.yaml',
    ],
}, prettier, ...storybook.configs["flat/recommended"]]);

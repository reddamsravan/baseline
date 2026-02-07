import { defineConfig } from 'eslint/config';
import { configs as js } from '@eslint/js';
import { configs as ts } from 'typescript-eslint';
import root from '../../eslint.config';

export default defineConfig([
    ...root,
    js.recommended,
    ts.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },
]);

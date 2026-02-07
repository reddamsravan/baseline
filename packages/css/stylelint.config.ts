import type { Config } from 'stylelint';

export default {
    extends: ['stylelint-config-standard'],
    rules: {
        'block-no-empty': true,
    },
} satisfies Config;

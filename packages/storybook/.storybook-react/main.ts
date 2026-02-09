import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: '@storybook/react-vite',
    stories: ['../src/react/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: ['@storybook/addon-themes'],
};

export default config;

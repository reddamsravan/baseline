import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    build: {
        lib: { entry: resolve(__dirname, 'src/main.ts'), formats: ['es'] },
    },
    resolve: { alias: { src: resolve('src/') } },
    plugins: [dts()],
});

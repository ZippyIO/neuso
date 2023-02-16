import { defineConfig } from 'cypress';
import ViConfig from './vite.cypress.config';

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
            viteConfig: ViConfig,
        },
    },
});

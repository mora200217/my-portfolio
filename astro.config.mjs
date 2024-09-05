import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [
        react({
            experimentalReactChildren: true,
    })
    ],
    vite: {
        resolve: {
          alias: {
            '@styles': '/src/styles', // Allows absolute imports from `src/`
          },
        },
      },
});

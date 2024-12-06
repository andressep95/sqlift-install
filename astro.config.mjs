import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://andressep95.github.io',
  base: '/sqlift-install',
  output: 'static',
  build: {
    assets: '_assets',
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
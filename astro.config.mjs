import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://andressep95.github.io/sqlift-install',
  base: '/', 
  output: 'static', 
});

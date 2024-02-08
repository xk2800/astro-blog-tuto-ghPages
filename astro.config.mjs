import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-tuto-ghPages.xk2800.github.io',
  base: '/astro-blog-tuto-ghPages',
  integrations: [preact()]
});
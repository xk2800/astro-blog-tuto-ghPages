import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'astro-blog-tuto-ghPages.xk2800.gtihub.io',
  integrations: [preact()]
});
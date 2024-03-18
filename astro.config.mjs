import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://willjwon.github.io',
  base: '/astro-example',
  integrations: [preact()]
});
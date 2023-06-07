import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://fitzhawke.com', // Use to generate your sitemap and canonical URLs in your final build.
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
    },
  },
  integrations: [
    react(),
    tailwind({}),
    sitemap(),
    robotsTxt(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical domain — must match your production URL exactly (no trailing slash)
  site: 'https://creatinglinks.org',

  integrations: [
    // Auto-generates /sitemap-index.xml at build time
    // Submit this URL to Google Search Console after deploying
    sitemap(),
  ],
});

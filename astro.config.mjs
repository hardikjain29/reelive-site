// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://reelive.app',
  // /privacy is served from privacy.html, so the links baked into the app need no trailing slash.
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [sitemap()],
});

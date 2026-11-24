// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { SHORT_LINKS } from './src/site.ts';

export default defineConfig({
  site: 'https://reelive.app',
  // /privacy is served from privacy.html, so the links baked into the app need no trailing slash.
  build: { format: 'file' },
  trailingSlash: 'never',
  // The short links only forward to the App Store: not pages for search engines.
  integrations: [mdx(), sitemap({ filter: (page) => !SHORT_LINKS.some((link) => page === `https://reelive.app/${link}`) })],
});

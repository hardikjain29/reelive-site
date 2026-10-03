# reelive.app

The website for Reelive: the landing page, Privacy Policy, Terms of Use, Impressum, help and account deletion.
Static [Astro](https://astro.build), no cookies. The only script is cookieless PostHog analytics (`src/components/Analytics.astro`), on reelive.app only, off while `SITE.posthogKey` is empty.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then builds into dist/
```

Every push to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`). The custom domain is in `public/CNAME`.

## Where things live

| What | Where |
|---|---|
| Prices, free reels, template count, the launch switch | `src/site.ts` (`SITE`) |
| Operator details for the legal pages | `src/site.ts` (`OPERATOR`) |
| Legal and help pages | `src/pages/*.mdx` (date: `LEGAL_UPDATED` in `src/site.ts`) |
| Landing page | `src/pages/index.astro`, `src/styles/landing.css` |
| Shared look (colours, nav, footer, phone frame) | `src/styles/global.css` |
| Template stills | `src/assets/stills/` (converted to WebP at build) |

## Launch day

1. In `src/site.ts`, set `appStoreLive: true`. The buttons become App Store links and Safari shows the Smart App Banner.
2. Replace `public/og.png`, which still says "Coming soon to iPhone".

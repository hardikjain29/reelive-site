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
| Short links (reelive.app/ig …) | `SHORT_LINKS` in `src/site.ts`, page `src/pages/[link].astro` |

## Short links

`reelive.app/get`, `/download`, `/ig`, `/tiktok` and `/yt` open the App Store, for bios, posts and stories.
GitHub Pages can't redirect, so each is a tiny page that forwards at once (about 0.3 s). On the way it sends
PostHog `link_opened {link}` (taps per channel). Once `SITE.appStoreProviderToken` is set (`pt` from
App Store Connect → Analytics → Acquisition → Campaigns), each link is also its own App Store campaign, and
App Store Connect shows page views and downloads per link. To add a channel, add it to `SHORT_LINKS`; never
rename one that's already in a bio.

## Launch day

1. In `src/site.ts`, set `appStoreLive: true`. The buttons become App Store links and Safari shows the Smart App Banner.
2. The share image is `public/og-launch.jpg` ("Now on the App Store"; keep it under 300 KB or WhatsApp drops it). When it changes, give it a new file name and update `src/layouts/BaseLayout.astro`: WhatsApp and Facebook cache previews by the image URL.

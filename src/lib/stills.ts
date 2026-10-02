import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/** Template stills, one WebP each at the source size (360 × 640), reused everywhere on the page. */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/stills/*.jpg', { eager: true });
const sources = Object.keys(files)
  .sort()
  .map((key) => files[key].default);

export const STILLS = await Promise.all(
  sources.map(async (src) => (await getImage({ src, width: 360, format: 'webp', quality: 78 })).src)
);

export const still = (i: number) => STILLS[((i % STILLS.length) + STILLS.length) % STILLS.length];

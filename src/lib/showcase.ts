import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/**
 * The showcase's frames (360 × 640): `shot-N` is the reel's Nth shot (public/demo/reel.mp4,
 * a template's own video, muted) — the first four are the quarters of its opening collage,
 * cropped out, the rest the middle of each full-screen cut. `extra-NN` are the tiles Reelive
 * doesn't pick: near-duplicates of those shots and other photos from a similar trip.
 */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/showcase/*.jpg', { eager: true });
const webp = async (name: string) => (await getImage({ src: files[`../assets/showcase/${name}.jpg`].default, width: 360, format: 'webp', quality: 78 })).src;

export const SHOTS = await Promise.all(Array.from({ length: 17 }, (_, i) => webp(`shot-${i + 1}`)));
export const EXTRAS = await Promise.all(Array.from({ length: 23 }, (_, i) => webp(`extra-${String(i + 1).padStart(2, '0')}`)));

/**
 * When each shot comes in (s), on the template's beats: the collage's four quarters one by
 * one (they stay up together until 2.51 s), then a full-screen cut per shot.
 */
export const REEL_CUTS = [0, 0.55, 1, 1.5, 2.51, 2.8, 3.07, 3.3, 3.56, 3.8, 4.03, 4.33, 4.56, 4.82, 5.13, 5.42, 5.7];
/** The video's length (s); the last shot runs to the end. */
export const REEL_LENGTH = 6.13;
export const shotLength = (i: number) => (REEL_CUTS[i + 1] ?? REEL_LENGTH) - REEL_CUTS[i];

/** Waveform bar heights (%) for the beat timeline: deterministic, peaking around the cuts. */
export function waveHeights(count: number, beats: number[]): number[] {
  return Array.from({ length: count }, (_, i) => {
    const base = 18 + 52 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.37));
    const onBeat = beats.some((b) => Math.abs(b - i) <= 1);
    return Math.round(Math.min(100, onBeat ? base + 34 : base));
  });
}

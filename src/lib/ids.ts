/** Ids unique within a page (SVG gradients), stable from build to build. */
let n = 0;
export const nextId = (prefix: string) => `${prefix}-${++n}`;

import path from "node:path";

// src/lib/images.ts
export function imagesArray(count = 50, prefix = "-") {
  return Array.from({ length: count }).map((_, i) => `${path}${prefix}${i+1}-800.jpeg`);
}

// optional helper for srcset if you pre-generate sizes
export function srcsetFor(basename: string) {
  // expects basename like "/images/img1"
  return `${basename}-400.jpeg 400w, ${basename}-800.jpeg 800w, ${basename}-1200.jpeg 1200w`;
}



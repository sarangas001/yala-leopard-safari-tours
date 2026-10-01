import type { CSSProperties } from "react";

/**
 * Where the subject's face sits in each photo (object-position, "x% y%").
 *
 * Phone layouts crop tall/narrow frames out of wide photos, and a default
 * centre crop often lands on the animal's back end. These points are applied
 * below the `lg` breakpoint only, so desktop framing is untouched.
 * Images not listed here keep the default centre crop.
 */
const FOCAL_POINTS: Record<string, string> = {
  "/images/new-img/11.jpg": "40% 40%",
  "/images/new-img/12.jpg": "50% 45%",
  "/images/new-img/13.jpg": "30% 40%",
  "/images/new-img/4-A-Kumana-leopard.jpg": "45% 35%",
  "/images/new-img/8.webp": "50% 55%",
  "/images/new-img/9.webp": "75% 50%",
  "/images/new-img/IMG_1021.jpg": "60% 65%",
  "/images/new-img/IMG_1606.jpg": "45% 40%",
  "/images/new-img/IMG_1753.jpg": "85% 45%",
  "/images/new-img/IMG_1906.jpg": "50% 55%",
  "/images/new-img/IMG_2001.jpg": "50% 45%",
  "/images/new-img/IMG_2015.jpg": "60% 45%",
  "/images/new-img/IMG_2392.jpg": "40% 75%",
  "/images/new-img/IMG_7940.jpg": "28% 45%",
  "/images/new-img/IMG_8909.jpg": "45% 30%",
  "/images/new-img/IMG_9129.jpg": "70% 60%",
  "/images/new-img/IMG_9172.jpg": "45% 40%",
  "/images/new-img/Spoonbill.jpeg": "40% 40%",
  "/images/new-img/Spot-Billed-pelican.jpeg": "40% 35%",
  "/images/new-img/about-hero.png": "70% 40%",
  "/images/new-img/black-necked-stork.jpeg": "60% 40%",
  "/images/new-img/crocodile-1.jpg": "40% 60%",
  "/images/new-img/crocodile.jpg": "50% 75%",
  "/images/new-img/flamingos.jpeg": "35% 40%",
  "/images/new-img/grey-heron.jpg": "65% 55%",
  "/images/new-img/herons-egrets.jpeg": "40% 40%",
  "/images/new-img/monkey-species.jpg": "50% 55%",
  "/images/new-img/painted-storks.jpg": "35% 45%",
  "/images/new-img/pelicans.jpg": "50% 40%",
  "/images/new-img/water-baffalo.jpg": "60% 40%",
  "/images/new-img/wild-boar.jpeg": "70% 55%",
  "/images/parks/bundala.jpg": "55% 40%",
  "/images/parks/kumana.jpg": "60% 50%",
  "/images/parks/udawalawe.jpg": "45% 55%",
  "/images/parks/yala.jpg": "60% 50%",
  "/images/wildlife/crocodile.jpg": "70% 50%",
  "/images/wildlife/peacock.jpg": "60% 55%",
  "/images/wildlife/sloth-bear.jpg": "45% 55%",
  "/images/wildlife/spotted-deer.jpg": "50% 55%",
  "/images/wildlife/wild-boar.jpg": "55% 55%",
};

/** Class that switches the image to its focal point below `lg` (empty when none is set). */
export function focalClass(src: string): string {
  return FOCAL_POINTS[src] ? "max-lg:[object-position:var(--focal)]" : "";
}

/** Inline `--focal` custom property for the image (undefined when none is set). */
export function focalStyle(src: string): CSSProperties | undefined {
  const point = FOCAL_POINTS[src];
  return point ? ({ "--focal": point } as CSSProperties) : undefined;
}

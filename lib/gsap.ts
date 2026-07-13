/**
 * Single GSAP entry point — every scroll-based animation on the site
 * runs on GSAP + ScrollTrigger registered here.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** House easing — matches the cubic-bezier(0.22, 1, 0.36, 1) used site-wide. */
export const EASE_OUT = "power4.out";

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export { gsap, ScrollTrigger };

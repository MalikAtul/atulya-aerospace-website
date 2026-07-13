"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type CountUpProps = {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

/** Counts from 0 to `value` when scrolled into view — GSAP ScrollTrigger. */
export function CountUp({ value, className, prefix = "", suffix = "", duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const format = (n: number) => `${prefix}${Math.round(n).toLocaleString("en-IN")}${suffix}`;
    if (prefersReducedMotion()) {
      node.textContent = format(value);
      return;
    }
    const proxy = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(proxy, {
        v: value,
        duration,
        ease: "expo.out",
        scrollTrigger: { trigger: node, start: "top 90%", once: true },
        onUpdate: () => {
          node.textContent = format(proxy.v);
        },
      });
    });
    return () => ctx.revert();
  }, [value, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

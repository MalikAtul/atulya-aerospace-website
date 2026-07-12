"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

/** Animates a number from 0 to `value` when it scrolls into view. */
export function CountUp({ value, className, prefix = "", suffix = "", duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!inView) return;
    if (reduce) {
      node.textContent = `${prefix}${value.toLocaleString("en-IN")}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${prefix}${Math.round(latest).toLocaleString("en-IN")}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

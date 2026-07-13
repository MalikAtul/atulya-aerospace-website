"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { EASE_OUT, gsap, prefersReducedMotion } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Fade-and-rise scroll reveal used across every section — GSAP ScrollTrigger. */
export function Reveal({ children, delay = 0, y = 26, className, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { autoAlpha: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          delay,
          ease: EASE_OUT,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [delay, y, once]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

/** Stagger container — pair with <RevealItem>. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-reveal-item]");
    if (!items.length) return;
    if (prefersReducedMotion()) {
      gsap.set(items, { autoAlpha: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: (_i, t) => Number((t as HTMLElement).dataset.revealY ?? 26) },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: EASE_OUT,
          stagger,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className,
  y = 26,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <div data-reveal-item data-reveal-y={y} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

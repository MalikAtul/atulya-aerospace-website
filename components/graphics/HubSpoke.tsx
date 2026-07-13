"use client";

/**
 * MedFly corridor network — one civil hospital radiating to rural PHCs.
 * GSAP ScrollTrigger choreography: range rings and the hub fade up,
 * then each dashed corridor draws outward (through a stroke mask) and
 * its PHC node pops in as the corridor reaches it.
 */

import { useEffect, useRef } from "react";
import { EASE_OUT, gsap, prefersReducedMotion } from "@/lib/gsap";

const HUB = { x: 150, y: 200 };

const SPOKES = [
  { x: 420, y: 62, label: "PHC — 01", time: "6 MIN" },
  { x: 540, y: 168, label: "PHC — 02", time: "8 MIN" },
  { x: 500, y: 306, label: "PHC — 03", time: "9 MIN" },
  { x: 330, y: 350, label: "PHC — 04", time: "5 MIN" },
  { x: 372, y: 196, label: "PHC — 05", time: "4 MIN" },
] as const;

const STEP = 0.25;

export function HubSpoke({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    if (prefersReducedMotion()) {
      gsap.set(svg, { autoAlpha: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      const fades = svg.querySelectorAll('[data-hs="fade"]');
      const masks = Array.from(svg.querySelectorAll<SVGGeometryElement>('[data-hs="corridor-mask"]'));
      const nodes = Array.from(svg.querySelectorAll<SVGGElement>('[data-hs="node"]'));

      gsap.set(fades, { autoAlpha: 0 });
      masks.forEach((m) => {
        const len = m.getTotalLength();
        gsap.set(m, { strokeDasharray: len, strokeDashoffset: len });
      });
      nodes.forEach((n) => {
        gsap.set(n, {
          autoAlpha: 0,
          scale: 0.8,
          svgOrigin: `${n.dataset.x} ${n.dataset.y}`,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: svg, start: "top 80%", once: true },
      });
      tl.to(svg, { autoAlpha: 1, duration: 0.4, ease: "power2.out" }, 0).to(
        fades,
        { autoAlpha: 1, duration: 0.7, stagger: 0.08, ease: "power2.out" },
        0.05,
      );
      masks.forEach((m, i) => {
        tl.to(m, { strokeDashoffset: 0, duration: 0.9, ease: EASE_OUT }, 0.15 + i * STEP);
      });
      nodes.forEach((n, i) => {
        tl.to(
          n,
          { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(2)" },
          0.6 + i * STEP,
        );
      });
    }, svg);
    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 640 400"
      fill="none"
      role="img"
      aria-label="Diagram of drone corridors linking a district civil hospital to five rural primary health centres"
      className={className}
      style={{ opacity: 0 }}
    >
      <defs>
        {SPOKES.map((s, i) => (
          <mask
            key={`m-${s.label}`}
            id={`hs-corridor-${i}`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="640"
            height="400"
          >
            <line
              data-hs="corridor-mask"
              x1={HUB.x}
              y1={HUB.y}
              x2={s.x}
              y2={s.y}
              stroke="#fff"
              strokeWidth="6"
            />
          </mask>
        ))}
      </defs>

      {/* Range rings around the hub */}
      {[110, 210, 310].map((r, i) => (
        <circle
          key={r}
          data-hs="fade"
          cx={HUB.x}
          cy={HUB.y}
          r={r}
          stroke="rgba(237,239,242,0.09)"
          strokeWidth="1"
          strokeDasharray={i === 2 ? "3 6" : undefined}
        />
      ))}
      <text
        data-hs="fade"
        x={HUB.x + 116}
        y={HUB.y - 96}
        fill="rgba(237,239,242,0.3)"
        fontFamily="var(--font-mono)"
        fontSize="9.5"
        letterSpacing="1.5"
      >
        CORRIDOR RANGE
      </text>

      {/* Corridors — dashed, revealed outward through their stroke masks */}
      {SPOKES.map((s, i) => (
        <g key={s.label} mask={`url(#hs-corridor-${i})`}>
          <line
            x1={HUB.x}
            y1={HUB.y}
            x2={s.x}
            y2={s.y}
            stroke="rgba(52,194,107,0.55)"
            strokeWidth="1.4"
            strokeDasharray="6 7"
          />
        </g>
      ))}

      {/* PHC nodes */}
      {SPOKES.map((s) => (
        <g key={`n-${s.label}`} data-hs="node" data-x={s.x} data-y={s.y}>
          <circle cx={s.x} cy={s.y} r={7} stroke="var(--color-leaf)" strokeWidth="1.3" fill="var(--color-void)" />
          <circle cx={s.x} cy={s.y} r={2.2} fill="var(--color-leaf)" />
          <text
            x={s.x + 14}
            y={s.y + 1}
            fill="rgba(237,239,242,0.7)"
            fontFamily="var(--font-mono)"
            fontSize="10.5"
            fontWeight="600"
            letterSpacing="1"
          >
            {s.label}
          </text>
          <text
            x={s.x + 14}
            y={s.y + 14}
            fill="rgba(52,194,107,0.8)"
            fontFamily="var(--font-mono)"
            fontSize="9.5"
            letterSpacing="1"
          >
            {s.time}
          </text>
        </g>
      ))}

      {/* Hub — the civil hospital */}
      <g data-hs="fade">
        <rect
          x={HUB.x - 22}
          y={HUB.y - 22}
          width={44}
          height={44}
          stroke="var(--color-leaf)"
          strokeWidth="1.5"
          fill="var(--color-void)"
        />
        <path
          d={`M${HUB.x} ${HUB.y - 11} L${HUB.x} ${HUB.y + 11} M${HUB.x - 11} ${HUB.y} L${HUB.x + 11} ${HUB.y}`}
          stroke="var(--color-leaf)"
          strokeWidth="2.2"
        />
        <text
          x={HUB.x - 22}
          y={HUB.y + 44}
          fill="rgba(237,239,242,0.65)"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="1.5"
        >
          DISTRICT CIVIL HOSPITAL
        </text>
        <text
          x={HUB.x - 22}
          y={HUB.y + 58}
          fill="rgba(237,239,242,0.35)"
          fontFamily="var(--font-mono)"
          fontSize="9.5"
          letterSpacing="1"
        >
          BLOOD BANK · PHARMACY
        </text>
      </g>
    </svg>
  );
}

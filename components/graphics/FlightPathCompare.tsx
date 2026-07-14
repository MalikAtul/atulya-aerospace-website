"use client";

/**
 * Delhiver's core argument, drawn: the road route vs the flight line.
 * GSAP ScrollTrigger choreography — the city fades up, the road crawls
 * through the grid, then the flight line cuts straight across it.
 * The dashed road keeps its dashes by drawing on through a stroke mask.
 */

import { useEffect, useRef } from "react";
import { EASE_OUT, gsap, prefersReducedMotion } from "@/lib/gsap";

// City blocks — a loose grid the road has to respect.
const BLOCKS = [
  [96, 60, 74, 52], [196, 60, 88, 52], [310, 60, 70, 52], [406, 60, 92, 52],
  [96, 138, 74, 58], [196, 138, 88, 58], [310, 138, 70, 58], [406, 138, 92, 58],
  [96, 222, 74, 54], [196, 222, 88, 54], [310, 222, 70, 54], [406, 222, 92, 54],
] as const;

const ROAD_D =
  "M 66 314 L 174 314 L 174 208 L 296 208 L 296 118 L 392 118 L 392 190 L 512 190 L 512 96 L 566 96";

export function FlightPathCompare({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    if (prefersReducedMotion()) {
      gsap.set(svg, { autoAlpha: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      const early = svg.querySelectorAll('[data-fpc="fade-early"]');
      const late = svg.querySelectorAll('[data-fpc="fade-late"]');
      const roadMask = svg.querySelector<SVGGeometryElement>('[data-fpc="road-mask"]');
      const flight = svg.querySelector<SVGGeometryElement>('[data-fpc="flight"]');
      if (!roadMask || !flight) return;

      const roadLen = roadMask.getTotalLength();
      const flightLen = flight.getTotalLength();
      gsap.set(roadMask, { strokeDasharray: roadLen, strokeDashoffset: roadLen });
      gsap.set(flight, { strokeDasharray: flightLen, strokeDashoffset: flightLen, opacity: 0 });
      gsap.set([...early, ...late], { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: svg, start: "top 80%", once: true },
      });
      tl.to(svg, { autoAlpha: 1, duration: 0.4, ease: "power2.out" }, 0)
        .to(early, { autoAlpha: 1, duration: 0.7, stagger: 0.06, ease: "power2.out" }, 0.05)
        .to(roadMask, { strokeDashoffset: 0, duration: 1.6, ease: "power1.inOut" }, 0.15)
        .to(flight, { strokeDashoffset: 0, opacity: 1, duration: 0.8, ease: EASE_OUT }, 1.45)
        .to(late, { autoAlpha: 1, duration: 0.7, ease: "power2.out" }, 1.95);
    }, svg);
    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 640 360"
      fill="none"
      aria-label="Diagram comparing a winding road delivery route with a straight drone flight line"
      role="img"
      className={className}
      style={{ opacity: 0 }}
    >
      <defs>
        <mask id="fpc-road-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="640" height="360">
          <path data-fpc="road-mask" d={ROAD_D} stroke="#fff" strokeWidth="6" fill="none" />
        </mask>
      </defs>

      {/* City fabric */}
      <g data-fpc="fade-early">
        {BLOCKS.map(([x, y, w, h]) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={w}
            height={h}
            stroke="#dde1e6"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* Hub */}
      <g data-fpc="fade-early">
        <rect x={30} y={296} width={36} height={36} stroke="var(--color-deliver)" strokeWidth="1.3" fill="var(--color-base)" />
        <path d="M48 304 L57 324 L48 319.5 L39 324 Z" fill="var(--color-deliver)" />
        <text x={30} y={352} fill="#49535e" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" letterSpacing="1.5">
          DELHIVER HUB
        </text>
      </g>

      {/* Destination */}
      <g data-fpc="fade-early">
        <circle cx={584} cy={78} r={17} stroke="#49535e" strokeWidth="1.2" fill="var(--color-base)" />
        <path d="M577 80 L584 72 L591 80 M580 79 L580 86 L588 86 L588 79" stroke="#49535e" strokeWidth="1.1" fill="none" />
        <text x={568} y={112} fill="#49535e" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" letterSpacing="1.5">
          DOORSTEP
        </text>
      </g>

      {/* Road route — dashed crawl, revealed through the stroke mask */}
      <g mask="url(#fpc-road-reveal)">
        <path
          d={ROAD_D}
          stroke="#9ca3af"
          strokeWidth="1.6"
          strokeDasharray="7 5"
        />
      </g>
      <g data-fpc="fade-late">
        <text x={252} y={326} fill="#49535e" fontFamily="var(--font-body)" fontSize="10.5" fontWeight="600" letterSpacing="1.5">
          GROUND ROUTE
        </text>
        <text x={252} y={340} fill="#9ca3af" fontFamily="var(--font-body)" fontSize="9.5" fontWeight="600" letterSpacing="1">
          ROADS · SIGNALS · TRAFFIC
        </text>
      </g>

      {/* Flight line — the displacement */}
      <path data-fpc="flight" d="M 62 300 L 570 88" stroke="var(--color-deliver)" strokeWidth="2" />
      <g data-fpc="fade-late">
        <path d="M 330 186 L 342 198 L 326 202 Z" fill="var(--color-deliver)" transform="rotate(-8 334 194)" />
        <text x={348} y={228} fill="var(--color-deliver)" fontFamily="var(--font-body)" fontSize="10.5" fontWeight="600" letterSpacing="1.5">
          DELHIVER FLIGHT
        </text>
        <text x={348} y={242} fill="rgba(30,111,217,0.7)" fontFamily="var(--font-body)" fontSize="9.5" fontWeight="600" letterSpacing="1">
          STRAIGHT-LINE DISPLACEMENT
        </text>
      </g>
    </svg>
  );
}

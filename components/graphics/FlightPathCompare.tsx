"use client";

/**
 * Delhiver's core argument, drawn: the road route vs the flight line.
 */

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const drawSlow: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.6, ease: "easeInOut" }, opacity: { duration: 0.3 } },
  },
};

const drawFast: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.8, ease: EASE, delay: 1.4 },
      opacity: { duration: 0.3, delay: 1.4 },
    },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, delay: 0.3 } },
};

const fadeLate: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, delay: 1.9 } },
};

// City blocks — a loose grid the road has to respect.
const BLOCKS = [
  [96, 60, 74, 52], [196, 60, 88, 52], [310, 60, 70, 52], [406, 60, 92, 52],
  [96, 138, 74, 58], [196, 138, 88, 58], [310, 138, 70, 58], [406, 138, 92, 58],
  [96, 222, 74, 54], [196, 222, 88, 54], [310, 222, 70, 54], [406, 222, 92, 54],
] as const;

export function FlightPathCompare({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 640 360"
      fill="none"
      aria-label="Diagram comparing a winding road delivery route with a straight drone flight line"
      role="img"
      className={className}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* City fabric */}
      <motion.g variants={fade}>
        {BLOCKS.map(([x, y, w, h]) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={w}
            height={h}
            stroke="rgba(237,239,242,0.1)"
            strokeWidth="1"
          />
        ))}
      </motion.g>

      {/* Hub */}
      <motion.g variants={fade}>
        <rect x={30} y={296} width={36} height={36} stroke="var(--color-chakra)" strokeWidth="1.3" fill="var(--color-void)" />
        <path d="M48 304 L57 324 L48 319.5 L39 324 Z" fill="var(--color-chakra)" />
        <text x={30} y={352} fill="rgba(237,239,242,0.55)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">
          DELHIVER HUB
        </text>
      </motion.g>

      {/* Destination */}
      <motion.g variants={fade}>
        <circle cx={584} cy={78} r={17} stroke="rgba(237,239,242,0.6)" strokeWidth="1.2" fill="var(--color-void)" />
        <path d="M577 80 L584 72 L591 80 M580 79 L580 86 L588 86 L588 79" stroke="rgba(237,239,242,0.7)" strokeWidth="1.1" fill="none" />
        <text x={568} y={112} fill="rgba(237,239,242,0.55)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">
          DOORSTEP
        </text>
      </motion.g>

      {/* Road route — orthogonal crawl through the grid */}
      <motion.path
        variants={drawSlow}
        d="M 66 314 L 174 314 L 174 208 L 296 208 L 296 118 L 392 118 L 392 190 L 512 190 L 512 96 L 566 96"
        stroke="rgba(237,239,242,0.38)"
        strokeWidth="1.6"
        strokeDasharray="7 5"
      />
      <motion.g variants={fadeLate}>
        <text x={252} y={326} fill="rgba(237,239,242,0.42)" fontFamily="var(--font-mono)" fontSize="10.5" letterSpacing="1.5">
          GROUND ROUTE
        </text>
        <text x={252} y={340} fill="rgba(237,239,242,0.3)" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="1">
          ROADS · SIGNALS · TRAFFIC
        </text>
      </motion.g>

      {/* Flight line — the displacement */}
      <motion.path
        variants={drawFast}
        d="M 62 300 L 570 88"
        stroke="var(--color-chakra)"
        strokeWidth="2"
      />
      <motion.g variants={fadeLate}>
        <path d="M 330 186 L 342 198 L 326 202 Z" fill="var(--color-chakra)" transform="rotate(-8 334 194)" />
        <text x={348} y={228} fill="var(--color-chakra)" fontFamily="var(--font-mono)" fontSize="10.5" letterSpacing="1.5">
          DELHIVER FLIGHT
        </text>
        <text x={348} y={242} fill="rgba(77,163,255,0.6)" fontFamily="var(--font-mono)" fontSize="9.5" letterSpacing="1">
          STRAIGHT-LINE DISPLACEMENT
        </text>
      </motion.g>
    </motion.svg>
  );
}

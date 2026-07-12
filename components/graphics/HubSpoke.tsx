"use client";

/**
 * MedFly corridor network — one civil hospital radiating to rural PHCs.
 */

import { motion, useReducedMotion, type Variants } from "motion/react";

const HUB = { x: 150, y: 200 };

const SPOKES = [
  { x: 420, y: 62, label: "PHC — 01", time: "6 MIN", delay: 0.15 },
  { x: 540, y: 168, label: "PHC — 02", time: "8 MIN", delay: 0.4 },
  { x: 500, y: 306, label: "PHC — 03", time: "9 MIN", delay: 0.65 },
  { x: 330, y: 350, label: "PHC — 04", time: "5 MIN", delay: 0.9 },
  { x: 372, y: 196, label: "PHC — 05", time: "4 MIN", delay: 1.15 },
] as const;

const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

export function HubSpoke({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 640 400"
      fill="none"
      role="img"
      aria-label="Diagram of drone corridors linking a district civil hospital to five rural primary health centres"
      className={className}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Range rings around the hub */}
      {[110, 210, 310].map((r, i) => (
        <motion.circle
          key={r}
          variants={fade}
          cx={HUB.x}
          cy={HUB.y}
          r={r}
          stroke="rgba(237,239,242,0.09)"
          strokeWidth="1"
          strokeDasharray={i === 2 ? "3 6" : undefined}
        />
      ))}
      <motion.text
        variants={fade}
        x={HUB.x + 116}
        y={HUB.y - 96}
        fill="rgba(237,239,242,0.3)"
        fontFamily="var(--font-mono)"
        fontSize="9.5"
        letterSpacing="1.5"
      >
        CORRIDOR RANGE
      </motion.text>

      {/* Corridors */}
      {SPOKES.map((s) => (
        <motion.line
          key={s.label}
          x1={HUB.x}
          y1={HUB.y}
          x2={s.x}
          y2={s.y}
          stroke="rgba(52,194,107,0.55)"
          strokeWidth="1.4"
          strokeDasharray="6 7"
          initial={reduce ? { opacity: 1 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: s.delay, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      {/* PHC nodes */}
      {SPOKES.map((s) => (
        <motion.g
          key={`n-${s.label}`}
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: s.delay + 0.45 }}
          style={{ transformOrigin: `${s.x}px ${s.y}px` }}
        >
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
        </motion.g>
      ))}

      {/* Hub — the civil hospital */}
      <motion.g variants={fade}>
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
      </motion.g>
    </motion.svg>
  );
}

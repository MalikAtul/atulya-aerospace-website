"use client";

/**
 * Engineering line-art schematics for every airframe class.
 * Strokes draw themselves in as they scroll into view.
 */

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export type SchematicType =
  | "hale"
  | "interceptor"
  | "jet"
  | "quad"
  | "loiter"
  | "intercept"
  | "cargo"
  | "med";

const EASE = [0.22, 1, 0.36, 1] as const;

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.1, ease: EASE }, opacity: { duration: 0.25 } },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
};

const INK = "rgba(237,239,242,0.78)";
const DIM = "rgba(237,239,242,0.32)";
const FAINT = "rgba(237,239,242,0.18)";

/* ── Small drafting helpers ─────────────────────────────────────────── */

function Note({
  x,
  y,
  children,
  anchor = "start",
  color = "rgba(237,239,242,0.5)",
}: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
  color?: string;
}) {
  return (
    <motion.text
      variants={fade}
      x={x}
      y={y}
      textAnchor={anchor}
      fill={color}
      fontFamily="var(--font-mono)"
      fontSize="9.5"
      letterSpacing="1.5"
    >
      {children}
    </motion.text>
  );
}

function Leader({ d }: { d: string }) {
  return <motion.path variants={fade} d={d} stroke={DIM} strokeWidth="0.8" fill="none" />;
}

/** Horizontal dimension line with end ticks. */
function DimH({ x1, x2, y, label }: { x1: number; x2: number; y: number; label: string }) {
  return (
    <motion.g variants={fade}>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={DIM} strokeWidth="0.8" />
      <line x1={x1} y1={y - 5} x2={x1} y2={y + 5} stroke={DIM} strokeWidth="0.8" />
      <line x1={x2} y1={y - 5} x2={x2} y2={y + 5} stroke={DIM} strokeWidth="0.8" />
      <text
        x={(x1 + x2) / 2}
        y={y + 14}
        textAnchor="middle"
        fill="rgba(237,239,242,0.5)"
        fontFamily="var(--font-mono)"
        fontSize="9.5"
        letterSpacing="1.5"
      >
        {label}
      </text>
    </motion.g>
  );
}

/** Dash-dot centerline. */
function CenterLine({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <motion.line
      variants={fade}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={FAINT}
      strokeWidth="0.8"
      strokeDasharray="14 5 2 5"
    />
  );
}

/** Rotor disc: dashed swept circle + blades + hub. */
function Rotor({ cx, cy, r = 28 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <motion.circle
        variants={draw}
        cx={cx}
        cy={cy}
        r={r}
        stroke={DIM}
        strokeWidth="1"
        strokeDasharray="4 5"
        fill="none"
      />
      <motion.line variants={draw} x1={cx - r + 7} y1={cy} x2={cx + r - 7} y2={cy} stroke={INK} strokeWidth="1.1" />
      <motion.circle variants={fade} cx={cx} cy={cy} r={3} fill={INK} />
    </g>
  );
}

/** Quad frame shared by quad/cargo/med variants. */
function QuadFrame({ accent, payload }: { accent: string; payload: "sensor" | "cargo" | "med" }) {
  const rotors = [
    { x: 92, y: 58 },
    { x: 248, y: 58 },
    { x: 92, y: 182 },
    { x: 248, y: 182 },
  ];
  return (
    <>
      {/* Arms */}
      {rotors.map((r) => (
        <motion.line
          key={`${r.x}-${r.y}`}
          variants={draw}
          x1={170}
          y1={120}
          x2={r.x}
          y2={r.y}
          stroke={INK}
          strokeWidth="1.2"
        />
      ))}
      {rotors.map((r) => (
        <Rotor key={`rotor-${r.x}-${r.y}`} cx={r.x} cy={r.y} />
      ))}
      {/* Body */}
      <motion.rect
        variants={draw}
        x={146}
        y={96}
        width={48}
        height={48}
        rx={8}
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {payload === "sensor" && (
        <>
          <motion.rect
            variants={draw}
            x={158}
            y={108}
            width={24}
            height={24}
            rx={3}
            stroke={accent}
            strokeWidth="1.2"
            strokeDasharray="3 3"
            fill="none"
          />
          <motion.line variants={draw} x1={160} y1={96} x2={152} y2={80} stroke={accent} strokeWidth="1.1" />
          <motion.line variants={draw} x1={180} y1={96} x2={188} y2={80} stroke={accent} strokeWidth="1.1" />
          <Leader d="M182 120 L244 120" />
          <Note x={248} y={116}>SENSOR</Note>
          <Note x={248} y={128}>ARRAY</Note>
        </>
      )}
      {payload === "cargo" && (
        <>
          <motion.rect
            variants={draw}
            x={156}
            y={106}
            width={28}
            height={28}
            stroke={accent}
            strokeWidth="1.3"
            fill="none"
          />
          <motion.line variants={draw} x1={170} y1={106} x2={170} y2={134} stroke={accent} strokeWidth="0.9" />
          <motion.line variants={draw} x1={156} y1={120} x2={184} y2={120} stroke={accent} strokeWidth="0.9" />
          <Leader d="M184 120 L244 120" />
          <Note x={248} y={116}>PAYLOAD</Note>
          <Note x={248} y={128}>BAY</Note>
        </>
      )}
      {payload === "med" && (
        <>
          <motion.rect
            variants={draw}
            x={156}
            y={106}
            width={28}
            height={28}
            rx={3}
            stroke={accent}
            strokeWidth="1.3"
            fill="none"
          />
          <motion.path
            variants={draw}
            d="M170 112 L170 128 M162 120 L178 120"
            stroke={accent}
            strokeWidth="1.6"
          />
          <Leader d="M184 120 L244 120" />
          <Note x={248} y={116}>COLD-CHAIN</Note>
          <Note x={248} y={128}>BAY · 2–8°C</Note>
        </>
      )}
    </>
  );
}

/* ── Airframes ──────────────────────────────────────────────────────── */

function Hale({ accent }: { accent: string }) {
  return (
    <>
      <CenterLine x1={170} y1={16} x2={170} y2={210} />
      {/* Wing */}
      <motion.path
        variants={draw}
        d="M26 98 L132 91 L208 91 L314 98 L314 104 L208 108 L132 108 L26 104 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="none"
      />
      {/* Winglets */}
      <motion.path variants={draw} d="M26 98 L18 88" stroke={INK} strokeWidth="1.2" />
      <motion.path variants={draw} d="M314 98 L322 88" stroke={INK} strokeWidth="1.2" />
      {/* Fuselage */}
      <motion.path
        variants={draw}
        d="M170 28 C176 28 178 38 178 50 L177 156 C177 166 174 172 170 172 C166 172 163 166 163 156 L162 50 C162 38 164 28 170 28 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {/* Tailplane */}
      <motion.path
        variants={draw}
        d="M136 166 L204 166 L198 176 L142 176 Z"
        stroke={INK}
        strokeWidth="1.2"
        fill="none"
      />
      {/* Pusher prop */}
      <motion.circle
        variants={draw}
        cx={170}
        cy={188}
        r={15}
        stroke={DIM}
        strokeWidth="1"
        strokeDasharray="4 5"
        fill="none"
      />
      <motion.line variants={draw} x1={159} y1={188} x2={181} y2={188} stroke={INK} strokeWidth="1.1" />
      {/* Sensor turret */}
      <motion.circle variants={draw} cx={170} cy={62} r={7} stroke={accent} strokeWidth="1.3" fill="none" />
      <motion.circle variants={fade} cx={170} cy={62} r={2} fill={accent} />
      <Leader d="M177 62 L250 52" />
      <Note x={254} y={55}>EO/IR TURRET</Note>
      <DimH x1={26} x2={314} y={224} label="SPAN — HALE CLASS" />
    </>
  );
}

function Interceptor({ accent }: { accent: string }) {
  return (
    <>
      {/* Launch tube */}
      <motion.rect
        variants={draw}
        x={20}
        y={148}
        width={92}
        height={40}
        stroke={INK}
        strokeWidth="1.3"
        fill="none"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.line
          key={i}
          variants={fade}
          x1={28 + i * 17}
          y1={186}
          x2={40 + i * 17}
          y2={150}
          stroke={FAINT}
          strokeWidth="0.9"
        />
      ))}
      <Note x={20} y={206}>LAUNCH TUBE</Note>
      {/* Airframe */}
      <motion.path
        variants={draw}
        d="M150 160 L262 160 L288 168 L262 176 L150 176 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {/* Deployed fins */}
      <motion.path variants={draw} d="M168 160 L150 138" stroke={INK} strokeWidth="1.2" />
      <motion.path variants={draw} d="M168 176 L150 198" stroke={INK} strokeWidth="1.2" />
      <motion.path variants={draw} d="M244 160 L232 146" stroke={INK} strokeWidth="1.1" />
      <motion.path variants={draw} d="M244 176 L232 190" stroke={INK} strokeWidth="1.1" />
      {/* RF broadcast field */}
      {[30, 48, 66].map((r, i) => (
        <motion.path
          key={r}
          variants={draw}
          d={`M ${216 + r * 0.5} ${168 - r * 0.87} A ${r} ${r} 0 0 1 ${216 + r * 0.5} ${168 + r * 0.87}`}
          stroke={accent}
          strokeWidth="1.1"
          strokeDasharray={i === 0 ? undefined : "4 5"}
          opacity={0.85 - i * 0.22}
          fill="none"
        />
      ))}
      <Note x={252} y={120} color={accent}>BROADBAND RF FIELD</Note>
      {/* Severed swarm */}
      {[
        { x: 300, y: 78 },
        { x: 322, y: 104 },
        { x: 306, y: 214 },
        { x: 326, y: 188 },
      ].map((p) => (
        <motion.g key={`${p.x}-${p.y}`} variants={fade}>
          <path
            d={`M${p.x - 5} ${p.y - 5} L${p.x + 5} ${p.y + 5} M${p.x + 5} ${p.y - 5} L${p.x - 5} ${p.y + 5}`}
            stroke={DIM}
            strokeWidth="1.1"
          />
          <line x1={p.x - 9} y1={p.y + 9} x2={p.x + 9} y2={p.y - 9} stroke={accent} strokeWidth="0.9" />
        </motion.g>
      ))}
      <DimH x1={20} x2={112} y={224} label="MAN-PORTABLE" />
    </>
  );
}

function Jet({ accent }: { accent: string }) {
  return (
    <>
      <CenterLine x1={170} y1={10} x2={170} y2={232} />
      {/* Delta planform */}
      <motion.path
        variants={draw}
        d="M170 24 L296 178 L216 178 L206 196 L134 196 L124 178 L44 178 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {/* Nose sensor */}
      <motion.path
        variants={draw}
        d="M170 54 L178 70 L170 86 L162 70 Z"
        stroke={accent}
        strokeWidth="1.2"
        fill="none"
      />
      {/* Intakes */}
      <motion.path variants={draw} d="M150 112 L150 152 M158 116 L158 152" stroke={DIM} strokeWidth="1" />
      <motion.path variants={draw} d="M190 112 L190 152 M182 116 L182 152" stroke={DIM} strokeWidth="1" />
      {/* Elevon hinge lines */}
      <motion.line variants={draw} x1={78} y1={172} x2={140} y2={172} stroke={DIM} strokeWidth="0.9" />
      <motion.line variants={draw} x1={200} y1={172} x2={262} y2={172} stroke={DIM} strokeWidth="0.9" />
      {/* Exhaust */}
      <motion.path variants={draw} d="M156 196 L156 206 M184 196 L184 206" stroke={INK} strokeWidth="1.1" />
      {[164, 170, 176].map((x, i) => (
        <motion.line
          key={x}
          variants={draw}
          x1={x}
          y1={202}
          x2={x}
          y2={213 - i * 3}
          stroke={accent}
          strokeWidth="1.2"
          strokeDasharray="5 4"
        />
      ))}
      <Leader d="M178 70 L254 60" />
      <Note x={258} y={63}>SEEKER / EO NOSE</Note>
      <Note x={170} y={16} anchor="middle" color={accent}>805 KM/H CLASS</Note>
      <DimH x1={44} x2={296} y={220} label="DELTA PLANFORM" />
    </>
  );
}

function Loiter({ accent }: { accent: string }) {
  return (
    <>
      <CenterLine x1={170} y1={18} x2={170} y2={222} />
      {/* Body */}
      <motion.path
        variants={draw}
        d="M170 30 C174 30 176 40 176 52 L175 186 C175 196 173 202 170 202 C167 202 165 196 165 186 L164 52 C164 40 166 30 170 30 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {/* Main wing */}
      <motion.path
        variants={draw}
        d="M64 90 L276 90 L276 97 L64 97 Z"
        stroke={INK}
        strokeWidth="1.2"
        fill="none"
      />
      {/* Tail wing */}
      <motion.path
        variants={draw}
        d="M118 168 L222 168 L222 174 L118 174 Z"
        stroke={INK}
        strokeWidth="1.1"
        fill="none"
      />
      {/* Warhead band */}
      <motion.path variants={draw} d="M164 62 L176 62 M164 74 L176 74" stroke={DIM} strokeWidth="1" />
      <motion.line variants={fade} x1={165} y1={73} x2={175} y2={63} stroke={DIM} strokeWidth="0.8" />
      {/* Seeker */}
      <motion.circle variants={draw} cx={170} cy={42} r={8} stroke={accent} strokeWidth="1.3" fill="none" />
      <motion.path
        variants={draw}
        d="M170 31 L170 36 M170 48 L170 53 M159 42 L164 42 M176 42 L181 42"
        stroke={accent}
        strokeWidth="1"
      />
      <Leader d="M178 42 L252 34" />
      <Note x={256} y={37}>PRECISION SEEKER</Note>
      <DimH x1={64} x2={276} y={216} label="CRUCIFORM — LOITER + STRIKE" />
    </>
  );
}

function Intercept({ accent }: { accent: string }) {
  return (
    <>
      {/* Interceptor quad, lower left */}
      <motion.rect
        variants={draw}
        x={62}
        y={166}
        width={22}
        height={22}
        rx={4}
        stroke={INK}
        strokeWidth="1.2"
        fill="var(--color-void)"
      />
      {[
        { x: 48, y: 152 },
        { x: 98, y: 152 },
        { x: 48, y: 202 },
        { x: 98, y: 202 },
      ].map((p) => (
        <g key={`${p.x}-${p.y}`}>
          <motion.line variants={draw} x1={73} y1={177} x2={p.x} y2={p.y} stroke={INK} strokeWidth="1" />
          <motion.circle
            variants={draw}
            cx={p.x}
            cy={p.y}
            r={11}
            stroke={DIM}
            strokeWidth="0.9"
            strokeDasharray="3 4"
            fill="none"
          />
        </g>
      ))}
      <Note x={40} y={230}>AD-B1 INTERCEPTOR</Note>
      {/* Pursuit vector */}
      <motion.path
        variants={draw}
        d="M96 160 C 150 138 196 110 246 74"
        stroke={accent}
        strokeWidth="1.3"
        strokeDasharray="6 6"
        fill="none"
      />
      <motion.path variants={draw} d="M246 74 L236 76 M246 74 L242 84" stroke={accent} strokeWidth="1.2" />
      <Note x={128} y={106} color={accent}>INTERCEPT VECTOR</Note>
      {/* Hostile UAV */}
      <motion.g variants={fade}>
        <rect x={262} y={52} width={14} height={14} stroke={DIM} strokeWidth="1" fill="none" />
        <path
          d="M262 52 L252 42 M276 52 L286 42 M262 66 L252 76 M276 66 L286 76"
          stroke={DIM}
          strokeWidth="1"
        />
        <rect x={265} y={70} width={8} height={8} stroke={DIM} strokeWidth="0.9" fill="none" />
      </motion.g>
      {/* Target lock */}
      <motion.circle
        variants={draw}
        cx={269}
        cy={59}
        r={26}
        stroke={accent}
        strokeWidth="1"
        strokeDasharray="4 6"
        fill="none"
      />
      <motion.path
        variants={draw}
        d="M269 29 L269 37 M269 81 L269 89 M239 59 L247 59 M291 59 L299 59"
        stroke={accent}
        strokeWidth="1.1"
      />
      <Note x={230} y={110}>HOSTILE UAV — TRACKED</Note>
      <DimH x1={40} x2={300} y={224} label="AUTONOMOUS PURSUIT — NIGHT OPS" />
    </>
  );
}

/* ── Public component ───────────────────────────────────────────────── */

const ACCENTS: Record<string, string> = {
  saffron: "var(--color-saffron)",
  chakra: "var(--color-chakra)",
  leaf: "var(--color-leaf)",
};

export function Schematic({
  type,
  accent = "saffron",
  className = "",
}: {
  type: SchematicType;
  accent?: "saffron" | "chakra" | "leaf";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const color = ACCENTS[accent];

  const body = (() => {
    switch (type) {
      case "hale":
        return <Hale accent={color} />;
      case "interceptor":
        return <Interceptor accent={color} />;
      case "jet":
        return <Jet accent={color} />;
      case "quad":
        return <QuadFrame accent={color} payload="sensor" />;
      case "cargo":
        return <QuadFrame accent={color} payload="cargo" />;
      case "med":
        return <QuadFrame accent={color} payload="med" />;
      case "loiter":
        return <Loiter accent={color} />;
      case "intercept":
        return <Intercept accent={color} />;
    }
  })();

  return (
    <motion.svg
      viewBox="0 0 340 240"
      fill="none"
      aria-hidden
      className={className}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.06 }}
    >
      {body}
    </motion.svg>
  );
}

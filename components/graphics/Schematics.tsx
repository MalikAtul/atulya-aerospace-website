"use client";

/**
 * Engineering line-art schematics for every airframe class.
 * GSAP ScrollTrigger draws the strokes in as each schematic scrolls
 * into view; solid strokes draw on, dashed strokes and labels fade in.
 *
 * data-anim="draw"  → stroke-dash draw-on (solid strokes only)
 * data-anim="fade"  → fade-in (dashed strokes, fills, text, groups)
 * data-winch-*      → the Delhiver/MedFly winch-delivery demo loop
 */

import { useEffect, useRef, type ReactNode } from "react";
import { EASE_OUT, gsap, prefersReducedMotion } from "@/lib/gsap";

export type SchematicType =
  | "hale"
  | "interceptor"
  | "jet"
  | "quad"
  | "loiter"
  | "intercept"
  | "cargo"
  | "med";

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
    <text
      data-anim="fade"
      x={x}
      y={y}
      textAnchor={anchor}
      fill={color}
      fontFamily="var(--font-mono)"
      fontSize="9.5"
      letterSpacing="1.5"
    >
      {children}
    </text>
  );
}

function Leader({ d }: { d: string }) {
  return <path data-anim="fade" d={d} stroke={DIM} strokeWidth="0.8" fill="none" />;
}

/** Horizontal dimension line with end ticks. */
function DimH({ x1, x2, y, label }: { x1: number; x2: number; y: number; label: string }) {
  return (
    <g data-anim="fade">
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
    </g>
  );
}

/** Dash-dot centerline. */
function CenterLine({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      data-anim="fade"
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

/** Rotor disc: dashed swept circle + blade + hub. */
function Rotor({ cx, cy, r = 28 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle
        data-anim="fade"
        cx={cx}
        cy={cy}
        r={r}
        stroke={DIM}
        strokeWidth="1"
        strokeDasharray="4 5"
        fill="none"
      />
      <line data-anim="draw" x1={cx - r + 7} y1={cy} x2={cx + r - 7} y2={cy} stroke={INK} strokeWidth="1.1" />
      <circle data-anim="fade" cx={cx} cy={cy} r={3} fill={INK} />
    </g>
  );
}

/* ── Airframes ──────────────────────────────────────────────────────── */

/** AD-C1 chem-detect quadcopter — design intentionally unchanged. */
function QuadFrame({ accent }: { accent: string }) {
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
        <line
          key={`${r.x}-${r.y}`}
          data-anim="draw"
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
      <rect
        data-anim="draw"
        x={146}
        y={96}
        width={48}
        height={48}
        rx={8}
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {/* Sensor payload */}
      <rect
        data-anim="fade"
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
      <line data-anim="draw" x1={160} y1={96} x2={152} y2={80} stroke={accent} strokeWidth="1.1" />
      <line data-anim="draw" x1={180} y1={96} x2={188} y2={80} stroke={accent} strokeWidth="1.1" />
      <Leader d="M182 120 L244 120" />
      <Note x={248} y={116}>SENSOR</Note>
      <Note x={248} y={128}>ARRAY</Note>
    </>
  );
}

/**
 * Delhiver / MedFly airframe — VTOL fixed-wing tiltrotor, front elevation.
 * Two wing-tip nacelles tilt between hover (rotors up) and cruise (rotors
 * forward); a sealed payload pod winches down for delivery and retracts
 * after OTP verification.
 */
function Tiltrotor({ accent, payload }: { accent: string; payload: "cargo" | "med" }) {
  return (
    <>
      {/* Fixed wing */}
      <path
        data-anim="draw"
        d="M48 82 L292 82 L292 89 L48 89 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="none"
      />

      {/* Left nacelle — HOVER: rotor disc up */}
      <rect
        data-anim="draw"
        x={54}
        y={68}
        width={16}
        height={34}
        rx={5}
        stroke={INK}
        strokeWidth="1.2"
        fill="var(--color-void)"
      />
      <line data-anim="draw" x1={62} y1={68} x2={62} y2={60} stroke={INK} strokeWidth="1.1" />
      <ellipse
        data-anim="fade"
        cx={62}
        cy={58}
        rx={27}
        ry={5.5}
        stroke={DIM}
        strokeWidth="1"
        strokeDasharray="4 5"
        fill="none"
      />
      <line data-anim="draw" x1={38} y1={58} x2={86} y2={58} stroke={INK} strokeWidth="1.1" />
      <circle data-anim="fade" cx={62} cy={58} r={2.4} fill={INK} />
      <circle data-anim="fade" cx={62} cy={85.5} r={2.4} fill={accent} />

      {/* Right nacelle — CRUISE: rotor disc forward */}
      <rect
        data-anim="draw"
        x={262}
        y={77.5}
        width={34}
        height={16}
        rx={5}
        stroke={INK}
        strokeWidth="1.2"
        fill="var(--color-void)"
      />
      <circle
        data-anim="fade"
        cx={279}
        cy={85.5}
        r={23}
        stroke={DIM}
        strokeWidth="1"
        strokeDasharray="4 5"
        fill="none"
      />
      <line data-anim="draw" x1={260} y1={85.5} x2={298} y2={85.5} stroke={INK} strokeWidth="1.1" />
      <circle data-anim="fade" cx={279} cy={85.5} r={2.4} fill={INK} />
      <circle data-anim="fade" cx={279} cy={85.5} r={5} stroke={accent} strokeWidth="1" fill="none" />

      {/* Tilt arc: hover position → cruise position */}
      <path
        data-anim="draw"
        d="M279 52 A 32 32 0 0 1 311 84"
        stroke={accent}
        strokeWidth="1.1"
        fill="none"
      />
      <path data-anim="draw" d="M311 84 L305 77 M311 84 L303 87" stroke={accent} strokeWidth="1.1" />

      {/* Tail fin + fuselage */}
      <path data-anim="draw" d="M165 70 L170 50 L175 70" stroke={INK} strokeWidth="1.2" fill="none" />
      <path
        data-anim="draw"
        d="M170 64 C181 64 186 70 186 78 L186 118 C186 127 181 132 170 132 C159 132 154 127 154 118 L154 78 C154 70 159 64 170 64 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />

      {/* Winch cable + sealed payload pod */}
      <line
        data-anim="draw"
        data-winch-cable
        x1={170}
        y1={132}
        x2={170}
        y2={160}
        stroke={accent}
        strokeWidth="1.1"
      />
      <g data-winch-pod>
        <rect
          data-anim="draw"
          x={152}
          y={160}
          width={36}
          height={28}
          rx={3}
          stroke={accent}
          strokeWidth="1.3"
          fill="var(--color-void)"
        />
        {payload === "cargo" ? (
          <path
            data-anim="draw"
            d="M170 160 L170 188 M152 174 L188 174"
            stroke={accent}
            strokeWidth="0.9"
          />
        ) : (
          <path
            data-anim="draw"
            d="M170 166 L170 182 M162 174 L178 174"
            stroke={accent}
            strokeWidth="1.6"
          />
        )}
      </g>

      {/* Deploy / retract arrows */}
      <path
        data-anim="fade"
        d="M196 138 L196 152 M196 152 L192.5 147.5 M196 152 L199.5 147.5"
        stroke={DIM}
        strokeWidth="1"
      />
      <path
        data-anim="fade"
        d="M206 152 L206 138 M206 138 L202.5 142.5 M206 138 L209.5 142.5"
        stroke={DIM}
        strokeWidth="1"
      />

      {/* Ground datum */}
      <line
        data-anim="fade"
        x1={40}
        y1={212}
        x2={300}
        y2={212}
        stroke={FAINT}
        strokeWidth="1"
        strokeDasharray="2 6"
      />

      {/* Annotations */}
      <Note x={24} y={34}>HOVER MODE</Note>
      <Note x={24} y={46}>ROTORS UP</Note>
      <Note x={316} y={34} anchor="end">CRUISE MODE</Note>
      <Note x={316} y={46} anchor="end">ROTORS FWD</Note>
      <Note x={316} y={124} anchor="end" color={accent}>2× TILT NACELLES</Note>
      <Leader d="M188 168 L196 162" />
      <g data-winch-otp>
        <Note x={200} y={158} color={accent}>OTP-VERIFIED</Note>
        <Note x={200} y={170}>RELEASE + RETRACT</Note>
      </g>
      <Note x={200} y={190}>
        {payload === "med" ? "COLD-CHAIN · 2–8°C" : "SEALED PAYLOAD POD"}
      </Note>
      <DimH
        x1={48}
        x2={292}
        y={226}
        label={payload === "med" ? "VTOL TILTROTOR — LIFELINE" : "VTOL TILTROTOR — FIXED WING"}
      />
    </>
  );
}

function Hale({ accent }: { accent: string }) {
  return (
    <>
      <CenterLine x1={170} y1={16} x2={170} y2={210} />
      {/* Wing */}
      <path
        data-anim="draw"
        d="M26 98 L132 91 L208 91 L314 98 L314 104 L208 108 L132 108 L26 104 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="none"
      />
      {/* Winglets */}
      <path data-anim="draw" d="M26 98 L18 88" stroke={INK} strokeWidth="1.2" />
      <path data-anim="draw" d="M314 98 L322 88" stroke={INK} strokeWidth="1.2" />
      {/* Fuselage */}
      <path
        data-anim="draw"
        d="M170 28 C176 28 178 38 178 50 L177 156 C177 166 174 172 170 172 C166 172 163 166 163 156 L162 50 C162 38 164 28 170 28 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {/* Tailplane */}
      <path
        data-anim="draw"
        d="M136 166 L204 166 L198 176 L142 176 Z"
        stroke={INK}
        strokeWidth="1.2"
        fill="none"
      />
      {/* Pusher prop */}
      <circle
        data-anim="fade"
        cx={170}
        cy={188}
        r={15}
        stroke={DIM}
        strokeWidth="1"
        strokeDasharray="4 5"
        fill="none"
      />
      <line data-anim="draw" x1={159} y1={188} x2={181} y2={188} stroke={INK} strokeWidth="1.1" />
      {/* Sensor turret */}
      <circle data-anim="draw" cx={170} cy={62} r={7} stroke={accent} strokeWidth="1.3" fill="none" />
      <circle data-anim="fade" cx={170} cy={62} r={2} fill={accent} />
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
      <rect
        data-anim="draw"
        x={20}
        y={148}
        width={92}
        height={40}
        stroke={INK}
        strokeWidth="1.3"
        fill="none"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          data-anim="fade"
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
      <path
        data-anim="draw"
        d="M150 160 L262 160 L288 168 L262 176 L150 176 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {/* Deployed fins */}
      <path data-anim="draw" d="M168 160 L150 138" stroke={INK} strokeWidth="1.2" />
      <path data-anim="draw" d="M168 176 L150 198" stroke={INK} strokeWidth="1.2" />
      <path data-anim="draw" d="M244 160 L232 146" stroke={INK} strokeWidth="1.1" />
      <path data-anim="draw" d="M244 176 L232 190" stroke={INK} strokeWidth="1.1" />
      {/* RF broadcast field */}
      {[30, 48, 66].map((r, i) => (
        <path
          key={r}
          data-anim={i === 0 ? "draw" : "fade"}
          d={`M ${216 + r * 0.5} ${168 - r * 0.87} A ${r} ${r} 0 0 1 ${216 + r * 0.5} ${168 + r * 0.87}`}
          stroke={accent}
          strokeWidth="1.1"
          strokeDasharray={i === 0 ? undefined : "4 5"}
          opacity={0.85 - i * 0.22}
          fill="none"
        />
      ))}
      <Note x={336} y={120} anchor="end" color={accent}>BROADBAND RF FIELD</Note>
      {/* Severed swarm */}
      {[
        { x: 300, y: 78 },
        { x: 322, y: 104 },
        { x: 306, y: 214 },
        { x: 326, y: 188 },
      ].map((p) => (
        <g key={`${p.x}-${p.y}`} data-anim="fade">
          <path
            d={`M${p.x - 5} ${p.y - 5} L${p.x + 5} ${p.y + 5} M${p.x + 5} ${p.y - 5} L${p.x - 5} ${p.y + 5}`}
            stroke={DIM}
            strokeWidth="1.1"
          />
          <line x1={p.x - 9} y1={p.y + 9} x2={p.x + 9} y2={p.y - 9} stroke={accent} strokeWidth="0.9" />
        </g>
      ))}
      <DimH x1={20} x2={112} y={224} label="MAN-PORTABLE" />
    </>
  );
}

/**
 * AD-J1 — cranked-delta strike platform, top-down planform.
 * Sharp fighter nose, chines curving into the body, full delta
 * from the leading-edge crank back to the tail.
 */
function CrankedDelta({ accent }: { accent: string }) {
  return (
    <>
      <CenterLine x1={170} y1={10} x2={170} y2={216} />
      {/* Planform */}
      <path
        data-anim="draw"
        d="M170 20
           C 175 42 183 78 194 112
           L 306 186 L 306 193
           L 205 193 L 197 206
           L 143 206 L 135 193
           L 34 193 L 34 186
           L 146 112
           C 157 78 165 42 170 20 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {/* Fuselage lines flowing into the wing */}
      <path data-anim="draw" d="M160 70 C158 110 157 150 156 193" stroke={DIM} strokeWidth="0.9" fill="none" />
      <path data-anim="draw" d="M180 70 C182 110 183 150 184 193" stroke={DIM} strokeWidth="0.9" fill="none" />
      {/* Leading-edge crank markers */}
      <circle data-anim="fade" cx={194} cy={112} r={3} stroke={DIM} strokeWidth="0.9" fill="none" />
      <circle data-anim="fade" cx={146} cy={112} r={3} stroke={DIM} strokeWidth="0.9" fill="none" />
      <Leader d="M197 110 L240 84" />
      <Note x={244} y={81}>LE CRANK</Note>
      {/* Nose seeker */}
      <path
        data-anim="draw"
        d="M170 46 L177 62 L170 78 L163 62 Z"
        stroke={accent}
        strokeWidth="1.2"
        fill="none"
      />
      {/* Intakes at the wing-body junction */}
      <path data-anim="draw" d="M150 118 L142 150 M156 120 L150 150" stroke={DIM} strokeWidth="1" />
      <path data-anim="draw" d="M190 118 L198 150 M184 120 L190 150" stroke={DIM} strokeWidth="1" />
      {/* Elevon hinge lines */}
      <line data-anim="draw" x1={48} y1={185} x2={128} y2={185} stroke={DIM} strokeWidth="0.9" />
      <line data-anim="draw" x1={212} y1={185} x2={292} y2={185} stroke={DIM} strokeWidth="0.9" />
      {/* Exhaust */}
      <path data-anim="draw" d="M155 206 L155 214 M185 206 L185 214" stroke={INK} strokeWidth="1.1" />
      {[163, 170, 177].map((x, i) => (
        <line
          key={x}
          data-anim="fade"
          x1={x}
          y1={210}
          x2={x}
          y2={223 - i * 3}
          stroke={accent}
          strokeWidth="1.2"
          strokeDasharray="5 4"
        />
      ))}
      <Leader d="M177 62 L216 55" />
      <Note x={336} y={58} anchor="end">SEEKER / EO NOSE</Note>
      <Note x={170} y={16} anchor="middle" color={accent}>805 KM/H CLASS</Note>
      <DimH x1={34} x2={306} y={224} label="CRANKED DELTA PLANFORM" />
    </>
  );
}

function Loiter({ accent }: { accent: string }) {
  return (
    <>
      <CenterLine x1={170} y1={18} x2={170} y2={222} />
      {/* Body */}
      <path
        data-anim="draw"
        d="M170 30 C174 30 176 40 176 52 L175 186 C175 196 173 202 170 202 C167 202 165 196 165 186 L164 52 C164 40 166 30 170 30 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {/* Main wing */}
      <path
        data-anim="draw"
        d="M64 90 L276 90 L276 97 L64 97 Z"
        stroke={INK}
        strokeWidth="1.2"
        fill="none"
      />
      {/* Tail wing */}
      <path
        data-anim="draw"
        d="M118 168 L222 168 L222 174 L118 174 Z"
        stroke={INK}
        strokeWidth="1.1"
        fill="none"
      />
      {/* Warhead band */}
      <path data-anim="draw" d="M164 62 L176 62 M164 74 L176 74" stroke={DIM} strokeWidth="1" />
      <line data-anim="fade" x1={165} y1={73} x2={175} y2={63} stroke={DIM} strokeWidth="0.8" />
      {/* Seeker */}
      <circle data-anim="draw" cx={170} cy={42} r={8} stroke={accent} strokeWidth="1.3" fill="none" />
      <path
        data-anim="draw"
        d="M170 31 L170 36 M170 48 L170 53 M159 42 L164 42 M176 42 L181 42"
        stroke={accent}
        strokeWidth="1"
      />
      <Leader d="M178 42 L214 35" />
      <Note x={336} y={38} anchor="end">PRECISION SEEKER</Note>
      <DimH x1={64} x2={276} y={216} label="CRUCIFORM — LOITER + STRIKE" />
    </>
  );
}

/**
 * AD-B1 border interdictor — tube-launched, rocket-bodied interceptor
 * with four motors mounted symmetrically at the tail like fins.
 * Side profile plus an aft-section detail showing the 4× motor ring.
 */
function RocketInterdictor({ accent }: { accent: string }) {
  return (
    <>
      {/* Launch tube */}
      <rect
        data-anim="draw"
        x={18}
        y={150}
        width={78}
        height={36}
        stroke={INK}
        strokeWidth="1.3"
        fill="none"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          data-anim="fade"
          x1={26 + i * 14}
          y1={184}
          x2={36 + i * 14}
          y2={152}
          stroke={FAINT}
          strokeWidth="0.9"
        />
      ))}
      <Note x={18} y={204}>LAUNCH TUBE</Note>
      {/* Launch motion streaks */}
      <path
        data-anim="draw"
        d="M100 160 L114 160 M100 168 L120 168 M100 176 L114 176"
        stroke={accent}
        strokeWidth="1"
        opacity={0.6}
      />

      {/* Cylindrical rocket fuselage with ogive nose */}
      <path
        data-anim="draw"
        d="M136 152 L254 152 C 272 153.5 284 160 291 168 C 284 176 272 182.5 254 182 L136 182 C 131 182 128 176 128 168 C 128 160 131 152 136 152 Z"
        stroke={INK}
        strokeWidth="1.3"
        fill="var(--color-void)"
      />
      {/* Body panel seams */}
      <line data-anim="draw" x1={200} y1={152} x2={200} y2={182} stroke={DIM} strokeWidth="0.9" />
      <line data-anim="draw" x1={228} y1={152} x2={228} y2={182} stroke={DIM} strokeWidth="0.9" />
      {/* Seeker nose */}
      <circle data-anim="draw" cx={278} cy={168} r={4.5} stroke={accent} strokeWidth="1.2" fill="none" />
      <Leader d="M281 173 L302 194" />
      <Note x={336} y={205} anchor="end">SEEKER NOSE</Note>

      {/* Tail motor fins — top & bottom visible in profile */}
      <path data-anim="draw" d="M138 152 L132 130 L156 130 L150 152 Z" stroke={INK} strokeWidth="1.1" fill="none" />
      <rect data-anim="draw" x={130} y={122} width={28} height={8} rx={3} stroke={INK} strokeWidth="1.1" fill="var(--color-void)" />
      <ellipse data-anim="fade" cx={160} cy={126} rx={2.8} ry={9} stroke={DIM} strokeWidth="1" strokeDasharray="3 3" fill="none" />
      <circle data-anim="fade" cx={160} cy={126} r={1.6} fill={INK} />
      <path data-anim="draw" d="M138 182 L132 204 L156 204 L150 182 Z" stroke={INK} strokeWidth="1.1" fill="none" />
      <rect data-anim="draw" x={130} y={204} width={28} height={8} rx={3} stroke={INK} strokeWidth="1.1" fill="var(--color-void)" />
      <ellipse data-anim="fade" cx={160} cy={208} rx={2.8} ry={9} stroke={DIM} strokeWidth="1" strokeDasharray="3 3" fill="none" />
      <circle data-anim="fade" cx={160} cy={208} r={1.6} fill={INK} />

      {/* Aft-section detail — 4× motors ringed like fins */}
      <circle
        data-anim="fade"
        cx={272}
        cy={62}
        r={40}
        stroke={DIM}
        strokeWidth="0.9"
        strokeDasharray="4 6"
        fill="none"
      />
      <circle data-anim="draw" cx={272} cy={62} r={10} stroke={INK} strokeWidth="1.1" fill="var(--color-void)" />
      {[45, 135, 225, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const x1 = 272 + 10 * cos;
        const y1 = 62 - 10 * sin;
        const mx = 272 + 30 * cos;
        const my = 62 - 30 * sin;
        return (
          <g key={deg}>
            <line data-anim="draw" x1={x1} y1={y1} x2={mx} y2={my} stroke={INK} strokeWidth="1" />
            <circle data-anim="draw" cx={mx} cy={my} r={7} stroke={accent} strokeWidth="1.1" fill="none" />
            <circle data-anim="fade" cx={mx} cy={my} r={1.8} fill={INK} />
          </g>
        );
      })}
      <Leader d="M152 120 L230 68" />
      <Note x={250} y={118} anchor="middle">AFT SECTION — 4× MOTORS</Note>

      <DimH x1={128} x2={291} y={224} label="TUBE-LAUNCHED INTERDICTOR" />
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
  const ref = useRef<SVGSVGElement>(null);
  const color = ACCENTS[accent];

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    if (prefersReducedMotion()) {
      gsap.set(svg, { autoAlpha: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      const drawEls = Array.from(svg.querySelectorAll<SVGGeometryElement>('[data-anim="draw"]'));
      const fadeEls = svg.querySelectorAll<SVGElement>('[data-anim="fade"]');

      gsap.set(svg, { y: 28 });
      drawEls.forEach((el) => {
        const len = el.getTotalLength();
        gsap.set(el, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 });
      });
      if (fadeEls.length) gsap.set(fadeEls, { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: svg, start: "top 85%", once: true },
        defaults: { ease: "power2.out" },
      });
      tl.to(svg, { autoAlpha: 1, y: 0, duration: 0.7, ease: EASE_OUT })
        .to(drawEls, { strokeDashoffset: 0, opacity: 1, duration: 1.05, stagger: 0.055 }, "-=0.3")
        .to(fadeEls, { autoAlpha: 1, duration: 0.5, stagger: 0.035 }, "-=0.75");

      // Winch delivery demo — lower the pod, verify OTP, retract.
      const pod = svg.querySelector("[data-winch-pod]");
      const cable = svg.querySelector("[data-winch-cable]");
      if (pod && cable) {
        const otp = svg.querySelector("[data-winch-otp]");
        const restY2 = Number(cable.getAttribute("y2"));
        const drop = 24;
        const loop = gsap.timeline({
          repeat: -1,
          repeatDelay: 2.4,
          paused: true,
          defaults: { ease: "power2.inOut" },
        });
        loop
          .to(pod, { y: drop, duration: 1.5 })
          .to(cable, { attr: { y2: restY2 + drop }, duration: 1.5 }, "<");
        if (otp) {
          loop.fromTo(
            otp,
            { autoAlpha: 1 },
            { autoAlpha: 0.25, duration: 0.3, repeat: 5, yoyo: true },
            ">+0.3",
          );
        }
        loop
          .to(pod, { y: 0, duration: 1.3, delay: 0.4 })
          .to(cable, { attr: { y2: restY2 }, duration: 1.3 }, "<");
        tl.add(() => {
          // The reveal leaves a stroke-dash sized to the resting cable;
          // clear it so the lowered section of cable stays visible.
          gsap.set(cable, { clearProps: "strokeDasharray,strokeDashoffset" });
          loop.play();
        });
      }
    }, svg);
    return () => ctx.revert();
  }, [type]);

  const body = (() => {
    switch (type) {
      case "hale":
        return <Hale accent={color} />;
      case "interceptor":
        return <Interceptor accent={color} />;
      case "jet":
        return <CrankedDelta accent={color} />;
      case "quad":
        return <QuadFrame accent={color} />;
      case "cargo":
        return <Tiltrotor accent={color} payload="cargo" />;
      case "med":
        return <Tiltrotor accent={color} payload="med" />;
      case "loiter":
        return <Loiter accent={color} />;
      case "intercept":
        return <RocketInterdictor accent={color} />;
    }
  })();

  return (
    <svg
      ref={ref}
      viewBox="0 0 340 240"
      fill="none"
      aria-hidden
      className={className}
      style={{ opacity: 0 }}
    >
      {body}
    </svg>
  );
}

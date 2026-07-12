/**
 * Hero radar scope — pure CSS/SVG animation, renders on the server.
 * Contacts on the scope are the three divisions' airframes.
 */

const C = 280; // center
const R = 264; // outer radius

const TICKS = Array.from({ length: 72 }, (_, i) => i * 5);

const CONTACTS = [
  { x: 388, y: 132, label: "AD-H1", cls: "PATROL", color: "var(--color-saffron)", delay: "0s" },
  { x: 172, y: 388, label: "MF-07", cls: "LIFELINE", color: "var(--color-leaf)", delay: "0.9s" },
  { x: 402, y: 336, label: "DLV-114", cls: "DELIVERY", color: "var(--color-chakra)", delay: "1.7s" },
  { x: 150, y: 180, label: "AD-S1", cls: "READY", color: "var(--color-saffron)", delay: "2.4s" },
] as const;

function polar(angleDeg: number, radius: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: C + radius * Math.cos(a), y: C + radius * Math.sin(a) };
}

export function RadarScope({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square w-full select-none ${className}`} aria-hidden>
      <svg viewBox="0 0 560 560" className="h-full w-full" fill="none">
        <defs>
          <radialGradient id="scope-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,142,31,0.05)" />
            <stop offset="62%" stopColor="rgba(11,13,18,0.0)" />
            <stop offset="100%" stopColor="rgba(6,7,10,0)" />
          </radialGradient>
          <linearGradient id="sweep-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,142,31,0)" />
            <stop offset="100%" stopColor="rgba(255,142,31,0.22)" />
          </linearGradient>
          <clipPath id="scope-clip">
            <circle cx={C} cy={C} r={R} />
          </clipPath>
        </defs>

        {/* Face */}
        <circle cx={C} cy={C} r={R} fill="url(#scope-bg)" stroke="var(--color-line-strong)" />
        <circle cx={C} cy={C} r={198} stroke="var(--color-line)" />
        <circle cx={C} cy={C} r={132} stroke="var(--color-line)" />
        <circle cx={C} cy={C} r={66} stroke="var(--color-line)" />

        {/* Axes */}
        <line x1={C} y1={C - R} x2={C} y2={C + R} stroke="var(--color-line)" />
        <line x1={C - R} y1={C} x2={C + R} y2={C} stroke="var(--color-line)" />

        {/* Degree ticks */}
        <g stroke="rgba(237,239,242,0.3)">
          {TICKS.map((deg) => {
            const major = deg % 30 === 0;
            const p1 = polar(deg, R);
            const p2 = polar(deg, R - (major ? 14 : 7));
            return (
              <line
                key={deg}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                strokeWidth={major ? 1.4 : 0.8}
                opacity={major ? 0.75 : 0.4}
              />
            );
          })}
        </g>

        {/* Bearing labels */}
        <g
          fill="rgba(237,239,242,0.45)"
          fontFamily="var(--font-mono)"
          fontSize="11"
          textAnchor="middle"
        >
          <text x={C} y={C - R + 32}>000</text>
          <text x={C + R - 36} y={C + 20}>090</text>
          <text x={C} y={C + R - 22}>180</text>
          <text x={C - R + 36} y={C + 20}>270</text>
        </g>

        {/* Range labels */}
        <g
          fill="rgba(237,239,242,0.35)"
          fontFamily="var(--font-mono)"
          fontSize="10"
        >
          <text x={C + 70} y={C - 8}>25</text>
          <text x={C + 136} y={C - 8}>50</text>
          <text x={C + 202} y={C - 8}>75 KM</text>
        </g>

        {/* Rotating sweep */}
        <g clipPath="url(#scope-clip)">
          <g
            className="animate-sweep"
            style={{ transformOrigin: "280px 280px" }}
          >
            <path
              d={`M ${C} ${C} L ${C} ${C - R} A ${R} ${R} 0 0 1 ${polar(42, R).x} ${polar(42, R).y} Z`}
              fill="url(#sweep-grad)"
            />
            <line x1={C} y1={C} x2={C} y2={C - R} stroke="rgba(255,142,31,0.7)" strokeWidth="1.4" />
          </g>
        </g>

        {/* Flight corridor to the delivery contact */}
        <line
          x1={C}
          y1={C}
          x2={402}
          y2={336}
          stroke="rgba(77,163,255,0.5)"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          className="animate-dash-flow"
        />

        {/* Contacts */}
        {CONTACTS.map((c) => (
          <g key={c.label}>
            <circle
              cx={c.x}
              cy={c.y}
              r={13}
              stroke={c.color}
              strokeWidth="1"
              opacity="0.55"
              className="animate-blip"
              style={{ animationDelay: c.delay, transformOrigin: `${c.x}px ${c.y}px` }}
            />
            <circle cx={c.x} cy={c.y} r={3.4} fill={c.color} />
            <text
              x={c.x + 18}
              y={c.y - 2}
              fill="rgba(237,239,242,0.85)"
              fontFamily="var(--font-mono)"
              fontSize="11.5"
              fontWeight="600"
            >
              {c.label}
            </text>
            <text
              x={c.x + 18}
              y={c.y + 12}
              fill="rgba(237,239,242,0.4)"
              fontFamily="var(--font-mono)"
              fontSize="9.5"
            >
              {c.cls}
            </text>
          </g>
        ))}

        {/* Home plate */}
        <g>
          <path d="M280 268 L289 288 L280 283.5 L271 288 Z" fill="var(--color-saffron)" />
          <text
            x={C}
            y={C + 34}
            textAnchor="middle"
            fill="rgba(237,239,242,0.6)"
            fontFamily="var(--font-mono)"
            fontSize="10.5"
            letterSpacing="2"
          >
            GOHANA HUB
          </text>
        </g>
      </svg>
    </div>
  );
}

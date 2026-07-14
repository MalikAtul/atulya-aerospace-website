import Link from "next/link";
import { DIVISIONS, HERO } from "@/lib/content";

const BAR_COLOR: Record<string, string> = {
  defense: "bg-defense",
  deliver: "bg-deliver",
  medfly: "bg-medfly",
};

/** Engineering crosshair system behind the wordmark — light gray, no glow. */
function Crosshair() {
  return (
    <svg
      viewBox="0 0 800 800"
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 h-[135vmin] w-[135vmin] -translate-x-1/2 -translate-y-1/2"
      fill="none"
      stroke="#E8E8E8"
    >
      <circle cx="400" cy="400" r="300" />
      <circle cx="400" cy="400" r="216" strokeDasharray="4 8" />
      <line x1="400" y1="0" x2="400" y2="310" />
      <line x1="400" y1="490" x2="400" y2="800" />
      <line x1="0" y1="400" x2="310" y2="400" />
      <line x1="490" y1="400" x2="800" y2="400" />
      {[0, 90, 180, 270].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 400 400)`}>
          <line x1="400" y1="100" x2="400" y2="118" strokeWidth="2" />
        </g>
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero" data-hero className="relative overflow-hidden bg-base bg-blueprint" aria-label="Introduction">
      <Crosshair />

      <div className="container-x relative flex min-h-svh flex-col pt-[72px]">
        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <h1 className="display text-[clamp(3.2rem,11vw,8.5rem)] text-sovereign animate-rise">
            <span className="block">{HERO.title[0]}</span>
            <span className="block">{HERO.title[1]}</span>
          </h1>

          <p
            className="display mt-6 text-[clamp(1.35rem,3.4vw,2.4rem)] text-strike animate-rise"
            style={{ animationDelay: "0.15s" }}
          >
            {HERO.punch}
          </p>

          <p
            className="mt-6 text-[1rem] text-slate md:text-[1.1rem] animate-rise"
            style={{ animationDelay: "0.3s" }}
          >
            {HERO.sub}
          </p>
        </div>

        <nav
          className="flex items-start justify-center gap-6 pb-12 sm:gap-10 animate-rise"
          style={{ animationDelay: "0.45s" }}
          aria-label="Divisions"
        >
          {DIVISIONS.map((d) => (
            <Link key={d.code} href={`/#${d.anchor}`} className="group flex flex-col items-center gap-3">
              <span
                aria-hidden
                className={`h-1.5 w-16 transition-transform duration-300 group-hover:scale-x-110 sm:w-24 ${BAR_COLOR[d.accent]}`}
              />
              <span className="label-sm text-slate">{d.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

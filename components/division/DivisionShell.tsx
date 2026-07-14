import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Schematic, type SchematicType } from "@/components/graphics/Schematics";
import { DIVISIONS, type DivisionAccent } from "@/lib/content";

export const ACCENT_VAR: Record<DivisionAccent, string> = {
  defense: "var(--color-defense)",
  deliver: "var(--color-deliver)",
  medfly: "var(--color-medfly)",
};

export const ACCENT_TEXT: Record<DivisionAccent, string> = {
  defense: "text-defense",
  deliver: "text-deliver",
  medfly: "text-medfly",
};

export const ACCENT_BG: Record<DivisionAccent, string> = {
  defense: "bg-defense",
  deliver: "bg-deliver",
  medfly: "bg-medfly",
};

/* ── Hero ───────────────────────────────────────────────────────────── */

export function DivisionHero({
  code,
  title,
  accent,
  sector,
  status,
  tagline,
  statement,
  chips,
  schematic,
}: {
  code: string;
  title: string;
  accent: DivisionAccent;
  sector: string;
  status: string;
  tagline: string;
  statement: string;
  chips: readonly string[];
  schematic: SchematicType;
}) {
  const accentVar = ACCENT_VAR[accent];
  return (
    <section
      data-hero
      className="relative overflow-hidden border-b border-line bg-base bg-blueprint"
      aria-label={`${title} overview`}
    >
      <div className="container-x relative grid items-center gap-14 pb-16 pt-32 md:pb-24 lg:min-h-[88svh] lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="label-sm flex flex-wrap items-center gap-x-3 gap-y-2 text-slate">
              <Link href="/" className="transition-colors hover:text-sovereign">
                Atulya Aerospace
              </Link>
              <span aria-hidden>/</span>
              <span style={{ color: accentVar }}>Division {code}</span>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display mt-7 text-[clamp(2.8rem,8vw,6rem)]">
              <span className="block text-sovereign">Atulya</span>
              <span className="block" style={{ color: accentVar }}>
                {title}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-[clamp(1.1rem,2.2vw,1.4rem)] font-semibold leading-snug text-slate">
              {tagline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-slate">{statement}</p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap gap-2.5">
              {chips.map((chip) => (
                <span key={chip} className="label-sm border border-line bg-base px-4 py-2.5 text-slate">
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <p className="label-sm text-slate">
                Sector <span className="ml-2 text-onyx">{sector}</span>
              </p>
              <p className="label-sm text-slate">
                Status{" "}
                <span className="ml-2" style={{ color: accentVar }}>
                  {status}
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mx-auto w-full max-w-[540px]">
          <div className="relative border border-line bg-base p-6 md:p-10">
            <span aria-hidden className="absolute inset-x-[-1px] top-[-1px] h-[4px]" style={{ background: accentVar }} />
            <Schematic type={schematic} className="w-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Closing CTA + next-division link ───────────────────────────────── */

export function DivisionCTA({ current }: { current: string }) {
  const idx = DIVISIONS.findIndex((d) => d.slug === current);
  const next = DIVISIONS[(idx + 1) % DIVISIONS.length];
  return (
    <section className="bg-sovereign" aria-label="Engage">
      <div className="container-x flex flex-col items-start gap-10 py-24 md:py-28">
        <div>
          <p className="label-sm text-white/70">Engage</p>
          <h2 className="display mt-5 text-[clamp(2rem,5vw,3.6rem)] text-white">
            Built in India. For India. Beginning Now.
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/#contact"
            className="inline-block bg-strike px-9 py-4 text-[0.95rem] font-semibold text-white transition-colors duration-300 hover:bg-strike-deep"
          >
            Get In Touch
          </Link>
          <Link
            href={next.slug}
            className="label-sm inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-white transition-colors duration-300 hover:border-white"
          >
            Next Division — {next.name}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Numbered step row (flows, pathways) ────────────────────────────── */

export function StepGrid({
  steps,
  accent,
  columnsClass = "md:grid-cols-4",
}: {
  steps: readonly { label: string; text: string }[];
  accent: DivisionAccent;
  columnsClass?: string;
}) {
  return (
    <div className={`grid gap-px border border-line bg-line ${columnsClass}`}>
      {steps.map((s, i) => (
        <div key={s.label} className="relative bg-base p-7 md:p-8">
          <div className="flex items-center justify-between">
            <p className={`display text-[1.1rem] ${ACCENT_TEXT[accent]}`}>
              {String(i + 1).padStart(2, "0")}
            </p>
            {i < steps.length - 1 && (
              <span aria-hidden className="hidden text-slate md:block">→</span>
            )}
          </div>
          <p className="label mt-5 text-onyx">{s.label}</p>
          <p className="mt-3 text-[0.87rem] leading-relaxed text-slate">{s.text}</p>
        </div>
      ))}
    </div>
  );
}

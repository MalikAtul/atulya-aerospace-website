import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Schematic, type SchematicType } from "@/components/graphics/Schematics";
import { HudFrame } from "@/components/ui/HudFrame";
import { DIVISIONS } from "@/lib/content";

export type DivisionAccent = "saffron" | "chakra" | "leaf";

export const ACCENT_VAR: Record<DivisionAccent, string> = {
  saffron: "var(--color-saffron)",
  chakra: "var(--color-chakra)",
  leaf: "var(--color-leaf)",
};

export const ACCENT_TEXT: Record<DivisionAccent, string> = {
  saffron: "text-saffron",
  chakra: "text-chakra",
  leaf: "text-leaf",
};

export const ACCENT_BG: Record<DivisionAccent, string> = {
  saffron: "bg-saffron",
  chakra: "bg-chakra",
  leaf: "bg-leaf",
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
    <section className="relative overflow-hidden border-b border-line bg-blueprint" aria-label={`${title} overview`}>
      <div className="container-x relative grid items-center gap-14 pb-16 pt-36 md:pb-24 lg:min-h-[92svh] lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="label-sm flex flex-wrap items-center gap-x-3 gap-y-2 text-dim">
              <Link href="/" className="text-faint transition-colors hover:text-ink">
                Atulya Aerospace
              </Link>
              <span aria-hidden className="text-faint">/</span>
              <span style={{ color: accentVar }}>Division {code}</span>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display mt-7 text-[clamp(3rem,9vw,7.2rem)]">
              <span className="block text-outline">Atulya</span>
              <span className="block">{title}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="display mt-6 max-w-2xl text-[clamp(1.15rem,2.4vw,1.6rem)] normal-case tracking-normal text-dim">
              {tagline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-dim">{statement}</p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap gap-2.5">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="label-sm border border-line px-4 py-2.5 text-dim"
                  style={{ borderColor: "var(--color-line)", color: "var(--color-dim)" }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <p className="label-sm text-faint">
                Sector <span className="ml-2 text-ink">{sector}</span>
              </p>
              <p className="label-sm text-faint">
                Status{" "}
                <span className="ml-2" style={{ color: accentVar }}>
                  {status}
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mx-auto w-full max-w-[540px]">
          <HudFrame accent={`color-mix(in srgb, ${accentVar} 55%, transparent)`} size={18} className="bg-void/50 p-6 md:p-10">
            <Schematic type={schematic} accent={accent} className="w-full" />
          </HudFrame>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Closing CTA + next-division link ───────────────────────────────── */

export function DivisionCTA({ current, accent }: { current: string; accent: DivisionAccent }) {
  const idx = DIVISIONS.findIndex((d) => d.slug === current);
  const next = DIVISIONS[(idx + 1) % DIVISIONS.length];
  return (
    <section className="relative overflow-hidden" aria-label="Engage">
      <div aria-hidden className="absolute inset-0 glow-saffron" />
      <div className="container-x relative flex flex-col items-start gap-10 py-24 md:py-32">
        <div>
          <p className="label-sm text-dim">Engage</p>
          <h2 className="display mt-5 text-[clamp(2.2rem,5.5vw,4.4rem)]">
            Request a<span className="text-faint"> briefing.</span>
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/#contact"
            className="label group inline-flex items-center gap-3 bg-saffron px-7 py-4 text-void transition-colors duration-300 hover:bg-saffron-bright"
          >
            Open Channel
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href={next.slug}
            className={`label inline-flex items-center gap-3 border border-line-strong px-7 py-4 transition-colors duration-300 hover:border-current ${ACCENT_TEXT[next.accent]}`}
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
        <div key={s.label} className="relative bg-void p-7 md:p-8">
          <div className="flex items-center justify-between">
            <p className={`label-sm ${ACCENT_TEXT[accent]}`}>{String(i + 1).padStart(2, "0")}</p>
            {i < steps.length - 1 && (
              <span aria-hidden className="hidden text-faint md:block">→</span>
            )}
          </div>
          <p className="label mt-5 text-ink">{s.label}</p>
          <p className="mt-3 text-[0.87rem] leading-relaxed text-dim">{s.text}</p>
        </div>
      ))}
    </div>
  );
}

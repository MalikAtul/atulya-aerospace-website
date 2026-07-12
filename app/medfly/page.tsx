import type { Metadata } from "next";
import { DivisionCTA, DivisionHero, StepGrid } from "@/components/division/DivisionShell";
import { HubSpoke } from "@/components/graphics/HubSpoke";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MEDFLY_PAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: MEDFLY_PAGE.meta.title,
  description: MEDFLY_PAGE.meta.description,
};

export default function MedFlyPage() {
  const page = MEDFLY_PAGE;

  return (
    <>
      <DivisionHero
        code="03"
        title="MedFly"
        accent="leaf"
        sector="B2B · B2G"
        status="STATE TRACK — HARYANA"
        tagline="Emergency medicine and blood, at the speed of flight."
        statement={page.hero.statement}
        chips={page.hero.chips}
        schematic="med"
      />

      {/* Problem */}
      <section className="border-b border-line py-28 md:py-36" aria-label="The problem">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              index="01"
              kicker="The Problem"
              lines={page.problem.headline}
              accent="var(--color-leaf)"
            />
            <RevealGroup className="mt-10 space-y-6" stagger={0.12}>
              {page.problem.body.map((para) => (
                <RevealItem key={para.slice(0, 20)}>
                  <p className="max-w-xl text-[0.98rem] leading-relaxed text-dim">{para}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <Reveal delay={0.12} className="self-center">
            <div className="border border-line bg-surface/50 p-10 text-center md:p-14">
              <p className="display flex items-baseline justify-center gap-3 text-[4.5rem] md:text-[6rem]">
                <span className="text-leaf">{page.problem.stat.value}</span>
                <span className="label text-dim">{page.problem.stat.unit}</span>
              </p>
              <p className="label-sm mx-auto mt-4 max-w-[240px] leading-relaxed text-dim">
                {page.problem.stat.label}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Corridor system */}
      <section className="border-b border-line bg-surface/30 py-28 md:py-36" aria-label="The lifeline corridor">
        <div className="container-x">
          <SectionHeading
            index="02"
            kicker={page.system.title}
            lines={["Hospital to PHC,", "in minutes."]}
            accent="var(--color-leaf)"
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <Reveal>
              <div className="border border-line bg-void p-5 md:p-8">
                <HubSpoke className="w-full" />
              </div>
            </Reveal>
            <div className="self-center">
              <Reveal>
                <p className="label-sm text-faint">Certified payloads</p>
              </Reveal>
              <RevealGroup className="mt-5 space-y-3" stagger={0.09}>
                {page.system.payloads.map((p) => (
                  <RevealItem key={p}>
                    <div className="flex items-center gap-4 border border-line px-5 py-4">
                      <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-leaf" />
                      <p className="text-[0.92rem] text-ink">{p}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>

          <Reveal className="mt-14">
            <StepGrid steps={page.system.steps} accent="leaf" />
          </Reveal>
        </div>
      </section>

      {/* States */}
      <section className="border-b border-line py-28 md:py-36" aria-label="State partnerships">
        <div className="container-x">
          <SectionHeading
            index="03"
            kicker="State Partnerships"
            lines={page.states.headline}
            accent="var(--color-leaf)"
          />
          <RevealGroup className="mt-10 max-w-2xl space-y-6" stagger={0.12}>
            {page.states.body.map((para) => (
              <RevealItem key={para.slice(0, 20)}>
                <p className="text-[0.98rem] leading-relaxed text-dim">{para}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="mt-10">
            <div className="flex flex-wrap gap-2.5">
              {page.states.chips.map((chip) => (
                <span key={chip} className="label-sm border border-leaf/40 bg-leaf/5 px-4 py-2.5 text-leaf">
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <DivisionCTA current="/medfly" accent="leaf" />
    </>
  );
}

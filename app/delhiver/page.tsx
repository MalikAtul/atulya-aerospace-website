import type { Metadata } from "next";
import { DivisionCTA, DivisionHero, StepGrid } from "@/components/division/DivisionShell";
import { FlightPathCompare } from "@/components/graphics/FlightPathCompare";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DELHIVER_PAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: DELHIVER_PAGE.meta.title,
  description: DELHIVER_PAGE.meta.description,
};

export default function DelhiverPage() {
  const page = DELHIVER_PAGE;

  return (
    <>
      <DivisionHero
        code="02"
        title="Delhiver"
        accent="deliver"
        sector="B2C"
        status="PHASE 1 — HARYANA"
        tagline="India's first drone-native quick commerce platform."
        statement={page.hero.statement}
        chips={page.hero.chips}
        schematic="cargo"
      />

      {/* Positioning */}
      <section className="border-b border-line bg-base py-24 md:py-32" aria-label="Positioning">
        <div className="container-x">
          <SectionHeading
            index="01"
            kicker="Positioning"
            lines={page.positioning.headline}
            dimFrom={1}
            accent="var(--color-deliver)"
            lead={page.positioning.body}
          />
        </div>
      </section>

      {/* The geometry argument */}
      <section className="border-b border-line bg-base bg-blueprint py-24 md:py-32" aria-label="The geometry advantage">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              index="02"
              kicker="The Physics"
              lines={page.geometry.headline}
              accent="var(--color-deliver)"
              lead={page.geometry.body}
            />
            <RevealGroup className="mt-10 space-y-4" stagger={0.1}>
              <RevealItem>
                <div className="flex items-center gap-4 border border-line bg-base px-5 py-4">
                  <span aria-hidden className="h-2 w-2 border border-slate" />
                  <div>
                    <p className="label-sm text-slate">{page.geometry.road.label}</p>
                    <p className="mt-1 text-[0.82rem] text-slate">{page.geometry.road.detail}</p>
                  </div>
                </div>
              </RevealItem>
              <RevealItem>
                <div className="flex items-center gap-4 border border-deliver/40 bg-deliver/5 px-5 py-4">
                  <span aria-hidden className="h-2 w-2 bg-deliver" />
                  <div>
                    <p className="label-sm text-deliver">{page.geometry.air.label}</p>
                    <p className="mt-1 text-[0.82rem] text-slate">{page.geometry.air.detail}</p>
                  </div>
                </div>
              </RevealItem>
            </RevealGroup>
          </div>
          <Reveal delay={0.1}>
            <div className="border border-line bg-base p-5 md:p-8">
              <FlightPathCompare className="w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Structural economics */}
      <section className="border-b border-line bg-base py-24 md:py-32" aria-label="Economics">
        <div className="container-x">
          <SectionHeading
            index="03"
            kicker={page.economics.title}
            lines={["The cost floor", "moves to zero."]}
            accent="var(--color-deliver)"
            lead={page.economics.intro}
          />

          <Reveal className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse border border-line text-left">
              <thead>
                <tr>
                  <th scope="col" className="label-sm border-b border-line px-6 py-5 text-slate">
                    Dimension
                  </th>
                  <th scope="col" className="label-sm border-b border-l border-line px-6 py-5 text-slate">
                    Ground Platforms
                  </th>
                  <th scope="col" className="label-sm border-b border-l border-line px-6 py-5 text-deliver">
                    Atulya Delhiver
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {page.economics.rows.map((row) => (
                  <tr key={row.dimension}>
                    <th scope="row" className="label-sm px-6 py-5 text-onyx">
                      {row.dimension}
                    </th>
                    <td className="border-l border-line px-6 py-5 text-[0.88rem] text-slate">{row.ground}</td>
                    <td className="border-l border-line px-6 py-5 text-[0.88rem] font-semibold text-onyx">
                      {row.air}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Order flow */}
      <section className="border-b border-line bg-base py-24 md:py-32" aria-label="How it works">
        <div className="container-x">
          <SectionHeading
            index="04"
            kicker={page.flow.title}
            lines={["Tap to hand,", "under ten minutes."]}
            accent="var(--color-deliver)"
          />
          <Reveal className="mt-14">
            <StepGrid steps={page.flow.steps} accent="deliver" />
          </Reveal>
        </div>
      </section>

      {/* Network */}
      <section className="bg-base py-24 md:py-32" aria-label="Hub network">
        <div className="container-x">
          <SectionHeading
            index="05"
            kicker="The Network"
            lines={page.network.headline}
            accent="var(--color-deliver)"
            lead={page.network.body}
          />
          <Reveal className="mt-10">
            <div className="flex flex-wrap gap-2.5">
              {page.network.chips.map((chip) => (
                <span key={chip} className="label-sm border border-deliver/40 bg-deliver/5 px-4 py-2.5 text-deliver">
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <DivisionCTA current="/delhiver" />
    </>
  );
}

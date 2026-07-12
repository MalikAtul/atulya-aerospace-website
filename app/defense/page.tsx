import type { Metadata } from "next";
import { DivisionCTA, DivisionHero, StepGrid } from "@/components/division/DivisionShell";
import { Schematic } from "@/components/graphics/Schematics";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DEFENSE_PAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: DEFENSE_PAGE.meta.title,
  description: DEFENSE_PAGE.meta.description,
};

export default function DefensePage() {
  const page = DEFENSE_PAGE;

  return (
    <>
      <DivisionHero
        code="01"
        title="Defense"
        accent="saffron"
        sector="B2G"
        status="PROTOTYPE TRACK → IDEX"
        tagline="Autonomous airpower for the forces that hold the line."
        statement={page.hero.statement}
        chips={page.hero.users}
        schematic="jet"
      />

      {/* Mandate numbers */}
      <section className="border-b border-line bg-surface/40" aria-label="Mandate">
        <RevealGroup className="container-x grid grid-cols-2 lg:grid-cols-4">
          {page.stats.map((s, i) => (
            <RevealItem
              key={s.label}
              className={`border-line px-2 py-10 sm:px-8 md:py-12 ${i % 2 === 1 ? "border-l" : ""} ${
                i >= 2 ? "border-t lg:border-t-0" : ""
              } ${i >= 1 ? "lg:border-l" : ""}`}
            >
              <p className="display text-[1.7rem] text-ink sm:text-[2.2rem]">{s.value}</p>
              <p className="label-sm mt-3 text-dim">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Systems index */}
      <section className="border-b border-line py-28 md:py-36" aria-label="Systems">
        <div className="container-x">
          <SectionHeading
            index="AD"
            kicker="Systems Index"
            lines={["Six systems.", "One doctrine."]}
            lead="Every AD-series airframe shares the Atulya autonomy core, encrypted mesh comms, and indigenous manufacturing path — six answers to six different threats, from one stack."
          />

          <RevealGroup className="mt-16 grid gap-px border border-line bg-line md:mt-24 md:grid-cols-2" stagger={0.1}>
            {page.systems.map((sys) => (
              <RevealItem key={sys.designation} className="group bg-void p-8 transition-colors duration-500 hover:bg-surface md:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="label text-saffron">{sys.designation}</p>
                  <p className="label-sm text-faint">{sys.className}</p>
                </div>
                <div className="mt-6 border border-line bg-void/60 px-4 py-2 transition-colors duration-500 group-hover:border-line-strong">
                  <Schematic type={sys.schematic} accent="saffron" className="w-full" />
                </div>
                <h3 className="display mt-7 text-[1.5rem]">{sys.name}</h3>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-dim">{sys.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {sys.chips.map((chip) => (
                    <span key={chip} className="label-sm border border-line px-3 py-2 text-faint">
                      {chip}
                    </span>
                  ))}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Flagship: swarm interceptor */}
      <section className="relative overflow-hidden border-b border-line bg-surface/30 py-28 md:py-36" aria-label="Flagship concept">
        <div aria-hidden className="absolute inset-0 bg-survey opacity-30" />
        <div className="container-x relative">
          <Reveal>
            <p className="label flex items-center gap-4 text-saffron">
              <span aria-hidden className="h-px w-10 bg-saffron" />
              {page.swarm.kicker}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-8 max-w-5xl text-[clamp(1.9rem,4.4vw,3.4rem)]">
              {page.swarm.headline[0]}
              <span className="text-saffron"> {page.swarm.headline[1]}</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <RevealGroup className="space-y-6" stagger={0.12}>
              {page.swarm.body.map((para) => (
                <RevealItem key={para.slice(0, 20)}>
                  <p className="max-w-xl text-[0.98rem] leading-relaxed text-dim">{para}</p>
                </RevealItem>
              ))}
              <RevealItem>
                <p className="label border-l-2 border-saffron pl-5 leading-relaxed text-ink">
                  {page.swarm.closer}
                </p>
              </RevealItem>
            </RevealGroup>
            <Reveal delay={0.15}>
              <div className="border border-line bg-void p-4">
                <Schematic type="interceptor" accent="saffron" className="w-full" />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <StepGrid steps={page.swarm.steps} accent="saffron" columnsClass="md:grid-cols-3" />
          </Reveal>
        </div>
      </section>

      {/* Procurement pathway */}
      <section className="border-b border-line py-28 md:py-36" aria-label="Procurement pathway">
        <div className="container-x">
          <SectionHeading
            index="02"
            kicker={page.pathway.title}
            lines={["From prototype", "to induction."]}
          />
          <Reveal className="mt-14">
            <StepGrid steps={page.pathway.steps.map((s) => ({ label: s.phase, text: s.text }))} accent="saffron" />
          </Reveal>
        </div>
      </section>

      <DivisionCTA current="/defense" accent="saffron" />
    </>
  );
}

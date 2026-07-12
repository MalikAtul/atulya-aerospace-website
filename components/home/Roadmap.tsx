import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { MISSION } from "@/lib/content";

export function Roadmap() {
  return (
    <section id="mission" className="relative overflow-hidden border-b border-line py-28 md:py-40" aria-label="Mission and roadmap">
      <div aria-hidden className="absolute inset-0 bg-survey opacity-40" />
      <div className="container-x relative">
        <Reveal>
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-px w-10 bg-saffron" />
            <p className="label text-dim">
              <span className="text-saffron">04</span>
              <span className="mx-2 text-faint">/</span>
              The Mission · 2026 → 2036
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="display mt-8 max-w-5xl text-[clamp(2.4rem,5.6vw,4.8rem)]">
            {MISSION.statement[0]}{" "}
            <span className="relative inline-block text-saffron">
              {MISSION.statement[1]}
              <span aria-hidden className="absolute -bottom-1 left-0 h-[3px] w-full bg-saffron/40" />
            </span>{" "}
            {MISSION.statement[2]}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="label mt-7 text-dim">{MISSION.clarifier}</p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-px border border-line bg-line md:mt-24 lg:grid-cols-3" stagger={0.14}>
          {MISSION.phases.map((phase) => {
            const active = phase.status === "active";
            return (
              <RevealItem key={phase.phase} className="relative bg-void">
                <div className="flex h-full flex-col p-8 md:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <p className="label-sm text-faint">{phase.years}</p>
                    {active ? (
                      <p className="label-sm flex items-center gap-2 text-saffron">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse-dot" />
                        Active
                      </p>
                    ) : (
                      <p className="label-sm text-faint">Ahead</p>
                    )}
                  </div>

                  <h3 className="display mt-6 text-[2rem]">
                    {phase.phase}
                    <span className="mt-1 block text-[1.05rem] tracking-wide text-dim">{phase.name}</span>
                  </h3>

                  <ul className="mt-8 flex-1 space-y-4 border-t border-line pt-8">
                    {phase.milestones.map((m) => (
                      <li key={m} className="flex gap-4 text-[0.9rem] leading-relaxed text-dim">
                        <span
                          aria-hidden
                          className={`mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 ${active ? "bg-saffron" : "bg-faint"}`}
                        />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                {active && <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-saffron" />}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

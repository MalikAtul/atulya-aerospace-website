import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { VISION } from "@/lib/content";

export function Vision() {
  return (
    <section id="vision" className="bg-sovereign py-24 md:py-32" aria-label="The vision">
      <div className="container-x">
        <Reveal>
          <h2 className="display max-w-5xl text-[clamp(2.2rem,5.4vw,4rem)] text-white">
            {VISION.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="display mt-5 text-[clamp(1.15rem,2.6vw,1.7rem)] text-strike">
            {VISION.sub}
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-3" stagger={0.12}>
          {VISION.phases.map((phase) => (
            <RevealItem key={phase.phase} className="h-full">
              <div className="flex h-full flex-col bg-base p-8 md:p-9">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-[1.5rem] text-sovereign">{phase.phase}</h3>
                  <p className="label-sm text-sovereign">{phase.years}</p>
                </div>
                <p className="label mt-2 text-sovereign">{phase.name}</p>
                <ul className="mt-7 flex-1 space-y-3.5 border-t border-line pt-7">
                  {phase.milestones.map((m) => (
                    <li key={m} className="flex gap-3 text-[0.9rem] leading-relaxed text-slate">
                      <span aria-hidden className="mt-[9px] h-1 w-3 shrink-0 bg-sovereign" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

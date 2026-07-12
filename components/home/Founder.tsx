import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { HudFrame } from "@/components/ui/HudFrame";
import { Mark } from "@/components/graphics/Mark";
import { FOUNDER, SITE } from "@/lib/content";

export function Founder() {
  return (
    <section id="founder" className="border-b border-line py-28 md:py-40" aria-label="The founder">
      <div className="container-x">
        <SectionHeading index="05" kicker="The Founder" lines={["Atul", "Malik."]} dimFrom={1} />

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Dossier */}
          <Reveal>
            <HudFrame accent="rgba(255,142,31,0.5)" size={16} className="bg-surface/50 p-8 md:p-10">
              <div className="flex items-center justify-between">
                <p className="label-sm text-saffron">Founder Dossier</p>
                <Mark size={20} />
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center border border-line-strong bg-void">
                  <span className="display text-[1.6rem] text-saffron">AM</span>
                </div>
                <div>
                  <p className="display text-[1.6rem]">{FOUNDER.name}</p>
                  <p className="label-sm mt-1.5 text-dim">{FOUNDER.role} · {SITE.name}</p>
                </div>
              </div>

              <dl className="mt-9 divide-y divide-line border-t border-line">
                {FOUNDER.dossier.map((row) => (
                  <div key={row.label} className="grid grid-cols-[110px_1fr] gap-4 py-4">
                    <dt className="label-sm pt-0.5 text-faint">{row.label}</dt>
                    <dd className="text-[0.9rem] leading-snug text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <blockquote className="mt-8 border-l-2 border-saffron pl-5">
                <p className="text-[0.95rem] font-medium leading-relaxed text-ink">
                  “{FOUNDER.quote}”
                </p>
              </blockquote>
            </HudFrame>
          </Reveal>

          {/* Narrative */}
          <div>
            <Reveal>
              <h3 className="display text-[1.7rem] leading-tight md:text-[2rem]">
                Some founders find their field in college.
                <span className="text-dim"> Atul found his in Class 4.</span>
              </h3>
            </Reveal>

            <RevealGroup className="mt-8 space-y-6" stagger={0.1}>
              {FOUNDER.story.map((para) => (
                <RevealItem key={para.slice(0, 24)}>
                  <p className="max-w-2xl text-[0.98rem] leading-relaxed text-dim">{para}</p>
                </RevealItem>
              ))}
              <RevealItem>
                <p className="max-w-2xl border-l-2 border-saffron/60 pl-5 text-[0.98rem] font-medium leading-relaxed text-ink">
                  {FOUNDER.reframe}
                </p>
              </RevealItem>
            </RevealGroup>

            <RevealGroup className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2" stagger={0.12}>
              {FOUNDER.recognitions.map((r) => (
                <RevealItem key={r.title} className="bg-void p-7">
                  <p className="label-sm text-saffron">Recognition</p>
                  <p className="display mt-4 text-[1.15rem] leading-snug">{r.title}</p>
                  <p className="label-sm mt-3 text-dim">{r.org}</p>
                  <p className="mt-4 text-[0.85rem] leading-relaxed text-faint">{r.note}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

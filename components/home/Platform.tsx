import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PLATFORM } from "@/lib/content";

export function Platform() {
  return (
    <section id="platform" className="border-b border-line bg-surface/30 py-28 md:py-40" aria-label="The platform">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            index="03"
            kicker="The Unified Stack"
            lines={PLATFORM.headline}
            lead={PLATFORM.intro}
          />

          <Reveal delay={0.1} className="mt-12">
            <div className="border border-line bg-void p-7 md:p-8">
              <p className="label-sm text-saffron">{PLATFORM.flywheel.title}</p>
              <div className="mt-6 space-y-0">
                {PLATFORM.flywheel.steps.map((s, i) => (
                  <div key={s.label} className="relative flex gap-5 pb-6 last:pb-0">
                    {i < PLATFORM.flywheel.steps.length - 1 && (
                      <span aria-hidden className="absolute left-[13px] top-8 h-full w-px bg-line" />
                    )}
                    <span className="label-sm flex h-7 w-7 shrink-0 items-center justify-center border border-saffron/50 text-saffron">
                      {i + 1}
                    </span>
                    <div>
                      <p className="label-sm text-ink">{s.label}</p>
                      <p className="mt-1.5 text-[0.85rem] leading-relaxed text-dim">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-line pt-6 text-[0.88rem] leading-relaxed text-dim">
                {PLATFORM.flywheel.closer}
              </p>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="divide-y divide-line border-y border-line" stagger={0.07}>
          {PLATFORM.layers.map((layer, i) => (
            <RevealItem key={layer.label}>
              <div className="group grid gap-3 py-8 transition-colors duration-300 sm:grid-cols-[180px_1fr] sm:gap-8 md:py-10">
                <div>
                  <p className="label-sm text-faint">L-{String(i + 1).padStart(2, "0")}</p>
                  <p className="label mt-2 text-dim transition-colors duration-300 group-hover:text-saffron">
                    {layer.label}
                  </p>
                </div>
                <div>
                  <p className="display text-[1.3rem] md:text-[1.5rem]">{layer.value}</p>
                  <p className="mt-3 max-w-xl text-[0.9rem] leading-relaxed text-dim">{layer.detail}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

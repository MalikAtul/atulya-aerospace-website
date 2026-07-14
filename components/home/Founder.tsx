import { Reveal } from "@/components/ui/Reveal";
import { FOUNDER } from "@/lib/content";

export function Founder() {
  return (
    <section id="founder" className="bg-base py-24 md:py-32" aria-label="The founder">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[auto_1px_1fr] md:gap-14 lg:gap-20">
          <Reveal className="md:self-center">
            <p className="display text-[clamp(6rem,16vw,11rem)] leading-none text-strike">
              {FOUNDER.age}
            </p>
            <p className="label mt-2 text-slate">{FOUNDER.ageLabel}</p>
          </Reveal>

          <div aria-hidden className="hidden w-px bg-sovereign md:block" />

          <div className="md:self-center">
            <Reveal>
              <h2 className="display text-[clamp(2rem,4.6vw,3.2rem)] text-sovereign">
                {FOUNDER.name}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 text-[0.95rem] font-semibold text-slate">{FOUNDER.role}</p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-slate">
                {FOUNDER.paragraph}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {FOUNDER.badges.map((badge) => (
                  <span
                    key={badge}
                    className="label-sm rounded-full border border-sovereign bg-base px-5 py-2.5 text-sovereign"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

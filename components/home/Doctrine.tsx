import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DOCTRINE } from "@/lib/content";

export function Doctrine() {
  return (
    <section id="doctrine" className="relative border-b border-line py-28 md:py-40" aria-label="The doctrine">
      <div className="container-x">
        <SectionHeading
          index="01"
          kicker="The Doctrine"
          lines={DOCTRINE.headline}
          dimFrom={1}
          lead={DOCTRINE.sub}
        />

        <RevealGroup className="mt-16 grid gap-px border border-line bg-line md:mt-24 md:grid-cols-2">
          {DOCTRINE.problems.map((p) => (
            <RevealItem key={p.index} className="group relative bg-void p-8 transition-colors duration-500 hover:bg-surface md:p-12">
              <div className="flex items-baseline justify-between gap-4">
                <p className="label-sm text-saffron">{p.index}</p>
                <span aria-hidden className="h-px flex-1 bg-line transition-colors duration-500 group-hover:bg-saffron/30" />
              </div>
              <h3 className="display mt-6 text-[1.55rem] leading-tight md:text-[1.8rem]">{p.title}</h3>
              <p className="mt-5 text-[0.94rem] leading-relaxed text-dim">{p.body}</p>
              <p className="mt-7 border-l-2 border-saffron pl-4 text-[0.9rem] leading-relaxed text-ink">
                {p.answer}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-20 md:mt-28">
          <p className="display mx-auto max-w-4xl text-center text-[clamp(1.9rem,4.6vw,3.6rem)]">
            <span className="block">{DOCTRINE.closer[0]}</span>
            <span className="block text-saffron">{DOCTRINE.closer[1]}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

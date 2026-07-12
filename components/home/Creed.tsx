import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/content";

export function Creed() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface/30" aria-label="The name">
      <div className="container-x relative py-24 text-center md:py-36">
        <Reveal>
          <p
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[clamp(7rem,24vw,20rem)] font-bold leading-none text-ink opacity-[0.045]"
            style={{ fontFamily: "var(--font-devanagari)" }}
          >
            {SITE.devanagari}
          </p>
        </Reveal>
        <Reveal>
          <p
            className="relative text-[clamp(2.6rem,7vw,5rem)] font-semibold text-ink"
            style={{ fontFamily: "var(--font-devanagari)" }}
            lang="hi"
          >
            {SITE.devanagari}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label relative mt-6 text-saffron">{SITE.meaning}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="relative mx-auto mt-7 max-w-xl text-[0.98rem] leading-relaxed text-dim">
            The standard every Atulya airframe is held to — and the name we answer to. An extension of
            the founder&apos;s own name, made into a company, aimed at a country&apos;s ceiling.
          </p>
        </Reveal>
        <div aria-hidden className="hairline-tricolor relative mx-auto mt-12 max-w-xs" />
      </div>
    </section>
  );
}

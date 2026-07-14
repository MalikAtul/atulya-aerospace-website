import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { INNOVATIONS } from "@/lib/content";

export function Innovations() {
  return (
    <section className="bg-onyx py-24 md:py-32" aria-label="Innovations">
      <div className="container-x">
        <Reveal>
          <h2 className="display text-[clamp(2.2rem,5vw,3.6rem)] text-white">
            {INNOVATIONS.title}
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-x-14 md:gap-y-16" stagger={0.15}>
          {INNOVATIONS.items.map((item, i) => (
            <RevealItem key={item.title}>
              <div className="border-l-2 border-strike pl-6 md:pl-8">
                <p className="display text-[2.4rem] text-strike md:text-[2.8rem]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-[1.25rem] font-bold text-white md:text-[1.4rem]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-steel">
                  {item.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

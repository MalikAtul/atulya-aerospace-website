import Link from "next/link";
import { Schematic } from "@/components/graphics/Schematics";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DIVISIONS } from "@/lib/content";

const ACCENT = {
  saffron: {
    text: "text-saffron",
    border: "hover:border-saffron/60",
    bar: "bg-saffron",
  },
  chakra: {
    text: "text-chakra",
    border: "hover:border-chakra/60",
    bar: "bg-chakra",
  },
  leaf: {
    text: "text-leaf",
    border: "hover:border-leaf/60",
    bar: "bg-leaf",
  },
} as const;

export function Divisions() {
  return (
    <section id="divisions" className="border-b border-line py-28 md:py-40" aria-label="Divisions">
      <div className="container-x">
        <SectionHeading
          index="02"
          kicker="The Divisions"
          lines={["One stack.", "Three missions."]}
          lead="Three divisions under one parent company, flying one core technology stack — each aimed at a national problem big enough to justify the company on its own."
        />

        <RevealGroup className="mt-16 grid gap-6 md:mt-24 lg:grid-cols-3" stagger={0.14}>
          {DIVISIONS.map((d) => {
            const a = ACCENT[d.accent];
            return (
              <RevealItem key={d.code} className="h-full">
                <Link
                  href={d.slug}
                  className={`group relative flex h-full flex-col border border-line bg-surface/50 transition-[border-color,transform] duration-500 hover:-translate-y-1.5 ${a.border}`}
                >
                  <span aria-hidden className={`absolute left-0 top-0 h-[3px] w-14 ${a.bar}`} />

                  <div className="flex items-start justify-between p-7 pb-0 md:p-9 md:pb-0">
                    <div>
                      <p className={`label-sm ${a.text}`}>Division {d.code}</p>
                      <h3 className="display mt-3 text-[2rem] md:text-[2.3rem]">{d.name}</h3>
                      <p className="label-sm mt-3 text-faint">{d.sector}</p>
                    </div>
                  </div>

                  <div className="px-7 pt-6 md:px-9">
                    <Schematic type={d.schematic} accent={d.accent} className="w-full opacity-90" />
                  </div>

                  <div className="flex flex-1 flex-col p-7 pt-6 md:p-9 md:pt-6">
                    <p className="text-[0.95rem] font-medium leading-relaxed text-ink">{d.tagline}</p>
                    <p className="mt-4 text-[0.88rem] leading-relaxed text-dim">{d.mandate}</p>

                    <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                      {d.systems.slice(0, 4).map((s) => (
                        <li key={s} className="flex items-center gap-3 text-[0.84rem] text-dim">
                          <span aria-hidden className={`h-1 w-1 rotate-45 ${a.bar}`} />
                          {s}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                      <p className="label-sm text-faint">{d.status}</p>
                      <span
                        className={`label-sm flex items-center gap-2 ${a.text} transition-transform duration-300 group-hover:translate-x-1`}
                      >
                        Enter <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

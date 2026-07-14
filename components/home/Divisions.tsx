import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DIVISIONS, DIVISIONS_SECTION } from "@/lib/content";

const ACCENT = {
  defense: { text: "text-defense", bar: "bg-defense" },
  deliver: { text: "text-deliver", bar: "bg-deliver" },
  medfly: { text: "text-medfly", bar: "bg-medfly" },
} as const;

export function Divisions() {
  return (
    <section id="divisions" className="bg-base py-24 md:py-32" aria-label="Divisions">
      <div className="container-x">
        <Reveal>
          <h2 className="display text-[clamp(2.2rem,5vw,3.6rem)] text-sovereign">
            {DIVISIONS_SECTION.title}
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-3" stagger={0.12}>
          {DIVISIONS.map((d) => {
            const a = ACCENT[d.accent];
            return (
              <RevealItem key={d.code} className="h-full">
                <Link
                  id={d.anchor}
                  href={d.slug}
                  className="group relative flex h-full scroll-mt-24 flex-col border border-line bg-base pt-[6px] transition-[box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(10,10,10,0.25)]"
                >
                  {/* Division top border: 4px, thickens to 6px on hover */}
                  <span
                    aria-hidden
                    className={`absolute inset-x-[-1px] top-[-1px] h-[4px] transition-[height] duration-300 group-hover:h-[6px] ${a.bar}`}
                  />

                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <h3 className={`display text-[1.7rem] md:text-[1.85rem] ${a.text}`}>
                      {d.fullName}
                    </h3>
                    <p className="label-sm mt-3 text-slate">{d.sector}</p>

                    <p className="mt-6 text-[0.95rem] font-semibold leading-relaxed text-slate">
                      {d.tagline}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                      {d.systems.slice(0, 4).map((s) => (
                        <li key={s} className="flex items-center gap-3 text-[0.88rem] text-slate">
                          <span aria-hidden className={`h-1 w-3 shrink-0 ${a.bar}`} />
                          {s}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                      <p className="label-sm text-slate">{d.status}</p>
                      <span
                        className={`label-sm flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1 ${a.text}`}
                      >
                        Explore <span aria-hidden>→</span>
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

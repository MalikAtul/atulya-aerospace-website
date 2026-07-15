import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PROGRAMS_PAGE, type ProgramStatus } from "@/lib/content";

export const metadata: Metadata = {
  title: PROGRAMS_PAGE.meta.title,
  description: PROGRAMS_PAGE.meta.description,
};

const STATUS_STYLES: Record<ProgramStatus, string> = {
  "IN DEVELOPMENT": "bg-sovereign text-white",
  "PROTOTYPE STAGE": "bg-slate text-white",
  RESEARCH: "border border-sovereign bg-base text-sovereign",
};

export default function ProgramsPage() {
  const page = PROGRAMS_PAGE;

  return (
    <section className="bg-base pb-24 pt-32 md:pb-32 md:pt-40" aria-label="Important programs">
      <div className="container-x">
        <div data-hero>
          <Reveal>
            <p className="label-sm flex flex-wrap items-center gap-x-3 gap-y-2 text-slate">
              <Link href="/" className="transition-colors hover:text-sovereign">
                Atulya Aerospace
              </Link>
              <span aria-hidden>/</span>
              <span className="text-strike">Programs</span>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display mt-7 text-[clamp(2.2rem,5vw,3.6rem)] text-sovereign">
              {page.title}
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-slate">
              {page.subtitle}
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 flex flex-col gap-6 md:mt-20" stagger={0.2}>
          {page.programs.map((program) => (
            <RevealItem key={program.code}>
              <article className="group relative border border-line bg-base p-7 transition-colors duration-300 hover:bg-[#F5F7FF] md:p-9">
                <span
                  aria-hidden
                  className="absolute bottom-[-1px] left-[-1px] top-[-1px] w-[3px] transition-all duration-300 group-hover:w-[5px]"
                  style={{ background: program.color }}
                />
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
                  <div>
                    <p className="display text-[0.85rem] uppercase text-strike">{program.code}</p>
                    <h2 className="display mt-3 text-[1.5rem] text-sovereign md:text-[1.9rem]">
                      {program.name}
                    </h2>
                  </div>
                  <span
                    className={`label-sm shrink-0 rounded-full px-4 py-2 ${STATUS_STYLES[program.status]}`}
                  >
                    {program.status}
                  </span>
                </div>
                <p className="mt-5 max-w-3xl text-[1rem] font-semibold leading-snug text-onyx">
                  {program.mission}
                </p>
                <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-slate">
                  {program.description}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

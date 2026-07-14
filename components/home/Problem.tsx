import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { PROBLEM } from "@/lib/content";

export function Problem() {
  return (
    <section className="bg-sovereign py-24 md:py-32" aria-label="The problem">
      <div className="container-x">
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
          {PROBLEM.stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="display text-[clamp(2.6rem,5.5vw,4rem)] text-white">
                <CountUp value={stat.value} duration={2} />
                <span className="ml-2 text-[0.5em]">{stat.unit}</span>
              </p>
              <p className="mx-auto mt-4 max-w-[260px] text-[0.95rem] leading-relaxed text-white sm:mx-0">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-20">
          <p className="display text-center text-[clamp(1.3rem,3vw,2rem)] text-strike">
            {PROBLEM.line}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

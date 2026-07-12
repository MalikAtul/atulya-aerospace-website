import { CountUp } from "@/components/ui/CountUp";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { STATS } from "@/lib/content";

export function StatBand() {
  return (
    <section className="border-b border-line bg-surface/40" aria-label="Key numbers">
      <RevealGroup className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <RevealItem
            key={stat.label}
            className={`border-line px-2 py-10 sm:px-8 md:py-14 ${i > 0 ? "sm:border-l" : ""} ${
              i >= 2 ? "border-t sm:border-t lg:border-t-0" : "border-t sm:border-t-0"
            } ${i === 1 ? "border-t sm:border-t-0" : ""}`}
          >
            <p className="display flex items-baseline gap-2 text-[2.6rem] md:text-[3rem]">
              {stat.format === "lt" && <span className="text-saffron">&lt;</span>}
              <CountUp value={stat.value} />
              <span className="label text-saffron">{stat.unit}</span>
            </p>
            <p className="label-sm mt-3 text-ink">{stat.label}</p>
            <p className="mt-2 text-[0.82rem] leading-relaxed text-faint">{stat.note}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

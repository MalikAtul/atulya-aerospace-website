import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  index?: string;
  kicker: string;
  lines: readonly string[];
  /** Which line (0-based) renders in slate instead of sovereign. Default: none. */
  dimFrom?: number;
  lead?: string;
  accent?: string;
  className?: string;
};

/**
 * Standard section opener: spaced-caps kicker with an accent rule,
 * then an Archivo ExtraBold Italic title, optionally with a lead.
 */
export function SectionHeading({
  index,
  kicker,
  lines,
  dimFrom,
  lead,
  accent = "var(--color-sovereign)",
  className = "",
}: SectionHeadingProps) {
  const dimStart = dimFrom ?? lines.length;
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-4">
          <span aria-hidden className="h-[3px] w-10" style={{ background: accent }} />
          <p className="label text-slate">
            {index ? (
              <>
                <span style={{ color: accent }}>{index}</span>
                <span className="mx-2">/</span>
              </>
            ) : null}
            {kicker}
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display mt-6 text-[clamp(2.1rem,4.8vw,3.6rem)] text-sovereign">
          {lines.map((line, i) => (
            <span key={line} className={`block ${i >= dimStart ? "text-slate" : ""}`}>
              {line}
            </span>
          ))}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-slate">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

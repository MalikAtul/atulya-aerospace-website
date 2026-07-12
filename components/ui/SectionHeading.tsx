import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  index?: string;
  kicker: string;
  lines: readonly string[];
  /** Which line (0-based) renders dimmed. Default: last line. */
  dimFrom?: number;
  lead?: string;
  accent?: string;
  className?: string;
};

/**
 * Standard section opener: mono kicker with rule, then a large
 * two-tone display title, optionally followed by a lead paragraph.
 */
export function SectionHeading({
  index,
  kicker,
  lines,
  dimFrom,
  lead,
  accent = "var(--color-saffron)",
  className = "",
}: SectionHeadingProps) {
  const dimStart = dimFrom ?? lines.length - 1;
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-4">
          <span aria-hidden className="h-px w-10" style={{ background: accent }} />
          <p className="label text-dim">
            {index ? (
              <>
                <span style={{ color: accent }}>{index}</span>
                <span className="mx-2 text-faint">/</span>
              </>
            ) : null}
            {kicker}
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display mt-6 text-[clamp(2.6rem,6.2vw,5.2rem)]">
          {lines.map((line, i) => (
            <span key={line} className={`block ${i >= dimStart && lines.length > 1 ? "text-faint" : ""}`}>
              {line}
            </span>
          ))}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl text-[0.98rem] leading-relaxed text-dim">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

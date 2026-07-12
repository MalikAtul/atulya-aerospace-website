import { BriefingForm } from "@/components/BriefingForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40" aria-label="Contact">
      <div aria-hidden className="absolute inset-0 glow-saffron" />
      <div className="container-x relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <SectionHeading
            index="06"
            kicker="Engage"
            lines={CONTACT.headline}
            lead={CONTACT.intro}
          />

          <Reveal delay={0.15}>
            <dl className="mt-12 divide-y divide-line border-y border-line">
              {CONTACT.rows.map((row) => (
                <div key={row.label} className="grid grid-cols-[110px_1fr] items-baseline gap-4 py-5">
                  <dt className="label-sm text-faint">{row.label}</dt>
                  <dd>
                    {"href" in row && row.href ? (
                      <a
                        href={row.href}
                        className="text-[0.95rem] text-ink underline decoration-saffron/50 underline-offset-4 transition-colors hover:text-saffron"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-[0.95rem] text-ink">{row.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border border-line bg-surface/60 p-8 backdrop-blur-sm md:p-12">
            <BriefingForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

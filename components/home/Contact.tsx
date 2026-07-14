import { Reveal } from "@/components/ui/Reveal";
import { CONTACT } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="bg-base py-28 md:py-36" aria-label="Contact">
      <div className="container-x flex flex-col items-center text-center">
        <Reveal>
          <h2 className="display max-w-4xl text-[clamp(2.2rem,5.4vw,4rem)] text-sovereign">
            {CONTACT.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-7 text-[1rem] text-slate">
            <a
              href={`mailto:${CONTACT.email}`}
              className="underline decoration-line underline-offset-4 transition-colors duration-300 hover:text-sovereign"
            >
              {CONTACT.email}
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-10 inline-block bg-strike px-10 py-4 text-[0.95rem] font-semibold text-white transition-colors duration-300 hover:bg-strike-deep"
          >
            {CONTACT.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

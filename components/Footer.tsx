import Link from "next/link";
import { Mark } from "@/components/graphics/Mark";
import { FOOTER, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="hairline-tricolor" aria-hidden />
      <div className="container-x pb-12 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <Mark size={26} />
              <span className="label text-ink">
                Atulya <span className="text-dim">Aerospace</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-dim">{FOOTER.blurb}</p>
            <p
              className="mt-8 text-4xl font-semibold text-raised select-none"
              style={{ fontFamily: "var(--font-devanagari)" }}
              aria-hidden
            >
              {SITE.devanagari}
            </p>
          </div>

          {FOOTER.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="label-sm text-faint">{col.title}</p>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-dim transition-colors duration-300 hover:text-saffron"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-7 md:flex-row md:items-center md:justify-between">
          <p className="label-sm text-faint">
            © {new Date().getFullYear()} {SITE.name} · {FOOTER.line}
          </p>
          <p className="label-sm text-faint">
            {SITE.devanagari} — {SITE.meaning}
          </p>
        </div>
      </div>
    </footer>
  );
}

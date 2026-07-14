import Link from "next/link";
import { Logo } from "@/components/graphics/Logo";
import { DIVISIONS, FOOTER, SITE } from "@/lib/content";

const DIVISION_COLOR: Record<string, string> = {
  defense: "text-defense",
  deliver: "text-deliver",
  medfly: "text-medfly",
};

export function Footer() {
  return (
    <footer className="bg-onyx">
      <div className="container-x flex flex-col gap-10 pb-10 pt-14 md:gap-12">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="Atulya Aerospace — home">
            <Logo dark />
          </Link>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Divisions">
            {DIVISIONS.map((d) => (
              <Link
                key={d.slug}
                href={d.slug}
                className={`label-sm transition-opacity duration-300 hover:opacity-75 ${DIVISION_COLOR[d.accent]}`}
              >
                {d.fullName}
              </Link>
            ))}
          </nav>

          <a
            href={`mailto:${SITE.email}`}
            className="text-sm text-steel transition-colors duration-300 hover:text-white"
          >
            {SITE.email}
          </a>
        </div>

        <p className="border-t border-white/10 pt-6 text-[0.78rem] text-steel">
          © {new Date().getFullYear()} {SITE.name}. {FOOTER.line}
        </p>
      </div>
    </footer>
  );
}

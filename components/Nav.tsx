"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mark } from "@/components/graphics/Mark";

const LINKS = [
  { label: "Defense", href: "/defense" },
  { label: "Delhiver", href: "/delhiver" },
  { label: "MedFly", href: "/medfly" },
  { label: "Platform", href: "/#platform" },
  { label: "Mission", href: "/#mission" },
  { label: "Founder", href: "/#founder" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "border-b border-line bg-void/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="Atulya Aerospace — home">
          <Mark size={24} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
          <span className="label text-[0.75rem] text-ink">
            Atulya <span className="text-dim">Aerospace</span>
          </span>
          <span aria-hidden className="ml-1 hidden h-1.5 w-1.5 rounded-full bg-saffron animate-pulse-dot sm:block" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`label-sm nav-underline pb-1 transition-colors duration-300 ${
                  active ? "text-saffron" : "text-dim hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="label-sm border border-line-strong px-5 py-3 text-ink transition-colors duration-300 hover:border-saffron hover:text-saffron"
          >
            Request Briefing
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>
    </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 flex flex-col justify-between overflow-y-auto bg-void/97 backdrop-blur-lg lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 pt-10">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="display flex items-baseline gap-4 border-b border-line py-5 text-[2rem] text-ink"
                  >
                    <span className="label-sm w-8 text-saffron">0{i + 1}</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.45 }}
                className="pt-8"
              >
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="label inline-block border border-saffron px-7 py-4 text-saffron"
                >
                  Request Briefing
                </Link>
              </motion.div>
            </div>
            <div className="container-x pb-10 pt-12">
              <p className="label-sm text-faint">One stack · Three missions · Bharat</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

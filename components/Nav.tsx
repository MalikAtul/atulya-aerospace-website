"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/graphics/Logo";

const LINKS = [
  { label: "Defense", href: "/defense", color: "text-defense" },
  { label: "Delhiver", href: "/delhiver", color: "text-deliver" },
  { label: "MedFly", href: "/medfly", color: "text-medfly" },
  { label: "Contact", href: "/#contact", color: "text-sovereign" },
] as const;

export function Nav() {
  const [past, setPast] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>("[data-hero]");
      const threshold = hero ? hero.offsetTop + hero.offsetHeight - 72 : 64;
      setPast(window.scrollY >= threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const dark = past && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          dark ? "border-white/20 bg-sovereign" : "border-sovereign bg-base"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label="Atulya Aerospace — home">
            <Logo dark={dark} />
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`label-sm pb-0.5 transition-colors duration-300 hover:underline underline-offset-8 ${
                  dark ? "text-white" : link.color
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-[2px] w-6 transition-transform duration-300 ${dark ? "bg-white" : "bg-sovereign"} ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 transition-transform duration-300 ${dark ? "bg-white" : "bg-sovereign"} ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {open && (
        <nav
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 flex flex-col justify-between overflow-y-auto bg-base md:hidden"
        >
          <div className="container-x flex flex-col pt-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`display border-b border-line py-6 text-[2rem] ${link.color}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="container-x pb-10 pt-12">
            <p className="label-sm text-slate">One Platform. Three National Missions.</p>
          </div>
        </nav>
      )}
    </>
  );
}

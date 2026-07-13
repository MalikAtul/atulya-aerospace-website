"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { RadarScope } from "@/components/graphics/RadarScope";
import { HudFrame } from "@/components/ui/HudFrame";
import { HERO, SITE } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const DIVISION_INDEX = [
  { code: "01", name: "DEFENSE", href: "/defense", dot: "bg-saffron" },
  { code: "02", name: "DELHIVER", href: "/delhiver", dot: "bg-chakra" },
  { code: "03", name: "MEDFLY", href: "/medfly", dot: "bg-leaf" },
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-blueprint" aria-label="Introduction">
      <div aria-hidden className="absolute inset-0 glow-saffron" />
      <div
        aria-hidden
        className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-line lg:block"
      />

      <div className="container-x relative grid min-h-svh items-center gap-14 pb-16 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20">
        <motion.div
          initial={reduce ? undefined : "hidden"}
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
        >
          <motion.p variants={rise} className="label-sm flex flex-wrap items-center gap-x-4 gap-y-2 text-dim">
            <span className="text-saffron">[ EST. {SITE.founded} ]</span>
            <span>{HERO.kicker}</span>
          </motion.p>

          <motion.h1
            variants={rise}
            className="display mt-8 text-[clamp(3.4rem,11.5vw,9.2rem)]"
          >
            <span className="block">Atulya</span>
            <span className="block text-outline">Aerospace</span>
          </motion.h1>

          <motion.p variants={rise} className="mt-7 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span
              className="text-xl font-semibold text-saffron"
              style={{ fontFamily: "var(--font-devanagari)" }}
              lang="hi"
            >
              {SITE.devanagari}
            </span>
            <span className="label-sm text-dim">{SITE.meaning}</span>
          </motion.p>

          <motion.p variants={rise} className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-dim">
            {HERO.statement}
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={HERO.primaryCta.href}
              className="label btn-sheen group inline-flex items-center gap-3 bg-saffron px-7 py-4 text-void transition-colors duration-300 hover:bg-saffron-bright"
            >
              {HERO.primaryCta.label}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href={HERO.secondaryCta.href}
              className="label inline-flex items-center gap-3 border border-line-strong px-7 py-4 text-ink transition-colors duration-300 hover:border-saffron hover:text-saffron"
            >
              {HERO.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.div variants={rise} className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            {DIVISION_INDEX.map((d) => (
              <Link key={d.code} href={d.href} className="group flex items-center gap-3">
                <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${d.dot}`} />
                <span className="label-sm text-faint transition-colors duration-300 group-hover:text-ink">
                  <span className="mr-2 text-dim">{d.code}</span>
                  {d.name}
                </span>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <HudFrame accent="rgba(255,142,31,0.55)" size={18} className="p-5 sm:p-8">
            <RadarScope />
          </HudFrame>
          <div className="mt-4 flex items-center justify-between">
            <p className="label-sm text-faint">ONE STACK · THREE MISSIONS</p>
            <p className="label-sm text-faint">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-leaf align-middle" aria-hidden />
              SYSTEMS NOMINAL
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

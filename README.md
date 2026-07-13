# Atulya Aerospace — Website

**अतुल्य · Peerless. Incomparable.**

The official website of Atulya Aerospace — India's unified autonomous drone platform.
One indigenous stack, three national missions:

| Division | Route | Mission |
| --- | --- | --- |
| Atulya Defense | `/defense` | Surveillance, interception & strike systems for the Indian Army, BSF, Coast Guard, CISF |
| Atulya Delhiver | `/delhiver` | India's first drone-native quick commerce platform |
| Atulya MedFly | `/medfly` | Emergency medicine & blood delivery to rural India |

## Stack

- **Next.js 15** (App Router, static prerender — every route ships as static HTML)
- **Tailwind CSS v4** (design tokens live in `app/globals.css`)
- **GSAP + ScrollTrigger** for all scroll-based animation — section reveals, stat count-ups, and the schematic draw-ons (Motion remains only for the mobile-nav and hero entrance transitions)
- Zero external assets — every graphic (radar scope, drone schematics, route diagrams) is hand-drawn inline SVG

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
```

## Deploy to Vercel

The repo is deploy-ready as-is:

1. Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) — Vercel autodetects Next.js. No configuration needed.
2. After the first deploy (or after connecting a custom domain), set the environment variable
   `NEXT_PUBLIC_SITE_URL` to the canonical URL (e.g. `https://atulyaaerospace.in`) so Open Graph
   tags, `sitemap.xml`, and `robots.txt` emit the right absolute URLs. Redeploy once after setting it.

## Editing content

All copy, numbers, roadmap phases, founder details, and division data live in **one file**:
[`lib/content.ts`](lib/content.ts). Edit it and every page updates. Components under
`components/` are layout only.

The briefing form is static-host friendly: it composes a structured email and opens the
visitor's mail client addressed to the founder — no backend required. When a backend or
form service is added later, swap the `onSubmit` in `components/BriefingForm.tsx`.

## Structure

```
app/            routes: / , /defense , /delhiver , /medfly (+ sitemap, robots, OG image, icon)
components/
  home/         homepage sections (Hero, Doctrine, Divisions, Platform, Roadmap, Founder…)
  division/     shared division-page shell (hero, CTA, step grids)
  graphics/     inline-SVG craft: radar scope, drone schematics, route & corridor diagrams
  ui/           primitives: Reveal, CountUp, SectionHeading, HudFrame
lib/content.ts  single source of truth for all site content
```

Read the full codebase before touching anything.
This is a complete brand overhaul, not a color tweak.
The old palette (dark navy #0D1117, gold #FFD700) is
being replaced entirely with the official brand bible.
Every visual decision must follow this bible exactly.

---

BRAND BIBLE — IMPLEMENT THIS EXACTLY

LOGO MARK
The logo is a forward-pointing chevron made of three
parallel diagonal stripes stacked at an angle:
- Top stripe: #C8102E (red) — Defense
- Middle stripe: #1E6FD9 (blue) — Deliver
- Bottom stripe: #00843D (green) — MedFly
The stripes point forward and to the right, like a
velocity vector or a forward command arrow.
Next to the mark: "ATULYA" in Archivo ExtraBold Italic,
sovereign blue #0B3D91. Below it: "AEROSPACE" in
spaced caps, same blue.
Build this logo in SVG directly in the codebase.
Do not use any placeholder or old logo.
Use this logo in the top navigation bar.
On dark sections, the logo appears the same but
"AEROSPACE" text goes white.

MASTER COLOR PALETTE
- Sovereign: #0B3D91 — primary brand blue. Used for
  headings, key text, structural elements, nav
- Strike: #C8102E — bold red. Used for CTAs, highlights,
  accents, the most important one-liners
- Base: #FFFFFF — primary background color
- Slate: #49535E — all body text, secondary labels
- Black: #0A0A0A — used sparingly for maximum contrast
  headlines only

DIVISION COLORS — apply these consistently everywhere
divisions appear (cards, labels, tags, borders, icons)
- ATULYA DEFENSE: #C8102E (Strike red)
- ATULYA DELIVER: #1E6FD9 (royal blue)
- ATULYA MEDFLY: #00843D (forest green)

TYPOGRAPHY
Install these Google Fonts if not already present:
- Archivo (ExtraBold, weight 800, Italic style) —
  ALL headlines, section titles, the tagline, wordmark
- Inter (Regular 400, SemiBold 600) — all body text,
  labels, descriptions
No other fonts. Remove any purple, violet, or
neon-glow font styling completely.

WHAT TO ELIMINATE COMPLETELY
- Any purple, violet, indigo, or lavender color anywhere
- Any neon glow effects
- Any gradient that goes purple-to-blue or similar
- The old gold #FFD700 accent — gone entirely
- The old dark navy #0D1117 as a full-page background
- Any "AI-generated aesthetic" — glowing orbs, aurora
  backgrounds, synthetic-looking gradients
- Particle systems that look like sci-fi screensavers

---

LAYOUT PHILOSOPHY FOR THE REDESIGN

This website should feel like a premium aerospace
institution, not a dark-mode AI startup template.
Think: clean authority. Sharp structure. Colors that
mean something (each division color is intentional).

Section alternation:
- White (#FFFFFF) sections alternate with very dark
  (#0A0A0A or #0B3D91 sovereign blue) sections
- Never full page purple or generic dark gray
- Each section has clear visual purpose

---

SECTION-BY-SECTION REDESIGN

NAVIGATION BAR
Background: white, with a 1px sovereign blue bottom border
Left: the tricolor SVG logo (mark + ATULYA AEROSPACE text)
Right: "Defense" in #C8102E · "Deliver" in #1E6FD9 ·
"MedFly" in #00843D · "Contact" in sovereign blue
Sticky. Clean. No blur effects or glassmorphism.
On scroll past hero: nav background transitions to
#0B3D91 sovereign blue, all text goes white,
logo AEROSPACE text goes white.

HERO SECTION
Background: white (#FFFFFF)
Large headline in Archivo ExtraBold Italic,
sovereign blue #0B3D91:
"ATULYA AEROSPACE"
Below in Strike red #C8102E, Archivo ExtraBold Italic,
slightly smaller:
"Peerless. By Design."
Below in Slate #49535E, Inter Regular:
"One Platform. Three National Missions."
Background graphic: a clean SVG technical line drawing
— a subtle grid or crosshair system, very light gray
(#F0F1F2), like an engineering blueprint overlay.
No particles. No glowing orbs. No aurora.
At the bottom of the hero: three small colored bars
side by side — red, blue, green — representing the
three divisions. Clicking each scrolls to that section.

PROBLEM SECTION
Background: #0B3D91 sovereign blue
All text white.
Three stat blocks — white numbers, white labels:
- "15,106 km" — Land borders without autonomous coverage
- "7,516 km" — Coastline India must protect
- "65%" — Defense equipment currently imported
One line below in Strike red #C8102E italic:
"India has the talent. It has never had the platform."
GSAP ScrollTrigger: numbers count up when scrolled into
view. Start from 0, end at real figure, 2 second duration.
No animations beyond this. Clean and commanding.

DIVISIONS SECTION
Background: white
Section title in Archivo ExtraBold Italic, sovereign blue:
"Three Missions. One Platform."
Three cards side by side. Each card:
- Top border: 4px solid in division color
  (red for Defense, blue for Deliver, green for MedFly)
- Division name in Archivo ExtraBold Italic in its color
- Model tag (B2G / B2C / B2B·B2G) in small caps, slate
- Bullet points in Inter, slate #49535E
- On hover: card lifts with a subtle shadow, border
  thickens to 6px
Cards use white background with very light gray border
(#E8E8E8) normally.

INNOVATIONS SECTION
Background: #0A0A0A (near black, not navy, not purple)
Section title in white Archivo ExtraBold Italic.
Four blocks in a 2x2 grid. Each block:
- Large number (01, 02, 03, 04) in Strike red #C8102E,
  Archivo ExtraBold Italic
- Title in white Archivo bold
- 2-line description in slate #9CA3AF
- Left border: 2px solid #C8102E
GSAP ScrollTrigger: each block fades up from below
as it enters the viewport, staggered by 0.15 seconds.

FOUNDER SECTION
Background: white
Left column: large "15" in Archivo ExtraBold Italic,
Strike red #C8102E. "Years Old" below in slate.
A thin vertical line divider in sovereign blue.
Right column:
"Atul Malik" in Archivo ExtraBold Italic, sovereign blue
"Founder & CEO, Atulya Aerospace" in slate, Inter
Paragraph in Inter, slate.
Below: recognition badges — two small pill-shaped tags:
"Manak Inspire · CSIR" and "TechnoXian · Club Wanjin"
Each badge: white background, sovereign blue border,
sovereign blue text.
Remove: exact location, date of birth, social links,
building since section.

VISION SECTION
Background: #0B3D91 sovereign blue
Large white Archivo ExtraBold Italic headline:
"India's Third Autonomous Drone Superpower."
Below in Strike red italic:
"After the US. After China. Before anyone else."
Timeline below: three phases in white boxes with
sovereign blue text. Clean, minimal, no gimmicks.

CONTACT SECTION
Background: white
Headline in sovereign blue Archivo ExtraBold Italic:
"Built in India. For India. Beginning Now."
Email: atulyaaerospace@protonmail.com
in Inter, slate, with a mailto link
One CTA button:
Background: #C8102E Strike red
Text: white Inter SemiBold "Get In Touch"
On hover: darkens to #A00D25
No neon glow. No animated border. Just a solid,
confident red button.

FOOTER
Background: #0A0A0A
Left: tricolor logo mark (SVG, small size) + company name
Center: three division names in their colors
Right: "atulyaaerospace@protonmail.com" in slate
Bottom line: "© 2026 Atulya Aerospace. Gohana, Haryana,
India. Peerless. By Design." in small slate text.

---

DRONE ILLUSTRATIONS

Keep all existing drone designs but re-render them
using only brand colors:
- VTOL tiltrotor (Deliver + MedFly): stroke color #1E6FD9
  for Deliver, #00843D for MedFly
- Delta wing strike drone: stroke color #C8102E
- HALE surveillance UAV: stroke color #0B3D91
- Rocket interceptor: stroke color #C8102E
- Chemical detection quadcopter: stroke color #49535E
All drones: clean SVG line art style, no fill gradients,
no glow effects, clean engineering-drawing aesthetic.

---

GLOBAL RULES

1. No purple. No violet. No indigo accent anywhere.
2. No neon glow, aurora, or particle systems.
3. No gradient backgrounds that scream AI template.
4. Every color must be from the brand bible exactly.
5. Archivo ExtraBold Italic for every headline.
6. Inter for every body text line.
7. Section backgrounds alternate: white → sovereign blue
   → white → near-black → white → sovereign blue → white
8. The tricolor logo appears in nav and footer always.
9. Mobile responsive — test all breakpoints.
10. Run pnpm build at the end and confirm zero errors.

This should feel like a proper aerospace institution
designed it — not like an AI generated a dark startup
template. Clean. Sharp. Confident. Brand-true.

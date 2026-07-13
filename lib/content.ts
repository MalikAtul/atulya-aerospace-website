/**
 * Atulya Aerospace — single source of truth for site copy and data.
 * Edit content here; the components render whatever lives in this file.
 */

export const SITE = {
  name: "Atulya Aerospace",
  shortName: "Atulya",
  devanagari: "अतुल्य",
  meaning: "Peerless. Incomparable.",
  tagline: "India's unified autonomous drone platform.",
  description:
    "One indigenous autonomy stack flying three national missions — border defense, drone-native quick commerce, and emergency medical logistics. Built in India.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://atulya-aerospace.vercel.app",
  email: "atulyaaerospace@protonmail.com",
  founded: "2026",
} as const;

/* ── Hero ────────────────────────────────────────────────────────────── */

export const HERO = {
  kicker: "UNIFIED AUTONOMOUS DRONE PLATFORM · BHARAT",
  statement:
    "One core autonomy stack. Three national missions. Atulya builds the drones that watch India's borders, deliver its cities, and carry blood to its villages — all on the same indigenous platform.",
  primaryCta: { label: "Request Briefing", href: "#contact" },
  secondaryCta: { label: "Explore Divisions", href: "#divisions" },
} as const;

export const TICKER_ITEMS = [
  "15,106 km land border",
  "7,516 km coastline",
  "~65% defense imports to erase",
  "$23 bn drone market by 2030",
  "sub-10-minute urban delivery",
  "8-minute medicine runs",
  "805 km/h strike platform",
  "one indigenous stack",
  "three national missions",
] as const;

/* ── Headline numbers ────────────────────────────────────────────────── */

export type Stat = {
  value: number;
  prefix?: string;
  unit: string;
  label: string;
  note: string;
  source: string;
};

export const STATS: readonly Stat[] = [
  {
    value: 15106,
    unit: "KM",
    label: "Land border under watch",
    note: "Guarded today by aging, non-autonomous surveillance",
    source: "Ministry of Home Affairs",
  },
  {
    value: 7516,
    unit: "KM",
    label: "Coastline to patrol",
    note: "Persistent maritime awareness, airborne",
    source: "Ministry of Earth Sciences",
  },
  {
    value: 65,
    prefix: "~",
    unit: "%",
    label: "Of defense equipment imported",
    note: "The number Atulya exists to drive to zero",
    source: "Ministry of Defence",
  },
  {
    value: 23,
    prefix: "$",
    unit: "BN",
    label: "India's drone market by 2030",
    note: "Projected economic impact of the national drone opportunity",
    source: "Ministry of Civil Aviation",
  },
] as const;

/* ── Doctrine — why we exist ─────────────────────────────────────────── */

export const DOCTRINE = {
  headline: ["India imports what it has", "every capability to build."],
  sub: "Atulya Aerospace exists to change that.",
  problems: [
    {
      index: "P-01",
      title: "Long borders, aging eyes",
      body: "15,106 kilometres of land border and 7,516 kilometres of coastline are monitored by systems that are neither persistent nor autonomous. Gaps in the watch are measured in hours. Incursions take minutes.",
      answer: "Persistent HALE surveillance — indigenous, autonomous, always on station.",
    },
    {
      index: "P-02",
      title: "An import-dependent arsenal",
      body: "Around 65% of India's defense equipment is bought abroad — with foreign spares, foreign timelines, and foreign permission baked into every deployment.",
      answer: "A drone stack designed, built, and owned end-to-end in India.",
    },
    {
      index: "P-03",
      title: "Medicine that arrives late",
      body: "Rural India loses lives daily because blood and emergency medicine travel by road from district hospitals to village health centres — a journey of hours for a need measured in minutes.",
      answer: "An 8-minute drone corridor from civil hospital to primary health centre.",
    },
    {
      index: "P-04",
      title: "Commerce burning petrol",
      body: "Urban quick commerce pays a rider and burns fuel to fight road geometry on every single order. The cost floor of ground delivery is structural — it cannot be optimised away.",
      answer: "Autonomous hubs and straight-line flight that delete both costs entirely.",
    },
  ],
  closer: ["Three problems. One platform.", "All indigenous. All built in India."],
} as const;

/* ── Divisions ───────────────────────────────────────────────────────── */

export type Division = {
  code: string;
  slug: string;
  name: string;
  fullName: string;
  sector: string;
  accent: "saffron" | "chakra" | "leaf";
  tagline: string;
  mandate: string;
  systems: string[];
  status: string;
  schematic: "hale" | "cargo" | "med";
};

export const DIVISIONS: Division[] = [
  {
    code: "01",
    slug: "/defense",
    name: "Defense",
    fullName: "Atulya Defense",
    sector: "B2G · ARMED FORCES & PARAMILITARY",
    accent: "saffron",
    tagline: "Autonomous airpower for the forces that hold the line.",
    mandate:
      "Surveillance, interception, and strike systems for the Indian Army, BSF, Indian Coast Guard, and CISF — engineered for the length of India's borders and the pace of modern drone warfare.",
    systems: [
      "HALE surveillance platform",
      "RF swarm interceptor",
      "805 km/h jet strike drone",
      "Loitering munitions",
      "Chemical-threat detection",
      "Border interdiction drones",
    ],
    status: "PROTOTYPE TRACK → IDEX ENTRY",
    schematic: "hale",
  },
  {
    code: "02",
    slug: "/delhiver",
    name: "Delhiver",
    fullName: "Atulya Delhiver",
    sector: "B2C · QUICK COMMERCE",
    accent: "chakra",
    tagline: "India's first drone-native quick commerce platform.",
    mandate:
      "Not selling drones to delivery companies — replacing them. Our own app, our own neighbourhood hubs, our own drones, flying prepaid orders in straight lines that no road network can match.",
    systems: [
      "Consumer ordering app",
      "Neighbourhood micro-hubs",
      "VTOL tiltrotor cargo drones",
      "Sub-10-minute doorstep delivery",
    ],
    status: "PHASE 1 — HARYANA LAUNCH",
    schematic: "cargo",
  },
  {
    code: "03",
    slug: "/medfly",
    name: "MedFly",
    fullName: "Atulya MedFly",
    sector: "B2B · B2G · PUBLIC HEALTH",
    accent: "leaf",
    tagline: "Emergency medicine and blood, at the speed of flight.",
    mandate:
      "A drone lifeline from civil hospitals and blood banks to rural primary health centres — cutting transfer times from hours to minutes, in partnership with state health departments. Haryana first.",
    systems: [
      "Blood & component transport",
      "Emergency medicine delivery",
      "Cold-chain payload bay",
      "Hospital-to-PHC corridors",
    ],
    status: "STATE TRACK — HARYANA FIRST",
    schematic: "med",
  },
];

/* ── The unified stack ───────────────────────────────────────────────── */

export const PLATFORM = {
  headline: ["Every mission flies", "the same core."],
  intro:
    "A border patrol, a grocery run, and a blood transfer look different from the ground. From the flight controller, they are the same problem: autonomous flight, precise navigation, reliable delivery of a payload. Atulya builds that problem's answer once — and deploys it three ways.",
  layers: [
    {
      label: "Autonomy Core",
      value: "One flight intelligence",
      detail:
        "GPS-denied navigation, computer-vision landing, obstacle avoidance, and swarm coordination — a single software brain matured across every flight hour of all three divisions.",
    },
    {
      label: "Airframes",
      value: "Multirotor · Fixed-wing · Jet",
      detail:
        "Mission-specific bodies on a common avionics and power bus — from neighbourhood cargo tiltrotors to high-altitude long-endurance wings to turbine-driven strike platforms.",
    },
    {
      label: "Propulsion",
      value: "Electric to turbine",
      detail:
        "Battery-electric propulsion for city logistics and endurance surveillance; turbine power for the 805 km/h class. Indigenised progressively through Phase 3.",
    },
    {
      label: "Comms & RF",
      value: "Encrypted mesh + RF payloads",
      detail:
        "Encrypted command links and swarm mesh networking — and on the defense side, the RF sensing and broadband-interference payloads that make one interceptor lethal to an entire swarm.",
    },
    {
      label: "Ground Network",
      value: "Hubs · Pads · Tubes",
      detail:
        "Neighbourhood commerce hubs, hospital landing pads, and man-portable launch tubes — one logistics doctrine expressed in three kinds of ground truth.",
    },
    {
      label: "Manufacturing",
      value: "Indigenous by Phase 3",
      detail:
        "Airframe, propulsion, electronics, and AI brought fully in-country — the supply chain itself as a strategic asset.",
    },
  ],
  flywheel: {
    title: "The flywheel",
    steps: [
      {
        label: "FLY",
        text: "Delhiver and MedFly generate thousands of civilian flight hours and revenue.",
      },
      {
        label: "LEARN",
        text: "Every flight hardens the shared autonomy core — navigation, landing, failure recovery.",
      },
      {
        label: "DEFEND",
        text: "A combat-relevant, flight-proven stack reaches the armed forces years ahead of any lab-bound competitor.",
      },
    ],
    closer:
      "Commercial volume funds and trains the autonomy that guards the border. That is the structural advantage of one platform over three separate companies.",
  },
} as const;

/* ── Mission & roadmap ───────────────────────────────────────────────── */

export const MISSION = {
  statement: ["Make India the world's", "third", "autonomous drone superpower."],
  clarifier: "After the United States and China. Before anyone else.",
  phases: [
    {
      phase: "Phase I",
      name: "Foundation",
      years: "Years 1–3",
      status: "active",
      milestones: [
        "Launch Atulya Delhiver in Haryana",
        "Sign first MedFly state government agreement",
        "Complete first defense prototype",
        "Enter iDEX — Innovations for Defence Excellence",
      ],
    },
    {
      phase: "Phase II",
      name: "Expansion",
      years: "Years 3–6",
      status: "ahead",
      milestones: [
        "Scale Delhiver to 50 cities",
        "Expand MedFly to 5 states",
        "Secure first BSF and Coast Guard contracts",
        "Begin defense exports to friendly Indo-Pacific nations",
      ],
    },
    {
      phase: "Phase III",
      name: "Sovereignty",
      years: "Years 6–10",
      status: "ahead",
      milestones: [
        "Full indigenous manufacturing — airframe, propulsion, electronics, AI",
        "List on Indian stock exchanges",
        "Co-production agreements with allied nations",
        "Swarm systems deployed with Indian armed forces at scale",
      ],
    },
  ],
} as const;

/* ── Founder ─────────────────────────────────────────────────────────── */

export const FOUNDER = {
  name: "Atul Malik",
  role: "Founder",
  dossier: [
    { label: "Field", value: "Aerospace · Autonomous systems · Defense tech" },
    { label: "Company", value: "Atulya Aerospace — Defense · Delhiver · MedFly" },
  ],
  story: [
    "Since 2019 he has been taking apart the question of how machines and systems work — six years of self-directed research into aerospace, autonomous systems, and defense technology, all of it before any formal instruction in the field.",
    "Atulya is an extension of his own name — and the standard the company is held to. Peerless. Incomparable. It is what he believes India's engineering can be when it stops importing what it is fully capable of building.",
  ],
  reframe:
    "A founder this young is not a caveat — it is the point. The engineers who will make India a drone superpower by 2036 are in school today. One of them decided not to wait.",
  recognitions: [
    {
      title: "Manak Inspire",
      org: "CSIR — National Innovation Programme",
      note: "National recognition under India's flagship student innovation programme.",
    },
    {
      title: "Club Wanjin · TechnoXian",
      org: "World Robotics Championship platform",
      note: "Member at one of India's largest robotics competitions.",
    },
  ],
  quote: "India imports what it has every capability to build. Atulya Aerospace exists to change that.",
} as const;

/* ── Contact ─────────────────────────────────────────────────────────── */

export const CONTACT = {
  headline: ["Request a", "briefing."],
  intro:
    "Atulya Aerospace briefs defense and government stakeholders, investors, state health departments, and prospective partners. Tell us who you are and what you need to evaluate — we respond within 48 hours.",
  audiences: [
    "Defense & Government",
    "Investor / VC",
    "State Health Department",
    "Partner / Supplier",
    "Media",
  ],
  rows: [
    {
      label: "Email",
      value: "atulyaaerospace@protonmail.com",
      href: "mailto:atulyaaerospace@protonmail.com",
    },
    { label: "Response", value: "Within 48 hours" },
  ],
} as const;

/* ── Defense division page ───────────────────────────────────────────── */

export const DEFENSE_PAGE = {
  meta: {
    title: "Atulya Defense — Autonomous Airpower for India's Borders",
    description:
      "Surveillance, interception, and strike drone systems for the Indian Army, BSF, Indian Coast Guard, and CISF. HALE platforms, RF swarm interceptors, 805 km/h jet strike drones — indigenous by design.",
  },
  hero: {
    users: ["Indian Army", "BSF", "Indian Coast Guard", "CISF"],
    statement:
      "India's borders are long, its adversaries are cheap and many, and its surveillance is aging. Atulya Defense builds the autonomous systems that flip that equation — persistent eyes, single-pass swarm kills, and strike speed measured in Mach fractions.",
  },
  stats: [
    { value: "15,106 KM", label: "Land border in the mandate" },
    { value: "7,516 KM", label: "Coastline in the mandate" },
    { value: "1 PASS", label: "To neutralise a full swarm" },
    { value: "805 KM/H", label: "Jet strike design speed" },
  ],
  systems: [
    {
      designation: "AD-H1",
      name: "HALE Surveillance Platform",
      className: "High Altitude · Long Endurance",
      schematic: "hale" as const,
      description:
        "A long-wing autonomous aircraft built for persistent border and coastal monitoring — staying on station for extended endurance runs where crewed patrols and short-range quadcopters cannot.",
      chips: ["Border + coastal ISR", "Persistent station-keeping", "Autonomous patrol lines"],
    },
    {
      designation: "AD-S1",
      name: "RF Swarm Interceptor",
      className: "Counter-swarm · Tube-launched",
      schematic: "interceptor" as const,
      description:
        "A single drone, launched from a tube, that flies through an enemy drone swarm broadcasting broadband RF interference — severing every coordination link in the formation simultaneously, in one pass.",
      chips: ["Tube launch", "Broadband RF interference", "One pass — whole swarm"],
    },
    {
      designation: "AD-J1",
      name: "Jet Strike Platform",
      className: "Turbine · Cranked Delta",
      schematic: "jet" as const,
      description:
        "A jet-powered cranked-delta airframe — sharp fighter nose blending into the body, full delta wing from mid-body to tail — targeting the ~805 km/h (500 mph) class across fast surveillance, kamikaze strike, and surface defense.",
      chips: ["805 km/h design target", "Cranked delta planform", "Turbine propulsion"],
    },
    {
      designation: "AD-C1",
      name: "Chem-Detect System",
      className: "CBRN awareness",
      schematic: "quad" as const,
      description:
        "Drone-borne chemical detection for battlefield threat awareness — sampling and flagging airborne agents ahead of advancing troops instead of alongside them.",
      chips: ["Airborne chemical sensing", "Ahead-of-troops standoff", "Battlefield awareness"],
    },
    {
      designation: "AD-L1",
      name: "Loitering Munition",
      className: "Precision strike",
      schematic: "loiter" as const,
      description:
        "Precision-guided kamikaze drones that hold overhead, confirm the target, and commit — persistence and strike folded into a single expendable airframe.",
      chips: ["Loiter + strike", "Precision terminal guidance", "Expendable airframe"],
    },
    {
      designation: "AD-B1",
      name: "Border Interdictor",
      className: "Counter-UAS · Interdiction",
      schematic: "intercept" as const,
      description:
        "A tube-launched, rocket-bodied interceptor with four tail-mounted motors for the smuggling UAVs crossing India's western border — detect, chase, and bring down hostile traffic without scrambling anything crewed.",
      chips: ["Tube-launched", "Autonomous intercept", "Night operations"],
    },
  ],
  swarm: {
    kicker: "FLAGSHIP CONCEPT — AD-S1",
    headline: ["A thousand cheap drones defeat any defense —", "unless one drone can defeat the thousand."],
    body: [
      "A drone swarm is not a thousand independent threats. It is one distributed system with a thousand airframes — and it lives or dies by the radio links that coordinate it.",
      "AD-S1 attacks the system, not the airframes. Launched from a tube in seconds, it flies a single pass through the formation broadcasting broadband RF interference. Every coordination link in radio range drops at once. The swarm stops being a swarm.",
    ],
    steps: [
      { label: "LAUNCH", text: "Tube-launched in seconds from vehicle, vessel, or fixed position." },
      { label: "PENETRATE", text: "Flies directly through the swarm formation at closing speed." },
      { label: "SEVER", text: "Broadband RF broadcast cuts every coordination signal simultaneously." },
    ],
    closer: "One tube. One drone. One pass. The economics of swarm defense, inverted.",
  },
  pathway: {
    title: "Procurement pathway",
    steps: [
      { phase: "NOW", text: "Prototype development across the AD system family" },
      { phase: "PHASE I", text: "iDEX entry and first complete defense prototype" },
      { phase: "PHASE II", text: "First BSF and Coast Guard contracts · exports to friendly Indo-Pacific nations" },
      { phase: "PHASE III", text: "Swarm systems deployed with Indian armed forces at scale · co-production with allies" },
    ],
  },
} as const;

/* ── Delhiver division page ──────────────────────────────────────────── */

export const DELHIVER_PAGE = {
  meta: {
    title: "Atulya Delhiver — Quick Commerce Without Roads",
    description:
      "India's first drone-native quick commerce platform. Own app, own hubs, own drones — prepaid orders delivered in under 10 minutes by straight-line flight. Launching in Haryana.",
  },
  hero: {
    statement:
      "Every quick-commerce order in India today pays a rider to fight traffic and burns petrol to follow roads. Delhiver deletes the rider, the petrol, and the roads — and keeps the ten minutes.",
    chips: ["OWN APP", "OWN HUBS", "OWN DRONES", "PREPAID · UNDER 10 MIN"],
  },
  positioning: {
    headline: ["Not selling drones to quick commerce.", "Replacing it."],
    body: "Delhiver is not a hardware vendor to Blinkit or Zepto. It is a full-stack competitor — a consumer app, a network of neighbourhood hubs, and an autonomous drone fleet operating as one platform. The delivery fee stops paying for a salary and a fuel tank, and starts paying for electrons.",
  },
  geometry: {
    headline: ["Roads bend.", "Flight doesn't."],
    body: "A city address that is 3 km away in a straight line is 4–5 km away by road, behind signals, turns, and traffic. A drone flies the displacement, not the route. That difference is structural — no ground fleet, however optimised, can remove it.",
    road: { label: "GROUND ROUTE", detail: "Road network · signals · traffic · rider" },
    air: { label: "DELHIVER FLIGHT", detail: "Straight-line displacement · autonomous" },
  },
  economics: {
    title: "Structural economics",
    intro: "Ground delivery's costs are per-order and permanent. Delhiver's are per-fleet and falling.",
    rows: [
      { dimension: "Path", ground: "Road network — every detour paid for", air: "Straight-line displacement" },
      { dimension: "Courier", ground: "Rider salary on every order", air: "Autonomous — no marginal labour" },
      { dimension: "Energy", ground: "Petrol, priced by the barrel", air: "Battery-electric, priced by the grid" },
      { dimension: "Window", ground: "15–30 minutes, traffic permitting", air: "Under 10 minutes, prepaid" },
      { dimension: "Cost curve", ground: "Scales linearly with orders", air: "Falls as autonomy matures" },
    ],
  },
  flow: {
    title: "Order to doorstep",
    steps: [
      { label: "ORDER", text: "Prepaid order placed on the Delhiver app — no cash handling at the door." },
      { label: "DISPATCH", text: "The nearest neighbourhood hub packs and loads the drone in minutes." },
      { label: "FLIGHT", text: "Straight-line autonomous flight along a reserved delivery corridor." },
      { label: "DELIVERY", text: "The sealed pod winches down at the doorstep, releases on OTP verification, and retracts — under ten minutes from tap to hand." },
    ],
  },
  network: {
    headline: ["A hub every few kilometres.", "A city fully covered."],
    body: "Each neighbourhood hub is a dark store with airspace — stocking fast-moving essentials and serving every address inside its flight radius. Hubs tile the city; coverage compounds. Haryana first, fifty cities by Phase II.",
    chips: ["HARYANA — PHASE I", "50 CITIES — PHASE II"],
  },
} as const;

/* ── MedFly division page ────────────────────────────────────────────── */

export const MEDFLY_PAGE = {
  meta: {
    title: "Atulya MedFly — Emergency Medicine at the Speed of Flight",
    description:
      "Drone delivery of blood and emergency medicine from civil hospitals to rural primary health centres — minutes instead of hours. Partnering with state health departments. Launching in Haryana.",
  },
  hero: {
    statement:
      "Between a rural primary health centre and the district hospital lies a road that takes hours. For a bleeding patient, that road is the diagnosis. MedFly replaces it with eight minutes of straight-line flight.",
    chips: ["CIVIL HOSPITALS", "BLOOD BANKS", "STATE HEALTH DEPARTMENTS", "HARYANA FIRST"],
  },
  problem: {
    headline: ["The distance is small.", "The delay is deadly."],
    body: [
      "India's rural primary health centres are the first door for hundreds of millions of people — and they routinely run out of exactly what an emergency needs: blood, antivenom, rabies vaccine, emergency medicine. The stock exists a district away.",
      "Today that gap is closed by a vehicle on rural roads, in hours. Rural India loses lives daily to a transfer problem that a drone closes in minutes.",
    ],
    stat: { value: "8", unit: "MIN", label: "Typical MedFly corridor run — hospital to PHC" },
  },
  system: {
    title: "The lifeline corridor",
    steps: [
      { label: "REQUEST", text: "PHC raises a demand — blood unit, antivenom, emergency medicine." },
      { label: "LOAD", text: "Nearest civil hospital or blood bank loads the cold-chain payload bay." },
      { label: "FLIGHT", text: "Autonomous straight-line corridor flight — no roads, no traffic, no hours." },
      { label: "HANDOVER", text: "The cold-chain pod winches down at the PHC pad and releases on OTP verification — chain of custody intact." },
    ],
    payloads: [
      "Whole blood & components",
      "Emergency medicines",
      "Antivenom & rabies vaccine",
      "Cold-chain sensitive supplies",
    ],
  },
  states: {
    headline: ["Built for states", "that move first."],
    body: [
      "MedFly partners with civil hospitals, blood banks, and state health departments — infrastructure that already exists, connected by air for the first time. The outcomes are immediate and measurable: transfer times collapse from hours to minutes, stockouts stop being fatal.",
      "It launches first in Haryana — the founder's home state — as a corridor network between district hospitals and their PHCs, then scales nationally state by state. For a government, this is the rare public-health investment that citizens can watch flying overhead.",
    ],
    chips: ["HARYANA — FIRST STATE", "5 STATES — PHASE II", "NATIONAL — PHASE III"],
  },
} as const;

/* ── Footer ──────────────────────────────────────────────────────────── */

export const FOOTER = {
  blurb:
    "India's unified autonomous drone platform. One indigenous stack — defense, delivery, and lifeline logistics.",
  columns: [
    {
      title: "Divisions",
      links: [
        { label: "Atulya Defense", href: "/defense" },
        { label: "Atulya Delhiver", href: "/delhiver" },
        { label: "Atulya MedFly", href: "/medfly" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "The Doctrine", href: "/#doctrine" },
        { label: "The Platform", href: "/#platform" },
        { label: "The Mission", href: "/#mission" },
        { label: "The Founder", href: "/#founder" },
      ],
    },
    {
      title: "Engage",
      links: [
        { label: "Request Briefing", href: "/#contact" },
        { label: "atulyaaerospace@protonmail.com", href: "mailto:atulyaaerospace@protonmail.com" },
      ],
    },
  ],
  line: "Designed and engineered in India.",
} as const;

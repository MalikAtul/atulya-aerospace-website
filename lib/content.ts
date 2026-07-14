/**
 * Atulya Aerospace — single source of truth for site copy and data.
 * Edit content here; the components render whatever lives in this file.
 */

export const SITE = {
  name: "Atulya Aerospace",
  shortName: "Atulya",
  tagline: "Peerless. By Design.",
  description:
    "One indigenous autonomy stack flying three national missions — border defense, drone-native quick commerce, and emergency medical logistics. Built in India.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://atulya-aerospace.vercel.app",
  email: "atulyaaerospace@protonmail.com",
  founded: "2026",
  location: "Gohana, Haryana, India",
} as const;

/* ── Hero ────────────────────────────────────────────────────────────── */

export const HERO = {
  title: ["ATULYA", "AEROSPACE"],
  punch: "Peerless. By Design.",
  sub: "One Platform. Three National Missions.",
} as const;

/* ── Problem ─────────────────────────────────────────────────────────── */

export const PROBLEM = {
  stats: [
    { value: 15106, unit: "km", label: "Land borders without autonomous coverage" },
    { value: 7516, unit: "km", label: "Coastline India must protect" },
    { value: 65, unit: "%", label: "Defense equipment currently imported" },
  ],
  line: "India has the talent. It has never had the platform.",
} as const;

/* ── Divisions ───────────────────────────────────────────────────────── */

export type DivisionAccent = "defense" | "deliver" | "medfly";

export type Division = {
  code: string;
  slug: string;
  anchor: string;
  name: string;
  fullName: string;
  sector: string;
  accent: DivisionAccent;
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
    anchor: "division-defense",
    name: "Defense",
    fullName: "Atulya Defense",
    sector: "B2G",
    accent: "defense",
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
    anchor: "division-delhiver",
    name: "Delhiver",
    fullName: "Atulya Delhiver",
    sector: "B2C",
    accent: "deliver",
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
    anchor: "division-medfly",
    name: "MedFly",
    fullName: "Atulya MedFly",
    sector: "B2B · B2G",
    accent: "medfly",
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

export const DIVISIONS_SECTION = {
  title: "Three Missions. One Platform.",
} as const;

/* ── Innovations ─────────────────────────────────────────────────────── */

export const INNOVATIONS = {
  title: "Built to Change the Math.",
  items: [
    {
      title: "RF Swarm Interceptor",
      body: "One tube-launched drone flies a single pass through an enemy swarm, severing every coordination link in the formation at once.",
    },
    {
      title: "805 km/h Jet Strike Platform",
      body: "A turbine-driven cranked-delta airframe targeting fighter-class speed — fast surveillance, kamikaze strike, surface defense.",
    },
    {
      title: "Unified Autonomy Core",
      body: "One flight intelligence — GPS-denied navigation, vision landing, swarm coordination — hardened by every civilian flight hour.",
    },
    {
      title: "8-Minute Medical Corridor",
      body: "Cold-chain drone corridors from civil hospitals to rural health centres, collapsing transfer times from hours to minutes.",
    },
  ],
} as const;

/* ── Founder ─────────────────────────────────────────────────────────── */

export const FOUNDER = {
  age: "15",
  ageLabel: "Years Old",
  name: "Atul Malik",
  role: "Founder & CEO, Atulya Aerospace",
  paragraph:
    "Six years of self-directed research into aerospace, autonomous systems, and defense technology — all of it before any formal instruction in the field. Atulya is an extension of his own name, and the standard the company is held to: peerless, incomparable, what Indian engineering can be when it stops importing what it is fully capable of building.",
  badges: ["Manak Inspire · CSIR", "TechnoXian · Club Wanjin"],
} as const;

/* ── Vision ──────────────────────────────────────────────────────────── */

export const VISION = {
  headline: "India's Third Autonomous Drone Superpower.",
  sub: "After the US. After China. Before anyone else.",
  phases: [
    {
      phase: "Phase I",
      name: "Foundation",
      years: "Years 1–3",
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
      milestones: [
        "Full indigenous manufacturing — airframe, propulsion, electronics, AI",
        "List on Indian stock exchanges",
        "Co-production agreements with allied nations",
        "Swarm systems deployed with Indian armed forces at scale",
      ],
    },
  ],
} as const;

/* ── Contact ─────────────────────────────────────────────────────────── */

export const CONTACT = {
  headline: "Built in India. For India. Beginning Now.",
  email: SITE.email,
  cta: "Get In Touch",
} as const;

/* ── Footer ──────────────────────────────────────────────────────────── */

export const FOOTER = {
  line: "Gohana, Haryana, India. Peerless. By Design.",
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

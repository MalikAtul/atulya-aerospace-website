import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/content";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Atulya Aerospace",
    "autonomous drones India",
    "defense drones India",
    "drone delivery India",
    "medical drone delivery",
    "HALE UAV",
    "counter-swarm",
    "iDEX",
    "Atmanirbhar Bharat",
    "Haryana startup",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  foundingDate: SITE.founded,
  founder: { "@type": "Person", name: "Atul Malik" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gohana",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="label-sm sr-only z-[100] bg-sovereign px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}

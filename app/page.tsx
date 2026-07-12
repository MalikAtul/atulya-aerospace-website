import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/Ticker";
import { StatBand } from "@/components/home/StatBand";
import { Doctrine } from "@/components/home/Doctrine";
import { Divisions } from "@/components/home/Divisions";
import { Platform } from "@/components/home/Platform";
import { Roadmap } from "@/components/home/Roadmap";
import { Founder } from "@/components/home/Founder";
import { Creed } from "@/components/home/Creed";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <StatBand />
      <Doctrine />
      <Divisions />
      <Platform />
      <Roadmap />
      <Founder />
      <Creed />
      <Contact />
    </>
  );
}

import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Divisions } from "@/components/home/Divisions";
import { Innovations } from "@/components/home/Innovations";
import { Founder } from "@/components/home/Founder";
import { Vision } from "@/components/home/Vision";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Divisions />
      <Innovations />
      <Founder />
      <Vision />
      <Contact />
    </>
  );
}

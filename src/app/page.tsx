import Hero from "../components/sections/Hero";
import { HowItWorks } from "../components/sections/HowItWorks";
import { TopVehicles } from "../components/sections/TopVehicles";
import { AboutSnapshot } from "../components/sections/AboutSnapshot";
import { Reviews } from "../components/sections/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TopVehicles />
      <AboutSnapshot />
      <Reviews />
    </>
  );
}
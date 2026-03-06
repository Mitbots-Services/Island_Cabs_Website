import PopularRoutes from "@/components/sections/PopularRoutes";
import { AboutSnapshot } from "../components/sections/AboutSnapshot";
import Hero from "../components/sections/Hero";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Reviews } from "../components/sections/Reviews";
import { TopVehicles } from "../components/sections/TopVehicles";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Island Cabs | Rameshwaram Taxi Service – Cab to Madurai & Kanyakumari",
  description:
    "Island Cabs offers trusted taxi services in Rameshwaram with 6+ years of experience. Book cabs for Rameshwaram temple tours, Madurai trips, Kanyakumari travel and South Tamil Nadu tours.",
  keywords: [
    "Island Cabs",
    "Rameshwaram taxi service",
    "cab service in Rameshwaram",
    "Rameshwaram to Madurai taxi",
    "Rameshwaram to Kanyakumari taxi",
    "Rameshwaram temple tour taxi",
    "South Tamil Nadu taxi tours",
  ],
  alternates: {
    canonical: "https://islandcabsrameshwaram.in",
  },
  openGraph: {
    title: "Island Cabs | Rameshwaram Taxi Service",
    description:
      "Reliable taxi services in Rameshwaram for temple tours, Madurai and Kanyakumari travel.",
    url: "https://islandcabsrameshwaram.in",
    siteName: "Island Cabs",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TopVehicles />
      <PopularRoutes />
      <AboutSnapshot />
      <Reviews />
    </>
  );
}

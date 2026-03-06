"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import HB from "../../assets/HatchbackVechicle.webp";
import Road from "../../assets/Road.webp";
import Sedan from "../../assets/SedanVehicle.webp";
import SUV from "../../assets/SUVVehicle.webp";
import Tempo from "../../assets/TempoVehicle.webp";

const vehicles = [
  {
    name: "Hatchback",
    desc: "Affordable and compact taxis ideal for short trips, local sightseeing, and comfortable travel for up to 4 passengers.",
    image: HB,
  },
  {
    name: "Sedan",
    desc: "Comfortable taxi for city travel and airport transfers. Ideal for up to 4 passengers.",
    image: Sedan,
  },
  {
    name: "SUV",
    desc: "Spacious SUV perfect for families and temple tours across Tamil Nadu.",
    image: SUV,
  },
  {
    name: "Tempo Traveller",
    desc: "Perfect for group travel, pilgrim tours and large family trips.",
    image: Tempo,
  },
];

export default function VehicleRoadCarousel() {
  const [index, setIndex] = useState(0);

  const vehicle = vehicles[index];

  const next = () => setIndex((index + 1) % vehicles.length);
  const prev = () => setIndex((index - 1 + vehicles.length) % vehicles.length);

  return (
    <section className="relative py-16 md:py-28 bg-[var(--bg)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text)]">
            Our Vehicle Fleet
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-6 md:mt-10"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary)]">
                {vehicle.name}
              </h3>

              <p className="mt-3 md:mt-4 text-[var(--text)]/70 max-w-md mx-auto md:mx-0">
                {vehicle.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex justify-center md:justify-start gap-4 mt-8 md:mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f3f4f6] transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full primary text-white flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* VEHICLE DISPLAY */}
        <div className="relative h-[200px] sm:h-[260px] md:h-[320px] flex items-end justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={vehicle.name}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                width={520}
                height={260}
                className="object-contain max-w-[85vw] md:max-w-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ROAD BACKGROUND */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-repeat-x"
        style={{
          backgroundImage: `url(${Road.src})`,
          backgroundSize: "auto 100%",
        }}
      />
    </section>
  );
}

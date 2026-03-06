"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroCar from "../../assets/Car.webp";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      className="
      relative
      pt-32
      pb-24
      overflow-hidden
      bg-gradient-to-br from-[#eef2ff] via-white to-[#e0e7ff]
      "
    >
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-heading text-black leading-tight"
          >
            Island Cabs
            <br />
            Rameshwaram Taxi Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-black/80 max-w-lg"
          >
            Island Cabs provides reliable taxi services in Rameshwaram for
            temple tours, local sightseeing and outstation trips to Madurai,
            Kanyakumari and other destinations across South Tamil Nadu. With
            over 6 years of experience, we ensure safe, comfortable and punctual
            travel for tourists and pilgrims visiting Rameshwaram.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex gap-4 items-center flex-wrap"
          >
            <Link href="/book-now">
              <Button variant="primary" className="px-8 py-3 shadow-md">
                Book Taxi
              </Button>
            </Link>

            <Link href="/cab-services">
              <Button variant="outlineBlue">Explore Vehicles</Button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center md:-mr-20"
        >
          <div className="w-[180%] md:w-[200%] relative z-10">
            <Image
              src={HeroCar}
              alt="Island Cabs taxi service in Rameshwaram for temple tours and Madurai travel"
              width={1900}
              height={1200}
              priority
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

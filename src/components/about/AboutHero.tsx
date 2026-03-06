"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Handshake from "../../assets/Handshake.webp";
import Button from "../ui/Button";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#eef2ff] via-white to-[#e0e7ff]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D6A94E] font-semibold uppercase tracking-wider text-sm"
          >
            About Island Cabs
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-3xl md:text-5xl font-bold leading-tight font-heading"
          >
            Trusted Taxi Service
            <br />
            in Rameshwaram
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-black/60 text-lg max-w-xl"
          >
            Island Cabs provides reliable taxi services for tourists and
            pilgrims visiting Rameshwaram with travel to Madurai, Kanyakumari
            and across Tamil Nadu.
          </motion.p>

          <motion.div className="mt-10">
            <Link href="/contact-us">
              <Button variant="primary">Contact Us</Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={Handshake}
            alt="Island Cabs taxi service"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

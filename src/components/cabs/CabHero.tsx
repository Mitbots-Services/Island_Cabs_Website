"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";

export default function CabHero() {
  return (
    <div>
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#D6A94E] font-semibold uppercase tracking-wider text-sm"
      >
        Island Cabs
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-4xl md:text-5xl font-bold font-heading text-[#111827] leading-tight"
      >
        Cab Services in Rameshwaram
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-gray-600 max-w-lg text-lg"
      >
        Island Cabs provides professional taxi services for temple tours, local
        sightseeing and long-distance travel across Tamil Nadu. Our experienced
        drivers and well maintained vehicles ensure safe and comfortable
        journeys.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-8 flex flex-wrap gap-6 text-[#0D276D] font-semibold"
      >
        <span>✔ Temple Tours</span>
        <span>✔ Airport Transfers</span>
        <span>✔ Outstation Travel</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex gap-6 flex-wrap"
      >
        <Link href="/contact-us">
          <Button variant="primary">Send Booking Request</Button>
        </Link>

        <a href="tel:+918056867468">
          <Button variant="outlineBlue">Call Now</Button>
        </a>
      </motion.div>
    </div>
  );
}

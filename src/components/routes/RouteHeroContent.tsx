"use client";

import Button from "../ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
};

export default function AnimatedHeroContent({ title, description }: Props) {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#111827]"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mt-6 text-gray-600"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-8 flex gap-4 flex-wrap"
      >
        <Link href="/book-now">
          <Button variant="primary">Send Booking Request</Button>
        </Link>

        <a href="tel:+918056867468">
          <Button variant="outlineBlue">Call Now</Button>
        </a>
      </motion.div>
    </div>
  );
}

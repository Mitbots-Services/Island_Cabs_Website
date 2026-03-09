"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Reviews() {
  const reviews = [
    {
      name: "Raghav Srinivasan",
      location: "Chennai",
      review:
        "Island Cabs provided the most reliable airport transfer service in Chennai. The driver arrived on time, the vehicle was clean, and the journey was smooth and comfortable.",
    },
    {
      name: "Priya Narayanan",
      location: "Coimbatore",
      review:
        "We booked an outstation cab from Coimbatore to Madurai and the experience was excellent. The car was well maintained and the driver was very courteous.",
    },
    {
      name: "Arun Kumar",
      location: "Corporate Client",
      review:
        "Our company regularly uses Island Cabs for corporate travel and airport pickups. Their punctuality and professionalism make them a dependable partner.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const review = reviews[index];
  const initial = review.name.charAt(0);

  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            What people say
            <br />
            <span className="text-[var(--primary)]">about us.</span>
          </h2>

          {/* navigation */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[var(--secondary)] flex items-center justify-center hover:bg-[var(--secondary)]/20 transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:bg-[var(--secondary)] transition"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* background stacked card */}
          <div className="absolute top-8 left-6 w-full h-full bg-white rounded-2xl opacity-40"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-[color-mix(in_srgb,var(--secondary)_20%,transparent)]"
            >
              {/* avatar circle */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-semibold text-lg shadow-md">
                {initial}
              </div>

              <p className="text-[var(--text)]/70 leading-relaxed mt-4">
                {review.review}
              </p>

              <div className="mt-6">
                <p className="font-semibold text-[var(--text)]">
                  {review.name}
                </p>

                <div className="text-[var(--accent)] text-sm mt-1">★★★★★</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

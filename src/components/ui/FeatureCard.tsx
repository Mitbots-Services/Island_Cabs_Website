"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
    number: string;
    title: string;
    description: string;
}

export default function FeatureCard({
    number,
    title,
    description,
}: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative group overflow-hidden rounded-xl bg-white p-9 shadow-md transition-all duration-300"
        >
            {/* Circular Expanding Fill */}
            <span
                className="
          absolute
          -top-16
          -right-16
          w-40
          h-40
          primary
          rounded-full
          scale-0
          group-hover:scale-[6]
          transition-transform
          duration-700
          ease-out
          origin-center
          z-0
        "
            />

            {/* Number Bubble */}
            <div className="w-20 h-20 primary rounded-full absolute -right-5 -top-6 flex items-end justify-start z-10">
                <span className="text-white text-xl font-semibold ml-5 mb-3">
                    {number}
                </span>
            </div>

            {/* Content */}
            <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                <h3 className="font-semibold text-xl text-main group-hover:text-white transition">
                    {title}
                </h3>

                <p className="text-sm text-gray-600 leading-6 mt-3 group-hover:text-white transition">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
"use client";

import Image from "next/image";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

interface VehicleCardProps {
    name: string;
    image: string;
    capacity: string;
}

export default function VehicleCard({
    name,
    image,
    capacity,
}: VehicleCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group"
        >
            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Content */}
            <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-[#111827]">
                    {name}
                </h3>

                <div className="mt-3 flex items-center text-gray-600">
                    <Users size={18} className="mr-2 text-[#0D276D]" />
                    <span>{capacity}</span>
                </div>

                <button className="mt-5 w-full bg-[#0D276D] text-white py-2 rounded-lg hover:bg-[#6482B9] transition duration-300">
                    Select Vehicle
                </button>
            </div>
        </motion.div>
    );
}
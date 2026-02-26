"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/ui/FeatureCard";
import Link from "next/link";
import Image from "next/image";
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};
export default function AboutPage() {
    return (
        <main className="bg">
            {/* HERO */}
            <section
                className="
    relative 
    pt-32 
    pb-24 
    overflow-hidden
    bg-gradient-to-br 
    from-[#f8fafc] 
    via-[#b7c6e2] 
    to-[#85a1f6]
  "
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[#D6A94E] font-semibold uppercase tracking-wider text-sm"
                        >
                            About Island Cabs
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mt-4 text-5xl md:text-6xl font-bold text-main leading-tight"
                        >
                            Reliable Travel Solutions
                            <br />
                            Across South India
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 text-black/60 text-lg max-w-xl leading-relaxed"
                        >
                            Travel South India the premium way. From the scattered streets of
                            Rameshwaram to the vibrant cities across Tamil Nadu and beyond,
                            we provide reliable, comfortable, and professionally managed cab
                            services designed for stress-free journeys.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10"
                        >
                            <Link
                                href="/contact-us"
                                className="inline-block bg-[#0D276D] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#6482B9] transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                        </motion.div>

                    </div>

                    {/* RIGHT IMAGE BLOCK */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="./images/Hero/Trusted.png"
                            alt="Island Cabs Travel Service"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>

                </div>
            </section>

            {/* MISSION */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-main">
                            Our Mission
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            At Island Cabs, our mission is to redefine travel experiences by
                            offering punctual, safe and comfortable rides across Tamil Nadu.
                            We combine professional service standards with modern fleet
                            management to ensure every journey is smooth and stress-free.
                        </p>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Whether it’s airport transfers, corporate travel or outstation
                            trips, we focus on customer satisfaction, transparency and
                            reliability.
                        </p>

                        {/* <Button className="mt-8 primary text-white px-6 py-3 rounded-lg hover:secondary transition">
                            Book a Ride
                        </Button> */}

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="./images/Hero/Company.jpg"
                            alt="Contact Island Cabs"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>

                </div>
            </section>

            {/* VALUES */}
            <section className="py-24 bg">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold text-main">
                        Our Core Values
                    </h2>

                    <div className="mt-16 grid md:grid-cols-1 gap-12 max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <FeatureCard
                                // image=""
                                number="01"
                                title="Safety First"
                                description="Strict safety standards and verified drivers ensure every ride is secure."
                            />
                            <FeatureCard
                                number="02"
                                title="Customer Commitment"
                                description="We prioritze client satisfaction and timely service delivery."
                            />
                            <FeatureCard
                                number="03"
                                title="Professional Excellence"
                                description="Maintained fleet, courteous chauffeurs and structured operations."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold text-main">
                        Meet Our Team
                    </h2>

                    <p className="mt-6 text-gray-600">
                        The professionals behind Island Cabs.
                    </p>

                    <div className="mt-16 grid md:grid-cols-4 gap-8">

                        {[1, 2, 3, 4].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="bg p-6 rounded-xl shadow-md hover:shadow-lg transition"
                            >
                                <div className="h-40 bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-gray-400 text-sm">
                                    Team Image
                                </div>
                                <h3 className="font-semibold text-lg text-main">
                                    Team Member Name
                                </h3>
                                <p className="text-secondary mt-2 text-sm">
                                    Designation
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

        </main>
    );
}
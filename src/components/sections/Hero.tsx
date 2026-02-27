"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import OutlineButton from "@/components/ui/OutlineButton";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="
  relative 
  pt-32 
  pb-24 
  overflow-hidden
  bg-gradient-to-br 
  from-[#f8fafc] 
  via-[#b7c6e2] 
  to-[#85a1f6]
">
            <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

                {/* LEFT SIDE */}
                <div className="relative">        
                    <div className="relative z-10">

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl font-bold text-Black leading-tight"
                        >
                            Fast & Reliable
                            <br />
                            Premium Cab Services
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="mt-6 text-Black/80 max-w-lg"
                        >
                            Airport transfers, corporate travel, outstation trips and luxury rides —
                            all delivered with punctuality and professionalism.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 flex gap-4 items-center"
                        >
                            <Link
                                href="/contact-us"
                                className="inline-block bg-[#0D276D] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#6482B9] transition-all duration-300"
                            >
                                Contact Us
                            </Link>

                            <Link href="/hire-cabs">
                                <OutlineButton>
                                    Explore
                                </OutlineButton>
                            </Link>
                        </motion.div>

                    </div>
                </div>

                {/* RIGHT CAR */}
                <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1}}
                    transition={{
                        duration: 1,
                        ease: [0.25, 1, 0.5, 1],
                    }}
                    className="relative flex justify-center md:-mr-20"
                >

                    {/* Floating Car */}
                    <motion.div
                        className="w-[180%] md:w-[200%] relative z-10"
                    >
                        <Image
                            src="/images/Hero/Car.png"
                            alt="Premium Cab Service in Tamil Nadu"
                            width={1900}
                            height={1200}
                            priority
                            className="w-full h-auto drop-shadow-[0_60px_80px_rgba(0,0,0,0.35)]"
                        />
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

                {/* Left - Logo */}
                <div className="flex justify-start">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <Image
                            src="/images/Hero/IslandLogo.png"
                            alt="Island Cabs Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span className="text-2xl font-bold text-[#0D276D] tracking-wide">
                            Island Cabs
                        </span>
                    </Link>
                </div>

                {/* Center - Navigation */}
                <nav className="hidden md:flex justify-center gap-10 text-[#111827] font-medium">
                    {[
                        { label: "Home", href: "/" },
                        { label: "About", href: "/about-us" },
                        { label: "Hire Cabs", href: "/hire-cabs" },
                        { label: "Contact", href: "/contact-us" },
                    ].map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="relative group"
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0D276D] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Right - CTA */}
                <div className="flex justify-end">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button className="relative overflow-hidden bg-[#0D276D] text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#6482B9]">
                            Book Now
                        </Button>
                    </motion.div>
                </div>

            </div>
        </header>
    );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about-us" },
        { label: "Explore", href: "/hire-cabs" },
        { label: "Contact", href: "/contact-us" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 grid grid-cols-2 md:grid-cols-3 items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/Hero/IslandLogo.png"
                        alt="Island Cabs Logo"
                        width={40}
                        height={40}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                    <span className="text-lg md:text-2xl font-bold text-[#0D276D]">
                        Island Cabs
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex justify-center gap-10 text-[#111827] font-medium">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.href} className="hover:text-[#0D276D] transition">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Section */}
                <div className="flex justify-end items-center gap-3">

                    {/* Contact Us Button */}
                    <Link
                        href="/contact-us"
                        className="bg-[#0D276D] text-white text-xs md:text-base px-3 md:px-6 py-1.5 md:py-2 rounded-lg shadow-md hover:bg-[#6482B9] transition"
                    >
                        Contact Us
                    </Link>

                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden text-[#0D276D]"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>

                </div>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="md:hidden bg-white/60 backdrop-blur-xl shadow-sm"
                >
                    <div className="flex flex-col px-6 py-6 gap-6 text-[#111827] font-medium text-base">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="hover:text-[#0D276D] transition duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
}
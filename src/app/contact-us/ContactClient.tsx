"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ContactClient() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            name: "Rahul S.",
            question: "Do you provide airport pickup services in Chennai?",
            answer:
                "Yes, we provide reliable airport pickup and drop services across all major airports in Tamil Nadu.",
        },
        {
            name: "Priya M.",
            question: "Can I book a cab for multi-day outstation travel?",
            answer:
                "Absolutely. We offer flexible multi-day packages for both business and leisure travel.",
        },
        {
            name: "Arjun K.",
            question: "Are your drivers professionally trained?",
            answer:
                "All our drivers are verified, experienced, and professionally trained for safe and premium service.",
        },
        {
            name: "Meera R.",
            question: "Do you offer corporate travel solutions?",
            answer:
                "Yes, we provide customized corporate transport solutions tailored to company requirements.",
        },
    ];

    return (
        <main className="bg ">

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
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#D6A94E] font-semibold uppercase tracking-wider text-sm">
                            Contact Us
                        </span>

                        <h1 className="mt-4 text-5xl font-bold text-[#111827] leading-tight">
                            Get In Touch With
                            <br />
                            Island Cabs
                        </h1>

                        <p className="mt-6 text-gray-600 max-w-lg text-lg">
                            Have a question about our services or need a custom travel plan?
                            Our team is ready to assist you with professional and reliable support.
                        </p>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/images/Hero/Contact-Us.jpg"
                            alt="Contact Island Cabs"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>

                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="pb-20 pt-10">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-2xl shadow-md space-y-6"
                    >
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0D276D]"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0D276D]"
                        />

                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0D276D]"
                        />

                        <textarea
                            rows={4}
                            placeholder="Tell us about your requirement"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0D276D]"
                        />

                        <button className="bg-[#0D276D] text-white w-full py-3 rounded-lg hover:bg-[#6482B9] transition-all duration-300">
                            Submit Message
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-main text-center">
                        Frequently Asked Questions About Island Cabs Services
                    </h2>

                    <p className="mt-6 text-center text-gray-600">
                        Answers to common questions about corporate travel,
                        and outstation cab bookings across Tamil Nadu.
                    </p>

                    <div className="mt-16 space-y-8">

                        {[
                            {
                                question:
                                    "Do you provide 24/7 airport pickup and drop services in Chennai and other Tamil Nadu cities?",
                                answer:
                                    "Yes, Island Cabs offers 24/7 airport pickup and drop services in Chennai, Coimbatore, Madurai, Trichy and other major cities across Tamil Nadu.",
                            },
                            {
                                question:
                                    "Can I hire a cab for outstation travel from Chennai to other cities in Tamil Nadu?",
                                answer:
                                    "Absolutely. We provide outstation cab services from Chennai and other cities to destinations across Tamil Nadu with professional drivers and well-maintained vehicles.",
                            },
                            {
                                question:
                                    "Does Island Cabs offer corporate cab services for business travel?",
                                answer:
                                    "Yes, we offer dedicated corporate cab solutions for business travel, employee transportation, airport transfers and multi-day corporate trips.",
                            },
                            {
                                question:
                                    "What types of vehicles are available for hire in Tamil Nadu?",
                                answer:
                                    "We offer Sedan, SUV, Luxury vehicles and Tempo Travellers suitable for individual, family and corporate travel needs across Tamil Nadu.",
                            },
                            {
                                question:
                                    "Are your drivers verified and professionally trained?",
                                answer:
                                    "All Island Cabs drivers are background-verified, experienced and professionally trained to ensure safe and reliable travel experiences.",
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-[#F8FAFC] p-8 rounded-xl shadow-sm"
                            >
                                <h3 className="text-xl font-semibold text-main">
                                    {faq.question}
                                </h3>

                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

        </main>
    );
}
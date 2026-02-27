"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Phone } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function BookNowPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendBooking = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        setLoading(true);
        setSuccess(false);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            formRef.current.reset();
            setSuccess(true);
        } catch (error) {
            console.error("Booking Email Error:", error);
        }

        setLoading(false);
    };

    return (
        <main className="bg-[#F8FAFC]">

            {/* HERO SECTION */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-[#f8fafc] via-[#b7c6e2] to-[#85a1f6]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-[#111827]"
                    >
                        Book Your Ride Now
                    </motion.h1>

                    <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
                        Quick, reliable and professional cab services across Tamil Nadu.
                        Fill in your trip details and we’ll contact you shortly.
                    </p>
                </div>
            </section>

            {/* BOOKING FORM */}
            <section className="pb-24 -mt-10">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                    >
                        <form
                            ref={formRef}
                            onSubmit={sendBooking}
                            className="grid md:grid-cols-2 gap-6"
                        >

                            {/* Hidden timestamp */}
                            <input
                                type="hidden"
                                name="time"
                                value={new Date().toLocaleString()}
                            />

                            {/* Full Name */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D276D]"
                                />
                            </div>

                            {/* Pickup */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Pickup Location
                                </label>
                                <input
                                    type="text"
                                    name="pickup"
                                    required
                                    placeholder="Enter pickup location"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D276D]"
                                />
                            </div>

                            {/* Drop */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Drop Location
                                </label>
                                <input
                                    type="text"
                                    name="drop"
                                    required
                                    placeholder="Enter drop location"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D276D]"
                                />
                            </div>

                            {/* Date */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Travel Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D276D]"
                                />
                            </div>

                            {/* People */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Number of People
                                </label>
                                <input
                                    type="number"
                                    name="people"
                                    min="1"
                                    required
                                    placeholder="Enter number of passengers"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D276D]"
                                />
                            </div>

                            {/* Contact */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">
                                    Contact (Phone / Email)
                                </label>
                                <input
                                    type="text"
                                    name="contact"
                                    required
                                    placeholder="Enter phone number or email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D276D]"
                                />
                            </div>
                            {/* Message */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-2">
                                    Additional Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Enter any additional details (optional)"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D276D]"
                                />
                            </div>
                            {/* Submit */}
                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#0D276D] text-white py-4 rounded-lg font-semibold hover:bg-[#6482B9] transition duration-300 shadow-md"
                                >
                                    {loading ? "Submitting..." : "Confirm Booking"}
                                </button>

                                {success && (
                                    <p className="text-green-600 text-center mt-4">
                                        Booking request sent successfully!
                                    </p>
                                )}
                            </div>

                        </form>
                    </motion.div>
                </div>
            </section>

            {/* VEHICLE OPTIONS */}
            <section className="pb-24 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                        Choose Your Vehicle
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Select the perfect vehicle based on your group size and comfort preference.
                    </p>

                    <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">

                        {[
                            { name: "Sedan", image: "/images/vehicles/Sedan.jpeg", capacity: "Max 5 Passengers" },
                            { name: "SUV", image: "/images/vehicles/Suv.jpeg", capacity: "Max 7 Passengers" },
                            { name: "Luxury", image: "/images/vehicles/Luxury.jpeg", capacity: "Max 20 Passengers" },
                            { name: "Tempo Traveller", image: "/images/vehicles/TempoTraveller.jpeg", capacity: "Max 26 Passengers" }
                        ].map((vehicle, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                            >
                                <div className="relative h-56 w-full">
                                    <Image
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-6 text-left">
                                    <h3 className="text-xl font-semibold text-[#111827]">
                                        {vehicle.name}
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        Seating Capacity: {vehicle.capacity}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>

        </main>
    );
}
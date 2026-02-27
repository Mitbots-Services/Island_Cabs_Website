"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Car, Headphones, MessageSquare } from "lucide-react";

export default function HireCabsPage() {
    return (
        <main className="bg-[#F8FAFC] ">

            {/* CREATIVE HERO */}
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

                {/* Background Accent Strip */}
                {/* <div className="absolute top-0 right-0 h-full w-1/3 bg-[#0D276D]" /> */}

                <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#D6A94E] font-semibold uppercase tracking-wider text-sm">
                            Explore
                        </span>

                        <h1 className="mt-4 text-5xl font-bold text-[#111827] leading-tight">
                            Reliable Travel Solutions
                            <br />
                            Across Tamil Nadu
                        </h1>

                        <p className="mt-6 text-gray-600 max-w-lg text-lg">
                            From city transfers to long-distance outstation trips,
                            Island Cabs provides professional drivers, premium vehicles,
                            and seamless travel experiences.
                        </p>

                        <div className="mt-8 flex gap-6">
                            <div className="text-[#0D276D] font-semibold">
                                ✔ Corporate Travel
                            </div>
                            <div className="text-[#0D276D] font-semibold">
                                ✔ Airport Transfers
                            </div>
                            <div className="text-[#0D276D] font-semibold">
                                ✔ Outstation Trips
                            </div>
                        </div>
                    </motion.div>

                    {/* IMAGE PLACEHOLDER */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/images/vehicles/Cabs.webp"
                            alt="Premium Cab Service"
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>

                </div>
            </section>

            {/* VEHICLE TYPES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold text-[#111827]">
                        Our Vehicle Categories
                    </h2>

                    <p className="mt-6 text-gray-600">
                        A fleet designed for comfort, reliability and flexibility.
                    </p>

                    <div className="mt-16 grid md:grid-cols-4 gap-10">

                        {[
                            { name: "Sedan", image: "/images/vehicles/Sedan.jpeg", passengers: "3–5 Passengers" },
                            { name: "SUV", image: "/images/vehicles/Suv.jpeg", passengers: "5–7 Passengers" },
                            { name: "Luxury", image: "/images/vehicles/Luxury.jpeg", passengers: "3–20 Passengers" },
                            { name: "Tempo Traveller", image: "/images/vehicles/TempoTraveller.jpeg", passengers: "9–26 Passengers" },
                        ].map((vehicle, i) => (

                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                            >

                                {/* IMAGE */}
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* DARK OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* CONTENT */}
                                <div className="absolute bottom-6 left-6 text-left text-white">

                                    <h3 className="text-2xl font-semibold">
                                        {vehicle.name}
                                    </h3>

                                    <p className="mt-2 text-sm text-white/80">
                                        {vehicle.passengers}
                                    </p>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

            {/* WHERE WE OPERATE */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-4xl font-bold text-[#111827]">
                            Where We Operate
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                            Island Cabs proudly serves major cities and key travel hubs
                            across Tamil Nadu. From bustling metropolitan centers to
                            culturally rich destinations, we ensure reliable and
                            professionally managed cab services wherever you travel.
                        </p>

                        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                            Our operational network includes Chennai, Coimbatore,
                            Madurai, Trichy, Salem, Pondicherry and surrounding
                            regions — delivering seamless travel experiences
                            throughout South India.
                        </p>
                    </div>

                    {/* RIGHT MAP IMAGE */}
                    <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg bg-white p-6">
                        <Image
                            src="/images/Hero/SouthMap2.jpg"
                            alt="Service Locations Map"
                            fill
                            className="object-contain"
                        />
                    </div>

                </div>
            </section>

            {/* WHY OUR SERVICE STANDS OUT */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-[#111827] text-center">
                        Why Our Service Stands Out
                    </h2>

                    <div className="mt-16 grid md:grid-cols-2 gap-8">

                        {[
                            {
                                title: "Professional Drivers",
                                desc: "Experienced, trained and verified chauffeurs.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Well-Maintained Fleet",
                                desc: "Clean, sanitized and regularly serviced vehicles.",
                                icon: Car
                            },
                            {
                                title: "24/7 Support",
                                desc: "Round-the-clock coordination and assistance.",
                                icon: Headphones
                            },
                            {
                                title: "Transparent Communication",
                                desc: "Clear travel coordination without confusion.",
                                icon: MessageSquare
                            }
                        ].map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="bg-[#F8FAFC] p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    {/* ICON CIRCLE */}
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D6A94E]/20 text-[#0D276D] mb-6">
                                        <Icon size={22} strokeWidth={2} />
                                    </div>

                                    <h3 className="text-xl font-semibold text-[#111827]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-gray-600">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            );
                        })}

                    </div>

                </div>
            </section>

        </main>
    );
}
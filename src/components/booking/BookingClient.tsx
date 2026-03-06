"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function BookingClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const vehicles = [
    {
      name: "Sedan",
      image: "/images/vehicles/Sedan.jpeg",
      capacity: "Up to 4 passengers",
    },
    {
      name: "SUV",
      image: "/images/vehicles/Suv.jpeg",
      capacity: "Up to 6 passengers",
    },
    {
      name: "Luxury",
      image: "/images/vehicles/Luxury.jpeg",
      capacity: "Premium comfort",
    },
    {
      name: "Tempo Traveller",
      image: "/images/vehicles/TempoTraveller.jpeg",
      capacity: "Group travel",
    },
  ];

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
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      formRef.current.reset();
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <main className="bg-[#F8FAFC]">
      {/* HERO */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#f8fafc] via-[#b7c6e2] to-[#85a1f6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-[var(--text)]"
          >
            Book Your Taxi in Rameshwaram
          </motion.h1>

          <p className="mt-6 text-[var(--text)]/70 max-w-2xl mx-auto text-lg">
            Submit your trip details and the Island Cabs team will contact you
            shortly to confirm your taxi booking.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <a
            href="tel:+918056867468"
            className="group p-8 rounded-2xl bg-[var(--bg)] hover:bg-white border border-transparent hover:border-[#e5e7eb] shadow-sm hover:shadow-lg transition"
          >
            <div className="text-[var(--primary)] text-3xl font-bold">01</div>

            <h3 className="mt-4 font-semibold text-lg text-[var(--text)]">
              Call for Instant Booking
            </h3>

            <p className="text-[var(--text)]/70 text-sm mt-2">
              Speak directly with our team
            </p>

            <div className="h-[2px] w-0 group-hover:w-10 bg-[var(--primary)] mt-6 transition-all" />
          </a>

          <a
            href="https://wa.me/918056867468"
            className="group p-8 rounded-2xl bg-[var(--bg)] hover:bg-white border border-transparent hover:border-[#e5e7eb] shadow-sm hover:shadow-lg transition"
          >
            <div className="text-[var(--primary)] text-3xl font-bold">02</div>

            <h3 className="mt-4 font-semibold text-lg text-[var(--text)]">
              Book via WhatsApp
            </h3>

            <p className="text-[var(--text)]/70 text-sm mt-2">
              Quick responses from our team
            </p>

            <div className="h-[2px] w-0 group-hover:w-10 bg-[var(--primary)] mt-6 transition-all" />
          </a>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="pb-24 pt-10 bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-10 md:p-12"
          >
            <h3 className="text-2xl font-semibold text-[var(--text)]">
              Booking Details
            </h3>

            <p className="text-[var(--text)]/70 text-sm mt-2">
              Tell us about your trip and we’ll arrange the best vehicle for
              you.
            </p>

            <form
              ref={formRef}
              onSubmit={sendBooking}
              className="mt-10 grid md:grid-cols-2 gap-6"
            >
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <div className="md:col-span-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none transition"
                />
              </div>

              <input
                type="text"
                name="pickup"
                required
                placeholder="Pickup Location"
                className="bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
              />

              <input
                type="text"
                name="drop"
                required
                placeholder="Drop Location"
                className="bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
              />

              <input
                type="date"
                name="date"
                required
                className="bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
              />

              <input
                type="number"
                name="people"
                required
                min="1"
                placeholder="Number of Passengers"
                className="bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
              />

              <div className="md:col-span-2">
                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="Phone Number or Email"
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Additional details"
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full primary border-2 border-[var(--primary)] text-white py-3 hover:bg-[var(--secondary)] hover:border-[var(--secondary)] transition"
                >
                  {loading ? "Submitting..." : "Confirm Booking"}
                </button>

                {success && (
                  <p className="text-green-600 text-center mt-4 text-sm">
                    Booking request sent successfully!
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* VEHICLE OPTIONS */}
      <section className="pb-24 mx-10">
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {vehicles.map((vehicle, i) => (
            <div
              key={i}
              className="
              group
              relative
              bg-white
              rounded-2xl
              border border-[#e5e7eb]
              overflow-hidden
              hover:shadow-xl
              transition-all
              duration-300
              "
            >
              {/* IMAGE */}
              <div className="relative h-48 bg-[var(--bg)] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* CAPACITY BADGE */}
                <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-white shadow-sm text-[var(--primary)]">
                  {vehicle.capacity}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {vehicle.name}
                </h3>

                {/* subtle divider */}
                <div className="mt-4 h-[1px] bg-[#eef2f6]" />

                {/* hover indicator */}
                <p className="mt-4 text-sm text-[var(--primary)] transition">
                  Available for booking
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

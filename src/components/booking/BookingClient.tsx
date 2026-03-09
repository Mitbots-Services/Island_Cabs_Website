"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import Hatchback from "../../assets/Hatchback.webp";
import Luxury from "../../assets/Luxury.webp";
import Sedan from "../../assets/Sedan.webp";
import SUV from "../../assets/SUV.webp";

export default function BookingClient() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const [errors, setErrors] = useState({
    name: "",
    pickup: "",
    drop: "",
    date: "",
    people: "",
    contact: "",
  });

  const vehicles = [
    {
      name: "Hatchback",
      image: Hatchback,
      capacity: "4 Seats",
    },
    {
      name: "Sedan",
      image: Sedan,
      capacity: "4 Seats",
    },
    {
      name: "SUV",
      image: SUV,
      capacity: "6-7 Seats",
    },
    {
      name: "Tempo Traveller",
      image: Luxury,
      capacity: "12+ Seats",
    },
  ];

  const validate = () => {
    if (!formRef.current) return false;

    const form = new FormData(formRef.current);

    const name = (form.get("name") as string).trim();
    const pickup = (form.get("pickup") as string).trim();
    const drop = (form.get("drop") as string).trim();
    const date = (form.get("date") as string).trim();
    const people = Number(form.get("people"));
    const contact = (form.get("contact") as string).trim();

    const newErrors = {
      name: "",
      pickup: "",
      drop: "",
      date: "",
      people: "",
      contact: "",
    };

    if (name.length < 3) newErrors.name = "Please enter your full name.";

    if (pickup.length < 2) newErrors.pickup = "Enter a valid pickup location.";

    if (drop.length < 2) newErrors.drop = "Enter a valid destination.";

    if (!date) newErrors.date = "Please select your travel date.";

    if (!people || people < 1)
      newErrors.people = "Passenger count must be at least 1.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(contact) && !phoneRegex.test(contact))
      newErrors.contact = "Enter a valid phone number or email.";

    setErrors(newErrors);

    return !Object.values(newErrors).some((v) => v !== "");
  };

  const sendBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;
    if (!formRef.current) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      formRef.current.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
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
            target="_blank"
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
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="flex-col">
                <input
                  type="text"
                  name="pickup"
                  required
                  placeholder="Initial Point"
                  className="bg-[var(--bg)] w-full border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
                />
                {errors.pickup && (
                  <p className="text-red-500 text-xs mt-1">{errors.pickup}</p>
                )}
              </div>

              <div className="flex-col">
                <input
                  type="text"
                  name="drop"
                  required
                  placeholder="Final Destination"
                  className="bg-[var(--bg)] w-full border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
                />
                {errors.drop && (
                  <p className="text-red-500 text-xs mt-1">{errors.drop}</p>
                )}
              </div>
              <div className="flex-col">
                <input
                  type="date"
                  name="date"
                  required
                  className="bg-[var(--bg)] w-full border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                )}
              </div>
              <div className="flex-col">
                <input
                  type="number"
                  name="people"
                  required
                  min="1"
                  placeholder="Number of Passengers"
                  className="bg-[var(--bg)] w-full border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
                />
                {errors.people && (
                  <p className="text-red-500 text-xs mt-1">{errors.people}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="Phone Number or Email"
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none"
                />
                {errors.contact && (
                  <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
                )}
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
                  className="w-full rounded-full primary border-2 border-[var(--primary)] text-white py-3 hover:bg-[var(--secondary)] hover:border-[var(--secondary)] transition flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      <span className="text-sm">Sending...</span>
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-center mt-4 text-sm">
                    Booking request has been sent! Our team will contact you
                    shortly.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-600 text-center mt-4 text-sm">
                    Looks like our message cab got stuck in traffic. Please try
                    again in a moment.
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
                <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-white shadow-sm text-[var(--primary)] group-hover:bg-[var(--accent)] duration-300">
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

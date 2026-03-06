"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ContactClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
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

  const faqs = [
    {
      question: "Do you provide taxi services in Rameshwaram?",
      answer:
        "Yes, Island Cabs offers reliable taxi services in Rameshwaram including temple tours and sightseeing trips.",
    },
    {
      question: "Can I book a taxi from Rameshwaram to Madurai?",
      answer:
        "Yes, we provide comfortable taxi services from Rameshwaram to Madurai with experienced drivers.",
    },
    {
      question: "Do you offer taxis to Kanyakumari?",
      answer:
        "Yes, Island Cabs provides outstation taxi services from Rameshwaram to Kanyakumari and nearby destinations.",
    },
    {
      question: "How can I book a cab with Island Cabs?",
      answer:
        "You can submit the booking request form on this page or call us directly for quick taxi booking.",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#eef2ff] via-white to-[#e0e7ff]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#D6A94E] font-semibold uppercase text-sm">
              Contact Island Cabs
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold font-heading">
              Book Your Taxi in Rameshwaram
            </h1>

            <p className="mt-6 text-gray-600 max-w-lg text-lg">
              Need a taxi for temple tours, sightseeing or outstation travel?
              Contact Island Cabs for reliable and comfortable journeys.
            </p>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/Hero/Contact-Us.jpg"
              alt="Contact Island Cabs"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <a
            href="tel:+918056867468"
            className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">📞 Call Now</h3>
            <p className="text-gray-600 mt-2">Speak with our team instantly</p>
          </a>

          <a
            href="https://wa.me/918056867468"
            className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">💬 WhatsApp</h3>
            <p className="text-gray-600 mt-2">Chat with us for quick booking</p>
          </a>

          <a
            href="mailto:islandcabsrmm@gmail.com"
            className="p-8 bg-[#F8FAFC] rounded-xl shadow-sm hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">✉️ Email</h3>
            <p className="text-gray-600 mt-2">Send your travel request</p>
          </a>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="pb-24 pt-10 bg-[var(--bg)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-12">
            <h3 className="text-2xl font-semibold text-[var(--text)]">
              Send Booking Request
            </h3>

            <p className="text-[var(--text)]/70 mt-2 text-sm">
              Fill in your travel details and our team will contact you shortly.
            </p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-10 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none transition"
                />

                <input
                  type="text"
                  name="contact"
                  placeholder="Phone Number or Email"
                  required
                  className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none transition"
                />
              </div>

              <input
                type="text"
                name="location"
                placeholder="Pickup Location"
                className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none transition"
              />

              <textarea
                rows={4}
                name="message"
                placeholder="Tell us about your travel requirement"
                required
                className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full p-2 primary border-2 border-[var(--primary)] text-white hover:bg-[var(--secondary)] hover:border-[var(--secondary)] transition"
              >
                {loading ? "Sending..." : "Submit Booking Request"}
              </button>

              {success && (
                <p className="text-green-600 text-center text-sm">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[var(--text)]">
            Frequently Asked Questions
          </h2>

          <div className="mt-16 divide-y border-t border-[#e5e7eb]">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-semibold text-[var(--text)]">
                    {faq.question}
                  </span>

                  <span className="text-[var(--primary)] text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-[var(--text)]/70 text-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

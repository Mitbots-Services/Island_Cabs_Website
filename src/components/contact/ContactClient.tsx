"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import ContactSupport from "../../assets/CustomerSupport.webp";

export default function ContactClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const [errors, setErrors] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const validate = () => {
    if (!formRef.current) return false;

    const form = new FormData(formRef.current);
    const name = (form.get("name") as string).trim();
    const contact = (form.get("contact") as string).trim();
    const message = (form.get("message") as string).trim();

    const newErrors = {
      name: "",
      contact: "",
      message: "",
    };

    if (name.length < 3) {
      newErrors.name = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?[1-9]\d{6,14}|[6-9]\d{9})$/;

    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
      newErrors.contact = "Enter a valid phone number or email.";
    }

    if (message.length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.contact && !newErrors.message;
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
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
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#D6A94E] font-semibold uppercase text-sm tracking-wider"
            >
              Contact Island Cabs
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-4xl md:text-5xl font-bold font-heading"
            >
              Book Your Taxi in Rameshwaram
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-gray-600 max-w-lg text-lg"
            >
              Need a taxi for temple tours, sightseeing or outstation travel?
              Contact Island Cabs for reliable and comfortable journeys.
            </motion.p>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={ContactSupport}
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
              Send Message
            </h3>

            <p className="text-[var(--text)]/70 mt-2 text-sm">
              Share your details and message, and our team will get back to you
              shortly.
            </p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-10 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex-col">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none transition"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="flex-col">
                  <input
                    type="text"
                    name="contact"
                    placeholder="Phone Number or Email"
                    required
                    className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none transition"
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.contact}
                    </p>
                  )}
                </div>
              </div>

              <textarea
                rows={4}
                name="message"
                placeholder="Enter your message…"
                required
                className="w-full bg-[var(--bg)] border border-transparent focus:border-[var(--primary)] rounded-xl px-4 py-3 outline-none transition"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full p-3 primary border-2 border-[var(--primary)] text-white hover:bg-[var(--secondary)] hover:border-[var(--secondary)] transition flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    <span className="text-sm">Sending…</span>
                  </>
                ) : (
                  "Submit Message"
                )}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center text-sm mt-4">
                  Your message has been sent! Our team will reach out soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-center text-sm mt-4">
                  Our cab hit a traffic jam sending your message. Please try
                  again in a moment!
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

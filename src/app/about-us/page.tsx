import AboutHero from "@/components/about/AboutHero";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/ui/FeatureCard";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mission from "../../assets/Mission.webp";

export const metadata: Metadata = {
  title: "About Island Cabs | Rameshwaram Taxi Service",
  description:
    "Island Cabs is a trusted taxi service based in Rameshwaram with over 6 years of experience providing travel to Madurai, Kanyakumari and across Tamil Nadu.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      {/* COMPANY STATS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* CARD */}
          <div className="group relative p-10 rounded-2xl bg-[var(--bg)] border border-[color-mix(in_srgb,var(--secondary)_25%,transparent)] hover:-translate-y-1 hover:shadow-lg transition">
            <h3 className="text-5xl font-bold text-[var(--primary)] text-center">
              6+
            </h3>

            <div className="w-10 h-[2px] bg-[var(--secondary)] mx-auto my-4"></div>

            <p className="text-center text-[var(--text)]/70">
              Years Experience
            </p>
          </div>

          {/* CARD */}
          <div className="group relative p-10 rounded-2xl bg-[var(--bg)] border border-[color-mix(in_srgb,var(--secondary)_25%,transparent)] hover:-translate-y-1 hover:shadow-lg transition">
            <h3 className="text-5xl font-bold text-[var(--primary)] text-center">
              1000+
            </h3>

            <div className="w-10 h-[2px] bg-[var(--secondary)] mx-auto my-4"></div>

            <p className="text-center text-[var(--text)]/70">Happy Travelers</p>
          </div>

          {/* CARD */}
          <div className="group relative p-10 rounded-2xl bg-[var(--bg)] border border-[color-mix(in_srgb,var(--secondary)_25%,transparent)] hover:-translate-y-1 hover:shadow-lg transition">
            <h3 className="text-5xl font-bold text-[var(--primary)] text-center">
              24/7
            </h3>

            <div className="w-10 h-[2px] bg-[var(--secondary)] mx-auto my-4"></div>

            <p className="text-center text-[var(--text)]/70">
              Customer Support
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold">Our Mission</h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our mission is to provide safe, reliable and comfortable taxi
              services for travelers visiting Rameshwaram and nearby
              destinations. We focus on punctuality, professional drivers and
              well maintained vehicles.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Whether you need a temple tour, sightseeing taxi or long distance
              travel to cities like Madurai and Kanyakumari, Island Cabs ensures
              a smooth and stress-free journey.
            </p>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={Mission}
              alt="Island Cabs taxi service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-[#F5F8FF]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Our Core Values</h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <FeatureCard
              number="01"
              title="Safety First"
              description="Experienced drivers and strict safety standards ensure secure travel."
            />

            <FeatureCard
              number="02"
              title="Customer Commitment"
              description="We prioritize customer satisfaction and reliable service."
            />

            <FeatureCard
              number="03"
              title="Professional Service"
              description="Clean vehicles, punctual drivers and dependable taxi operations."
            />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)]">
              Areas We Serve
            </h2>

            <p className="mt-4 text-[var(--text)]/70 max-w-2xl mx-auto">
              Island Cabs offers reliable taxi services from Rameshwaram to
              popular destinations across Tamil Nadu for tourists and pilgrims.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* CARD */}
            <div className="group relative bg-[var(--bg)] rounded-2xl p-8 border border-[color-mix(in_srgb,var(--secondary)_20%,transparent)] hover:shadow-lg transition">
              {/* vertical route line */}
              <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-[var(--secondary)]/40"></div>

              {/* location marker */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition">
                📍
              </div>

              <h3 className="mt-6 font-semibold text-lg text-[var(--text)]">
                Rameshwaram
              </h3>

              <p className="mt-2 text-[var(--text)]/70 text-sm">
                Local temple tours and sightseeing taxi services.
              </p>
            </div>

            <div className="group relative bg-[var(--bg)] rounded-2xl p-8 border border-[color-mix(in_srgb,var(--secondary)_20%,transparent)] hover:shadow-lg transition">
              <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-[var(--secondary)]/40"></div>

              <div className="relative z-10 w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition">
                🛕
              </div>

              <h3 className="mt-6 font-semibold text-lg text-[var(--text)]">
                Madurai
              </h3>

              <p className="mt-2 text-[var(--text)]/70 text-sm">
                Taxi rides to Meenakshi Amman Temple and city attractions.
              </p>
            </div>

            <div className="group relative bg-[var(--bg)] rounded-2xl p-8 border border-[color-mix(in_srgb,var(--secondary)_20%,transparent)] hover:shadow-lg transition">
              <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-[var(--secondary)]/40"></div>

              <div className="relative z-10 w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition">
                🌅
              </div>

              <h3 className="mt-6 font-semibold text-lg text-[var(--text)]">
                Kanyakumari
              </h3>

              <p className="mt-2 text-[var(--text)]/70 text-sm">
                Scenic coastal travel to the southernmost tip of India.
              </p>
            </div>

            <div className="group relative bg-[var(--bg)] rounded-2xl p-8 border border-[color-mix(in_srgb,var(--secondary)_20%,transparent)] hover:shadow-lg transition">
              <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-[var(--secondary)]/40"></div>

              <div className="relative z-10 w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition">
                🌊
              </div>

              <h3 className="mt-6 font-semibold text-lg text-[var(--text)]">
                Dhanushkodi
              </h3>

              <p className="mt-2 text-[var(--text)]/70 text-sm">
                Explore the famous ghost town and pristine beach near
                Rameshwaram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-br from-[#eef2ff] via-white to-[#e0e7ff]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--text)]">
            Book Your Taxi with Island Cabs
          </h2>

          <p className="mt-6 text-[var(--text)]">
            Send a booking request or call us directly to arrange your trip.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <Link href="/book-now">
              <Button variant="accent">Send Booking Request</Button>
            </Link>

            <a href="tel:+918056867468">
              <Button variant="outlineBlue">Call Now</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

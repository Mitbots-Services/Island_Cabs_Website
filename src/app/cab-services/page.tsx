import CabHero from "@/components/cabs/CabHero";
import VehicleRoadCarousel from "@/components/cabs/VehicleRoadCarousel";
import Button from "@/components/ui/Button";
import { Car, Headphones, MessageSquare, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CabServicesHero from "../../assets/CabServicesHero.webp";

export const metadata: Metadata = {
  title: "Cab Services in Rameshwaram | Island Cabs",
  description:
    "Island Cabs provides reliable cab services in Rameshwaram including temple tours, airport transfers, outstation travel to Madurai, Kanyakumari and across Tamil Nadu.",
};

export default function CabServicesPage() {
  return (
    <main className="bg-[#F8FAFC]">
      {/* HERO */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#eef2ff] via-white to-[#e0e7ff]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <CabHero />

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={CabServicesHero}
              alt="Cab services in Rameshwaram"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-[var(--text)]">
            Our Cab Services
          </h2>

          <p className="mt-6 text-[var(--text)]/70 max-w-2xl mx-auto">
            We provide flexible transportation services for tourists, pilgrims
            and business travelers across Tamil Nadu.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {/* SERVICE */}
            <div className="relative p-10 rounded-2xl bg-[var(--bg)] border border-[color-mix(in_srgb,var(--secondary)_25%,transparent)] text-left hover:-translate-y-1 hover:shadow-lg transition overflow-hidden">
              <span className="absolute top-6 right-6 text-5xl font-bold text-[#6482b9]/30">
                01
              </span>

              <h3 className="text-xl font-semibold text-[var(--text)]">
                Temple Tours
              </h3>

              <p className="mt-4 text-[var(--text)]/70">
                Visit Ramanathaswamy Temple and nearby spiritual destinations
                comfortably with our dedicated temple tour taxis.
              </p>
            </div>

            {/* SERVICE */}
            <div className="relative p-10 rounded-2xl bg-[var(--bg)] border border-[color-mix(in_srgb,var(--secondary)_25%,transparent)] text-left hover:-translate-y-1 hover:shadow-lg transition overflow-hidden">
              <span className="absolute top-6 right-6 text-5xl font-bold text-[#6482b9]/30">
                02
              </span>

              <h3 className="text-xl font-semibold text-[var(--text)]">
                Outstation Travel
              </h3>

              <p className="mt-4 text-[var(--text)]/70">
                Travel from Rameshwaram to Madurai, Kanyakumari and other cities
                with reliable long distance taxi services.
              </p>
            </div>

            {/* SERVICE */}
            <div className="relative p-10 rounded-2xl bg-[var(--bg)] border border-[color-mix(in_srgb,var(--secondary)_25%,transparent)] text-left hover:-translate-y-1 hover:shadow-lg transition overflow-hidden">
              <span className="absolute top-6 right-6 text-5xl font-bold text-[#6482b9]/30">
                03
              </span>

              <h3 className="text-xl font-semibold text-[var(--text)]">
                Airport Transfers
              </h3>

              <p className="mt-4 text-[var(--text)]/70">
                Convenient airport taxi services to Madurai Airport with
                punctual drivers and comfortable vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      {/* <section className="py-24 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text)]">
            Our Vehicle Fleet
          </h2>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                name: "Sedan",
                image: "/images/vehicles/Sedan.jpeg",
                passengers: "4 Seats",
              },
              {
                name: "SUV",
                image: "/images/vehicles/Suv.jpeg",
                passengers: "6 Seats",
              },
              {
                name: "Luxury Car",
                image: "/images/vehicles/Luxury.jpeg",
                passengers: "Premium",
              },
              {
                name: "Tempo Traveller",
                image: "/images/vehicles/TempoTraveller.jpeg",
                passengers: "12+ Seats",
              },
            ].map((vehicle, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="
              absolute top-4 left-4 z-10
              px-3 py-1 text-xs font-semibold
              text-white
              primary
              rounded-full
              transition-all duration-300
              group-hover:rounded-lg
              "
                  >
                    {vehicle.passengers}
                  </div>

                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div
                    className="
              absolute bottom-4 left-4
              bg-white
              text-[var(--text)]
              text-sm
              font-semibold
              px-4 py-1.5
              rounded-full
              shadow-sm
              "
                  >
                    {vehicle.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <VehicleRoadCarousel />

      {/* WHY CHOOSE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#111827]">
            Why Choose Island Cabs
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "Professional Drivers",
                desc: "Experienced and verified drivers ensuring safe travel.",
                icon: ShieldCheck,
              },
              {
                title: "Comfortable Vehicles",
                desc: "Clean and well maintained vehicles for long journeys.",
                icon: Car,
              },
              {
                title: "24/7 Support",
                desc: "Customer support available anytime for travel coordination.",
                icon: Headphones,
              },
              {
                title: "Transparent Communication",
                desc: "Clear booking coordination and reliable service.",
                icon: MessageSquare,
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="bg-[#F8FAFC] p-8 rounded-xl shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D6A94E]/20 text-[#0D276D] mb-6">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#eef2ff] via-white to-[#e0e7ff] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--text)]">
            Book Your Taxi Today
          </h2>

          <p className="mt-6 text-[var(--text)]">
            Send a booking request or call us directly to arrange your travel.
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

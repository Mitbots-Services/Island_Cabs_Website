import Image from "next/image";
import Link from "next/link";
import TrustedImg from "../../assets/Trusted.webp";
import Button from "../ui/Button";

export function AboutSnapshot() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-[#111827]">
            Island Cabs – Trusted Taxi Service in Rameshwaram
          </h2>

          <p className="mt-6 text-gray-600">
            Island Cabs is a trusted travel partner based in Rameshwaram with
            more than 6 years of experience providing taxi services for tourists
            and pilgrims. We offer comfortable vehicles, experienced drivers and
            reliable transportation for temple tours, sightseeing and outstation
            travel across Tamil Nadu.
          </p>
          <Link href="/about-us">
            <Button variant="primary" className="mt-8">
              About Island Cabs
            </Button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden bg-[#F5F8FF] p-3 shadow-sm">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
            <Image
              src={TrustedImg}
              alt="Trusted Travel Partner"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

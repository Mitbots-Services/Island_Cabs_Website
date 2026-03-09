import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Hatchback from "../../assets/Hatchback.webp";
import Luxury from "../../assets/Luxury.webp";
import Sedan from "../../assets/Sedan.webp";
import SUV from "../../assets/Suv.webp";

export function TopVehicles() {
  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-[var(--text)]">
          Taxi Vehicles Available with Island Cabs
        </h2>

        <p className="mt-4 text-[var(--text)]/70 max-w-xl mx-auto">
          Choose from comfortable sedans, spacious SUVs, and premium luxury
          vehicles for temple tours, sightseeing and outstation travel.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hatchback */}
          <VehicleCard
            image={Hatchback}
            title="Hatchback"
            description="Budget friendly taxis for short trips and temple visits."
            capacity="4 Seats"
          />
          {/* Sedan */}
          <VehicleCard
            image={Sedan}
            title="Sedan"
            description="Comfortable for city and airport rides."
            capacity="4 Seats"
          />

          {/* SUV */}
          <VehicleCard
            image={SUV}
            title="SUV"
            description="Spacious rides for families and groups."
            capacity="6-7 Seats"
          />

          {/* Luxury */}
          <VehicleCard
            image={Luxury}
            title="Luxury"
            description="Premium vehicles for executive travel."
            capacity="12+ Seats"
          />
        </div>
      </div>
    </section>
  );
}

function VehicleCard({
  image,
  title,
  description,
  capacity,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  capacity: string;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        {/* Capacity Tag */}
        <div
          className="
          absolute top-4 left-4 z-10
          px-3 py-1 text-xs font-semibold
          text-white
          bg-[#000]/25
          rounded-full
          transition-all duration-300
          group-hover:bg-[var(--accent)]
          "
        >
          {capacity}
        </div>

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-[var(--text)]">{title}</h3>

        <p className="text-sm text-[var(--text)]/70 mt-2">{description}</p>

        <div className="h-px bg-[color-mix(in_srgb,var(--secondary)_30%,transparent)] my-5"></div>

        <Link
          href="/cab-services"
          className="
          inline-block
          text-sm
          font-semibold
          text-[var(--primary)]
          hover:text-[var(--accent)]
          transition
          "
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

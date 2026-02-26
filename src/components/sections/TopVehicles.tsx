import Image from "next/image";
import PremiumCard from "../ui/PremiumCard";
import Link from "next/link";

export function TopVehicles() {
  return (
    <section className="py-24 bg-[#F5F8FF] text-center">
      <h2 className="text-4xl font-bold text-[#111827]">
        Top Rated Vehicles
      </h2>

      <p className="mt-4 text-gray-500">
        Choose from our wide fleet of premium cars.
      </p>

      <div className=" mt-16 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6 justify-items-center">
        {/* Sedan */}
        <PremiumCard
          title="Sedan"
          description="Comfortable for city and airport rides."
          action={
            <Link
              href="/hire-cabs"
              className="inline-block rounded-lg bg-[#0D276D] px-6 py-3 text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-[#6482B9] hover:shadow-lg"
            >
              View Details
            </Link>
          }
        >
          <Image
            src="./images/vehicles/sedan.jpeg"
            alt="Sedan"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </PremiumCard>


        {/* SUV */}
        <PremiumCard
          title="SUV"
          description="Spacious rides for families and groups."
          action={
            <Link
              href="/hire-cabs"
              className="inline-block rounded-lg bg-[#0D276D] px-6 py-3 text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-[#6482B9] hover:shadow-lg"
            >
              View Details
            </Link>
          }
        >
          <Image
            src="./images/vehicles/suv.jpeg"
            alt="SUV"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </PremiumCard>


        {/* Luxury */}
        <PremiumCard
          title="Luxury"
          description="Premium cars for executive travel."
          action={
            <Link
              href="/hire-cabs"
              className="inline-block rounded-lg bg-[#0D276D] px-6 py-3 text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-[#6482B9] hover:shadow-lg"
            >
              View Details
            </Link>
          }
        >
          <Image
            src="./images/vehicles/luxury.jpeg"
            alt="Luxury"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </PremiumCard>

      </div>
    </section>
  );
}
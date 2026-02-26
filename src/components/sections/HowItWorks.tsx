import FeatureCard from "@/components/ui/FeatureCard";
export function HowItWorks() {
  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-4xl font-bold text-[#111827]">How It Works</h2>
      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Booking a ride with Island Cabs is simple, fast and transparent.
      </p>

      <div className="mt-16 grid md:grid-cols-1 gap-12 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            number="01"
            title="Choose location"
            description="Select locations for pickup and drop-off."
          />
          <FeatureCard
            number="02"
            title="Pick-Up Date"
            description="Select the date and time for your ride."
          />
          <FeatureCard
            number="03"
            title="Book Your Car"
            description="Choose your preferred vehicle and book your ride."
          />
        </div>

      </div>
    </section>
  );
}
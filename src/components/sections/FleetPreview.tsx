import Image from "next/image";

export default function FleetPreview() {
    return (
        <section className="py-24 bg-[#f4f6fb]">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-16">
                    Our Premium Fleet
                </h2>

                <div className="grid md:grid-cols-3 gap-10">

                    {[1, 2, 3].map((car) => (
                        <div key={car} className="bg-white rounded-2xl shadow-lg p-6">
                            <Image
                                src="/images/hero/Car.png"
                                alt="Cab"
                                width={400}
                                height={250}
                            />
                            <h3 className="mt-6 font-semibold text-lg">
                                Luxury Sedan
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Comfortable & spacious for long journeys.
                            </p>
                            <button className="mt-6 bg-[#0d276d] text-white px-6 py-2 rounded-lg">
                                Book Now
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
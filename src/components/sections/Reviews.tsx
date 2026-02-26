export function Reviews() {
    return (
        <section className="py-24 bg-[#F5F8FF] text-center">
            <h2 className="text-4xl font-bold text-[#111827]">
                Customer Reviews for Island Cabs in Tamil Nadu
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Read what our customers say about our reliable airport transfers,
                corporate cab services, and outstation travel across Tamil Nadu.
            </p>

            <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {[
                    {
                        name: "Raghav Srinivasan – Chennai",
                        review:
                            "Island Cabs provided the most reliable airport transfer service in Chennai. The driver arrived on time, the vehicle was clean, and the entire journey was smooth and comfortable. Highly recommended for professional cab services."
                    },
                    {
                        name: "Priya Narayanan – Coimbatore",
                        review:
                            "We booked an outstation cab from Coimbatore to Madurai and the experience was excellent. The car was well-maintained, and the driver was courteous and experienced. One of the best cab services in Tamil Nadu."
                    },
                    {
                        name: "Arun Kumar – Corporate Client, Chennai",
                        review:
                            "Our company regularly uses Island Cabs for corporate travel and airport pickups. Their punctuality, transparent communication, and premium vehicles make them a dependable travel partner in Chennai."
                    }
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
                    >
                        <p className="text-gray-600 leading-relaxed">
                            “{item.review}”
                        </p>

                        <p className="mt-6 font-semibold text-[#0D276D]">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
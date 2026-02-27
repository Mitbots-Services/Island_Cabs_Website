import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

export function AboutSnapshot() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-4xl font-bold text-[#111827]">
                        Trusted Travel Partner Across Tamil Nadu
                    </h2>

                    <p className="mt-6 text-gray-600">
                        Island Cabs has been delivering safe, reliable and premium
                        transportation services for individuals and corporates.
                        Our professional drivers and well-maintained fleet ensure
                        comfort in every ride.
                    </p>
                    <Link href="/about-us">
                        <Button className="mt-6 bg-[#0D276D] text-white px-6 py-3 rounded-lg hover:bg-[#6482B9]">
                            Learn More
                        </Button>
                    </Link>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative h-[300px] w-full rounded-2xl overflow-hidden bg-[#F5F8FF] p-3 shadow-sm">

                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
                        <Image
                            src="/images/Hero/Trusted.png"
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
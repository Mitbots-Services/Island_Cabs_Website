import Link from "next/link";
import Button from "@/components/ui/Button";
export default function CTASection() {
    return (
        <section className="py-24 bg-[#0d276d] text-white text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6">
                    Ready To Travel?
                </h2>
                <p className="text-lg mb-8 text-gray-200">
                    Experience reliable and safe cab services across South India.
                </p>
                <button className="bg-[#d6a94e] px-8 py-3 rounded-lg font-semibold text-black">
                    Book Your Ride Now
                </button>
            </div>
        </section>
    );
}
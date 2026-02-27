import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-[#0D276D] via-[#1C3F8A] to-[#6482B9] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div>
                    <h3 className="text-2xl font-bold">
                        Island Cabs
                    </h3>
                    <p className="mt-4 text-white/80 text-sm leading-relaxed">
                        Professional and reliable taxi services across Tamil Nadu
                        and South India. Safe, comfortable and premium travel
                        experience for individuals and businesses.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-3 text-white/80 text-sm">
                        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/about-us" className="hover:text-white transition">About Us</Link></li>
                        <li><Link href="/hire-cabs" className="hover:text-white transition">Hire Cabs</Link></li>
                        <li><Link href="/contact-us" className="hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">
                        Services
                    </h4>
                    <ul className="space-y-3 text-white/80 text-sm">
                        <li>Airport Transfers</li>
                        <li>Corporate Travel</li>
                        <li>Outstation Trips</li>
                        <li>Luxury Vehicle Hire</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">
                        Legal
                    </h4>
                    <ul className="space-y-3 text-white/80 text-sm">
                        <li>
                            <Link href="/terms-and-conditions" className="hover:text-white transition">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="hover:text-white transition">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/cancellation-policy" className="hover:text-white transition">
                                Cancellation Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
                    <p>© 2026 Island Cabs. All Rights Reserved.</p>
                    <p>Premium Travel Across South India</p>
                </div>
            </div>
        </footer>
    );
}
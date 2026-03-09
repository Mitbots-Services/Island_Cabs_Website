import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0D276D] via-[#1C3F8A] to-[#6482B9] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold">Island Cabs</h3>

          <p className="mt-4 text-white/80 text-sm leading-relaxed">
            Island Cabs is a trusted taxi service in Rameshwaram providing
            temple tours, sightseeing and outstation travel to Madurai,
            Kanyakumari and across Tamil Nadu.
          </p>

          <p className="mt-4 text-white/90 text-sm">
            📍 Rameshwaram, Tamil Nadu
          </p>

          <a
            href="tel:+918056867468"
            className="block mt-2 text-white font-medium"
          >
            📞 +91 80568 67468
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-3 text-white/80 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/cab-services">Cab Services</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
            <li>
              <Link href="/book-now">Book Taxi</Link>
            </li>
          </ul>
        </div>

        {/* POPULAR ROUTES (SEO BOOST) */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Popular Routes</h4>

          <ul className="space-y-3 text-white/80 text-sm">
            <li>
              <Link href="/rameshwaram-to-madurai-taxi">
                Rameshwaram to Madurai Taxi
              </Link>
            </li>

            <li>
              <Link href="/rameshwaram-to-kanyakumari-taxi">
                Rameshwaram to Kanyakumari Taxi
              </Link>
            </li>

            <li>
              <Link href="/rameshwaram-to-dhanushkodi-taxi">
                Rameshwaram to Dhanushkodi Taxi
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Taxi Services</h4>

          <ul className="space-y-3 text-white/80 text-sm">
            <li>Temple Tours in Rameshwaram</li>
            <li>Airport Transfers</li>
            <li>Outstation Taxi Services</li>
            <li>Tempo Traveller Rental</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
          <div className="text-center md:text-left">
            <p>© 2026 Island Cabs. All Rights Reserved.</p>

            <p className="text-white/60 text-xs mt-1">
              Designed & Developed by{" "}
              <a
                href="https://mitbots.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition"
              >
                Mitbots
              </a>
            </p>
          </div>

          <div className="flex gap-6">
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/cancellation-policy">Cancellation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

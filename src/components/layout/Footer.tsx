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
              <Link href="/" className="hover:text-[var(--accent)]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-[var(--accent)]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/cab-services" className="hover:text-[var(--accent)]">
                Cab Services
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-[var(--accent)]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/book-now" className="hover:text-[var(--accent)]">
                Book Taxi
              </Link>
            </li>
          </ul>
        </div>

        {/* POPULAR ROUTES (SEO BOOST) */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Popular Routes</h4>

          <ul className="space-y-3 text-white/80 text-sm">
            <li>
              <Link
                href="/rameshwaram-to-madurai-taxi"
                className="hover:text-[var(--accent)]"
              >
                Rameshwaram to Madurai Taxi
              </Link>
            </li>

            <li>
              <Link
                href="/rameshwaram-to-kanyakumari-taxi"
                className="hover:text-[var(--accent)]"
              >
                Rameshwaram to Kanyakumari Taxi
              </Link>
            </li>

            <li>
              <Link
                href="/rameshwaram-to-dhanushkodi-taxi"
                className="hover:text-[var(--accent)]"
              >
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
                className="inline-block py-1 underline hover:text-white transition"
              >
                Mitbots
              </a>
            </p>
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/terms-and-conditions"
              className="inline-block py-2 hover:text-white transition"
            >
              Terms
            </Link>

            <Link
              href="/privacy-policy"
              className="inline-block py-2 hover:text-white transition"
            >
              Privacy
            </Link>

            <Link
              href="/cancellation-policy"
              className="inline-block py-2 hover:text-white transition"
            >
              Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

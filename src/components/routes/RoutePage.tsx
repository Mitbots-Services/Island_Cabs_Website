import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

interface Props {
  title: string;
  description: string;
  distance: string;
  duration: string;
  image: StaticImageData;
  attractions: string[];
}

export default function RoutePage({
  title,
  description,
  distance,
  duration,
  image,
  attractions,
}: Props) {
  return (
    <main>
      {/* HERO */}
      <section className="relative py-32 bg-gradient-to-br from-[#eef2ff] via-white to-[#e0e7ff]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827]">
              {title}
            </h1>

            <p className="mt-6 text-gray-600">{description}</p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="/book-now">
                <Button variant="primary">Send Booking Request</Button>
              </Link>

              <a href="tel:+918056867468">
                <Button variant="outlineBlue">Call Now</Button>
              </a>
            </div>
          </div>

          <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ROUTE DETAILS */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Route Overview</h2>

          <p className="mt-6 text-gray-600">
            The distance for this journey is approximately <b>{distance}</b>.
            The travel duration is usually around <br />
            <b>{duration}</b> depending on road and traffic conditions.
          </p>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--text)]">
            Popular Attractions
          </h2>

          <div className="relative mt-20">
            {/* route line */}
            <div className="absolute top-8 left-0 w-full h-[2px] bg-[#dbe2ea]" />

            <div className="grid md:grid-cols-3 gap-12 relative">
              {attractions.map((item, i) => (
                <div key={i} className="text-center group">
                  {/* stop marker */}
                  <div className="mx-auto w-6 h-6 rounded-full primary border-4 border-white shadow-md relative z-10" />

                  <div className="mt-6 bg-white p-6 rounded-xl shadow-sm group-hover:shadow-lg transition">
                    <h3 className="font-semibold text-lg text-[var(--text)]">
                      {item}
                    </h3>

                    <p className="text-[var(--text)]/70 mt-3 text-sm">
                      A popular destination visited by tourists traveling
                      through this route.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Vehicles Available with Island Cabs
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="border rounded-xl p-8">
              <h3 className="font-semibold text-lg">Sedan</h3>
              <p className="text-gray-600 mt-3">
                Comfortable for couples and small families.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="font-semibold text-lg">SUV</h3>
              <p className="text-gray-600 mt-3">
                Spacious vehicles ideal for group travel.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="font-semibold text-lg">Luxury</h3>
              <p className="text-gray-600 mt-3">
                Premium vehicles for comfortable travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-28 bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)]">
              Why Choose Island Cabs
            </h2>

            <p className="mt-4 text-[var(--text)]/70">
              Island Cabs has been serving tourists and pilgrims visiting
              Rameshwaram for over 6 years with reliable taxi services,
              professional drivers and comfortable vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-20">
            {/* Experience */}
            <div className="group px-8 py-10 border-b md:border-b-0 md:border-r border-[#e5e7eb]">
              <div className="text-[var(--primary)] text-4xl font-bold">6+</div>

              <h3 className="mt-4 font-semibold text-lg text-[var(--text)]">
                Years of Experience
              </h3>

              <p className="mt-3 text-sm text-[var(--text)]/70">
                Serving travelers and pilgrims visiting Rameshwaram with
                reliable taxi services.
              </p>

              <div className="h-[2px] w-0 group-hover:w-12 bg-[var(--primary)] mt-6 transition-all duration-300" />
            </div>

            {/* Drivers */}
            <div className="group px-8 py-10 border-b md:border-b-0 md:border-r border-[#e5e7eb]">
              <div className="text-[var(--primary)] text-4xl font-bold">01</div>

              <h3 className="mt-4 font-semibold text-lg text-[var(--text)]">
                Professional Drivers
              </h3>

              <p className="mt-3 text-sm text-[var(--text)]/70">
                Experienced local drivers ensuring safe and comfortable travel
                across Tamil Nadu.
              </p>

              <div className="h-[2px] w-0 group-hover:w-12 bg-[var(--primary)] mt-6 transition-all duration-300" />
            </div>

            {/* Vehicles */}
            <div className="group px-8 py-10 border-b md:border-b-0 md:border-r border-[#e5e7eb]">
              <div className="text-[var(--primary)] text-4xl font-bold">
                100%
              </div>

              <h3 className="mt-4 font-semibold text-lg text-[var(--text)]">
                Well Maintained Vehicles
              </h3>

              <p className="mt-3 text-sm text-[var(--text)]/70">
                Clean and comfortable cars suitable for long distance travel and
                sightseeing tours.
              </p>

              <div className="h-[2px] w-0 group-hover:w-12 bg-[var(--primary)] mt-6 transition-all duration-300" />
            </div>

            {/* Support */}
            <div className="group px-8 py-10">
              <div className="text-[var(--primary)] text-4xl font-bold">
                24/7
              </div>

              <h3 className="mt-4 font-semibold text-lg text-[var(--text)]">
                Easy Booking Support
              </h3>

              <p className="mt-3 text-sm text-[var(--text)]/70">
                Send a booking request or call us directly to arrange your taxi
                service.
              </p>

              <div className="h-[2px] w-0 group-hover:w-12 bg-[var(--primary)] mt-6 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br text-[var(--text)] from-[#eef2ff] via-white to-[#e0e7ff] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold">
            Book Your Taxi with Island Cabs
          </h2>

          <p className="mt-6 text-[var(--text)]">
            Send a booking request or call us to confirm your travel.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <Link href="/book-now">
              <Button variant="accent">Send Booking Request</Button>
            </Link>

            <a href="tel:+918056867468">
              <Button variant="outlineBlue">Call Now</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export default function PopularRoutes() {
  const routes = [
    {
      title: "Rameshwaram → Madurai Taxi",
      description:
        "Comfortable taxi service for temple visits, airport transfers and city travel.",
      link: "/rameshwaram-to-madurai-taxi",
    },
    {
      title: "Rameshwaram → Kanyakumari Taxi",
      description:
        "Travel with experienced drivers and well maintained vehicles.",
      link: "/rameshwaram-to-kanyakumari-taxi",
    },
    {
      title: "Rameshwaram → Dhanushkodi Taxi",
      description:
        "Explore Dhanushkodi beach and nearby attractions comfortably.",
      link: "/rameshwaram-to-dhanushkodi-taxi",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[var(--text)]">
          Popular Taxi Routes from Rameshwaram
        </h2>

        <p className="mt-4 text-[var(--text)]/70">
          Reliable taxi services from Rameshwaram to major destinations across
          Tamil Nadu.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-16 px-6 divide-y divide-[color-mix(in_srgb,var(--secondary)_25%,transparent)]">
        {routes.map((route, i) => (
          <div
            key={i}
            className="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="text-left">
              <h3 className="text-xl font-semibold text-[var(--primary)]">
                {route.title}
              </h3>

              <p className="text-[var(--text)]/70 mt-1">{route.description}</p>
            </div>

            <Link
              href={route.link}
              className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

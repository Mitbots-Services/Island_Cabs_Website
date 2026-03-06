import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-bold text-[var(--primary)]">404</h1>

        <h2 className="text-3xl font-heading font-bold mt-4 text-[var(--text)]">
          Looks like this taxi took a wrong turn!
        </h2>

        <p className="mt-4 text-[var(--text)]/70">
          The page you're looking for seems to have taken a detour. Let’s get
          you back on the right route.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="primary text-white px-6 py-3 rounded-full font-semibold"
          >
            Go Home
          </Link>

          <Link
            href="/book-now"
            className="border border-[var(--primary)] text-[var(--primary)] px-6 py-3 rounded-full font-semibold"
          >
            Book a Taxi
          </Link>
        </div>
      </div>
    </main>
  );
}

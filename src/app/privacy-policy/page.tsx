export default function PrivacyPage() {
  return (
    <main className="bg-[var(--bg)] py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-heading font-bold text-[var(--text)]">
          Privacy Policy
        </h1>

        <p className="mt-4 text-[var(--text)]/70">
          Island Cabs respects your privacy and is committed to protecting the
          personal information you share with us when using our taxi services or
          submitting booking requests through our website.
        </p>

        <div className="mt-12 space-y-10 text-[var(--text)]/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <p className="mt-3">
              We may collect personal information such as your name, contact
              number, email address, pickup location, drop location, and travel
              requirements when you submit booking requests or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              How We Use Your Information
            </h2>
            <p className="mt-3">
              The information collected is used solely to process taxi bookings,
              provide travel assistance, communicate booking confirmations, and
              improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Information Security</h2>
            <p className="mt-3">
              We take reasonable security measures to protect personal
              information from unauthorized access, misuse, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Third-Party Sharing</h2>
            <p className="mt-3">
              Island Cabs does not sell, rent, or trade your personal
              information. Information may only be shared with drivers or
              service partners involved in completing your taxi booking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-3">
              If you have questions regarding this privacy policy or how your
              data is handled, please contact Island Cabs directly through the
              contact details provided on this website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

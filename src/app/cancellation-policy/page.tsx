export default function CancellationPage() {
  return (
    <main className="bg-[var(--bg)] py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-heading font-bold text-[var(--text)]">
          Cancellation & Refund Policy
        </h1>

        <p className="mt-4 text-[var(--text)]/70">
          This policy explains the terms related to booking cancellations,
          schedule changes, and possible refunds for taxi services provided by
          Island Cabs.
        </p>

        <div className="mt-12 space-y-10 text-[var(--text)]/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold">Booking Cancellation</h2>
            <p className="mt-3">
              Customers may cancel taxi bookings by contacting Island Cabs via
              phone, WhatsApp, or email before the scheduled pickup time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Cancellation Charges</h2>
            <p className="mt-3">
              Cancellation charges may apply depending on the time of
              cancellation, driver allocation, and travel arrangements already
              made.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Schedule Changes</h2>
            <p className="mt-3">
              If travel plans change, customers are encouraged to notify Island
              Cabs as early as possible so adjustments can be made based on
              vehicle availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Refunds</h2>
            <p className="mt-3">
              Refunds, if applicable, will be processed according to the payment
              method used during booking and the applicable cancellation terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

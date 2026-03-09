export default function TermsPage() {
  return (
    <main className="bg-[var(--bg)] py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-heading font-bold text-[var(--text)]">
          Terms & Conditions
        </h1>

        <p className="mt-4 text-[var(--text)]/70">
          These Terms & Conditions govern the use of taxi services provided by
          Island Cabs in Rameshwaram and surrounding areas. By booking or using
          our services, you agree to the following terms.
        </p>

        <div className="mt-12 space-y-10 text-[var(--text)]/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold">Taxi Bookings</h2>
            <p className="mt-3">
              Taxi bookings can be made through our website, phone call,
              WhatsApp, or direct communication with our team. All bookings are
              subject to vehicle availability and confirmation by Island Cabs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Pricing & Payments</h2>
            <p className="mt-3">
              Taxi fares depend on travel distance, vehicle type, waiting time,
              and additional travel requirements. Final pricing will be
              confirmed during booking. Customers are responsible for verifying
              fare details before confirming the trip.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Passenger Responsibilities
            </h2>
            <p className="mt-3">
              Passengers must provide accurate pickup and drop information
              during booking. Island Cabs is not responsible for delays caused
              by incorrect travel details or passenger delays.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Travel Conditions</h2>
            <p className="mt-3">
              Travel schedules may be affected by road conditions, weather,
              traffic, or government regulations. Drivers may adjust routes if
              necessary to ensure passenger safety.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Liability</h2>
            <p className="mt-3">
              Island Cabs will take reasonable measures to ensure safe and
              comfortable travel. However, we are not liable for delays,
              accidents, or disruptions caused by external circumstances beyond
              our control.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

import BookingClient from "@/components/booking/BookingClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Taxi in Rameshwaram | Island Cabs",
  description:
    "Book a taxi with Island Cabs in Rameshwaram for temple tours, sightseeing and outstation travel to Madurai, Kanyakumari and across Tamil Nadu.",
};

const bookingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Island Cabs Taxi Booking",
  provider: {
    "@type": "LocalBusiness",
    name: "Island Cabs",
    areaServed: "Tamil Nadu",
  },
  areaServed: "Rameshwaram",
  serviceType: "Taxi Booking",
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://islandcabsrameshwaram.in/book-now",
    },
    result: {
      "@type": "Reservation",
      name: "Taxi Booking Request",
    },
  },
};

export default function BookNowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />

      <BookingClient />
    </>
  );
}

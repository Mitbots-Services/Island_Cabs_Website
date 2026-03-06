import ContactClient from "@/components/contact/ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Island Cabs | Taxi Service in Rameshwaram",
  description:
    "Contact Island Cabs for reliable taxi services in Rameshwaram including temple tours, airport transfers and outstation travel to Madurai and Kanyakumari.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide taxi services in Rameshwaram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Island Cabs provides reliable taxi services in Rameshwaram including temple tours, sightseeing and outstation travel.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a taxi from Rameshwaram to Madurai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Island Cabs offers comfortable taxi services from Rameshwaram to Madurai with professional drivers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide taxis to Kanyakumari from Rameshwaram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide taxi services from Rameshwaram to Kanyakumari and other destinations across Tamil Nadu.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a cab with Island Cabs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can send a booking request using our contact form or call us directly to arrange your taxi service.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Island Cabs",
  description:
    "Taxi service in Rameshwaram providing temple tours, airport transfers and outstation travel across Tamil Nadu.",
  areaServed: "Tamil Nadu",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rameshwaram",
    addressRegion: "Tamil Nadu",
    addressCountry: "India",
  },
  telephone: "+918056867468",
};

export default function ContactPage() {
  return (
    <>
      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <ContactClient />
    </>
  );
}

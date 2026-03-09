import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Cinzel, Manrope, Poppins } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://islandcabsrameshwaram.in"),

  title: {
    default: "Island Cabs | Taxi Service in Rameshwaram",
    template: "%s | Island Cabs",
  },

  description:
    "Island Cabs provides reliable taxi services in Rameshwaram including temple tours, airport transfers and outstation travel to Madurai, Kanyakumari and across Tamil Nadu.",

  keywords: [
    "Rameshwaram taxi service",
    "Rameshwaram cab booking",
    "Rameshwaram to Madurai taxi",
    "Rameshwaram to Kanyakumari taxi",
    "Dhanushkodi taxi",
    "Taxi service Tamil Nadu",
    "Island Cabs Rameshwaram",
  ],

  openGraph: {
    title: "Island Cabs | Taxi Service in Rameshwaram",
    description:
      "Book reliable taxi services in Rameshwaram for temple tours, airport transfers and outstation travel across Tamil Nadu.",
    url: "https://islandcabsrameshwaram.in",
    siteName: "Island Cabs",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Island Cabs Rameshwaram Taxi Service",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Island Cabs | Taxi Service in Rameshwaram",
    description:
      "Professional taxi services in Rameshwaram for temple tours and outstation travel across Tamil Nadu.",
    images: ["/icon.png"],
  },

  alternates: {
    canonical: "https://islandcabsrameshwaram.in",
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-cinzel",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Island Cabs",
    url: "https://islandcabsrameshwaram.in",
    logo: "https://islandcabsrameshwaram.in/icon.png",
    description:
      "Island Cabs is a professional taxi service in Rameshwaram offering temple tours, sightseeing and outstation taxi services across Tamil Nadu.",
    telephone: "+918056867468",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rameshwaram",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
    serviceType: "Taxi Service",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Island Cabs",
    url: "https://islandcabsrameshwaram.in",
    logo: "https://islandcabsrameshwaram.in/icon.png",
    sameAs: [],
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${poppins.variable} ${cinzel.variable}`}
    >
      <body className="bg-white text-black font-body">
        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6LKHVH1DH3"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6LKHVH1DH3');
          `}
        </Script>

        <Header />

        {/* MAIN LANDMARK */}
        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

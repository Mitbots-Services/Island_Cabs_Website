import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Island Cabs | Premium Cab Services in Tamil Nadu",
    description:
        "Get in touch with Island Cabs for corporate travel, airport transfers and outstation trips across Tamil Nadu.",
};

export default function ContactPage() {
    return <ContactClient />;
}
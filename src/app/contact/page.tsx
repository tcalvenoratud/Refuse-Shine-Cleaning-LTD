import ContactClient from "./contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Refuse Shine Cleaning LTD | Get a Free Cleaning Quote",
  description: "Contact Refuse Shine Cleaning LTD for a free quote. We provide trusted cleaning services across Willenhall, Wolverhampton and the West Midlands.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

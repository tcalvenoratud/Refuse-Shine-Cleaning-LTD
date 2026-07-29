import ContactClient from "./contact-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Refuse Shine Cleaning LTD",
  description: "Get in touch with Refuse Shine Cleaning LTD. Request a custom quote, call our team, or send a message for professional cleaning services in London.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

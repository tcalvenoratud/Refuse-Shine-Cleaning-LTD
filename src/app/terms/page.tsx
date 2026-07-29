import TermsClient from "./terms-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Refuse Shine Cleaning LTD",
  description: "Read our service terms, booking details, cancellation policies, payment terms, and liability boundaries for professional cleaning services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}

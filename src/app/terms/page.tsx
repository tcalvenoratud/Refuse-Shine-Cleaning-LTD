import TermsClient from "./terms-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Refuse Shine Cleaning LTD",
  description: "Read the terms and conditions for booking professional cleaning services with Refuse Shine Cleaning LTD, including payments, cancellations and service policies.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
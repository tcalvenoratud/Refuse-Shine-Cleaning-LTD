import PrivacyClient from "./privacy-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Refuse Shine Cleaning LTD",
  description: "Read our privacy policy to understand how we collect, use, protect, and handle your personal data in compliance with GDPR.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}

import PrivacyClient from "./privacy-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Refuse Shine Cleaning LTD",
  description: "Read the Refuse Shine Cleaning LTD Privacy Policy to learn how we collect, use and protect your personal information in accordance with UK GDPR regulations.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}

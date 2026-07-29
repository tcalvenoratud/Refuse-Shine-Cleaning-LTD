import ServicesClient from "./services-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in London | Refuse Shine Cleaning LTD",
  description: "Comprehensive residential and commercial cleaning services across London. Expert house cleaning, deep cleaning, tenancy, window, oven & carpet cleaning by fully insured professionals.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

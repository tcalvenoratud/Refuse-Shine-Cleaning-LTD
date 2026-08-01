import ServicesClient from "./services-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in the West Midlands | Refuse Shine Cleaning LTD",
  description: "Explore our professional cleaning services including regular house cleaning, deep cleaning, kitchen cleaning, bathroom cleaning, end of tenancy cleaning, carpet cleaning, window cleaning, waste removal and more across the West Midlands.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

import ServicesClient from "./services-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Services in West Midlands | Refuse Shine",
  description: "Professional house cleaning, deep cleaning, carpet cleaning, window cleaning, end of tenancy cleaning and more across the West Midlands.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

import AboutClient from "./about-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Refuse Shine Cleaning LTD | Trusted Cleaning Company in the West Midlands",
  description: "Learn about Refuse Shine Cleaning LTD, providing trusted, fully insured cleaning services across Willenhall, Wolverhampton and the West Midlands.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

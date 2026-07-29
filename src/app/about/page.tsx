import AboutClient from "./about-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Refuse Shine Cleaning LTD",
  description: "Learn about London's premier professional cleaning service provider. Fully vetted staff, eco-friendly products, and a 100% satisfaction guarantee.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

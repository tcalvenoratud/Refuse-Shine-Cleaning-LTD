import AboutClient from "./about-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Refuse Shine Cleaning LTD | Trusted Cleaning Company in the West Midlands",
  description: "Learn about Refuse Shine Cleaning LTD, a trusted cleaning company serving Willenhall, Wolverhampton, Walsall, Dudley, Birmingham and the West Midlands with reliable, fully insured cleaning services.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

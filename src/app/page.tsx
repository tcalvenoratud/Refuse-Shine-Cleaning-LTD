import HomeClient from "./home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Willenhall, Wolverhampton & West Midlands | Refuse Shine Cleaning LTD",
  description: "Trusted cleaning services across Willenhall, Wolverhampton, Walsall & the West Midlands. Book house cleaning, deep cleaning, end of tenancy cleaning and more.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}

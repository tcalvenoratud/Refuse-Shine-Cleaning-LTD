import HomeClient from "./home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Willenhall, Wolverhampton & West Midlands | Refuse Shine Cleaning LTD",
  description: "Trusted professional cleaning services across Willenhall, Wolverhampton, Walsall, Dudley, Birmingham and the West Midlands. Book regular house cleaning, deep cleaning, end of tenancy cleaning, carpet cleaning and more.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}

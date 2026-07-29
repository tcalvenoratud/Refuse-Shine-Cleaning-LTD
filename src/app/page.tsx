import HomeClient from "./home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refuse Shine Cleaning LTD | Professional Cleaning Services London",
  description: "Experience premium professional cleaning services in London. Standard house cleans, deep cleans, end of tenancy, and specialized cleaning by vetted, insured staff.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}

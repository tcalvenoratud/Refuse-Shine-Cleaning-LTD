import BookClient from "./book-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Professional Cleaning Services in London Online",
  description: "Book vetted London cleaners for house, deep, end-of-tenancy, carpet & oven cleaning. Instant booking with transparent pricing and flexible scheduling.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return <BookClient />;
}

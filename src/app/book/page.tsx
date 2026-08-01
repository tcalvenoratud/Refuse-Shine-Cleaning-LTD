import BookClient from "./book-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Professional Cleaning Services in the West Midlands | Refuse Shine Cleaning LTD",
  description: "Book trusted professional cleaning services across Willenhall, Wolverhampton, Walsall, Dudley, Birmingham and the West Midlands. Instant online booking with transparent pricing.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return <BookClient />;
}

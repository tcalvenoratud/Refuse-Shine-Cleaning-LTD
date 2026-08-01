import BookClient from "./book-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Professional Cleaning Services in the West Midlands | Refuse Shine Cleaning LTD",
  description: "Book trusted cleaning services across Willenhall, Wolverhampton, Walsall and the West Midlands with fast online booking.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return <BookClient />;
}

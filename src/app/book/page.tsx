import BookClient from "./book-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Cleaning Service | Refuse Shine Cleaning LTD",
  description: "Book trusted cleaning services across Willenhall, Wolverhampton, Walsall and the West Midlands with fast online booking.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return (
  <>
    <section className="relative overflow-hidden bg-background pt-12 pb-8 md:pt-16 md:pb-12 border-b border-border/40 dark:border-border/10">
      <div className="absolute top-[-10%] right-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl font-heading leading-[1.1]">
            Book Your Service
            <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Instantly Online
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
            Configure your requirements, select optional extra details, and request a personalized quote.
          </p>
        </div>
      </div>
    </section>
    <BookClient />
  </>
);
}

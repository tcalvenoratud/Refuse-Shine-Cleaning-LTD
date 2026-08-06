import HomeClient from "./home-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Willenhall, Wolverhampton & West Midlands | Refuse Shine Cleaning LTD",
  description: "Trusted cleaning services across Willenhall, Wolverhampton, Walsall & the West Midlands. Book house cleaning, deep cleaning, end of tenancy cleaning and more.",
  alternates: {
    canonical: "/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What professional cleaning services do you offer in Willenhall and the West Midlands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide comprehensive residential and commercial cleaning services. This includes regular domestic house cleaning (weekly/fortnightly), deep cleans, landlord-approved end-of-tenancy cleans, Airbnb guest changeover management, carpet steam cleaning, kitchen oven/appliance scrubbing, and window/waste removal."
      }
    },
    {
      "@type": "Question",
      "name": "Are your cleaning staff DBS checked and vetted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 100% of our cleaning staff members undergo complete background audits, address verification, and official DBS (Disclosure and Barring Service) vetting. We only hire honest, vetted professionals so you feel safe letting them into your home or office."
      }
    },
    {
      "@type": "Question",
      "name": "Do you bring your own cleaning detergents and equipment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We bring all standard professional eco-friendly cleaning detergents, sprays, and fresh microfibre cloths. If you require specialty tools (like carpet hot-water extractors or industrial vacuums), we provide them as part of our premium service packages. Let us know during booking if you have any specific preferences."
      }
    },
    {
      "@type": "Question",
      "name": "Is Refuse Shine Cleaning LTD fully insured and DBS checked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Refuse Shine Cleaning LTD carries comprehensive public liability insurance coverage up to £5M. In the highly unlikely event that any of your property or belongings are damaged during cleaning, you are fully protected."
      }
    },
    {
      "@type": "Question",
      "name": "How can I book a professional cleaning service in Willenhall or nearby areas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can request a free quote online or call us directly. Once booked, scheduling shifts or rescheduling is free as long as you notify us at least 24 hours before your scheduled appointment."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide professional cleaning services across Willenhall, Bilston, Walsall, Wolverhampton, Tipton, West Bromwich, Dudley, Birmingham, Cannock, Smethwick, Solihull, Tamworth, Stafford, Redditch and surrounding West Midlands locations."
      }
    },
    {
      "@type": "Question",
      "name": "How much does professional cleaning cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost depends on the size of your property, the type of cleaning service, and your location. Contact us for a free no-obligation quote."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}

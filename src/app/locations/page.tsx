import { Metadata } from "next";
import { LocationsClient } from "./locations-client";
import { LOCATIONS_DATA } from "@/lib/locations-data";

export const metadata: Metadata = {
  title: "Areas We Serve | Refuse Shine Cleaning LTD",
  description:
    "Professional cleaning services across Willenhall, Walsall, Wolverhampton, Dudley, Bilston, Tipton, West Bromwich and the West Midlands. Domestic, deep cleaning, end of tenancy, and commercial.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Areas We Serve | Refuse Shine Cleaning LTD",
    description:
      "Explore professional residential and commercial cleaning services across Willenhall and the wider West Midlands.",
    url: "https://www.refuseshinecleaningltd.co.uk/locations",
    siteName: "Refuse Shine Cleaning LTD",
    locale: "en_GB",
    type: "website",
  },
};

export default function LocationsPage() {
  const baseUrl = "https://www.refuseshinecleaningltd.co.uk";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Areas We Serve",
        "item": `${baseUrl}/locations`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "name": "Refuse Shine Cleaning LTD",
    "url": `${baseUrl}/locations`,
    "logo": `${baseUrl}/assets/logo/logo.jpeg`,
    "image": `${baseUrl}/assets/logo/logo.jpeg`,
    "telephone": "+44 7721 714435",
    "email": "info@refuseshinecleaningltd.co.uk",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Flat 23 Lichfield House, 232 Lichfield Road",
      "addressLocality": "Willenhall",
      "addressRegion": "West Midlands",
      "postalCode": "WV12 5AB",
      "addressCountry": "GB",
    },
    "areaServed": LOCATIONS_DATA.map((loc) => ({
      "@type": "City",
      "name": loc.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LocationsClient />
    </>
  );
}

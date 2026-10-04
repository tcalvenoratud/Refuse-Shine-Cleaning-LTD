import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS_DATA, getLocationBySlug, getAllLocationSlugs } from "@/lib/locations-data";
import { LocationHero } from "@/components/locations/LocationHero";
import { LocationIntro } from "@/components/locations/LocationIntro";
import { LocationServices } from "@/components/locations/LocationServices";
import { LocationWhyChoose } from "@/components/locations/LocationWhyChoose";
import { NearbyLocations } from "@/components/locations/NearbyLocations";
import { LocationLocalContext } from "@/components/locations/LocationLocalContext";
import { LocationFAQ } from "@/components/locations/LocationFAQ";
import { LocationCTA } from "@/components/locations/LocationCTA";

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {};
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://www.refuseshinecleaningltd.co.uk/locations/${location.slug}`,
      siteName: "Refuse Shine Cleaning LTD",
      locale: "en_GB",
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const baseUrl = "https://www.refuseshinecleaningltd.co.uk";
  const locationUrl = `${baseUrl}/locations/${location.slug}`;

  const cleaningServiceSchema = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "name": `Refuse Shine Cleaning LTD - ${location.name}`,
    "description": location.tagline,
    "url": locationUrl,
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
    "areaServed": [
      {
        "@type": "City",
        "name": location.name,
      },
      {
        "@type": "AdministrativeArea",
        "name": "West Midlands",
      },
    ],
  };

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
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.name,
        "item": locationUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cleaningServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Section 1: Hero with breadcrumbs and 3 CTAs */}
        <LocationHero
          name={location.name}
          slug={location.slug}
          postcodes={location.postcodes}
          tagline={location.tagline}
          heroBadge={location.heroBadge}
        />

        {/* Section 2: Local Introduction */}
        <LocationIntro
          locationName={location.name}
          postcodes={location.postcodes}
          introTitle={location.introTitle}
          introParagraphs={location.introParagraphs}
        />

        {/* Section 3: Cleaning Services in Location (linking to /services/[slug]) */}
        <LocationServices
          locationName={location.name}
          featuredServiceSlugs={location.featuredServiceSlugs}
        />

        {/* Section 4: Why Choose Refuse Shine */}
        <LocationWhyChoose
          locationName={location.name}
          title={location.whyChooseTitle}
          whyChoose={location.whyChoose}
        />

        {/* Section 6: Local Service Area (Nearby Locations) */}
        <NearbyLocations
          locationName={location.name}
          title={location.nearbyTitle}
          intro={location.nearbyIntro}
          nearbyLocations={location.nearbyLocations}
        />

        {/* Section 7: Local Context */}
        <LocationLocalContext
          locationName={location.name}
          title={location.contextTitle}
          contextContent={location.contextContent}
        />

        {/* Section 8: Location-Specific FAQs */}
        <LocationFAQ
          locationName={location.name}
          faqs={location.faqs}
        />

        {/* Section 9: Final Conversion CTA */}
        <LocationCTA
          locationName={location.name}
          slug={location.slug}
          ctaTitle={location.ctaTitle}
          ctaDescription={location.ctaDescription}
        />
      </div>
    </>
  );
}

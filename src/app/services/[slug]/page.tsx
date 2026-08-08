import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DATA, getServiceBySlug } from "@/lib/services-data";
import { ServiceHero } from "@/components/Services/ServiceHero";
import { ServiceOverview } from "@/components/Services/ServiceOverview";
import { ServiceIncludes } from "@/components/Services/ServiceIncludes";
import { ServiceProcess } from "@/components/Services/ServiceProcess";
import { ServiceWhyChoose } from "@/components/Services/ServiceWhyChoose";
import { ServiceAreas } from "@/components/Services/ServiceAreas";
import { RelatedServices } from "@/components/Services/RelatedServices";
import { ServiceFAQ } from "@/components/Services/ServiceFAQ";
import { ServiceCTA } from "@/components/Services/ServiceCTA";

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.refuseshinecleaningltd.co.uk/services/${service.slug}`,
      siteName: "Refuse Shine Cleaning LTD",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.altText,
        },
      ],
      locale: "en_GB",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Schema structured data definitions
  const baseUrl = "https://www.refuseshinecleaningltd.co.uk";
  const serviceUrl = `${baseUrl}/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title.split(" in ")[0] || service.title,
    "description": service.tagline,
    "url": serviceUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Refuse Shine Cleaning LTD",
      "image": `${baseUrl}/assets/logo/logo.jpeg`,
      "telephone": "+44 7721 714435",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat 24 Lichfield House, 232 Lichfield Road",
        "addressLocality": "Willenhall",
        "addressRegion": "West Midlands",
        "postalCode": "WV12 5AB",
        "addressCountry": "GB"
      }
    },
    "areaServed": [
      { "@type": "State", "name": "West Midlands" },
      { "@type": "City", "name": "Willenhall" },
      { "@type": "City", "name": "Walsall" },
      { "@type": "City", "name": "Wolverhampton" },
      { "@type": "City", "name": "Dudley" },
      { "@type": "City", "name": "West Bromwich" },
      { "@type": "City", "name": "Birmingham" }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${baseUrl}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title.split(" in ")[0] || service.title,
        "item": serviceUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
        {/* 1. Breadcrumb & Hero Section */}
        <ServiceHero
          title={service.title}
          tagline={service.tagline}
          image={service.image}
          altText={service.altText}
          serviceId={service.id}
        />

        {/* 2. Service Introduction & Who It Is For */}
        <ServiceOverview
          introTitle={service.introTitle}
          introContent={service.introContent}
          forTitle={service.forTitle}
          forIntro={service.forIntro}
          forList={service.forList}
        />

        {/* 3. What's Included / What We Clean Checklist */}
        <ServiceIncludes
          includedTitle={service.includedTitle}
          includedIntro={service.includedIntro}
          includedList={service.includedList}
        />

        {/* 4. Our Cleaning Process */}
        <ServiceProcess
          processTitle={service.processTitle}
          processSteps={service.processSteps}
        />

        {/* 5. Why Choose Refuse Shine Cleaning LTD */}
        <ServiceWhyChoose whyChoose={service.whyChoose} serviceTitle={service.title} />

        {/* 6. Areas We Serve */}
        <ServiceAreas areasContent={service.areasContent} />

        {/* 7. Related Cleaning Services */}
        <RelatedServices currentSlug={service.slug} />

        {/* 8. Service-Specific FAQs */}
        <ServiceFAQ faqs={service.faqs} />

        {/* 9. Booking Call to Action */}
        <ServiceCTA serviceId={service.id} serviceTitle={service.title} />
      </div>
    </>
  );
}

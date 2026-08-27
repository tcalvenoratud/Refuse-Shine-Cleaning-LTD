import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer } from "@/components/Footer/footer";
import { Toaster } from "sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.refuseshinecleaningltd.co.uk"),
  title: {
    default: "Refuse Shine Cleaning LTD | Professional Cleaning Services",
    template: "%s ",
  },
  description: "Professional cleaning services across Willenhall, Wolverhampton, Walsall, Dudley, Birmingham and the West Midlands.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/assets/logo/logo.jpeg" },
      { url: "/assets/logo/logo.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/assets/logo/logo.jpeg", sizes: "96x96", type: "image/jpeg" },
      { url: "/assets/logo/logo.jpeg", sizes: "192x192", type: "image/jpeg" }
    ],
    apple: [
      { url: "/assets/logo/logo.jpeg", sizes: "180x180", type: "image/jpeg" }
    ]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Refuse Shine",
  "alternateName": "Refuse Shine Cleaning LTD",
  "url": "https://www.refuseshinecleaningltd.co.uk",
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Refuse Shine Cleaning LTD",
  "image": "https://www.refuseshinecleaningltd.co.uk/assets/logo/logo.jpeg",
  "@id": "https://www.refuseshinecleaningltd.co.uk/#organization",
  "url": "https://www.refuseshinecleaningltd.co.uk",
  "telephone": "+44 7721 714435",
  "email": "info@refuseshinecleaningltd.co.uk",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Flat 23 Lichfield House, 232 Lichfield Road",
    "addressLocality": "Willenhall",
    "addressRegion": "West Midlands",
    "postalCode": "WV12 5AB",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.599042971987595,
    "longitude": -2.0583594877717467
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/share/19PZ1ifR27/?mibextid=wwXIfr",
    "https://www.instagram.com/refuseshinecleaningltd/"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "8"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "monisola Ololade"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Excellent experience from start to finish. Refuse Shine Cleaning Ltd provided a high-quality cleaning service with great attention to detail. The team was reliable, respectful of my home, and left everything looking immaculate."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Mummy Agi"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "I recently used Refuse Shine Cleaning Ltd for a deep clean of my property, and I couldn't be happier with the results. The team arrived on time, were polite and professional, and paid great attention to detail."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Patrick Adjaye"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Honestly they went above and beyond expectations. I've been disappointed before by other cleaners but these guys did an outstanding job. Even areas that usually get overlooked were cleaned thoroughly."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Mama Deboura"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Absolutely fantastic service from Refuse Shine Cleaning Ltd. The team was friendly, professional, and incredibly thorough. They transformed my home and paid attention to every detail."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}


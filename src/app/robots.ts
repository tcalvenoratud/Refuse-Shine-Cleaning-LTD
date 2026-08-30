import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/book?*"
      ]
    },
    sitemap: "https://www.refuseshinecleaningltd.co.uk/sitemap.xml",
  };
}
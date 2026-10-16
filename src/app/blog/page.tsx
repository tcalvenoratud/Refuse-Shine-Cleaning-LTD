import { Metadata } from "next"
import { getAllBlogPosts, getFeaturedBlogPost } from "@/lib/blog-data"
import { BlogHero } from "@/components/blog/BlogHero"
import { FeaturedPost } from "@/components/blog/FeaturedPost"
import { BlogSearchAndFilter } from "@/components/blog/BlogSearchAndFilter"
import { BlogCTA } from "@/components/blog/BlogCTA"

export const metadata: Metadata = {
  title: "Cleaning Tips & Home Care Guides | Refuse Shine",
  description:
    "Explore practical cleaning tips, deep cleaning guides, end of tenancy checklists and home care advice from Refuse Shine Cleaning LTD.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Cleaning Tips & Home Care Guides | Refuse Shine",
    description:
      "Explore practical cleaning tips, deep cleaning guides, end of tenancy checklists and home care advice from Refuse Shine Cleaning LTD.",
    url: "https://www.refuseshinecleaningltd.co.uk/blog",
    siteName: "Refuse Shine Cleaning LTD",
    locale: "en_GB",
    type: "website",
  },
}

export default function BlogIndexPage() {
  const allPosts = getAllBlogPosts()
  const featuredPost = getFeaturedBlogPost()

  const baseUrl = "https://www.refuseshinecleaningltd.co.uk"

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Refuse Shine Cleaning LTD Blog",
    description:
      "Explore practical cleaning tips, deep cleaning guides, end of tenancy checklists and home care advice from Refuse Shine Cleaning LTD.",
    url: `${baseUrl}/blog`,
    publisher: {
      "@type": "HomeAndConstructionBusiness",
      name: "Refuse Shine Cleaning LTD",
      url: baseUrl,
      logo: `${baseUrl}/assets/logo/logo.jpeg`,
    },
    blogPost: allPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      image: `${baseUrl}${post.featuredImage}`,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Section A & B: Breadcrumbs & Hero */}
        <BlogHero />

        {/* Section C: Featured Article */}
        {featuredPost && <FeaturedPost post={featuredPost} />}

        {/* Section D, E & F: Search, Categories, Grid, Pagination/Load More */}
        <BlogSearchAndFilter initialPosts={allPosts} />

        {/* Section G: Final CTA */}
        <BlogCTA />
      </div>
    </>
  )
}

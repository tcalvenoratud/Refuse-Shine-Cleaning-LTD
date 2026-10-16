import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, RefreshCw, Phone, ArrowRight, ShieldCheck } from "lucide-react"
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/blog-data"
import { BlogBreadcrumbs } from "@/components/blog/BlogBreadcrumbs"
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents"
import { BlogArticleBody } from "@/components/blog/BlogArticleBody"
import { RelatedPosts } from "@/components/blog/RelatedPosts"
import { BlogCTA } from "@/components/blog/BlogCTA"
import { Button } from "@/components/ui/button"

type Params = Promise<{ slug: string }>

interface PageProps {
  params: Params
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {}
  }

  const baseUrl = "https://www.refuseshinecleaningltd.co.uk"
  const url = `${baseUrl}/blog/${post.slug}`

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: "Refuse Shine Cleaning LTD",
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      locale: "en_GB",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, 3)

  const baseUrl = "https://www.refuseshinecleaningltd.co.uk"
  const articleUrl = `${baseUrl}/blog/${post.slug}`

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const formattedUpdateDate = post.updatedAt
    ? new Date(post.updatedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null

  // Schema definitions
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}${post.featuredImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    publisher: {
      "@type": "HomeAndConstructionBusiness",
      name: "Refuse Shine Cleaning LTD",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/logo/logo.jpeg`,
      },
      "@id": `${baseUrl}/#organization`,
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="min-h-screen bg-background">
        {/* Article Header & Hero */}
        <header className="relative border-b border-border/40 bg-card/40 pt-8 pb-10 md:pt-12 md:pb-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <div className="mb-6">
              <BlogBreadcrumbs
                items={[
                  { label: "Blog", href: "/blog" },
                  { label: post.title },
                ]}
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <span className="inline-block rounded-full bg-primary/10 dark:bg-accent/15 px-3.5 py-1 text-xs font-bold text-primary dark:text-accent border border-primary/20 dark:border-accent/30">
                {post.category}
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground font-heading leading-[1.18] mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg sm:text-xl text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-muted-foreground font-medium pb-2 border-b border-border/30">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4 text-primary dark:text-accent" />
                <span>Published {formattedDate}</span>
              </span>

              {formattedUpdateDate && (
                <span className="inline-flex items-center gap-1.5">
                  <RefreshCw className="size-3.5 text-accent" />
                  <span>Updated {formattedUpdateDate}</span>
                </span>
              )}

              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 opacity-70" />
                <span>{post.readingTime}</span>
              </span>

              <span className="inline-flex items-center gap-1 text-accent font-semibold ml-auto sm:ml-0">
                <ShieldCheck className="size-4" />
                <span>Verified Home Care Advice</span>
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
          <div className="relative h-[280px] sm:h-[420px] lg:h-[500px] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 shadow-lg bg-muted">
            <Image
              src={post.featuredImage}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Body & Sidebar Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Main Editorial Content (Left on desktop) */}
            <div className="lg:col-span-8 order-2 lg:order-1 min-w-0">
              <BlogArticleBody content={post.content} />
            </div>

            {/* Sticky Sidebar (Right on desktop) */}
            <aside className="lg:col-span-4 order-1 lg:order-2 space-y-6 lg:sticky lg:top-24">
              {/* Table of Contents */}
              <BlogTableOfContents sections={post.content.sections} />

              {/* Service Recommendation Card */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary dark:text-accent">
                  Professional Cleaning
                </span>
                <h3 className="text-lg font-bold text-foreground font-heading mt-1 mb-2">
                  Need Help With Your Home?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  Refuse Shine Cleaning LTD provides vetted, fully insured cleaners across the West Midlands.
                </p>
                <div className="space-y-2.5">
                  <Link href="/book" className="block">
                    <Button className="w-full h-10 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl text-xs cursor-pointer flex items-center justify-center gap-1.5">
                      <span>Book Online Now</span>
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </Link>
                  <Link href="/services" className="block">
                    <Button variant="outline" className="w-full h-10 border-border font-bold rounded-xl text-xs hover:bg-muted/50 cursor-pointer">
                      Explore All Services
                    </Button>
                  </Link>
                </div>

                <div className="mt-4 pt-4 border-t border-border/40 text-center">
                  <a
                    href="tel:+447721714435"
                    className="inline-flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary dark:hover:text-accent transition-colors"
                  >
                    <Phone className="size-3.5 text-accent" />
                    <span>Call: +44 7721 714435</span>
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />

        {/* Final Conversion CTA */}
        <BlogCTA />
      </article>
    </>
  )
}

import * as React from "react"
import { Sparkles } from "lucide-react"
import { BlogPost } from "@/lib/blog-data"
import { BlogCard } from "./BlogCard"

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="py-12 md:py-16 border-t border-border/40 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary dark:text-accent mb-2">
              <Sparkles className="size-3.5 text-accent" />
              <span>Continue Reading</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-foreground tracking-tight">
              Related Cleaning Guides &amp; Advice
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Explore more expert tips and maintenance checklists to keep your home immaculate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-primary/40 dark:hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container with 16:10 aspect ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <Image
          src={post.featuredImage}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block rounded-full bg-background/90 dark:bg-card/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-primary dark:text-accent border border-border/40 shadow-xs">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium mb-2.5">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5 opacity-70" />
              <span>{formattedDate}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 opacity-70" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors font-heading leading-snug line-clamp-2 mb-2.5">
            <Link
              href={`/blog/${post.slug}`}
              className="after:absolute after:inset-0 after:z-0"
              aria-label={`Read article: ${post.title}`}
            >
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>

        {/* Bottom Read link */}
        <div className="pt-3 border-t border-border/40 flex items-center justify-between mt-auto">
          <span className="text-xs sm:text-sm font-bold text-primary dark:text-accent group-hover:underline inline-flex items-center gap-1.5">
            <span>Read Article</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}

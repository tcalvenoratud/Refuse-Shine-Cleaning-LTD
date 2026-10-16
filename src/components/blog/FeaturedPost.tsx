"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { BlogPost } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"

interface FeaturedPostProps {
  post: BlogPost
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  // Format publication date
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section className="py-8 md:py-12 border-b border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="size-4 text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent">
            Featured Guide
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl lg:rounded-3xl border border-border/60 bg-card shadow-lg hover:shadow-xl hover:border-primary/40 dark:hover:border-accent/40 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Container */}
            <div className="relative h-[260px] sm:h-[340px] lg:h-full lg:min-h-[380px] lg:col-span-7 overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent lg:hidden" />
              
              {/* Category pill on image on mobile */}
              <div className="absolute top-4 left-4 lg:hidden">
                <span className="inline-block rounded-full bg-primary/95 px-3 py-1 text-xs font-bold text-white shadow-md">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 lg:col-span-5 bg-card">
              <div>
                {/* Category & Meta (Desktop) */}
                <div className="hidden lg:flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-primary/10 dark:bg-accent/15 px-3 py-1 text-xs font-bold text-primary dark:text-accent border border-primary/20 dark:border-accent/30">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium mb-3">
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

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors font-heading leading-tight mb-4">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-4 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <Link href={`/blog/${post.slug}`} className="inline-block">
                  <Button
                    className="h-11 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl px-6 shadow-md shadow-primary/20 transition-all cursor-pointer inline-flex items-center gap-2 group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

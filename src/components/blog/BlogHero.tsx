"use client"

import * as React from "react"
import { Sparkles, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { BlogBreadcrumbs } from "./BlogBreadcrumbs"

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-10 md:pt-12 md:pb-14 border-b border-border/40 dark:border-border/10">
      {/* Decorative ambient glows */}
      <div className="absolute top-[-10%] right-[-10%] -z-10 size-[320px] sm:size-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[320px] sm:size-[500px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6 sm:mb-8">
          <BlogBreadcrumbs items={[{ label: "Blog" }]} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-2xs mb-5">
            <BookOpen className="size-3.5 text-accent animate-pulse" />
            <span>Refuse Shine Knowledge Hub</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground font-heading leading-[1.15]">
            Cleaning Tips, Expert Advice &amp; Home Care Guides
          </h1>

          {/* Supporting Copy */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed max-w-2xl">
            Discover practical cleaning tips, home care advice and helpful guides from Refuse Shine Cleaning LTD. Learn how to maintain a cleaner home, prepare for a move and choose the right cleaning service.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

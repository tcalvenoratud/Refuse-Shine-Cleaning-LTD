"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronRight, Phone, ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface LocationHeroProps {
  name: string;
  slug: string;
  postcodes: string;
  tagline: string;
  heroBadge?: string;
}

export function LocationHero({ name, postcodes, tagline, heroBadge }: LocationHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-4 pb-8 md:pt-6 md:pb-10 border-b border-border/40 dark:border-border/10">
      {/* Decorative background glows */}
      <div className="absolute top-[-10%] right-[-10%] -z-10 size-[300px] sm:size-[450px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[300px] sm:size-[450px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-muted-foreground mb-6 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors cursor-pointer">
            Home
          </Link>
          <ChevronRight className="size-3.5 shrink-0 opacity-70" />
          <Link href="/locations" className="hover:text-primary transition-colors cursor-pointer">
            Areas We Serve
          </Link>
          <ChevronRight className="size-3.5 shrink-0 opacity-70" />
          <span className="text-foreground font-bold">
            {name}
          </span>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-xs mb-4"
          >
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>{heroBadge || `Local Cleaning Experts — ${name} (${postcodes})`}</span>
          </motion.div>

          {/* H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-heading"
          >
            Professional Cleaning Services in{" "}
            <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
              {name}
            </span>
          </motion.h1>

          {/* Supporting Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium max-w-3xl mx-auto"
          >
            {tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
          >
            <Link href="/book">
              <Button
                className="w-full sm:w-auto h-11 sm:h-12 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl px-8 shadow-lg shadow-primary/20 transition-all cursor-pointer inline-flex items-center justify-center gap-2 group/btn"
              >
                <span>Book a Cleaning</span>
                <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full sm:w-auto h-11 sm:h-12 border-2 border-border text-foreground font-bold rounded-xl px-8 hover:bg-muted/50 transition-all cursor-pointer inline-flex items-center justify-center"
              >
                Get a Free Quote
              </Button>
            </Link>

            <a href="tel:+447721714435">
              <Button
                className="w-full sm:w-auto h-11 sm:h-12 bg-accent hover:bg-accent/95 text-white font-bold rounded-xl px-8 shadow-lg shadow-accent/20 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Phone className="size-4 text-white" />
                <span>Call Us</span>
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-6 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left sm:text-center"
          >
            <div className="flex items-center sm:justify-center gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
              <ShieldCheck className="size-4 text-accent shrink-0" />
              <span>Fully Insured Team</span>
            </div>
            <div className="flex items-center sm:justify-center gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
              <CheckCircle2 className="size-4 text-accent shrink-0" />
              <span>Vetted Local Cleaners</span>
            </div>
            <div className="flex items-center sm:justify-center gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
              <Calendar className="size-4 text-accent shrink-0" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center sm:justify-center gap-2 text-xs sm:text-sm font-semibold text-foreground/80">
              <Star className="size-4 text-accent shrink-0" />
              <span>Free Transparent Quotes</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { Phone, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface LocationCTAProps {
  locationName: string;
  slug: string;
  ctaTitle: string;
  ctaDescription: string;
}

export function LocationCTA({ locationName, ctaTitle, ctaDescription }: LocationCTAProps) {
  return (
    <section className="py-8 md:py-10 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-[2rem] border border-border/80 dark:border-border/40 bg-gradient-to-br from-card via-card to-primary/5 dark:to-accent/5 p-7 sm:p-10 lg:p-12 text-center shadow-lg overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 size-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 size-56 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-xs mb-4">
              <Sparkles className="size-3.5 text-accent animate-pulse" />
              <span>Get Started in {locationName}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground font-heading leading-tight mb-4">
              {ctaTitle}
            </h2>

            <p className="text-sm sm:text-base text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
              {ctaDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-stretch sm:items-center">
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
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-accent" /> Free Custom Quotes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-accent" /> No Contract Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-accent" /> 100% Satisfaction Focused
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

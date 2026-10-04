"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react"
import { LocationDetail } from "@/lib/locations-data"
import { motion } from "framer-motion"

interface LocationCardProps {
  location: LocationDetail;
  index?: number;
}

export function LocationCard({ location, index = 0 }: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      className="group flex flex-col justify-between rounded-3xl border border-border/70 dark:border-border/40 bg-card hover:border-primary/40 dark:hover:border-accent/40 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
    >
      {/* Subtle top hover glow */}
      <div className="absolute top-0 right-0 size-28 bg-primary/5 dark:bg-accent/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

      <div>
        {/* Header with Icon and Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="size-10 rounded-xl bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-white transition-colors duration-300">
            <MapPin className="size-5" />
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-muted/60 text-foreground/80 border border-border/40 font-mono">
            {location.postcodes}
          </span>
        </div>

        {/* Location Title */}
        <h3 className="text-xl font-black text-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors font-heading mb-2">
          {location.name}
        </h3>

        {/* Short Unique Description */}
        <p className="text-sm text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed mb-6">
          {location.shortDescription}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-border/40 flex items-center justify-between mt-auto">
        <Link
          href={`/locations/${location.slug}`}
          className="text-xs sm:text-sm font-bold text-primary dark:text-accent group-hover:underline inline-flex items-center gap-1.5"
          aria-label={`Explore cleaning services in ${location.name}`}
        >
          <span>View Cleaning Services</span>
          <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          href="/book"
          className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  )
}

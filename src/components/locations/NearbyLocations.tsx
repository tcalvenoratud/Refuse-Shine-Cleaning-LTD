"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { LocationNearbyArea } from "@/lib/locations-data"
import { motion } from "framer-motion"

interface NearbyLocationsProps {
  locationName: string;
  title: string;
  intro: string;
  nearbyLocations: LocationNearbyArea[];
}

export function NearbyLocations({ locationName, title, intro, nearbyLocations }: NearbyLocationsProps) {
  return (
    <section className="py-8 md:py-10 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-xs mb-4">
            <MapPin className="size-3.5 text-accent" />
            <span>Regional Coverage</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl font-heading leading-tight mb-4">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
            {intro}
          </p>
        </div>

        {/* Nearby Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {nearbyLocations.map((nearby, index) => (
            <motion.div
              key={nearby.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
            >
              <Link
                href={`/locations/${nearby.slug}`}
                className="group block p-5 rounded-2xl border border-border/70 dark:border-border/40 bg-card hover:border-primary/40 dark:hover:border-accent/40 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-lg bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-white transition-all">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors">
                        {nearby.name}
                      </h3>
                      <span className="text-xs text-muted-foreground font-medium">
                        {nearby.postcode}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary dark:group-hover:text-accent group-hover:translate-x-1 transition-all mt-1" />
                </div>

                <p className="text-xs text-foreground/75 font-medium mt-3 pt-3 border-t border-border/30">
                  {nearby.distanceOrNote} • View cleaning services
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Link to /locations */}
        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-accent hover:underline"
          >
            <span>Explore All Service Areas Across the West Midlands</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}

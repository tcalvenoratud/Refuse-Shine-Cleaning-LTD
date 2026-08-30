"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { SERVICES_DATA, ServiceDetail } from "@/lib/services-data"

interface RelatedServicesProps {
  currentSlug: string;
}

const RELATED_SERVICES: Record<string, string[]> = {
  "regular-house-cleaning": [
    "deep-cleaning",
    "carpet-cleaning",
    "window-cleaning",
  ],

  "deep-cleaning": [
    "regular-house-cleaning",
    "kitchen-deep-cleaning",
    "bathroom-cleaning",
  ],

  "kitchen-deep-cleaning": [
    "deep-cleaning",
    "bathroom-cleaning",
    "appliance-cleaning",
  ],

  "bathroom-cleaning": [
    "deep-cleaning",
    "kitchen-deep-cleaning",
    "airbnb-short-let-cleaning",
  ],

  "end-of-tenancy-cleaning": [
    "bathroom-cleaning",
    "move-in-move-out-cleaning",
    "waste-removal-services",
  ],

  "move-in-move-out-cleaning": [
    "end-of-tenancy-cleaning",
    "airbnb-short-let-cleaning",
    "carpet-cleaning",
  ],

  "airbnb-short-let-cleaning": [
    "bathroom-cleaning",
    "move-in-move-out-cleaning",
    "appliance-cleaning",
  ],

  "post-construction-cleaning": [
    "appliance-cleaning",
    "waste-removal-services",
    "window-cleaning",
  ],

  "carpet-cleaning": [
    "regular-house-cleaning",
    "move-in-move-out-cleaning",
    "window-cleaning",
  ],

  "appliance-cleaning": [
    "kitchen-deep-cleaning",
    "airbnb-short-let-cleaning",
    "post-construction-cleaning",
  ],

  "window-cleaning": [
    "regular-house-cleaning",
    "post-construction-cleaning",
    "carpet-cleaning",
  ],

  "waste-removal-services": [
    "end-of-tenancy-cleaning",
    "post-construction-cleaning",
    "airbnb-short-let-cleaning",
  ],
};

export function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const mappedSlugs = RELATED_SERVICES[currentSlug] ?? [];
  const related = mappedSlugs
    .map((slug) => SERVICES_DATA.find((s) => s.slug === slug))
    .filter((s): s is ServiceDetail => s !== undefined);

  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-10 border-b border-border/40 dark:border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm mb-6">
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>More Options</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-foreground font-heading">
            Related Cleaning Services
          </h2>
          <p className="mt-3 text-base text-foreground/80 dark:text-foreground/90 font-medium">
            Explore our other professional cleaning options across Willenhall and the West Midlands.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {related.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-border/60 bg-card p-6 shadow-xs hover:shadow-md hover:border-primary/20 dark:border-border/10 dark:bg-card/75 dark:hover:border-accent/30 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-primary/5 dark:bg-accent/10 text-primary dark:text-accent mb-4">
                    <Icon className="size-5 shrink-0" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-foreground/80 dark:text-foreground/90 mt-2 font-semibold line-clamp-3">
                    {service.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 dark:border-border/10">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-extrabold text-primary hover:text-primary/80 dark:text-accent dark:hover:text-accent/80 transition-colors"
                  >
                    <span>View Service details</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

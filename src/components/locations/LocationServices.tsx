"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { SERVICES_DATA } from "@/lib/services-data"
import { motion } from "framer-motion"

interface LocationServicesProps {
  locationName: string;
  featuredServiceSlugs: string[];
}

export function LocationServices({ locationName, featuredServiceSlugs }: LocationServicesProps) {
  // Show strictly 4 tailored services for this location
  const servicesToShow = SERVICES_DATA.filter((s) =>
    featuredServiceSlugs.includes(s.slug || s.id)
  ).slice(0, 4);

  return (
    <section className="py-8 md:py-10 bg-muted/30 border-y border-border/40 dark:border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-xs mb-3">
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Popular Local Services</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground font-heading leading-tight mb-3">
            Cleaning Services in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {locationName}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-foreground/80 dark:text-foreground/90 font-medium">
            Explore our tailored professional cleaning solutions available across {locationName} for homes, rental properties, and commercial spaces.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesToShow.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group flex flex-col justify-between rounded-2xl border border-border/70 dark:border-border/40 bg-card hover:border-primary/40 dark:hover:border-accent/40 p-5 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Service Image / Icon Header */}
                  <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3.5 border border-border/40">
                    <Image
                      src={service.image}
                      alt={`${service.title} in ${locationName}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 size-8 rounded-lg bg-card/90 backdrop-blur-xs flex items-center justify-center text-primary shadow-xs">
                      <Icon className="size-4.5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors leading-snug mb-1.5">
                    {service.title.split(" in ")[0] || service.title}
                  </h3>

                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                    {service.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between mt-auto">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-primary dark:text-accent hover:underline inline-flex items-center gap-1 group/link"
                  >
                    <span>View Service</span>
                    <ArrowRight className="size-3 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <Link
                    href="/book"
                    className="text-xs font-bold text-foreground/80 hover:text-primary dark:hover:text-accent transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary dark:text-accent hover:underline"
          >
            <span>View All Cleaning Services & Checklists</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const LOCATIONS = [
  "Willenhall", "Bilston", "Walsall", "Wolverhampton", "Tipton",
  "West Bromwich", "Aldridge", "Dudley", "Oldbury", "Brownhills",
  "Cannock", "Smethwick", "Rowley Regis", "Birmingham", "Halesowen",
  "Sutton Coldfield", "Brierley Hill", "Stourbridge", "Solihull",
  "Tamworth", "Kidderminster", "Stafford", "Redditch"
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
}

export function AreasWeCover() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-6 md:pt-10 md:pb-8 lg:pb-10 border-t border-border/40 dark:border-border/10">
      {/* Background visual details */}
      <div className="absolute top-[10%] left-[-10%] -z-10 size-[300px] sm:size-[450px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
      <div className="absolute bottom-[10%] right-[-10%] -z-10 size-[300px] sm:size-[450px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Tag Badge */}
          <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm mb-6">
            <MapPin className="size-3.5 text-accent animate-pulse" />
            <span>Areas We Cover</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-tight mb-6">
            Professional Cleaning Services Across the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              West Midlands
            </span>
          </h2>

          <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium">
            Refuse Shine Cleaning LTD provides trusted residential and commercial cleaning services across Willenhall, Wolverhampton, Walsall, Dudley, Birmingham and 23 surrounding West Midlands locations. We specialise in house cleaning, deep cleaning, end of tenancy cleaning, carpet cleaning and more.
          </p>
        </div>

        {/* Locations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {LOCATIONS.map((location) => (
            <motion.div
              key={location}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                href="/book"
                className="group block p-4 rounded-2xl border border-border/60 bg-card hover:border-primary/40 dark:border-border/10 dark:bg-card/75 dark:hover:border-accent/40 transition-all duration-300 shadow-xs hover:shadow-md relative overflow-hidden"
                aria-label={`Book professional cleaning service in ${location}`}
              >
                {/* Subtle inner hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/2 dark:to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-start gap-2.5">
                  <MapPin className="size-4.5 text-primary dark:text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-extrabold text-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      {location}
                    </h3>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl border border-border/60 bg-card/60 dark:border-border/10 dark:bg-card/45 backdrop-blur-xs text-center relative overflow-hidden group/cta shadow-sm"
        >
          {/* Visual background pattern */}
          <div className="absolute top-0 right-0 -z-10 size-48 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full group-hover/cta:scale-110 transition-transform duration-500" />

          <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
            Need Professional Cleaning in Your Area?
          </h3>

          <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium max-w-xl mx-auto mb-8">
            Book trusted residential and commercial cleaning services anywhere across our West Midlands service areas.
          </p>

          <Link href="/book">
            <Button
              className="h-12 bg-primary hover:bg-primary/95 dark:bg-primary dark:hover:bg-primary/90 text-primary-foreground font-bold rounded-xl px-10 shadow-lg shadow-primary/20 transition-all cursor-pointer inline-flex items-center gap-2 group/btn"
            >
              <span>Book Your Cleaning Today</span>
              <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

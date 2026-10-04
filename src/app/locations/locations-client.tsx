"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, Phone, ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LOCATIONS_DATA } from "@/lib/locations-data"
import { LocationCard } from "@/components/locations/LocationCard"
import { motion } from "framer-motion"

export function LocationsClient() {
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredLocations = React.useMemo(() => {
    if (!searchQuery.trim()) return LOCATIONS_DATA;
    const q = searchQuery.toLowerCase();
    return LOCATIONS_DATA.filter(
      (loc) =>
        loc.name.toLowerCase().includes(q) ||
        loc.postcodes.toLowerCase().includes(q) ||
        loc.shortDescription.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-10 pb-12 md:pt-16 md:pb-20 border-b border-border/40 dark:border-border/10">
        {/* Decorative background glows */}
        <div className="absolute top-[-10%] right-[-10%] -z-10 size-[350px] sm:size-[550px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[350px] sm:size-[550px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1.5 text-sm font-semibold text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors cursor-pointer">
              Home
            </Link>
            <span className="opacity-70">/</span>
            <span className="text-foreground font-bold">
              Areas We Serve
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Top Badge */}
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-xs mb-6">
              <MapPin className="size-3.5 text-accent animate-pulse" />
              <span>West Midlands Service Areas</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-heading mb-6">
              Professional Cleaning Services Across the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                West Midlands
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
              Refuse Shine Cleaning LTD provides trusted, fully insured domestic and commercial cleaning services across Willenhall and surrounding West Midlands towns. Select your location below to explore localized cleaning services and book online.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <Link href="/book">
                <Button
                  className="w-full sm:w-auto h-12 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl px-8 shadow-lg shadow-primary/20 transition-all cursor-pointer inline-flex items-center justify-center gap-2 group/btn"
                >
                  <span>Book a Cleaning</span>
                  <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-12 border-2 border-border text-foreground font-bold rounded-xl px-8 hover:bg-muted/50 transition-all cursor-pointer inline-flex items-center justify-center"
                >
                  Get a Free Quote
                </Button>
              </Link>

              <a href="tel:+447721714435">
                <Button
                  className="w-full sm:w-auto h-12 bg-accent hover:bg-accent/95 text-white font-bold rounded-xl px-8 shadow-lg shadow-accent/20 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Phone className="size-4 text-white" />
                  <span>Call Us</span>
                </Button>
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Main Grid Section: Areas We Serve */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-xs mb-3">
                <Sparkles className="size-3.5 text-accent" />
                <span>Coverage Directory</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground font-heading tracking-tight">
                Areas We Serve
              </h2>
              <p className="text-base text-muted-foreground mt-2 max-w-xl font-medium">
                Click on any local area below to discover tailored house cleaning, deep cleaning, end of tenancy, and commercial solutions in your neighborhood.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search location or postcode..."
                className="w-full h-11 px-4 rounded-xl border border-border/80 bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-2xs"
              />
            </div>
          </div>

          {/* Locations Grid */}
          {filteredLocations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations.map((location, index) => (
                <LocationCard key={location.slug} location={location} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card rounded-3xl border border-border/60 p-8">
              <p className="text-lg font-bold text-foreground">No location found matching &quot;{searchQuery}&quot;</p>
              <p className="text-sm text-muted-foreground mt-2">
                We service all West Midlands postcodes. Contact our team to book cleaning for your specific area.
              </p>
              <Button
                onClick={() => setSearchQuery("")}
                variant="outline"
                className="mt-4 rounded-xl font-bold"
              >
                Reset Search
              </Button>
            </div>
          )}

          {/* Regional Hub Summary Card */}
          <div className="mt-16 rounded-3xl border border-border/70 dark:border-border/40 bg-card p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">Headquartered in Willenhall</span>
              <h3 className="text-2xl font-black text-foreground mt-1 mb-3">
                Can&apos;t find your exact location?
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed">
                Refuse Shine Cleaning LTD provides daily mobile cleaning coverage throughout all West Midlands postcodes. Contact our helpful support team for customized scheduling and free quotes anywhere in the region.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl h-11 px-6 shadow-md">
                  Inquire Custom Area
                </Button>
              </Link>
              <Link href="/book" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-border font-bold rounded-xl h-11 px-6">
                  Book Online
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

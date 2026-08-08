"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Phone, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ServiceHeroProps {
  title: string;
  tagline: string;
  image: string;
  altText: string;
  serviceId: string;
}

export function ServiceHero({ title, tagline, image, altText, serviceId }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-10 md:pt-12 md:pb-14 lg:pt-16 lg:pb-16 border-b border-border/40 dark:border-border/10">
      {/* Decorative background glows */}
      <div className="absolute top-[-10%] right-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors cursor-pointer">
            Home
          </Link>
          <ChevronRight className="size-4 shrink-0 opacity-70" />
          <Link href="/services" className="hover:text-primary transition-colors cursor-pointer">
            Services
          </Link>
          <ChevronRight className="size-4 shrink-0 opacity-70" />
          <span className="text-foreground font-bold truncate max-w-[200px] sm:max-w-none">
            {title.split(" in ")[0] || title}
          </span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Side: Content */}
          <motion.div 
            className="flex flex-col justify-center lg:col-span-7 text-left"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm mb-6">
              <Sparkles className="size-3.5 text-accent animate-pulse" />
              <span>Professional Cleaning Services</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.1] font-heading">
              {title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium max-w-2xl">
              {tagline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link href={`/book?service=${serviceId}`} className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto h-12 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl px-8 shadow-lg shadow-primary/20 transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                  <span>Book Your Cleaning</span>
                  <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-12 border-2 border-border text-foreground font-bold rounded-xl px-8 hover:bg-muted/50 transition-all cursor-pointer flex items-center justify-center"
                >
                  Get a Free Quote
                </Button>
              </Link>

              <a href="tel:+447721714435" className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto h-12 bg-accent hover:bg-accent/95 text-white font-bold rounded-xl px-8 shadow-lg shadow-accent/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Phone className="size-4 text-white" />
                  <span>Call Us</span>
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            className="lg:col-span-5 relative w-full h-[300px] sm:h-[400px] rounded-[2rem] overflow-hidden border-4 border-card shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src={image}
              alt={altText}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

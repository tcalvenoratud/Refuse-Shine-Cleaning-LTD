"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, ShieldCheck, Leaf, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-6 md:pt-12 md:pb-8 lg:pt-16 lg:pb-10">
      {/* Decorative background glows */}
      <div className="absolute top-[-10%] right-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-primary/8 dark:bg-primary/15 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-accent/8 dark:bg-accent/15 blur-3xl" />

      {/* Decorative subtle grid line texture or background sparkles */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(121,3,76,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(121,3,76,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(158,28,109,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(158,28,109,0.05)_1px,transparent_1px)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          {/* Left Column: Heading, Subheading & CTAs */}
          <motion.div
            className="flex flex-col justify-center lg:col-span-6 text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Tag Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm"
            >
              <Sparkles className="size-3.5 animate-pulse text-accent dark:text-accent" />
              <span>Professional Cleaning Services in West Midlands</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
              }}
              className="mt-6 font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]"
            >
              Spotless Spaces.
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent dark:from-primary dark:to-accent">
                Infinite Shine.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-6 text-lg sm:text-xl text-foreground/85 dark:text-foreground/90 leading-relaxed max-w-xl font-medium"
            >
              Refuse Shine Cleaning LTD delivers premium commercial and residential cleaning solutions. We craft custom cleaning routines so your workspace or home always makes a spectacular impression.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/book" className="w-full sm:w-auto">
                  <Button
                    className="w-full sm:w-auto h-12 bg-primary hover:bg-primary/95 dark:bg-primary dark:hover:bg-primary/90 text-primary-foreground font-bold rounded-xl px-8 shadow-lg shadow-primary/20 transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Book Your Cleaning</span>
                    <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto h-12 border-2 border-border/80 dark:border-input text-foreground font-bold rounded-xl px-8 hover:bg-muted/50 dark:hover:bg-muted/20 transition-all cursor-pointer flex items-center justify-center"
                  >
                    Explore Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-6 pt-4 grid grid-cols-3 gap-5F sm:gap-6"
            >
              <div className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">100+</span>
                <span className="mt-1 text-base sm:text-base font-medium text-muted-foreground">Happy Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">99.9%</span>
                <span className="mt-1 text-base sm:text-base font-medium text-muted-foreground">Satisfaction Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">12+ Yrs</span>
                <span className="mt-1 text-base sm:text-base font-medium text-muted-foreground">Experience</span>
              </div>
            </motion.div>

            {/* Trust Badges / Highlights */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-5 pt-4  grid grid-cols-3 gap-4"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2">
                <div className="rounded-full bg-accent/10 p-2 text-accent">
                  <Star className="size-4.5 fill-accent" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-foreground leading-tight">5-Star Rated</h4>
                  <p className="text-sm text-foreground/75 dark:text-foreground/80 mt-0.5 font-semibold">Top-rated cleaners</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2">
                <div className="rounded-full bg-primary/10 p-2 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                  <ShieldCheck className="size-4.5 text-primary dark:text-foreground" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-foreground leading-tight">Fully Vetted</h4>
                  <p className="text-sm text-foreground/75 dark:text-foreground/80 mt-0.5 font-semibold">Insured professionals</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2">
                <div className="rounded-full bg-accent/10 p-2 text-accent">
                  <Leaf className="size-4.5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-foreground leading-tight">Eco-Friendly</h4>
                  <p className="text-sm text-foreground/75 dark:text-foreground/80 mt-0.5 font-semibold">Safe & green products</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Images Collage */}
          <div className="relative lg:col-span-6 flex items-center justify-center h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full mt-8 lg:mt-0">
            {/* Background glowing circle for images */}
            <div className="absolute inset-0 m-auto -z-10 size-[80%] rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-2xl" />

            {/* Sparkle animations floating around */}
            <motion.div
              className="absolute top-[10%] left-[5%] text-accent/40"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="size-6 sm:size-8" />
            </motion.div>

            <motion.div
              className="absolute bottom-[10%] right-[5%] text-primary/40"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Sparkles className="size-5 sm:size-6" />
            </motion.div>

            {/* Image 1: Larger Left/Back image */}
            <motion.div
              className="absolute left-4 top-4 w-[60%] h-[75%] rounded-[2rem] overflow-hidden border-4 border-background dark:border-card shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              animate={{
                y: [-12, 12],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/Hero/Hero-1.jpg"
                alt="Professional commercial cleaning service"
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 30vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Image 2: Smaller Overlapping Right/Front image */}
            <motion.div
              className="absolute right-4 bottom-4 w-[50%] h-[65%] rounded-[1.75rem] overflow-hidden border-4 border-background dark:border-card shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              animate={{
                x: [-12, 12],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Image
                src="/assets/Hero/Hero-2.jpg"
                alt="Expert residential cleaning solutions"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 25vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

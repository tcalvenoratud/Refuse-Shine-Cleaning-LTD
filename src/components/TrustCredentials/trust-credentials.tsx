"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { ShieldAlert, ShieldCheck, HeartHandshake, Sparkles, Award } from "lucide-react"

const badgeVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15
    }
  }
}

const listContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
}

export function TrustCredentials() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-12 md:pt-10 md:pb-16 lg:pb-20 border-t border-border/40 dark:border-border/10">
      {/* Background visual details */}
      <div className="absolute top-[10%] left-[-10%] -z-10 size-[300px] sm:size-[450px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
      <div className="absolute bottom-[10%] right-[-10%] -z-10 size-[300px] sm:size-[450px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Guarantee Badge Stamp */}
          <motion.div
            className="flex flex-col items-center justify-center lg:col-span-5 text-center p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={badgeVariants}
          >
            {/* The Badge Outer Ring */}
            <motion.div
              className="relative flex items-center justify-center size-64 sm:size-72 rounded-full border-4 border-dashed border-primary/40 dark:border-primary/60 p-4 bg-gradient-to-tr from-primary/5 to-accent/5 shadow-inner"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {/* Spinning inner details */}
              <div className="absolute inset-4 rounded-full border border-accent/20 flex flex-col items-center justify-center bg-card dark:bg-card/90 shadow-2xl p-6">
                
                {/* Visual Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 opacity-30 blur-md pointer-events-none" />

                <Award className="size-16 text-primary animate-pulse z-10" />
                
                {/* Badge text content */}
                <div className="mt-4 text-center z-10">
                  <span className="block text-xs font-black tracking-[0.2em] text-accent uppercase leading-none">Refuse Shine</span>
                  <span className="block text-xl font-black text-foreground mt-2 leading-tight uppercase">100% Guaranteed</span>
                  <span className="block text-[11px] font-bold text-text-gray dark:text-muted-foreground mt-1.5 leading-none">Satisfaction Service</span>
                </div>
              </div>
            </motion.div>

            <div className="mt-6 text-center">
              <h4 className="text-xl font-black text-foreground">Our Quality Vow</h4>
              <p className="mt-2 text-base text-foreground/80 dark:text-foreground/90 font-medium max-w-xs">
                We clean your home or business right, or we make it right. No exceptions.
              </p>
            </div>
          </motion.div>

          {/* Right Column: DBS Vetted & Insurance Details */}
          <motion.div
            className="flex flex-col lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={listContainerVariants}
          >
            {/* Tag Badge */}
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm mb-6">
              <Sparkles className="size-3.5 text-accent animate-pulse" />
              <span>Safety & Security Credentials</span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-tight mb-8">
              Reliable Cleaners.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Complete Peace of Mind.
              </span>
            </h2>

            <div className="space-y-6">
              {/* Card 1: DBS Checks */}
              <motion.div
                variants={listItemVariants}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group p-6 sm:p-8 rounded-3xl border border-border/60 bg-card hover:border-primary/20 dark:border-border/10 dark:bg-card/75 dark:hover:border-accent/30 transition-all duration-300 shadow-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/2 dark:to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner shrink-0">
                    <ShieldCheck className="size-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-extrabold text-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      DBS Checked Cleaners
                    </h3>
                    <p className="text-base text-foreground/80 dark:text-foreground/90 mt-2 leading-relaxed font-medium">
                      All cleaners undergo extensive police record audits, background checking, and standard DBS vetting. We only dispatch friendly, trustworthy professionals into your private space.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Liability Insurance */}
              <motion.div
                variants={listItemVariants}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group p-6 sm:p-8 rounded-3xl border border-border/60 bg-card hover:border-primary/20 dark:border-border/10 dark:bg-card/75 dark:hover:border-accent/30 transition-all duration-300 shadow-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/2 dark:to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-inner shrink-0">
                    <HeartHandshake className="size-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-extrabold text-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      Fully Insured Operations
                    </h3>
                    <p className="text-base text-foreground/80 dark:text-foreground/90 mt-2 leading-relaxed font-medium">
                      Your home or office is safe in our hands. We carry up to £5M public liability insurance cover to safeguard your property and belongings against any accidental occurrences.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Sparkles, ClipboardCheck } from "lucide-react"
import { ServiceStep } from "@/lib/services-data"

interface ServiceProcessProps {
  processTitle: string;
  processSteps: ServiceStep[];
}

export function ServiceProcess({ processTitle, processSteps }: ServiceProcessProps) {
  return (
    <section className="relative overflow-hidden bg-card/30 dark:bg-secondary/10 pt-12 pb-10 border-b border-border/40 dark:border-border/10">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-[10%] -z-10 size-[300px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-[10%] -z-10 size-[300px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm mb-6">
            <ClipboardCheck className="size-3.5 text-accent animate-pulse" />
            <span>Step-by-Step Guide</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground sm:text-4xl font-heading leading-tight">
            {processTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
            We follow a structured and professional process to guarantee exceptional results on every visit.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative z-10 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group relative flex flex-col items-center md:items-start text-center md:text-left p-2"
            >
              {/* Horizontal line connector (desktop only) */}
              {idx < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 border-t-2 border-dashed border-border/60 dark:border-border/15 -z-10" />
              )}

              {/* Step Number */}
              <div className="absolute top-0 right-4 md:right-0 font-heading font-black text-6xl text-primary/5 dark:text-primary/10 select-none group-hover:scale-105 transition-transform duration-300 pointer-events-none">
                {step.stepNumber}
              </div>

              {/* Mini Icon/Marker wrapper */}
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 dark:from-accent/20 dark:to-accent/5 shadow-md group-hover:scale-105 transition-transform duration-300 z-10">
                <Sparkles className="size-6 text-primary dark:text-accent" />
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-extrabold text-foreground mt-6 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-foreground/80 dark:text-foreground/90 mt-3 leading-relaxed max-w-sm font-semibold">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

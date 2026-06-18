"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { FileText, CalendarDays, Sparkles } from "lucide-react"

const STEPS_DATA = [
  {
    icon: FileText,
    stepNumber: "01",
    title: "Request a Quote",
    description: "Fill out our quick online quote request or give us a call. We'll provide a transparent, custom estimate tailored to your cleaning needs.",
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    icon: CalendarDays,
    stepNumber: "02",
    title: "Schedule Your Service",
    description: "Choose a convenient date and time. Our vetted, professional cleaning team will arrive fully equipped and ready to refresh your space.",
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent"
  },
  {
    icon: Sparkles,
    stepNumber: "03",
    title: "Enjoy a Spotless Space",
    description: "Walk in, take a breath, and enjoy the absolute shine. We follow up to ensure you're 100% satisfied with our meticulous cleaning.",
    accentColor: "from-primary/20 to-accent/5",
    iconColor: "text-primary"
  }
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15
    }
  }
}

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-card/40 dark:bg-secondary/10 pt-8 pb-6 md:pt-10 md:pb-8 lg:pb-10 border-t border-border/40 dark:border-border/10">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-[10%] -z-10 size-[300px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-[10%] -z-10 size-[300px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm"
          >
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Simple 3-Step Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-tight"
          >
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed"
          >
            Getting your home or commercial space cleaned has never been easier. Follow our straightforward three-step method.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative z-10"
        >
          {STEPS_DATA.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                className="group relative flex flex-col items-center md:items-start text-center md:text-left p-2"
              >
                {/* Horizontal connector line on desktop */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 border-t-2 border-dashed border-border/60 dark:border-border/15 -z-10" />
                )}

                {/* Step Number Badge */}
                <div className="absolute top-0 right-4 md:right-0 font-heading font-black text-6xl text-primary/5 dark:text-primary/10 select-none group-hover:scale-105 transition-transform duration-300 pointer-events-none">
                  {step.stepNumber}
                </div>

                {/* Icon Wrapper */}
                <div className={`inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br ${step.accentColor} shadow-md group-hover:scale-105 transition-transform duration-300 z-10`}>
                  <IconComponent className={`size-6 ${step.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-extrabold text-foreground mt-6 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 mt-3 leading-relaxed max-w-sm font-medium">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { ShieldCheck, Leaf, Sliders, Award, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHY_CHOOSE_US_DATA = [
  {
    icon: ShieldCheck,
    title: "Vetted & Insured Team",
    description: "Every member of our team undergoes rigorous background checks and training. We are fully insured for your complete peace of mind.",
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use non-toxic, pet-safe, and biodegradable cleaning products that protect your health and preserve the environment.",
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent"
  },
  {
    icon: Sliders,
    title: "Flexible Cleaning Plans",
    description: "No two spaces are alike. We customize our checklists and schedules to align precisely with your property layout and schedule.",
    accentColor: "from-primary/20 to-accent/5",
    iconColor: "text-primary"
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    description: "Your satisfaction is our goal. If you are not completely happy, notify us within 24 hours and we will reclean it for free.",
    accentColor: "from-accent/20 to-primary/5",
    iconColor: "text-accent"
  }
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
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

const leftColumnVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15
    }
  }
}

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-6 md:pt-10 md:pb-8 lg:pb-10 border-t border-border/40 dark:border-border/10">
      {/* Background visual details */}
      <div className="absolute top-[10%] right-[-10%] -z-10 size-[300px] sm:size-[450px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[10%] left-[-10%] -z-10 size-[300px] sm:size-[450px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm"
          >
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Why Choose Us</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-tight"
          >
            Why Homeowners & Businesses Choose{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Refuse Shine Cleaning LTD
            </span>
          </motion.h2>

          {/* Subheadline Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium"
          >
            Refuse Shine Cleaning LTD delivers trusted residential and commercial cleaning services across Willenhall, Wolverhampton, Walsall, Dudley, Birmingham and the West Midlands. Our fully insured team is committed to providing reliable, high-quality cleaning with flexible scheduling and outstanding customer service.
          </motion.p>
        </div>

        {/* 4-Column Grid of Value Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-lg hover:border-primary/20 dark:border-border/10 dark:bg-card/75 dark:hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/2 dark:to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Wrapper */}
                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${item.accentColor} shadow-inner`}>
                  <IconComponent className={`size-5.5 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-extrabold text-foreground mt-4 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 mt-2.5 leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Horizontal Guarantee Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={leftColumnVariants}
          className="mt-10 p-6 sm:p-8 rounded-3xl border border-border/60 bg-card/60 dark:border-border/10 dark:bg-card/40 backdrop-blur-sm shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 -z-10 size-48 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full group-hover:scale-110 transition-transform duration-500" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
            {/* Title / Icon */}
            <div className="flex items-center gap-3 shrink-0">
              <CheckCircle2 className="size-6 text-accent animate-pulse" />
              <h3 className="text-xl font-extrabold text-foreground">Our Guarantee & Standards</h3>
            </div>

            <div className="h-px w-full lg:h-12 lg:w-px bg-border/60 dark:bg-border/20 shrink-0" />

            {/* 3 Points - Row Layout on Large Screens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow w-full">
              <div className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Fully Insured Professionals</span>
              </div>
              <div className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                <div className="size-2 rounded-full bg-accent mt-2 shrink-0" />
                <span>Flexible Booking Options</span>
              </div>
              <div className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Reliable & Friendly Cleaning Team</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="mt-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/book">
              <Button
                className="h-12 bg-primary hover:bg-primary/95 dark:bg-primary dark:hover:bg-primary/90 text-primary-foreground font-bold rounded-xl px-10 shadow-lg shadow-primary/20 transition-all cursor-pointer inline-flex items-center gap-2 group/btn"
              >
                <span>Get Started</span>
                <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

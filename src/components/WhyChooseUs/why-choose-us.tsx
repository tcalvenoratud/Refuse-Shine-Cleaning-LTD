"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { ShieldCheck, Leaf, Sliders, Award, Sparkles, CheckCircle2 } from "lucide-react"

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
    title: "Tailored Cleaning Plans",
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Guarantee Stamp */}
          <motion.div
            className="flex flex-col lg:col-span-5 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftColumnVariants}
          >
            {/* Tag Badge */}
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm">
              <Sparkles className="size-3.5 text-accent animate-pulse" />
              <span>Why Choose Us</span>
            </div>

            {/* Title */}
            <h2 className="mt-6 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-tight">
              Spotless Standards.
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vetted Professionals.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed max-w-xl font-medium">
              At Refuse Shine Cleaning LTD, we believe cleaning is more than just sweeping; it's about creating healthy, refreshing environments. We serve home and commercial properties across the West Midlands with trained staff, full liability coverage, and eco-friendly products.
            </p>

            {/* Trust Stamp Card */}
            <div className="mt-8 p-6 rounded-2xl border border-border/60 bg-card/60 dark:border-border/10 dark:bg-card/40 backdrop-blur-sm shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 -z-10 size-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full group-hover:scale-110 transition-transform duration-500" />
              
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="size-4.5 text-accent shrink-0" />
                <span>Our Guarantee & Standards</span>
              </h3>
              
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-center gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                  <div className="size-2 rounded-full bg-primary shrink-0" />
                  <span>100% Satisfaction Guarantee — Recleans inside 24 Hours</span>
                </li>
                <li className="flex items-center gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                  <div className="size-2 rounded-full bg-accent shrink-0" />
                  <span>Fully Insured & Public Liability Protection</span>
                </li>
                <li className="flex items-center gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                  <div className="size-2 rounded-full bg-primary shrink-0" />
                  <span>Background Checked, Uniformed & Friendly Staff</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Value Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-7"
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

        </div>
      </div>
    </section>
  )
}

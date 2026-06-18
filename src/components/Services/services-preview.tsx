"use client"

import * as React from "react"
import Link from "next/link"
import {
  Home,
  Sparkles,
  Key,
  Calendar,
  Layers,
  Trash2,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"

const SERVICES_DATA = [
  {
    icon: Home,
    title: "Regular House Cleaning",
    description: "Reliable, recurring cleaning scheduled weekly or fortnightly. Keep your home consistently fresh and spotless without the stress.",
    checklist: [
      "Weekly or fortnightly schedules",
      "Dusting, vacuuming & mopping",
      "Same dedicated professional cleaner",
      "General tidying and trash disposal"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning & Care",
    description: "An intensive top-to-bottom sanitize of your space. Ideal for spring cleaning or restoring high-traffic areas to mint condition.",
    checklist: [
      "Thorough kitchen deep-scrubbing",
      "Complete bathroom sanitization",
      "Behind & under furniture cleans",
      "Detailed baseboard & door dusting"
    ],
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent"
  },
  {
    icon: Key,
    title: "End of Tenancy Cleaning",
    description: "Specialized deep cleaning designed for landlords, letting agents, and tenants to ensure security deposits are returned successfully.",
    checklist: [
      "Landlord checklist approved",
      "Move-in / move-out optimization",
      "Internal cabinet & drawer cleaning",
      "100% satisfaction guarantee"
    ],
    accentColor: "from-primary/20 to-accent/5",
    iconColor: "text-primary"
  },
  {
    icon: Calendar,
    title: "Airbnb & Short Let Cleaning",
    description: "Fast-turnaround guest changeover services. We keep your ratings high by styling, washing, and preparing your space for arrivals.",
    checklist: [
      "Rapid 5-star host turnaround",
      "Staging, styling & amenity restock",
      "Linen & towel replacement prep",
      "Spot checks for guest damage"
    ],
    accentColor: "from-accent/20 to-primary/5",
    iconColor: "text-accent"
  },
  {
    icon: Layers,
    title: "Carpet & Appliance Cleaning",
    description: "Extend the lifespan of your interior. Hot water extraction for carpets and deep grease removal for heavy kitchen appliances.",
    checklist: [
      "Deep hot-water carpet extraction",
      "Oven, fridge & microwave scrubbing",
      "Stain removal and deodorizing",
      "Eco-friendly, child-safe products"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    icon: Trash2,
    title: "Waste Removal & Windows",
    description: "Professional clearing of domestic junk alongside window washing (inside & outside where permitted and fully insured).",
    checklist: [
      "Safe and certified waste disposal",
      "Sparkling glass & frame window washing",
      "Junk clearance & eco-conscious disposal",
      "Fully insured, vetted operations"
    ],
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent"
  }
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants: Variants = {
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

export function ServicesPreview() {

  return (
    <section className="pt-8 pb-6 md:pt-10 md:pb-8 lg:pb-10 bg-card/40 dark:bg-secondary/10 relative overflow-hidden border-t border-border/40 dark:border-border/10">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-[-10%] -z-10 size-[350px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-10%] -z-10 size-[350px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />

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
            <span>Our Service Preview</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-tight"
          >
            Spotless Results,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Single Time.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-text-gray dark:text-muted-foreground leading-relaxed"
          >
            Explore our main service categories. Whether you need a simple weekly sweep or a complex deep cleaning operation, our fully vetted staff is equipped to handle it all.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-background p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-primary/20 dark:border-border/10 dark:bg-card/75 dark:hover:border-accent/30 transition-all duration-300 overflow-hidden"
              >
                {/* Visual hover background element */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/2 dark:to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  {/* Icon wrap with soft background */}
                  <div className={`inline-flex items-center justify-center p-2.5 rounded-xl bg-gradient-to-br ${service.accentColor} shadow-inner`}>
                    <IconComponent className={`size-5.5 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] font-extrabold text-foreground mt-4 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 mt-2.5 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <ul className="mt-4 space-y-2 border-t border-border/40 dark:border-border/10 pt-4">
                    {service.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className={`size-4.5 mt-0.5 shrink-0 ${service.iconColor} opacity-90`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="mt-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/services">
              <Button
                variant="outline"
                className="h-12 border-2 border-primary/20 hover:border-primary/45 dark:border-accent/20 dark:hover:border-accent/40 text-foreground font-bold rounded-xl px-8 transition-all cursor-pointer inline-flex items-center gap-2 group/btn"
              >
                <span>View All Cleaning Services</span>
                <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform text-primary dark:text-accent" />
              </Button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

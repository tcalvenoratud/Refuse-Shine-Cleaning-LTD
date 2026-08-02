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
    description: "Professional, regular domestic cleans tailored to your home. Scheduled weekly or fortnightly to keep your living space fresh and stress-free.",
    checklist: [
      "Flexible weekly or fortnightly visits",
      "Vetted & insured local home cleaners",
      "Dusting, mopping, vacuuming & tidying",
      "Fully customisable cleaning checklist"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning Services",
    description: "An intensive top-to-bottom sanitize of your property. Perfect for spring cleaning, post-renovation, or revitalising high-traffic areas.",
    checklist: [
      "Thorough kitchen and oven degreasing",
      "Complete bathroom limescale removal",
      "Cleaning behind & under heavy furniture",
      "Baseboards, doors & sockets disinfected"
    ],
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent"
  },
  {
    icon: Key,
    title: "End of Tenancy Cleaning",
    description: "High-standard move-out cleaning to secure your tenancy deposit. Trusted by local tenants, landlords, and letting agents across the West Midlands.",
    checklist: [
      "100% deposit return check guarantee",
      "Full internal cabinet and drawer clean",
      "Oven and white goods deep cleaned",
      "Comprehensive move-in / move-out service"
    ],
    accentColor: "from-primary/20 to-accent/5",
    iconColor: "text-primary"
  },
  {
    icon: Calendar,
    title: "Airbnb & Holiday Let Cleaning",
    description: "Fast-turnaround guest changeovers to maintain your 5-star ratings. We clean, restock, and style your property ready for the next booking.",
    checklist: [
      "Rapid, reliable guest checkout cleaning",
      "Fresh linen change & towel staging",
      "Toiletries & guest amenities restocked",
      "Property damage and safety spot checks"
    ],
    accentColor: "from-accent/20 to-primary/5",
    iconColor: "text-accent"
  },
  {
    icon: Layers,
    title: "Carpet Cleaning",
    description: "Extend the life of your carpets and soft furnishings. Professional hot water extraction removes deep stains, dirt, and allergens.",
    checklist: [
      "Advanced hot water carpet extraction",
      "Tough stain removal and deodorising",
      "Pet-friendly, non-toxic cleaning products",
      "Deep upholstery & fabric rejuvenation"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    icon: Trash2,
    title: "Window Cleaning & Waste Removal",
    description: "Streak-free window washing combined with professional domestic clearance. Safe, prompt removal of unwanted junk and rubbish.",
    checklist: [
      "Streak-free internal & external windows",
      "Fully licensed domestic waste disposal",
      "End-of-tenancy rubbish clearance",
      "Eco-friendly recycling and reuse focus"
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
            <span>Professional Cleaning Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-tight"
          >
            Professional Cleaning Services Across the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              West Midlands
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-text-gray dark:text-muted-foreground leading-relaxed"
          >
            Refuse Shine Cleaning LTD provides trusted cleaning services across Willenhall, Wolverhampton, Walsall, Birmingham, Dudley, West Bromwich and the West Midlands. Book fully insured, vetted local professionals for a reliable clean.
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
            <Link href="/book">
              <Button
                variant="outline"
                className="h-12 border-2 border-primary/20 hover:border-primary/45 dark:border-accent/20 dark:hover:border-accent/40 text-foreground font-bold rounded-xl px-8 transition-all cursor-pointer inline-flex items-center gap-2 group/btn"
              >
                <span>Book Your Cleaning Today</span>
                <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform text-primary dark:text-accent" />
              </Button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence, Variants } from "framer-motion"
import {
  Home,
  Sparkles,
  Key,
  Calendar,
  Layers,
  Trash2,
  CheckCircle2,
  ArrowRight,
  Utensils,
  Bath,
  Truck,
  Flame,
  LayoutGrid
} from "lucide-react"
import { Button } from "@/components/ui/button"

const CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "domestic", label: "Domestic Cleans" },
  { id: "specialized", label: "Specialized Property" },
  { id: "specialty", label: "Specialty Care" }
]

const SERVICES_PAGE_DATA = [
  {
    id: "regular-clean",
    category: "domestic",
    icon: Home,
    title: "Regular House Cleaning",
    description: "Reliable, recurring cleaning scheduled weekly or fortnightly. Keep your home consistently fresh and tidy without the stress.",
    checklist: [
      "Dusting all furniture and surfaces",
      "Vacuuming carpets & mopping hard floors",
      "Same dedicated professional cleaner",
      "General tidying and trash disposal"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    id: "deep-clean",
    category: "domestic",
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "An intensive top-to-bottom sanitize of your space. Ideal for spring cleaning or restoring high-traffic areas to mint condition.",
    checklist: [
      "Thorough sanitizing of toilets & showers",
      "Wiping light switches & door frames",
      "Cleaning behind and under heavy furniture",
      "Detailed baseboard & door dusting"
    ],
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent"
  },
  {
    id: "kitchen-deep-clean",
    category: "domestic",
    icon: Utensils,
    title: "Kitchen Deep Cleaning",
    description: "Specialized deep scrub focusing strictly on the heart of your home to remove built-up oil, grease, and grime.",
    checklist: [
      "Deep de-greasing of countertops & backsplashes",
      "Scrubbing sink basins & polishing faucets",
      "Polishing outer appliance cabinets & details",
      "Sanitizing food prep surfaces & tiles"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    id: "bathroom-clean",
    category: "domestic",
    icon: Bath,
    title: "Bathroom Cleaning",
    description: "Comprehensive bathroom sanitizing to eliminate limescale, soap scum, and hard water stains.",
    checklist: [
      "Disinfecting toilets, tubs, and sinks",
      "Scrubbing wall tiles and floor grouting",
      "Polishing mirrors and shower glass doors",
      "Limescale removal from chrome faucets"
    ],
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent"
  },
  {
    id: "end-of-tenancy",
    category: "specialized",
    icon: Key,
    title: "End of Tenancy Cleaning",
    description: "Rigid, landlord-checklist approved deep cleaning designed to ensure security deposit returns for tenants and landlords.",
    checklist: [
      "Full internal cabinet & wardrobe cleans",
      "Detailed oven, fridge, and microwave scrub",
      "Window frames & glass washing (internal)",
      "100% deposit return satisfaction guarantee"
    ],
    accentColor: "from-primary/20 to-accent/5",
    iconColor: "text-primary"
  },
  {
    id: "move-in-out",
    category: "specialized",
    icon: Truck,
    title: "Move-In / Move-Out Cleaning",
    description: "Ensure your new home is sterilized before unpacking, or leave your old property in flawless condition for the next occupants.",
    checklist: [
      "Thorough sanitization of empty cabinets",
      "Dusting walls, registers, and baseboards",
      "Deep room disinfecting before unpacking",
      "Detailed floor-to-ceiling clean-up"
    ],
    accentColor: "from-accent/20 to-primary/5",
    iconColor: "text-accent"
  },
  {
    id: "airbnb-clean",
    category: "specialized",
    icon: Calendar,
    title: "Airbnb & Short Let Cleaning",
    description: "Fast-turnaround guest changeovers to keep your review ratings high. We handle linen setup, staging, and check-ins.",
    checklist: [
      "Rapid guest turnaround staging",
      "Linen stripping & fresh bed prep",
      "Toiletries & amenity restocking",
      "Property damage reporting checks"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    id: "carpet-clean",
    category: "specialty",
    icon: Layers,
    title: "Carpet Cleaning",
    description: "Professional hot-water extraction to wash fibers, lift embedded dirt, and remove stubborn coffee or liquid stains.",
    checklist: [
      "Deep hot-water steam extraction",
      "Stain removal and deodorizing wash",
      "Eco-friendly, child and pet-safe products",
      "High-suction rapid drying process"
    ],
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent"
  },
  {
    id: "appliance-clean",
    category: "specialty",
    icon: Flame,
    title: "Appliance Cleaning",
    description: "Restore your heavy kitchen appliances (ovens, fridges, microwaves) to like-new condition by stripping away burnt grease.",
    checklist: [
      "Oven interior carbon & grease removal",
      "Refrigerator sanitizing & defogging",
      "Microwave steam-scrubbing & clean",
      "Polishing exterior panels & grates"
    ],
    accentColor: "from-primary/20 to-accent/5",
    iconColor: "text-primary"
  },
  {
    id: "window-clean",
    category: "specialty",
    icon: LayoutGrid,
    title: "Window Cleaning",
    description: "Streak-free glass washing for internal windows, plus external wash where safely accessible and permitted.",
    checklist: [
      "Internal glass squeegee washing",
      "Frame, sill, and track detailing",
      "External window wash (where permitted)",
      "Fully insured, streak-free guarantee"
    ],
    accentColor: "from-accent/20 to-primary/5",
    iconColor: "text-accent"
  },
  {
    id: "waste-removal",
    category: "specialty",
    icon: Trash2,
    title: "Waste Removal",
    description: "Safe, fully certified removal of domestic junk, clutter, and household waste items with eco-conscious disposal.",
    checklist: [
      "Certified household junk clearance",
      "Eco-friendly disposal and recycling",
      "Post-clearance swept clean check",
      "Fully insured, background-checked staff"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  }
]

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (index: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 15,
      delay: index * 0.05
    }
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.15
    }
  }
}

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = React.useState("all")

  const filteredServices = SERVICES_PAGE_DATA.filter((service) => {
    if (activeFilter === "all") return true
    return service.category === activeFilter
  })

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden bg-background pt-12 pb-8 md:pt-16 md:pb-12 border-b border-border/40 dark:border-border/10">
        <div className="absolute top-[-10%] right-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm">
              <Sparkles className="size-3.5 text-accent animate-pulse" />
              <span>Full Service Catalog</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl font-heading leading-[1.1]">
              Our Professional
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cleaning Services
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium">
              Explore our comprehensive range of cleaning options across the West Midlands. We offer bespoke checklists tailored for your household or commercial property.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Tabs */}
      <section className="py-8 bg-card/30 dark:bg-secondary/5 border-b border-border/40 dark:border-border/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-base font-extrabold transition-all cursor-pointer border ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-background text-foreground/80 border-border/60 hover:bg-muted/50 dark:bg-card/40 dark:border-border/10"
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Filterable Catalog Grid */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    layout
                    key={service.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-lg hover:border-primary/20 dark:border-border/10 dark:bg-card/75 dark:hover:border-accent/30 transition-all duration-300 relative flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/2 dark:to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      {/* Icon wrapper */}
                      <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${service.accentColor} shadow-inner`}>
                        <IconComponent className={`size-6 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>

                      {/* Title */}
                      <h2 className="text-[24px] font-extrabold text-foreground mt-4 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                        {service.title}
                      </h2>

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

                    {/* Card Button */}
                    <div className="mt-8 pt-4">
                      <Link href={`/book?service=${service.id}`} className="w-full">
                        <Button className="w-full h-11 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 group/card-btn">
                          <span>Book This Service</span>
                          <ArrowRight className="size-4 group-hover/card-btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. Bottom Custom Quote CTA Section */}
      <section className="relative overflow-hidden bg-card/40 dark:bg-secondary/10 pt-10 pb-16 md:pt-14 md:pb-24 border-t border-border/40 dark:border-border/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-foreground sm:text-4xl font-heading leading-tight">
              Need a Custom{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cleaning Checklist?
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium">
              We specialize in creating tailored plans matching your specific spaces and budget requirements. Let's arrange a package that fits you perfectly.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book">
                <Button
                  className="h-12 bg-primary hover:bg-primary/95 dark:bg-primary dark:hover:bg-primary/90 text-primary-foreground font-bold rounded-xl px-8 shadow-lg shadow-primary/20 transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="h-12 border-2 border-border text-foreground font-bold rounded-xl px-8 hover:bg-muted/50 transition-all cursor-pointer flex items-center justify-center"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

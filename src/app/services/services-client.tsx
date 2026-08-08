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
  LayoutGrid,
  Hammer
} from "lucide-react"
import { Button } from "@/components/ui/button"

const CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "house", label: "House Cleaning" },
  { id: "property", label: "Property Cleaning" },
  { id: "specialty", label: "Specialty Cleaning" }
]

const SERVICES_PAGE_DATA = [
  {
    id: "regular-clean",
    slug: "regular-house-cleaning",
    category: "house",
    icon: Home,
    title: "Regular House Cleaning",
    description: "Professional weekly or fortnightly house cleaning services for busy homeowners across Willenhall and the West Midlands. We keep your property fresh, tidy and hygienic with flexible cleaning schedules tailored to your lifestyle.",
    checklist: [
      "Weekly or Fortnightly House Cleaning",
      "Dusting, Vacuuming & Floor Mopping",
      "Kitchen & Bathroom Surface Cleaning",
      "Reliable & Fully Insured Cleaning Team"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    bookingCta: "Book House Cleaning"
  },
  {
    id: "deep-clean",
    slug: "deep-cleaning",
    category: "house",
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Our professional deep cleaning service removes built-up dirt, grease and bacteria from every room, making your home or business cleaner, healthier and ready for any occasion.",
    checklist: [
      "Complete Kitchen & Bathroom Deep Cleaning",
      "High-Touch Surface Disinfection",
      "Behind Furniture & Hard-to-Reach Areas",
      "Skirting Boards, Doors & Frames Cleaned"
    ],
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    bookingCta: "Book Deep Cleaning"
  },
  {
    id: "kitchen-deep-clean",
    slug: "kitchen-deep-cleaning",
    category: "house",
    icon: Utensils,
    title: "Kitchen Deep Cleaning",
    description: "Restore your kitchen with a comprehensive deep cleaning service that removes grease, food residue and hidden dirt from worktops, cupboards, appliances and food preparation areas.",
    checklist: [
      "Kitchen Worktops & Cupboards Degreased",
      "Sink, Taps & Splashback Deep Cleaned",
      "Appliance Exterior Cleaning",
      "Food Preparation Areas Sanitised"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    bookingCta: "Book Kitchen Deep Cleaning"
  },
  {
    id: "bathroom-clean",
    slug: "bathroom-cleaning",
    category: "house",
    icon: Bath,
    title: "Bathroom Cleaning",
    description: "Professional bathroom cleaning designed to remove soap scum, limescale and bacteria, leaving every surface fresh, sanitised and sparkling clean.",
    checklist: [
      "Toilets, Baths & Sinks Sanitised",
      "Shower Screens & Wall Tiles Cleaned",
      "Mirrors, Chrome & Fixtures Polished",
      "Limescale & Soap Scum Removed"
    ],
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    bookingCta: "Book Bathroom Cleaning"
  },
  {
    id: "end-of-tenancy",
    slug: "end-of-tenancy-cleaning",
    category: "property",
    icon: Key,
    title: "End of Tenancy Cleaning",
    description: "Landlord-approved end of tenancy cleaning services that help tenants leave properties spotless and maximise deposit returns throughout the West Midlands.",
    checklist: [
      "Landlord & Letting Agent Standard Cleaning",
      "Kitchen Appliances Deep Cleaned",
      "Internal Windows, Frames & Sills Cleaned",
      "Ideal for End of Tenancy Inspections"
    ],
    accentColor: "from-primary/20 to-accent/5",
    iconColor: "text-primary",
    bookingCta: "Book End of Tenancy Cleaning"
  },
  {
    id: "move-in-out",
    category: "property",
    icon: Truck,
    title: "Move-In / Move-Out Cleaning",
    description: "Prepare your property before moving in or leave it in excellent condition before handing over the keys with our comprehensive move-in and move-out cleaning service.",
    checklist: [
      "Complete Property Deep Cleaning",
      "Kitchen & Bathroom Sanitisation",
      "Empty Cupboards & Storage Cleaned",
      "Ready for Moving In or Moving Out"
    ],
    accentColor: "from-accent/20 to-primary/5",
    iconColor: "text-accent",
    bookingCta: "Book Move-In/Out Cleaning"
  },
  {
    id: "airbnb-clean",
    category: "property",
    icon: Calendar,
    title: "Airbnb & Short Let Cleaning",
    description: "Fast and reliable Airbnb cleaning services designed to keep your property guest-ready with fresh linen preparation, cleaning and presentation between every stay.",
    checklist: [
      "Fast Airbnb Turnaround Cleaning",
      "Fresh Linen & Bed Preparation",
      "Bathroom & Kitchen Sanitisation",
      "Guest-Ready Property Presentation"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    bookingCta: "Book Airbnb Cleaning Service"
  },
  {
    id: "post-construction",
    category: "property",
    icon: Hammer,
    title: "Post Construction Cleaning",
    description: "Professional post-construction and after-builders cleaning to remove fine dust, plaster residue, paint splatters and construction debris, leaving your newly built or renovated space ready to enjoy.",
    checklist: [
      "Thorough Construction Dust & Debris Removal",
      "Paint, Plaster & Adhesive Residue Cleanup",
      "Deep Clean of Sills, Skirtings & Fixtures",
      "Ready-to-Move-In Property Handover"
    ],
    accentColor: "from-accent/20 to-primary/5",
    iconColor: "text-accent",
    bookingCta: "Book Post-Construction Clean"
  },
  {
    id: "carpet-clean",
    category: "specialty",
    icon: Layers,
    title: "Carpet Cleaning",
    description: "Professional carpet cleaning using advanced equipment to remove dirt, stains and odours while restoring the appearance of your carpets.",
    checklist: [
      "Professional Carpet Deep Cleaning",
      "Stain & Odour Removal",
      "Safe for Children & Pets",
      "Fast Drying Carpet Treatment"
    ],
    accentColor: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    bookingCta: "Book Carpet Cleaning Service"
  },
  {
    id: "appliance-clean",
    category: "specialty",
    icon: Flame,
    title: "Appliance Cleaning",
    description: "Deep appliance cleaning for ovens, refrigerators and microwaves, removing grease, burnt residue and built-up dirt to restore a hygienic finish.",
    checklist: [
      "Oven Deep Cleaning & Degreasing",
      "Fridge & Microwave Sanitisation",
      "Grease & Burnt Residue Removal",
      "Kitchen Appliance Exterior Polishing"
    ],
    accentColor: "from-primary/20 to-accent/5",
    iconColor: "text-primary",
    bookingCta: "Book Appliance Cleaning Service"
  },
  {
    id: "window-clean",
    category: "specialty",
    icon: LayoutGrid,
    title: "Window Cleaning",
    description: "Professional streak-free window cleaning for homes and businesses, leaving glass, frames and sills spotless inside and where safely accessible outside.",
    checklist: [
      "Internal Window Glass Cleaning",
      "Frames, Sills & Window Tracks Cleaned",
      "External Window Cleaning Available",
      "Streak-Free Professional Finish"
    ],
    accentColor: "from-accent/20 to-primary/5",
    iconColor: "text-accent",
    bookingCta: "Book Window Cleaning Service"
  },
  {
    id: "waste-removal",
    category: "specialty",
    icon: Trash2,
    title: "Waste Removal",
    description: "Safe and reliable household waste removal services with responsible disposal, helping you clear unwanted items quickly and efficiently.",
    checklist: [
      "Household Waste & Junk Removal",
      "Responsible Recycling & Disposal",
      "Property Cleared & Tidied",
      "Reliable & Fully Insured Team"
    ],
    accentColor: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    bookingCta: "Book Waste Removal Service"
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

export default function ServicesClient() {
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
              <span>Professional Cleaning Services</span>
            </div>

            <h1 className="mt-6 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-[1.1]">
              Professional Cleaning Services in
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Willenhall & West Midlands
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium">
              Refuse Shine Cleaning LTD provides trusted residential and commercial cleaning services across Willenhall, Wolverhampton, Walsall, Dudley, West Bromwich, Cannock, Birmingham and surrounding West Midlands locations. From regular house cleaning to end of tenancy cleaning, deep cleaning, carpet cleaning and Airbnb cleaning, our fully insured team delivers spotless results every time.
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
                  className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-base font-extrabold transition-all cursor-pointer border ${isActive
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
                        {service.slug ? (
                          <Link href={`/services/${service.slug}`} className="hover:underline">
                            {service.title}
                          </Link>
                        ) : (
                          service.title
                        )}
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
                    <div className="mt-8 pt-4 flex flex-col gap-2.5">
                      {service.slug ? (
                        <>
                          <Link href={`/services/${service.slug}`} className="w-full">
                            <Button className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5">
                              <span>View Service Details</span>
                            </Button>
                          </Link>
                          <Link href={`/book?service=${service.id}`} className="w-full">
                            <Button className="w-full h-11 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 group/card-btn">
                              <span>Book This Service</span>
                              <ArrowRight className="size-4 group-hover/card-btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <Link href={`/book?service=${service.id}`} className="w-full">
                          <Button className="w-full h-11 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 group/card-btn">
                            <span>{service.bookingCta || "Book This Service"}</span>
                            <ArrowRight className="size-4 group-hover/card-btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      )}
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
              Need a Tailored{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cleaning Service?
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium">
              Every property is different. Whether you need a one-off deep clean, regular domestic cleaning or a customised commercial cleaning schedule, we'll create a cleaning plan that suits your requirements and budget.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book">
                <Button
                  className="h-12 bg-primary hover:bg-primary/95 dark:bg-primary dark:hover:bg-primary/90 text-primary-foreground font-bold rounded-xl px-8 shadow-lg shadow-primary/20 transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                  <span>Get Your Free Cleaning Quote</span>
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

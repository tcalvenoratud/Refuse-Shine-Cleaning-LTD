"use client"

import * as React from "react"
import { MapPin, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceAreasProps {
  areasContent: string;
}

const PRIMARY_LOCATIONS = [
  "Willenhall", "Walsall", "Wolverhampton", "Dudley", "West Bromwich", "Birmingham"
];

const SECONDARY_LOCATIONS = [
  "Bilston", "Tipton", "Aldridge", "Oldbury", "Brownhills", "Cannock", "Smethwick",
  "Rowley Regis", "Halesowen", "Sutton Coldfield", "Brierley Hill", "Stourbridge",
  "Solihull", "Tamworth", "Kidderminster", "Stafford", "Redditch"
];

export function ServiceAreas({ areasContent }: ServiceAreasProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-10 border-b border-border/40 dark:border-border/10">
      {/* Background glow */}
      <div className="absolute top-[10%] left-[-10%] -z-10 size-[300px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text description */}
          <motion.div 
            className="lg:col-span-6 flex flex-col"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm mb-6">
              <MapPin className="size-3.5 text-accent animate-pulse" />
              <span>West Midlands Service Areas</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-foreground font-heading mb-6 leading-tight">
              Professional Service Across the West Midlands
            </h2>

            <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed font-semibold mb-6">
              {areasContent}
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              We provide clean tools, fully vetted teams, and tailored clean checklists to homes and business premises throughout our designated zones. Contact us to schedule a cleaner in your local town.
            </p>
          </motion.div>

          {/* Right Column: Location Listing Grid */}
          <motion.div 
            className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border border-border/60 bg-card/60 dark:border-border/10 dark:bg-card/45 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-extrabold text-foreground mb-4">
              Main Service Locations:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-6">
              {PRIMARY_LOCATIONS.map((loc) => (
                <div key={loc} className="flex items-center gap-2 font-bold text-foreground">
                  <CheckCircle2 className="size-4.5 text-primary dark:text-accent shrink-0" />
                  <span className="text-base">{loc}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-border/60 dark:bg-border/20 my-4" />

            <h3 className="text-base font-extrabold text-muted-foreground mb-3">
              Other Surrounding Areas Covered:
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-foreground/80 dark:text-foreground/90 font-semibold">
              {SECONDARY_LOCATIONS.map((loc, idx) => (
                <span 
                  key={loc}
                  className="px-3 py-1 rounded-full bg-muted/40 dark:bg-muted/10 border border-border/40"
                >
                  {loc}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

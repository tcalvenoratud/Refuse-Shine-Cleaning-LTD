"use client"

import * as React from "react"
import { Home, CheckCircle2, Sparkles, Building, Layers } from "lucide-react"
import { motion } from "framer-motion"

interface LocationLocalContextProps {
  locationName: string;
  title: string;
  contextContent: string[];
}

export function LocationLocalContext({ locationName, title, contextContent }: LocationLocalContextProps) {
  return (
    <section className="py-8 md:py-10 bg-muted/30 border-y border-border/40 dark:border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-xs mb-4">
              <Building className="size-3.5 text-accent" />
              <span>Property & Community Context</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground font-heading leading-tight mb-4">
              {title}
            </h2>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border/70 dark:border-border/40 bg-card p-6 sm:p-10 shadow-xs space-y-5 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium"
          >
            {contextContent.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            <div className="pt-6 border-t border-border/40 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-foreground">
                <CheckCircle2 className="size-4 text-accent shrink-0" />
                <span>Domestic & Residential Care</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-foreground">
                <CheckCircle2 className="size-4 text-accent shrink-0" />
                <span>Rental Tenancy Turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-foreground">
                <CheckCircle2 className="size-4 text-accent shrink-0" />
                <span>Commercial & Specialist Cleans</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

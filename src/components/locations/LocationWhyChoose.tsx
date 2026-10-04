"use client"

import * as React from "react"
import { ShieldCheck, MapPin, Sparkles, Clock, CheckCircle2, ThumbsUp } from "lucide-react"
import { LocationWhyChooseItem } from "@/lib/locations-data"
import { motion } from "framer-motion"

interface LocationWhyChooseProps {
  locationName: string;
  title: string;
  whyChoose: LocationWhyChooseItem[];
}

const BENEFIT_ICONS = [MapPin, ShieldCheck, Sparkles, CheckCircle2, Clock, ThumbsUp];

export function LocationWhyChoose({ locationName, title, whyChoose }: LocationWhyChooseProps) {
  return (
    <section className="py-8 md:py-10 bg-muted/30 border-y border-border/40 dark:border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-xs mb-4">
            <ShieldCheck className="size-3.5 text-accent" />
            <span>Trusted Cleaning Standards</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl font-heading leading-tight mb-4">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
            Here is why residents and businesses in {locationName} depend on Refuse Shine Cleaning LTD for spotless, reliable results.
          </p>
        </div>

        {/* Grid of benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((item, index) => {
            const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length] || CheckCircle2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col p-6 rounded-2xl border border-border/70 dark:border-border/40 bg-card hover:border-primary/40 dark:hover:border-accent/40 shadow-xs hover:shadow-sm transition-all duration-300"
              >
                <div className="size-11 rounded-xl bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent flex items-center justify-center mb-4">
                  <Icon className="size-5.5" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import { Home, Key, Building2, CheckCircle2, Sparkles } from "lucide-react"
import { LocationCustomerType } from "@/lib/locations-data"
import { motion } from "framer-motion"

interface LocationCustomerTypesProps {
  locationName: string;
  title: string;
  intro: string;
  customerTypes: LocationCustomerType[];
}

const TYPE_ICONS = [Home, Key, Building2];

export function LocationCustomerTypes({ locationName, title, intro, customerTypes }: LocationCustomerTypesProps) {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-xs mb-4">
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Who We Clean For</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl font-heading leading-tight mb-4">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
            {intro}
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerTypes.map((type, index) => {
            const Icon = TYPE_ICONS[index % TYPE_ICONS.length] || Home;
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col justify-between rounded-3xl border border-border/70 dark:border-border/40 bg-card p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-primary/40 dark:hover:border-accent/40 transition-all duration-300 relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-2xl bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-muted text-muted-foreground uppercase tracking-wider">
                      {type.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    {type.title}
                  </h3>

                  <p className="text-sm text-foreground/80 leading-relaxed mb-6 font-medium">
                    {type.description}
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/85 border-t border-border/40 pt-4">
                    {type.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

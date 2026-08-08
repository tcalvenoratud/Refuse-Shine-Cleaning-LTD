"use client"

import * as React from "react"
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

interface WhyChooseItem {
  title: string;
  description: string;
}

interface ServiceWhyChooseProps {
  whyChoose: WhyChooseItem[];
  serviceTitle: string;
}

export function ServiceWhyChoose({ whyChoose, serviceTitle }: ServiceWhyChooseProps) {
  // Map clean, premium Lucide icons for the 3 columns
  const icons = [ShieldCheck, Award, Sparkles];

  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-10 border-b border-border/40 dark:border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm mb-6">
            <Award className="size-3.5 text-accent animate-pulse" />
            <span>Why Choose Refuse Shine</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-foreground font-heading">
            Why Choose Us for {serviceTitle.split(" in ")[0]}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
            We provide a dedicated and high-quality cleaning service tailored to your exact property requirements.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyChoose.map((item, index) => {
            const Icon = icons[index % icons.length] || CheckCircle2;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-border/60 bg-card p-6 shadow-xs hover:shadow-md hover:border-primary/20 dark:border-border/10 dark:bg-card/75 dark:hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/2 dark:to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon Wrapper */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/5 dark:bg-accent/10 text-primary dark:text-accent mb-4">
                  <Icon className="size-5.5 shrink-0" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/80 dark:text-foreground/90 mt-2 font-semibold leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

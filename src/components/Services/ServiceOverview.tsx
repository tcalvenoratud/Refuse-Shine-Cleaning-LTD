"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceOverviewProps {
  introTitle: string;
  introContent: string;
  forTitle: string;
  forIntro: string;
  forList: string[];
}

export function ServiceOverview({ introTitle, introContent, forTitle, forIntro, forList }: ServiceOverviewProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-10 border-b border-border/40 dark:border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Intro */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm mb-6">
              <Sparkles className="size-3.5 text-accent animate-pulse" />
              <span>Service Introduction</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-foreground font-heading mb-6 leading-tight">
              {introTitle}
            </h2>

            <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium">
              {introContent}
            </p>
          </motion.div>

          {/* Right Column: Who This Is For */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-border/60 bg-card/60 dark:border-border/10 dark:bg-card/40 shadow-xs"
          >
            <h3 className="text-xl font-extrabold text-foreground mb-4">
              {forTitle}
            </h3>
            <p className="text-base text-foreground/80 dark:text-foreground/90 font-semibold mb-6">
              {forIntro}
            </p>
            <ul className="space-y-3">
              {forList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-base text-foreground/85 dark:text-foreground/90 font-semibold">
                  <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


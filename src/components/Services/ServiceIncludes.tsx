"use client"

import * as React from "react"
import { CheckCircle2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceIncludesProps {
  includedTitle: string;
  includedIntro: string;
  includedList: string[];
}

export function ServiceIncludes({ includedTitle, includedIntro, includedList }: ServiceIncludesProps) {
  return (
    <section className="relative overflow-hidden bg-card/30 dark:bg-secondary/5 pt-12 pb-10 border-b border-border/40 dark:border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm mb-6">
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Complete Checklist</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-foreground font-heading">
            {includedTitle}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
            {includedIntro}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {includedList.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
              className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 shadow-xs"
            >
              <CheckCircle2 className="size-6 text-accent mt-0.5 shrink-0" />
              <span className="text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold leading-relaxed">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

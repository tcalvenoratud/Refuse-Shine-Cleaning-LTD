"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Sparkles } from "lucide-react"
import { ServiceFAQ as FAQType } from "@/lib/services-data"

interface ServiceFAQProps {
  faqs: FAQType[];
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden bg-card/30 dark:bg-secondary/10 pt-12 pb-12 border-b border-border/40 dark:border-border/10">
      {/* Background visual details */}
      <div className="absolute top-[30%] left-[-10%] -z-10 size-[350px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
      <div className="absolute bottom-[20%] right-[-10%] -z-10 size-[350px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm mb-6">
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Common Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-foreground font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
            Find answers to commonly asked questions about our dedicated cleaning services and booking policies.
          </p>
        </div>

        {/* Accordions List */}
        <motion.div 
          className="space-y-4"
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
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary/45 bg-background dark:border-accent/40 shadow-md"
                    : "border-border/60 bg-background/50 hover:border-primary/20 dark:border-border/10 dark:bg-card/40 dark:hover:border-accent/20"
                }`}
              >
                {/* Header/Button Trigger */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                    isOpen ? "text-primary dark:text-accent font-black" : "text-foreground"
                  }`}>
                    {faq.question}
                  </span>

                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`shrink-0 rounded-full p-1 border transition-colors ${
                      isOpen
                        ? "bg-primary/10 border-primary/20 text-primary dark:bg-accent/15 dark:border-accent/30 dark:text-accent"
                        : "bg-muted/50 border-border text-foreground/60"
                    }`}
                  >
                    <ChevronDown className="size-5" />
                  </motion.div>
                </button>

                {/* Answer Panel with smooth height toggle */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-1 pb-6 px-5 sm:px-6 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed border-t border-border/40 dark:border-border/10">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

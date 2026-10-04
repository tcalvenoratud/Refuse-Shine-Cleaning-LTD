"use client"

import * as React from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { LocationFAQItem } from "@/lib/locations-data"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface LocationFAQProps {
  locationName: string;
  faqs: LocationFAQItem[];
}

export function LocationFAQ({ locationName, faqs }: LocationFAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-10 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-xs mb-4">
            <HelpCircle className="size-3.5 text-accent" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl font-heading leading-tight mb-4">
            Frequently Asked Questions in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {locationName}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
            Find quick answers to common questions about our cleaning services, pricing, and booking in {locationName}.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "border-primary/40 dark:border-accent/40 bg-card shadow-xs"
                    : "border-border/70 dark:border-border/40 bg-card/60 hover:border-border"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-foreground">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "size-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen
                        ? "rotate-180 bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium border-t border-border/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { ChevronDown, Sparkles } from "lucide-react"

const FAQ_DATA = [
  {
    question: "What cleaning services do you offer in the West Midlands?",
    answer: "We provide comprehensive residential and commercial cleaning services. This includes regular domestic house cleaning (weekly/fortnightly), deep cleans, landlord-approved end-of-tenancy cleans, Airbnb guest changeover management, carpet steam cleaning, kitchen oven/appliance scrubbing, and window/waste removal."
  },
  {
    question: "Are your cleaning staff DBS checked and vetted?",
    answer: "Yes, 100% of our cleaning staff members undergo complete background audits, address verification, and official DBS (Disclosure and Barring Service) vetting. We only hire honest, vetted professionals so you feel safe letting them into your home or office."
  },
  {
    question: "Do you bring your own cleaning detergents and equipment?",
    answer: "We bring all standard professional eco-friendly cleaning detergents, sprays, and fresh microfibre cloths. If you require specialty tools (like carpet hot-water extractors or industrial vacuums), we provide them as part of our premium service packages. Let us know during booking if you have any specific preferences."
  },
  {
    question: "How does your 24-hour satisfaction guarantee work?",
    answer: "We take pride in our spotless standards. If you are not completely satisfied with any area we cleaned, notify us within 24 hours of the service, and we will send a team back to reclean those specific spots free of charge."
  },
  {
    question: "Are you fully insured against accidental damage?",
    answer: "Yes, Refuse Shine Cleaning LTD carries comprehensive public liability insurance coverage up to £5M. In the highly unlikely event that any of your property or belongings are damaged during cleaning, you are fully protected."
  },
  {
    question: "How do I book or reschedule my cleaning appointment?",
    answer: "You can request a free quote online or call us directly. Once booked, scheduling shifts or rescheduling is free as long as you notify us at least 24 hours before your scheduled appointment."
  }
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
}

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden bg-card/40 dark:bg-secondary/10 pt-8 pb-12 md:pt-10 md:pb-16 lg:pb-20 border-t border-border/40 dark:border-border/10">
      {/* Visual background details */}
      <div className="absolute top-[30%] left-[-10%] -z-10 size-[350px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
      <div className="absolute bottom-[20%] right-[-10%] -z-10 size-[350px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm">
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Common Questions</span>
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed">
            Clear, straightforward answers about our cleaning standards, vetted team, insurance, and booking policies.
          </p>
        </div>

        {/* Accordions List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                variants={itemVariants}
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
                    {item.question}
                  </span>
                  
                  {/* Chevron Icon with rotating animation */}
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
                    {item.answer}
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

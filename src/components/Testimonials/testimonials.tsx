"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Star, CheckCircle, Sparkles } from "lucide-react"

const TESTIMONIALS_DATA = [
  {
    name: "Margaret S.",
    location: "Solihull, West Midlands",
    role: "Residential Homeowner",
    rating: 5,
    verified: true,
    review: "The cleaning team is polite, background checked, and they do an excellent job every week. My kitchen counters and bathroom are spotless. Highly recommended for seniors looking for trustworthy cleaners."
  },
  {
    name: "David K.",
    location: "Birmingham City Centre",
    role: "Airbnb Host",
    rating: 5,
    verified: true,
    review: "Refuse Shine has made managing my Airbnb business incredibly smooth. Their quick guest turnaround is flawless, and guests always comment on how clean and fresh the apartment smells. 5-star service!"
  },
  {
    name: "Eleanor W.",
    location: "Coventry",
    role: "Retired Teacher",
    rating: 5,
    verified: true,
    review: "I have difficulty cleaning high places due to my health. The cleaners are very patient, clean under and behind furniture without being asked, and use non-toxic eco-friendly products. Excellent value."
  }
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
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

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-card/40 dark:bg-secondary/10 pt-8 pb-6 md:pt-10 md:pb-8 lg:pb-10 border-t border-border/40 dark:border-border/10">
      {/* Visual background details */}
      <div className="absolute top-[30%] right-[-10%] -z-10 size-[350px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[10%] left-[-10%] -z-10 size-[350px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Google Reviews Banner */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm">
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Customer Feedback</span>
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-tight">
            What Our Customers{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Say
            </span>
          </h2>

          {/* High Impact Google Rating Badge */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-4 bg-background dark:bg-card border border-border/60 dark:border-border/10 rounded-2xl px-6 py-4 shadow-sm">
            <div className="flex flex-col items-center sm:items-start text-left">
              <span className="text-xl font-black text-foreground tracking-tight flex items-center gap-2">
                <span className="text-blue-500 font-extrabold">G</span>
                <span className="text-red-500 font-extrabold">o</span>
                <span className="text-yellow-500 font-extrabold">o</span>
                <span className="text-blue-500 font-extrabold">g</span>
                <span className="text-green-500 font-extrabold">l</span>
                <span className="text-red-500 font-extrabold">e</span>
                <span className="text-foreground ml-1 font-semibold">Reviews</span>
              </span>
              <span className="text-xs font-bold text-text-gray mt-1 tracking-wide uppercase">Official Platform Rating</span>
            </div>

            <div className="h-px w-10 sm:h-10 sm:w-px bg-border/60 dark:bg-border/20" />

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-foreground">5</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <span className="text-sm font-bold text-foreground/80 dark:text-foreground/90 mt-1">Based on 30+ Customer Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-3xl border border-border/60 bg-background p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-primary/20 dark:border-border/10 dark:bg-card/75 dark:hover:border-accent/30 transition-all duration-300 relative flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/2 dark:to-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Star Rating + Verified tag */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-4.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      <CheckCircle className="size-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Review Message - High Sizing & Contrast */}
                <p className="text-base sm:text-lg text-foreground/85 dark:text-foreground/90 mt-6 leading-relaxed font-semibold">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-8 pt-5 border-t border-border/40 dark:border-border/10">
                <h4 className="text-base font-black text-foreground">{testimonial.name}</h4>
                <p className="text-xs font-bold text-primary dark:text-accent mt-0.5 tracking-wide">{testimonial.role}</p>
                <p className="text-xs text-text-gray dark:text-muted-foreground mt-0.5">{testimonial.location}</p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

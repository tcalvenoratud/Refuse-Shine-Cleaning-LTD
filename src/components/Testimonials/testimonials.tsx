"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Star, CheckCircle, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

const TESTIMONIALS_DATA = [
  {
    name: "monisola Ololade",
    location: "Willenhall, West Midlands",
    role: "Google Review • 2 reviews",
    rating: 5,
    verified: true,
    review: "Excellent experience from start to finish. Refuse Shine Cleaning Ltd provided a high-quality cleaning service with great attention to detail. The team was reliable, respectful of my home, and left everything looking immaculate. It’s refreshing to find a company that genuinely cares about customer satisfaction. I highly recommend their services."
  },
  {
    name: "Mummy Agi",
    location: "Wolverhampton, West Midlands",
    role: "Google Review • 1 review",
    rating: 5,
    verified: true,
    review: "I recently used Refuse Shine Cleaning Ltd for a deep clean of my property, and I couldn’t be happier with the results. The team arrived on time, were polite and professional, and paid great attention to detail. Every room was left spotless, including the kitchen and bathrooms, which looked like new. Communication was excellent throughout, and the service exceeded my expectations. I would highly recommend Refuse Shine Cleaning Ltd to anyone looking for a reliable, high-quality cleaning service. I will definitely be using them again."
  },
  {
    name: "Bbb Uthhh",
    location: "Walsall, West Midlands",
    role: "Google Review • Local Guide",
    rating: 5,
    verified: true,
    review: "Very professional, friendly, and reliable. The cleaning was completed to a high standard, and everything was left sparkling clean. Highly recommended!"
  },
  {
    name: "Patrick Adjaye",
    location: "Dudley, West Midlands",
    role: "Google Review • 3 reviews",
    rating: 5,
    verified: true,
    review: "Honestly they went above and beyond expectations. I’ve been disappointed before by other cleaners but these guys did an outstanding job. Even areas that usually get overlooked were cleaned thoroughly. The team was polite, respectful, and left everything looking immaculate. It's refreshing to find a company that's so reliable and takes pride in their work. I'll definitely be booking again."
  },
  {
    name: "Mama Deboura",
    location: "West Bromwich, West Midlands",
    role: "Google Review • 1 review",
    rating: 5,
    verified: true,
    review: "Absolutely fantastic service from Refuse Shine Cleaning Ltd. The team was friendly, professional, and incredibly thorough. They transformed my home and paid attention to every detail. Everything was left fresh, spotless, and beautifully presented. I’m very impressed with the quality of their work and will definitely be booking them again. Highly recommended!"
  },
  {
    name: "Ivy Taroc",
    location: "Birmingham, West Midlands",
    role: "Google Review • 1 review",
    rating: 5,
    verified: true,
    review: "I was referred to by my elder brother wow incredible Job was done at my newly renovated apartment this cleaning Service is actually the best in the West Midlands"
  },
  {
    name: "Teke Calvenor atud",
    location: "Wolverhampton, West Midlands",
    role: "Google Review • 1 review",
    rating: 5,
    verified: true,
    review: "Wow the best cleaning service in the West Midlands"
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
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }
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
            Trusted Cleaning Reviews from Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
             Happy Customers
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
              <span className="text-sm font-bold text-foreground/80 dark:text-foreground/90 mt-1">Based on 8+ Customer Reviews</span>
            </div>
          </div>
        </div>

        {/* Swipeable Testimonials Carousel */}
        <div className="relative group/carousel">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden lg:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center size-12 rounded-full border border-border/60 bg-background/90 dark:bg-card/90 backdrop-blur-xs text-foreground shadow-md hover:bg-muted hover:border-primary/20 dark:hover:border-accent/30 transition-all cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="size-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden lg:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <button
              onClick={scrollNext}
              className="flex items-center justify-center size-12 rounded-full border border-border/60 bg-background/90 dark:bg-card/90 backdrop-blur-xs text-foreground shadow-md hover:bg-muted hover:border-primary/20 dark:hover:border-accent/30 transition-all cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          <motion.div
            ref={scrollContainerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 scroll-smooth"
          >
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="w-[85%] sm:w-[360px] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] flex-shrink-0 snap-start group/card rounded-3xl border border-border/60 bg-background p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-primary/20 dark:border-border/10 dark:bg-card/75 dark:hover:border-accent/30 transition-all duration-300 relative flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/2 dark:to-accent/2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

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
                        <span>Verified Customer</span>
                      </div>
                    )}
                  </div>

                  {/* Review Message - High Sizing & Contrast */}
                  <p className="text-base sm:text-lg text-foreground/85 dark:text-foreground/90 mt-6 leading-relaxed font-semibold">
                    "{testimonial.review.length > 170 ? testimonial.review.slice(0, 170).trim() + "..." : testimonial.review}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="mt-8 pt-5 border-t border-border/40 dark:border-border/10">
                  <h4 className="text-base font-black text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-text-gray dark:text-muted-foreground mt-1 font-semibold">{testimonial.location}</p>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Global style tag to hide scrollbars */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

      </div>
    </section>
  )
}

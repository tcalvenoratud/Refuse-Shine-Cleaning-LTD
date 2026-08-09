"use client"

import * as React from "react"
import Link from "next/link"
import { Phone, Mail, ArrowRight, CalendarRange } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ServiceCTAProps {
  serviceId: string;
  serviceTitle: string;
}

export function ServiceCTA({ serviceId, serviceTitle }: ServiceCTAProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#050110] text-gray-900 dark:text-white pt-16 pb-20 border-t border-gray-100 dark:border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-[-20%] right-[-20%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-20%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-accent/10 dark:bg-accent/15 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 dark:border-white/10 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-primary dark:text-accent shadow-sm mb-6">
            <CalendarRange className="size-3.5 text-accent animate-pulse" />
            <span>Fast & Simple Booking</span>
          </div>

          <h2 className="text-3xl font-black text-gray-900 dark:text-white sm:text-4xl lg:text-5xl font-heading leading-tight mb-6">
            Ready to Experience the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Absolute Shine?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-semibold mb-8 max-w-2xl mx-auto">
            Book your professional {serviceTitle.toLowerCase()} service across the West Midlands today. Get an instant estimate or call our helpful team to discuss custom checklists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`/book?service=${serviceId}`}>
              <Button
                className="h-12 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl px-10 shadow-lg shadow-primary/25 transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
              >
                <span>Book Your Cleaning</span>
                <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/book">
              <Button
                variant="outline"
                className="h-12 border-2 border-gray-200 dark:border-white/20 text-gray-700 dark:text-white font-bold rounded-xl px-10 hover:bg-gray-50 dark:hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center"
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Quick contact direct options */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400 font-semibold">
            <a href="tel:+447721714435" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
              <Phone className="size-4.5 text-accent" />
              <span>+447721714435</span>
            </a>
            <a href="mailto:info@refuseshinecleaningltd.co.uk" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
              <Mail className="size-4.5 text-accent" />
              <span>info@refuseshinecleaningltd.co.uk</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

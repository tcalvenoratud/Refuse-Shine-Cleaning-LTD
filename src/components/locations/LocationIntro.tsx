"use client"

import * as React from "react"
import { MapPin, CheckCircle2, Sparkles, Clock, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

interface LocationIntroProps {
  locationName: string;
  postcodes: string;
  introTitle: string;
  introParagraphs: string[];
}

export function LocationIntro({ locationName, postcodes, introTitle, introParagraphs }: LocationIntroProps) {
  return (
    <section className="py-8 md:py-10 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Copy (Col span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1 text-xs font-semibold text-accent dark:border-accent/30 dark:bg-accent/10 mb-4">
              <MapPin className="size-3.5" />
              <span>Local Service Overview — {postcodes}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground font-heading leading-tight mb-6">
              {introTitle}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium">
              {introParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Quick Summary Card (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl border border-border/70 dark:border-border/40 bg-card p-6 sm:p-8 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-bl-full pointer-events-none" />
            
            <h3 className="text-lg font-extrabold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="size-4.5 text-accent" />
              <span>At a Glance: {locationName}</span>
            </h3>

            <ul className="space-y-3.5 text-sm text-foreground/85">
              <li className="flex items-start gap-3">
                <div className="size-6 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="size-3.5" />
                </div>
                <div>
                  <strong className="text-foreground block font-bold">Postcode Coverage</strong>
                  <span className="text-muted-foreground">{postcodes} and surrounding districts</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="size-6 rounded-md bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="size-3.5" />
                </div>
                <div>
                  <strong className="text-foreground block font-bold">Service Availability</strong>
                  <span className="text-muted-foreground">Monday to Saturday: 8:00 AM – 6:00 PM</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="size-6 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="size-3.5" />
                </div>
                <div>
                  <strong className="text-foreground block font-bold">Insurance & Guarantee</strong>
                  <span className="text-muted-foreground">Fully vetted staff & public liability insured</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="size-6 rounded-md bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-3.5" />
                </div>
                <div>
                  <strong className="text-foreground block font-bold">Free Estimates</strong>
                  <span className="text-muted-foreground">Transparent quotes with no obligation</span>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

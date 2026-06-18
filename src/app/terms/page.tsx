"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { FileText, Sparkles, CheckCircle2, Shield, Mail, Phone, MapPin } from "lucide-react"

const SECTIONS = [
  { id: "bookings", title: "1. Scope of Service & Bookings" },
  { id: "cancellations", title: "2. Cancellations & Rescheduling" },
  { id: "pricing", title: "3. Payments & Billing Terms" },
  { id: "cooperation", title: "4. Client cooperation & Access" },
  { id: "guarantee", title: "5. Satisfaction Guarantee & Re-Cleans" },
  { id: "liability", title: "6. Liability Boundaries & Damage" },
  { id: "safety", title: "7. Safe Working Environment" },
  { id: "governing", title: "8. Governing Law & Contact" }
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
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
      stiffness: 85,
      damping: 15
    }
  }
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden bg-background pt-12 pb-8 md:pt-16 md:pb-12 border-b border-border/40 dark:border-border/10">
        <div className="absolute top-[-10%] right-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm">
              <FileText className="size-3.5 text-accent animate-pulse" />
              <span>Service Terms Agreement</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl font-heading leading-[1.1]">
              Terms &
              <span className="ml-2 mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
              Effective Date: June 18, 2026 | Last Updated: June 18, 2026
            </p>
          </div>
        </div>
      </section>

      {/* 2. Terms Content Layout */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Table of Contents Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-24 hidden lg:block p-6 rounded-3xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 shadow-sm">
              <h3 className="text-lg font-extrabold text-foreground mb-4 flex items-center gap-2">
                <FileText className="size-5 text-accent" />
                <span>Table of Contents</span>
              </h3>
              <nav className="flex flex-col gap-3">
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="text-base font-semibold text-foreground/70 hover:text-primary dark:hover:text-accent transition-colors scroll-smooth"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Main Details Section */}
            <div className="lg:col-span-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-10"
              >
                
                {/* Section 1: Bookings */}
                <motion.div id="bookings" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    1. Scope of Service & Bookings
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    By requesting a quote or booking services with <strong>Refuse Shine Cleaning LTD</strong>, you enter into a binding agreement to abide by these terms. 
                  </p>
                  <p className="mt-3 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    We agree to provide professional cleaning services matching the agreed-upon package checklist (e.g. Regular House Clean, End of Tenancy, Deep Clean). Standard duration and quotes are initial estimations based on size parameters and may be adjusted if the property condition differs significantly from descriptions.
                  </p>
                </motion.div>

                {/* Section 2: Cancellations */}
                <motion.div id="cancellations" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    2. Cancellations & Rescheduling
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    To maintain an efficient schedule for our vetted cleaners, we enforce the following booking slot policies:
                  </p>
                  <ul className="mt-4 space-y-3 pl-2">
                    {[
                      "24-Hour Notice: Cancellations or rescheduling requests must be submitted at least 24 hours prior to the scheduled cleaning slot.",
                      "Late Cancellations: Bookings cancelled with less than 24 hours' notice are subject to a late cancellation fee equal to 50% of the service cost.",
                      "No Access Lockouts: If our cleaners arrive and cannot gain entry within 20 minutes (e.g. key code issues, client not home), the visit will be cancelled and treated as a lockout slot subject to a full fee."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className="size-4.5 mt-0.5 text-accent shrink-0 opacity-90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Section 3: Pricing & Payments */}
                <motion.div id="pricing" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    3. Payments & Billing Terms
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    Clear invoicing and pricing policies apply to all client transactions:
                  </p>
                  <ul className="mt-4 space-y-3 pl-2">
                    {[
                      "Accepted Payments: Payments can be made safely via credit/debit card transactions or standard bank transfers.",
                      "Billing Schedule: Regular weekly or fortnightly service visits are billed on the day of completion or weekly. End of Tenancy or deep cleans require payments prior to cleaner departure or upon invoicing.",
                      "Overdue Invoices: Overdue payments are subject to a standard reminder process, and Refuse Shine Cleaning LTD reserves the right to suspend future scheduled cleanings until bills are settled."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className="size-4.5 mt-0.5 text-primary shrink-0 opacity-90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Section 4: Client Cooperation & Access */}
                <motion.div id="cooperation" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    4. Client Cooperation & Access
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    To enable our staff to work safely and achieve 5-star results, clients must cooperate on the following:
                  </p>
                  <ul className="mt-4 space-y-3 pl-2">
                    {[
                      "Utilities: The client must supply running hot water, operational electricity, and standard drainage facilities at the property.",
                      "Securing Valuables: Please store away sensitive personal items, gold, jewellery, or high-value fragile assets prior to cleaner arrivals.",
                      "Pet Management: Pets should be secured safely so that staff cleaners can work unhindered through rooms."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className="size-4.5 mt-0.5 text-accent shrink-0 opacity-90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Section 5: Satisfaction Guarantee */}
                <motion.div id="guarantee" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    5. Satisfaction Guarantee & Re-Cleans
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    We stand by our cleaning performance. If you are not satisfied with any specific section cleaned:
                  </p>
                  <ul className="mt-4 space-y-3 pl-2">
                    {[
                      "Report within 24 Hours: You must contact us within 24 hours of service completion to file a complaint.",
                      "Free Re-Clean: We will return to clean the unsatisfactory area free of charge at the earliest available slot.",
                      "No Refund Policy: Please note that we do not issue monetary refunds; our commitment is to correct any issues through physical re-cleans."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className="size-4.5 mt-0.5 text-primary shrink-0 opacity-90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Section 6: Liabilities */}
                <motion.div id="liability" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    6. Liability Boundaries & Damage
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    We are fully insured with comprehensive **£2M public liability insurance**. However, certain liabilities are restricted:
                  </p>
                  <ul className="mt-4 space-y-3 pl-2">
                    {[
                      "Damage Reporting: Any physical property damage caused directly by our cleaner must be reported to our office within 24 hours.",
                      "Fragile Items: We are not liable for fragile, cracked, or poorly secured fixtures (e.g. wobbly shelves, hanging paintings without heavy brackets) that fall during standard dusting.",
                      "Bleach & Severe Stains: Some heavy liquid spillages (old coffee stains on carpets, mold in grout lines) may have permanently discolored surfaces. We cannot guarantee complete extraction without chemical bleaching risk."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className="size-4.5 mt-0.5 text-accent shrink-0 opacity-90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Section 7: Safe Working Environment */}
                <motion.div id="safety" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    7. Safe Working Environment
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    Our staff safety is paramount. We reserve the right to immediately pull our cleaners out of properties containing safety hazards:
                  </p>
                  <ul className="mt-4 space-y-3 pl-2">
                    {[
                      "Biochemical Hazards: Presence of mold infests, animal feces, human waste, or chemical spills not pre-disclosed.",
                      "Harassment: Verbally abusive behavior or physical intimidation towards our cleaning staff will result in instant cancellation without refund."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className="size-4.5 mt-0.5 text-primary shrink-0 opacity-90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Section 8: Governing Law */}
                <motion.div id="governing" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    8. Governing Law & Contact Details
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    This Agreement and all bookings are governed by the laws of <strong>England and Wales</strong>, and both parties submit to the exclusive jurisdiction of the English courts.
                  </p>
                  <p className="mt-3 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    For any questions regarding these Terms & Conditions, please contact us:
                  </p>
                  
                  <div className="mt-6 p-6 rounded-2xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 space-y-3.5 max-w-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="size-5 text-accent shrink-0" />
                      <span className="text-base text-foreground font-extrabold">Refuse Shine Cleaning LTD</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="size-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-base text-foreground/80 dark:text-foreground/90 font-semibold">
                        Flat 24 Lichfield House, 232 Lichfield Road, Willenhall, England, WV12 5AB
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="size-5 text-accent shrink-0" />
                      <a
                        href="mailto:refuseshinecleaningltd@gmail.com"
                        className="text-base font-extrabold text-primary hover:text-primary/85 dark:text-accent dark:hover:text-accent/85 transition-colors break-all"
                      >
                        refuseshinecleaningltd@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="size-5 text-primary shrink-0" />
                      <a
                        href="tel:+447721714435"
                        className="text-base font-extrabold text-primary hover:text-primary/85 dark:text-accent dark:hover:text-accent/85 transition-colors"
                      >
                        +44 7721 714435
                      </a>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

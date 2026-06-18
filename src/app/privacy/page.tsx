"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Shield, Eye, Mail, Phone, MapPin, Sparkles, FileText, CheckCircle2 } from "lucide-react"

const SECTIONS = [
  { id: "introduction", title: "1. Introduction" },
  { id: "collection", title: "2. Information We Collect" },
  { id: "usage", title: "3. How We Use Your Information" },
  { id: "sharing", title: "4. Information Sharing & Third Parties" },
  { id: "security", title: "5. Key Holding & Security Standards" },
  { id: "rights", title: "6. Your Data Rights (GDPR)" },
  { id: "cookies", title: "7. Cookies & Web Tracking" },
  { id: "contact", title: "8. Data Protection Contact" }
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

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Header */}
      <section className="relative overflow-hidden bg-background pt-12 pb-8 md:pt-16 md:pb-12 border-b border-border/40 dark:border-border/10">
        <div className="absolute top-[-10%] right-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm">
              <Shield className="size-3.5 text-accent animate-pulse" />
              <span>Data Protection Guidelines</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl font-heading leading-[1.1]">
              Privacy & Cookie
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Policy Agreement
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
              Effective Date: June 18, 2026 | Last Updated: June 18, 2026
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Policy Content Layout */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Sidebar Table of Contents (Sticky) */}
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

            {/* Right Side Details Column */}
            <div className="lg:col-span-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-10"
              >
                {/* Introduction Section */}
                <motion.div id="introduction" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    1. Introduction & Scope
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    At <strong>Refuse Shine Cleaning LTD</strong>, we value the trust you place in us to clean your homes and commercial properties. We are committed to safeguarding your privacy and protecting the personal data we collect. 
                  </p>
                  <p className="mt-3 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    This Privacy Policy explains how we collect, store, handle, and protect your information when you browse our website, request quotes, book cleaning services, or communicate with us. It aligns with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>.
                  </p>
                </motion.div>

                {/* Collection Section */}
                <motion.div id="collection" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    2. Information We Collect
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    To deliver our professional cleaning plans, we collect essential information, which includes:
                  </p>
                  <ul className="mt-4 space-y-3 pl-2">
                    {[
                      "Contact details: Full name, phone numbers, and email address.",
                      "Property details: Complete physical service address, size of property, and specific room details.",
                      "Preferences: Specific cleaning checklists, instructions (e.g. key locations, pet safety notes).",
                      "Communications: Records of messages sent through our contact forms or emails.",
                      "Website Usage: Technical browsing data, such as IP addresses and device browser types."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className="size-4.5 mt-0.5 text-primary shrink-0 opacity-90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Usage Section */}
                <motion.div id="usage" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    We use your data strictly for legitimate business purposes:
                  </p>
                  <ul className="mt-4 space-y-3 pl-2">
                    {[
                      "Fulfilling and managing bookings or scheduling weekly/fortnightly visits.",
                      "Responding to custom quote calculations and booking requests.",
                      "Handling invoices, payment collections, and receipt records.",
                      "Sending customer support updates or changes to schedule times.",
                      "Improving website responsiveness and optimization."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className="size-4.5 mt-0.5 text-accent shrink-0 opacity-90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Sharing Section */}
                <motion.div id="sharing" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    4. Information Sharing & Third Parties
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    <strong>Refuse Shine Cleaning LTD will never sell or rent your personal information to third parties.</strong>
                  </p>
                  <p className="mt-3 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    We only share your information with:
                  </p>
                  <ul className="mt-3 pl-4 list-disc space-y-2 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                    <li>Our vetted, DBS-checked staff cleaners directly assigned to complete your requested service.</li>
                    <li>Trusted transaction software (payment processors) to verify billing.</li>
                    <li>Regulatory bodies or law enforcement, only where strictly required by UK legislation.</li>
                  </ul>
                </motion.div>

                {/* Security & Key Holding */}
                <motion.div id="security" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    5. Key Holding & Security Standards
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    Many clients request regular cleaning during hours they are not present, which requires us to handle property keys safely:
                  </p>
                  <ul className="mt-4 space-y-3 pl-2">
                    {[
                      "All physical keys are assigned unique codenames to prevent identification of physical addresses.",
                      "Keys are stored in high-security, locked steel safes when not in service use.",
                      "Cleaners undergo strict background vetting (DBS checks) before handling property access.",
                      "We carry comprehensive public liability insurance (£2M) to safeguard your property."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className="size-4.5 mt-0.5 text-primary shrink-0 opacity-90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Rights Section */}
                <motion.div id="rights" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    6. Your Data Rights (GDPR)
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    Under the UK GDPR, you hold specific privacy rights regarding your data:
                  </p>
                  <ul className="mt-4 space-y-3 pl-2">
                    {[
                      "Right of Access: Request a copy of the personal information we hold on you.",
                      "Right to Rectification: Correct any errors in your address, email, or contact details.",
                      "Right to Erasure (Right to be Forgotten): Request deletion of your records.",
                      "Right to Restrict Processing: Request a pause on marketing emails."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-base sm:text-lg text-foreground/85 dark:text-foreground/90 font-semibold">
                        <CheckCircle2 className="size-4.5 mt-0.5 text-accent shrink-0 opacity-90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Cookies Section */}
                <motion.div id="cookies" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    7. Cookies & Web Tracking
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    Our website uses small text files called <strong>Cookies</strong> to optimize page loads, remember theme settings (light/dark mode selections), and analyze standard traffic flows using local web tools. You can configure your browser to reject cookies, though some interactive elements may not load as expected.
                  </p>
                </motion.div>

                {/* Contact Section */}
                <motion.div id="contact" variants={itemVariants} className="scroll-mt-24">
                  <h2 className="text-2xl font-black text-foreground border-b border-border/40 dark:border-border/10 pb-2 mb-4">
                    8. Data Protection Contact
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                    To exercise any data rights or ask queries regarding this Privacy Policy, please get in touch with our representative:
                  </p>
                  
                  <div className="mt-6 p-6 rounded-2xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 space-y-3.5 max-w-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="size-5 text-primary shrink-0" />
                      <span className="text-base text-foreground font-extrabold">Refuse Shine Cleaning LTD (Data Controller)</span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="size-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-base text-foreground/80 dark:text-foreground/90 font-semibold">
                        Flat 24 Lichfield House, 232 Lichfield Road, Willenhall, England, WV12 5AB
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="size-5 text-primary shrink-0" />
                      <a
                        href="mailto:refuseshinecleaningltd@gmail.com"
                        className="text-base font-extrabold text-primary hover:text-primary/85 dark:text-accent dark:hover:text-accent/85 transition-colors break-all"
                      >
                        refuseshinecleaningltd@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="size-5 text-accent shrink-0" />
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

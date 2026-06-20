"use client"

import * as React from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Map,
  Compass
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { trackEvent } from "@/lib/gtag"

const SERVICES_OPTIONS = [
  "Regular House Cleaning",
  "Deep Cleaning",
  "Kitchen Deep Cleaning",
  "Bathroom Cleaning",
  "End of Tenancy Cleaning",
  "Move-In / Move-Out Cleaning",
  "Airbnb & Short Let Cleaning",
  "Carpet Cleaning",
  "Appliance Cleaning",
  "Window Cleaning",
  "Waste Removal",
  "Other / Custom Checklist"
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
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

export default function ContactPage() {
  const [formState, setFormState] = React.useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.")
      }

      setFormState("success")
      trackEvent("contact_submit")
      toast.success("Message sent successfully!")
    } catch (err: any) {
      console.error("Submission error:", err)
      toast.error(err.message || "Failed to send message. Please check your network connection.")
      setFormState("idle")
    }
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    })
    setFormState("idle")
  }

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Header */}
      <section className="relative overflow-hidden bg-background pt-12 pb-8 md:pt-16 md:pb-12 border-b border-border/40 dark:border-border/10">
        <div className="absolute top-[-10%] right-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm">
              <Sparkles className="size-3.5 text-accent animate-pulse" />
              <span>Contact Us Today</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl font-heading leading-[1.1]">
              Get In Touch
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                With Our Friendly Team
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium">
              Have questions, need an estimate, or want to schedule a clean? Reach out using the details below or fill out the quick contact form. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Contact Channels (3-Column Cards) */}
      <section className="py-10 bg-card/30 dark:bg-secondary/5 border-b border-border/40 dark:border-border/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Phone Card */}
            <motion.div
              variants={cardVariants}
              className="flex items-start gap-4 p-6 rounded-2xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary shrink-0 shadow-inner">
                <Phone className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-foreground">Call Us Directly</h3>
                <a
                  href="tel:+447721714435"
                  onClick={() => trackEvent("phone_click")}
                  className="block mt-2 text-[20px] font-black text-primary hover:text-primary/85 dark:text-accent dark:hover:text-accent/85 transition-colors"
                >
                  +44 7721 714435
                </a>
                <p className="mt-1.5 text-base text-foreground/80 dark:text-foreground/90 font-medium flex items-center gap-1.5">
                  <Clock className="size-4 text-primary shrink-0" />
                  <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                </p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              variants={cardVariants}
              className="flex items-start gap-4 p-6 rounded-2xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center p-3 rounded-xl bg-accent/10 text-accent shrink-0 shadow-inner">
                <Mail className="size-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-extrabold text-foreground">Email Our Support</h3>
                <a
                  href="mailto:info@refuseshinecleaningltd.co.uk"
                  onClick={() => trackEvent("email_click")}
                  className="block mt-2 text-[16px] xs:text-[18px] sm:text-[20px] font-black text-primary hover:text-primary/85 dark:text-accent dark:hover:text-accent/85 transition-colors break-all"
                  title="info@refuseshinecleaningltd.co.uk"
                >
                  info@refuseshinecleaningltd.co.uk
                </a>
                <p className="mt-1.5 text-base text-foreground/80 dark:text-foreground/90 font-medium">
                  We reply within 2 business hours.
                </p>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              variants={cardVariants}
              className="flex items-start gap-4 p-6 rounded-2xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary shrink-0 shadow-inner">
                <MapPin className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-foreground">Our Location</h3>
                <p className="mt-2 text-base text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                  Flat 24 Lichfield House, 232 Lichfield Road,<br />
                  Willenhall, England, WV12 5AB
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Form & Map Split Section */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Contact Form (Left Side - 7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-sm hover:shadow-md dark:border-border/10 dark:bg-card/75 transition-shadow relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Mail className="size-32 text-primary" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight flex items-center gap-2 mb-2">
                  Send A Message
                </h2>
                <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium mb-6">
                  Fill out the fields below, and our booking co-ordinator will reach out to organize your request.
                </p>

                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center text-center py-10 my-auto"
                    >
                      <div className="size-16 rounded-full bg-accent/10 dark:bg-accent/20 text-accent flex items-center justify-center shadow-inner mb-6">
                        <CheckCircle2 className="size-10" />
                      </div>
                      <h3 className="text-2xl font-black text-foreground">Message Sent Successfully!</h3>
                      <p className="mt-3 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed font-medium max-w-md mx-auto">
                        Thank you for contacting Refuse Shine Cleaning LTD. Our team will review your submission details and reach back to you within 2 hours.
                      </p>

                      <div className="mt-8 p-4 bg-muted/30 dark:bg-muted/10 border border-border/40 dark:border-border/10 rounded-2xl text-left w-full max-w-sm">
                        <h4 className="text-sm font-bold text-foreground/70 tracking-wider uppercase mb-2">Submitted Request Details:</h4>
                        <p className="text-base text-foreground font-semibold"><span className="text-foreground/60 font-medium">Name:</span> {formData.name}</p>
                        <p className="text-base text-foreground font-semibold"><span className="text-foreground/60 font-medium">Service:</span> {formData.service || "General Inquiry"}</p>
                        <p className="text-base text-foreground font-semibold"><span className="text-foreground/60 font-medium">Phone:</span> {formData.phone}</p>
                      </div>

                      <Button
                        onClick={handleReset}
                        className="mt-8 bg-primary hover:bg-primary/95 text-primary-foreground font-bold h-11 px-6 rounded-xl shadow-md transition-all cursor-pointer"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5 flex-grow flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        {/* Name Input */}
                        <div>
                          <label htmlFor="name" className="block text-base sm:text-lg font-bold text-foreground mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="e.g. Margaret Smith"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground placeholder-foreground/40 font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-border/10 dark:bg-muted/10 transition-all"
                          />
                        </div>

                        {/* Contact info grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Email Input */}
                          <div>
                            <label htmlFor="email" className="block text-base sm:text-lg font-bold text-foreground mb-1.5">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              placeholder="e.g. margaret@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground placeholder-foreground/40 font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-border/10 dark:bg-muted/10 transition-all"
                            />
                          </div>

                          {/* Phone Input */}
                          <div>
                            <label htmlFor="phone" className="block text-base sm:text-lg font-bold text-foreground mb-1.5">
                              Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              placeholder="e.g. +44 7721 714435"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground placeholder-foreground/40 font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-border/10 dark:bg-muted/10 transition-all"
                            />
                          </div>
                        </div>

                        {/* Service Selection Dropdown */}
                        <div>
                          <label htmlFor="service" className="block text-base sm:text-lg font-bold text-foreground mb-1.5">
                            Service You Need <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-border/10 dark:bg-muted/10 transition-all cursor-pointer"
                          >
                            <option value="" disabled className="text-foreground/40 font-semibold">-- Select a service category --</option>
                            {SERVICES_OPTIONS.map((opt, index) => (
                              <option key={index} value={opt} className="text-foreground font-semibold">
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Message Textarea */}
                        <div>
                          <label htmlFor="message" className="block text-base sm:text-lg font-bold text-foreground mb-1.5">
                            Details / Questions <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            placeholder="Please tell us about your property size, requested dates, or special notes..."
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-border/60 bg-background px-4 py-2.5 text-base sm:text-lg text-foreground placeholder-foreground/40 font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:border-border/10 dark:bg-muted/10 transition-all resize-y"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={formState === "submitting"}
                          className="w-full h-12 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
                        >
                          {formState === "submitting" ? (
                            <>
                              <div className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Sending Message...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Inquiry Message</span>
                              <Send className="size-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Map & Regional Coverage (Right Side - 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Map Card */}
              <div className="rounded-3xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 p-4 shadow-sm hover:shadow-md transition-shadow flex-grow flex flex-col">
                <div className="flex items-center gap-2.5 px-2 mb-3">
                  <Map className="size-5.5 text-accent animate-pulse" />
                  <h3 className="text-lg font-extrabold text-foreground">Interactive Local Map</h3>
                </div>

                {/* Responsive Google Maps Embed Wrapper */}
                <div className="relative rounded-2xl overflow-hidden bg-muted border border-border/40 dark:border-border/10 flex-grow min-h-[250px] lg:min-h-0">
                  <iframe
                    title="Refuse Shine Cleaning LTD Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.4022872322305!2d-2.0583594877717467!3d52.599042971987595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870997bc59c95df%3A0xc47e335fbe2c0ecb!2sLichfield%20Rd%2C%20Willenhall%20WV12%205AB%2C%20UK!5e0!3m2!1sen!2s!4v1718712345678!5m2!1sen!2s"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-3 px-2 flex justify-between items-center">
                  <span className="text-sm font-bold text-foreground/70">Willenhall, England, WV12</span>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Flat+24+Lichfield+House,+232+Lighfield+Road,+Willenhall,+England,+WV12+5AB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-extrabold text-primary hover:text-primary/95 dark:text-accent dark:hover:text-accent/95 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Compass className="size-4 shrink-0" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Service Areas Card */}
              <div className="rounded-3xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                  <ShieldCheck className="size-20 text-accent" />
                </div>

                <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2 mb-3">
                  <ShieldCheck className="size-5 text-accent" />
                  <span>West Midlands Coverage</span>
                </h3>

                <p className="text-base text-foreground/80 dark:text-foreground/90 leading-relaxed font-semibold mb-3">
                  We proudly service the entire West Midlands region, including but not limited to:
                </p>

                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {[
                    "Willenhall (Home)",
                    "Wolverhampton",
                    "Walsall",
                    "Dudley",
                    "Birmingham",
                    "West Bromwich",
                    "Stourbridge",
                    "Sutton Coldfield"
                  ].map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-base text-foreground/85 dark:text-foreground/90 font-semibold">
                      <span className="size-2 rounded-full bg-accent shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

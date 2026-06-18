"use client"

import * as React from "react"
import { Hero } from "@/components/Hero/hero"
import { ServicesPreview } from "@/components/Services/services-preview"
import { WhyChooseUs } from "@/components/WhyChooseUs/why-choose-us"
import { HowItWorks } from "@/components/HowItWorks/how-it-works"
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery/before-after-gallery"
import { Testimonials } from "@/components/Testimonials/testimonials"
import { TrustCredentials } from "@/components/TrustCredentials/trust-credentials"
import { FAQ } from "@/components/FAQ/faq"

export default function Home() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <HowItWorks />
      <BeforeAfterGallery />
      <Testimonials />
      <TrustCredentials />
      <FAQ />
    </div>
  )
}


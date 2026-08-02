"use client"

import * as React from "react"
import { Hero } from "@/components/Hero/hero"
import { ServicesPreview } from "@/components/Services/services-preview"
import { WhyChooseUs } from "@/components/WhyChooseUs/why-choose-us"
import { HowItWorks } from "@/components/HowItWorks/how-it-works"
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery/before-after-gallery"
import { Testimonials } from "@/components/Testimonials/testimonials"
import { AreasWeCover } from "@/components/AreasWeCover/areas-we-cover"
import { FAQ } from "@/components/FAQ/faq"

export default function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <HowItWorks />
      <BeforeAfterGallery />
      <Testimonials />
      <AreasWeCover />
      <FAQ />
    </div>
  )
}

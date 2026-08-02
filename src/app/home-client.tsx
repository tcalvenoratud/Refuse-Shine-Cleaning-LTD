"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Hero } from "@/components/Hero/hero"

const ServicesPreview = dynamic(() => import("@/components/Services/services-preview").then(mod => mod.ServicesPreview), { ssr: true })
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs/why-choose-us").then(mod => mod.WhyChooseUs), { ssr: true })
const HowItWorks = dynamic(() => import("@/components/HowItWorks/how-it-works").then(mod => mod.HowItWorks), { ssr: true })
const BeforeAfterGallery = dynamic(() => import("@/components/BeforeAfterGallery/before-after-gallery").then(mod => mod.BeforeAfterGallery), { ssr: true })
const Testimonials = dynamic(() => import("@/components/Testimonials/testimonials").then(mod => mod.Testimonials), { ssr: true })
const AreasWeCover = dynamic(() => import("@/components/AreasWeCover/areas-we-cover").then(mod => mod.AreasWeCover), { ssr: true })
const FAQ = dynamic(() => import("@/components/FAQ/faq").then(mod => mod.FAQ), { ssr: true })

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

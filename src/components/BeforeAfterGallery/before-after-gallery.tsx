"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Sparkles, ArrowRightLeft } from "lucide-react"

const TRANSFORMS_DATA = [
  {
    id: "kitchen",
    label: "Kitchen Cleaning",
    beforeImg: "/assets/before-after/kitchen-before.png",
    afterImg: "/assets/before-after/kitchen-after.png",
    beforeText: "Grease build-up, messy counters, and stovetop grime.",
    afterText: "Polished counters, pristine surfaces, and sterilized appliances."
  },
  {
    id: "bathroom",
    label: "Bathroom Clean",
    beforeImg: "/assets/before-after/bathroom-before.png",
    afterImg: "/assets/before-after/bathroom-after.png",
    beforeText: "Soap scum, heavy limescale deposits, and stained ceramic.",
    afterText: "Sparkling clean white ceramics, sanitized fixtures, and polished chrome."
  },
  {
    id: "carpet",
    label: "Carpet Steam Clean",
    beforeImg: "/assets/before-after/carpet-before.png",
    afterImg: "/assets/before-after/carpet-after.png",
    beforeText: "Coffee spills, embedded dust, and dark traffic stains.",
    afterText: "Stain-free fibers, restored color, and steam-sanitized carpet."
  },
  {
    id: "oven",
    label: "Oven & Appliance",
    beforeImg: "/assets/before-after/oven-before.png",
    afterImg: "/assets/before-after/oven-after.png",
    beforeText: "Burnt carbon deposits, grease spills, and smoky interior walls.",
    afterText: "Like-new metallic shine, clean racks, and crystal clear viewing glass."
  }
]

const tabContentVariants: Variants = {
  hidden: { opacity: 0, x: 15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    x: -15,
    transition: { duration: 0.3, ease: "easeIn" }
  }
}

export function BeforeAfterGallery() {
  const [activeTab, setActiveTab] = React.useState("kitchen")
  const currentTransform = TRANSFORMS_DATA.find((t) => t.id === activeTab) || TRANSFORMS_DATA[0]

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-6 md:pt-10 md:pb-8 lg:pb-10 border-t border-border/40 dark:border-border/10">
      {/* Visual background details */}
      <div className="absolute top-[20%] left-[-10%] -z-10 size-[300px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
      <div className="absolute bottom-[20%] right-[-10%] -z-10 size-[300px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent shadow-sm">
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Visual Clean Gallery</span>
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl font-heading leading-tight">
            Before & After{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed">
            See the difference our professional steam cleaning and deep scrub routines make. Drag or click the tabs below to view real results.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {TRANSFORMS_DATA.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 sm:px-6 rounded-full text-base font-extrabold transition-all cursor-pointer border ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-md"
                    : "bg-card text-foreground/80 border-border hover:bg-muted/50"
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Dynamic Showcase */}
        <div className="relative min-h-[350px] sm:min-h-[450px] md:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabContentVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            >
              {/* Before Card */}
              <div className="flex flex-col rounded-3xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-[250px] sm:h-[350px] w-full">
                  <Image
                    src={currentTransform.beforeImg}
                    alt={`${currentTransform.label} Before`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  {/* High Contrast Red Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white font-extrabold text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-lg shadow-md">
                    Before
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-foreground">Initial Condition</h3>
                  <p className="mt-2 text-base text-foreground/80 dark:text-foreground/90 font-medium">
                    {currentTransform.beforeText}
                  </p>
                </div>
              </div>

              {/* After Card */}
              <div className="flex flex-col rounded-3xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
                {/* Connecting overlay symbol */}
                <div className="absolute top-1/2 left-[-1.75rem] -translate-y-1/2 z-20 hidden md:flex items-center justify-center size-10 rounded-full bg-accent text-white shadow-lg border border-background">
                  <ArrowRightLeft className="size-4" />
                </div>

                <div className="relative h-[250px] sm:h-[350px] w-full">
                  <Image
                    src={currentTransform.afterImg}
                    alt={`${currentTransform.label} After`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  {/* High Contrast Green Badge */}
                  <div className="absolute top-4 left-4 bg-accent text-white font-extrabold text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-lg shadow-md">
                    After
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-foreground flex items-center gap-2">
                    <Sparkles className="size-5 text-accent animate-pulse" />
                    <span>Post-Cleaning Result</span>
                  </h3>
                  <p className="mt-2 text-base text-foreground/80 dark:text-foreground/90 font-medium">
                    {currentTransform.afterText}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

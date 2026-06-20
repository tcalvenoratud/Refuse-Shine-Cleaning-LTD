"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence, Variants } from "framer-motion"
import {
  Sparkles,
  Home,
  PlusCircle,
  Calendar,
  User,
  Check,
  Upload,
  Trash2,
  Plus,
  Minus,
  Info,
  ArrowLeft,
  ArrowRight,
  Lock,
  BadgeHelp,
  ShieldCheck,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { trackEvent } from "@/lib/gtag"

// ----------------------------------------------------
// static datasets
// ----------------------------------------------------
const SERVICES_CARDS = [
  { id: "regular-clean", label: "Regular Clean", desc: "Weekly or fortnightly scheduled sweep" },
  { id: "deep-clean", label: "Deep Clean", desc: "Intensive top-to-bottom sterilization" },
  { id: "end-of-tenancy", label: "End of Tenancy Clean", desc: "Move-out landlord checklist clean" },
  { id: "office-clean", label: "Office Clean", desc: "Commercial & corporate office sweep" },
  { id: "airbnb-clean", label: "Airbnb Clean", desc: "Guest turnaround staging & linen prep" }
]

const FREQUENCY_OPTIONS = [
  { id: "one-off", label: "One-off Clean" },
  { id: "daily", label: "Daily" },
  { id: "weekly", label: "Weekly" },
  { id: "fortnightly", label: "Fortnightly" },
  { id: "monthly", label: "Monthly" }
]

const EXTRAS_CARDS = [
  { id: "oven", label: "Oven Cleaning", desc: "Stripping carbon deposits & burnt grease" },
  { id: "fridge", label: "Fridge Cleaning", desc: "Sanitizing inside panels & drawers" },
  { id: "windows", label: "Inside Windows", desc: "Streak-free glass & frame detailing" },
  { id: "carpet", label: "Carpet Cleaning", desc: "Steam hot-water soil extraction" }
]

const STEPS = [
  { num: 1, label: "Service & Frequency", icon: Sparkles },
  { num: 2, label: "Property & History", icon: Home },
  { num: 3, label: "Extras & Photos", icon: PlusCircle },
  { num: 4, label: "Contact & Schedule", icon: Calendar }
]

const stepVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
}

// ----------------------------------------------------
// Main Wizard Component
// ----------------------------------------------------
function BookingWizardContent() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get("service") || "regular-clean"

  const [step, setStep] = React.useState(1)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  // Form states
  const [selectedService, setSelectedService] = React.useState(initialService)
  const [selectedFrequency, setSelectedFrequency] = React.useState("one-off")

  // Property details
  const [bedrooms, setBedrooms] = React.useState(2)
  const [bathrooms, setBathrooms] = React.useState(1)
  const [livingRooms, setLivingRooms] = React.useState(1)
  const [propertySize, setPropertySize] = React.useState("")

  // Occupants
  const [adults, setAdults] = React.useState(2)
  const [children, setChildren] = React.useState(0)
  const [hasPets, setHasPets] = React.useState("no")
  const [petDetails, setPetDetails] = React.useState("")

  // History
  const [lastCleaned, setLastCleaned] = React.useState("within-month")
  const [isHeavilySoiled, setIsHeavilySoiled] = React.useState("no")

  // Extras & requests
  const [selectedExtras, setSelectedExtras] = React.useState<string[]>([])
  const [specialRequests, setSpecialRequests] = React.useState("")
  const [uploadedPhotos, setUploadedPhotos] = React.useState<{ name: string; size: number; preview: string }[]>([])

  // Contact details & Appointment
  const [preferredDate, setPreferredDate] = React.useState("")
  const [preferredTime, setPreferredTime] = React.useState("morning")
  const [clientName, setClientName] = React.useState("")
  const [clientPhone, setClientPhone] = React.useState("")
  const [clientEmail, setClientEmail] = React.useState("")
  const [clientAddress, setClientAddress] = React.useState("")

  // Pre-select service if URL param updates
  React.useEffect(() => {
    if (searchParams.get("service")) {
      setSelectedService(searchParams.get("service") as string)
    }
  }, [searchParams])



  const handleExtraToggle = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Client-side image compression helper using Canvas
  const compressImage = (base64Str: string, maxWidth = 1200, maxHeight = 1200, quality = 0.7): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = base64Str
      img.onload = () => {
        const canvas = document.createElement("canvas")
        let width = img.width
        let height = img.height

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width)
            width = maxWidth
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height)
            height = maxHeight
          }
        }

        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext("2d")
        if (!ctx) {
          resolve(base64Str)
          return
        }

        ctx.drawImage(img, 0, 0, width, height)
        const compressedDataUrl = canvas.toDataURL("image/jpeg", quality)
        resolve(compressedDataUrl)
      }
      img.onerror = (err) => {
        reject(err)
      }
    })
  }

  // Handle Photo selection and preview mapping with compression
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      filesArray.forEach((file) => {
        const reader = new FileReader()
        reader.onloadend = async () => {
          try {
            const rawBase64 = reader.result as string
            const compressedBase64 = await compressImage(rawBase64, 1200, 1200, 0.7)
            const approximateSize = Math.round((compressedBase64.length * 3) / 4)

            setUploadedPhotos((prev) => [
              ...prev,
              { name: file.name, size: approximateSize, preview: compressedBase64 }
            ])
          } catch (compressErr) {
            console.error("Compression error:", compressErr)
            setUploadedPhotos((prev) => [
              ...prev,
              { name: file.name, size: file.size, preview: reader.result as string }
            ])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleRemovePhoto = (photoIndex: number) => {
    setUploadedPhotos((prev) => prev.filter((_, idx) => idx !== photoIndex))
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 4) {
      setStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        selectedService,
        selectedFrequency,
        bedrooms,
        bathrooms,
        livingRooms,
        propertySize,
        adults,
        children,
        hasPets,
        petDetails,
        lastCleaned,
        isHeavilySoiled,
        selectedExtras,
        specialRequests,
        uploadedPhotos,
        preferredDate,
        preferredTime,
        clientName,
        clientPhone,
        clientEmail,
        clientAddress
      }

      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit booking inquiry. Please try again.")
      }

      setIsSuccess(true)
      trackEvent("complete_booking")
      toast.success("Booking request sent successfully!")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err: any) {
      console.error("Booking submit error:", err)
      toast.error(err.message || "Failed to submit request. Please verify details.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Title Header */}
      <section className="relative overflow-hidden bg-background pt-12 pb-8 md:pt-16 md:pb-12 border-b border-border/40 dark:border-border/10">
        <div className="absolute top-[-10%] right-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] -z-10 size-[300px] sm:size-[500px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl font-heading leading-[1.1]">
              Book Your Service
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Instantly Online
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium">
              Configure your requirements, select optional extra details, and request a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Layout Section */}
      <section className="py-12 bg-background flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {isSuccess ? (
            // Success Card State
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center p-8 sm:p-12 rounded-3xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 shadow-lg"
            >
              <div className="size-20 rounded-full bg-accent/10 dark:bg-accent/20 text-accent flex items-center justify-center shadow-inner mx-auto mb-6">
                <CheckCircle2 className="size-12" />
              </div>
              <h2 className="text-3xl font-black text-foreground">Booking Request Submitted!</h2>
              <p className="mt-4 text-base sm:text-lg text-foreground/80 dark:text-foreground/90 font-medium leading-relaxed">
                Thank you, <strong>{clientName}</strong>! We have received your booking details and have locked in your preferred time slot of <strong>{preferredDate} ({preferredTime === "morning" ? "Morning 8am-12pm" : preferredTime === "afternoon" ? "Afternoon 12pm-4pm" : "Late Afternoon 4pm-6pm"})</strong>.
              </p>

              <div className="mt-8 p-6 bg-muted/40 dark:bg-muted/10 border border-border/40 dark:border-border/10 rounded-2xl text-left space-y-2">
                <h3 className="text-sm font-bold text-foreground/70 tracking-wider uppercase mb-3 border-b border-border/40 pb-1.5">Booking Reference Summary:</h3>
                <p className="text-base text-foreground font-semibold"><span className="text-foreground/60 font-medium">Requested Plan:</span> {SERVICES_CARDS.find(s => s.id === selectedService)?.label}</p>
                <p className="text-base text-foreground font-semibold"><span className="text-foreground/60 font-medium">Frequency:</span> {FREQUENCY_OPTIONS.find(f => f.id === selectedFrequency)?.label}</p>
                <p className="text-base text-foreground font-semibold"><span className="text-foreground/60 font-medium">Bedrooms:</span> {bedrooms} | <span className="text-foreground/60 font-medium">Bathrooms:</span> {bathrooms}</p>
                {selectedExtras.length > 0 && (
                  <p className="text-base text-foreground font-semibold"><span className="text-foreground/60 font-medium">Extras:</span> {selectedExtras.map(id => EXTRAS_CARDS.find(e => e.id === id)?.label).join(", ")}</p>
                )}
                <p className="text-base text-foreground font-semibold"><span className="text-foreground/60 font-medium">Contact Phone:</span> {clientPhone}</p>
              </div>

              <p className="mt-6 text-sm sm:text-base text-foreground/70 font-semibold italic">
                Our booking co-ordinator will telephone you shortly to confirm details.
              </p>

              <Button
                onClick={() => {
                  setStep(1)
                  setIsSuccess(false)
                  setClientName("")
                  setClientPhone("")
                  setClientEmail("")
                  setClientAddress("")
                  setSelectedExtras([])
                  setUploadedPhotos([])
                  setPreferredDate("")
                }}
                className="mt-8 bg-primary hover:bg-primary/95 text-primary-foreground font-bold h-12 px-8 rounded-xl shadow-md cursor-pointer"
              >
                Book Another Service
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

              {/* Form Area - 8 Columns */}
              <div className="lg:col-span-8 space-y-6">

                {/* 1. Step Progress Bar */}
                <div className="rounded-2xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 p-4 sm:p-6 shadow-sm">
                  <div className="flex justify-between items-center relative z-10">
                    {STEPS.map((s) => {
                      const IconComp = s.icon
                      const isCompleted = step > s.num
                      const isCurrent = step === s.num
                      return (
                        <div key={s.num} className="flex flex-col items-center flex-1 relative">
                          <div
                            className={`size-10 rounded-full flex items-center justify-center border-2 font-extrabold text-sm transition-all duration-300 ${isCompleted
                              ? "bg-accent border-accent text-white"
                              : isCurrent
                                ? "bg-primary border-primary text-white shadow-md ring-4 ring-primary/20"
                                : "bg-background border-border text-foreground/50"
                              }`}
                          >
                            {isCompleted ? <Check className="size-5" /> : s.num}
                          </div>
                          <span className={`mt-2 text-xs sm:text-sm font-extrabold text-center hidden sm:block ${isCurrent ? "text-primary dark:text-accent" : "text-foreground/60"}`}>
                            {s.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Progress Line */}
                  <div className="relative h-1.5 bg-muted dark:bg-muted/10 rounded-full mt-4 overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
                      style={{ width: `${((step - 1) / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* 2. Step Fields Form */}
                <div className="rounded-3xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 p-6 sm:p-8 shadow-sm">
                  <AnimatePresence mode="wait">

                    {/* STEP 1 */}
                    {step === 1 && (
                      <motion.div
                        key="step-1"
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-2xl font-black text-foreground">Select Cleaning Service</h2>
                          <p className="text-base text-foreground/70 mt-1 font-medium">Choose which cleaning package matches your needs.</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {SERVICES_CARDS.map((item) => (
                              <button
                                type="button"
                                key={item.id}
                                onClick={() => setSelectedService(item.id)}
                                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${selectedService === item.id
                                  ? "border-primary bg-primary/5 dark:border-accent dark:bg-accent/10 shadow-sm"
                                  : "border-border hover:bg-muted/30 dark:border-border/10"
                                  }`}
                              >
                                {selectedService === item.id && (
                                  <div className="absolute top-3 right-3 size-5 rounded-full bg-primary dark:bg-accent text-white flex items-center justify-center">
                                    <Check className="size-3.5 stroke-[3]" />
                                  </div>
                                )}
                                <h3 className="text-lg font-extrabold text-foreground">{item.label}</h3>
                                <p className="text-sm text-foreground/80 mt-1 leading-snug font-semibold">{item.desc}</p>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-border/40 dark:border-border/10 pt-6">
                          <h2 className="text-2xl font-black text-foreground">Cleaning Frequency</h2>
                          <p className="text-base text-foreground/70 mt-1 font-medium">How often should we visit your property?</p>

                          <div className="flex flex-wrap gap-3 mt-4">
                            {FREQUENCY_OPTIONS.map((item) => (
                              <button
                                type="button"
                                key={item.id}
                                onClick={() => setSelectedFrequency(item.id)}
                                className={`px-5 py-2.5 rounded-full border text-base font-extrabold transition-all cursor-pointer ${selectedFrequency === item.id
                                  ? "bg-primary border-primary text-white shadow-sm"
                                  : "bg-background border-border text-foreground/80 hover:bg-muted/30 dark:border-border/10 dark:bg-muted/5"
                                  }`}
                              >
                                {item.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <Button
                            onClick={handleNextStep}
                            className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold h-12 px-6 rounded-xl flex items-center gap-2 transition-all cursor-pointer"
                          >
                            <span>Next Step</span>
                            <ArrowRight className="size-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                      <motion.div
                        key="step-2"
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-6"
                      >
                        <h2 className="text-2xl font-black text-foreground">Property Details</h2>
                        <p className="text-base text-foreground/70 -mt-2 font-medium">Specify details of the property needing the clean.</p>

                        {/* Counters Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                          {/* Bedrooms */}
                          <div className="flex flex-col items-center p-4 rounded-2xl border border-border/60 bg-muted/20 dark:border-border/10">
                            <label className="text-base font-extrabold text-foreground mb-3">Bedrooms</label>
                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                onClick={() => setBedrooms(prev => Math.max(1, prev - 1))}
                                className="size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors cursor-pointer"
                              >
                                <Minus className="size-4" />
                              </button>
                              <span className="text-xl font-black text-foreground w-6 text-center">{bedrooms}</span>
                              <button
                                type="button"
                                onClick={() => setBedrooms(prev => prev + 1)}
                                className="size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors cursor-pointer"
                              >
                                <Plus className="size-4" />
                              </button>
                            </div>
                          </div>

                          {/* Bathrooms */}
                          <div className="flex flex-col items-center p-4 rounded-2xl border border-border/60 bg-muted/20 dark:border-border/10">
                            <label className="text-base font-extrabold text-foreground mb-3">Bathrooms</label>
                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                onClick={() => setBathrooms(prev => Math.max(1, prev - 1))}
                                className="size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors cursor-pointer"
                              >
                                <Minus className="size-4" />
                              </button>
                              <span className="text-xl font-black text-foreground w-6 text-center">{bathrooms}</span>
                              <button
                                type="button"
                                onClick={() => setBathrooms(prev => prev + 1)}
                                className="size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors cursor-pointer"
                              >
                                <Plus className="size-4" />
                              </button>
                            </div>
                          </div>

                          {/* Living Rooms */}
                          <div className="flex flex-col items-center p-4 rounded-2xl border border-border/60 bg-muted/20 dark:border-border/10">
                            <label className="text-base font-extrabold text-foreground mb-3">Living Rooms</label>
                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                onClick={() => setLivingRooms(prev => Math.max(0, prev - 1))}
                                className="size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors cursor-pointer"
                              >
                                <Minus className="size-4" />
                              </button>
                              <span className="text-xl font-black text-foreground w-6 text-center">{livingRooms}</span>
                              <button
                                type="button"
                                onClick={() => setLivingRooms(prev => prev + 1)}
                                className="size-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors cursor-pointer"
                              >
                                <Plus className="size-4" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Property Size */}
                        <div>
                          <label htmlFor="propertySize" className="block text-base sm:text-lg font-bold text-foreground mb-1.5">
                            Property Size (Approx. Sq. Ft / Sq. M) <span className="text-foreground/40 font-medium">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            id="propertySize"
                            placeholder="e.g. 1,200 sq. ft or 3 Bedroom Semi-detached"
                            value={propertySize}
                            onChange={(e) => setPropertySize(e.target.value)}
                            className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground placeholder-foreground/40 font-semibold focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all"
                          />
                        </div>

                        {/* Occupants Details */}
                        <div className="border-t border-border/40 dark:border-border/10 pt-6">
                          <h3 className="text-xl font-black text-foreground mb-3">Occupants & Pets</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center justify-between p-4 rounded-xl border border-border/60 bg-muted/10 dark:border-border/10">
                              <span className="text-base font-bold text-foreground">Adults in Household</span>
                              <div className="flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={() => setAdults(prev => Math.max(1, prev - 1))}
                                  className="size-8 rounded-full border flex items-center justify-center hover:bg-background cursor-pointer"
                                >
                                  <Minus className="size-3.5" />
                                </button>
                                <span className="text-base font-bold text-foreground w-4 text-center">{adults}</span>
                                <button
                                  type="button"
                                  onClick={() => setAdults(prev => prev + 1)}
                                  className="size-8 rounded-full border flex items-center justify-center hover:bg-background cursor-pointer"
                                >
                                  <Plus className="size-3.5" />
                                </button>
                              </div>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl border border-border/60 bg-muted/10 dark:border-border/10">
                              <span className="text-base font-bold text-foreground">Children in Household</span>
                              <div className="flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                                  className="size-8 rounded-full border flex items-center justify-center hover:bg-background cursor-pointer"
                                >
                                  <Minus className="size-3.5" />
                                </button>
                                <span className="text-base font-bold text-foreground w-4 text-center">{children}</span>
                                <button
                                  type="button"
                                  onClick={() => setChildren(prev => prev + 1)}
                                  className="size-8 rounded-full border flex items-center justify-center hover:bg-background cursor-pointer"
                                >
                                  <Plus className="size-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-base font-bold text-foreground mb-1.5">Any Pets?</label>
                              <select
                                value={hasPets}
                                onChange={(e) => setHasPets(e.target.value)}
                                className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all cursor-pointer"
                              >
                                <option value="no">No Pets</option>
                                <option value="yes">Yes (Dogs/Cats/Other)</option>
                              </select>
                            </div>

                            {hasPets === "yes" && (
                              <div>
                                <label className="block text-base font-bold text-foreground mb-1.5">Pet details / Notes <span className="text-red-500">*</span></label>
                                <input
                                  type="text"
                                  required
                                  placeholder="e.g. 1 Friendly Golden Retriever"
                                  value={petDetails}
                                  onChange={(e) => setPetDetails(e.target.value)}
                                  className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all"
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Cleaning History */}
                        <div className="border-t border-border/40 dark:border-border/10 pt-6">
                          <h3 className="text-xl font-black text-foreground mb-3">Cleaning History</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-base font-bold text-foreground mb-1.5">When was it last cleaned?</label>
                              <select
                                value={lastCleaned}
                                onChange={(e) => setLastCleaned(e.target.value)}
                                className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all cursor-pointer"
                              >
                                <option value="within-week">Within last week</option>
                                <option value="within-month">Within last month</option>
                                <option value="1-3-months">1 - 3 months ago</option>
                                <option value="3-plus-months">3+ months ago</option>
                                <option value="never">Never / Don't know</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-base font-bold text-foreground mb-1.5">Is property heavily soiled?</label>
                              <select
                                value={isHeavilySoiled}
                                onChange={(e) => setIsHeavilySoiled(e.target.value)}
                                className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all cursor-pointer"
                              >
                                <option value="no">No — Standard condition</option>
                                <option value="yes">Yes — Heavy grease/grime/construction dust</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Navigation Row */}
                        <div className="pt-4 border-t border-border/40 dark:border-border/10 flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handlePrevStep}
                            className="border-2 border-border text-foreground font-bold h-12 px-6 rounded-xl flex items-center gap-2 cursor-pointer"
                          >
                            <ArrowLeft className="size-4" />
                            <span>Back</span>
                          </Button>

                          <Button
                            onClick={handleNextStep}
                            disabled={hasPets === "yes" && !petDetails}
                            className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold h-12 px-6 rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span>Next Step</span>
                            <ArrowRight className="size-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                      <motion.div
                        key="step-3"
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-6"
                      >
                        <div>
                          <h2 className="text-2xl font-black text-foreground">Select Booking Extras</h2>
                          <p className="text-base text-foreground/70 mt-1 font-medium">Add specialty services to your package checklist.</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {EXTRAS_CARDS.map((item) => {
                              const isChecked = selectedExtras.includes(item.id)
                              return (
                                <button
                                  type="button"
                                  key={item.id}
                                  onClick={() => handleExtraToggle(item.id)}
                                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${isChecked
                                    ? "border-primary bg-primary/5 dark:border-accent dark:bg-accent/10 shadow-sm"
                                    : "border-border hover:bg-muted/30 dark:border-border/10"
                                    }`}
                                >
                                  {isChecked && (
                                    <div className="absolute top-3 right-3 size-5 rounded-full bg-primary dark:bg-accent text-white flex items-center justify-center">
                                      <Check className="size-3.5 stroke-[3]" />
                                    </div>
                                  )}
                                  <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                                    <span>{item.label}</span>
                                  </h3>
                                  <p className="text-sm text-foreground/80 mt-1 leading-snug font-semibold">{item.desc}</p>
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Special request details */}
                        <div className="border-t border-border/40 dark:border-border/10 pt-6">
                          <label htmlFor="requests" className="block text-base sm:text-lg font-bold text-foreground mb-1.5">
                            Other Special Requests / Notes <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="requests"
                            required
                            rows={3}
                            placeholder="Tell us about lock codes, rubbish disposal, delicate antiques, or write 'None' if you have no requests..."
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                            className="w-full rounded-xl border border-border/60 bg-background px-4 py-2.5 text-base sm:text-lg text-foreground placeholder-foreground/40 font-semibold focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all resize-y"
                          />
                        </div>

                        {/* Photos Upload */}
                        <div className="border-t border-border/40 dark:border-border/10 pt-6">
                          <h3 className="text-xl font-black text-foreground">Upload Room Photos <span className="text-red-500">*</span></h3>
                          <p className="text-sm text-foreground/70 mt-1 font-medium">Adding at least one photo of the rooms is required to help verify property condition.</p>

                          <div className="mt-4 flex flex-col items-center justify-center border-2 border-dashed border-border/60 hover:border-primary/50 dark:border-border/10 rounded-2xl p-6 bg-muted/5 transition-colors cursor-pointer relative group">
                            <input
                              type="file"
                              multiple
                              accept="image/*"
                              onChange={handlePhotoChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <Upload className="size-8 text-foreground/40 group-hover:text-primary transition-colors" />
                            <span className="mt-2 text-base font-bold text-foreground">Drag & drop files or click to browse</span>
                            <span className="text-xs text-foreground/50 mt-1">Accepts PNG, JPG, JPEG (Max 5MB each)</span>
                          </div>

                          {/* Photos Thumbnail Preview List */}
                          {uploadedPhotos.length > 0 && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                              {uploadedPhotos.map((photo, index) => (
                                <div key={index} className="relative rounded-xl overflow-hidden border border-border/60 bg-card shadow-sm group aspect-square">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={photo.preview}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                      type="button"
                                      onClick={() => handleRemovePhoto(index)}
                                      className="size-8 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors cursor-pointer"
                                    >
                                      <Trash2 className="size-4.5" />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Navigation Row */}
                        <div className="pt-4 border-t border-border/40 dark:border-border/10 flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handlePrevStep}
                            className="border-2 border-border text-foreground font-bold h-12 px-6 rounded-xl flex items-center gap-2 cursor-pointer"
                          >
                            <ArrowLeft className="size-4" />
                            <span>Back</span>
                          </Button>

                          <Button
                            onClick={handleNextStep}
                            disabled={!specialRequests || uploadedPhotos.length === 0}
                            className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold h-12 px-6 rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <span>Next Step</span>
                            <ArrowRight className="size-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4 */}
                    {step === 4 && (
                      <motion.div
                        key="step-4"
                        variants={stepVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-5"
                      >
                        <h2 className="text-2xl font-black text-foreground">Appointment Schedule & Contact</h2>
                        <p className="text-base text-foreground/70 -mt-2 font-medium">Please enter your preferred slot and delivery information.</p>

                        {/* Preferred slot picker */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="prefDate" className="block text-base font-bold text-foreground mb-1.5">
                              Preferred Appointment Date <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="date"
                              id="prefDate"
                              required
                              value={preferredDate}
                              onChange={(e) => setPreferredDate(e.target.value)}
                              className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground font-semibold focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all cursor-pointer"
                            />
                          </div>

                          <div>
                            <label htmlFor="prefTime" className="block text-base font-bold text-foreground mb-1.5">
                              Preferred Time Slot <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="prefTime"
                              required
                              value={preferredTime}
                              onChange={(e) => setPreferredTime(e.target.value)}
                              className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all cursor-pointer"
                            >
                              <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                              <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                              <option value="late-afternoon">Late Afternoon (4:00 PM - 6:00 PM)</option>
                            </select>
                          </div>
                        </div>

                        {/* Customer details inputs */}
                        <div className="border-t border-border/40 dark:border-border/10 pt-4 space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Name */}
                            <div className="md:col-span-1">
                              <label htmlFor="cName" className="block text-base font-bold text-foreground mb-1.5">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="cName"
                                required
                                placeholder="e.g. Margaret Smith"
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground placeholder-foreground/40 font-semibold focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all"
                              />
                            </div>

                            {/* Phone */}
                            <div>
                              <label htmlFor="cPhone" className="block text-base font-bold text-foreground mb-1.5">
                                Phone Number <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="tel"
                                id="cPhone"
                                required
                                placeholder="e.g. +44 7721 714435"
                                value={clientPhone}
                                onChange={(e) => setClientPhone(e.target.value)}
                                className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground placeholder-foreground/40 font-semibold focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all"
                              />
                            </div>

                            {/* Email */}
                            <div>
                              <label htmlFor="cEmail" className="block text-base font-bold text-foreground mb-1.5">
                                Email Address <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="email"
                                id="cEmail"
                                required
                                placeholder="e.g. margaret@example.com"
                                value={clientEmail}
                                onChange={(e) => setClientEmail(e.target.value)}
                                className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground placeholder-foreground/40 font-semibold focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all"
                              />
                            </div>
                          </div>

                          {/* Address */}
                          <div>
                            <label htmlFor="cAddress" className="block text-base font-bold text-foreground mb-1.5">
                              Service Property Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="cAddress"
                              required
                              placeholder="e.g. Flat 24 Lichfield House, 232 Lichfield Road, Willenhall, England, WV12 5AB"
                              value={clientAddress}
                              onChange={(e) => setClientAddress(e.target.value)}
                              className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 py-2 text-base sm:text-lg text-foreground placeholder-foreground/40 font-semibold focus:outline-none focus:ring-2 focus:ring-primary dark:border-border/10 dark:bg-muted/10 transition-all"
                            />
                          </div>
                        </div>

                        {/* Navigation Row */}
                        <div className="pt-4 border-t border-border/40 dark:border-border/10 flex justify-between">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handlePrevStep}
                            className="border-2 border-border text-foreground font-bold h-12 px-6 rounded-xl flex items-center gap-2 cursor-pointer"
                          >
                            <ArrowLeft className="size-4" />
                            <span>Back</span>
                          </Button>

                          <Button
                            onClick={handleFinalSubmit}
                            disabled={isSubmitting || !clientName || !clientPhone || !clientEmail || !clientAddress || !preferredDate}
                            className="bg-accent hover:bg-accent/95 text-white font-bold h-12 px-8 rounded-xl flex items-center gap-2 cursor-pointer shadow-md shadow-accent/20"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Submitting...</span>
                              </>
                            ) : (
                              <>
                                <span>Confirm Booking</span>
                                <Check className="size-4 stroke-[3]" />
                              </>
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              </div>

              {/* Estimation Summary Box - 4 Columns */}
              <div className="lg:col-span-4 sticky top-24">
                <div className="rounded-3xl border border-border/60 bg-card dark:border-border/10 dark:bg-card/75 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 -z-10 size-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full" />

                  <div>
                    <h3 className="text-lg font-black text-foreground pb-3 border-b border-border/40 dark:border-border/10 mb-4 flex items-center gap-2">
                      <ShieldCheck className="size-5.5 text-accent animate-pulse" />
                      <span>Booking Summary</span>
                    </h3>

                    {/* Summary list */}
                    <div className="space-y-4 text-base font-semibold">

                      {/* Service */}
                      <div className="flex justify-between">
                        <span className="text-foreground/60 font-medium">Service Plan:</span>
                        <span className="text-foreground font-bold">{SERVICES_CARDS.find((s) => s.id === selectedService)?.label}</span>
                      </div>

                      {/* Frequency */}
                      <div className="flex justify-between">
                        <span className="text-foreground/60 font-medium">Frequency:</span>
                        <span className="text-foreground font-bold">{FREQUENCY_OPTIONS.find((f) => f.id === selectedFrequency)?.label}</span>
                      </div>

                      {/* Rooms */}
                      <div className="flex justify-between">
                        <span className="text-foreground/60 font-medium">Rooms:</span>
                        <span className="text-foreground font-bold">
                          {bedrooms} Bed | {bathrooms} Bath | {livingRooms} Liv
                        </span>
                      </div>

                      {/* Heavily soiled */}
                      {isHeavilySoiled === "yes" && (
                        <div className="flex justify-between text-yellow-600 dark:text-yellow-400">
                          <span>Heavy Soiling:</span>
                          <span className="font-bold">Yes</span>
                        </div>
                      )}

                      {/* Extras list */}
                      {selectedExtras.length > 0 && (
                        <div className="pt-2 border-t border-border/30 dark:border-border/10 space-y-1">
                          <span className="text-xs font-bold text-foreground/50 tracking-wider uppercase block">Booking Extras:</span>
                          {selectedExtras.map((extraId) => {
                            const extraObj = EXTRAS_CARDS.find((e) => e.id === extraId)
                            return (
                              <div key={extraId} className="flex justify-between text-sm">
                                <span className="text-foreground/70 font-semibold">{extraObj?.label}:</span>
                                <span className="font-bold">Selected</span>
                              </div>
                            )
                          })}
                        </div>
                      )}

                      {/* Preferred slot */}
                      {preferredDate && (
                        <div className="pt-2 border-t border-border/30 dark:border-border/10 space-y-1">
                          <span className="text-xs font-bold text-foreground/50 tracking-wider uppercase block">Scheduled Slot:</span>
                          <div className="text-sm font-semibold text-foreground/80 leading-relaxed">
                            Date: {preferredDate}<br />
                            Time: {preferredTime === "morning" ? "Morning 8am-12pm" : preferredTime === "afternoon" ? "Afternoon 12pm-4pm" : "Late Afternoon 4pm-6pm"}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Next Steps Info */}
                  <div className="mt-8 pt-6 border-t border-border/40 dark:border-border/10">
                    <div className="bg-primary/5 dark:bg-accent/5 border border-primary/20 dark:border-accent/20 rounded-2xl p-4">
                      <span className="text-xs font-bold text-foreground/60 tracking-wider uppercase block mb-2 text-center">What's Next?</span>
                      <div className="text-sm text-foreground/85 leading-relaxed flex gap-2 items-start font-semibold">
                        <Info className="size-4.5 text-primary shrink-0 mt-0.5" />
                        <span>Our team will review your property configuration, photo uploads, and preferred date, then contact you directly with a personalized, no-obligation quote.</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  )
}

export default function BookPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Booking Wizard...</div>}>
      <BookingWizardContent />
    </React.Suspense>
  )
}

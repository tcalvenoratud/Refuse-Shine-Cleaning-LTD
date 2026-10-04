"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/gtag"

export const AREAS_WE_SERVED = [
  { name: "Willenhall", slug: "willenhall", postcode: "WV12 / WV13" },
  { name: "Walsall", slug: "walsall", postcode: "WS1 - WS9" },
  { name: "Wolverhampton", slug: "wolverhampton", postcode: "WV1 - WV11" },
  { name: "Bilston", slug: "bilston", postcode: "WV14" },
  { name: "Dudley", slug: "dudley", postcode: "DY1 - DY3" },
  { name: "Tipton", slug: "tipton", postcode: "DY4" },
  { name: "West Bromwich", slug: "west-bromwich", postcode: "B70 / B71" },
  { name: "Oldbury", slug: "oldbury", postcode: "B68 / B69" },
  { name: "Smethwick", slug: "smethwick", postcode: "B66 / B67" },
  { name: "Sutton Coldfield", slug: "sutton-coldfield", postcode: "B72 - B76" },
  { name: "Brierley Hill", slug: "brierley-hill", postcode: "DY5" },
  { name: "Stourbridge", slug: "stourbridge", postcode: "DY8 / DY9" },
  { name: "Solihull", slug: "solihull", postcode: "B90 - B94" },
  { name: "Tamworth", slug: "tamworth", postcode: "B77 - B79" },
  { name: "Kidderminster", slug: "kidderminster", postcode: "DY10 / DY11" },
  { name: "Stafford", slug: "stafford", postcode: "ST16 - ST18" },
  { name: "Redditch", slug: "redditch", postcode: "B97 / B98" },
  { name: "Aldridge", slug: "aldridge", postcode: "WS9" },
  { name: "Brownhills", slug: "brownhills", postcode: "WS8" },
  { name: "Cannock", slug: "cannock", postcode: "WS11 / WS12" },
  { name: "Rowley Regis", slug: "rowley-regis", postcode: "B65" },
  { name: "Birmingham", slug: "birmingham", postcode: "B1 - B48" },
  { name: "Halesowen", slug: "halesowen", postcode: "B62 / B63" },
]

const PRIMARY_LINKS_BEFORE = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
]

const PRIMARY_LINKS_AFTER = [
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = React.useState(false)
  const [mobileAreasExpanded, setMobileAreasExpanded] = React.useState(false)

  const dropdownContainerRef = React.useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Reset open states on route change
  const [prevPathname, setPrevPathname] = React.useState(pathname)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setIsAreasDropdownOpen(false)
    setIsOpen(false)
  }

  // Close dropdown on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setIsAreasDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setIsAreasDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsAreasDropdownOpen(false)
    }, 180)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* Top utility contact bar on desktop */}
      <div className="hidden border-b border-border/10 bg-secondary py-2 text-xs text-secondary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a
              href="tel:+447721714435"
              onClick={() => trackEvent("phone_click")}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="size-3.5 text-accent" />
              <span>+447721714435</span>
            </a>
            <a
              href="mailto:info@refuseshinecleaningltd.co.uk"
              onClick={() => trackEvent("email_click")}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="size-3.5 text-accent" />
              <span>info@refuseshinecleaningltd.co.uk</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Shine Bright with Refuse Shine Cleaning LTD</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Container (Left) */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform hover:scale-[1.02] cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg border border-border/20 shadow-sm bg-white p-0.5">
            <Image
              src="/assets/logo/logo.jpeg"
              alt="Refuse Shine Cleaning LTD Logo"
              width={56}
              height={56}
              className="object-cover rounded-md"
              loading="lazy"
              decoding="async"
              quality={75}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl sm:text-2xl leading-none tracking-tight text-foreground dark:text-white">
              REFUSE SHINE
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-primary dark:text-accent leading-none mt-1 uppercase">
              Cleaning LTD
            </span>
          </div>
        </Link>

        {/* Right Section: Nav Links + Book Button + Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4 lg:gap-5">
            {/* Links before Areas We Serve (Home, About, Services) */}
            {PRIMARY_LINKS_BEFORE.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-base lg:text-[17px] font-semibold tracking-wide py-1.5 cursor-pointer transition-colors duration-300",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary dark:after:bg-accent after:origin-left after:transition-transform after:duration-300 after:ease-out",
                    isActive
                      ? "text-primary dark:text-accent font-bold after:scale-x-100"
                      : "text-foreground/85 hover:text-primary dark:hover:text-accent after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Areas We Serve - Hover Dropdown */}
            <div
              ref={dropdownContainerRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/locations"
                className={cn(
                  "relative flex items-center gap-1.5 text-base lg:text-[17px] font-semibold tracking-wide py-1.5 cursor-pointer transition-colors duration-300 outline-none",
                  "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary dark:after:bg-accent after:origin-left after:transition-transform after:duration-300 after:ease-out",
                  pathname.startsWith("/locations") || isAreasDropdownOpen
                    ? "text-primary dark:text-accent font-bold after:scale-x-100"
                    : "text-foreground/85 hover:text-primary dark:hover:text-accent after:scale-x-0 hover:after:scale-x-100"
                )}
                aria-expanded={isAreasDropdownOpen}
                aria-haspopup="true"
                aria-label="Areas We Serve Menu"
              >
                <span>Areas We Serve</span>
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-300 ease-out",
                    isAreasDropdownOpen && "rotate-180 text-primary dark:text-accent"
                  )}
                />
              </Link>

              {/* Mega-style Floating Dropdown */}
              <AnimatePresence>
                {isAreasDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-[-140px] lg:right-[-100px] xl:right-[-60px] top-full pt-3 z-50 w-[840px] lg:w-[880px] max-w-[calc(100vw-3rem)] pointer-events-auto"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-border/80 dark:border-border/40 bg-card/95 dark:bg-card/95 backdrop-blur-xl shadow-2xl p-5 ring-1 ring-black/5 dark:ring-white/5">
                      {/* Decorative top accent line */}
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                      {/* Header in Dropdown */}
                      <div className="flex items-center justify-between pb-3 border-b border-border/40">
                        <div className="flex items-center gap-3">
                          <div className="size-8.5 rounded-lg bg-primary/10 dark:bg-accent/15 flex items-center justify-center text-primary dark:text-accent shrink-0">
                            <MapPin className="size-4.5 text-primary dark:text-accent animate-pulse" />
                          </div>
                          <div>
                            <h4 className="text-sm font-extrabold text-foreground tracking-tight flex items-center gap-2">
                              Areas We Proudly Serve
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/20 uppercase tracking-wider">
                                {AREAS_WE_SERVED.length} Locations
                              </span>
                            </h4>
                            <p className="text-[11px] text-muted-foreground font-medium">
                              Fast, fully insured cleaning teams across the West Midlands
                            </p>
                          </div>
                        </div>

                        <Link
                          href="/locations"
                          onClick={() => setIsAreasDropdownOpen(false)}
                          className="text-xs font-bold text-primary dark:text-accent hover:underline flex items-center gap-1 group/view"
                        >
                          <span>All Service Areas</span>
                          <ArrowRight className="size-3 transition-transform group-hover/view:translate-x-0.5" />
                        </Link>
                      </div>

                      {/* Locations Grid (4 Columns) */}
                      <div className="grid grid-cols-4 gap-2.5 py-3.5">
                        {AREAS_WE_SERVED.map((area) => (
                          <Link
                            key={area.slug}
                            href={`/locations/${area.slug}`}
                            onClick={() => setIsAreasDropdownOpen(false)}
                            className="group/loc flex items-center gap-2.5 p-2 rounded-xl border border-border/40 hover:border-primary/40 dark:hover:border-accent/40 bg-muted/20 hover:bg-primary/5 dark:hover:bg-accent/10 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
                          >
                            <div className="size-6.5 rounded-lg bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent flex items-center justify-center shrink-0 group-hover/loc:bg-primary group-hover/loc:text-white dark:group-hover/loc:bg-accent dark:group-hover/loc:text-white transition-all duration-200">
                              <MapPin className="size-3.5" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-xs font-bold text-foreground group-hover/loc:text-primary dark:group-hover/loc:text-accent transition-colors truncate">
                                {area.name}
                              </span>
                              <span className="text-[10px] text-muted-foreground group-hover/loc:text-foreground/70 font-medium truncate">
                                {area.postcode}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown Bottom CTA Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-border/40 bg-muted/30 -mx-5 -mb-5 px-5 py-3 mt-1">
                        <div className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                          <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                          <span>Residential & commercial cleaning anywhere in these areas</span>
                        </div>
                        <Link
                          href="/book"
                          onClick={() => setIsAreasDropdownOpen(false)}
                        >
                          <Button
                            size="sm"
                            className="h-8 text-xs font-bold rounded-lg px-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs cursor-pointer inline-flex items-center gap-1.5"
                          >
                            <span>Book Now</span>
                            <ChevronRight className="size-3" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Links after Areas We Served (Contact) */}
            {PRIMARY_LINKS_AFTER.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-base lg:text-[17px] font-semibold tracking-wide py-1.5 cursor-pointer transition-colors duration-300",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary dark:after:bg-accent after:origin-left after:transition-transform after:duration-300 after:ease-out",
                    isActive
                      ? "text-primary dark:text-accent font-bold after:scale-x-100"
                      : "text-foreground/85 hover:text-primary dark:hover:text-accent after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4 border-l border-border/30 pl-6">
            <ThemeToggle />
            <Link href="/book">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6 transition-all duration-300 shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 cursor-pointer"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-10 rounded-full text-foreground hover:bg-muted/80 cursor-pointer"
                  aria-label="Toggle Menu"
                />
              }
            >
              <Menu className="size-5.5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[370px] p-0 bg-background flex flex-col h-full overflow-hidden">
              <div className="flex flex-col h-full overflow-y-auto p-6 scroll-smooth">
                <SheetHeader className="text-left border-b border-border/10 pb-5 shrink-0">
                  <SheetTitle className="flex items-center gap-2.5">
                    <div className="relative overflow-hidden rounded-lg border border-border/20 shadow-sm bg-white p-0.5">
                      <Image
                        src="/assets/logo/logo.jpeg"
                        alt="Refuse Shine Cleaning LTD Logo"
                        width={48}
                        height={48}
                        className="object-cover rounded-md"
                        loading="lazy"
                        decoding="async"
                        quality={75}
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-heading font-black text-lg sm:text-xl leading-none tracking-tight">
                        REFUSE SHINE
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-primary dark:text-accent leading-none mt-0.5 uppercase">
                        Cleaning LTD
                      </span>
                    </div>
                  </SheetTitle>
                  <SheetDescription className="text-xs pt-1.5 text-muted-foreground">
                    Experience premium commercial and residential cleaning services.
                  </SheetDescription>
                </SheetHeader>

                {/* Drawer Links */}
                <div className="flex flex-col gap-1.5 py-4 shrink-0">
                  {/* Home, About, Services */}
                  {PRIMARY_LINKS_BEFORE.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between text-base font-bold px-3 py-2.5 rounded-xl transition-all cursor-pointer",
                          isActive
                            ? "bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent font-bold"
                            : "text-foreground/90 hover:bg-muted hover:text-primary dark:hover:text-accent"
                        )}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="size-4 opacity-60" />
                      </Link>
                    )
                  })}

                  {/* Areas We Serve Accordion */}
                  <button
                    type="button"
                    onClick={() => setMobileAreasExpanded((prev) => !prev)}
                    className={cn(
                      "flex items-center justify-between text-base font-bold px-3 py-2.5 rounded-xl transition-all cursor-pointer w-full text-left",
                      mobileAreasExpanded
                        ? "bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent font-bold"
                        : "text-foreground/90 hover:bg-muted hover:text-primary dark:hover:text-accent"
                    )}
                  >
                    <span>Areas We Serve</span>
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-300 opacity-60",
                        mobileAreasExpanded && "rotate-180 text-primary dark:text-accent opacity-100"
                      )}
                    />
                  </button>

                  {/* Expanded Locations List */}
                  <AnimatePresence>
                    {mobileAreasExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-1.5 p-2 rounded-xl bg-muted/30 border border-border/30 my-1">
                          {AREAS_WE_SERVED.map((area) => (
                            <Link
                              key={area.slug}
                              href={`/locations/${area.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-1.5 p-2 rounded-lg bg-card/80 hover:bg-primary/10 dark:hover:bg-accent/15 text-xs font-semibold text-foreground hover:text-primary dark:hover:text-accent transition-colors shadow-2xs border border-border/20"
                            >
                              <MapPin className="size-3.5 text-primary dark:text-accent shrink-0" />
                              <span className="truncate">{area.name}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="py-2 text-center">
                          <Link
                            href="/locations"
                            onClick={() => setIsOpen(false)}
                            className="text-xs font-bold text-primary dark:text-accent hover:underline inline-flex items-center gap-1"
                          >
                            <span>Explore All Service Areas & Map</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Contact */}
                  {PRIMARY_LINKS_AFTER.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between text-base font-bold px-3 py-2.5 rounded-xl transition-all cursor-pointer",
                          isActive
                            ? "bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent font-bold"
                            : "text-foreground/90 hover:bg-muted hover:text-primary dark:hover:text-accent"
                        )}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="size-4 opacity-60" />
                      </Link>
                    )
                  })}
                </div>

                {/* Drawer Book Button */}
                <div className="flex flex-col gap-3 pt-4 border-t border-border/10 shrink-0 mt-auto pb-2">
                  <Link href="/book" onClick={() => setIsOpen(false)}>
                    <Button
                      className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-bold py-5 rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      Book Now
                    </Button>
                  </Link>
                  <div className="text-center text-[11px] text-muted-foreground">
                    Available Mon-Sat: 8 AM - 6 PM
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

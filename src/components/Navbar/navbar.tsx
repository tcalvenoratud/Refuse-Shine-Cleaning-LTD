"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Sparkles, ChevronRight, Phone, Mail } from "lucide-react"
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

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

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
            <a href="tel:+447721714434" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="size-3.5 text-accent" />
              <span>+447721714435</span>
            </a>
            <a href="mailto:info@refuseshinecleaningltd.co.uk" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="size-3.5 text-accent" />
              <span>info@refuseshinecleaningltd.co.uk</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles className="size-3.5 text-accent animate-pulse" />
            <span>Shine Bright with Refuse Shine Cleaning LTD</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Container (Left) */}
        <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02] cursor-pointer">
          <div className="relative overflow-hidden rounded-lg border border-border/20 shadow-sm bg-white p-0.5">
            <Image
              src="/assets/logo/logo.jpeg"
              alt="Refuse Shine Cleaning LTD Logo"
              width={56}
              height={56}
              className="object-cover rounded-md"
              priority
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
          <nav className="flex items-center gap-5">
            {NAV_LINKS.map((link) => {
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
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 bg-background flex flex-col h-full">
              <SheetHeader className="text-left border-b border-border/10 pb-5 shrink-0">
                <SheetTitle className="flex items-center gap-2.5">
                  <div className="relative overflow-hidden rounded-lg border border-border/20 shadow-sm bg-white p-0.5">
                    <Image
                      src="/assets/logo/logo.jpeg"
                      alt="Refuse Shine Cleaning LTD Logo"
                      width={48}
                      height={48}
                      className="object-cover rounded-md"
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
              <div className="flex-1 flex flex-col gap-2.5 py-6 overflow-y-auto">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between text-lg font-bold px-2.5 py-2 rounded-lg transition-all cursor-pointer",
                        isActive
                          ? "bg-primary/5 text-primary dark:bg-accent/10 dark:text-accent font-bold"
                          : "text-foreground/90 hover:bg-muted hover:text-primary dark:hover:text-accent"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="size-4 opacity-60 " />
                    </Link>
                  )
                })}
              </div>

              {/* Drawer Book Button */}
              <div className="flex flex-col gap-4 pt-4 border-t border-border/10 shrink-0 mt-auto">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Sparkles } from "lucide-react"
import { trackEvent } from "@/lib/gtag"

// Inline SVG social icons to support all lucide-react package versions
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book Now", href: "/book" },
]

const SERVICES = [
  { label: "Residential Cleaning", href: "/services#residential" },
  { label: "Commercial Cleaning", href: "/services#commercial" },
  { label: "Deep Cleaning", href: "/services#deep" },
  { label: "Move In / Move Out", href: "/services#move-in-out" },
]

export function Footer() {
  return (
    <footer className="w-full bg-[#050110] border-t border-white/5 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Logo & Description Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-sm bg-white p-0.5">
                <Image
                  src="/assets/logo/logo.jpeg"
                  alt="Refuse Shine Cleaning LTD Logo"
                  width={48}
                  height={48}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg sm:text-xl leading-none tracking-tight text-white">
                  REFUSE SHINE
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#459B4A] leading-none mt-1 uppercase">
                  Cleaning LTD
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed mt-2">
              Refusing to let your home or commercial space lose its shine. Experience the premium standard in professional cleaning.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {[
                { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
                { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
                { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 rounded-full bg-white/5 hover:bg-[#79034C] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer text-gray-400"
                  aria-label={social.label}
                >
                  <social.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-[#79034C] pl-2.5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 mt-2">
              {QUICK_LINKS.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:pl-1 transition-all duration-200 cursor-pointer flex items-center gap-1 w-fit"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-[#79034C] pl-2.5">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5 mt-2">
              {SERVICES.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-white hover:pl-1 transition-all duration-200 cursor-pointer flex items-center gap-1 w-fit"
                  >
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-[#79034C] pl-2.5">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-4 mt-2">
              <li>
                <a href="tel:+447721714435" onClick={() => trackEvent("phone_click")} className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group text-sm text-white/90 font-medium">
                  <Phone className="size-4.5 text-[#459B4A] group-hover:scale-110 transition-transform" />
                  <span>+447721714435</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@refuseshinecleaningltd.co.uk" onClick={()=> trackEvent("email_click")} className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group text-sm text-white/90 font-medium">
                  <Mail className="size-4.5 text-[#459B4A] group-hover:scale-110 transition-transform" />
                  <span className="break-all">info@refuseshinecleaningltd.co.uk</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Refuse Shine Cleaning LTD. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white cursor-pointer transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

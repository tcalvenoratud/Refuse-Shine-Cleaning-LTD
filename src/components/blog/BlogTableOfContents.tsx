"use client"

import * as React from "react"
import { List, ChevronRight } from "lucide-react"
import { BlogContentSection } from "@/lib/blog-data"

interface BlogTableOfContentsProps {
  sections: BlogContentSection[]
}

export function BlogTableOfContents({ sections }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("")

  // Filter sections that have an ID and heading
  const tocItems = sections.filter((s) => s.id && s.heading)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    )

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [tocItems])

  if (tocItems.length === 0) return null

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100 // header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      setActiveId(id)
      history.pushState(null, "", `#${id}`)
    }
  }

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs"
    >
      <div className="flex items-center gap-2 font-bold text-sm text-foreground mb-4 pb-3 border-b border-border/40">
        <List className="size-4 text-primary dark:text-accent" />
        <span>In This Guide</span>
      </div>

      <ul className="space-y-2 text-xs sm:text-sm">
        {tocItems.map((item) => {
          const isActive = activeId === item.id
          return (
            <li
              key={item.id}
              className={`${item.level === 3 ? "pl-3 text-xs" : ""}`}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`group flex items-start gap-1.5 transition-colors py-1 ${
                  isActive
                    ? "font-bold text-primary dark:text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ChevronRight
                  className={`size-3.5 shrink-0 mt-0.5 transition-transform ${
                    isActive
                      ? "text-primary dark:text-accent rotate-90"
                      : "opacity-40 group-hover:translate-x-0.5"
                  }`}
                />
                <span className="line-clamp-2">{item.heading}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

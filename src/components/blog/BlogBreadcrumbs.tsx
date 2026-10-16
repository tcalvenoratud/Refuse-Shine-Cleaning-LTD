import * as React from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BlogBreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function BlogBreadcrumbs({ items }: BlogBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumbs"
      className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm font-semibold text-muted-foreground"
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-primary dark:hover:text-accent transition-colors"
      >
        <Home className="size-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <React.Fragment key={index}>
            <ChevronRight className="size-3.5 shrink-0 opacity-60" />
            {isLast || !item.href ? (
              <span
                className="text-foreground font-bold truncate max-w-[220px] sm:max-w-md"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-primary dark:hover:text-accent transition-colors truncate max-w-[180px] sm:max-w-xs"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}

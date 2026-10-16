import * as React from "react"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogContextualCTA } from "@/lib/blog-data"

interface ArticleContextualCTAProps {
  cta: BlogContextualCTA
}

export function ArticleContextualCTA({ cta }: ArticleContextualCTAProps) {
  return (
    <aside className="my-10 overflow-hidden rounded-2xl border-2 border-primary/20 dark:border-accent/30 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary dark:text-accent mb-3">
        <Sparkles className="size-4 text-accent" />
        <span>Professional Cleaning Support</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-black text-foreground font-heading mb-3">
        {cta.title}
      </h3>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
        {cta.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <Link href={cta.primaryButtonHref}>
          <Button
            className="w-full sm:w-auto h-11 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl px-6 shadow-md shadow-primary/20 transition-all cursor-pointer inline-flex items-center justify-center gap-2 group/cta"
          >
            <span>{cta.primaryButtonText}</span>
            <ArrowRight className="size-4 group-hover/cta:translate-x-1 transition-transform" />
          </Button>
        </Link>

        {cta.secondaryButtonText && cta.secondaryButtonHref && (
          <Link href={cta.secondaryButtonHref}>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-11 border-2 border-border font-bold rounded-xl px-6 hover:bg-muted/50 transition-all cursor-pointer"
            >
              {cta.secondaryButtonText}
            </Button>
          </Link>
        )}
      </div>
    </aside>
  )
}

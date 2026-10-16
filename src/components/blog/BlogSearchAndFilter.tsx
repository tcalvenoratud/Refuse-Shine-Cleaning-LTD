"use client"

import * as React from "react"
import { Search, X, Filter, RotateCcw, ChevronDown } from "lucide-react"
import { BlogPost, BlogCategory, BLOG_CATEGORIES } from "@/lib/blog-data"
import { BlogCard } from "./BlogCard"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface BlogSearchAndFilterProps {
  initialPosts: BlogPost[]
}

const ITEMS_PER_PAGE = 6

export function BlogSearchAndFilter({ initialPosts }: BlogSearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<BlogCategory>("All Articles")
  const [visibleCount, setVisibleCount] = React.useState(ITEMS_PER_PAGE)

  // Filter posts based on category and search query
  const filteredPosts = React.useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Articles" || post.category === selectedCategory

      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchesCategory

      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        (post.keywords && post.keywords.some((k) => k.toLowerCase().includes(query)))

      return matchesCategory && matchesSearch
    })
  }, [initialPosts, selectedCategory, searchQuery])

  // Reset pagination when search or category changes
  React.useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE)
  }, [searchQuery, selectedCategory])

  const handleResetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All Articles")
    setVisibleCount(ITEMS_PER_PAGE)
  }

  // Calculate post count per category for pills
  const getCategoryCount = (category: BlogCategory) => {
    if (category === "All Articles") return initialPosts.length
    return initialPosts.filter((p) => p.category === category).length
  }

  const visiblePosts = filteredPosts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPosts.length

  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Controls Bar: Search & Category Pills */}
        <div className="flex flex-col gap-6 mb-10">
          {/* Top row: Search and active count */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Search cleaning guides, topics, checklists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-11 bg-card border-border/80 focus-visible:ring-primary rounded-xl text-sm"
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                  aria-label="Clear search query"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            {/* Results count & reset */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs sm:text-sm text-muted-foreground">
              <span>
                Showing <strong className="text-foreground">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? "article" : "articles"}
              </span>

              {(searchQuery || selectedCategory !== "All Articles") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleResetFilters}
                  className="h-8 text-xs text-primary dark:text-accent hover:bg-primary/5 cursor-pointer flex items-center gap-1.5"
                >
                  <RotateCcw className="size-3.5" />
                  <span>Reset</span>
                </Button>
              )}
            </div>
          </div>

          {/* Category Filter Pills (Scrollable on small mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap sm:flex-wrap">
            {BLOG_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat
              const count = getCategoryCount(cat)
              
              // Skip categories with 0 posts
              if (count === 0 && cat !== "All Articles") return null

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card hover:bg-muted/60 text-foreground/80 hover:text-foreground border-border/60"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] rounded-full px-1.5 py-0.2 ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Blog Article Grid */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visiblePosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-12 text-center">
                <Button
                  onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                  variant="outline"
                  className="h-11 px-8 rounded-xl border-2 border-border font-bold text-sm hover:bg-muted/60 transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Load More Articles</span>
                  <ChevronDown className="size-4" />
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">
                  Showing {visiblePosts.length} of {filteredPosts.length} articles
                </p>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-border/80 bg-card p-10 sm:p-14 text-center max-w-lg mx-auto">
            <div className="mx-auto size-12 rounded-full bg-primary/10 dark:bg-accent/15 flex items-center justify-center text-primary dark:text-accent mb-4">
              <Filter className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              No matching articles found
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              {searchQuery
                ? `We couldn't find any articles matching "${searchQuery}" in ${selectedCategory}.`
                : `There are currently no articles in the "${selectedCategory}" category.`}
            </p>
            <Button
              onClick={handleResetFilters}
              className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl px-6 cursor-pointer"
            >
              Reset Filters
            </Button>
          </div>
        )}

      </div>
    </section>
  )
}

import * as React from "react"
import { CheckCircle2, AlertTriangle, Info, Lightbulb, ShieldAlert } from "lucide-react"
import { BlogContent, BlogContentSection } from "@/lib/blog-data"
import { ArticleContextualCTA } from "./ArticleContextualCTA"

interface BlogArticleBodyProps {
  content: BlogContent
}

export function BlogArticleBody({ content }: BlogArticleBodyProps) {
  return (
    <div className="prose-clean max-w-none text-foreground/90 font-sans">
      {/* Introduction paragraphs */}
      {content.intro && content.intro.length > 0 && (
        <div className="space-y-4 mb-8 text-base sm:text-lg leading-relaxed text-foreground/85 font-medium border-l-4 border-primary/40 pl-4 sm:pl-6 py-1 bg-muted/20 rounded-r-xl">
          {content.intro.map((p, idx) => (
            <p
              key={idx}
              dangerouslySetInnerHTML={{ __html: p }}
              className="leading-relaxed"
            />
          ))}
        </div>
      )}

      {/* Main Sections */}
      {content.sections.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}

      {/* In-Article Contextual CTA */}
      {content.contextualCta && (
        <ArticleContextualCTA cta={content.contextualCta} />
      )}

      {/* Conclusion */}
      {content.conclusion && content.conclusion.length > 0 && (
        <div className="mt-10 pt-6 border-t border-border/40">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            Summary &amp; Next Steps
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
            {content.conclusion.map((p, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function SectionBlock({ section }: { section: BlogContentSection }) {
  const isH3 = section.level === 3

  return (
    <section id={section.id} className="scroll-mt-28 my-8 sm:my-10">
      {/* Heading */}
      {isH3 ? (
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground tracking-tight mt-6 mb-3">
          {section.heading}
        </h3>
      ) : (
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-foreground tracking-tight mt-8 mb-4 pb-2 border-b border-border/30">
          {section.heading}
        </h2>
      )}

      {/* Paragraphs */}
      {section.paragraphs && (
        <div className="space-y-4 text-base sm:text-[17px] text-foreground/85 leading-relaxed">
          {section.paragraphs.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </div>
      )}

      {/* Lists */}
      {section.list && (
        <div className="my-5 rounded-2xl bg-muted/20 border border-border/40 p-5 sm:p-6">
          {section.list.title && (
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">
              {section.list.title}
            </h4>
          )}
          {section.list.type === "ordered" ? (
            <ol className="space-y-3">
              {section.list.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ol>
          ) : (
            <ul className="space-y-3">
              {section.list.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90">
                  <CheckCircle2 className="size-5 shrink-0 text-accent mt-0.5" />
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Callouts */}
      {section.callout && <CalloutBlock callout={section.callout} />}

      {/* Tables */}
      {section.table && <TableBlock table={section.table} />}
    </section>
  )
}

function CalloutBlock({
  callout,
}: {
  callout: NonNullable<BlogContentSection["callout"]>
}) {
  const isSafety = callout.type === "safety" || callout.type === "warning"
  const isTip = callout.type === "tip"

  const icon = isSafety ? (
    <ShieldAlert className="size-5 text-destructive shrink-0 mt-0.5" />
  ) : isTip ? (
    <Lightbulb className="size-5 text-accent shrink-0 mt-0.5" />
  ) : (
    <Info className="size-5 text-primary shrink-0 mt-0.5" />
  )

  const containerStyles = isSafety
    ? "border-destructive/30 bg-destructive/5 text-destructive-foreground"
    : isTip
    ? "border-accent/30 bg-accent/5"
    : "border-primary/30 bg-primary/5"

  return (
    <aside
      className={`my-6 flex items-start gap-3.5 rounded-2xl border p-5 sm:p-6 ${containerStyles}`}
      role="note"
    >
      {icon}
      <div className="flex-1">
        {callout.title && (
          <h4 className="text-sm font-bold text-foreground mb-1">
            {callout.title}
          </h4>
        )}
        <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium">
          {callout.text}
        </p>
      </div>
    </aside>
  )
}

function TableBlock({
  table,
}: {
  table: NonNullable<BlogContentSection["table"]>
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-xs">
      {table.caption && (
        <div className="bg-muted/40 px-4 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border/40">
          {table.caption}
        </div>
      )}
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="bg-muted/30 text-foreground font-bold border-b border-border/60">
          <tr>
            {table.headers.map((header, i) => (
              <th key={i} className="px-4 py-3 sm:px-6 sm:py-3.5">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/40">
          {table.rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className="hover:bg-muted/20 transition-colors"
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-3 sm:px-6 sm:py-4 align-top text-foreground/90 leading-relaxed"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

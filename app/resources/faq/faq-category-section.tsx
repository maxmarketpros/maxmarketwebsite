"use client"

import { useEffect, useMemo, useState, type ReactNode } from "react"
import { ChevronDown } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { SecondaryButton } from "@/components/ui/secondary-button"
import type { FaqCategory } from "./faq-categories"
import type { FaqItem } from "./faq-data"

type Props = {
  category: FaqCategory
  items: FaqItem[]
}

// Lightweight markdown-ish renderer: turns `[text](path)` into <a>,
// `<strong>...</strong>` stays as bold. Nothing else. Safe because content
// is fully author-controlled in faq-data.ts.
function renderAnswer(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  // Combined regex: link OR strong tag
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|<strong>([\s\S]*?)<\/strong>/g
  let lastIndex = 0
  let key = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    if (match[1] && match[2]) {
      nodes.push(
        <a
          key={`l-${key++}`}
          href={match[2]}
          className="font-semibold underline decoration-2 underline-offset-2 transition-colors hover:opacity-80"
          style={{
            color: "var(--accent)",
            textDecorationColor: "var(--cyan)",
          }}
        >
          {match[1]}
        </a>
      )
    } else if (match[3]) {
      nodes.push(
        <strong key={`s-${key++}`} style={{ color: "var(--ink)" }}>
          {match[3]}
        </strong>
      )
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }
  return nodes
}

export function FaqCategorySection({ category, items }: Props) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  // Auto-open the item matching the current URL hash on mount + on hash change.
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace("#", "")
      if (!hash) return
      const match = items.find((i) => i.id === hash)
      if (match) {
        setOpenIds((prev) => {
          if (prev.has(hash)) return prev
          const next = new Set(prev)
          next.add(hash)
          return next
        })
        const el = document.getElementById(hash)
        if (el) {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          })
        }
      }
    }
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [items])

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const renderedItems = useMemo(
    () =>
      items.map((item) => {
        const isOpen = openIds.has(item.id)
        return (
          <li
            key={item.id}
            id={item.id}
            className="card-surface overflow-hidden"
            style={{
              borderRadius: "var(--radius-md)",
              scrollMarginTop: "140px",
            }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              onClick={() => toggle(item.id)}
              className="w-full flex items-start gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer"
            >
              <h3
                className="flex-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35] m-0"
                style={{ color: "var(--ink)" }}
              >
                {item.q}
              </h3>
              <ChevronDown
                className={`w-5 h-5 shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                style={{ color: "var(--accent)" }}
                strokeWidth={2.25}
              />
            </button>
            <div
              id={`${item.id}-panel`}
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p
                  className="px-5 sm:px-6 pb-6 text-[15px] sm:text-[16px] leading-[1.65]"
                  style={{ color: "var(--muted)" }}
                >
                  {renderAnswer(item.a)}
                </p>
              </div>
            </div>
          </li>
        )
      }),
    [items, openIds]
  )

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className="relative"
      style={{ scrollMarginTop: "140px" }}
    >
      <div className="section-container py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          <div className="flex justify-center mb-5">
            <Pill>{category.pill}</Pill>
          </div>
          <h2
            id={`${category.id}-heading`}
            className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            {category.headingPrefix}
            <span className="accent-underline">
              {category.headingHighlight}
            </span>
          </h2>
          <p
            className="mt-5 text-[16px] sm:text-[18px] leading-[1.6] max-w-[620px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            {category.intro}
          </p>
        </div>

        <ul className="mt-10 max-w-[820px] mx-auto space-y-3">
          {renderedItems}
        </ul>

        <div className="mt-8 flex justify-center">
          <SecondaryButton asLink href={category.ctaHref}>
            {category.ctaText}
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

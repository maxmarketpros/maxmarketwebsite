"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PartnersFeatured } from "./partners-featured"
import { PartnersCategorySection } from "./partners-category-section"
import { CATEGORIES } from "./partners-data"

type FilterId = "all" | "core" | string // category slug

interface FilterOption {
  id: FilterId
  label: string
  count: number
}

function slugify(s: string) {
  return s.replace(/\s+/g, "-").replace(/&/g, "and").toLowerCase()
}

const TOTAL_FEATURED = 9
const TOTAL_CATEGORY_ITEMS = CATEGORIES.reduce((acc, c) => acc + c.items.length, 0)

const OPTIONS: FilterOption[] = [
  { id: "all", label: "All", count: TOTAL_FEATURED + TOTAL_CATEGORY_ITEMS },
  { id: "core", label: "Core Stack", count: TOTAL_FEATURED },
  ...CATEGORIES.map((c) => ({
    id: slugify(c.pill),
    label: c.pill,
    count: c.items.length,
  })),
]

export function PartnersFilterable() {
  const [active, setActive] = useState<FilterId>("all")
  const scrollRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    updateScrollState()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)
    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [])

  const showCore = active === "all" || active === "core"

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" })
  }

  const handleFilterClick = (id: FilterId) => {
    setActive(id)
    requestAnimationFrame(() => {
      const el = barRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const targetY = window.scrollY + rect.top - 88
      window.scrollTo({ top: targetY, behavior: "smooth" })
    })
  }

  return (
    <>
      <div
        ref={barRef}
        className="relative z-30 scroll-mt-24"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border-color)",
          borderBottom: "1px solid var(--border-color)",
          boxShadow: "0 1px 2px var(--shadow-color)",
        }}
      >
        <div className="section-container relative py-3 sm:py-4">
          {/* Left fade + arrow */}
          {canScrollLeft && (
            <>
              <div
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-12 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to right, var(--surface) 0%, transparent 100%)",
                }}
              />
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                aria-label="Scroll filters left"
                className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full items-center justify-center transition-opacity"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 1px 3px var(--shadow-color)",
                }}
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {OPTIONS.map((opt) => {
              const isActive = active === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleFilterClick(opt.id)}
                  className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-pill)] text-[13.5px] font-semibold transition-all duration-200"
                  style={{
                    background: isActive ? "var(--accent)" : "var(--surface)",
                    color: isActive ? "#FFFFFF" : "var(--ink)",
                    border: `1px solid ${
                      isActive ? "var(--accent)" : "var(--border-color)"
                    }`,
                    boxShadow: isActive
                      ? "0 2px 8px rgba(22,119,255,0.25)"
                      : "0 1px 2px var(--shadow-color)",
                  }}
                >
                  {opt.label}
                  <span
                    className="inline-flex items-center justify-center min-w-[22px] h-[18px] px-1.5 text-[10.5px] font-bold rounded-full"
                    style={{
                      background: isActive
                        ? "rgba(255,255,255,0.22)"
                        : "var(--accent-bg)",
                      color: isActive ? "#FFFFFF" : "var(--accent)",
                    }}
                  >
                    {opt.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right fade + arrow */}
          {canScrollRight && (
            <>
              <div
                aria-hidden
                className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to left, var(--bg) 0%, transparent 100%)",
                }}
              />
              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                aria-label="Scroll filters right"
                className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full items-center justify-center transition-opacity"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 1px 3px var(--shadow-color)",
                }}
              >
                <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </>
          )}
        </div>

        <style jsx>{`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Filtered sections */}
      {showCore && <PartnersFeatured />}
      {CATEGORIES.map((category, idx) => {
        const slug = slugify(category.pill)
        const visible = active === "all" || active === slug
        if (!visible) return null
        return (
          <PartnersCategorySection
            key={category.pill}
            category={category}
            alt={idx % 2 === 0}
          />
        )
      })}
    </>
  )
}

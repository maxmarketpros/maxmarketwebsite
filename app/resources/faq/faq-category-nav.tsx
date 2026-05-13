"use client"

import { useEffect, useState } from "react"
import { faqCategories } from "./faq-categories"

export function FaqCategoryNav() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (faqCategories.some((c) => c.id === hash)) {
        setActiveId(hash)
      }
    }

    handleHashChange()

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          setActiveId(visible.target.id)
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    faqCategories.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) observer.observe(el)
    })

    window.addEventListener("hashchange", handleHashChange)
    return () => {
      observer.disconnect()
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <nav
      aria-label="FAQ categories"
      className="relative"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div className="section-container py-4 sm:py-5">
        <ul
          className="flex gap-2 overflow-x-auto lg:flex-wrap lg:justify-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {faqCategories.map((cat) => {
            const isActive = activeId === cat.id
            return (
              <li key={cat.id} className="shrink-0">
                <a
                  href={`#${cat.id}`}
                  className="inline-flex items-center px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-semibold whitespace-nowrap transition-colors duration-200"
                  style={{
                    background: isActive ? "var(--accent)" : "var(--surface)",
                    color: isActive ? "#FFFFFF" : "var(--ink)",
                    border: `1px solid ${isActive ? "var(--accent)" : "var(--border-color)"}`,
                  }}
                  onClick={() => setActiveId(cat.id)}
                >
                  {cat.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { faqItems } from "@/app/resources/faq/faq-data"

const PREVIEW_IDS = [
  "what-does-max-market-pros-do",
  "who-is-max-market-pros-best-for",
  "is-the-free-marketing-audit-actually-free",
  "how-do-i-get-started-with-max-market-pros",
  "where-is-max-market-pros-located",
]

function renderAnswer(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
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

export function FaqPreviewAccordion() {
  const items = PREVIEW_IDS
    .map((id) => faqItems.find((i) => i.id === id))
    .filter((i): i is NonNullable<typeof i> => Boolean(i))

  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set([items[0]?.id].filter(Boolean) as string[])
  )

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section className="relative" style={{ background: "var(--bg)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="Common questions"
          heading={
            <>
              The questions every owner asks{" "}
              <span className="accent-underline">on the first call.</span>
            </>
          }
          paragraph="A quick preview of our most-asked questions. The full FAQ covers plans & pricing, websites, SEO, paid ads, content, industries, and how working together actually goes."
        />

        <ul
          className="mt-12 max-w-[820px] mx-auto space-y-3"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {items.map((item) => {
            const isOpen = openIds.has(item.id)
            return (
              <li
                key={item.id}
                className="card-surface overflow-hidden"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-preview-panel`}
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
                    className={`w-5 h-5 shrink-0 mt-0.5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--accent)" }}
                    strokeWidth={2.25}
                  />
                </button>
                <div
                  id={`${item.id}-preview-panel`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
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
          })}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/resources/faq"
            className="inline-flex items-center gap-2 text-[14px] font-semibold transition-transform hover:translate-x-0.5"
            style={{ color: "var(--accent)" }}
          >
            See all 40 questions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

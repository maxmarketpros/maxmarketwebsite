"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Plus } from "lucide-react"
import {
  droneFaqs,
  droneFaqCategories,
  type DroneFaqCategory,
} from "./drone-faq-data"

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "")
}

const categoryColors: Record<DroneFaqCategory, string> = {
  Booking: "#0891B2",
  "FAA & Legal": "#DC2626",
  Footage: "#7C3AED",
  Pricing: "#F97316",
  Delivery: "#16A34A",
}

export function DroneFaq() {
  const [activeCat, setActiveCat] = useState<"All" | DroneFaqCategory>("All")
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const visible = droneFaqs.filter(
    (f) => activeCat === "All" || f.category === activeCat,
  )

  return (
    <section
      id="drone-faq"
      aria-labelledby="drone-faq-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Drone Videography FAQ"
          heading={
            <span id="drone-faq-heading">
              Questions before you put a drone in the{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">air</span>?
              </span>
            </span>
          }
          paragraph="The most common questions we hear about drone videography — booking, FAA Part 107 and airspace, footage formats, pricing, and how the final files get delivered."
        />

        <div
          className="mt-10 max-w-[920px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Sticky filter chips */}
          <div
            className="sticky top-[88px] z-20 flex flex-wrap items-center justify-center gap-2 py-3 mb-4 -mx-4 px-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(247,250,252,0.92) 0%, rgba(247,250,252,0.78) 80%, rgba(247,250,252,0) 100%)",
              backdropFilter: "blur(8px)",
            }}
          >
            {droneFaqCategories.map((cat) => {
              const isActive = activeCat === cat
              const cat_color =
                cat === "All"
                  ? "#0891B2"
                  : categoryColors[cat as DroneFaqCategory]
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCat(cat)
                    setOpenIdx(0)
                  }}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold transition-all"
                  style={{
                    background: isActive
                      ? cat === "All"
                        ? "#0891B2"
                        : `${cat_color}1A`
                      : "var(--surface)",
                    border: isActive
                      ? cat === "All"
                        ? "1px solid #0891B2"
                        : `1px solid ${cat_color}`
                      : "1px solid var(--border-color)",
                    color: isActive
                      ? cat === "All"
                        ? "#fff"
                        : (cat_color as string)
                      : "var(--ink)",
                    boxShadow: isActive
                      ? cat === "All"
                        ? "0 4px 14px rgba(8,145,178,0.30)"
                        : `0 4px 14px ${cat_color}33`
                      : "0 1px 2px rgba(17,35,68,0.04)",
                  }}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Accordion */}
          <ul
            className="divide-y rounded-[var(--radius-lg)] border overflow-hidden"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-color)",
              boxShadow:
                "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
            }}
          >
            {visible.map((faq, idx) => {
              const isOpen = openIdx === idx
              const cColor = categoryColors[faq.category]
              return (
                <li
                  key={`${activeCat}-${faq.q}`}
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-start gap-4 sm:gap-5 px-5 sm:px-7 py-5 text-left cursor-pointer hover:bg-[var(--bg)] transition-colors"
                  >
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform"
                      style={{
                        background: isOpen
                          ? `linear-gradient(180deg, ${cColor}DD 0%, ${cColor} 100%)`
                          : `${cColor}1A`,
                        color: isOpen ? "#fff" : cColor,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus className="w-4 h-4" strokeWidth={2.75} />
                    </span>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="inline-flex items-center px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-[0.1em]"
                          style={{
                            background: `${cColor}1A`,
                            color: cColor,
                          }}
                        >
                          {faq.category}
                        </span>
                      </div>
                      <span
                        className="text-[16px] sm:text-[17.5px] font-semibold leading-[1.35]"
                        style={{ color: "var(--ink)" }}
                      >
                        {faq.q}
                      </span>
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="px-5 sm:px-7 pb-6 pl-[68px] sm:pl-[88px] text-[15px] sm:text-[16px] leading-[1.65]"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: faq.a }}
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Don&rsquo;t see your question?
            </span>
            <SecondaryButton asLink href="#contact">
              Talk to a drone pilot
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function DroneFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: droneFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(f.a) },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

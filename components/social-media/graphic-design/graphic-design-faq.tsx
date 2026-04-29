"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Plus,
  Layers,
  Clock,
  RefreshCw,
  FileDown,
  Palette,
  DollarSign,
  Sparkles,
} from "lucide-react"
import {
  graphicDesignFaqs,
  graphicDesignFaqCategories,
  type GraphicDesignFaqCategory,
} from "./graphic-design-faq-data"

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "")
}

const categoryColors: Record<GraphicDesignFaqCategory, string> = {
  Scope: "#1677FF",
  Turnaround: "#EC4899",
  Revisions: "#F59E0B",
  "Files & Ownership": "#16A34A",
  "Brand Identity": "#BE185D",
  Pricing: "#0EA5E9",
}

const categoryIcons: Record<
  "All" | GraphicDesignFaqCategory,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  All: Sparkles,
  Scope: Layers,
  Turnaround: Clock,
  Revisions: RefreshCw,
  "Files & Ownership": FileDown,
  "Brand Identity": Palette,
  Pricing: DollarSign,
}

export function GraphicDesignFaq() {
  const [activeCat, setActiveCat] = useState<"All" | GraphicDesignFaqCategory>(
    "All",
  )
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const visible = graphicDesignFaqs.filter(
    (f) => activeCat === "All" || f.category === activeCat,
  )

  return (
    <section
      id="graphic-design-faq"
      aria-labelledby="graphic-design-faq-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Graphic Design FAQ"
          heading={
            <span id="graphic-design-faq-heading">
              Questions before you{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">brief us</span>?
              </span>
            </span>
          }
          paragraph="The most common questions service businesses ask before bringing on a design team — scope, turnaround, revisions, files, branding, and pricing."
        />

        <div
          className="mt-12 max-w-[1100px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 lg:gap-10 items-start">
            {/* Left: vertical category nav */}
            <aside className="lg:sticky lg:top-[88px]">
              <div
                className="rounded-[var(--radius-lg)] border p-2"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border-color)",
                  boxShadow: "0 1px 3px var(--shadow-color)",
                }}
              >
                <div
                  className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--muted)" }}
                >
                  Browse by topic
                </div>
                <ul role="tablist" aria-label="FAQ categories" className="space-y-1">
                  {graphicDesignFaqCategories.map((cat) => {
                    const isActive = activeCat === cat
                    const cColor =
                      cat === "All"
                        ? "var(--accent)"
                        : categoryColors[cat as GraphicDesignFaqCategory]
                    const count =
                      cat === "All"
                        ? graphicDesignFaqs.length
                        : graphicDesignFaqs.filter((f) => f.category === cat)
                            .length
                    const Icon = categoryIcons[cat]
                    return (
                      <li key={cat}>
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => {
                            setActiveCat(cat)
                            setOpenIdx(0)
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-[13.5px] font-semibold cursor-pointer transition-all"
                          style={{
                            background: isActive
                              ? cat === "All"
                                ? "rgba(22,119,255,0.10)"
                                : `${cColor}14`
                              : "transparent",
                            color: isActive
                              ? cat === "All"
                                ? "var(--accent)"
                                : (cColor as string)
                              : "var(--ink)",
                            border: isActive
                              ? `1px solid ${cat === "All" ? "rgba(22,119,255,0.30)" : `${cColor}55`}`
                              : "1px solid transparent",
                          }}
                        >
                          <span
                            className="w-7 h-7 rounded-md flex items-center justify-center"
                            style={{
                              background: isActive
                                ? cat === "All"
                                  ? "var(--accent)"
                                  : (cColor as string)
                                : "var(--bg)",
                              color: isActive ? "#fff" : "var(--muted)",
                            }}
                          >
                            <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                          </span>
                          <span className="flex-1 text-left">{cat}</span>
                          <span
                            className="text-[10px] font-bold rounded-full px-1.5 py-0.5"
                            style={{
                              background: isActive
                                ? "rgba(255,255,255,0.6)"
                                : "var(--bg)",
                              color: isActive
                                ? cat === "All"
                                  ? "var(--accent)"
                                  : (cColor as string)
                                : "var(--muted)",
                            }}
                          >
                            {count}
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div
                className="mt-4 hidden lg:block rounded-[var(--radius-md)] p-4 text-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(22,119,255,0.06) 0%, rgba(22,119,255,0.02) 100%)",
                  border: "1px dashed rgba(22,119,255,0.30)",
                }}
              >
                <div
                  className="text-[12px] font-semibold mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  Have a different question?
                </div>
                <SecondaryButton asLink href="/contact">
                  Ask a designer
                </SecondaryButton>
              </div>
            </aside>

            {/* Right: accordion */}
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
          </div>

          <div className="mt-8 lg:hidden flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Don&rsquo;t see your question?
            </span>
            <SecondaryButton asLink href="/contact">
              Talk to a designer
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function GraphicDesignFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: graphicDesignFaqs.map((f) => ({
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

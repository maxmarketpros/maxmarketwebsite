"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { LOCALMARK_ACCENT } from "@/lib/localmark-data"
import { localmarkFaqs } from "./localmark-faq-data"

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "")
}

export function LocalMarkFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="localmark-faq"
      aria-labelledby="localmark-faq-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-5%] w-[420px] h-[420px] rounded-full"
          style={{ background: `radial-gradient(circle, ${LOCALMARK_ACCENT}1A 0%, transparent 70%)` }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="LocalMark FAQ"
          heading={
            <span id="localmark-faq-heading">
              Questions about{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">LocalMark</span>?
              </span>
            </span>
          }
          paragraph="What people ask most often before picking LocalMark — the website scope, the keyword picks, the Contact Center, and what happens after launch."
        />

        <div className="mt-10 max-w-[920px] mx-auto" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          <ul
            className="divide-y rounded-[var(--radius-lg)] border overflow-hidden"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-color)",
              boxShadow: "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
            }}
          >
            {localmarkFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <li key={faq.q} style={{ borderColor: "var(--border-color)" }}>
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
                          ? `linear-gradient(180deg, #34D26A 0%, ${LOCALMARK_ACCENT} 100%)`
                          : `${LOCALMARK_ACCENT}14`,
                        color: isOpen ? "#fff" : LOCALMARK_ACCENT,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus className="w-4 h-4" strokeWidth={2.75} />
                    </span>
                    <span
                      className="flex-1 min-w-0 pt-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35]"
                      style={{ color: "var(--ink)" }}
                    >
                      {faq.q}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
              Have a different question?
            </span>
            <SecondaryButton asLink href="/contact/schedule">
              Book a strategy call
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LocalMarkFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localmarkFaqs.map((f) => ({
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

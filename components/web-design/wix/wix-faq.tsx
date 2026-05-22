"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ChevronDown } from "lucide-react"
import { wixFaqs } from "./wix-faq-data"

export function WixFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="wix-faq"
      aria-labelledby="wix-faq-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(214,255,85,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Wix website design FAQ"
          heading={
            <span id="wix-faq-heading">
              Real answers, before you{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">commit a budget</span>.
              </span>
            </span>
          }
          paragraph="The most common questions we get from businesses researching Wix website design — pricing, Editor vs Studio, SEO, Velo code, ownership, timelines, and what separates a real custom Wix build from a template."
        />

        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-3">
            {wixFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              const num = `Q${String(idx + 1).padStart(2, "0")}`
              return (
                <li
                  key={faq.q}
                  className="card-surface overflow-hidden"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-start gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer hover:bg-[var(--bg)] transition-colors"
                  >
                    <span
                      className="shrink-0 inline-flex items-center justify-center px-2 py-1 rounded-md text-[11px] font-bold font-mono tracking-[0.05em]"
                      style={{
                        background: isOpen
                          ? "linear-gradient(180deg, #D6FF55 0%, #B8E840 100%)"
                          : "rgba(11,11,11,0.08)",
                        color: isOpen ? "#0B0B0B" : "#0B0B0B",
                        minWidth: 36,
                      }}
                    >
                      {num}
                    </span>
                    <span
                      className="flex-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35] pt-0.5"
                      style={{ color: "var(--ink)" }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className="shrink-0 w-5 h-5 mt-1 transition-transform duration-300"
                      strokeWidth={2.25}
                      style={{
                        color: isOpen ? "#0B0B0B" : "var(--muted)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
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
                        className="px-5 sm:px-6 pb-6 pl-[68px] sm:pl-[80px] text-[15px] sm:text-[16px] leading-[1.65]"
                        style={{ color: "var(--muted)" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Still have questions?
            </span>
            <SecondaryButton asLink href="#contact">
              Talk to a Wix designer
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WixFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wixFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

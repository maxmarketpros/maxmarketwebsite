"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ChevronDown } from "lucide-react"
import { godaddyFaqs } from "./godaddy-faq-data"

export function GoDaddyFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="godaddy-faq"
      aria-labelledby="godaddy-faq-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="GoDaddy website design FAQ"
          heading={
            <span id="godaddy-faq-heading">
              Real answers, before you{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">commit a budget</span>.
              </span>
            </span>
          }
          paragraph="The most common questions we get from businesses researching GoDaddy website design — domain & email continuity, SSL, GoDaddy Payments, timelines, SEO impact, and what separates a real custom build from a stock template."
        />

        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-3">
            {godaddyFaqs.map((faq, idx) => {
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
                          ? "linear-gradient(180deg, #1BDBDB 0%, #0FB3B3 100%)"
                          : "rgba(27,219,219,0.14)",
                        color: isOpen ? "#0B132B" : "#0FB3B3",
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
                        color: isOpen ? "#0FB3B3" : "var(--muted)",
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
              Talk to a GoDaddy designer
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function GoDaddyFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: godaddyFaqs.map((f) => ({
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

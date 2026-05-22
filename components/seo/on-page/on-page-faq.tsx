"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ChevronDown } from "lucide-react"
import { onPageFaqs } from "./on-page-faq-data"

export function OnPageFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="on-page-faq"
      aria-labelledby="on-page-faq-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="On-page SEO FAQ"
          heading={
            <span id="on-page-faq-heading">
              The questions every business{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">asks</span>
              </span>{" "}
              about on-page SEO.
            </span>
          }
          paragraph="Straight answers on timelines, schema, E-E-A-T, content refresh cadence, and how on-page SEO fits with technical and off-page."
        />

        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-3">
            {onPageFaqs.map((faq, idx) => {
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
                          ? "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)"
                          : "rgba(22,119,255,0.1)",
                        color: isOpen ? "#fff" : "#1677FF",
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
                        color: isOpen ? "#1677FF" : "var(--muted)",
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
            <span
              className="text-[15.5px]"
              style={{ color: "var(--muted)" }}
            >
              Still have questions?
            </span>
            <SecondaryButton asLink href="#contact">
              Ask an on-page SEO strategist
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

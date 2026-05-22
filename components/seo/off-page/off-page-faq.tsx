"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ChevronDown } from "lucide-react"
import { offPageFaqs } from "./off-page-faq-data"

export function OffPageFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="off-page-faq"
      aria-labelledby="off-page-faq-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Off-page SEO FAQ"
          heading={
            <span id="off-page-faq-heading">
              The questions every business{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">asks</span>
              </span>{" "}
              about off-page SEO.
            </span>
          }
          paragraph="Straight answers on link building, domain rating, digital PR, anchor text diversity, and what separates editorial off-page SEO from the usual link-scheme playbook."
        />

        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-3">
            {offPageFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <li
                  key={faq.q}
                  className="relative overflow-hidden transition-all duration-300"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    background: isOpen
                      ? "rgba(139,92,246,0.05)"
                      : "#fff",
                    border: "1px solid",
                    borderColor: isOpen
                      ? "rgba(139,92,246,0.25)"
                      : "var(--border-color)",
                    boxShadow: isOpen
                      ? "0 1px 3px rgba(17,35,68,0.06), 0 12px 32px rgba(109,40,217,0.08)"
                      : "0 1px 3px var(--shadow-color)",
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 transition-all duration-300"
                    style={{
                      width: isOpen ? 4 : 0,
                      background:
                        "linear-gradient(180deg, #A78BFA 0%, #6D28D9 100%)",
                    }}
                  />

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-start gap-4 px-5 sm:px-7 py-5 text-left cursor-pointer"
                  >
                    <span
                      className="flex-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35]"
                      style={{
                        color: isOpen ? "#4C1D95" : "var(--ink)",
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300"
                      style={{
                        background: isOpen
                          ? "linear-gradient(180deg, #A78BFA 0%, #6D28D9 100%)"
                          : "rgba(139,92,246,0.08)",
                        color: isOpen ? "#fff" : "#6D28D9",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <ChevronDown className="w-4 h-4" strokeWidth={2.75} />
                    </span>
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
                        className="px-5 sm:px-7 pb-6 text-[15px] sm:text-[16px] leading-[1.65]"
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
              Ask an off-page SEO strategist
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

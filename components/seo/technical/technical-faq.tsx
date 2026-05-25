"use client"

import { useState } from "react"
import Link from "next/link"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Plus, Minus } from "lucide-react"
import { technicalFaqs } from "./technical-faq-data"

export function TechnicalFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="technical-faq"
      aria-labelledby="technical-faq-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="FAQ"
          heading={
            <span id="technical-faq-heading">
              Technical SEO{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">FAQ</span>.
              </span>
            </span>
          }
          paragraph="Real answers on Core Web Vitals, crawl budget, indexation, schema, and how technical SEO compounds with on-page and off-page work."
        />

        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-2.5">
            {technicalFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <li
                  key={faq.q}
                  className="relative overflow-hidden transition-all duration-200"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    background: isOpen
                      ? "rgba(239,68,68,0.04)"
                      : "#fff",
                    border: "1px solid",
                    borderColor: isOpen
                      ? "rgba(239,68,68,0.22)"
                      : "var(--border-color)",
                    boxShadow: isOpen
                      ? "0 1px 3px rgba(17,35,68,0.06), 0 12px 28px rgba(239,68,68,0.08)"
                      : "0 1px 3px var(--shadow-color)",
                  }}
                >
                  {/* Top accent line */}
                  <div
                    aria-hidden
                    className="absolute left-0 right-0 top-0 transition-all duration-200"
                    style={{
                      height: isOpen ? 2 : 0,
                      background:
                        "linear-gradient(90deg, #EF4444 0%, #F97316 100%)",
                    }}
                  />

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-start gap-4 px-5 sm:px-6 py-4 text-left cursor-pointer"
                  >
                    <span
                      className="shrink-0 font-mono font-bold text-[15px] pt-0.5"
                      style={{ color: "#EF4444" }}
                    >
                      &gt;
                    </span>
                    <span
                      className="flex-1 text-[15.5px] sm:text-[17px] font-semibold leading-[1.35] pt-0.5"
                      style={{
                        color: isOpen ? "#991B1B" : "var(--ink)",
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md transition-all duration-200 font-mono"
                      style={{
                        background: isOpen
                          ? "linear-gradient(180deg, #F97316 0%, #EF4444 100%)"
                          : "rgba(239,68,68,0.08)",
                        color: isOpen ? "#fff" : "#DC2626",
                        border: "1px solid",
                        borderColor: isOpen
                          ? "transparent"
                          : "rgba(239,68,68,0.2)",
                      }}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" strokeWidth={3} />
                      ) : (
                        <Plus className="w-3.5 h-3.5" strokeWidth={3} />
                      )}
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
                        className="px-5 sm:px-6 pb-5 pl-10 sm:pl-11 text-[15px] sm:text-[16px] leading-[1.65] [&_a]:font-semibold [&_a]:text-[var(--ink)] [&_a]:underline [&_a]:decoration-[#EF4444]/40 [&_a]:underline-offset-4 [&_a:hover]:decoration-[#EF4444]"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: faq.a }}
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <p
            className="mt-8 text-center text-[14.5px] leading-[1.6]"
            style={{ color: "var(--muted)" }}
          >
            Further reading:{" "}
            <Link
              href="/resources/blog/bilingual-local-seo-irvine"
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              the hreflang and bilingual local SEO playbook
            </Link>{" "}
            is the technical implementation that pays off for Irvine&apos;s 51% non-English-speaking households.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span
              className="text-[15.5px]"
              style={{ color: "var(--muted)" }}
            >
              Still have questions?
            </span>
            <SecondaryButton asLink href="#contact">
              Ask a tech SEO strategist
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Plus } from "lucide-react"
import { localFaqs } from "./local-faq-data"

export function LocalFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="local-faq"
      aria-labelledby="local-faq-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Local SEO FAQ"
          heading={
            <span id="local-faq-heading">
              The questions every service business{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">asks</span>.
              </span>
            </span>
          }
          paragraph="Real answers on Map Pack timelines, Google Business Profile access, review velocity, and what separates our Local SEO from the usual freelancer playbook."
        />

        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul
            className="divide-y rounded-[var(--radius-lg)] border overflow-hidden"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-color)",
              boxShadow:
                "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
            }}
          >
            {localFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <li
                  key={faq.q}
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-start gap-5 px-5 sm:px-7 py-5 text-left cursor-pointer hover:bg-[var(--bg)] transition-colors"
                  >
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative transition-transform"
                      style={{
                        background: isOpen
                          ? "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)"
                          : "rgba(245,158,11,0.12)",
                        color: isOpen ? "#fff" : "#D97706",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus className="w-4 h-4" strokeWidth={2.75} />
                    </span>
                    <span
                      className="flex-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35] pt-1"
                      style={{ color: "var(--ink)" }}
                    >
                      {faq.q}
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
                        className="px-5 sm:px-7 pb-6 pl-[72px] sm:pl-[88px] text-[15px] sm:text-[16px] leading-[1.65]"
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

          <p
            className="mt-8 text-center text-[14.5px] leading-[1.6]"
            style={{ color: "var(--muted)" }}
          >
            Further reading:{" "}
            <Link
              href="/resources/blog/irvine-med-spa-seo-map-pack"
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              the 90-day Map Pack playbook for Irvine med spas
            </Link>{" "}
            walks through the same mechanics applied to one of the most competitive verticals in the city.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Still have questions?
            </span>
            <SecondaryButton asLink href="#contact">
              Ask a Local SEO strategist
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ChevronDown } from "lucide-react"
import { qrToolFaqs } from "./qr-generator-faq-data"

export { qrToolFaqs }

export function QrGeneratorFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section aria-labelledby="qr-faq-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="FAQ"
          heading={
            <span id="qr-faq-heading">
              QR code questions,{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">answered.</span>
              </span>
            </span>
          }
          paragraph="Quick answers about static vs. dynamic, scannability, logos, and tracking."
        />

        <div
          className="mt-12 max-w-[820px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-3">
            {qrToolFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <li
                  key={faq.q}
                  className="card-surface overflow-hidden"
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer"
                  >
                    <span
                      className="flex-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35]"
                      style={{ color: "var(--ink)" }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: "var(--accent)" }}
                      strokeWidth={2.25}
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
                        className="px-5 sm:px-6 pb-6 text-[15px] sm:text-[16px] leading-[1.65]"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: faq.a }}
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Still have questions about QR strategy?
            </span>
            <SecondaryButton asLink href="/contact">
              Book a free consult
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

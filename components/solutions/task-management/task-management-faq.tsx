"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ChevronDown } from "lucide-react"
import { taskMgmtFaqs } from "./task-management-faq-data"

export function TaskManagementFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section aria-labelledby="task-mgmt-faq-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="FAQ"
          heading={
            <span id="task-mgmt-faq-heading">
              Workflow automation,{" "}
              <span className="accent-underline">
                explained <span className="whitespace-nowrap">simply.</span>
              </span>
            </span>
          }
          paragraph="Common questions we get from ops-minded owners ready to stop doing the same thing 40 times a week."
        />

        <div className="mt-12 max-w-[820px] mx-auto" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          <ul className="space-y-3">
            {taskMgmtFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <li key={faq.q} className="card-surface overflow-hidden" style={{ borderRadius: "var(--radius-md)" }}>
                  <button type="button" aria-expanded={isOpen} onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full flex items-center gap-4 px-5 sm:px-6 py-5 text-left cursor-pointer">
                    <span className="flex-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35]" style={{ color: "var(--ink)" }}>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} style={{ color: "var(--accent)" }} strokeWidth={2.25} />
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-6 text-[15px] sm:text-[16px] leading-[1.65]" style={{ color: "var(--muted)" }}>{faq.a}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>Want us to audit your current workflows?</span>
            <SecondaryButton asLink href="#contact">Book a workflow audit</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

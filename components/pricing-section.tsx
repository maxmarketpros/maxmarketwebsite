"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "./ui/section-header"
import { PlanCard } from "./plans/hub/plan-card"
import { plans } from "@/lib/plans-data"

const visiblePlans = plans.filter((p) => p.slug !== "startermark")
const ANNUAL_DISCOUNT = 0.2

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          heading={
            <>
              Plans & <span className="accent-underline">Pricing</span>
            </>
          }
          paragraph="Choose the engine that fits your market territory. Transparent pricing built for home service growth."
        />

        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className="text-[15px] font-medium"
            style={{ color: isAnnual ? "var(--muted)" : "var(--ink)" }}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer"
            style={{
              background: isAnnual ? "var(--accent)" : "var(--border-color)",
            }}
            aria-label="Toggle annual pricing"
            aria-pressed={isAnnual}
          >
            <span
              className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-300"
              style={{
                left: "2px",
                transform: isAnnual ? "translateX(28px)" : "translateX(0)",
              }}
            />
          </button>
          <span
            className="text-[15px] font-medium flex items-center gap-2"
            style={{ color: isAnnual ? "var(--ink)" : "var(--muted)" }}
          >
            Annual
            {isAnnual && (
              <span
                className="text-[12px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "#DCFCE7", color: "#16A34A" }}
              >
                Save 20%
              </span>
            )}
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {visiblePlans.map((plan) => (
            <PlanCard
              key={plan.slug}
              plan={plan}
              isAnnual={isAnnual}
              annualDiscount={ANNUAL_DISCOUNT}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/plans"
            className="inline-flex items-center gap-2 text-[15px] font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            See all plans &amp; compare every feature
            <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </section>
  )
}

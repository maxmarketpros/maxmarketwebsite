"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { plans } from "@/lib/plans-data"
import { PlanCard } from "./plan-card"

const ANNUAL_DISCOUNT = 0.2

export function PlansCards() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="plans-cards" aria-labelledby="plans-cards-heading" className="relative">
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Choose your plan"
          heading={
            <span id="plans-cards-heading">
              Four plans, one obvious{" "}
              <span className="whitespace-nowrap">
                next <span className="accent-underline">move</span>.
              </span>
            </span>
          }
          paragraph="Every plan is fully managed in-house and built around the same goal: more booked jobs in your service area."
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-start">
          {plans.map((plan) => (
            <PlanCard
              key={plan.slug}
              plan={plan}
              isAnnual={isAnnual}
              annualDiscount={ANNUAL_DISCOUNT}
            />
          ))}
        </div>

        <p
          className="mt-10 text-center text-[14px]"
          style={{ color: "var(--muted)" }}
        >
          Need help deciding?{" "}
          <a
            href="#compare"
            className="font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Compare every feature &rarr;
          </a>
        </p>
      </div>
    </section>
  )
}

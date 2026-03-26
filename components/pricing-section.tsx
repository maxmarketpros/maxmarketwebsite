"use client"

import { useState } from "react"
import { SectionHeader } from "./ui/section-header"
import { PricingCard } from "./ui/pricing-card"
import { PrimaryButton } from "./ui/primary-button"
import { ArrowRight } from "lucide-react"

const plans = [
  {
    name: "LocalMark",
    price: "$399",
    annualPrice: "$349",
    buildout: "Includes $399 one‑time buildout",
    features: [
      "Website: 5 custom pages",
      "GMB verification & optimization",
      "Directories & maps listing",
      "Analytics & monthly reporting",
      "Contact center inbox",
      "Local SEO: 10 keywords",
    ],
  },
  {
    name: "ServicePro",
    price: "$699",
    annualPrice: "$599",
    buildout: "Includes $699 one‑time buildout",
    recommended: true,
    features: [
      "Website: 5–12 custom pages",
      "Voice search optimization",
      "Social media publishing + video",
      "Automated review generation",
      "Payments & invoicing CRM",
      "Missed call text-back tracking",
      "40+ premium maps & directories",
      "Local SEO: 15 keywords",
    ],
  },
  {
    name: "Signature",
    price: "$1,299",
    annualPrice: "$1,099",
    buildout: "Includes $999 one‑time buildout",
    features: [
      "Website: 12–24 custom pages",
      "80+ premium maps & directories",
      "Email marketing setup",
      "Managed professional blog",
      "Full social media management",
      "AI chatbot & review replies",
      "Local SEO: 20+ keywords",
    ],
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="relative">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div
        className="section-container relative z-10"
        style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
      >
        {/* Section heading */}
        <SectionHeader
          heading={
            <>
              Plans & <span className="accent-underline">Pricing</span>
            </>
          }
          paragraph="Choose the engine that fits your market territory. Transparent pricing built for home service growth."
        />

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className="text-[15px] font-medium"
            style={{ color: isAnnual ? 'var(--muted)' : 'var(--ink)' }}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer"
            style={{
              background: isAnnual ? 'var(--accent)' : 'var(--border-color)',
            }}
            aria-label="Toggle annual pricing"
          >
            <span
              className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-300"
              style={{
                left: '2px',
                transform: isAnnual ? 'translateX(28px)' : 'translateX(0)',
              }}
            />
          </button>
          <span
            className="text-[15px] font-medium flex items-center gap-2"
            style={{ color: isAnnual ? 'var(--ink)' : 'var(--muted)' }}
          >
            Annual
            {isAnnual && (
              <span
                className="text-[12px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: '#DCFCE7', color: '#16A34A' }}
              >
                Save 15%
              </span>
            )}
          </span>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              annualPrice={plan.annualPrice}
              isAnnual={isAnnual}
              buildout={plan.buildout}
              features={plan.features}
              recommended={plan.recommended}
            />
          ))}
        </div>

        {/* ROI banner */}
        <div
          className="mt-14 card-surface p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
          style={{ borderRadius: 'var(--radius-xl)' }}
        >
          <div>
            <h4
              className="text-[20px] sm:text-[22px] font-bold"
              style={{ color: 'var(--ink)' }}
            >
              Not sure which plan is right for you?
            </h4>
            <p
              className="mt-2 text-[16px]"
              style={{ color: 'var(--muted)' }}
            >
              Our average ServicePro client sees a strong ROI within the first 90 days of launch.
            </p>
          </div>
          <PrimaryButton asLink href="#contact" className="shrink-0">
            Calculate Your ROI
            <ArrowRight className="w-4 h-4 ml-2" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

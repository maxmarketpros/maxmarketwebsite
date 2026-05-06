"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ChevronDown } from "lucide-react"

type Faq = { q: string; a: string }

export const squarespaceFaqs: Faq[] = [
  {
    q: "How much does Squarespace website design cost?",
    a: "A custom Squarespace website design from Max Market Pros runs on a fixed monthly engagement that includes design, build, on-page SEO, schema, performance tuning, and post-launch support. That's a different category than a Fiverr freelancer ($300–$1.5K one-time, no SEO) or a generic agency ($8–25K + retainer). Most service-business builds finish in our 14-day cycle. We quote a flat number after a free intake call so there are no surprise add-ons.",
  },
  {
    q: "Is Squarespace good for SEO?",
    a: "Yes — when it's tuned correctly. Stock Squarespace handles the basics (clean URLs, HTTPS, mobile-first, sitemap.xml) but doesn't ship schema markup, optimized title tags, or compressed images by default. Our Squarespace website design process bakes in JSON-LD schema on every page, hand-written meta, image compression, fast-loading fonts, and an internal-linking topology that compounds. We routinely hit Lighthouse 90+ on mobile and rank service businesses on competitive local queries.",
  },
  {
    q: "Can you customize Squarespace beyond templates?",
    a: "Absolutely — that's the entire point of hiring a Squarespace developer. We push past defaults with custom CSS (typography overrides, animations, hover states), header and footer code injection, per-page custom code blocks, and Squarespace's developer mode where the project warrants it. If you can describe it, we can almost certainly build it inside Squarespace 7.1 + Fluid Engine.",
  },
  {
    q: "How long does a Squarespace website design project take?",
    a: "Standard turnaround is 14 days from kickoff to launch — Day 1 strategy, Day 3 wireframes, Day 7 visual design, Day 11 build-out and integrations, Day 14 QA and DNS cutover. Bigger sites (15+ pages, e-commerce, or member areas) run 21–30 days. We give you a fixed timeline at quote, then send progress updates against that schedule.",
  },
  {
    q: "Can you migrate my existing site to Squarespace?",
    a: "Yes. We migrate from WordPress, Wix, GoDaddy, Webflow, Shopify, and dead/abandoned hosts onto Squarespace without losing rankings. Every migration includes a 301 redirect map (old URL → new URL), a content audit so we don't ship duplicate or thin pages, an indexing check after launch, and a zero-downtime DNS cutover window. Most businesses see traffic recover or grow within 30 days.",
  },
  {
    q: "Do you build Squarespace ecommerce stores?",
    a: "Yes — full Squarespace Commerce builds, including product catalog, variants, inventory, shipping rules, taxes, abandoned-cart recovery, Stripe + PayPal + Apple Pay checkout, and conversion-tuned product page templates. We also wire up GA4 e-commerce tracking and Meta Pixel for ROAS visibility. For high-SKU or B2B catalogs we'll flag if Shopify is a better fit before quoting.",
  },
  {
    q: "Will my Squarespace site be fast on mobile?",
    a: "Yes. Squarespace gets a bad rap on speed because most builds skip the basic optimization steps. Every Squarespace website design we ship goes through pre-launch image compression (WebP + size variants), font subsetting and deferral, third-party script audits, and a Lighthouse pass on a real mid-tier Android device. Most of our sites land at Lighthouse 88–95 on mobile.",
  },
  {
    q: "Do you handle ongoing Squarespace support after launch?",
    a: "Yes. Every project includes 30 days of post-launch support free, then transitions to an optional support retainer for content updates, new sections, monthly Lighthouse re-checks, plugin/integration upkeep, and SEO refreshes. You own the Squarespace site outright — no platform lock-in to us.",
  },
]

export function SquarespaceFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="squarespace-faq"
      aria-labelledby="squarespace-faq-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Squarespace website design FAQ"
          heading={
            <span id="squarespace-faq-heading">
              Real answers, before you{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">commit a budget</span>.
              </span>
            </span>
          }
          paragraph="The most common questions we get from businesses researching Squarespace website design — pricing, SEO, customization, timelines, and what separates a real custom build from a stock template."
        />

        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-3">
            {squarespaceFaqs.map((faq, idx) => {
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
                          ? "linear-gradient(180deg, #161616 0%, #0B0B0B 100%)"
                          : "rgba(11,11,11,0.08)",
                        color: isOpen ? "#fff" : "#0B0B0B",
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
                        color: isOpen ? "#0B0B0B" : "var(--muted)",
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
              Talk to a Squarespace designer
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SquarespaceFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: squarespaceFaqs.map((f) => ({
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

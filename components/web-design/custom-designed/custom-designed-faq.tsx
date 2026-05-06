"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { ChevronDown } from "lucide-react"

const CD_ROSE = "#F43F5E"

type Faq = { q: string; a: React.ReactNode; aText: string }

export const customDesignedFaqs: Faq[] = [
  {
    q: "What does “custom website design” actually include?",
    aText:
      "A full bespoke design system: type ramp, color tokens, spacing scale, motion easing, custom illustrations, and pixel-perfect Figma frames for every page at every breakpoint (desktop, tablet, mobile). We then build it on the platform that fits your team — Webflow, Squarespace, WordPress, or hand-coded Next.js — and hand off the working design system in Figma so future pages stay on-brand.",
    a: (
      <>
        A full bespoke design system: type ramp, color tokens, spacing scale,
        motion easing, custom illustrations, and pixel-perfect Figma frames at
        every breakpoint. We then build it on the platform that fits your team —
        Webflow, Squarespace, WordPress, or hand-coded Next.js — and hand off
        the working design system in Figma so future pages stay on-brand.
      </>
    ),
  },
  {
    q: "How is custom design different from your custom-coded service?",
    aText:
      "Custom-coded is engineering-led: we hand-write Next.js, React, and TypeScript for raw performance and code ownership. Custom-designed is design-led: we start from your brand and design every pixel before any code is written. Most of our best work pairs them — bespoke design built on a custom-coded stack — but you can also pair this design service with Webflow, Squarespace, or WordPress.",
    a: (
      <>
        Our{" "}
        <a
          href="/services/web-design/custom-coded"
          style={{ color: CD_ROSE, fontWeight: 600 }}
        >
          custom-coded
        </a>{" "}
        service is engineering-led — hand-written Next.js, React, and TypeScript
        for raw performance and code ownership. <strong>Custom-designed</strong>{" "}
        is design-led: we start from your brand and design every pixel before
        any code is written. The two pair well — bespoke design built on a
        custom-coded stack — but custom-designed also works with{" "}
        <a
          href="/services/web-design/webflow"
          style={{ color: CD_ROSE, fontWeight: 600 }}
        >
          Webflow
        </a>
        ,{" "}
        <a
          href="/services/web-design/squarespace"
          style={{ color: CD_ROSE, fontWeight: 600 }}
        >
          Squarespace
        </a>
        , or{" "}
        <a
          href="/services/web-design/wordpress"
          style={{ color: CD_ROSE, fontWeight: 600 }}
        >
          WordPress
        </a>
        .
      </>
    ),
  },
  {
    q: "How long does a custom website design take?",
    aText:
      "Six to eight weeks end-to-end. Week 1 is discovery and creative brief. Week 2 is mood board direction (you pick from three). Weeks 3–5 are hi-fi design and a working design system. Weeks 6–8 are implementation on your chosen platform with pixel-matching review. Larger sites with 30+ unique templates run 9–12 weeks; we lock the timeline in the kickoff call.",
    a: (
      <>
        Six to eight weeks end-to-end. Week 1 is discovery and creative brief.
        Week 2 is mood board direction (you pick from three). Weeks 3&ndash;5
        are hi-fi design and a working design system. Weeks 6&ndash;8 are
        implementation on your chosen platform with a pixel-matching review.
        Larger sites with 30+ unique templates run 9&ndash;12 weeks &mdash; we
        lock the timeline in the kickoff call.
      </>
    ),
  },
  {
    q: "How many design revisions do I get?",
    aText:
      "Three structured rounds: R1 locks creative direction (mood board), R2 refines the hi-fi design, R3 polishes every breakpoint and state. Each round happens in your Figma file with comments, an async Loom walkthrough, and a live working session. Beyond R3, additional revisions are billed hourly — but in 90% of projects R1–R3 covers everything.",
    a: (
      <>
        Three structured rounds: R1 locks creative direction (mood board), R2
        refines the hi-fi design, R3 polishes every breakpoint and state. Each
        round happens in your Figma file with comments, an async Loom
        walkthrough, and a live working session. Beyond R3, extra revisions are
        billed hourly &mdash; in 90% of projects R1&ndash;R3 covers everything.
      </>
    ),
  },
  {
    q: "Can you design and build, or just design?",
    aText:
      "Both. Most clients pick the design + build package — we ship the live site, fully implemented. If you have an in-house dev team or another agency you trust, we'll deliver a production-ready Figma file with a complete design system, asset library, and component spec sheet your developers can build from. The deliverable quality is the same; only the launch path differs.",
    a: (
      <>
        Both. Most clients pick the <strong>design + build</strong> package
        &mdash; we ship the live site, fully implemented. If you have an
        in-house dev team or another agency you trust, we&rsquo;ll deliver a
        production-ready Figma file with a complete design system, asset
        library, and component spec sheet your developers can build from. Same
        deliverable quality &mdash; only the launch path differs.
      </>
    ),
  },
  {
    q: "Do I get the working Figma file when we’re done?",
    aText:
      "Yes — every custom website design ships with the source Figma file, fully organized: pages, components, variants, design tokens, and auto-layout. Your in-house designer or marketer can spin up new pages without breaking the brand, and any other agency can pick up the file with zero ramp time. You own the design system, not just the rendered pixels.",
    a: (
      <>
        Yes &mdash; every custom website design ships with the source Figma
        file, fully organized: pages, components, variants, design tokens, and
        auto-layout. Your in-house designer can spin up new pages without
        breaking the brand, and any other agency can pick up the file with zero
        ramp time. You own the design system, not just the rendered pixels.
      </>
    ),
  },
  {
    q: "How do you make sure the design actually converts?",
    aText:
      "Design-for-conversion is baked into the brief. Every page gets a primary CTA goal locked in week 1, hierarchy is built around that goal, and we annotate every section with the conversion role it plays. Post-launch we set up event tracking (clicks, scroll depth, form completes) so you can measure design impact, not just feel it. Most clients see 1.5×–3× conversion lift over the templated site they replaced.",
    a: (
      <>
        Design-for-conversion is baked in. Every page gets a primary CTA goal
        locked in week 1, hierarchy is built around that goal, and we annotate
        every section with the conversion role it plays. Post-launch we set up
        event tracking so you can measure design impact, not just feel it. Most
        clients see 1.5&times;&ndash;3&times; conversion lift over the
        templated site they replaced.
      </>
    ),
  },
  {
    q: "What does a custom website design cost?",
    aText:
      "Custom design pricing depends on page count, brand maturity, illustration scope, and the build platform you choose. We quote a fixed price after a free 20-minute discovery call — no hourly billing, no surprises. To get a number, share your current site (or sketch what you want) and we'll come back with a scoped proposal in 48 hours.",
    a: (
      <>
        Pricing depends on page count, brand maturity, illustration scope, and
        the build platform you choose. We quote a fixed price after a free
        20-minute discovery call &mdash; no hourly billing, no surprises. Share
        your current site or sketch what you want and we&rsquo;ll come back
        with a scoped proposal in 48 hours.{" "}
        <a
          href="#contact"
          style={{ color: CD_ROSE, fontWeight: 600 }}
        >
          Start your intake →
        </a>
      </>
    ),
  },
]

export function CustomDesignedFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="custom-designed-faq"
      aria-labelledby="custom-designed-faq-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Custom website design FAQ"
          heading={
            <span id="custom-designed-faq-heading">
              Real answers, before you{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(244,63,94,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  brief a designer
                </span>
                .
              </span>
            </span>
          }
          paragraph="The most common questions we get from teams researching custom website design — scope, timeline, revisions, deliverables, and pricing."
        />

        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ul className="space-y-3">
            {customDesignedFaqs.map((faq, idx) => {
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
                          ? `linear-gradient(180deg, #FB7185 0%, ${CD_ROSE} 100%)`
                          : "rgba(244,63,94,0.10)",
                        color: isOpen ? "#fff" : CD_ROSE,
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
                        color: isOpen ? CD_ROSE : "var(--muted)",
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
                      <div
                        className="px-5 sm:px-6 pb-6 pl-[68px] sm:pl-[80px] text-[15px] sm:text-[16px] leading-[1.65]"
                        style={{ color: "var(--muted)" }}
                      >
                        {faq.a}
                      </div>
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
              Talk to a custom design strategist
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CustomDesignedFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: customDesignedFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.aText },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

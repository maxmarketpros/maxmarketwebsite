"use client"

import { useState } from "react"
import Link from "next/link"
import { Sparkles, Syringe, Smile, Stethoscope, HeartPulse, Check, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Clinic = {
  key: string
  name: string
  shortName: string
  accent: string
  Icon: LucideIcon
  icons8Id: string
  quote: string
  stat: { value: string; label: string }
  pains: string[]
  stack: { label: string; href: string }[]
}

const clinics: Clinic[] = [
  {
    key: "medspa",
    name: "Med Spa",
    shortName: "Med Spa",
    accent: "#F43F5E",
    Icon: Sparkles,
    icons8Id: "23042",
    quote: "My weekend is booked a month out, but Tuesdays are dead and I can't answer DMs fast enough.",
    stat: { value: "57%", label: "of med-spa consults book after 5pm" },
    pains: [
      "Instagram leads go cold in the DMs overnight",
      "No-shows wreck low-margin weekday blocks",
      "Meta flags before/after creative every launch",
    ],
    stack: [
      { label: "Social Media",      href: "/services/social-media" },
      { label: "Instagram Ads",     href: "/services/paid-ads/instagram-ads" },
      { label: "Lead Generation",   href: "/solutions/lead-generation" },
      { label: "AI Agents",         href: "/solutions/ai-agents" },
      { label: "Calendar",          href: "/solutions/calendar" },
      { label: "Payments",          href: "/solutions/payments" },
    ],
  },
  {
    key: "derm",
    name: "Dermatology & Plastic Surgery",
    shortName: "Derm & Plastic",
    accent: "#EC4899",
    Icon: Syringe,
    icons8Id: "MuQfy47ptidH",
    quote: "One consult is worth thousands, but we pay a fortune per lead and half of them ghost.",
    stat: { value: "$2,400", label: "average lifetime value of a cosmetic lead" },
    pains: [
      "High CPLs on Google's health category",
      "Consent paperwork eats the first visit",
      "No clean attribution between ads and surgeries",
    ],
    stack: [
      { label: "Local SEO",         href: "/services/seo/local" },
      { label: "Google Ads",        href: "/services/paid-ads/google-ads" },
      { label: "Document Signing",  href: "/solutions/document-signing" },
      { label: "Calendar",          href: "/solutions/calendar" },
      { label: "Review Generation", href: "/services/social-media/review-generation" },
    ],
  },
  {
    key: "dental",
    name: "Dental & Orthodontic",
    shortName: "Dental & Ortho",
    accent: "#1677FF",
    Icon: Smile,
    icons8Id: "14868",
    quote: "We spend on ads but most people just comparison-shop \u2014 we never see the consult.",
    stat: { value: "3\u00D7", label: "cheaper Invisalign leads with a quiz funnel" },
    pains: [
      "Patients shop 4\u20135 practices before booking",
      "Insurance pre-qualification slows lead speed",
      "Google Ads keyword inventory is brutally expensive",
    ],
    stack: [
      { label: "Web Design",       href: "/services/web-design" },
      { label: "Facebook Ads",     href: "/services/paid-ads/facebook-ads" },
      { label: "Lead Generation",  href: "/solutions/lead-generation" },
      { label: "Calendar",         href: "/solutions/calendar" },
      { label: "Analytics",        href: "/solutions/analytics" },
    ],
  },
  {
    key: "chiro",
    name: "Chiropractic & PT",
    shortName: "Chiro & PT",
    accent: "#0F766E",
    Icon: Stethoscope,
    icons8Id: "ZIiKmAjYlK4S",
    quote: "Patients come in hot after an injury, then disappear \u2014 we need them back at 90 days.",
    stat: { value: "70%", label: "of chiro patients re-engage if nurtured at 90 days" },
    pains: [
      "Most leads are injury-moment, zero follow-up",
      "Compliance around 'special offers' is murky",
      "Local SEO is flat against bigger franchise shops",
    ],
    stack: [
      { label: "Local SEO",        href: "/services/seo/local" },
      { label: "Email & SMS",      href: "/solutions/email-marketing" },
      { label: "Calendar",         href: "/solutions/calendar" },
      { label: "Analytics",        href: "/solutions/analytics" },
      { label: "Facebook Ads",     href: "/services/paid-ads/facebook-ads" },
    ],
  },
  {
    key: "wellness",
    name: "Wellness, IV & Weight-loss",
    shortName: "Wellness / IV",
    accent: "#22C55E",
    Icon: HeartPulse,
    icons8Id: "3AuIQ5jPt28G",
    quote: "GLP-1 inquiries doubled overnight and our intake flow wasn't ready for it.",
    stat: { value: "4.2\u00D7", label: "higher LTV when GLP-1 clients join a membership" },
    pains: [
      "LegitScript monitoring gates your ad accounts",
      "Intake forms aren't built for BMI pre-qual",
      "Churn kills memberships without email/SMS flows",
    ],
    stack: [
      { label: "Web Design",       href: "/services/web-design" },
      { label: "Payments",         href: "/solutions/payments" },
      { label: "Email & SMS",      href: "/solutions/email-marketing" },
      { label: "AI Agents",        href: "/solutions/ai-agents" },
      { label: "Social Media",     href: "/services/social-media" },
    ],
  },
]

export function MedClinicSelector() {
  const [activeKey, setActiveKey] = useState(clinics[0].key)
  const active = clinics.find((c) => c.key === activeKey) ?? clinics[0]

  return (
    <section
      id="clinic-selector"
      aria-labelledby="med-clinic-heading"
      className="relative scroll-mt-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Who We Serve"
          heading={
            <span id="med-clinic-heading">
              Pick your practice &mdash;{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">we&rsquo;ll show you the stack</span>.
              </span>
            </span>
          }
          paragraph="Five practice types, five different stacks. Click a tab to see the recommended services and solutions for that clinic."
        />

        {/* Tab row */}
        <div
          className="mt-10 sm:mt-12 -mx-4 sm:mx-0 overflow-x-auto"
          role="tablist"
          aria-label="Clinic types"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-2.5 px-4 sm:px-0 sm:flex-wrap sm:justify-center min-w-max sm:min-w-0">
            {clinics.map((c) => {
              const isActive = c.key === activeKey
              return (
                <button
                  key={c.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveKey(c.key)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13.5px] font-semibold transition-all duration-200 hover:translate-y-[-1px]"
                  style={{
                    background: isActive ? c.accent : "transparent",
                    color: isActive ? "#fff" : c.accent,
                    border: `1.5px solid ${isActive ? c.accent : `${c.accent}55`}`,
                    boxShadow: isActive ? `0 8px 20px ${c.accent}33` : "none",
                  }}
                >
                  <c.Icon className="w-4 h-4" strokeWidth={2.3} />
                  {c.shortName}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content panel */}
        <div
          key={active.key}
          className="card-surface relative overflow-hidden mt-6 sm:mt-8 p-6 sm:p-8 lg:p-10"
          style={{
            borderRadius: "28px",
            animation: "fadeInUp 0.4s ease-out both",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 70% 50% at 20% 10%, ${active.accent}14 0%, transparent 65%)` }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Column A: identity */}
            <div className="lg:col-span-4">
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 rounded-[var(--radius-md)] p-2.5 flex items-center justify-center"
                  style={{ background: `${active.accent}14`, border: `1px solid ${active.accent}33` }}
                >
                  <img
                    src={icons8Url(active.icons8Id, 176)}
                    alt=""
                    width={72}
                    height={72}
                    className="w-[68px] h-[68px]"
                    loading="eager"
                  />
                </div>
                <div>
                  <span
                    className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                    style={{ background: `${active.accent}14`, color: active.accent }}
                  >
                    <active.Icon className="w-3 h-3" strokeWidth={2.5} />
                    Active
                  </span>
                  <h3 className="mt-2 text-[22px] sm:text-[24px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                    {active.name}
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-[15px] italic leading-[1.6]" style={{ color: "var(--muted)" }}>
                &ldquo;{active.quote}&rdquo;
              </p>
              <div
                className="mt-5 flex items-baseline gap-3 pt-4"
                style={{ borderTop: "1px solid var(--border-color)" }}
              >
                <span className="text-[32px] sm:text-[36px] font-bold tracking-[-0.02em] leading-none" style={{ color: active.accent }}>
                  {active.stat.value}
                </span>
                <span className="text-[13px]" style={{ color: "var(--muted)" }}>
                  {active.stat.label}
                </span>
              </div>
            </div>

            {/* Column B: pains */}
            <div className="lg:col-span-4">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                Their top 3 pains
              </h4>
              <ul className="mt-4 space-y-3">
                {active.pains.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: `${active.accent}1F` }}
                    >
                      <Check className="w-3 h-3" style={{ color: active.accent }} strokeWidth={3} />
                    </div>
                    <span className="text-[14.5px] leading-[1.55]" style={{ color: "var(--ink)" }}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column C: recommended stack */}
            <div className="lg:col-span-4">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                Your recommended stack
              </h4>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {active.stack.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[12.5px] font-semibold transition-colors"
                    style={{
                      background: `${active.accent}14`,
                      color: active.accent,
                      border: `1px solid ${active.accent}2E`,
                    }}
                  >
                    {s.label}
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-[13px]" style={{ color: "var(--muted)" }}>
          Not sure?{" "}
          <Link href="#contact" className="font-semibold" style={{ color: active.accent }}>
            Book a consult and we&rsquo;ll map it for you &rarr;
          </Link>
        </p>
      </div>
    </section>
  )
}

"use client"

import { Check } from "lucide-react"
import { SectionHeader } from "./ui/section-header"
import { icons8Url } from "@/lib/icons8"

type InfraCard = {
  pill: string
  pillColor: string
  auraColor: string
  iconIds: string | string[]
  title: string
  description: string
  bullets: string[]
}

const cards: InfraCard[] = [
  {
    pill: "Websites",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.13)",
    iconIds: "102562",
    title: "Custom SEO Websites",
    description:
      "Fast, mobile‑first sites engineered to turn local search traffic into booked jobs.",
    bullets: [
      "High‑conversion design",
      "On‑page technical SEO",
      "Premium managed hosting",
    ],
  },
  {
    pill: "Local SEO",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.14)",
    iconIds: "32215",
    title: "Google Map Pack Dominance",
    description:
      "Claim top map‑pack positions where local customers are ready to call.",
    bullets: [
      "Keyword rank tracking",
      "Weekly profile updates",
      "Local citation building",
    ],
  },
  {
    pill: "Lead Management",
    pillColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.14)",
    iconIds: "z9qAuS0WaMJk",
    title: "CRM & Missed Call Tracking",
    description:
      "Auto‑text missed calls and track every lead — never lose a job again.",
    bullets: [
      "Unified communications inbox",
      "Automated lead follow‑up",
      "ROI & pipeline tracking",
    ],
  },
  {
    pill: "Social Media",
    pillColor: "#EC4899",
    auraColor: "rgba(236,72,153,0.14)",
    iconIds: ["118497", "32323", "118640", "17949"],
    title: "Complete Social Media Management",
    description:
      "Fully managed social presence that builds authority, brand awareness, and local engagement.",
    bullets: [
      "Custom branded content",
      "Proactive engagement",
      "Audience targeting & brand authority",
    ],
  },
]

export function InfrastructureSection() {
  return (
    <section id="features" className="relative">
      {/* Subtle noise */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Our Digital Infrastructure"
          heading={
            <>
              Built to rank.
              <br />
              Engineered to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">close</span>.
              </span>
            </>
          }
          paragraph="We provide the complete marketing engine required to dominate local search and capture every lead across your territory."
        />

        <div
          className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="card-surface card-surface-hover relative overflow-hidden p-7 md:p-8"
            >
              {/* Aura — mobile/tablet: top */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 w-full h-[55%] lg:hidden"
                style={{
                  background: `radial-gradient(ellipse 70% 100% at 50% 30%, ${card.auraColor} 0%, transparent 70%)`,
                }}
              />
              {/* Aura — desktop: right */}
              <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-full w-[60%] hidden lg:block"
                style={{
                  background: `radial-gradient(ellipse 70% 70% at 75% 50%, ${card.auraColor} 0%, transparent 70%)`,
                }}
              />

              <div className="relative flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_auto] lg:items-center">
                {/* Icon — top on mobile/tablet, right on desktop */}
                <div className="order-1 lg:order-2 flex items-center justify-center shrink-0 w-full lg:w-[200px] h-[140px] lg:h-[200px]">
                  {Array.isArray(card.iconIds) ? (
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {card.iconIds.map((id) => (
                        <img
                          key={id}
                          src={icons8Url(id, 128)}
                          alt=""
                          width={80}
                          height={80}
                          loading="lazy"
                          decoding="async"
                          className="w-[64px] h-[64px] sm:w-20 sm:h-20 object-contain"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={icons8Url(card.iconIds, 200)}
                      alt=""
                      width={176}
                      height={176}
                      loading="lazy"
                      decoding="async"
                      className="w-[120px] h-[120px] sm:w-[176px] sm:h-[176px] object-contain"
                    />
                  )}
                </div>

                {/* Text */}
                <div className="order-2 lg:order-1 min-w-0 w-full">
                  <span
                    className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                    style={{
                      background: `${card.pillColor}1A`,
                      color: card.pillColor,
                    }}
                  >
                    {card.pill}
                  </span>
                  <h3
                    className="mt-4 text-[22px] sm:text-[24px] font-bold leading-[1.2] tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-2 text-[15px] leading-[1.55]"
                    style={{ color: "var(--muted)" }}
                  >
                    {card.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {card.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[14px]"
                        style={{ color: "var(--ink)" }}
                      >
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: "var(--accent-bg)",
                            color: "var(--accent)",
                          }}
                        >
                          <Check className="w-3 h-3" strokeWidth={2.5} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

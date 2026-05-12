"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, X } from "lucide-react"
import { getIcon } from "@/components/plans/hub/icon-map"
import { PLAN_ACCENT, PLAN_LABEL, PLAN_ICON } from "@/lib/a-la-carte-catalog"
import { type UpsellRecommendation } from "@/lib/a-la-carte-pricing"

interface UpsellBannerProps {
  recommendation: UpsellRecommendation | null
}

export function UpsellBanner({ recommendation }: UpsellBannerProps) {
  const [dismissedTier, setDismissedTier] = useState<string | null>(null)

  // Re-show when a different tier gets recommended
  useEffect(() => {
    if (recommendation && recommendation.tier !== dismissedTier) {
      setDismissedTier(null)
    }
  }, [recommendation, dismissedTier])

  if (!recommendation) return null
  if (dismissedTier === recommendation.tier) return null

  const tier = recommendation.tier
  const accent = PLAN_ACCENT[tier]
  const Icon = getIcon(PLAN_ICON[tier])

  return (
    <div
      role="status"
      aria-live="polite"
      className="relative rounded-[var(--radius-xl)] overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${accent}14 0%, ${accent}06 60%, transparent 100%)`,
        border: `1px solid ${accent}40`,
        boxShadow: `0 1px 3px var(--shadow-color), 0 10px 30px ${accent}1A`,
        animation: "fadeInUp 0.5s ease-out both",
      }}
    >
      {/* Radial accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 w-[280px] h-[280px] rounded-full"
        style={{ background: `radial-gradient(circle, ${accent}33 0%, transparent 60%)` }}
      />

      {/* Dismiss */}
      <button
        type="button"
        onClick={() => setDismissedTier(tier)}
        aria-label="Dismiss upsell"
        className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-black/5 cursor-pointer"
        style={{ color: "var(--muted)" }}
      >
        <X className="w-3.5 h-3.5" strokeWidth={2.4} />
      </button>

      <div className="relative p-5 sm:p-6 lg:p-7 flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-6">
        {/* Icon tile */}
        <span
          className="w-14 h-14 rounded-[16px] flex items-center justify-center shrink-0"
          style={{
            background: `linear-gradient(135deg, ${accent} 0%, ${accent}CC 100%)`,
            color: "#fff",
            boxShadow: `0 6px 18px ${accent}55`,
          }}
        >
          <Icon className="w-7 h-7" strokeWidth={2} />
        </span>

        {/* Text */}
        <div className="flex-1">
          <span
            className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full mb-2"
            style={{ background: `${accent}1F`, color: accent, border: `1px solid ${accent}40` }}
          >
            <Sparkles className="w-2.5 h-2.5" strokeWidth={2.6} />
            Smart suggestion
          </span>
          <h3
            className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[1.25] tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            You may fit{" "}
            <span style={{ color: accent }}>{PLAN_LABEL[tier]}</span> better.
          </h3>
          <p
            className="mt-1.5 text-[14px] sm:text-[14.5px] leading-[1.55]"
            style={{ color: "var(--muted)" }}
          >
            {recommendation.reason}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
          <Link
            href={`/plans/${tier}`}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-[var(--radius-sm)] font-semibold text-[14px] text-white transition-all duration-200 hover:translate-y-[-1px] whitespace-nowrap"
            style={{
              background: `linear-gradient(180deg, ${accent} 0%, ${accent}E0 100%)`,
              boxShadow: `0 2px 8px ${accent}40`,
            }}
          >
            See {PLAN_LABEL[tier]} plan
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </Link>
          <button
            type="button"
            onClick={() => setDismissedTier(tier)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[var(--radius-sm)] font-semibold text-[13.5px] transition-colors hover:bg-black/5 whitespace-nowrap cursor-pointer"
            style={{ color: "var(--muted)" }}
          >
            Keep building
          </button>
        </div>
      </div>
    </div>
  )
}

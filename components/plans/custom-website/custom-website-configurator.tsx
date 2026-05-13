"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Layers,
  Sparkles,
  Home,
  User,
  Wrench,
  MapPin,
  Image as ImageIcon,
  MessageSquare,
  FileText,
  Star,
  Phone,
  DollarSign,
  Briefcase,
  BookOpen,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import {
  customWebsiteTiers,
  idealFor,
  pageAllocations,
  timelinePerTier,
  type TierKey,
  type PageChip,
} from "@/lib/custom-website-data"

type Option = TierKey | "custom"

const OPTIONS: Option[] = [5, 11, 21, 51, "custom"]

const accentByTier: Record<TierKey, string> = {
  5: "#1677FF",
  11: "#22C55E",
  21: "#F59E0B",
  51: "#EC4899",
}

const customAccent = "#7C3AED"

const iconMap = {
  Home,
  User,
  Wrench,
  MapPin,
  Image: ImageIcon,
  MessageSquare,
  FileText,
  Star,
  Phone,
  DollarSign,
  Briefcase,
  BookOpen,
} as const

function tierBlurb(t: Option): string {
  if (t === "custom") return "Need more than 51 pages? Multi-location, big service catalog, or e-commerce — we'll scope it on a strategy call."
  return customWebsiteTiers.find((c) => c.pages === t)?.blurb ?? ""
}

function tierPrice(t: Option): string {
  if (t === "custom") return "Custom"
  return customWebsiteTiers.find((c) => c.pages === t)?.price ?? ""
}

function accentFor(t: Option) {
  return t === "custom" ? customAccent : accentByTier[t]
}

function tierLabel(t: Option): string {
  return t === "custom" ? "Custom (51+ pages)" : `${t}-page site`
}

function Chip({ chip, accent, idx }: { chip: PageChip; accent: string; idx: number }) {
  const Icon = iconMap[chip.iconName]
  return (
    <li
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] text-[12px] font-semibold transition-all"
      style={{
        background: `${accent}0F`,
        border: `1px solid ${accent}33`,
        color: "var(--ink)",
        animation: `fadeInUp 0.4s ease-out ${Math.min(idx * 14, 720)}ms both`,
      }}
    >
      {Icon && (
        <Icon
          className="w-3.5 h-3.5 shrink-0"
          strokeWidth={2.4}
          style={{ color: accent }}
        />
      )}
      {chip.label}
    </li>
  )
}

export function CustomWebsiteConfigurator() {
  const [selected, setSelected] = useState<Option>(21)
  const accent = accentFor(selected)

  const pages = useMemo<PageChip[]>(() => {
    if (selected === "custom") return pageAllocations[51]
    return pageAllocations[selected]
  }, [selected])

  return (
    <section
      id="sizing"
      aria-labelledby="sizing-heading"
      className="relative scroll-mt-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-5%] w-[520px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[5%] right-[-5%] w-[520px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Pick your size"
          heading={
            <span id="sizing-heading">
              How many pages do{" "}
              <span className="whitespace-nowrap">
                you <span className="accent-underline">need</span>?
              </span>
            </span>
          }
          paragraph="Tap a size — the price and pages update instantly. Most local service businesses land on the 21-page tier."
        />

        {/* Segmented control */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Page count"
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-full max-w-full"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow: "0 1px 2px var(--shadow-color), 0 4px 16px var(--shadow-color)",
            }}
          >
            {OPTIONS.map((opt) => {
              const isActive = selected === opt
              const optAccent = accentFor(opt)
              return (
                <button
                  key={String(opt)}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelected(opt)}
                  className="px-3.5 sm:px-5 py-2.5 rounded-full text-[13px] sm:text-[14px] font-bold transition-all duration-200 cursor-pointer whitespace-nowrap"
                  style={{
                    background: isActive
                      ? `linear-gradient(180deg, ${optAccent}E6 0%, ${optAccent} 100%)`
                      : "transparent",
                    color: isActive ? "#fff" : "var(--ink)",
                    boxShadow: isActive ? `0 4px 14px ${optAccent}55` : "none",
                  }}
                >
                  {opt === "custom" ? "Custom 50+" : `${opt} pages`}
                </button>
              )
            })}
          </div>
        </div>

        {/* Live preview card */}
        <div
          className="mt-10 grid lg:grid-cols-[1fr_1.25fr] gap-6 lg:gap-8 items-stretch"
          style={{ animation: "fadeInUp 0.5s ease-out both" }}
          key={String(selected)}
        >
          {/* LEFT — price + meta */}
          <div
            className="relative rounded-[var(--radius-xl)] p-6 sm:p-8 overflow-hidden min-w-0"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow: "0 1px 3px var(--shadow-color), 0 12px 36px var(--shadow-color)",
            }}
          >
            <div
              aria-hidden
              className="absolute -top-24 -right-16 w-[320px] h-[320px] rounded-full transition-colors duration-500"
              style={{ background: `radial-gradient(circle, ${accent}1F 0%, transparent 65%)` }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.1em] transition-colors duration-500"
                  style={{ background: `${accent}1A`, color: accent, border: `1px solid ${accent}40` }}
                >
                  <Layers className="w-3 h-3" strokeWidth={2.4} />
                  {tierLabel(selected)}
                </span>
                {selected === 21 && (
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.1em]"
                    style={{ background: "rgba(245,158,11,0.14)", color: "#B45309", border: "1px solid rgba(245,158,11,0.40)" }}
                  >
                    <Sparkles className="w-3 h-3" strokeWidth={2.4} />
                    Most popular
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-baseline gap-2 flex-wrap">
                <span
                  className="text-[52px] sm:text-[64px] font-bold leading-none tracking-[-0.03em] tabular-nums transition-colors duration-500"
                  style={{ color: accent }}
                >
                  {tierPrice(selected)}
                </span>
                {selected !== "custom" && (
                  <span className="text-[15px] font-semibold" style={{ color: "var(--muted)" }}>
                    one-time
                  </span>
                )}
              </div>

              <p className="mt-3 text-[15.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
                {tierBlurb(selected)}
              </p>

              <dl className="mt-7 grid grid-cols-2 gap-3">
                <div
                  className="rounded-[var(--radius-sm)] px-3.5 py-3"
                  style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
                >
                  <dt
                    className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Best for
                  </dt>
                  <dd className="mt-1 text-[13px] font-semibold leading-snug" style={{ color: "var(--ink)" }}>
                    {selected === "custom"
                      ? "Big businesses · multi-location · e-commerce"
                      : idealFor[selected]}
                  </dd>
                </div>
                <div
                  className="rounded-[var(--radius-sm)] px-3.5 py-3"
                  style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
                >
                  <dt
                    className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Live in
                  </dt>
                  <dd className="mt-1 text-[13px] font-semibold leading-snug" style={{ color: "var(--ink)" }}>
                    {selected === "custom" ? "Scoped on call" : timelinePerTier[selected]}
                  </dd>
                </div>
              </dl>

              <Link
                href="/contact/schedule"
                className="mt-7 inline-flex items-center justify-center gap-1.5 w-full px-6 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background: `linear-gradient(180deg, ${accent}E6 0%, ${accent} 100%)`,
                  boxShadow: `0 1px 2px rgba(17,35,68,0.1), 0 8px 24px ${accent}40`,
                }}
              >
                {selected === "custom"
                  ? "Get a custom quote"
                  : `Get my ${selected}-page site`}
                <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
              </Link>
            </div>
          </div>

          {/* RIGHT — page list */}
          <div
            className="relative rounded-[var(--radius-xl)] p-6 sm:p-8 min-w-0"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow: "0 1px 3px var(--shadow-color), 0 12px 36px var(--shadow-color)",
            }}
          >
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <span
                  className="text-[10.5px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "var(--muted)" }}
                >
                  Pages on your site
                </span>
                <h3
                  className="mt-1 text-[18px] sm:text-[20px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  What fits in a {selected === "custom" ? "51+" : selected}-page site.
                </h3>
              </div>
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.1em] tabular-nums transition-colors duration-500"
                style={{ background: `${accent}14`, color: accent, border: `1px solid ${accent}33` }}
              >
                {pages.length} pages
              </span>
            </div>

            <ul
              className="mt-5 flex flex-wrap gap-1.5 sm:gap-2"
              key={String(selected)}
              style={{ animation: "fadeInUp 0.45s ease-out both" }}
            >
              {pages.map((p, i) => (
                <Chip
                  key={`${String(selected)}-${i}-${p.label}`}
                  chip={p}
                  accent={accent}
                  idx={i}
                />
              ))}
              {selected === "custom" && (
                <li
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] text-[12px] font-bold"
                  style={{
                    background: `${customAccent}14`,
                    border: `1px dashed ${customAccent}66`,
                    color: customAccent,
                  }}
                >
                  + more pages, scoped together
                </li>
              )}
            </ul>

            <p
              className="mt-6 text-[12.5px] leading-[1.6]"
              style={{ color: "var(--muted)" }}
            >
              These are just suggestions &mdash; swap any page for another service,
              another city, or something custom. You decide the final lineup on the
              free strategy call.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

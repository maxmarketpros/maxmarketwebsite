"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { Reveal } from "@/components/ui/reveal"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  BadgeCheck,
  Building2,
  LayoutGrid,
  Camera,
  Zap,
  Mail,
  Wrench,
  Star,
  Phone,
  Clock,
  Gift,
  CalendarClock,
  Sparkles,
} from "lucide-react"

const features = [
  {
    Icon: BadgeCheck,
    title: "Claim & verify your location",
    body: "We claim (or re-claim) your business on Apple Business and pass verification — even listings migrated from old Business Connect.",
  },
  {
    Icon: Building2,
    title: "Brand Profile",
    body: "Your real name and logo, consistent across Apple Maps, Wallet, and Tap to Pay — so customers recognize you everywhere Apple shows your brand.",
  },
  {
    Icon: LayoutGrid,
    title: "Rich place card",
    body: "Hours, categories, and attributes like parking, accessibility, and payment types — every field filled to maximize ranking and clarity.",
  },
  {
    Icon: Camera,
    title: "Photos & Look Around",
    body: "Real, current, high-resolution interior and exterior shots that outperform stock — plus Look Around imagery where presentation closes the sale.",
  },
  {
    Icon: Zap,
    title: "Showcases",
    body: "Evergreen and seasonal tiles for offers and announcements, refreshed monthly. Active Showcases lift visibility in category searches.",
  },
  {
    Icon: Mail,
    title: "Branded Mail & Caller ID",
    body: "Your logo and verified name appear in Apple Mail and on inbound calls — fewer ignored calls, more trust on every touchpoint.",
  },
]

const showcaseExamples = [
  { Icon: Gift, tag: "Offer", title: "$59 drain cleaning", sub: "Limited-time promo tile" },
  { Icon: CalendarClock, tag: "Seasonal", title: "Fall furnace tune-up", sub: "Auto-swaps each season" },
  { Icon: Sparkles, tag: "New", title: "Now offering tankless", sub: "Announce new services" },
]

export function AppleBusinessPlaceCard() {
  const [active, setActive] = useState(0)
  const userOverride = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => {
      if (userOverride.current) return
      setActive((i) => (i + 1) % features.length)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  const pick = (i: number) => {
    userOverride.current = true
    setActive(i)
  }

  return (
    <section
      aria-labelledby="apple-business-placecard-heading"
      className="relative"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Your place card, perfected"
          heading={
            <span id="apple-business-placecard-heading">
              Everything Apple shows about you —{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">set up right</span>
              </span>{" "}
              and kept fresh.
            </span>
          }
          paragraph="Apple ranks complete, consistent, actively-managed profiles above thin ones. Hover any item to see exactly where it lives on your live Apple Maps card."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
          {/* Left: selectable feature list */}
          <Reveal>
            <ol className="space-y-3">
              {features.map((f, i) => {
                const on = i === active
                return (
                  <li key={f.title}>
                    <button
                      type="button"
                      onMouseEnter={() => pick(i)}
                      onFocus={() => pick(i)}
                      onClick={() => pick(i)}
                      aria-pressed={on}
                      className="w-full text-left relative rounded-[var(--radius-md)] border p-4 sm:p-5 transition-all duration-300 cursor-pointer"
                      style={
                        on
                          ? {
                              background: "rgba(22,119,255,0.06)",
                              borderColor: "rgba(22,119,255,0.4)",
                              boxShadow: "0 4px 18px rgba(22,119,255,0.14)",
                            }
                          : { background: "var(--surface)", borderColor: "var(--border-color)" }
                      }
                    >
                      {on && (
                        <span
                          aria-hidden
                          className="absolute top-0 bottom-0 left-0 w-1 rounded-l-[var(--radius-md)]"
                          style={{ background: "var(--accent)" }}
                        />
                      )}
                      <div className="flex items-start gap-4">
                        <span
                          className="shrink-0 w-10 h-10 rounded-[11px] flex items-center justify-center font-bold text-[13px] transition-all"
                          style={{
                            background: on
                              ? "linear-gradient(180deg,#2B8AFF,#1677FF)"
                              : "var(--bg)",
                            color: on ? "#fff" : "var(--muted)",
                            boxShadow: on ? "0 4px 14px rgba(22,119,255,0.4)" : "none",
                          }}
                        >
                          <f.Icon className="w-5 h-5" strokeWidth={2.25} />
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-[16px] sm:text-[17px] font-bold leading-tight"
                            style={{ color: "var(--ink)" }}
                          >
                            {f.title}
                          </h3>
                          <p
                            className="mt-1.5 text-[13.5px] leading-[1.5]"
                            style={{ color: "var(--muted)" }}
                          >
                            {f.body}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ol>
          </Reveal>

          {/* Right: live place card preview with hotspots */}
          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <PlaceCardPreview active={active} onPick={pick} />
          </Reveal>
        </div>

        {/* Showcases highlight panel */}
        <Reveal delay={0.05}>
          <div
            className="mt-8 rounded-[var(--radius-xl)] overflow-hidden border"
            style={{
              borderColor: "var(--border-color)",
              background:
                "linear-gradient(135deg, rgba(22,119,255,0.06) 0%, rgba(116,211,255,0.06) 100%)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 p-6 sm:p-8 items-center">
              <div>
                <span
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  <Zap className="w-3 h-3" strokeWidth={2.75} />
                  Showcases
                </span>
                <h3
                  className="mt-4 text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  Turn your place card into a storefront.
                </h3>
                <p
                  className="mt-3 text-[14.5px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                >
                  Showcases are tappable tiles that live right on your Apple Maps
                  card. We plan and publish 3&ndash;5 per location and refresh them
                  monthly so your latest offer is always front and center.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {showcaseExamples.map((s, i) => (
                  <div
                    key={s.title}
                    className="card-surface card-surface-hover p-4 flex flex-col"
                    style={{
                      borderRadius: "var(--radius-md)",
                      animation: `fadeInUp 0.5s var(--ease-spring) ${0.06 * i}s both`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="w-8 h-8 rounded-[9px] flex items-center justify-center"
                        style={{ background: "rgba(22,119,255,0.12)", color: "var(--accent)" }}
                      >
                        <s.Icon className="w-4 h-4" strokeWidth={2.5} />
                      </span>
                      <span
                        className="text-[9.5px] font-extrabold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
                        style={{ background: "rgba(22,119,255,0.1)", color: "var(--accent)" }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <div className="mt-3 text-[13.5px] font-bold leading-[1.25]" style={{ color: "var(--ink)" }}>
                      {s.title}
                    </div>
                    <div className="mt-1 text-[11.5px] leading-[1.4]" style={{ color: "var(--muted)" }}>
                      {s.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Not sure what your card looks like today?
          </span>
          <SecondaryButton asLink href="#contact">
            Get a free profile teardown
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

function Hotspot({ n, active, onPick }: { n: number; active: boolean; onPick: () => void }) {
  return (
    <button
      type="button"
      onClick={onPick}
      aria-label={`Highlight feature ${n}`}
      className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold transition-all duration-300 cursor-pointer shrink-0"
      style={{
        background: active ? "linear-gradient(180deg,#2B8AFF,#1677FF)" : "var(--bg)",
        color: active ? "#fff" : "var(--muted)",
        border: active ? "2px solid #fff" : "1px solid var(--border-color)",
        boxShadow: active ? "0 0 0 3px rgba(22,119,255,0.25)" : "none",
        transform: active ? "scale(1.12)" : "scale(1)",
      }}
    >
      {n}
    </button>
  )
}

function PlaceCardPreview({
  active,
  onPick,
}: {
  active: number
  onPick: (i: number) => void
}) {
  const ring = (i: number) =>
    active === i
      ? { boxShadow: "0 0 0 2px var(--accent)", borderRadius: 12 }
      : undefined

  return (
    <div
      className="card-surface p-4 sm:p-5 max-w-[420px] mx-auto"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      {/* 1 — Verified strip */}
      <div
        className="flex items-center gap-2 p-2.5 transition-shadow duration-300"
        style={ring(0)}
      >
        <Hotspot n={1} active={active === 0} onPick={() => onPick(0)} />
        <img
          src="https://www.google.com/s2/favicons?domain=apple.com&sz=64"
          alt="Apple"
          width={16}
          height={16}
          className="w-4 h-4 object-contain"
        />
        <span className="text-[11.5px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
          Apple Business
        </span>
        <span
          className="ml-auto inline-flex items-center gap-1 text-[12px] font-extrabold"
          style={{ color: "#16A34A" }}
        >
          <BadgeCheck className="w-4 h-4" strokeWidth={2.5} />
          Verified
        </span>
      </div>

      {/* 2 — Brand profile */}
      <div className="flex items-center gap-3 p-2.5 transition-shadow duration-300" style={ring(1)}>
        <Hotspot n={2} active={active === 1} onPick={() => onPick(1)} />
        <span
          className="w-11 h-11 rounded-[13px] flex items-center justify-center shrink-0 text-white"
          style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)", boxShadow: "0 4px 10px rgba(22,119,255,0.32)" }}
        >
          <Wrench className="w-5 h-5" strokeWidth={2.5} />
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[15px] font-bold leading-tight truncate" style={{ color: "var(--ink)" }}>
            Summit Plumbing Co.
          </div>
          <div className="text-[11.5px] font-medium mt-0.5 flex items-center gap-1" style={{ color: "var(--muted)" }}>
            <Star className="w-3 h-3" strokeWidth={2.5} style={{ color: "#F5A623", fill: "#F5A623" }} />
            4.9 (312) · Plumber
          </div>
        </div>
      </div>

      {/* 3 — Hours / attributes */}
      <div className="flex items-center gap-3 p-2.5 transition-shadow duration-300" style={ring(2)}>
        <Hotspot n={3} active={active === 2} onPick={() => onPick(2)} />
        <div className="flex flex-wrap gap-1.5">
          {["Open until 8 PM", "Parking", "Wheelchair", "Apple Pay"].map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10.5px] font-semibold"
              style={{ background: "var(--bg)", color: "var(--ink)", border: "1px solid var(--border-color)" }}
            >
              {t === "Open until 8 PM" && <Clock className="w-2.5 h-2.5" strokeWidth={2.5} style={{ color: "#16A34A" }} />}
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 4 — Photos */}
      <div className="flex items-center gap-3 p-2.5 transition-shadow duration-300" style={ring(3)}>
        <Hotspot n={4} active={active === 3} onPick={() => onPick(3)} />
        <div className="flex-1 grid grid-cols-3 gap-1.5">
          {[
            "linear-gradient(135deg,#1677FF,#74D3FF)",
            "linear-gradient(135deg,#0B132B,#334155)",
            "linear-gradient(135deg,#2B8AFF,#1D4ED8)",
          ].map((g, i) => (
            <div key={i} className="h-11 rounded-[9px]" style={{ background: g }} />
          ))}
        </div>
      </div>

      {/* 5 — Showcase */}
      <div className="flex items-center gap-3 p-2.5 transition-shadow duration-300" style={ring(4)}>
        <Hotspot n={5} active={active === 4} onPick={() => onPick(4)} />
        <div
          className="flex-1 flex items-center gap-2.5 px-3 py-2 rounded-[12px]"
          style={{
            background: "linear-gradient(90deg, rgba(22,119,255,0.1), rgba(116,211,255,0.1))",
            border: "1px solid rgba(22,119,255,0.22)",
          }}
        >
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "var(--accent)" }}>
            <Zap className="w-3.5 h-3.5" strokeWidth={2.5} />
          </span>
          <div className="min-w-0">
            <div className="text-[9px] font-extrabold uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              Showcase
            </div>
            <div className="text-[12px] font-bold truncate" style={{ color: "var(--ink)" }}>
              $59 drain cleaning — this month
            </div>
          </div>
        </div>
      </div>

      {/* 6 — Actions */}
      <div className="flex items-center gap-3 p-2.5 transition-shadow duration-300" style={ring(5)}>
        <Hotspot n={6} active={active === 5} onPick={() => onPick(5)} />
        <div className="flex-1 grid grid-cols-2 gap-1.5">
          <span
            className="flex items-center justify-center gap-1.5 py-2 rounded-[10px] text-[11.5px] font-semibold text-white"
            style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)" }}
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
            Call
          </span>
          <span
            className="flex items-center justify-center gap-1.5 py-2 rounded-[10px] text-[11.5px] font-semibold"
            style={{ background: "var(--bg)", color: "var(--ink)" }}
          >
            <Mail className="w-3.5 h-3.5" strokeWidth={2.5} />
            Email
          </span>
        </div>
      </div>
    </div>
  )
}

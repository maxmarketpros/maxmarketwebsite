"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { Reveal } from "@/components/ui/reveal"
import {
  Smartphone,
  MapPin,
  Lock,
  TrendingUp,
  Mic,
  Search,
  Car,
  Navigation2,
  Star,
  Wrench,
  CornerDownLeft,
} from "lucide-react"

const stats = [
  {
    Icon: Smartphone,
    value: "1.3B+",
    label: "Active iPhones worldwide",
    sub: "Every one ships with Apple Maps as the default",
  },
  {
    Icon: MapPin,
    value: "~25%",
    label: "Of US turn-by-turn navigation",
    sub: "Tens of millions of “near me” searches a day",
  },
  {
    Icon: Lock,
    value: "58%",
    label: "Of US businesses unclaimed",
    sub: "Their Apple listing is wrong, thin, or empty",
  },
  {
    Icon: TrendingUp,
    value: "16%",
    label: "Actively manage their profile",
    sub: "A wide-open window to outrank locals",
  },
]

type SurfaceKey = "maps" | "siri" | "spotlight" | "carplay"

const surfaces: { key: SurfaceKey; label: string; Icon: typeof MapPin }[] = [
  { key: "maps", label: "Apple Maps", Icon: MapPin },
  { key: "siri", label: "Siri", Icon: Mic },
  { key: "spotlight", label: "Spotlight", Icon: Search },
  { key: "carplay", label: "CarPlay", Icon: Car },
]

export function AppleBusinessWhy() {
  const [active, setActive] = useState<SurfaceKey>("maps")
  const userOverride = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => {
      if (userOverride.current) return
      setActive((cur) => {
        const idx = surfaces.findIndex((s) => s.key === cur)
        return surfaces[(idx + 1) % surfaces.length].key
      })
    }, 3200)
    return () => clearInterval(t)
  }, [])

  const pick = (k: SurfaceKey) => {
    userOverride.current = true
    setActive(k)
  }

  return (
    <section
      aria-labelledby="apple-business-why-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Why Apple Maps, why now"
          heading={
            <span id="apple-business-why-heading">
              Half your market is on iPhone — and almost{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">no one is managing</span>
              </span>{" "}
              their Apple listing.
            </span>
          }
          paragraph="iPhone users skew older, higher-income, and more brand-loyal — exactly who local service businesses want. Yet most of your competitors have never claimed their Apple profile, so a properly managed one wins visibility fast."
        />

        {/* Stat cards */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s, idx) => (
            <Reveal key={s.label} delay={0.06 * idx}>
              <div
                className="card-surface card-surface-hover p-5 sm:p-6 h-full"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="w-10 h-10 rounded-[11px] flex items-center justify-center"
                  style={{
                    background: "rgba(22,119,255,0.1)",
                    color: "var(--accent)",
                  }}
                >
                  <s.Icon className="w-5 h-5" strokeWidth={2.25} />
                </span>
                <div
                  className="mt-4 text-[30px] sm:text-[38px] font-extrabold tracking-[-0.02em] leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-2 text-[13.5px] font-semibold leading-[1.3]"
                  style={{ color: "var(--ink)" }}
                >
                  {s.label}
                </div>
                <div
                  className="mt-1.5 text-[12.5px] leading-[1.45]"
                  style={{ color: "var(--muted)" }}
                >
                  {s.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive surfaces switcher */}
        <Reveal delay={0.1}>
          <div
            className="mt-8 rounded-[var(--radius-xl)] border overflow-hidden"
            style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 p-6 sm:p-8 items-center">
              {/* Left: copy + segmented control */}
              <div>
                <div
                  className="text-[12px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "var(--accent)" }}
                >
                  One profile, everywhere Apple
                </div>
                <h3
                  className="mt-3 text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  Update once. Show up consistently across every Apple surface.
                </h3>
                <p
                  className="mt-3 text-[14.5px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                >
                  Your brand, hours, photos, and one-tap actions stay in sync
                  whether a customer is searching Maps, asking Siri, hitting
                  Spotlight, or driving with CarPlay. Tap through to see it.
                </p>

                <div
                  className="mt-6 inline-flex flex-wrap p-1.5 rounded-full gap-1"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-color)",
                  }}
                  role="tablist"
                  aria-label="Apple surfaces"
                >
                  {surfaces.map((s) => {
                    const on = active === s.key
                    return (
                      <button
                        key={s.key}
                        type="button"
                        role="tab"
                        aria-selected={on}
                        onClick={() => pick(s.key)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13px] font-bold transition-all duration-200 cursor-pointer"
                        style={{
                          background: on
                            ? "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)"
                            : "transparent",
                          color: on ? "#fff" : "var(--muted)",
                          boxShadow: on ? "0 4px 12px rgba(22,119,255,0.32)" : "none",
                        }}
                      >
                        <s.Icon className="w-4 h-4" strokeWidth={2.5} />
                        {s.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Right: surface preview */}
              <div className="flex justify-center">
                <SurfacePreview key={active} active={active} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SurfaceShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full max-w-[360px] min-h-[230px] flex"
      style={{ animation: "fadeInUp 0.45s var(--ease-spring) both" }}
    >
      {children}
    </div>
  )
}

function BusinessRow() {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-10 h-10 rounded-[11px] flex items-center justify-center shrink-0"
        style={{
          background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
          color: "#fff",
        }}
      >
        <Wrench className="w-[18px] h-[18px]" strokeWidth={2.5} />
      </span>
      <div className="flex-1 min-w-0">
        <div
          className="text-[14px] font-bold leading-tight truncate"
          style={{ color: "var(--ink)" }}
        >
          Summit Plumbing Co.
        </div>
        <div
          className="text-[11.5px] font-medium leading-tight mt-0.5 flex items-center gap-1"
          style={{ color: "var(--muted)" }}
        >
          <Star className="w-3 h-3" strokeWidth={2.5} style={{ color: "#F5A623", fill: "#F5A623" }} />
          4.9 · Plumber · Open
        </div>
      </div>
    </div>
  )
}

function SurfacePreview({ active }: { active: SurfaceKey }) {
  if (active === "maps") {
    return (
      <SurfaceShell>
        <div className="card-surface w-full p-3" style={{ borderRadius: "var(--radius-lg)" }}>
          <div
            className="relative h-24 rounded-[14px] overflow-hidden mb-3"
            style={{ background: "linear-gradient(135deg, #E7EEF6 0%, #D7EBDA 100%)" }}
          >
            <span
              className="absolute w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                top: "40%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                background: "linear-gradient(180deg,#2B8AFF,#1677FF)",
                border: "2px solid #fff",
                boxShadow: "0 3px 8px rgba(22,119,255,0.5)",
                color: "#fff",
              }}
            >
              <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
            </span>
          </div>
          <BusinessRow />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <span
              className="flex items-center justify-center gap-1.5 py-2 rounded-[10px] text-[12px] font-semibold text-white"
              style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)" }}
            >
              <Navigation2 className="w-3.5 h-3.5" strokeWidth={2.5} />
              Directions
            </span>
            <span
              className="flex items-center justify-center gap-1.5 py-2 rounded-[10px] text-[12px] font-semibold"
              style={{ background: "var(--bg)", color: "var(--ink)" }}
            >
              Website
            </span>
          </div>
        </div>
      </SurfaceShell>
    )
  }

  if (active === "siri") {
    return (
      <SurfaceShell>
        <div
          className="w-full p-5 rounded-[var(--radius-lg)] flex flex-col justify-center"
          style={{
            background: "linear-gradient(160deg, #0B132B 0%, #1F2937 100%)",
            boxShadow: "0 10px 30px rgba(11,19,43,0.2)",
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-full shrink-0"
              style={{
                background:
                  "conic-gradient(from 0deg, #2B8AFF, #74D3FF, #8B5CF6, #2B8AFF)",
                boxShadow: "0 0 18px rgba(116,211,255,0.5)",
              }}
            />
            <p className="text-[13.5px] font-medium text-white/80 leading-snug">
              “Hey Siri, find a plumber near me”
            </p>
          </div>
          <div
            className="mt-4 rounded-[14px] p-3"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 text-white"
                style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)" }}
              >
                <Wrench className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <div className="min-w-0">
                <div className="text-[13.5px] font-bold text-white truncate">
                  Summit Plumbing Co.
                </div>
                <div className="text-[11px] text-white/60">
                  4.9 ★ · 0.4 mi · Open now
                </div>
              </div>
              <span
                className="ml-auto px-2.5 py-1.5 rounded-full text-[11px] font-bold text-white shrink-0"
                style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)" }}
              >
                Call
              </span>
            </div>
          </div>
        </div>
      </SurfaceShell>
    )
  }

  if (active === "spotlight") {
    return (
      <SurfaceShell>
        <div
          className="w-full p-4 rounded-[var(--radius-lg)] flex flex-col justify-center"
          style={{
            background: "rgba(245,247,250,0.9)",
            border: "1px solid var(--border-color)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-[12px]"
            style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}
          >
            <Search className="w-4 h-4" strokeWidth={2.5} style={{ color: "var(--muted)" }} />
            <span className="text-[13.5px] font-medium" style={{ color: "var(--ink)" }}>
              summit plumb
            </span>
          </div>
          <div
            className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] px-1"
            style={{ color: "var(--muted)" }}
          >
            Top Hit
          </div>
          <div
            className="mt-1 p-3 rounded-[12px]"
            style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}
          >
            <BusinessRow />
          </div>
          <div className="mt-2 flex items-center gap-2 px-1">
            <CornerDownLeft className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: "var(--muted)" }} />
            <span className="text-[11px]" style={{ color: "var(--muted)" }}>
              Open in Maps
            </span>
          </div>
        </div>
      </SurfaceShell>
    )
  }

  // carplay
  return (
    <SurfaceShell>
      <div
        className="w-full rounded-[var(--radius-lg)] overflow-hidden flex flex-col"
        style={{ background: "#0E1626", boxShadow: "0 10px 30px rgba(11,19,43,0.25)" }}
      >
        <div
          className="relative flex-1 min-h-[120px]"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(22,119,255,0.25) 0%, transparent 55%), #122036",
          }}
        >
          <svg aria-hidden className="absolute inset-0 w-full h-full" viewBox="0 0 360 160" preserveAspectRatio="none">
            <g stroke="rgba(255,255,255,0.14)" strokeWidth="10" fill="none">
              <path d="M-10 120 L140 60 L360 90" />
            </g>
            <g stroke="#2B8AFF" strokeWidth="7" fill="none">
              <path d="M-10 120 L140 60" />
            </g>
          </svg>
          <span
            className="absolute px-2 py-1 rounded-md text-[10px] font-bold text-white"
            style={{ top: 10, left: 10, background: "rgba(0,0,0,0.4)" }}
          >
            CarPlay
          </span>
        </div>
        <div className="p-4 flex items-center gap-3" style={{ background: "#0B1322" }}>
          <span
            className="w-10 h-10 rounded-[11px] flex items-center justify-center shrink-0 text-white"
            style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)" }}
          >
            <Navigation2 className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-bold text-white truncate">
              Summit Plumbing Co.
            </div>
            <div className="text-[11.5px] text-white/55">6 min · 2.1 mi · fastest route</div>
          </div>
          <span
            className="px-4 py-2 rounded-full text-[12px] font-bold text-white shrink-0"
            style={{ background: "linear-gradient(180deg,#22C55E,#16A34A)" }}
          >
            Go
          </span>
        </div>
      </div>
    </SurfaceShell>
  )
}

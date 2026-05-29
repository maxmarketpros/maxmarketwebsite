"use client"

import { useState } from "react"
import { Reveal } from "@/components/ui/reveal"
import {
  Sparkles,
  Crosshair,
  Gauge,
  SlidersHorizontal,
  ShieldCheck,
  Search,
  Star,
  Wrench,
  ArrowRight,
  TrendingUp,
} from "lucide-react"

const features = [
  {
    Icon: Crosshair,
    title: "The only ad in the result",
    body: "Apple shows just one ad at the top of Maps search and in the new Suggested Places feed — marked by a subtle blue halo. You either own the spot or you don't.",
  },
  {
    Icon: Gauge,
    title: "Pay only on outcomes",
    body: "Auction-based pricing where you pay when someone views or taps your ad — at a budget you set, with the freedom to start or stop a campaign anytime.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Automated or advanced",
    body: "Launch in a few simple steps from your profile, or run advanced campaigns with scheduling and location targeting through Apple Ads. We manage whichever fits.",
  },
  {
    Icon: ShieldCheck,
    title: "Private by design",
    body: "Targeting is contextual — search term, approximate location, the map area on screen — and never tied to a customer's Apple Account. All on-device.",
  },
]

export function AppleBusinessMapsAds() {
  const [adsOn, setAdsOn] = useState(true)

  return (
    <section
      id="apple-maps-ads"
      aria-labelledby="apple-business-mapsads-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.12) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-6%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 65%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="flex justify-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-[0.12em]"
            style={{
              background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
              color: "#fff",
              boxShadow: "0 6px 18px rgba(22,119,255,0.35)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2.75} />
            New · Launching summer 2026 · US & Canada
          </span>
        </div>

        <div className="mt-6 text-center max-w-[760px] mx-auto">
          <h2
            id="apple-business-mapsads-heading"
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Be the <span className="accent-underline">one ad</span> your customer
            sees on Apple Maps.
          </h2>
          <p className="mt-5 text-[17px] sm:text-[19px] leading-[1.6]" style={{ color: "var(--muted)", margin: "20px auto 0" }}>
            Apple Maps Ads reach people the moment they&rsquo;re searching for a
            business like yours. We get you optimized now so you launch on day one
            — and claim the top spot before your competitors know it exists.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
          {/* Interactive search mock with toggle */}
          <Reveal>
            <div className="max-w-[420px] mx-auto">
              {/* Toggle */}
              <div
                className="inline-flex w-full p-1.5 rounded-full mb-4"
                style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
                role="tablist"
                aria-label="Apple Maps Ads demo"
              >
                {[
                  { on: false, label: "Organic results" },
                  { on: true, label: "With Apple Maps Ads" },
                ].map((t) => {
                  const sel = adsOn === t.on
                  return (
                    <button
                      key={t.label}
                      type="button"
                      role="tab"
                      aria-selected={sel}
                      onClick={() => setAdsOn(t.on)}
                      className="flex-1 px-3 py-2 rounded-full text-[13px] font-bold transition-all duration-200 cursor-pointer"
                      style={{
                        background: sel ? "linear-gradient(180deg,#2B8AFF,#1677FF)" : "transparent",
                        color: sel ? "#fff" : "var(--muted)",
                        boxShadow: sel ? "0 4px 12px rgba(22,119,255,0.3)" : "none",
                      }}
                    >
                      {t.label}
                    </button>
                  )
                })}
              </div>

              <MapsSearchMock adsOn={adsOn} />
            </div>
          </Reveal>

          {/* Feature points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, idx) => (
              <Reveal key={f.title} delay={0.07 * idx}>
                <div className="card-surface card-surface-hover p-6 h-full" style={{ borderRadius: "var(--radius-lg)" }}>
                  <span
                    className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                    style={{ background: "rgba(22,119,255,0.1)", color: "var(--accent)" }}
                  >
                    <f.Icon className="w-[22px] h-[22px]" strokeWidth={2.25} />
                  </span>
                  <h3 className="mt-4 text-[16.5px] font-bold leading-[1.25]" style={{ color: "var(--ink)" }}>
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA band */}
        <Reveal delay={0.05}>
          <div
            className="mt-12 rounded-[var(--radius-xl)] px-6 sm:px-10 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
            style={{
              background: "linear-gradient(135deg, rgba(22,119,255,0.1) 0%, rgba(116,211,255,0.12) 100%)",
              border: "1px solid rgba(22,119,255,0.22)",
            }}
          >
            <div>
              <h3 className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                First-mover advantage closes fast.
              </h3>
              <p className="mt-2 text-[15px] leading-[1.55] max-w-[560px]" style={{ color: "var(--muted)" }}>
                We&rsquo;ll have your profile launch-ready and reserve your category
                the day Apple Maps Ads go live in your market.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[16px] text-white transition-all duration-200 hover:translate-y-[-1px]"
              style={{
                background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                boxShadow: "0 1px 2px rgba(17,35,68,0.12), 0 8px 24px rgba(22,119,255,0.35)",
              }}
            >
              Claim my market
              <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

type Result = { name: string; meta: string; rating: string; you?: boolean }

const organicResults: Result[] = [
  { name: "Bay Area Rooter", meta: "Plumber · 0.6 mi · Open", rating: "4.7" },
  { name: "QuickFlow Plumbing", meta: "Plumber · 0.8 mi · Open", rating: "4.6" },
  { name: "Pipeworks Co.", meta: "Plumber · 1.1 mi · Open", rating: "4.5" },
  { name: "Summit Plumbing Co.", meta: "Plumber · 0.4 mi · Open", rating: "4.9", you: true },
]

function ResultRow({ r, sponsored }: { r: Result; sponsored?: boolean }) {
  return (
    <div
      className="relative flex items-center gap-3 px-4 py-3.5"
      style={{ background: sponsored ? "rgba(22,119,255,0.06)" : r.you ? "rgba(22,119,255,0.03)" : "transparent" }}
    >
      <span className="relative shrink-0">
        {sponsored && (
          <span
            aria-hidden
            className="absolute inset-0 -m-1.5 rounded-full"
            style={{ background: "rgba(22,119,255,0.22)", animation: "haloPulse 2s ease-in-out infinite" }}
          />
        )}
        <span
          className="relative w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: sponsored ? "linear-gradient(180deg,#2B8AFF,#1677FF)" : "var(--bg)",
            color: sponsored ? "#fff" : "var(--muted)",
            border: sponsored ? "2px solid #fff" : "1px solid var(--border-color)",
            boxShadow: sponsored ? "0 3px 8px rgba(22,119,255,0.4)" : "none",
          }}
        >
          <Wrench className="w-4 h-4" strokeWidth={2.5} />
        </span>
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[14.5px] font-bold truncate" style={{ color: "var(--ink)" }}>
            {r.name}
          </span>
          {sponsored && (
            <span className="shrink-0 text-[9px] font-extrabold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded text-white" style={{ background: "var(--accent)" }}>
              Ad
            </span>
          )}
          {r.you && !sponsored && (
            <span
              className="shrink-0 text-[9px] font-extrabold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
              style={{ background: "rgba(22,119,255,0.12)", color: "var(--accent)" }}
            >
              You
            </span>
          )}
        </div>
        <div className="text-[11.5px] font-medium mt-0.5 truncate" style={{ color: "var(--muted)" }}>
          {r.meta}
        </div>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <Star className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: "#F5A623", fill: "#F5A623" }} />
        <span className="text-[12.5px] font-bold" style={{ color: "var(--ink)" }}>
          {r.rating}
        </span>
      </div>
    </div>
  )
}

function MapsSearchMock({ adsOn }: { adsOn: boolean }) {
  const summit = organicResults.find((r) => r.you)!

  return (
    <div className="relative">
      <div
        className="card-surface overflow-hidden"
        style={{ borderRadius: "var(--radius-xl)", boxShadow: "0 1px 3px rgba(17,35,68,0.1), 0 24px 60px rgba(17,35,68,0.18)" }}
      >
        {/* search bar */}
        <div className="px-4 py-3" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-full" style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}>
            <Search className="w-4 h-4" strokeWidth={2.5} style={{ color: "var(--muted)" }} />
            <span className="text-[13.5px] font-medium" style={{ color: "var(--ink)" }}>
              plumber near me
            </span>
          </div>
        </div>

        {/* Sponsored slot (collapses when off) */}
        <div
          className={`grid transition-all duration-500 ${adsOn ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          style={{ borderBottom: adsOn ? "1px solid var(--border-color)" : "none" }}
        >
          <div className="overflow-hidden">
            <ResultRow r={summit} sponsored />
          </div>
        </div>

        {/* Organic list */}
        <ul>
          {organicResults.map((r, idx) => (
            <li
              key={r.name}
              style={{
                borderBottom: idx < organicResults.length - 1 ? "1px solid var(--border-color)" : "none",
                opacity: adsOn && r.you ? 0.55 : 1,
                transition: "opacity 0.4s ease",
              }}
            >
              <ResultRow r={r} />
            </li>
          ))}
        </ul>
      </div>

      {/* Delta callout */}
      <div
        className="mt-3 flex items-center justify-center gap-2 text-[13px] font-semibold transition-all duration-300"
        style={{ color: adsOn ? "#15803D" : "var(--muted)", opacity: 1 }}
      >
        {adsOn ? (
          <>
            <span className="w-5 h-5 rounded-full flex items-center justify-center text-white" style={{ background: "#16A34A" }}>
              <TrendingUp className="w-3 h-3" strokeWidth={3} />
            </span>
            You jump from #4 to the #1 sponsored spot
          </>
        ) : (
          <>Best rating in town — but buried at #4 without ads.</>
        )}
      </div>

      {/* Top-of-search floating label (ads only) */}
      <div
        className="absolute -top-3 -right-3 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300"
        style={{
          background: "var(--surface)",
          border: "1px solid rgba(22,119,255,0.3)",
          boxShadow: "0 8px 22px rgba(22,119,255,0.18)",
          transform: "rotate(3deg)",
          opacity: adsOn ? 1 : 0,
          pointerEvents: "none",
        }}
      >
        <Crosshair className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: "var(--accent)" }} />
        <span className="text-[11.5px] font-bold" style={{ color: "var(--ink)" }}>
          Top of search
        </span>
      </div>
    </div>
  )
}

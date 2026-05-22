import { SectionHeader } from "@/components/ui/section-header"
import {
  Star,
  Phone,
  Navigation,
  Globe,
  MessageSquare,
  BadgeCheck,
} from "lucide-react"

type Surface = {
  n: string
  title: string
  what: string
}

const surfaces: Surface[] = [
  {
    n: "01",
    title: "Categories & services",
    what: "The #1 relevance lever. Primary category + service list, tuned to the intent patterns you actually want to rank for.",
  },
  {
    n: "02",
    title: "Service area & zip codes",
    what: "Every zip code you cover, manually added. Service-area schema deployed so Google understands your real footprint.",
  },
  {
    n: "03",
    title: "Weekly posts & offers",
    what: "Fresh signals Google rewards. Weekly offers, events, and service updates — each keyword-tuned to a ranking target.",
  },
  {
    n: "04",
    title: "Geo-tagged photo drops",
    what: "10+ authentic job photos per month with EXIF location data preserved. One of the fastest-moving Map Pack signals.",
  },
  {
    n: "05",
    title: "Q&A + attributes",
    what: "Top buyer questions pre-seeded and answered. Attributes (wheelchair-accessible, women-owned, etc.) configured.",
  },
  {
    n: "06",
    title: "Review velocity & response",
    what: "Automated review-request flows, keyword-in-review coaching, and owner responses inside 24 hours on every review.",
  },
]

export function LocalGbpAnatomy() {
  return (
    <section
      id="local-gbp-anatomy"
      aria-labelledby="local-gbp-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="GBP Anatomy"
          heading={
            <span id="local-gbp-heading">
              Every surface on your Google Business Profile,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">tuned</span>.
              </span>
            </span>
          }
          paragraph="Your GBP is the single most valuable listing on the internet for a local service business. We optimize six surfaces that compound into durable Map Pack rankings."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left: Clean GBP profile card */}
          <div className="lg:col-span-5">
            <GbpCard />
          </div>

          {/* Right: Numbered surfaces list */}
          <div className="lg:col-span-7">
            <ol className="space-y-5 sm:space-y-6">
              {surfaces.map((s) => (
                <li key={s.n} className="flex gap-4 sm:gap-5">
                  <div
                    className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-[var(--radius-xs)] flex items-center justify-center text-[14px] sm:text-[15px] font-bold"
                    style={{
                      background:
                        "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
                      color: "#fff",
                      boxShadow:
                        "0 1px 2px rgba(17,35,68,0.1), 0 6px 14px rgba(245,158,11,0.22)",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3
                      className="text-[17px] sm:text-[19px] font-bold tracking-[-0.01em] leading-[1.25]"
                      style={{ color: "var(--ink)" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-1.5 text-[14.5px] sm:text-[15px] leading-[1.6]"
                      style={{ color: "var(--muted)" }}
                    >
                      {s.what}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

function GbpCard() {
  return (
    <div
      className="card-surface relative overflow-hidden"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      {/* Thin accent strip */}
      <div
        aria-hidden
        className="h-1.5"
        style={{
          background:
            "linear-gradient(90deg, #F59E0B 0%, #FBBF24 50%, #D97706 100%)",
        }}
      />

      {/* Profile body */}
      <div className="p-5 sm:p-6">
        {/* Top row: avatar + name + verified */}
        <div className="flex items-start gap-4">
          <div
            className="w-[56px] h-[56px] rounded-2xl flex items-center justify-center shrink-0 text-[18px] font-bold"
            style={{
              background:
                "linear-gradient(135deg, #0B132B 0%, #1F2937 100%)",
              color: "#F59E0B",
              boxShadow: "0 4px 12px rgba(17,35,68,0.15)",
            }}
          >
            YB
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <div
                className="text-[17px] sm:text-[18px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                Your Business Name
              </div>
              <span
                className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold"
                style={{
                  background: "rgba(66,133,244,0.12)",
                  color: "#4285F4",
                }}
              >
                <BadgeCheck className="w-3 h-3" strokeWidth={2.5} />
                Verified
              </span>
            </div>
            <div
              className="mt-1 text-[12.5px]"
              style={{ color: "var(--muted)" }}
            >
              Plumber · Licensed · 12 yrs on Google
            </div>
          </div>
        </div>

        {/* Rating row */}
        <div
          className="mt-4 flex items-center gap-2 text-[13px]"
          style={{ color: "var(--ink)" }}
        >
          <span className="font-bold text-[15px]">4.9</span>
          <span className="flex items-center gap-[1px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5"
                style={{ color: "#F59E0B" }}
                fill="#F59E0B"
                strokeWidth={0}
              />
            ))}
          </span>
          <span style={{ color: "var(--muted)" }}>(214)</span>
          <span className="mx-1" style={{ color: "var(--border-color)" }}>
            ·
          </span>
          <span
            className="inline-flex items-center gap-1 text-[11.5px] font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "rgba(16,185,129,0.12)", color: "#10B981" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#10B981" }}
            />
            Open now · Closes 6PM
          </span>
        </div>

        {/* Action button row */}
        <div className="mt-5 grid grid-cols-4 gap-2">
          {[
            { Icon: Phone, label: "Call", filled: true },
            { Icon: Navigation, label: "Directions" },
            { Icon: Globe, label: "Website" },
            { Icon: MessageSquare, label: "Chat" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-1 py-2.5 rounded-[var(--radius-sm)] border text-[11px] font-semibold"
              style={{
                background: b.filled ? "#1677FF" : "#fff",
                borderColor: b.filled ? "#1677FF" : "var(--border-color)",
                color: b.filled ? "#fff" : "#1677FF",
              }}
            >
              <b.Icon className="w-3.5 h-3.5" strokeWidth={2.25} />
              {b.label}
            </div>
          ))}
        </div>

        {/* Tuned chips */}
        <div
          className="mt-5 pt-4 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div
            className="text-[10.5px] font-semibold uppercase tracking-[0.1em]"
            style={{ color: "#D97706" }}
          >
            Every surface optimized
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {[
              "Primary category",
              "Service list",
              "Zip codes",
              "Photos",
              "Posts",
              "Q&A",
              "Reviews",
              "Attributes",
            ].map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(245,158,11,0.10)",
                  color: "#B4730E",
                  border: "1px solid rgba(245,158,11,0.22)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Star,
  TrendingUp,
  Sparkles,
  Phone,
  Navigation,
  Globe,
  ArrowUp,
  Plus,
  Minus,
} from "lucide-react"

const trustItems = [
  { label: "250+ businesses ranked" },
  { label: "98% client retention" },
  { label: "4.9★ average rating" },
]

export function SeoHero() {
  return (
    <section
      aria-labelledby="seo-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] left-[-8%] w-[480px] h-[480px] sm:w-[720px] sm:h-[720px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.16) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div
            className="max-w-[620px]"
            style={{ animation: "fadeInUp 0.8s ease-out both" }}
          >
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-[13px] font-medium"
              style={{ color: "var(--muted)" }}
            >
              <ol className="flex items-center gap-1.5">
                <li>
                  <a href="/" className="hover:text-[var(--accent)]">
                    Home
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <a href="/services" className="hover:text-[var(--accent)]">
                    Services
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>
                  SEO
                </li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Search Engine Optimization
            </Pill>

            <h1
              id="seo-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Rank <span className="accent-underline">#1</span> where your
              customers actually{" "}
              <span className="whitespace-nowrap">search.</span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]"
              style={{ color: "var(--muted)" }}
            >
              Local SEO, technical SEO, on-page, off-page, backlinks, AI search,
              and press — done-for-you by an agency built for service
              businesses. Turn search traffic into booked jobs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get a free SEO audit
              </PrimaryButton>
              <SecondaryButton asLink href="#seo-results">
                See our results
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-2 text-[14px] font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "var(--accent)" }}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: custom Map Pack mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}
          >
            <MapPackMockup />

            {/* Floating "Ranking now" badge */}
            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <span className="relative flex w-2 h-2">
                <span
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{
                    background: "#10B981",
                    animation: "subtlePulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="relative w-2 h-2 rounded-full"
                  style={{ background: "#10B981" }}
                />
              </span>
              Ranking now
            </div>

            {/* Floating "+8 positions" climb badge */}
            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)]"
              style={{ background: "#10B981" }}
            >
              <ArrowUp className="w-3.5 h-3.5" strokeWidth={2.75} />
              +8 positions this quarter
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type Listing = {
  rank: number
  name: string
  rating: string
  reviews: string
  category: string
  hours: string
  distance: string
  highlight?: boolean
}

const listings: Listing[] = [
  {
    rank: 1,
    name: "Your Company",
    rating: "4.9",
    reviews: "214",
    category: "Plumber · Licensed",
    hours: "Open · Closes 6PM",
    distance: "0.4 mi",
    highlight: true,
  },
  {
    rank: 2,
    name: "Brand-X Services",
    rating: "4.4",
    reviews: "88",
    category: "Plumber",
    hours: "Open · Closes 5PM",
    distance: "1.8 mi",
  },
  {
    rank: 3,
    name: "Blue Sky Co.",
    rating: "4.1",
    reviews: "52",
    category: "Plumber",
    hours: "Closed",
    distance: "2.6 mi",
  },
]

function MapPackMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-3.5 sm:p-5"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      {/* Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 20%, rgba(22,119,255,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        {/* Google header bar */}
        <div className="flex items-center justify-between gap-2 px-1 pb-3">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={icons8Url("17949", 96)}
              alt="Google"
              width={22}
              height={22}
              loading="eager"
              decoding="async"
              className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] object-contain shrink-0"
            />
            <div
              className="text-[13px] sm:text-[14px] font-bold tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              Maps
            </div>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-semibold" style={{ color: "var(--muted)" }}>
            <span className="hidden sm:inline">Directions</span>
            <span className="hidden xs:inline">Saved</span>
            <div className="flex gap-1">
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--muted)" }} />
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--muted)" }} />
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--muted)" }} />
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div
          className="flex items-center gap-2 px-3 py-2 sm:py-2.5 rounded-full border"
          style={{
            background: "#fff",
            borderColor: "var(--border-color)",
            boxShadow: "0 1px 3px rgba(17,35,68,0.04)",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="#5B6B84" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <div className="flex-1 text-[12.5px] sm:text-[13.5px] font-medium truncate" style={{ color: "var(--ink)" }}>
            plumber near me
          </div>
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 11a7 7 0 0 1-7 7m0 0a7 7 0 0 1-7-7m7 7v4m0-4a3 3 0 0 1-3-3V5a3 3 0 1 1 6 0v10a3 3 0 0 1-3 3Z" />
            </svg>
            <div className="w-[1px] h-3.5" style={{ background: "var(--border-color)" }} />
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#4285F4" }}>
              <span className="text-[10px] font-bold text-white">U</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          className="relative mt-3 h-[140px] sm:h-[160px] rounded-[var(--radius-md)] overflow-hidden border"
          style={{
            background:
              "linear-gradient(135deg, #EAF1FC 0%, #F4F8FE 50%, #ECF3FE 100%)",
            borderColor: "var(--border-color)",
            boxShadow: "inset 0 1px 2px rgba(17,35,68,0.04)",
          }}
        >
          {/* Map artwork */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 160"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            {/* parks (green blocks) */}
            <rect x="18" y="96" width="58" height="44" rx="6" fill="#C8EBD3" opacity="0.85" />
            <rect x="240" y="8" width="60" height="34" rx="6" fill="#C8EBD3" opacity="0.7" />
            {/* water/river */}
            <path
              d="M-10,40 C60,28 110,56 180,42 C240,30 300,54 340,40 L340,52 C300,66 240,44 180,54 C110,68 60,40 -10,52 Z"
              fill="#C8E0F7"
              opacity="0.6"
            />
            {/* building blocks */}
            {[
              [110, 70, 22, 14],
              [138, 70, 18, 14],
              [160, 72, 24, 12],
              [190, 70, 18, 14],
              [212, 72, 22, 12],
              [110, 92, 18, 10],
              [134, 90, 26, 12],
              [166, 92, 20, 10],
              [194, 90, 24, 12],
              [90, 118, 22, 14],
              [118, 120, 28, 12],
              [152, 118, 22, 14],
              [180, 120, 26, 12],
              [212, 118, 22, 14],
              [244, 118, 26, 12],
            ].map(([x, y, w, h], i) => (
              <rect
                key={i}
                x={x}
                y={y}
                width={w}
                height={h}
                rx="1.5"
                fill="#E3ECF7"
                opacity="0.75"
              />
            ))}
            {/* minor street grid */}
            <g stroke="#DCE6F2" strokeWidth="1.5" opacity="0.7">
              <line x1="0" y1="64" x2="320" y2="64" />
              <line x1="0" y1="84" x2="320" y2="84" />
              <line x1="0" y1="108" x2="320" y2="108" />
              <line x1="90" y1="0" x2="90" y2="160" />
              <line x1="146" y1="0" x2="146" y2="160" />
              <line x1="206" y1="0" x2="206" y2="160" />
              <line x1="262" y1="0" x2="262" y2="160" />
            </g>
            {/* major roads (white with soft border) */}
            <g>
              <path
                d="M0,90 Q80,76 160,88 T320,76"
                stroke="#F5F9FF"
                strokeWidth="9"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M0,90 Q80,76 160,88 T320,76"
                stroke="#fff"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M70,0 Q62,60 90,120 T80,160"
                stroke="#F5F9FF"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M70,0 Q62,60 90,120 T80,160"
                stroke="#fff"
                strokeWidth="4.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M230,0 Q222,60 248,120 T240,160"
                stroke="#F5F9FF"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M230,0 Q222,60 248,120 T240,160"
                stroke="#fff"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </g>
            {/* highway accent */}
            <path
              d="M-10,28 Q100,20 200,34 T340,24"
              stroke="#FCE8A8"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>

          {/* Zoom controls */}
          <div
            className="absolute right-2 top-2 flex flex-col rounded-md overflow-hidden border shadow-[0_2px_8px_rgba(17,35,68,0.06)]"
            style={{ borderColor: "var(--border-color)", background: "#fff" }}
            aria-hidden
          >
            <div className="w-6 h-6 flex items-center justify-center" style={{ color: "var(--ink)" }}>
              <Plus className="w-3 h-3" strokeWidth={2.5} />
            </div>
            <div className="w-6 h-[1px]" style={{ background: "var(--border-color)" }} />
            <div className="w-6 h-6 flex items-center justify-center" style={{ color: "var(--ink)" }}>
              <Minus className="w-3 h-3" strokeWidth={2.5} />
            </div>
          </div>

          {/* Pins */}
          <MapPin position={{ top: "56%", left: "28%" }} label="1" highlight />
          <MapPin position={{ top: "70%", left: "54%" }} label="2" />
          <MapPin position={{ top: "38%", left: "78%" }} label="3" />
        </div>

        {/* Results heading */}
        <div className="mt-3.5 flex items-center justify-between">
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Top 3 results
          </div>
          <div
            className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "#10B98114", color: "#10B981" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#10B981",
                animation: "subtlePulse 2s ease-in-out infinite",
              }}
            />
            Live · Google
          </div>
        </div>

        {/* Listings */}
        <ul className="mt-2.5 space-y-2">
          {listings.map((l) => (
            <ListingRow key={l.rank} listing={l} />
          ))}
        </ul>
      </div>
    </div>
  )
}

function MapPin({
  position,
  label,
  highlight = false,
}: {
  position: { top: string; left: string }
  label: string
  highlight?: boolean
}) {
  const size = highlight ? 36 : 28
  return (
    <div
      className="absolute"
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -100%)",
      }}
    >
      {highlight && (
        <span
          aria-hidden
          className="absolute rounded-full blur-md"
          style={{
            width: size,
            height: size,
            left: "50%",
            bottom: "-4px",
            transform: "translateX(-50%)",
            background: "rgba(22,119,255,0.45)",
            animation: "subtlePulse 2.2s ease-in-out infinite",
          }}
        />
      )}
      <svg
        width={size}
        height={size * 1.25}
        viewBox="0 0 36 45"
        fill="none"
        className="relative drop-shadow-[0_3px_6px_rgba(17,35,68,0.22)]"
      >
        <defs>
          <linearGradient id={`pin-${label}`} x1="0" y1="0" x2="0" y2="1">
            {highlight ? (
              <>
                <stop offset="0%" stopColor="#2B8AFF" />
                <stop offset="100%" stopColor="#1361E0" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#768399" />
                <stop offset="100%" stopColor="#525D70" />
              </>
            )}
          </linearGradient>
        </defs>
        <path
          d="M18 2 C8.6 2, 2 8.6, 2 18 C2 28, 18 43, 18 43 C18 43, 34 28, 34 18 C34 8.6, 27.4 2, 18 2 Z"
          fill={`url(#pin-${label})`}
          stroke={highlight ? "#fff" : "rgba(255,255,255,0.85)"}
          strokeWidth="1.5"
        />
        <circle cx="18" cy="17" r="9" fill="rgba(255,255,255,0.18)" />
        <text
          x="18"
          y="21"
          textAnchor="middle"
          fill="#fff"
          fontWeight="700"
          fontSize={highlight ? "13" : "12"}
          fontFamily="Outfit, sans-serif"
        >
          {label}
        </text>
      </svg>
    </div>
  )
}

function ListingRow({ listing }: { listing: Listing }) {
  const isYou = !!listing.highlight
  return (
    <li
      className="relative overflow-hidden rounded-[var(--radius-md)] border flex items-start gap-3 p-3 sm:p-3.5"
      style={{
        background: isYou
          ? "linear-gradient(135deg, rgba(22,119,255,0.08) 0%, rgba(116,211,255,0.06) 100%)"
          : "var(--bg)",
        borderColor: isYou ? "#1677FF4D" : "var(--border-color)",
        boxShadow: isYou
          ? "0 1px 2px rgba(22,119,255,0.12), 0 6px 18px rgba(22,119,255,0.14)"
          : "none",
      }}
    >
      {/* Rank badge */}
      <div
        className="flex items-center justify-center w-7 h-7 rounded-full shrink-0 text-[12px] font-bold"
        style={{
          background: isYou
            ? "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)"
            : "#E5EAF2",
          color: isYou ? "#fff" : "#5B6B84",
          boxShadow: isYou
            ? "0 2px 6px rgba(22,119,255,0.35)"
            : "none",
        }}
      >
        {listing.rank}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <div
            className="text-[13.5px] sm:text-[14.5px] font-bold leading-tight truncate"
            style={{ color: "var(--ink)" }}
          >
            {listing.name}
          </div>
          {isYou && (
            <span
              className="inline-flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-[0.06em] px-1.5 py-0.5 rounded-full shrink-0"
              style={{ background: "#10B981", color: "#fff" }}
            >
              #1 · You
            </span>
          )}
        </div>
        <div className="mt-0.5 flex items-center gap-1.5 text-[11.5px]" style={{ color: "var(--ink)" }}>
          <span className="font-semibold">{listing.rating}</span>
          <Star className="w-2.5 h-2.5" style={{ color: "#F59E0B" }} fill="#F59E0B" strokeWidth={0} />
          <span style={{ color: "var(--muted)" }}>({listing.reviews})</span>
          <span style={{ color: "var(--muted)" }}>· {listing.category}</span>
        </div>
        <div className="mt-0.5 text-[11px]" style={{ color: "var(--muted)" }}>
          {listing.hours} · {listing.distance}
        </div>
      </div>

      {/* Action row (only on #1) */}
      {isYou && (
        <div className="hidden sm:flex items-center gap-1 shrink-0">
          <ActionChip Icon={Navigation} />
          <ActionChip Icon={Globe} />
          <ActionChip Icon={Phone} filled />
        </div>
      )}
    </li>
  )
}

function ActionChip({
  Icon,
  filled = false,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  filled?: boolean
}) {
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center border"
      style={{
        background: filled ? "#1677FF" : "var(--surface)",
        borderColor: filled ? "#1677FF" : "var(--border-color)",
        color: filled ? "#fff" : "#1677FF",
      }}
    >
      <Icon className="w-3.5 h-3.5" strokeWidth={2.25} />
    </div>
  )
}

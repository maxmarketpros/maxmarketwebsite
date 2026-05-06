import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Phone,
  Star,
  Clock,
  FileCheck,
  Shield,
  Headset,
  ArrowDown,
  ChevronRight,
} from "lucide-react"
import { GoogleGuaranteedBadge } from "./google-ads-hero"

const pillars = [
  {
    Icon: FileCheck,
    title: "Verification handled, end-to-end",
    body: "License, insurance, and background-check submission for every technician. We handle the document chase so your Google Guaranteed badge goes live in days, not months.",
  },
  {
    Icon: Shield,
    title: "Pay-per-lead economics",
    body: "LSAs charge per qualified lead, not per click. We monitor lead quality daily and dispute every spam, wrong-service, or non-service-area lead so you only pay for real calls.",
  },
  {
    Icon: Headset,
    title: "Daily lead-quality monitoring",
    body: "Every call recording reviewed within 24 hours. Bad lead? We file the dispute through the Google Local Services portal and Google refunds the lead cost.",
  },
  {
    Icon: Clock,
    title: "Service-zone tuning, weekly",
    body: "We tune service-area boundaries, hours, and service-type weights every week so your LSA budget concentrates on the zones where bookings actually happen.",
  },
]

const stats = [
  { v: "$28", l: "Avg cost per qualified call" },
  { v: "4.7★", l: "Avg LSA account rating" },
  { v: "31%", l: "Lead-dispute refund rate" },
]

type LsaListing = {
  initial: string
  bg: string
  name: string
  rating: string
  reviews: number
  years: number
  hours: string
  area: string
}

const listings: LsaListing[] = [
  {
    initial: "A",
    bg: "linear-gradient(135deg, #1A73E8 0%, #4285F4 100%)",
    name: "Acme HVAC & Plumbing",
    rating: "4.9",
    reviews: 348,
    years: 14,
    hours: "Open 24 hours",
    area: "Greater Irvine",
  },
  {
    initial: "P",
    bg: "linear-gradient(135deg, #34A853 0%, #1E7E34 100%)",
    name: "Pacific Plumbing Co.",
    rating: "4.8",
    reviews: 612,
    years: 22,
    hours: "Open 24 hours",
    area: "Orange County",
  },
  {
    initial: "T",
    bg: "linear-gradient(135deg, #EA4335 0%, #C5221F 100%)",
    name: "TrueLine Heating",
    rating: "5.0",
    reviews: 142,
    years: 8,
    hours: "Open · Closes 9 PM",
    area: "Irvine + 8 ZIPs",
  },
]

export function GoogleAdsLsaShowcase() {
  return (
    <section
      id="google-ads-lsa"
      aria-labelledby="google-ads-lsa-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(52,168,83,0.14) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(66,133,244,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Google Guaranteed"
          heading={
            <span id="google-ads-lsa-heading">
              <span className="whitespace-nowrap">
                <span className="accent-underline">Google Guaranteed</span>
              </span>{" "}
              &mdash; the front-row seat above every search.
            </span>
          }
          paragraph="Google Local Services Ads sit above the regular Sponsored Search ads. They&rsquo;re pay-per-lead, not pay-per-click. We handle the verification, the dispute portal, and the lead routing so your phone rings with real, in-service-area calls."
        />

        <div
          className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left: Google SERP mockup focused on the LSA section */}
          <div className="relative max-w-[560px] mx-auto w-full">
            <LsaSerpMockup />

            {/* Floating: "Above all Sponsored ads" — top-right, OUTSIDE the card */}
            <div
              className="hidden md:flex absolute -top-6 -right-6 z-20 items-center gap-2 px-3 py-2 rounded-[14px]"
              style={{
                background: "linear-gradient(180deg, #4285F4 0%, #1A73E8 100%)",
                boxShadow:
                  "0 2px 6px rgba(26,115,232,0.35), 0 14px 32px rgba(26,115,232,0.32)",
                color: "#fff",
                transform: "rotate(4deg)",
              }}
            >
              <ArrowDown className="w-4 h-4" strokeWidth={2.75} />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-90">
                  Sits above
                </span>
                <span className="text-[13px] font-extrabold whitespace-nowrap">
                  All Sponsored ads
                </span>
              </div>
            </div>

            {/* Floating: "Lead just landed" toast — bottom-right, OUTSIDE */}
            <div
              className="hidden md:flex absolute -bottom-5 -right-5 z-20 items-center gap-2.5 px-3.5 py-2.5 rounded-[14px]"
              style={{
                background: "linear-gradient(180deg, #fff 0%, #F0FDF4 100%)",
                border: "1px solid rgba(52,168,83,0.32)",
                boxShadow:
                  "0 2px 6px rgba(52,168,83,0.18), 0 14px 32px rgba(52,168,83,0.18)",
                transform: "rotate(3deg)",
              }}
            >
              <span
                className="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background:
                    "linear-gradient(180deg, #34A853 0%, #1E7E34 100%)",
                  color: "#fff",
                  boxShadow: "0 2px 6px rgba(52,168,83,0.35)",
                }}
              >
                <Phone className="w-4 h-4" strokeWidth={2.75} />
                <span
                  className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full"
                  style={{
                    background: "#22C55E",
                    border: "2px solid #fff",
                    animation: "subtlePulse 1.6s ease-in-out infinite",
                  }}
                />
              </span>
              <div className="flex flex-col leading-tight">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "var(--muted)" }}
                >
                  New LSA lead
                </span>
                <span
                  className="text-[15px] font-extrabold"
                  style={{ color: "var(--ink)" }}
                >
                  +1 (949) ••• ••32
                </span>
              </div>
            </div>

            {/* Glow halo */}
            <div
              aria-hidden
              className="absolute inset-x-12 -bottom-4 h-12 rounded-[24px] blur-2xl opacity-70 -z-10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(52,168,83,0.32) 0%, transparent 100%)",
              }}
            />
          </div>

          {/* Right: 4 numbered pillars */}
          <div>
            <ol className="space-y-5">
              {pillars.map((p, i) => (
                <li
                  key={p.title}
                  className="flex gap-4 p-4 sm:p-5 rounded-[var(--radius-lg)]"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 1px 3px rgba(17,35,68,0.04)",
                  }}
                >
                  <div className="shrink-0 flex flex-col items-center gap-1.5">
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-extrabold"
                      style={{
                        background: "rgba(52,168,83,0.12)",
                        color: "#15803D",
                      }}
                    >
                      {i + 1}
                    </span>
                    <p.Icon
                      className="w-4 h-4"
                      strokeWidth={2.25}
                      style={{ color: "#34A853" }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="text-[16.5px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-1.5 text-[14px] leading-[1.55]"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-[760px] mx-auto px-5 sm:px-7 py-5 rounded-[var(--radius-lg)]"
          style={{
            background:
              "linear-gradient(90deg, rgba(52,168,83,0.06) 0%, rgba(66,133,244,0.04) 100%)",
            border: "1px solid var(--border-color)",
          }}
        >
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div
                className="text-[22px] sm:text-[28px] font-extrabold leading-none tracking-[-0.02em]"
                style={{ color: "#15803D" }}
              >
                {s.v}
              </div>
              <div
                className="mt-1.5 text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.1em]"
                style={{ color: "var(--muted)" }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <SecondaryButton asLink href="#google-ads-results">
            See LSA case study
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

/**
 * Reusable 4-color Google "G" mark (kept consistent with the hero showcase).
 */
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-label="Google"
      role="img"
    >
      <path
        fill="#4285F4"
        d="M43.611 20.083H42V20H24v8h11.303C33.78 32.66 29.31 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C33.046 6.053 28.756 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#34A853"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C33.046 6.053 28.756 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#FBBC05"
        d="M24 44c4.756 0 9.046-1.819 12.318-4.781l-5.694-4.815C28.742 35.602 26.486 36 24 36c-5.288 0-9.741-3.317-11.286-7.946l-6.522 5.025C9.45 39.604 16.227 44 24 44z"
      />
      <path
        fill="#EA4335"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 5.694 4.815C36.971 39.21 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  )
}

/**
 * Mockup of a Google search results page focused on the Local Services Ads
 * section — clean Google styling, no decorative gradients.
 */
function LsaSerpMockup() {
  return (
    <div
      className="relative card-surface overflow-hidden"
      style={{
        borderRadius: "var(--radius-xl)",
        boxShadow:
          "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
      }}
    >
      {/* Browser window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{
          background: "linear-gradient(180deg, #F7F9FC 0%, #EEF3FA 100%)",
          borderColor: "var(--border-color)",
        }}
      >
        <span className="flex gap-1.5">
          <span
            className="w-[10px] h-[10px] rounded-full"
            style={{ background: "#FF5F57" }}
          />
          <span
            className="w-[10px] h-[10px] rounded-full"
            style={{ background: "#FEBC2E" }}
          />
          <span
            className="w-[10px] h-[10px] rounded-full"
            style={{ background: "#28C840" }}
          />
        </span>
        <div
          className="ml-2 flex-1 px-3 py-1 text-[11px] font-mono rounded-md truncate"
          style={{
            background: "#fff",
            color: "#6B7280",
            border: "1px solid var(--border-color)",
          }}
        >
          google.com/search?q=emergency+hvac+repair+near+me
        </div>
      </div>

      {/* Google search bar */}
      <div
        className="px-5 sm:px-6 py-3.5 flex items-center gap-3 border-b"
        style={{ background: "#fff", borderColor: "#EBEBEB" }}
      >
        <GoogleLogo className="w-[26px] h-[26px] shrink-0" />
        <div
          className="flex-1 flex items-center gap-2 px-4 py-2 rounded-full border"
          style={{
            background: "#fff",
            borderColor: "#DFE1E5",
            boxShadow: "0 1px 2px rgba(60,64,67,0.06)",
          }}
        >
          <span
            className="text-[13px] font-medium flex-1 truncate"
            style={{ color: "#202124" }}
          >
            emergency hvac repair near me
          </span>
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 shrink-0"
            aria-hidden
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="#4285F4"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="16.5"
              y1="16.5"
              x2="21"
              y2="21"
              stroke="#4285F4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Search-results sub-bar (tabs + result count) */}
      <div
        className="px-5 sm:px-6 pt-2 pb-2.5 flex items-center justify-between border-b"
        style={{ background: "#fff", borderColor: "#EBEBEB" }}
      >
        <div className="flex items-center gap-4 text-[12px] font-medium">
          {[
            { label: "All", active: true },
            { label: "Maps" },
            { label: "Images" },
            { label: "News" },
            { label: "Shopping" },
          ].map((t) => (
            <span
              key={t.label}
              className="relative pb-1"
              style={{
                color: t.active ? "#1A73E8" : "#5F6368",
                fontWeight: t.active ? 700 : 500,
              }}
            >
              {t.label}
              {t.active && (
                <span
                  className="absolute left-0 right-0 -bottom-[3px] h-[2px] rounded-full"
                  style={{ background: "#1A73E8" }}
                />
              )}
            </span>
          ))}
        </div>
        <span className="text-[11px]" style={{ color: "#70757A" }}>
          About 8,420,000 results
        </span>
      </div>

      {/* LSA section header */}
      <div
        className="px-5 sm:px-6 py-3 flex items-center justify-between"
        style={{ background: "#fff" }}
      >
        <div className="flex items-center gap-2">
          <GoogleGuaranteedBadge size={20} />
          <div className="flex flex-col leading-tight">
            <span
              className="text-[13.5px] font-bold"
              style={{ color: "#202124" }}
            >
              More about{" "}
              <span style={{ color: "#1A73E8" }}>HVAC repair</span>
            </span>
            <span className="text-[10.5px]" style={{ color: "#5F6368" }}>
              Sponsored &middot; Backed by the Google Guarantee
            </span>
          </div>
        </div>
        <span
          className="text-[11px] font-medium hidden sm:inline-flex items-center gap-0.5"
          style={{ color: "#1A73E8" }}
        >
          More businesses
          <ChevronRight className="w-3 h-3" strokeWidth={2.5} />
        </span>
      </div>

      {/* LSA listings — first one highlighted/expanded */}
      <ul
        className="divide-y"
        style={{ borderColor: "#EBEBEB" }}
      >
        {listings.map((l, i) => (
          <li
            key={l.name}
            className="px-5 sm:px-6 py-4 hover:bg-[#FAFBFC] transition-colors"
            style={{ borderColor: "#EBEBEB" }}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Avatar */}
              <span
                className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-[18px] sm:text-[20px] font-extrabold"
                style={{ background: l.bg, color: "#fff" }}
              >
                {l.initial}
              </span>

              {/* Body */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="text-[14.5px] sm:text-[15.5px] font-medium leading-tight"
                    style={{ color: "#1A0DAB" }}
                  >
                    {l.name}
                  </span>
                  {i === 0 && (
                    <span
                      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-[0.06em]"
                      style={{
                        background: "rgba(52,168,83,0.14)",
                        color: "#1E7E34",
                      }}
                    >
                      <Shield className="w-2.5 h-2.5" strokeWidth={2.75} />
                      Google Guaranteed
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-1 flex-wrap">
                  <span
                    className="text-[12.5px] font-semibold"
                    style={{ color: "#202124" }}
                  >
                    {l.rating}
                  </span>
                  <span className="flex gap-[1px]">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        className="w-3 h-3"
                        style={{ color: "#FBBC05" }}
                        fill="#FBBC05"
                        strokeWidth={0}
                      />
                    ))}
                  </span>
                  <span
                    className="text-[12px]"
                    style={{ color: "#5F6368" }}
                  >
                    ({l.reviews})
                  </span>
                  <span className="mx-1" style={{ color: "#5F6368" }}>
                    &middot;
                  </span>
                  <span
                    className="text-[12px]"
                    style={{ color: "#5F6368" }}
                  >
                    {l.years} yrs in business
                  </span>
                </div>
                <div
                  className="mt-1 text-[12px] flex items-center gap-2 flex-wrap"
                  style={{ color: "#5F6368" }}
                >
                  <span style={{ color: "#1E7E34", fontWeight: 600 }}>
                    {l.hours}
                  </span>
                  <span>&middot;</span>
                  <span>{l.area}</span>
                </div>

                {/* Inline review snippet — only on first/featured listing */}
                {i === 0 && (
                  <div
                    className="mt-2.5 pl-3 border-l-2 text-[12.5px] italic leading-[1.5]"
                    style={{
                      borderColor: "#FBBC05",
                      color: "#3C4043",
                    }}
                  >
                    &ldquo;Showed up in 45 minutes on a Sunday. Fixed our AC
                    and was upfront about the cost.&rdquo;{" "}
                    <span
                      className="not-italic font-semibold"
                      style={{ color: "#5F6368" }}
                    >
                      &mdash; Sara K.
                    </span>
                  </div>
                )}
              </div>

              {/* Phone CTA — desktop */}
              <button
                type="button"
                className="shrink-0 hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-bold border transition-colors"
                style={{
                  background: i === 0 ? "#1A73E8" : "#fff",
                  color: i === 0 ? "#fff" : "#1A73E8",
                  borderColor: "#1A73E8",
                  boxShadow:
                    i === 0
                      ? "0 1px 2px rgba(26,115,232,0.25)"
                      : "none",
                }}
                aria-label={`Call ${l.name}`}
              >
                <Phone className="w-3 h-3" strokeWidth={2.75} />
                Call
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Section footer "More businesses" */}
      <div
        className="px-5 sm:px-6 py-3 border-t flex items-center justify-between"
        style={{
          background: "#FAFBFC",
          borderColor: "#EBEBEB",
        }}
      >
        <span
          className="text-[12.5px] font-medium inline-flex items-center gap-0.5"
          style={{ color: "#1A73E8" }}
        >
          More businesses on Google Local Services
          <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </span>
      </div>

      {/* Faded "regular sponsored ad" beneath — visually shows LSA sits on top */}
      <div
        className="px-5 sm:px-6 py-3 border-t"
        style={{
          background: "#fff",
          borderColor: "#EBEBEB",
          opacity: 0.45,
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "#202124" }}
          >
            Sponsored
          </span>
        </div>
        <div
          className="text-[14.5px] font-medium truncate"
          style={{ color: "#1A0DAB" }}
        >
          24/7 AC Repair — Same-Day Service Available
        </div>
        <div
          className="text-[11.5px] mt-0.5 truncate"
          style={{ color: "#5F6368" }}
        >
          competitor-hvac.com &middot; Licensed technicians
        </div>
      </div>
    </div>
  )
}

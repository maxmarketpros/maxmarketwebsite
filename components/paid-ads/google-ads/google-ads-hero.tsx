import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Sparkles,
  Phone,
  Star,
  MapPin,
  ShieldCheck,
} from "lucide-react"

const proofPills = [
  { label: "Google Partner agency" },
  { label: "Google Guaranteed verified" },
  { label: "4.7× avg ROAS" },
  { label: "No long-term contracts" },
]

export function GoogleAdsHero() {
  return (
    <section
      aria-labelledby="google-ads-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Google-flavored background glows: blue, green, yellow, red */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Google blue */}
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] sm:w-[840px] sm:h-[840px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(66,133,244,0.20) 0%, rgba(66,133,244,0.05) 45%, transparent 70%)",
          }}
        />
        {/* Google green */}
        <div
          className="absolute top-[20%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(52,168,83,0.14) 0%, transparent 65%)",
          }}
        />
        {/* Google yellow */}
        <div
          className="absolute bottom-[-12%] right-[10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(251,188,5,0.14) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
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
            <li>
              <a
                href="/services/paid-ads"
                className="hover:text-[var(--accent)]"
              >
                Paid Ads
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Google Ads
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(66,133,244,0.08)",
                borderColor: "rgba(66,133,244,0.24)",
                color: "#1A73E8",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Local Services Ads &middot; Search &middot; Performance Max
            </span>

            <h1
              id="google-ads-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Google Ads built to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">ring the phone</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Done-for-you{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Google Ads management
              </span>{" "}
              for service businesses. Local Services Ads, Search, and
              Performance Max &mdash; managed to your cost-per-booked-job, not
              your CPC. Pair it with{" "}
              <a
                href="/services/seo/local"
                className="font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Local SEO
              </a>{" "}
              and stop renting position 1.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton
                size="lg"
                asLink
                href="#google-ads-leak-audit"
              >
                Get a free Google Ads audit
              </PrimaryButton>
              <SecondaryButton asLink href="#google-ads-results">
                See sample campaign
              </SecondaryButton>
            </div>

            {/* Proof ribbon */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#1A73E8" }}
                  />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: SERP takeover showcase */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <SerpTakeoverShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Google Guaranteed badge — reusable inline SVG mark.
 * Used on hero, LSA showcase, and inside campaign-type cards.
 */
export function GoogleGuaranteedBadge({
  size = 28,
  withWordmark = false,
}: {
  size?: number
  withWordmark?: boolean
}) {
  if (withWordmark) {
    return (
      <span
        className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full"
        style={{
          background: "#34A853",
          color: "#fff",
          boxShadow: "0 1px 2px rgba(52,168,83,0.35)",
        }}
      >
        <svg
          width={size * 0.5}
          height={size * 0.5}
          viewBox="0 0 24 24"
          aria-hidden
        >
          <circle cx="12" cy="12" r="11" fill="#fff" />
          <path
            d="M7 12l3.2 3.2L17 8.4"
            fill="none"
            stroke="#34A853"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[9.5px] font-bold uppercase tracking-[0.08em] leading-none">
          Google Guaranteed
        </span>
      </span>
    )
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      aria-label="Google Guaranteed"
      role="img"
    >
      <circle cx="14" cy="14" r="13" fill="#34A853" />
      <circle cx="14" cy="14" r="13" fill="none" stroke="#fff" strokeWidth="1" />
      <path
        d="M8 14.2l3.6 3.6L20.2 9.4"
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GoogleLogo({ className }: { className?: string }) {
  // Simplified four-color "G" — used in the SERP search bar
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

const lsaCards = [
  { name: "Acme HVAC", rating: "4.9", reviews: 348, badge: "24/7" },
  { name: "Pacific Plumbing", rating: "4.8", reviews: 612, badge: "24/7" },
  { name: "TrueLine Heating", rating: "5.0", reviews: 142, badge: "Open" },
]

const mapPackRows = [
  { name: "Acme HVAC", rating: "4.9", count: 348 },
  { name: "Pacific Plumbing", rating: "4.8", count: 612 },
  { name: "TrueLine Heating", rating: "5.0", count: 142 },
]

function SerpTakeoverShowcase() {
  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-2.5deg) translate(-12px, 14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(232,240,253,0.92) 100%)",
          border: "1px solid rgba(66,133,244,0.28)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(66,133,244,0.20)",
        }}
      />

      {/* Main card */}
      <div
        className="relative card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
        }}
      >
        {/* Browser chrome */}
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
            google.com/search?q=emergency+plumber+near+me
          </div>
        </div>

        {/* Search bar with Google "G" */}
        <div
          className="px-4 sm:px-5 py-3 flex items-center gap-2 border-b"
          style={{
            background: "#fff",
            borderColor: "var(--border-color)",
          }}
        >
          <GoogleLogo className="w-[22px] h-[22px] shrink-0" />
          <div
            className="flex-1 px-3 py-2 rounded-full text-[12.5px] font-medium border flex items-center"
            style={{
              background: "#fff",
              borderColor: "#DFE1E5",
              color: "#202124",
              boxShadow: "0 1px 2px rgba(60,64,67,0.04)",
            }}
          >
            emergency plumber near me
          </div>
        </div>

        {/* ── Result 1: Sponsored Search ad ── */}
        <div
          className="relative px-5 sm:px-6 pt-4 pb-4 border-b"
          style={{
            background: "#fff",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="text-[10px] font-extrabold uppercase tracking-[0.1em]"
              style={{ color: "#202124" }}
            >
              Sponsored
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
              style={{
                background: "linear-gradient(135deg, #1A73E8 0%, #4285F4 100%)",
                color: "#fff",
              }}
            >
              A
            </span>
            <div className="min-w-0">
              <div
                className="text-[12px] font-medium leading-tight truncate"
                style={{ color: "#202124" }}
              >
                Acme HVAC &amp; Plumbing
              </div>
              <div
                className="text-[11px] truncate"
                style={{ color: "#5F6368" }}
              >
                acmehvac.com
              </div>
            </div>
          </div>
          <div
            className="mt-2 text-[18px] leading-[1.3] font-medium"
            style={{ color: "#1A0DAB", letterSpacing: "-0.005em" }}
          >
            24/7 Emergency Plumbing &mdash; On-Site in 60 Minutes
          </div>
          <div
            className="mt-1 text-[13px] leading-[1.5]"
            style={{ color: "#4D5156" }}
          >
            Licensed master plumbers, upfront pricing, $0 dispatch fee.
            Book online or call &mdash; trusted by 12K+ neighbors.
          </div>
          <div
            className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] font-medium"
            style={{ color: "#1A0DAB" }}
          >
            <span>Book Now</span>
            <span style={{ color: "#5F6368" }}>&middot;</span>
            <span>Pricing</span>
            <span style={{ color: "#5F6368" }}>&middot;</span>
            <span>Service Areas</span>
          </div>

          {/* Annotation tag — top right */}
          <span
            className="hidden sm:flex absolute top-3 right-3 items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.08em]"
            style={{
              background: "rgba(66,133,244,0.12)",
              color: "#1A73E8",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#1A73E8" }}
            />
            Position 1 &middot; Search
          </span>
        </div>

        {/* ── Result 2: Local Services Ads ── */}
        <div
          className="relative px-5 sm:px-6 pt-4 pb-4 border-b"
          style={{
            background:
              "linear-gradient(180deg, rgba(52,168,83,0.04) 0%, transparent 100%)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-extrabold uppercase tracking-[0.1em]"
                style={{ color: "#202124" }}
              >
                Sponsored &middot; Local Services
              </span>
            </div>
            <GoogleGuaranteedBadge withWordmark size={28} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {lsaCards.map((c) => (
              <div
                key={c.name}
                className="rounded-[10px] p-2 sm:p-2.5"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                }}
              >
                <div className="flex items-center gap-1">
                  <GoogleGuaranteedBadge size={14} />
                  <span
                    className="text-[9.5px] font-bold uppercase tracking-[0.06em]"
                    style={{ color: "#34A853" }}
                  >
                    Guaranteed
                  </span>
                </div>
                <div
                  className="mt-1.5 text-[11.5px] font-bold leading-tight truncate"
                  style={{ color: "#202124" }}
                >
                  {c.name}
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <Star
                    className="w-3 h-3"
                    style={{ color: "#FBBC05" }}
                    fill="#FBBC05"
                    strokeWidth={0}
                  />
                  <span
                    className="text-[10.5px] font-semibold"
                    style={{ color: "#202124" }}
                  >
                    {c.rating}
                  </span>
                  <span
                    className="text-[10px]"
                    style={{ color: "#5F6368" }}
                  >
                    ({c.reviews})
                  </span>
                </div>
                <div
                  className="mt-1 inline-flex items-center gap-0.5 text-[9.5px] font-bold"
                  style={{ color: "#34A853" }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "#34A853" }}
                  />
                  {c.badge}
                </div>
              </div>
            ))}
          </div>

          {/* Annotation tag — left side */}
          <span
            className="hidden sm:flex absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.08em] whitespace-nowrap"
            style={{
              background: "rgba(52,168,83,0.14)",
              color: "#1E7E34",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#34A853" }}
            />
            Pay-per-lead &middot; LSA
          </span>
        </div>

        {/* ── Result 3: Map Pack ── */}
        <div
          className="relative px-5 sm:px-6 pt-4 pb-4"
          style={{ background: "#fff" }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span
              className="text-[10px] font-extrabold uppercase tracking-[0.1em]"
              style={{ color: "#202124" }}
            >
              Map Pack
            </span>
            <span
              className="text-[10px] font-bold"
              style={{ color: "#1A73E8" }}
            >
              View all
            </span>
          </div>
          <div
            className="relative h-[88px] rounded-[10px] overflow-hidden mb-2.5"
            style={{
              background:
                "radial-gradient(circle at 30% 60%, #DDEBFC 0%, #F1F4F9 60%), linear-gradient(135deg, #EEF3FA 0%, #DDEBFC 100%)",
              border: "1px solid var(--border-color)",
            }}
          >
            {/* Faux road lines */}
            <svg
              aria-hidden
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 320 88"
              preserveAspectRatio="none"
            >
              <path
                d="M-10 60 Q80 40 160 50 T 330 30"
                stroke="#fff"
                strokeWidth="6"
                fill="none"
                opacity="0.85"
              />
              <path
                d="M40 -10 Q80 30 100 50 T 130 100"
                stroke="#fff"
                strokeWidth="4"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M-10 22 Q120 38 220 26 T 330 60"
                stroke="#fff"
                strokeWidth="3"
                fill="none"
                opacity="0.7"
              />
            </svg>
            {/* Pins */}
            {[
              { x: "22%", y: "58%", color: "#EA4335" },
              { x: "52%", y: "32%", color: "#1A73E8" },
              { x: "78%", y: "62%", color: "#34A853" },
            ].map((pin, i) => (
              <span
                key={i}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ left: pin.x, top: pin.y }}
              >
                <svg width="22" height="28" viewBox="0 0 22 28" aria-hidden>
                  <path
                    d="M11 0C5 0 0 4.6 0 10.4 0 18 11 28 11 28S22 18 22 10.4C22 4.6 17 0 11 0z"
                    fill={pin.color}
                  />
                  <circle cx="11" cy="10" r="3.5" fill="#fff" />
                </svg>
              </span>
            ))}
          </div>
          <ul className="space-y-1.5">
            {mapPackRows.map((r, i) => (
              <li
                key={r.name}
                className="flex items-center gap-2 text-[12px]"
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                  style={{
                    background: ["#EA4335", "#1A73E8", "#34A853"][i],
                    color: "#fff",
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span
                  className="font-semibold truncate"
                  style={{ color: "#202124" }}
                >
                  {r.name}
                </span>
                <span className="flex items-center gap-1 ml-auto">
                  <Star
                    className="w-3 h-3"
                    style={{ color: "#FBBC05" }}
                    fill="#FBBC05"
                    strokeWidth={0}
                  />
                  <span
                    className="text-[11px] font-semibold"
                    style={{ color: "#202124" }}
                  >
                    {r.rating}
                  </span>
                  <span
                    className="text-[10.5px]"
                    style={{ color: "#5F6368" }}
                  >
                    ({r.count})
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* Annotation tag — top right */}
          <span
            className="hidden sm:flex absolute top-3 right-3 items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.08em]"
            style={{
              background: "rgba(251,188,5,0.18)",
              color: "#A16207",
            }}
          >
            <MapPin className="w-2.5 h-2.5" strokeWidth={2.75} />
            Maps placement
          </span>
        </div>
      </div>

      {/* ── Floating accents ── */}

      {/* Top-right: "You own everything above the fold" badge */}
      <div
        className="hidden sm:flex absolute -top-5 -right-5 z-20 items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #4285F4 0%, #1A73E8 100%)",
          boxShadow:
            "0 2px 6px rgba(26,115,232,0.35), 0 14px 32px rgba(26,115,232,0.28)",
          color: "#fff",
          transform: "rotate(4deg)",
        }}
      >
        <ShieldCheck className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-90">
            You own
          </span>
          <span className="text-[13px] font-extrabold">3 of 3 slots</span>
        </div>
      </div>

      {/* Bottom-left: cost-per-call badge */}
      <div
        className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #F0FDF4 100%)",
          border: "1px solid rgba(52,168,83,0.32)",
          boxShadow:
            "0 2px 6px rgba(52,168,83,0.18), 0 12px 28px rgba(52,168,83,0.18)",
          transform: "rotate(-3deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #34A853 0%, #1E7E34 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(52,168,83,0.35)",
          }}
        >
          <Phone className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Avg LSA call
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            $28 / lead
          </span>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(66,133,244,0.32) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}

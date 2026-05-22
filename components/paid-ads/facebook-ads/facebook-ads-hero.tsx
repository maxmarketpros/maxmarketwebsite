import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Sparkles,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  ThumbsUp,
  MoreHorizontal,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"

const proofPills = [
  { label: "Meta Business Partner" },
  { label: "Pixel + CAPI implemented" },
  { label: "4.3× avg ROAS" },
]

export function FacebookAdsHero() {
  return (
    <section
      aria-labelledby="facebook-ads-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Meta-flavored background glows: Meta blue, cyan, Reels pink */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] sm:w-[840px] sm:h-[840px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(24,119,242,0.22) 0%, rgba(24,119,242,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[20%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.18) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(225,48,108,0.12) 0%, transparent 65%)",
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
              Facebook Ads
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(24,119,242,0.10)",
                borderColor: "rgba(24,119,242,0.28)",
                color: "#1877F2",
              }}
            >
              <MetaWordmark size={14} />
              Feed &middot; Reels &middot; Stories &middot; Lead Forms
            </span>

            <h1
              id="facebook-ads-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Facebook Ads management built to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">book jobs</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Done-for-you{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Facebook Ads management
              </span>{" "}
              for service businesses. Reels, Feed, Stories, lead forms, and
              retargeting across Meta &mdash; managed to your
              cost-per-booked-job, not your CPM. Pair it with{" "}
              <a
                href="/services/seo/local"
                className="font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Local SEO
              </a>{" "}
              and stop guessing which post worked.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get a free Facebook Ads audit
              </PrimaryButton>
              <SecondaryButton asLink href="#facebook-ads-funnel">
                See sample funnel
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
                    style={{ background: "#1877F2" }}
                  />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Facebook Feed showcase */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <FbFeedShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Inline Facebook "f" mark.
 * Reusable across the page (placements grid + final CTA).
 */
export function FacebookLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      aria-label="Facebook"
      role="img"
    >
      <circle cx="18" cy="18" r="18" fill="#1877F2" />
      <path
        d="M21.6 18.75h-2.6V27h-3.4v-8.25H13.5v-3h2.1v-2.1c0-2.5 1.5-3.85 3.95-3.85 1.18 0 2.4.2 2.4.2v2.6h-1.35c-1.32 0-1.7.83-1.7 1.67v2.48h2.94l-.24 3z"
        fill="#fff"
      />
    </svg>
  )
}

/**
 * Inline Meta wordmark — the infinity-style ∞ lockup.
 * Used as a small inline mark, typically alongside text.
 */
export function MetaWordmark({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size * 2.2}
      height={size}
      viewBox="0 0 44 20"
      aria-label="Meta"
      role="img"
    >
      <defs>
        <linearGradient id="meta-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0064E1" />
          <stop offset="50%" stopColor="#1877F2" />
          <stop offset="100%" stopColor="#00C6FF" />
        </linearGradient>
      </defs>
      <path
        d="M4 10c0-3.3 1.6-6 4.5-6 2 0 3.4 1.4 4.6 3.2L15 10l1.9 2.8C18.1 14.6 19.5 16 21.5 16c2.9 0 4.5-2.7 4.5-6s-1.6-6-4.5-6c-2 0-3.4 1.4-4.6 3.2L15 10l-1.9 2.8C11.9 14.6 10.5 16 8.5 16 5.6 16 4 13.3 4 10z"
        fill="none"
        stroke="url(#meta-gradient)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * Realistic Facebook Feed sponsored post mockup with a Reels phone peeking
 * from the right edge. Mirrors the SerpTakeoverShowcase pattern from the
 * Google Ads page.
 */
function FbFeedShowcase() {
  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-2.5deg) translate(-12px, 14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(228,238,255,0.92) 100%)",
          border: "1px solid rgba(24,119,242,0.28)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(24,119,242,0.20)",
        }}
      />

      {/* Main FB Feed card */}
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
            facebook.com/feed
          </div>
        </div>

        {/* FB header bar */}
        <div
          className="px-4 sm:px-5 py-2.5 flex items-center gap-3 border-b"
          style={{
            background: "#fff",
            borderColor: "var(--border-color)",
          }}
        >
          <FacebookLogo size={28} />
          <div
            className="hidden sm:flex flex-1 items-center px-3 py-1.5 rounded-full text-[12px]"
            style={{
              background: "#F0F2F5",
              color: "#65676B",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 mr-1.5 shrink-0"
              aria-hidden
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="#65676B"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="16.5"
                y1="16.5"
                x2="21"
                y2="21"
                stroke="#65676B"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Search Facebook
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "#E4E6EB" }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "#65676B" }}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Sponsored post */}
        <article className="px-4 sm:px-5 py-4" style={{ background: "#fff" }}>
          {/* Post header */}
          <div className="flex items-start gap-2.5">
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-extrabold shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #4A90F5 0%, #1877F2 100%)",
                color: "#fff",
              }}
            >
              A
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span
                  className="text-[13.5px] font-bold leading-tight"
                  style={{ color: "#050505" }}
                >
                  Acme HVAC &amp; Plumbing
                </span>
                <span
                  className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full"
                  style={{
                    background: "#1877F2",
                    color: "#fff",
                  }}
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="w-2.5 h-2.5"
                    aria-hidden
                  >
                    <path
                      d="M3 6l2 2 4-4"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div
                className="mt-0.5 text-[11.5px] flex items-center gap-1"
                style={{ color: "#65676B" }}
              >
                <span className="font-bold">Sponsored</span>
                <span>·</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-3 h-3"
                  fill="#65676B"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="3" />
                  <path
                    d="M12 1.5C6.5 5.5 3.5 11 3.5 14a8.5 8.5 0 0017 0c0-3-3-8.5-8.5-12.5z"
                    fill="none"
                    stroke="#65676B"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#F0F2F5] transition-colors"
              aria-label="More options"
            >
              <MoreHorizontal
                className="w-4 h-4"
                style={{ color: "#65676B" }}
              />
            </button>
          </div>

          {/* Caption */}
          <p
            className="mt-3 text-[13.5px] leading-[1.45]"
            style={{ color: "#050505" }}
          >
            Same-day AC repair in Irvine &mdash; $0 dispatch fee for new
            customers. Most jobs done in under 60 minutes. ❄️
          </p>

          {/* Image card */}
          <div
            className="mt-3 -mx-4 sm:-mx-5 relative aspect-[16/10] overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, #BFD6FF 0%, #1877F2 60%, #0F2A5A 100%)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.45) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(116,211,255,0.45) 0%, transparent 55%)",
              }}
            />
            {/* Hook overlay */}
            <div className="absolute left-4 sm:left-6 right-20 bottom-4">
              <div
                className="text-white text-[18px] sm:text-[22px] font-extrabold leading-[1.1] tracking-[-0.01em] max-w-[360px]"
                style={{ textShadow: "0 2px 14px rgba(0,0,0,0.45)" }}
              >
                AC out? On-site in 60 min &mdash; or your service call is
                free.
              </div>
            </div>
            {/* Floating placement badge */}
            <span
              className="hidden sm:flex absolute top-3 right-3 items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.08em]"
              style={{
                background: "rgba(255,255,255,0.94)",
                color: "#1877F2",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#1877F2" }}
              />
              Feed &middot; Sponsored
            </span>
          </div>

          {/* Link preview / CTA */}
          <div
            className="-mx-4 sm:-mx-5 px-4 sm:px-5 py-3 flex items-center justify-between border-t"
            style={{
              background: "#F0F2F5",
              borderColor: "#E4E6EB",
            }}
          >
            <div className="min-w-0">
              <div
                className="text-[10.5px] uppercase font-medium tracking-[0.04em] truncate"
                style={{ color: "#65676B" }}
              >
                acmehvac.com
              </div>
              <div
                className="text-[14px] font-bold leading-tight truncate mt-0.5"
                style={{ color: "#050505" }}
              >
                Book Same-Day AC Repair &mdash; $0 Dispatch
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 ml-3 px-3 py-1.5 rounded-md text-[12px] font-bold transition-colors"
              style={{
                background: "#E4E6EB",
                color: "#050505",
              }}
            >
              Book Now
            </button>
          </div>

          {/* Reactions row */}
          <div
            className="mt-3 flex items-center justify-between text-[11.5px]"
            style={{ color: "#65676B" }}
          >
            <div className="flex items-center gap-1">
              <span className="flex -space-x-1">
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{
                    background: "#1877F2",
                    border: "1.5px solid #fff",
                  }}
                >
                  <ThumbsUp
                    className="w-2.5 h-2.5"
                    fill="#fff"
                    strokeWidth={0}
                  />
                </span>
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{
                    background: "#F33E58",
                    border: "1.5px solid #fff",
                  }}
                >
                  <Heart
                    className="w-2.5 h-2.5"
                    fill="#fff"
                    strokeWidth={0}
                  />
                </span>
              </span>
              <span className="ml-1">2.1K</span>
            </div>
            <div className="flex items-center gap-3">
              <span>184 comments</span>
              <span>92 shares</span>
            </div>
          </div>

          {/* Action buttons */}
          <div
            className="mt-2 pt-2 border-t flex items-center justify-around"
            style={{ borderColor: "#E4E6EB" }}
          >
            {[
              { Icon: ThumbsUp, label: "Like" },
              { Icon: MessageCircle, label: "Comment" },
              { Icon: Send, label: "Share" },
              { Icon: Bookmark, label: "Save" },
            ].map((a) => (
              <button
                key={a.label}
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-[#F0F2F5] text-[12px] font-semibold transition-colors"
                style={{ color: "#65676B" }}
              >
                <a.Icon className="w-4 h-4" strokeWidth={2.25} />
                <span className="hidden sm:inline">{a.label}</span>
              </button>
            ))}
          </div>
        </article>
      </div>

      {/* Reels phone peeking from the right */}
      <div
        aria-hidden
        className="hidden md:block absolute -right-10 top-[8%] w-[120px] aspect-[9/16] rounded-[20px] overflow-hidden z-10"
        style={{
          background:
            "linear-gradient(160deg, #FBA0C5 0%, #E1306C 50%, #6B237B 100%)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.18), 0 18px 38px rgba(225,48,108,0.42)",
          border: "2px solid rgba(255,255,255,0.85)",
          transform: "rotate(6deg)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at 40% 20%, rgba(255,255,255,0.32) 0%, transparent 55%)",
          }}
        />
        <div className="absolute top-2 left-2 right-2 flex items-center gap-1 text-white/85 text-[8px] font-semibold">
          <span
            className="w-3.5 h-3.5 rounded-full"
            style={{
              background: "linear-gradient(135deg, #FBA0C5 0%, #E1306C 100%)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          />
          acme.hvac
        </div>
        <div className="absolute bottom-2 left-2 right-8 text-white">
          <div
            className="text-[9.5px] font-extrabold leading-[1.1]"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
          >
            Why your AC bill spiked
          </div>
        </div>
        <div className="absolute right-1.5 bottom-2 flex flex-col items-center gap-1.5 text-white/85">
          <Heart className="w-2.5 h-2.5" fill="currentColor" strokeWidth={2.25} />
          <MessageCircle className="w-2.5 h-2.5" strokeWidth={2.25} />
        </div>
      </div>

      {/* Floating: cost-per-lead badge — bottom-left */}
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
          <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Avg lead
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            $24 / lead
          </span>
        </div>
      </div>

      {/* Floating: creative cadence — top-right */}
      <div
        className="hidden sm:flex absolute -top-5 -right-5 z-20 items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #4A90F5 0%, #1877F2 100%)",
          boxShadow:
            "0 2px 6px rgba(24,119,242,0.45), 0 14px 32px rgba(24,119,242,0.32)",
          color: "#fff",
          transform: "rotate(4deg)",
        }}
      >
        <Sparkles className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-90">
            Shipped this week
          </span>
          <span className="text-[13px] font-extrabold">8 creatives</span>
        </div>
      </div>

      {/* iOS 14.5-safe pill — bottom-right outside */}
      <div
        className="hidden lg:flex absolute -bottom-3 right-2 z-20 items-center gap-1.5 px-2.5 py-1.5 rounded-full"
        style={{
          background: "rgba(15,23,42,0.92)",
          color: "#fff",
          boxShadow: "0 8px 22px rgba(15,23,42,0.32)",
          border: "1px solid rgba(255,255,255,0.12)",
          transform: "rotate(-2deg)",
        }}
      >
        <ShieldCheck className="w-3 h-3" strokeWidth={2.75} />
        <span className="text-[10px] font-bold uppercase tracking-[0.08em]">
          iOS 14.5-safe tracking
        </span>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(24,119,242,0.36) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}

import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Sparkles,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  TrendingUp,
  ShieldCheck,
  Play,
  ChevronDown,
} from "lucide-react"

const proofPills = [
  { label: "Meta Business Partner" },
  { label: "Reels-first creative" },
  { label: "60-day creative refresh" },
  { label: "Cost-per-booked-job tracked" },
]

/**
 * Canonical Instagram brand gradient — single source for every gradient
 * stroke, ring, glow, and text fill on the page. Imported by sibling
 * components via <IgGradientDefs/> (renders <defs> only once per SVG).
 */
export const IG_GRADIENT_STOPS = [
  { offset: "0%", color: "#feda75" },
  { offset: "25%", color: "#fa7e1e" },
  { offset: "55%", color: "#d62976" },
  { offset: "80%", color: "#962fbf" },
  { offset: "100%", color: "#4f5bd5" },
]

export const IG_GRADIENT_CSS =
  "linear-gradient(135deg, #feda75 0%, #fa7e1e 25%, #d62976 55%, #962fbf 80%, #4f5bd5 100%)"

/** Drops one shared linearGradient into any SVG. id defaults to `ig-grad`. */
export function IgGradientDefs({ id = "ig-grad" }: { id?: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        {IG_GRADIENT_STOPS.map((s) => (
          <stop key={s.offset} offset={s.offset} stopColor={s.color} />
        ))}
      </linearGradient>
    </defs>
  )
}

/**
 * Canonical Instagram camera mark with the full 5-stop gradient.
 * Reused everywhere the IG logo appears on the page.
 */
export function InstagramLogo({ size = 28 }: { size?: number }) {
  const gradId = `ig-logo-grad-${size}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      aria-label="Instagram"
      role="img"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          {IG_GRADIENT_STOPS.map((s) => (
            <stop key={s.offset} offset={s.offset} stopColor={s.color} />
          ))}
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="32"
        height="32"
        rx="9"
        fill={`url(#${gradId})`}
      />
      <rect
        x="8.5"
        y="8.5"
        width="19"
        height="19"
        rx="6"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
      />
      <circle
        cx="18"
        cy="18"
        r="4.4"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
      />
      <circle cx="25.6" cy="10.4" r="1.5" fill="#fff" />
    </svg>
  )
}

/**
 * "Story-ring" wrapper — the gradient ring around an avatar/thumbnail.
 * Renders any inner element with the canonical IG ring.
 */
export function StoryRing({
  size = 48,
  thickness = 2,
  children,
}: {
  size?: number
  thickness?: number
  children: React.ReactNode
}) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full shrink-0"
      style={{
        width: size,
        height: size,
        background: IG_GRADIENT_CSS,
        padding: thickness,
      }}
    >
      <span
        className="rounded-full overflow-hidden flex items-center justify-center"
        style={{
          width: "100%",
          height: "100%",
          background: "#fff",
        }}
      >
        {children}
      </span>
    </span>
  )
}

export function InstagramAdsHero() {
  return (
    <section
      aria-labelledby="instagram-ads-hero-heading"
      className="relative overflow-hidden"
    >
      {/* IG-flavored ambient glows: amber → pink → purple → indigo */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] sm:w-[840px] sm:h-[840px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(250,126,30,0.22) 0%, rgba(214,41,118,0.12) 45%, transparent 72%)",
          }}
        />
        <div
          className="absolute top-[18%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(150,47,191,0.18) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(79,91,213,0.14) 0%, transparent 65%)",
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
              Instagram Ads
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            {/* IG gradient pill */}
            <span
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full"
              style={{
                background: IG_GRADIENT_CSS,
                color: "#fff",
                boxShadow:
                  "0 1px 2px rgba(214,41,118,0.25), 0 8px 22px rgba(150,47,191,0.32)",
              }}
            >
              <InstagramLogo size={14} />
              Reels &middot; Stories &middot; Feed &middot; Explore
            </span>

            <h1
              id="instagram-ads-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Instagram Ads management that{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    background: IG_GRADIENT_CSS,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  stops the scroll
                </span>
                .
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Done-for-you{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Instagram Ads management
              </span>{" "}
              for service businesses. Reels, Stories, Feed, Explore, and
              influencer-whitelisted campaigns &mdash; with thumb-stopping
              creative produced in-house and managed to your
              cost-per-booked-job. Pair it with{" "}
              <a
                href="/services/social-media/management"
                className="font-semibold"
                style={{ color: "var(--accent)" }}
              >
                organic social
              </a>{" "}
              and your feed actually starts pulling its weight.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[17px] font-semibold rounded-[var(--radius-sm)] text-white transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background: IG_GRADIENT_CSS,
                  boxShadow:
                    "0 1px 2px rgba(214,41,118,0.25), 0 8px 24px rgba(150,47,191,0.42)",
                }}
              >
                Get my free Instagram Ads audit
              </a>
              <SecondaryButton
                asLink
                href="#instagram-ads-creative-studio"
              >
                See how creative is built
              </SecondaryButton>
            </div>

            {/* Proof ribbon — IG gradient dots */}
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
                    style={{ background: IG_GRADIENT_CSS }}
                  />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: IG Ads Manager dashboard mock */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <IgAdsManagerShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Custom IG-themed Ads Manager dashboard mock — purpose-built for the
 * Instagram Ads page. Distinct from the FB hero (which shows a Feed post)
 * and the Google Ads hero (SERP). Shows a dark dashboard with IG-only
 * campaigns, placement-tagged rows, ROAS sparkline, and a top-creative
 * strip styled like the IG profile grid.
 */
function IgAdsManagerShowcase() {
  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-2deg) translate(-12px, 14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,235,245,0.92) 100%)",
          border: "1px solid rgba(214,41,118,0.28)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(150,47,191,0.22)",
        }}
      />

      {/* Main dashboard card */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "#0F1116",
          borderRadius: "var(--radius-xl)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 1px 3px rgba(15,17,22,0.42), 0 24px 60px rgba(15,17,22,0.55)",
        }}
      >
        {/* IG gradient header bar */}
        <div
          aria-hidden
          className="h-[3px] w-full"
          style={{ background: IG_GRADIENT_CSS }}
        />

        {/* Window chrome */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{
            background:
              "linear-gradient(180deg, #181A22 0%, #14161D 100%)",
            borderColor: "rgba(255,255,255,0.06)",
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
          <div className="ml-2 flex items-center gap-2">
            <InstagramLogo size={16} />
            <span
              className="text-[11.5px] font-semibold"
              style={{ color: "#E5E7EB" }}
            >
              Ads Manager &middot; Instagram only
            </span>
          </div>
          <span
            className="ml-auto inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{
              background: "rgba(34,197,94,0.18)",
              color: "#86EFAC",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#22C55E" }}
            />
            Live
          </span>
        </div>

        {/* Status bar */}
        <div
          className="px-5 py-3 flex items-center justify-between text-[11px] border-b"
          style={{
            background: "#13151C",
            color: "#9CA3AF",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <span className="flex items-center gap-3">
            <span className="font-semibold" style={{ color: "#E5E7EB" }}>
              3 active campaigns
            </span>
            <span aria-hidden>·</span>
            <span>Last 30 days</span>
            <span aria-hidden>·</span>
            <span>Spend $14,820</span>
          </span>
          <span
            className="hidden sm:inline-flex items-center gap-1 font-semibold"
            style={{ color: "#86EFAC" }}
          >
            <TrendingUp className="w-3 h-3" strokeWidth={2.75} />
            ROAS 4.2&times;
          </span>
        </div>

        {/* Campaign rows */}
        <div className="px-3 sm:px-4 py-3 space-y-2">
          {[
            {
              name: "Spring Reels &mdash; cold prospecting",
              placements: ["Reels", "Explore"],
              spend: "$6.8K",
              roas: "5.1&times;",
              dot: "#22C55E",
              spark: "M0,28 L20,22 L40,24 L60,16 L80,18 L100,8",
            },
            {
              name: "Stories retargeting &mdash; abandon-quote",
              placements: ["Stories"],
              spend: "$4.2K",
              roas: "3.6&times;",
              dot: "#22C55E",
              spark: "M0,22 L20,24 L40,18 L60,20 L80,14 L100,12",
            },
            {
              name: "UGC whitelist &mdash; @sandra.fixes",
              placements: ["Feed", "Reels"],
              spend: "$3.8K",
              roas: "4.0&times;",
              dot: "#FACC15",
              spark: "M0,18 L20,16 L40,20 L60,14 L80,16 L100,10",
            },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center gap-3 px-3 py-2.5 rounded-[10px]"
              style={{
                background: "#181A22",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: row.dot }}
              />
              <div className="min-w-0 flex-1">
                <div
                  className="text-[12.5px] font-semibold truncate"
                  style={{ color: "#F3F4F6" }}
                  dangerouslySetInnerHTML={{ __html: row.name }}
                />
                <div className="mt-1 flex items-center gap-1.5">
                  {row.placements.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center px-1.5 py-0.5 rounded-[5px] text-[9.5px] font-bold uppercase tracking-[0.06em]"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid",
                        borderImage: `${IG_GRADIENT_CSS} 1`,
                        borderImageSlice: 1,
                        color: "#F3F4F6",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              {/* Sparkline */}
              <svg
                width="80"
                height="32"
                viewBox="0 0 100 32"
                className="hidden sm:block shrink-0"
                aria-hidden
              >
                <IgGradientDefs id={`spark-${row.spend}`} />
                <path
                  d={row.spark}
                  fill="none"
                  stroke={`url(#spark-${row.spend})`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="hidden md:flex flex-col items-end leading-tight shrink-0">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "#9CA3AF" }}
                >
                  Spend
                </span>
                <span
                  className="text-[12.5px] font-mono font-semibold"
                  style={{ color: "#E5E7EB" }}
                >
                  {row.spend}
                </span>
              </div>
              <span
                className="shrink-0 inline-flex items-center px-2 py-1 rounded-md text-[11px] font-extrabold"
                style={{
                  background: "rgba(34,197,94,0.16)",
                  color: "#86EFAC",
                }}
                dangerouslySetInnerHTML={{ __html: row.roas }}
              />
            </div>
          ))}
        </div>

        {/* Top creative strip — IG profile grid feel */}
        <div
          className="px-5 py-4 border-t"
          style={{
            background: "#0F1116",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#9CA3AF" }}
            >
              Top creative &middot; this week
            </span>
            <span
              className="inline-flex items-center gap-1 text-[10.5px] font-semibold"
              style={{ color: "#E5E7EB" }}
            >
              View all
              <ChevronDown className="w-3 h-3 -rotate-90" strokeWidth={2.5} />
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { hue1: "#fa7e1e", hue2: "#d62976", icon: "reel", hook: "AC bill spiked?" },
              { hue1: "#d62976", hue2: "#962fbf", icon: "story", hook: "$0 dispatch" },
              { hue1: "#962fbf", hue2: "#4f5bd5", icon: "reel", hook: "Before / after" },
            ].map((tile, i) => (
              <div
                key={i}
                className="relative rounded-[8px] overflow-hidden aspect-[3/4]"
                style={{
                  background: `linear-gradient(160deg, ${tile.hue1} 0%, ${tile.hue2} 100%)`,
                  padding: 1.5,
                }}
              >
                {/* gradient ring effect */}
                <div
                  className="relative w-full h-full rounded-[7px] overflow-hidden"
                  style={{
                    background: `linear-gradient(160deg, ${tile.hue1}cc 0%, ${tile.hue2}ee 100%)`,
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-60"
                    style={{
                      background:
                        "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.32) 0%, transparent 60%)",
                    }}
                  />
                  <span
                    className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8.5px] font-bold uppercase tracking-[0.06em]"
                    style={{
                      background: "rgba(0,0,0,0.45)",
                      color: "#fff",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {tile.icon === "reel" ? (
                      <Play className="w-2.5 h-2.5" fill="#fff" strokeWidth={0} />
                    ) : (
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#fff" }}
                      />
                    )}
                    {tile.icon === "reel" ? "Reel" : "Story"}
                  </span>
                  <span
                    className="absolute bottom-1.5 left-1.5 right-1.5 text-[9.5px] font-extrabold leading-tight text-white"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.55)" }}
                  >
                    {tile.hook}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating: ROAS chip — top-right */}
      <div
        className="hidden sm:flex absolute -top-5 -right-5 z-20 items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: IG_GRADIENT_CSS,
          color: "#fff",
          boxShadow:
            "0 2px 6px rgba(214,41,118,0.45), 0 14px 32px rgba(150,47,191,0.42)",
          transform: "rotate(4deg)",
        }}
      >
        <Sparkles className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-90">
            30-day ROAS
          </span>
          <span className="text-[14px] font-extrabold">4.2&times; on $14.8K</span>
        </div>
      </div>

      {/* Floating: CPL chip — bottom-left */}
      <div
        className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #FFF7FB 100%)",
          border: "1px solid rgba(214,41,118,0.32)",
          boxShadow:
            "0 2px 6px rgba(214,41,118,0.18), 0 12px 28px rgba(150,47,191,0.18)",
          transform: "rotate(-3deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: IG_GRADIENT_CSS,
            color: "#fff",
            boxShadow: "0 2px 4px rgba(214,41,118,0.35)",
          }}
        >
          <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Avg booked-job cost
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            $38 / lead
          </span>
        </div>
      </div>

      {/* iOS 14.5 / CAPI pill — bottom-right outside */}
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
          Pixel + CAPI clean
        </span>
      </div>

      {/* Reels phone peeking from the right */}
      <div
        aria-hidden
        className="hidden md:block absolute -right-12 top-[18%] w-[110px] aspect-[9/16] rounded-[20px] overflow-hidden z-10"
        style={{
          background: IG_GRADIENT_CSS,
          padding: 2,
          transform: "rotate(7deg)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.18), 0 18px 38px rgba(214,41,118,0.42)",
        }}
      >
        <div
          className="relative w-full h-full rounded-[18px] overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #fa7e1e 0%, #d62976 60%, #4f5bd5 100%)",
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
          <div className="absolute top-2 left-2 right-2 flex items-center gap-1 text-white/95 text-[8.5px] font-semibold">
            <span
              className="w-3.5 h-3.5 rounded-full"
              style={{
                background: "#fff",
                border: "1.5px solid rgba(255,255,255,0.7)",
              }}
            />
            sandra.fixes
          </div>
          <div className="absolute left-1.5 right-7 bottom-2 text-white">
            <div
              className="text-[9.5px] font-extrabold leading-[1.1]"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
            >
              I quoted 3 jobs from this Reel.
            </div>
          </div>
          <div className="absolute right-1.5 bottom-2 flex flex-col items-center gap-1.5 text-white/95">
            <Heart className="w-2.5 h-2.5" fill="currentColor" strokeWidth={2.25} />
            <MessageCircle className="w-2.5 h-2.5" strokeWidth={2.25} />
            <Send className="w-2.5 h-2.5" strokeWidth={2.25} />
            <Bookmark className="w-2.5 h-2.5" strokeWidth={2.25} />
          </div>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(90deg, rgba(250,126,30,0.36) 0%, rgba(214,41,118,0.36) 50%, rgba(150,47,191,0.36) 100%)",
        }}
      />
    </div>
  )
}

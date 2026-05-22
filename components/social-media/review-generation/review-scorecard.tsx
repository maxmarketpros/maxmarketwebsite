import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { Star, TrendingUp, ArrowRight } from "lucide-react"

type LogoSource =
  | { type: "icons8"; id: string }
  | { type: "favicon"; domain: string }

type Platform = {
  name: string
  logo: LogoSource
  brandColor: string
  rating: number
  reviewCount: string
  monthlyDelta: string
  industryTag: string
  spark: number[]
}

const platforms: Platform[] = [
  {
    name: "Google",
    logo: { type: "icons8", id: "17949" },
    brandColor: "#4285F4",
    rating: 4.9,
    reviewCount: "1,284",
    monthlyDelta: "+47",
    industryTag: "Best for: Every local business",
    spark: [3.9, 4.0, 4.1, 4.2, 4.3, 4.5, 4.6, 4.7, 4.8, 4.85, 4.88, 4.9],
  },
  {
    name: "Yelp",
    logo: { type: "icons8", id: "20905" },
    brandColor: "#D32323",
    rating: 4.6,
    reviewCount: "342",
    monthlyDelta: "+18",
    industryTag: "Best for: Restaurants, services",
    spark: [3.6, 3.7, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.5, 4.55, 4.6],
  },
  {
    name: "Facebook",
    logo: { type: "icons8", id: "118497" },
    brandColor: "#1877F2",
    rating: 4.8,
    reviewCount: "612",
    monthlyDelta: "+24",
    industryTag: "Best for: B2C trust signals",
    spark: [4.1, 4.2, 4.3, 4.4, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.78, 4.8],
  },
  {
    name: "BBB",
    logo: { type: "icons8", id: "xFOJQACraOWU" },
    brandColor: "#0050A3",
    rating: 4.9,
    reviewCount: "A+ rated",
    monthlyDelta: "+9",
    industryTag: "Best for: Home services, contractors",
    spark: [4.4, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.82, 4.85, 4.88, 4.9],
  },
  {
    name: "Angi",
    logo: { type: "favicon", domain: "angi.com" },
    brandColor: "#F23005",
    rating: 4.8,
    reviewCount: "186",
    monthlyDelta: "+12",
    industryTag: "Best for: HVAC, plumbing, contractors",
    spark: [3.8, 3.9, 4.0, 4.2, 4.3, 4.4, 4.5, 4.6, 4.65, 4.7, 4.75, 4.8],
  },
  {
    name: "HomeAdvisor",
    logo: { type: "favicon", domain: "homeadvisor.com" },
    brandColor: "#FF6F19",
    rating: 4.7,
    reviewCount: "204",
    monthlyDelta: "+11",
    industryTag: "Best for: Lead-gen for trades",
    spark: [3.7, 3.8, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.55, 4.6, 4.65, 4.7],
  },
  {
    name: "TripAdvisor",
    logo: { type: "icons8", id: "20794" },
    brandColor: "#34E0A1",
    rating: 4.7,
    reviewCount: "421",
    monthlyDelta: "+15",
    industryTag: "Best for: Restaurants, hospitality",
    spark: [3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.55, 4.6, 4.65, 4.68, 4.7],
  },
  {
    name: "Trustpilot",
    logo: { type: "icons8", id: "68aEVTzfHi6F" },
    brandColor: "#00B67A",
    rating: 4.8,
    reviewCount: "538",
    monthlyDelta: "+22",
    industryTag: "Best for: Online + e-commerce trust",
    spark: [3.8, 3.9, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.65, 4.7, 4.75, 4.8],
  },
]

function logoUrl(logo: LogoSource, size: number) {
  if (logo.type === "icons8") return icons8Url(logo.id, size)
  return `https://www.google.com/s2/favicons?domain=${logo.domain}&sz=${size}`
}

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const w = 88
  const h = 22
  const step = w / (data.length - 1)
  const points = data
    .map((v, i) => `${i * step},${h - ((v - min) / range) * h}`)
    .join(" ")
  const areaPoints = `0,${h} ${points} ${w},${h}`
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      className="overflow-visible"
    >
      <defs>
        <linearGradient id={`spark-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.32" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={areaPoints}
        fill={`url(#spark-${color.replace("#", "")})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={w}
        cy={h - ((data[data.length - 1] - min) / range) * h}
        r={2.5}
        fill={color}
      />
    </svg>
  )
}

export function ReviewScorecard() {
  return (
    <section
      id="review-scorecard"
      aria-labelledby="review-scorecard-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-6%] w-[540px] h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Every Platform That Matters"
          heading={
            <span id="review-scorecard-heading">
              Win the platforms your customers{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">actually check</span>.
              </span>
            </span>
          }
          paragraph="Google is the gateway, but a 4.8★ on Google plus a 2.7★ on Yelp tanks your credibility. We run review generation across 8 platforms in parallel so your reputation reads identical no matter where a customer lands."
        />

        <div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {platforms.map((p) => (
            <div
              key={p.name}
              className="card-surface card-surface-hover relative overflow-hidden p-5"
              style={{
                borderRadius: "var(--radius-lg)",
              }}
            >
              {/* Corner glow */}
              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${p.brandColor}26 0%, transparent 70%)`,
                }}
              />

              <div className="relative flex items-center justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 1px 2px rgba(17,35,68,0.06)",
                  }}
                >
                  <img
                    src={logoUrl(p.logo, 96)}
                    alt={p.name}
                    width={26}
                    height={26}
                    loading="lazy"
                    decoding="async"
                    className="w-[26px] h-[26px] object-contain"
                  />
                </div>
                <span
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10.5px] font-bold uppercase tracking-[0.08em]"
                  style={{
                    background: "rgba(34,197,94,0.12)",
                    color: "#15803D",
                  }}
                >
                  <TrendingUp className="w-3 h-3" strokeWidth={2.75} />
                  {p.monthlyDelta}/mo
                </span>
              </div>

              <div
                className="text-[16px] font-bold mb-1"
                style={{ color: "var(--ink)" }}
              >
                {p.name}
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="text-[28px] font-extrabold leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  {p.rating.toFixed(1)}
                </span>
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => {
                    const filled = i < Math.round(p.rating)
                    return (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5"
                        fill={filled ? p.brandColor : "transparent"}
                        stroke={filled ? p.brandColor : "var(--border-color)"}
                        strokeWidth={1.5}
                      />
                    )
                  })}
                </div>
              </div>

              <div
                className="text-[12px] font-medium mb-3"
                style={{ color: "var(--muted)" }}
              >
                {p.reviewCount} reviews
              </div>

              <div className="mb-3">
                <Sparkline data={p.spark} color={p.brandColor} />
              </div>

              <div
                className="text-[11.5px] font-medium pt-3"
                style={{
                  borderTop: "1px solid var(--border-color)",
                  color: "var(--muted)",
                }}
              >
                {p.industryTag}
              </div>
            </div>
          ))}
        </div>

        {/* Inline CTA strip */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-[var(--radius-lg)]"
          style={{
            background: "var(--accent-bg)",
            border: "1px solid rgba(22,119,255,0.20)",
          }}
        >
          <div>
            <div
              className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1"
              style={{ color: "var(--accent)" }}
            >
              Industry priority map
            </div>
            <div
              className="text-[16px] sm:text-[17px] font-semibold leading-[1.4]"
              style={{ color: "var(--ink)" }}
            >
              Not sure which 3 platforms actually move the needle for your
              industry?
            </div>
          </div>
          <SecondaryButton asLink href="#contact">
            Get a platform-priority map
          </SecondaryButton>
        </div>

        {/* Inline sibling link */}
        <p
          className="mt-6 text-center text-[14.5px]"
          style={{ color: "var(--muted)" }}
        >
          Stack this with{" "}
          <a
            href="/services/seo/local"
            style={{ color: "var(--accent)", fontWeight: 600 }}
            className="hover:underline"
          >
            Local SEO <ArrowRight className="inline w-3.5 h-3.5" strokeWidth={2.5} />
          </a>{" "}
          to convert that 4.9★ into Map-Pack ranking power.
        </p>
      </div>
    </section>
  )
}

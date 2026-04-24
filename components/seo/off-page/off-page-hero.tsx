import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Share2, ExternalLink, TrendingUp } from "lucide-react"

const proofPills = [
  { label: "+28 referring domains / mo avg." },
  { label: "DR +18 in 90 days" },
  { label: "Dofollow-only" },
  { label: "Editorial, never PBNs" },
]

type Placement = {
  mark: string
  pub: string
  markBg: string
  markColor: string
  time: string
  headline: string
  dr: number
  linkType: "Dofollow" | "Mention"
  anchor: string
}

const placements: Placement[] = [
  {
    mark: "F",
    pub: "Forbes",
    markBg: "#0B132B",
    markColor: "#fff",
    time: "2d ago",
    headline: "Top 10 Marketing Agencies Scaling Service Businesses in 2026",
    dr: 94,
    linkType: "Dofollow",
    anchor: "maxmarketpros.com",
  },
  {
    mark: "H",
    pub: "HubSpot Blog",
    markBg: "#FF7A59",
    markColor: "#fff",
    time: "5d ago",
    headline: "Expert Roundup: How Local Service Brands Win Organic Traffic",
    dr: 93,
    linkType: "Dofollow",
    anchor: "local SEO strategies",
  },
  {
    mark: "E",
    pub: "Entrepreneur",
    markBg: "#1E3A8A",
    markColor: "#fff",
    time: "1w ago",
    headline: "The Real ROI of Digital PR for Small Businesses",
    dr: 91,
    linkType: "Dofollow",
    anchor: "digital PR agency",
  },
  {
    mark: "I",
    pub: "Inc.com",
    markBg: "#D72027",
    markColor: "#fff",
    time: "2w ago",
    headline: "HARO-Quoted: Building Domain Authority Without Paid Links",
    dr: 92,
    linkType: "Mention",
    anchor: "Max Market Pros",
  },
  {
    mark: "C",
    pub: "Irvine Chamber",
    markBg: "#059669",
    markColor: "#fff",
    time: "3w ago",
    headline: "New Member Spotlight — Max Market Pros",
    dr: 48,
    linkType: "Dofollow",
    anchor: "maxmarketpros.com",
  },
]

export function OffPageHero() {
  return (
    <section
      aria-labelledby="off-page-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Purple-dominant ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(109,40,217,0.05) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[22%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.1) 0%, transparent 65%)",
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
              <a href="/services/seo" className="hover:text-[var(--accent)]">
                SEO
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Off-Page SEO
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(139,92,246,0.1)",
                borderColor: "rgba(139,92,246,0.25)",
                color: "#6D28D9",
              }}
            >
              <Share2 className="w-3.5 h-3.5" strokeWidth={2.5} />
              Off-Page SEO · Authority + earned media
            </span>

            <h1
              id="off-page-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Off-Page SEO that earns the links Google actually{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">trusts</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Done-for-you off-page SEO. We earn{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                editorial backlinks, digital PR mentions, and authority
                citations
              </span>{" "}
              from sites Google already trusts — growing your domain rating,
              referring domains, and organic visibility quarter over quarter.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get your free off-page audit
              </PrimaryButton>
              <SecondaryButton asLink href="#off-page-authority-growth">
                See our earned placements
              </SecondaryButton>
            </div>

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
                    style={{ background: "#8B5CF6" }}
                  />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: earned media feed */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <EarnedMediaFeed placements={placements} />
          </div>
        </div>
      </div>
    </section>
  )
}

function EarnedMediaFeed({ placements }: { placements: Placement[] }) {
  return (
    <div className="relative max-w-[560px] mx-auto">
      <div
        className="relative card-surface overflow-hidden"
        style={{ borderRadius: "var(--radius-xl)" }}
      >
        {/* Feed header */}
        <div
          className="flex items-center justify-between gap-3 px-5 py-4 border-b"
          style={{
            background:
              "linear-gradient(180deg, #F7F2FF 0%, #EEF0FF 100%)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "#10B981",
                boxShadow: "0 0 0 4px rgba(16,185,129,0.18)",
              }}
            />
            <span
              className="text-[12px] font-bold"
              style={{ color: "var(--ink)" }}
            >
              Earned placements · Last 30 days
            </span>
          </div>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: "#6D28D9" }}
          >
            Live feed
          </span>
        </div>

        {/* Feed rows */}
        <div
          className="divide-y"
          style={{ borderColor: "var(--border-color)" }}
        >
          {placements.map((p, idx) => (
            <div
              key={p.pub}
              className="px-5 py-3.5 flex items-start gap-3"
              style={{
                borderColor: "var(--border-color)",
                animation: `fadeInUp 0.7s ease-out ${0.2 + idx * 0.08}s both`,
              }}
            >
              {/* Logo mark */}
              <span
                className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-[14px] font-bold"
                style={{
                  background: p.markBg,
                  color: p.markColor,
                  boxShadow: "0 1px 3px rgba(17,35,68,0.08)",
                }}
              >
                {p.mark}
              </span>

              <div className="min-w-0 flex-1">
                {/* Top row */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[13.5px] font-bold"
                    style={{ color: "var(--ink)" }}
                  >
                    {p.pub}
                  </span>
                  <span
                    className="text-[11px] font-mono shrink-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.time}
                  </span>
                </div>
                {/* Headline */}
                <div
                  className="mt-0.5 text-[12.5px] leading-[1.4] italic truncate"
                  style={{ color: "var(--muted)" }}
                >
                  &ldquo;{p.headline}&rdquo;
                </div>
                {/* Meta row */}
                <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10.5px] font-mono font-bold"
                    style={{
                      background: "rgba(139,92,246,0.12)",
                      color: "#6D28D9",
                    }}
                  >
                    DR {p.dr}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10.5px] font-semibold"
                    style={{
                      background:
                        p.linkType === "Dofollow"
                          ? "rgba(16,185,129,0.12)"
                          : "rgba(245,158,11,0.12)",
                      color:
                        p.linkType === "Dofollow" ? "#059669" : "#B4730E",
                    }}
                  >
                    {p.linkType}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-[10.5px] font-mono truncate"
                    style={{ color: "var(--muted)" }}
                  >
                    <ExternalLink className="w-2.5 h-2.5" strokeWidth={2.5} />
                    {p.anchor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="px-5 py-3 flex items-center justify-between border-t text-[11.5px]"
          style={{
            background: "#FAFBFE",
            borderColor: "var(--border-color)",
            color: "var(--muted)",
          }}
        >
          <span>+12 more placements this month</span>
          <span
            className="inline-flex items-center gap-1 font-semibold"
            style={{ color: "#6D28D9" }}
          >
            View all →
          </span>
        </div>
      </div>

      {/* Floating top-right badge */}
      <div
        className="hidden sm:flex absolute -top-3 -right-3 items-center gap-1.5 px-3 py-2 rounded-full text-[11.5px] font-semibold"
        style={{
          background:
            "linear-gradient(180deg, #7C3AED 0%, #6D28D9 100%)",
          color: "#fff",
          boxShadow: "0 4px 16px rgba(109,40,217,0.35)",
        }}
      >
        <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
        +147 links this quarter
      </div>

      {/* Floating bottom-left stat */}
      <div
        className="hidden sm:flex absolute -bottom-4 -left-4 flex-col items-start px-4 py-2.5 rounded-[var(--radius-sm)]"
        style={{
          background: "#fff",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.08), 0 10px 30px rgba(17,35,68,0.12)",
          border: "1px solid var(--border-color)",
        }}
      >
        <div
          className="text-[10px] font-semibold uppercase tracking-[0.08em]"
          style={{ color: "var(--muted)" }}
        >
          Domain Rating
        </div>
        <div className="flex items-baseline gap-1.5">
          <span
            className="text-[13px] font-mono line-through"
            style={{ color: "var(--muted)" }}
          >
            42
          </span>
          <span style={{ color: "var(--muted)" }}>→</span>
          <span
            className="text-[22px] font-bold leading-none"
            style={{ color: "#6D28D9" }}
          >
            68
          </span>
        </div>
      </div>
    </div>
  )
}

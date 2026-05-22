import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Newspaper,
  Radio,
  Link2,
  Clock,
  Award,
  Share2,
  Eye,
  Quote,
} from "lucide-react"

const proofPills = [
  { Icon: Radio, label: "200+ real outlets" },
  { Icon: Award, label: "Tier-1 placements" },
  { Icon: Link2, label: "Real dofollow links" },
  { Icon: Clock, label: "48-hr turnaround" },
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function PressReleasesHero() {
  return (
    <section
      aria-labelledby="press-releases-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(234,179,8,0.16) 0%, rgba(234,179,8,0.04) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[25%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[5%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
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
              Press Releases
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(234,179,8,0.10)",
                borderColor: "rgba(234,179,8,0.28)",
                color: "#A16207",
              }}
            >
              <Newspaper className="w-3.5 h-3.5" strokeWidth={2.5} />
              Press Releases · Done-for-you digital PR
            </span>

            <h1
              id="press-releases-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Press Releases that land you in{" "}
              <span className="accent-underline">real news outlets.</span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Buy a press release that actually gets picked up. We write,
              distribute, and syndicate your announcement across{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Yahoo Finance, AP News, MarketWatch, Business Insider
              </span>{" "}
              and 200+ real newsrooms — so you earn authority backlinks and
              brand credibility in the same campaign.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get featured now
              </PrimaryButton>
              <SecondaryButton asLink href="#press-releases-tiers">
                See sample placements
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: "rgba(234,179,8,0.14)",
                      color: "#A16207",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Press Wire showcase */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <PressWireShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

const featured = {
  outlet: "Yahoo Finance",
  domain: "finance.yahoo.com",
  brandColor: "#6001D2",
  url: "yahoofinance.com/press/",
  category: "BUSINESS",
  date: "Apr 2026",
  headline:
    "Regional HVAC leader named to Inc. 5000 fastest-growing companies list.",
  reads: "2.4M",
  shares: "1.2K",
  dr: 92,
}

const wireFeed = [
  {
    domain: "apnews.com",
    outlet: "AP News",
    color: "#E03A3E",
    text: "Solar installer expands across 4 states after $12M raise",
    time: "2m",
  },
  {
    domain: "marketwatch.com",
    outlet: "MarketWatch",
    color: "#00A94F",
    text: "Service brand named to fastest-growing list for 3rd year",
    time: "9m",
  },
  {
    domain: "benzinga.com",
    outlet: "Benzinga",
    color: "#EA580C",
    text: "Roofing company unveils nationwide warranty program",
    time: "14m",
  },
]

const syndicationOutlets = [
  { domain: "businessinsider.com", outlet: "Business Insider" },
  { domain: "bloomberg.com", outlet: "Bloomberg" },
  { domain: "foxbusiness.com", outlet: "Fox Business" },
  { domain: "nbcnews.com", outlet: "NBC" },
  { domain: "cbsnews.com", outlet: "CBS" },
  { domain: "msn.com", outlet: "MSN" },
]

function PressWireShowcase() {
  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-3deg) translate(-12px, 14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(254,243,199,0.9) 100%)",
          border: "1px solid rgba(234,179,8,0.3)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(234,179,8,0.18)",
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
        {/* ── Top status bar ── */}
        <div
          className="flex items-center justify-between px-4 sm:px-5 py-3"
          style={{
            background:
              "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="relative w-2.5 h-2.5 rounded-full"
              style={{
                background: "#EF4444",
                boxShadow: "0 0 0 3px rgba(239,68,68,0.22)",
                animation: "subtlePulse 1.4s ease-in-out infinite",
              }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "#FCA5A5" }}
            >
              Live · Press Wire
            </span>
          </div>
          <span
            className="text-[10.5px] font-mono tracking-[0.08em] hidden xs:inline"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            200+ feeds · syncing
          </span>
        </div>

        {/* ── Featured placement (the money shot) ── */}
        <div className="relative">
          {/* Outlet brand strip */}
          <div
            className="flex items-center gap-3 px-4 sm:px-5 py-3"
            style={{
              background:
                "linear-gradient(90deg, rgba(96,1,210,0.08) 0%, rgba(96,1,210,0.02) 100%)",
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            <span
              className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 2px rgba(17,35,68,0.06)",
              }}
            >
              <img
                src={favicon(featured.domain, 128)}
                alt={featured.outlet}
                width={22}
                height={22}
                loading="lazy"
                decoding="async"
                className="w-[22px] h-[22px] object-contain"
              />
            </span>
            <div className="flex-1 min-w-0">
              <div
                className="text-[14px] font-bold leading-tight"
                style={{ color: featured.brandColor }}
              >
                {featured.outlet}
              </div>
              <div
                className="text-[10.5px] font-mono truncate"
                style={{ color: "var(--muted)" }}
              >
                {featured.url}
              </div>
            </div>
            <span
              className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.1em]"
              style={{
                background: "rgba(16,185,129,0.12)",
                color: "#047857",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#10B981" }}
              />
              Live
            </span>
          </div>

          {/* Article body */}
          <div className="px-4 sm:px-5 pt-4 pb-5">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-[10px] font-extrabold uppercase tracking-[0.14em] px-1.5 py-0.5 rounded"
                style={{
                  background: "rgba(234,179,8,0.14)",
                  color: "#A16207",
                }}
              >
                {featured.category}
              </span>
              <span
                className="text-[11px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                {featured.date}
              </span>
              <span
                className="text-[11px]"
                style={{ color: "var(--muted)" }}
              >
                ·
              </span>
              <span
                className="text-[11px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                3 min read
              </span>
            </div>
            <h3
              className="mt-2 text-[18px] sm:text-[20px] font-bold leading-[1.25] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              {featured.headline}
            </h3>

            {/* Pull-quote / lede line */}
            <div
              className="mt-3 flex items-start gap-2 pl-3 border-l-2"
              style={{ borderColor: "rgba(234,179,8,0.5)" }}
            >
              <Quote
                className="w-3.5 h-3.5 mt-0.5 shrink-0"
                strokeWidth={2.5}
                style={{ color: "#A16207" }}
              />
              <p
                className="text-[12.5px] leading-[1.55] italic"
                style={{ color: "var(--muted)" }}
              >
                The award recognizes the company&rsquo;s 312% revenue growth
                across the last three years…
              </p>
            </div>

            {/* Engagement strip */}
            <div
              className="mt-4 flex items-center gap-4 flex-wrap text-[11.5px] font-semibold"
              style={{ color: "var(--muted)" }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" strokeWidth={2.25} />
                {featured.reads} readers
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" strokeWidth={2.25} />
                {featured.shares} shares
              </span>
              <span
                className="inline-flex items-center gap-1.5 ml-auto px-2 py-0.5 rounded-md text-[10.5px] font-bold uppercase tracking-[0.08em]"
                style={{
                  background: "rgba(22,119,255,0.10)",
                  color: "var(--accent)",
                }}
              >
                <Link2 className="w-3 h-3" strokeWidth={2.5} />
                Dofollow · DR {featured.dr}
              </span>
            </div>
          </div>
        </div>

        {/* ── Mini wire feed ── */}
        <div
          className="px-4 sm:px-5 py-3"
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--border-color)",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              Recent placements
            </span>
            <span
              className="text-[10px] font-mono"
              style={{ color: "var(--muted)" }}
            >
              auto-refresh
            </span>
          </div>
          <ul className="space-y-1.5">
            {wireFeed.map((row) => (
              <li
                key={row.text}
                className="flex items-center gap-2.5 text-[12px] leading-[1.35]"
              >
                <span
                  className="w-5 h-5 rounded-full overflow-hidden shrink-0 flex items-center justify-center"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <img
                    src={favicon(row.domain, 64)}
                    alt={row.outlet}
                    width={14}
                    height={14}
                    loading="lazy"
                    decoding="async"
                    className="w-[14px] h-[14px] object-contain"
                  />
                </span>
                <span
                  className="font-bold shrink-0"
                  style={{ color: row.color }}
                >
                  {row.outlet}
                </span>
                <span
                  className="flex-1 truncate font-medium"
                  style={{ color: "var(--ink)" }}
                >
                  {row.text}
                </span>
                <span
                  className="shrink-0 text-[10.5px] font-mono"
                  style={{ color: "var(--muted)" }}
                >
                  {row.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Syndication grid ── */}
        <div
          className="px-4 sm:px-5 py-4"
          style={{
            background:
              "linear-gradient(180deg, #fff 0%, #FAFBFD 100%)",
          }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              Syndicated to
            </span>
            <span
              className="text-[10.5px] font-bold"
              style={{ color: "#A16207" }}
            >
              + 194 more
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {syndicationOutlets.map((o) => (
              <span
                key={o.domain}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-[10px]"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border-color)",
                  minWidth: 0,
                }}
              >
                <span
                  className="w-4 h-4 rounded-full overflow-hidden shrink-0 flex items-center justify-center"
                  style={{ background: "#fff" }}
                >
                  <img
                    src={favicon(o.domain, 64)}
                    alt={o.outlet}
                    width={14}
                    height={14}
                    loading="lazy"
                    decoding="async"
                    className="w-[14px] h-[14px] object-contain"
                  />
                </span>
                <span
                  className="text-[11px] font-semibold truncate"
                  style={{ color: "var(--ink)" }}
                >
                  {o.outlet}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Floating accents ── */}

      {/* Top-left: Avg DR badge */}
      <div
        className="absolute -top-5 -left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #FBBF24 0%, #EAB308 100%)",
          boxShadow:
            "0 2px 6px rgba(234,179,8,0.35), 0 14px 32px rgba(234,179,8,0.28)",
          color: "#422006",
          transform: "rotate(-4deg)",
        }}
      >
        <Award className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex items-baseline gap-1">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em]">
            Avg. DR
          </span>
          <span className="text-[22px] font-extrabold leading-none">91</span>
        </div>
      </div>

      {/* Top-right: Newspaper icon8 */}
      <div
        className="absolute -top-7 -right-6 z-20 hidden sm:block"
        style={{
          filter: "drop-shadow(0 12px 28px rgba(234,179,8,0.4))",
          transform: "rotate(6deg)",
        }}
      >
        <div
          className="w-[76px] h-[76px] rounded-[20px] flex items-center justify-center"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(254,243,199,0.98) 100%)",
            border: "1px solid rgba(234,179,8,0.4)",
          }}
        >
          <img
            src={icons8Url("tgRqDvvOOuEF", 256)}
            alt="Newspaper"
            width={52}
            height={52}
            loading="lazy"
            decoding="async"
            className="w-[52px] h-[52px] object-contain"
          />
        </div>
      </div>

      {/* Bottom-right: dofollow links chip */}
      <div
        className="absolute -bottom-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #F0F9FF 100%)",
          border: "1px solid rgba(22,119,255,0.3)",
          boxShadow:
            "0 2px 6px rgba(22,119,255,0.18), 0 12px 28px rgba(22,119,255,0.14)",
          transform: "rotate(3deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(22,119,255,0.35)",
          }}
        >
          <Link2 className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Earned this month
          </span>
          <span
            className="text-[15px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            +27 dofollow links
          </span>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(234,179,8,0.32) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}

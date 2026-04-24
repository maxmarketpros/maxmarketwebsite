import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import {
  TrendingUp,
  Link2,
  Globe,
  Zap,
  Eye,
  Target,
  Crown,
  Medal,
  Sparkles,
} from "lucide-react"

type Outlet = { name: string; domain: string; dr: number; brand: string }

type Tier = {
  rank: 1 | 2 | 3
  label: string
  range: string
  reach: string
  placements: string
  drMin: number
  drMax: number
  outlets: Outlet[]
  Icon: typeof Crown
  /** Hex strings used as accent variables on the card */
  accent: string
  accentSoft: string
  accentDark: string
}

const tiers: Tier[] = [
  {
    rank: 1,
    label: "Tier 1",
    range: "DR 90+",
    reach: "120M+ avg. monthly reach",
    placements: "5–8 placements",
    drMin: 90,
    drMax: 94,
    Icon: Crown,
    accent: "#EAB308",
    accentSoft: "#FEF3C7",
    accentDark: "#92400E",
    outlets: [
      { name: "Yahoo Finance", domain: "finance.yahoo.com", dr: 92, brand: "#6001D2" },
      { name: "Bloomberg", domain: "bloomberg.com", dr: 94, brand: "#1D1D1B" },
      { name: "Business Insider", domain: "businessinsider.com", dr: 93, brand: "#185ADB" },
      { name: "AP News", domain: "apnews.com", dr: 91, brand: "#E03A3E" },
      { name: "MarketWatch", domain: "marketwatch.com", dr: 91, brand: "#00A94F" },
    ],
  },
  {
    rank: 2,
    label: "Tier 2",
    range: "DR 70–89",
    reach: "45M+ avg. monthly reach",
    placements: "12–18 placements",
    drMin: 70,
    drMax: 89,
    Icon: Medal,
    accent: "#94A3B8",
    accentSoft: "#F1F5F9",
    accentDark: "#475569",
    outlets: [
      { name: "Fox Business", domain: "foxbusiness.com", dr: 88, brand: "#003366" },
      { name: "Morningstar", domain: "morningstar.com", dr: 86, brand: "#C8102E" },
      { name: "NBC News", domain: "nbcnews.com", dr: 85, brand: "#6B46C1" },
      { name: "CBS News", domain: "cbsnews.com", dr: 85, brand: "#D6001C" },
      { name: "Benzinga", domain: "benzinga.com", dr: 84, brand: "#EA580C" },
      { name: "Digital Journal", domain: "digitaljournal.com", dr: 82, brand: "#0B132B" },
      { name: "Street Insider", domain: "streetinsider.com", dr: 78, brand: "#F59E0B" },
    ],
  },
  {
    rank: 3,
    label: "Tier 3",
    range: "DR 40–69",
    reach: "8M+ avg. monthly reach",
    placements: "180+ syndicated placements",
    drMin: 40,
    drMax: 69,
    Icon: Sparkles,
    accent: "#B45309",
    accentSoft: "#FEF3C7",
    accentDark: "#78350F",
    outlets: [
      { name: "Reuters Connect", domain: "reuters.com", dr: 68, brand: "#FF8000" },
      { name: "Business Journals", domain: "bizjournals.com", dr: 64, brand: "#0B132B" },
      { name: "PR Newswire", domain: "prnewswire.com", dr: 62, brand: "#0033A0" },
      { name: "ABC Affiliates", domain: "abcnews.go.com", dr: 60, brand: "#000000" },
      { name: "Business Wire", domain: "businesswire.com", dr: 55, brand: "#003E7E" },
      { name: "Patch", domain: "patch.com", dr: 52, brand: "#65A30D" },
      { name: "Substack", domain: "substack.com", dr: 50, brand: "#FF6719" },
      { name: "PRWeb", domain: "prweb.com", dr: 47, brand: "#0B132B" },
    ],
  },
]

const legendItems = [
  {
    Icon: Target,
    title: "Tier defines authority",
    body: "Tier 1 placements are the ones that move keyword rankings. The lower the tier, the more volume — but the less authority flows back to your site.",
  },
  {
    Icon: Link2,
    title: "Every tier is a real link",
    body: "We only distribute to newsrooms that publish real, indexable articles. No tiered-link schemes, no PBNs, no syndication farms.",
  },
  {
    Icon: Globe,
    title: "Mix matches the goal",
    body: "Brand-credibility campaigns lean Tier 1. Local-authority campaigns blend Tier 2 + Tier 3. We build the outlet mix around what you&rsquo;re trying to rank for.",
  },
]

function favicon(domain: string, size = 64) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

function OutletPlate({ outlet, tier }: { outlet: Outlet; tier: Tier }) {
  const drPct = Math.min(100, Math.round((outlet.dr / 100) * 100))
  return (
    <div
      className="relative group"
      style={{ width: 156 }}
    >
      <div
        className="relative px-3 py-3 rounded-[14px] transition-transform duration-200 group-hover:-translate-y-0.5"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow:
            "0 1px 2px rgba(17,35,68,0.06), 0 6px 16px rgba(17,35,68,0.06)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 overflow-hidden"
            style={{
              background: "#fff",
              border: `1.5px solid ${outlet.brand}40`,
              boxShadow: `0 0 0 3px ${outlet.brand}10`,
            }}
          >
            <img
              src={favicon(outlet.domain, 64)}
              alt={outlet.name}
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
              className="w-[20px] h-[20px] object-contain"
            />
          </span>
          <div className="min-w-0 flex-1">
            <div
              className="text-[12.5px] font-bold truncate leading-tight"
              style={{ color: "var(--ink)" }}
            >
              {outlet.name}
            </div>
            <div
              className="text-[10px] font-mono truncate"
              style={{ color: "var(--muted)" }}
            >
              {outlet.domain}
            </div>
          </div>
        </div>

        {/* DR meter */}
        <div className="mt-2.5">
          <div className="flex items-center justify-between mb-1">
            <span
              className="text-[9.5px] font-bold uppercase tracking-[0.1em]"
              style={{ color: "var(--muted)" }}
            >
              DR
            </span>
            <span
              className="text-[12px] font-extrabold tabular-nums"
              style={{ color: tier.accentDark }}
            >
              {outlet.dr}
            </span>
          </div>
          <div
            className="relative h-1.5 rounded-full overflow-hidden"
            style={{ background: "rgba(15,23,42,0.06)" }}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${drPct}%`,
                background:
                  tier.rank === 1
                    ? "linear-gradient(90deg, #FBBF24 0%, #EAB308 100%)"
                    : tier.rank === 2
                      ? "linear-gradient(90deg, #94A3B8 0%, #64748B 100%)"
                      : "linear-gradient(90deg, #FB923C 0%, #B45309 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  const isTier1 = tier.rank === 1
  return (
    <div
      className="relative"
      style={{
        animation: `fadeInUp 0.7s ease-out ${0.08 * index}s both`,
      }}
    >
      {/* Connector dot to spectrum (desktop) */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-9 -left-[14px] w-3 h-3 rounded-full z-10"
        style={{
          background:
            tier.rank === 1
              ? "linear-gradient(180deg, #FBBF24 0%, #EAB308 100%)"
              : tier.rank === 2
                ? "linear-gradient(180deg, #CBD5E1 0%, #94A3B8 100%)"
                : "linear-gradient(180deg, #FB923C 0%, #B45309 100%)",
          boxShadow: `0 0 0 3px #fff, 0 0 0 5px ${tier.accent}40`,
        }}
      />

      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          background: isTier1
            ? "linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 100%)"
            : "#fff",
          border: `1px solid ${tier.accent}${isTier1 ? "55" : "30"}`,
          boxShadow: isTier1
            ? "0 2px 6px rgba(234,179,8,0.18), 0 22px 60px rgba(234,179,8,0.16)"
            : "0 1px 3px rgba(17,35,68,0.06), 0 12px 32px rgba(17,35,68,0.08)",
        }}
      >
        {isTier1 && (
          <>
            <span
              aria-hidden
              className="absolute -top-12 -right-12 w-[260px] h-[260px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(234,179,8,0.22) 0%, transparent 65%)",
              }}
            />
            <span
              className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{
                background: "linear-gradient(180deg, #FBBF24 0%, #EAB308 100%)",
                color: "#422006",
                boxShadow: "0 2px 6px rgba(234,179,8,0.4)",
              }}
            >
              <Zap className="w-3 h-3" strokeWidth={2.75} />
              Top tier
            </span>
          </>
        )}

        {/* Header */}
        <div
          className="relative flex items-stretch gap-4 px-5 sm:px-6 py-5 border-b"
          style={{ borderColor: `${tier.accent}28` }}
        >
          {/* Rank medallion */}
          <div
            className="relative shrink-0 w-[68px] h-[68px] rounded-[18px] flex items-center justify-center"
            style={{
              background:
                tier.rank === 1
                  ? "linear-gradient(135deg, #FDE68A 0%, #FBBF24 50%, #EAB308 100%)"
                  : tier.rank === 2
                    ? "linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 50%, #94A3B8 100%)"
                    : "linear-gradient(135deg, #FED7AA 0%, #FB923C 50%, #B45309 100%)",
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(0,0,0,0.12), 0 6px 18px ${tier.accent}55`,
              color:
                tier.rank === 2 ? "#1E293B" : tier.rank === 3 ? "#fff" : "#422006",
            }}
          >
            <tier.Icon
              className="w-8 h-8"
              strokeWidth={2.25}
              style={{
                filter:
                  "drop-shadow(0 1px 0 rgba(255,255,255,0.5))",
              }}
            />
            <span
              aria-hidden
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded-md text-[9.5px] font-extrabold tracking-[0.12em] uppercase"
              style={{
                background: "#0B132B",
                color: "#fff",
                boxShadow: "0 4px 10px rgba(11,19,43,0.25)",
              }}
            >
              0{tier.rank}
            </span>
          </div>

          {/* Tier meta */}
          <div className="flex-1 min-w-0 flex flex-col justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-[19px] sm:text-[21px] font-extrabold tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {tier.label}
                </span>
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold tracking-[0.06em]"
                  style={{
                    background: `${tier.accent}1F`,
                    color: tier.accentDark,
                  }}
                >
                  {tier.range}
                </span>
              </div>
              <div
                className="mt-0.5 flex items-center gap-3 flex-wrap text-[12px] font-semibold"
                style={{ color: "var(--muted)" }}
              >
                <span className="inline-flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" strokeWidth={2.25} />
                  {tier.reach}
                </span>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">
                  <Link2 className="w-3.5 h-3.5" strokeWidth={2.25} />
                  {tier.placements}
                </span>
              </div>
            </div>

            {/* Authority spectrum bar */}
            <div className="relative h-2 rounded-full overflow-hidden mt-1"
              style={{ background: "rgba(15,23,42,0.06)" }}
            >
              <div
                className="absolute inset-y-0 rounded-full"
                style={{
                  left: `${tier.drMin}%`,
                  width: `${tier.drMax - tier.drMin + 2}%`,
                  background:
                    tier.rank === 1
                      ? "linear-gradient(90deg, #FBBF24 0%, #EAB308 100%)"
                      : tier.rank === 2
                        ? "linear-gradient(90deg, #CBD5E1 0%, #64748B 100%)"
                        : "linear-gradient(90deg, #FB923C 0%, #B45309 100%)",
                  boxShadow: `0 0 0 1px ${tier.accent}55`,
                }}
              />
              {/* Scale ticks */}
              {[0, 25, 50, 75, 100].map((t) => (
                <span
                  key={t}
                  aria-hidden
                  className="absolute top-0 bottom-0 w-px"
                  style={{
                    left: `${t}%`,
                    background: "rgba(15,23,42,0.10)",
                  }}
                />
              ))}
            </div>
            <div
              className="flex justify-between text-[9.5px] font-mono"
              style={{ color: "var(--muted)" }}
            >
              <span>DR 0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>
        </div>

        {/* Outlet plates */}
        <div className="px-5 sm:px-6 py-5">
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              {tier.outlets.length} outlets shown
            </span>
            {tier.rank === 3 && (
              <span
                className="text-[11px] font-bold"
                style={{ color: tier.accentDark }}
              >
                + 180 more in network
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {tier.outlets.map((o) => (
              <OutletPlate key={o.domain} outlet={o} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function PressReleasesTierPyramid() {
  return (
    <section
      id="press-releases-tiers"
      aria-labelledby="press-releases-tiers-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-10%] w-[620px] h-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(234,179,8,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Publication tiers"
          heading={
            <span id="press-releases-tiers-heading">
              Publication tiers, ranked by{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">real authority</span>.
              </span>
            </span>
          }
          paragraph="When you buy press releases, outlet authority is what you&rsquo;re really paying for. Here&rsquo;s the exact tier map we use to shape every distribution — so you know the links your campaign will earn before it ships."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-12 lg:gap-14 items-start">
          {/* Left column: Spectrum + Tier stack */}
          <div className="relative">
            {/* Vertical authority spectrum (desktop only) */}
            <div
              aria-hidden
              className="hidden lg:block absolute top-2 bottom-2 -left-1 w-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, #FBBF24 0%, #EAB308 28%, #94A3B8 50%, #64748B 72%, #FB923C 88%, #B45309 100%)",
                opacity: 0.5,
              }}
            />
            <div
              aria-hidden
              className="hidden lg:flex absolute -left-[28px] top-0 bottom-0 flex-col items-center justify-between text-[9.5px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              <span>High</span>
              <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                Authority
              </span>
              <span>Volume</span>
            </div>

            <div className="space-y-6">
              {tiers.map((tier, idx) => (
                <TierCard key={tier.rank} tier={tier} index={idx} />
              ))}
            </div>
          </div>

          {/* Right column: Why tiers matter legend */}
          <div className="lg:sticky lg:top-24 self-start">
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "var(--radius-xl)",
                background:
                  "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
                boxShadow:
                  "0 4px 12px rgba(11,19,43,0.18), 0 24px 60px rgba(11,19,43,0.22)",
              }}
            >
              {/* Amber radial */}
              <span
                aria-hidden
                className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(234,179,8,0.32) 0%, transparent 60%)",
                }}
              />
              {/* Grid */}
              <svg
                aria-hidden
                className="absolute inset-0 w-full h-full opacity-[0.06]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="pr-tier-grid"
                    width="32"
                    height="32"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M32 0H0V32"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pr-tier-grid)" />
              </svg>

              <div className="relative px-6 sm:px-7 py-6">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #FBBF24 0%, #EAB308 100%)",
                      color: "#422006",
                      boxShadow: "0 4px 14px rgba(234,179,8,0.45)",
                    }}
                  >
                    <Crown className="w-4.5 h-4.5" strokeWidth={2.5} />
                  </span>
                  <div
                    className="text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "#FCD34D" }}
                  >
                    Why tiers matter
                  </div>
                </div>
                <h3 className="mt-3 text-[22px] font-bold leading-[1.2] tracking-[-0.01em] text-white">
                  Not every press release earns the same rankings.
                </h3>
              </div>

              <ul
                className="relative divide-y"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {legendItems.map((item) => (
                  <li
                    key={item.title}
                    className="px-6 sm:px-7 py-5"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className="mt-0.5 shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center"
                        style={{
                          background: "rgba(234,179,8,0.18)",
                          border: "1px solid rgba(234,179,8,0.28)",
                          color: "#FCD34D",
                        }}
                      >
                        <item.Icon className="w-4 h-4" strokeWidth={2.25} />
                      </span>
                      <div>
                        <div className="text-[15px] font-bold leading-[1.3] text-white">
                          {item.title}
                        </div>
                        <p
                          className="mt-1 text-[13.5px] leading-[1.55]"
                          style={{ color: "rgba(255,255,255,0.7)" }}
                          dangerouslySetInnerHTML={{ __html: item.body }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Mini-stat row */}
              <div
                className="relative grid grid-cols-3 divide-x"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {[
                  { v: "200+", l: "Outlets" },
                  { v: "DR 91", l: "Avg. Tier 1" },
                  { v: "100%", l: "Real placements" },
                ].map((s) => (
                  <div key={s.l} className="px-3 py-4 text-center"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="text-[18px] font-extrabold tracking-[-0.01em]"
                      style={{
                        background:
                          "linear-gradient(90deg, #FCD34D 0%, #FBBF24 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {s.v}
                    </div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-[0.12em] mt-0.5"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="relative px-6 sm:px-7 py-5 border-t"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <PrimaryButton size="default" asLink href="#contact">
                  <TrendingUp className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
                  Map my outlet tier mix
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

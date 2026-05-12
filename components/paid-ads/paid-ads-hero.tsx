import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Sparkles,
  Star,
  TrendingUp,
  DollarSign,
  Target,
  Zap,
} from "lucide-react"

const trustItems = [
  { label: "$3.8M+ ad spend managed" },
  { label: "4.7× average ROAS" },
  { label: "4.9★ on Google" },
]

const platformLogos = [
  { id: "ui4CTPMMDCFh", name: "Google Ads" },
  { id: "118497", name: "Facebook" },
  { id: "32323", name: "Instagram" },
  { id: "19318", name: "YouTube" },
]

export function PaidAdsHero() {
  return (
    <section
      aria-labelledby="paid-ads-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Multi-platform gradient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Google blue — top-right */}
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(66,133,244,0.22) 0%, rgba(66,133,244,0.06) 40%, transparent 70%)",
          }}
        />
        {/* Meta blue — mid-right */}
        <div
          className="absolute top-[25%] right-[10%] w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(24,119,242,0.14) 0%, transparent 60%)",
          }}
        />
        {/* Instagram pink — bottom-left */}
        <div
          className="absolute bottom-[-20%] left-[-12%] w-[420px] h-[420px] sm:w-[680px] sm:h-[680px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(225,48,108,0.18) 0%, rgba(225,48,108,0.05) 40%, transparent 70%)",
          }}
        />
        {/* YouTube red — small accent top-left */}
        <div
          className="absolute top-[10%] left-[8%] w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,0,0.10) 0%, transparent 60%)",
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
                  Paid Ads
                </li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Paid Advertising Management
            </Pill>

            <h1
              id="paid-ads-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Paid ads that{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">pay you back</span>.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              Done-for-you Google Ads, Facebook Ads, Instagram Ads and
              retargeting campaigns — built around your ROAS, not vanity
              metrics. Transparent reporting and full account ownership.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a free ad audit
              </PrimaryButton>
              <SecondaryButton asLink href="#paid-ads-results">
                See our ROAS numbers
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

            {/* Logo strip */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--border-color)" }}>
              <div
                className="text-[12px] font-semibold uppercase tracking-[0.1em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                We run ads on
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {platformLogos.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={icons8Url(p.id, 64)}
                      alt={p.name}
                      width={24}
                      height={24}
                      loading="eager"
                      decoding="async"
                      className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] object-contain"
                    />
                    <span
                      className="text-[13.5px] font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: custom Ad Dashboard Mockup */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}
          >
            <AdDashboardMockup />

            {/* Floating "Campaign live" badge */}
            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <span
                className="relative flex w-2 h-2"
              >
                <span
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{ background: "#10B981", animation: "subtlePulse 2s ease-in-out infinite" }}
                />
                <span
                  className="relative w-2 h-2 rounded-full"
                  style={{ background: "#10B981" }}
                />
              </span>
              Campaign live
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AdDashboardMockup() {
  const spend = "$4,280"
  const revenue = "$19,850"
  const roas = "4.64×"

  return (
    <div
      className="card-surface relative overflow-hidden p-5 sm:p-6 lg:p-7"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      {/* Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(66,133,244,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        {/* Dashboard header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-[var(--radius-xs)] flex items-center justify-center"
              style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
            >
              <Zap className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <div>
              <div
                className="text-[13px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                Campaign Dashboard
              </div>
              <div
                className="text-[11px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                Last 30 days
              </div>
            </div>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-semibold"
            style={{ background: "#10B98114", color: "#10B981" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#10B981" }}
            />
            Active
          </div>
        </div>

        {/* 3 metric tiles */}
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          <MetricTile
            icon={<DollarSign className="w-3.5 h-3.5" strokeWidth={2.5} />}
            label="Ad Spend"
            value={spend}
            color="#F59E0B"
          />
          <MetricTile
            icon={<TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />}
            label="Revenue"
            value={revenue}
            color="#10B981"
          />
          <MetricTile
            icon={<Target className="w-3.5 h-3.5" strokeWidth={2.5} />}
            label="ROAS"
            value={roas}
            color="#1677FF"
          />
        </div>

        {/* Mini chart */}
        <div
          className="mt-4 p-4 rounded-[var(--radius-md)] border"
          style={{
            background: "var(--bg)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.1em]"
              style={{ color: "var(--muted)" }}
            >
              Revenue vs. Spend
            </div>
            <div
              className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: "#10B98114", color: "#10B981" }}
            >
              +312%
            </div>
          </div>
          <svg
            viewBox="0 0 300 70"
            className="w-full h-[58px]"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Revenue area + line (green, climbing fast) */}
            <path
              d="M0,52 C25,50 50,48 75,42 C100,36 125,38 150,28 C175,18 200,20 225,10 C250,4 275,3 300,2 L300,70 L0,70 Z"
              fill="url(#revFill)"
            />
            <path
              d="M0,52 C25,50 50,48 75,42 C100,36 125,38 150,28 C175,18 200,20 225,10 C250,4 275,3 300,2"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Spend line (amber, flat) — dashed */}
            <path
              d="M0,56 C25,55 50,55 75,54 C100,53 125,52 150,51 C175,50 200,49 225,48 C250,47 275,46 300,46"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeDasharray="4 3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Platform dock */}
        <div
          className="mt-4 flex items-center justify-between gap-2 px-4 py-2.5 rounded-full border"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="flex items-center gap-2.5">
            {platformLogos.map((p) => (
              <img
                key={p.id}
                src={icons8Url(p.id, 64)}
                alt={p.name}
                width={22}
                height={22}
                loading="lazy"
                decoding="async"
                className="w-[22px] h-[22px] object-contain"
              />
            ))}
          </div>
          <div
            className="text-[11px] font-semibold"
            style={{ color: "var(--muted)" }}
          >
            4 platforms · 7 campaigns
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricTile({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: string
}) {
  return (
    <div
      className="relative overflow-hidden p-3 rounded-[var(--radius-sm)] border"
      style={{
        background: "var(--bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <div
        className="w-6 h-6 rounded-[var(--radius-xs)] flex items-center justify-center"
        style={{ background: `${color}14`, color }}
      >
        {icon}
      </div>
      <div
        className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em]"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </div>
      <div
        className="mt-1 text-[17px] sm:text-[19px] font-bold leading-none tracking-[-0.02em]"
        style={{ color: "var(--ink)" }}
      >
        {value}
      </div>
    </div>
  )
}

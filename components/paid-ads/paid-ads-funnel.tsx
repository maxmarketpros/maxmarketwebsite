import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { ArrowRight, TrendingUp } from "lucide-react"

type FunnelColumn = {
  stage: string
  title: string
  subtitle: string
  iconId: string
  color: string
  auraColor: string
  description: string
  links: { label: string; href: string }[]
}

const columns: FunnelColumn[] = [
  {
    stage: "Top of funnel",
    title: "Paid Ads",
    subtitle: "Reach cold audiences",
    iconId: "13757",
    color: "#4285F4",
    auraColor: "rgba(66,133,244,0.10)",
    description:
      "Pay to put your offer in front of people who don't know you yet. Fast feedback, predictable scale, and the quickest way to validate demand.",
    links: [
      { label: "Google Ads", href: "/services/paid-ads/google-ads" },
      { label: "Facebook Ads", href: "/services/paid-ads/facebook-ads" },
      { label: "Instagram Ads", href: "/services/paid-ads/instagram-ads" },
    ],
  },
  {
    stage: "Middle of funnel",
    title: "SEO",
    subtitle: "Capture warm intent",
    iconId: "QNjsAGAlpuNW",
    color: "#1677FF",
    auraColor: "rgba(22,119,255,0.10)",
    description:
      "Rank organically for the searches your buyers are already making. Compounding, free traffic that keeps converting long after the ad budget runs out.",
    links: [
      { label: "Local SEO", href: "/services/seo/local" },
      { label: "On-Page SEO", href: "/services/seo/on-page" },
      { label: "Technical SEO", href: "/services/seo/technical" },
      { label: "Off-Page SEO", href: "/services/seo/off-page" },
      { label: "Backlinks & Directories", href: "/services/seo/backlinks" },
      { label: "AI Search Visibility", href: "/services/seo/ai-search" },
      { label: "Press Releases", href: "/services/seo/press-releases" },
    ],
  },
  {
    stage: "Bottom of funnel",
    title: "Convert",
    subtitle: "Turn clicks into booked jobs",
    iconId: "12208",
    color: "#10B981",
    auraColor: "rgba(16,185,129,0.10)",
    description:
      "Great traffic fails on bad sites and cold follow-up. We wire up a high-converting site, credibility content, and automated lead handoff.",
    links: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Review Generation", href: "/services/social-media/review-generation" },
      { label: "Video Content", href: "/services/social-media/video-editing" },
      { label: "Lead Generation", href: "/solutions/lead-generation" },
      { label: "Calendar Booking", href: "/solutions/calendar" },
    ],
  },
]

export function PaidAdsFunnel() {
  return (
    <section
      id="paid-ads-funnel"
      aria-labelledby="paid-ads-funnel-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Full-Funnel Integration"
          heading={
            <span id="paid-ads-funnel-heading">
              Paid ads work{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">3.2× better</span>
              </span>{" "}
              with the rest of the stack.
            </span>
          }
          paragraph="Paid alone is renting traffic. Paid + SEO + a conversion-optimized site is compounding growth. Here's how every service we offer feeds the paid-ads machine."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {columns.map((c) => (
            <FunnelColumnCard key={c.title} column={c} />
          ))}
        </div>

        {/* Stat band */}
        <div
          className="mt-10 card-surface relative overflow-hidden p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-5"
          style={{ borderRadius: "var(--radius-lg)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 120% at 0% 50%, rgba(16,185,129,0.10) 0%, transparent 60%), radial-gradient(ellipse 70% 120% at 100% 50%, rgba(245,158,11,0.08) 0%, transparent 60%)",
            }}
          />
          <div
            className="relative flex items-center gap-4 shrink-0 w-full sm:w-auto"
          >
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0"
              style={{ background: "#10B98114", color: "#10B981" }}
            >
              <TrendingUp className="w-7 h-7" strokeWidth={2.25} />
            </div>
            <div
              className="text-[34px] sm:text-[42px] font-bold leading-none tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              3.2×
            </div>
          </div>
          <div className="relative flex-1">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.1em]"
              style={{ color: "var(--muted)" }}
            >
              Combined ROI
            </div>
            <p
              className="mt-1 text-[15.5px] sm:text-[17px] leading-[1.5] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Clients who run paid + SEO + a conversion-optimized site see{" "}
              <span className="font-semibold">3.2× higher revenue</span> per ad
              dollar than paid-only accounts.
            </p>
          </div>
          <a
            href="#contact"
            className="relative shrink-0 inline-flex items-center gap-1.5 text-[14.5px] font-semibold group"
            style={{ color: "var(--accent)" }}
          >
            Book a full-funnel audit
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

function FunnelColumnCard({ column }: { column: FunnelColumn }) {
  return (
    <div className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col">
      {/* Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[80%] h-[60%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 20%, ${column.auraColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex flex-col flex-1">
        {/* stage pill */}
        <span
          className="self-start inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
          style={{ background: `${column.color}14`, color: column.color }}
        >
          {column.stage}
        </span>

        {/* Icon */}
        <div className="mt-5 flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0"
            style={{
              background: `${column.color}10`,
              border: `1px solid ${column.color}26`,
            }}
          >
            <img
              src={icons8Url(column.iconId, 96)}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="min-w-0">
            <h3
              className="text-[22px] sm:text-[24px] font-bold leading-[1.15] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              {column.title}
            </h3>
            <p
              className="mt-0.5 text-[13px] font-semibold"
              style={{ color: column.color }}
            >
              {column.subtitle}
            </p>
          </div>
        </div>

        {/* description */}
        <p
          className="mt-4 text-[14.5px] leading-[1.55]"
          style={{ color: "var(--muted)" }}
        >
          {column.description}
        </p>

        {/* Link list */}
        <ul className="mt-5 space-y-1.5">
          {column.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-2 py-1.5 text-[14px] font-semibold transition-colors group/link"
                style={{ color: "var(--ink)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: column.color }}
                />
                <span className="flex-1">{link.label}</span>
                <ArrowRight
                  className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0"
                  style={{ color: column.color }}
                  strokeWidth={2.5}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

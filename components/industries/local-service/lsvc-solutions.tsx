import Link from "next/link"
import { ArrowRight, Globe, Search, Target, MessageCircle, Star } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Layer = {
  id: string
  n: string
  title: string
  desc: string
  Icon: typeof Globe
  accent: string
  links: { label: string; href: string }[]
  widthPct: number
}

const layers: Layer[] = [
  {
    id: "website",
    n: "01",
    title: "Custom website foundation",
    desc: "The conversion engine. Every lead lands here first.",
    Icon: Globe,
    accent: "#1677FF",
    links: [
      { label: "Custom-coded builds", href: "/services/web-design/custom-coded" },
      { label: "Webflow",              href: "/services/web-design/webflow" },
      { label: "WordPress",            href: "/services/web-design/wordpress" },
    ],
    widthPct: 100,
  },
  {
    id: "ranking",
    n: "02",
    title: "Google ranking & Map Pack",
    desc: "Local SEO, AI-search optimization, and GBP dominance.",
    Icon: Search,
    accent: "#22C55E",
    links: [
      { label: "Local SEO",        href: "/services/seo/local" },
      { label: "AI search",        href: "/services/seo/ai-search" },
      { label: "Press releases",   href: "/services/seo/press-releases" },
    ],
    widthPct: 92,
  },
  {
    id: "ads",
    n: "03",
    title: "Paid intent capture",
    desc: "Google Ads, LSA, and Meta retargeting for the not-yet-ranking searches.",
    Icon: Target,
    accent: "#F59E0B",
    links: [
      { label: "Google Ads",    href: "/services/paid-ads/google-ads" },
      { label: "Facebook Ads",  href: "/services/paid-ads/facebook-ads" },
      { label: "Instagram Ads", href: "/services/paid-ads/instagram-ads" },
    ],
    widthPct: 84,
  },
  {
    id: "booking",
    n: "04",
    title: "AI chat + online booking",
    desc: "Qualify the lead, show the calendar, capture the deposit \u2014 24/7.",
    Icon: MessageCircle,
    accent: "#14B8A6",
    links: [
      { label: "AI agents",    href: "/solutions/ai-agents" },
      { label: "Scheduling",   href: "/solutions/calendar" },
      { label: "Payments",     href: "/solutions/payments" },
    ],
    widthPct: 76,
  },
  {
    id: "reviews",
    n: "05",
    title: "Reviews + retention loop",
    desc: "Every paid job triggers a review request and a re-engagement sequence.",
    Icon: Star,
    accent: "#EC4899",
    links: [
      { label: "Review generation", href: "/services/social-media/review-generation" },
      { label: "Email + SMS",       href: "/solutions/email-marketing" },
      { label: "Analytics",         href: "/solutions/analytics" },
    ],
    widthPct: 68,
  },
]

export function LsvcSolutions() {
  return (
    <section aria-labelledby="lsvc-solutions-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="The full stack"
          heading={
            <>
              Five layers.{" "}
              <span className="whitespace-nowrap">
                One <span className="accent-underline">rankable</span> business.
              </span>
            </>
          }
          paragraph={"Each layer sits on the one below it. Without a site, SEO has nothing to rank. Without ranking, ads carry the whole cost. Without booking, leads leak. We build every layer \u2014 and tune them together."}
        />

        <ol className="mt-14 relative flex flex-col items-center gap-4">
          {/* Central spine (hidden on mobile) */}
          <div
            aria-hidden
            className="hidden sm:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #1677FF 0%, #22C55E 25%, #F59E0B 50%, #14B8A6 75%, #EC4899 100%)",
              opacity: 0.25,
            }}
          />

          {layers.map((layer, idx) => (
            <LayerBand key={layer.id} layer={layer} index={idx} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function LayerBand({ layer, index }: { layer: Layer; index: number }) {
  const { n, title, desc, Icon, accent, links, widthPct } = layer
  return (
    <li
      className="relative w-full flex justify-center"
      style={{
        animation: `fadeInUp 0.7s ease-out ${0.1 + index * 0.08}s both`,
      }}
    >
      <div
        className="group relative w-full card-surface card-surface-hover overflow-hidden"
        style={{
          maxWidth: `${widthPct}%`,
          borderLeft: `4px solid ${accent}`,
        }}
      >
        {/* Corner aura */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 w-[240px] h-[180px]"
          style={{
            background: `radial-gradient(ellipse 70% 100% at 70% 30%, ${accent}14 0%, transparent 70%)`,
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-4 p-5 sm:p-6">
          {/* Left: number + icon + title */}
          <div className="lg:col-span-5 flex items-center gap-4">
            <div
              className="text-[32px] sm:text-[40px] font-bold leading-none tabular-nums select-none shrink-0"
              style={{ color: `${accent}` }}
            >
              {n}
            </div>
            <span
              className="w-11 h-11 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
              style={{
                background: `${accent}14`,
                boxShadow: `inset 0 0 0 1px ${accent}1A, inset 0 1px 0 rgba(255,255,255,0.6)`,
              }}
            >
              <Icon className="w-5 h-5" style={{ color: accent }} strokeWidth={2.2} />
            </span>
            <div>
              <h3 className="text-[17px] sm:text-[18px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                {title}
              </h3>
              <p className="mt-0.5 text-[13px] leading-[1.5]" style={{ color: "var(--muted)" }}>
                {desc}
              </p>
            </div>
          </div>

          {/* Right: link row */}
          <div className="lg:col-span-7 flex flex-wrap items-center gap-2 lg:justify-end">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group/link inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12.5px] font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--surface)",
                  border: `1px solid ${accent}2A`,
                  color: "var(--ink)",
                  boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                }}
              >
                {l.label}
                <ArrowRight
                  className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5"
                  strokeWidth={2.5}
                  style={{ color: accent }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </li>
  )
}

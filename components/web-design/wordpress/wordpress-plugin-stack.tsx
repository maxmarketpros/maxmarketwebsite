import { SectionHeader } from "@/components/ui/section-header"
import { Search, Zap, ShieldCheck, Target, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WP_BLUE = "#00749C"

type Plugin = { name: string; domain: string; role: string }

type Quadrant = {
  title: string
  Icon: LucideIcon
  blurb: string
  tone: string
  plugins: Plugin[]
}

const quadrants: Quadrant[] = [
  {
    title: "SEO",
    Icon: Search,
    blurb: "Title tags, meta, schema, sitemaps, canonical URLs — automated.",
    tone: "rgba(0,116,156,0.10)",
    plugins: [
      { name: "Yoast SEO", domain: "yoast.com", role: "On-page checks + schema" },
      { name: "Rank Math", domain: "rankmath.com", role: "Schema generator + redirects" },
      { name: "RankIQ", domain: "rankiq.com", role: "Content brief assistance" },
    ],
  },
  {
    title: "Performance",
    Icon: Zap,
    blurb: "Caching, asset optimization, CDN, image compression — Lighthouse 90+.",
    tone: "rgba(34,197,94,0.10)",
    plugins: [
      { name: "WP Rocket", domain: "wp-rocket.me", role: "Page caching + preload" },
      { name: "Perfmatters", domain: "perfmatters.io", role: "Script disabling per page" },
      { name: "Cloudflare", domain: "cloudflare.com", role: "CDN + WAF + image resize" },
    ],
  },
  {
    title: "Security",
    Icon: ShieldCheck,
    blurb: "Firewall, malware scans, brute-force lockout, 2FA, file integrity.",
    tone: "rgba(116,211,255,0.16)",
    plugins: [
      { name: "Wordfence", domain: "wordfence.com", role: "WAF + scanner + 2FA" },
      { name: "Sucuri", domain: "sucuri.net", role: "Cloud firewall + cleanup" },
      { name: "Solid Security", domain: "solidwp.com", role: "Hardening + lockouts" },
    ],
  },
  {
    title: "Conversion",
    Icon: Target,
    blurb: "Forms, analytics, social proof, CRM sync — turn traffic into pipeline.",
    tone: "rgba(0,116,156,0.14)",
    plugins: [
      { name: "Gravity Forms", domain: "gravityforms.com", role: "Forms + CRM connectors" },
      { name: "MonsterInsights", domain: "monsterinsights.com", role: "GA4 inside WP admin" },
      { name: "FluentCRM", domain: "fluentcrm.com", role: "Email automation in WP" },
    ],
  },
]

const bloatList = [
  "Jetpack (full bundle)",
  "Hello Dolly",
  "WPBakery",
  "Elementor + Divi together",
  "Multiple SEO plugins",
  "Five caching plugins",
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function WordpressPluginStack() {
  return (
    <section
      id="wordpress-plugin-stack"
      aria-labelledby="wordpress-plugin-stack-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] right-[-8%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,116,156,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Curated plugin stack"
          heading={
            <span id="wordpress-plugin-stack-heading">
              The plugins we{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(0,116,156,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  actually wire
                </span>
                .
              </span>
            </span>
          }
          paragraph="A WordPress website design lives or dies on its plugin stack. We ship 12 specific plugins across SEO, performance, security, and conversion — and audit the rest of your install for bloat that drags rankings down."
        />

        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {quadrants.map((q, idx) => (
            <QuadrantCard key={q.title} quadrant={q} index={idx} />
          ))}
        </div>

        {/* Plugin bloat strip */}
        <div
          className="mt-12 max-w-[920px] mx-auto rounded-[var(--radius-xl)] p-6 sm:p-7"
          style={{
            background: "#1D2327",
            border: `1px solid rgba(255,255,255,0.08)`,
          }}
        >
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="flex-1">
              <p
                className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
                style={{ color: "#74D3FF" }}
              >
                Plugin bloat we cut
              </p>
              <h3
                className="mt-1.5 text-[18px] sm:text-[20px] font-bold leading-[1.3]"
                style={{ color: "#fff" }}
              >
                Most WordPress sites carry 8–14 plugins they don't need.
              </h3>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[14px] group whitespace-nowrap px-4 py-2.5 rounded-[var(--radius-sm)]"
              style={{
                background: "rgba(255,255,255,0.10)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Want the audit checklist?
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {bloatList.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-semibold"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(239,68,68,0.7)",
                  textDecorationThickness: "1.5px",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuadrantCard({
  quadrant,
  index,
}: {
  quadrant: Quadrant
  index: number
}) {
  return (
    <div
      className="card-surface card-surface-hover p-5 sm:p-6"
      style={{
        borderRadius: "var(--radius-lg)",
        animation: `fadeInUp 0.55s ease-out ${0.06 * index}s both`,
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="w-12 h-12 rounded-[14px] flex items-center justify-center"
          style={{
            background: quadrant.tone,
            border: "1px solid var(--border-color)",
          }}
        >
          <quadrant.Icon
            className="w-5 h-5"
            strokeWidth={2.25}
            style={{ color: WP_BLUE }}
          />
        </span>
        <div>
          <h3
            className="text-[18px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            {quadrant.title}
          </h3>
          <p
            className="text-[13px] font-medium mt-0.5"
            style={{ color: "var(--muted)" }}
          >
            {quadrant.blurb}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-2.5">
        {quadrant.plugins.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 p-2.5 rounded-md"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border-color)",
            }}
          >
            <span
              className="w-9 h-9 rounded-[10px] flex items-center justify-center overflow-hidden shrink-0"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
              }}
            >
              <img
                src={favicon(p.domain, 128)}
                alt={`${p.name} logo`}
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
                className="w-[20px] h-[20px] object-contain"
              />
            </span>
            <div className="min-w-0 flex-1">
              <div
                className="text-[13.5px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                {p.name}
              </div>
              <div
                className="text-[11.5px] font-medium leading-tight mt-0.5"
                style={{ color: "var(--muted)" }}
              >
                {p.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

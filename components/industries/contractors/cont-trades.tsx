import Link from "next/link"
import { Home, Wrench, Ruler, Shovel, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Trade = {
  key: string
  cluster: string
  accent: string
  Icon: LucideIcon
  trades: string[]
  motion: string
  links: { label: string; href: string }[]
}

const trades: Trade[] = [
  {
    key: "exterior",
    cluster: "Exterior trades",
    accent: "#EF4444",
    Icon: Home,
    trades: ["Roofing", "Siding", "Gutters", "Windows", "Exterior painting"],
    motion: "Storm-trigger retargeting and insurance-claim landing pages. The first name a homeowner sees when the radar clears.",
    links: [
      { label: "Google Ads", href: "/services/paid-ads/google-ads" },
      { label: "Local SEO", href: "/services/seo/local" },
    ],
  },
  {
    key: "mechanical",
    cluster: "Mechanical trades",
    accent: "#FF6B35",
    Icon: Wrench,
    trades: ["HVAC", "Plumbing", "Electrical", "Generator", "EV charger"],
    motion: "Emergency-call routing, seasonal service-plan funnels, and after-hours AI answering so you book the 2am call.",
    links: [
      { label: "AI agents", href: "/solutions/ai-agents" },
      { label: "Calendar", href: "/solutions/calendar" },
    ],
  },
  {
    key: "gc",
    cluster: "GCs / remodelers",
    accent: "#0F172A",
    Icon: Ruler,
    trades: ["Kitchen", "Bath", "Additions", "Whole-home", "Design-build"],
    motion: "Portfolio-led websites, long-form trust content, and slow-drip email for the six-month sales cycle.",
    links: [
      { label: "Web design", href: "/services/web-design" },
      { label: "Email & SMS", href: "/solutions/email-marketing" },
    ],
  },
  {
    key: "outdoor",
    cluster: "Outdoor / site work",
    accent: "#FBBF24",
    Icon: Shovel,
    trades: ["Landscaping", "Hardscape", "Paving", "Concrete", "Fencing"],
    motion: "Spring-loaded campaigns: February pre-season bookings, March radius ads, April review pushes when the lawn greens.",
    links: [
      { label: "Facebook ads", href: "/services/paid-ads/facebook-ads" },
      { label: "Video editing", href: "/services/social-media/video-editing" },
    ],
  },
]

export function ContTrades() {
  return (
    <section aria-labelledby="cont-trades-heading" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-5%] right-[-8%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Trades We Serve"
          heading={
            <span id="cont-trades-heading">
              Four crews, four{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">different playbooks</span>.
              </span>
            </span>
          }
          paragraph={"A roofer\u2019s lead moves differently than a remodeler\u2019s. We tune the site, the ads, and the follow-up to how your customers actually shop for your trade."}
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {trades.map((t) => (
            <article
              key={t.key}
              className="card-surface card-surface-hover relative overflow-hidden flex flex-col"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              {/* Label tape strip */}
              <div
                aria-hidden
                className="relative h-[26px]"
                style={{
                  background: `repeating-linear-gradient(135deg, ${t.accent} 0px, ${t.accent} 10px, ${t.accent}CC 10px, ${t.accent}CC 20px)`,
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-between px-4"
                  style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 100%)" }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                    &#9670; {t.cluster}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/90">
                    Crew 0{trades.findIndex((x) => x.key === t.key) + 1}
                  </span>
                </div>
              </div>

              {/* Corner bolts */}
              <span aria-hidden className="absolute top-[34px] left-2 w-2 h-2 rounded-full" style={{ background: "rgba(15,23,42,0.25)" }} />
              <span aria-hidden className="absolute top-[34px] right-2 w-2 h-2 rounded-full" style={{ background: "rgba(15,23,42,0.25)" }} />
              <span aria-hidden className="absolute bottom-2 left-2 w-2 h-2 rounded-full" style={{ background: "rgba(15,23,42,0.25)" }} />
              <span aria-hidden className="absolute bottom-2 right-2 w-2 h-2 rounded-full" style={{ background: "rgba(15,23,42,0.25)" }} />

              <div className="relative flex-1 p-6 sm:p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: `radial-gradient(ellipse 65% 50% at 12% 12%, ${t.accent}1A 0%, transparent 65%)` }}
                />

                <div className="relative flex items-start gap-3">
                  <div
                    className="shrink-0 w-14 h-14 rounded-[var(--radius-sm)] flex items-center justify-center"
                    style={{ background: `${t.accent}14`, border: `1px solid ${t.accent}33` }}
                  >
                    <t.Icon className="w-7 h-7" style={{ color: t.accent }} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[20px] sm:text-[22px] font-bold leading-[1.15] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
                      {t.cluster}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {t.trades.map((tr) => (
                        <span
                          key={tr}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: `${t.accent}14`, color: t.accent, border: `1px solid ${t.accent}22` }}
                        >
                          {tr}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="relative mt-4 text-[14px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                  {t.motion}
                </p>

                <div className="relative mt-5 pt-4 flex flex-wrap gap-2" style={{ borderTop: "1px dashed var(--border-color)" }}>
                  {t.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-[12.5px] font-semibold px-2.5 py-1 rounded-full transition-colors"
                      style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
                    >
                      {l.label}
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

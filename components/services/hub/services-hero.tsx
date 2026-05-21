import Link from "next/link"
import { Search, Palette, Share2, BarChart3, Layers, ArrowDown } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

const shortcuts = [
  { Icon: Search,     label: "SEO",          href: "#cat-seo",          color: "#22C55E" },
  { Icon: Palette,    label: "Web Design",   href: "#cat-web-design",   color: "#1677FF" },
  { Icon: Share2,     label: "Social Media", href: "#cat-social-media", color: "#EC4899" },
  { Icon: BarChart3,  label: "Paid Ads",     href: "#cat-paid-ads",     color: "#F59E0B" },
]

export function ServicesHero() {
  return (
    <section aria-labelledby="services-hero-heading" className="relative overflow-hidden">
      {/* Ambient auras */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[720px] h-[520px] sm:w-[1100px] sm:h-[700px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[28%] left-[12%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[22%] right-[8%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-0">
        <div className="max-w-[880px] mx-auto text-center" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
          <div className="flex justify-center">
            <Pill>
              <Layers className="w-3.5 h-3.5" strokeWidth={2.4} />
              Every service we offer
            </Pill>
          </div>

          <h1
            id="services-hero-heading"
            className="mt-6 text-[40px] xs:text-[48px] sm:text-[58px] lg:text-[72px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Every marketing service.{" "}
            <span className="whitespace-nowrap">
              Under <span className="accent-underline">one roof</span>.
            </span>
          </h1>

          <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[680px] mx-auto" style={{ color: "var(--muted)" }}>
            SEO, web design, social media, paid ads &mdash; 24 services across 4 pillars, run by one in-house team. Bundle what you need today, expand when you&rsquo;re ready. No agency runaround, no contractor patchwork.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton size="lg" asLink href="#contact">
              Book a strategy call
            </PrimaryButton>
            <SecondaryButton asLink href="#services-featured">
              Browse all services
            </SecondaryButton>
          </div>
        </div>

        {/* Category shortcut row */}
        <div
          className="mt-14 sm:mt-16 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          style={{ animation: "fadeInUp 0.8s ease-out 0.16s both" }}
        >
          <span
            className="text-[10.5px] font-semibold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full w-full sm:w-auto text-center"
            style={{ color: "var(--muted)" }}
          >
            Jump to &rarr;
          </span>
          {shortcuts.map(({ Icon, label, href, color }) => (
            <Link
              key={label}
              href={href}
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--surface)",
                border: `1px solid ${color}33`,
                boxShadow: `0 1px 3px rgba(17,35,68,0.06), 0 4px 14px ${color}14`,
              }}
            >
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${color}14`, color }}
              >
                <Icon className="w-3.5 h-3.5" strokeWidth={2.3} />
              </span>
              <span className="text-[13px] font-semibold" style={{ color: "var(--ink)" }}>
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Status badge / scroll indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-2" style={{ animation: "fadeInUp 0.8s ease-out 0.28s both" }}>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#22C55E", boxShadow: "0 0 10px rgba(34,197,94,0.5)", animation: "subtlePulse 2s ease-in-out infinite" }}
            />
            <span className="text-[12.5px] font-semibold" style={{ color: "var(--ink)" }}>
              24 in-house services
            </span>
            <span style={{ color: "var(--border-color)" }}>&middot;</span>
            <span className="text-[12.5px] font-semibold" style={{ color: "var(--muted)" }}>
              4 marketing pillars
            </span>
          </div>
          <ArrowDown className="w-4 h-4 mt-1 animate-bounce" style={{ color: "var(--muted)" }} strokeWidth={2} />
        </div>
      </div>
    </section>
  )
}

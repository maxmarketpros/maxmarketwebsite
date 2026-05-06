import { SectionHeader } from "@/components/ui/section-header"
import {
  LayoutTemplate,
  Smartphone,
  Search,
  MousePointerClick,
  Zap,
  Globe,
  Check,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  title: string
  pill: string
  description: string
  bullets: string[]
  color: string
  Icon: LucideIcon
  flagship?: boolean
}

const features: Feature[] = [
  {
    title: "Custom GoDaddy website design",
    pill: "FLAGSHIP",
    description:
      "Bespoke layouts inside Websites + Marketing or Managed WordPress — brand typography, real photography, and conversion-first sections. No more generic GoDaddy template that looks like every other small-business site.",
    bullets: [
      "Custom theme + section blocks",
      "Brand-driven type + color",
      "Conversion-first hero & CTAs",
      "Pixel-perfect on every device",
    ],
    color: "#0FB3B3",
    Icon: LayoutTemplate,
    flagship: true,
  },
  {
    title: "Mobile-first layouts",
    pill: "RESPONSIVE",
    description:
      "Phones drive 60%+ of small-business traffic. We design mobile first — touch-sized CTAs, sticky call buttons, and clean stacking at every breakpoint.",
    bullets: ["Sticky tap-to-call", "Touch-friendly tap targets"],
    color: "#1677FF",
    Icon: Smartphone,
  },
  {
    title: "On-page SEO setup",
    pill: "RANKED",
    description:
      "Title tags, meta, H1/H2 hierarchy, schema markup, image alt text, and clean URL slugs — wired into every page of your GoDaddy website design.",
    bullets: ["Schema on every page", "Optimized titles + metas"],
    color: "#22C55E",
    Icon: Search,
  },
  {
    title: "Lead capture & CTAs",
    pill: "BOOKINGS",
    description:
      "Click-to-call, quote forms, calendar embeds, and exit-intent prompts — all wired into GoDaddy's contact engine or your CRM of choice.",
    bullets: ["Tap-to-call on mobile", "Quote forms + email alerts"],
    color: "#F59E0B",
    Icon: MousePointerClick,
  },
  {
    title: "Speed & Core Web Vitals",
    pill: "FAST",
    description:
      "GoDaddy sites get a bad rap for speed because nobody compresses images or trims widgets. We do — and ship Lighthouse 90+ on real Android devices.",
    bullets: ["Image + font compression", "Lazy-load + script audit"],
    color: "#74D3FF",
    Icon: Zap,
  },
  {
    title: "Domain, email & DNS continuity",
    pill: "ZERO-DOWNTIME",
    description:
      "You keep your GoDaddy domain, Microsoft 365 email, GoDaddy Payments, and SSL — we redesign on a staging URL, then cut over with zero downtime.",
    bullets: ["Staging-first builds", "DNS cutover with you on the call"],
    color: "#8B5CF6",
    Icon: Globe,
  },
]

export function GoDaddyServicesBento() {
  const flagship = features.find((f) => f.flagship)!
  const rest = features.filter((f) => !f.flagship)

  return (
    <section
      id="godaddy-features"
      aria-labelledby="godaddy-features-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="What's included"
          heading={
            <span id="godaddy-features-heading">
              What our{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">GoDaddy</span>
              </span>{" "}
              website design delivers.
            </span>
          }
          paragraph="Six pillars that ship on every GoDaddy website design we deliver — design, mobile, SEO, lead capture, speed, and domain/email continuity. No upsells, no surprise add-ons."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <FlagshipCard feature={flagship} />
          {rest.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FlagshipCard({ feature: f }: { feature: Feature }) {
  return (
    <div className="card-surface card-surface-hover relative overflow-hidden md:col-span-2 lg:col-span-2">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-40px] top-[-40px] w-[260px] h-[260px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${f.color}33 0%, transparent 70%)`,
        }}
      />
      <div className="relative p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
        <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:w-[180px] shrink-0">
          <span
            className="w-16 h-16 rounded-[var(--radius-sm)] flex items-center justify-center"
            style={{ background: `${f.color}1A`, color: f.color }}
          >
            <f.Icon className="w-8 h-8" strokeWidth={2} />
          </span>
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em]"
            style={{
              background: `${f.color}1A`,
              color: f.color,
              border: `1px solid ${f.color}40`,
            }}
          >
            {f.pill}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="text-[22px] sm:text-[26px] font-bold leading-[1.15] tracking-[-0.015em]"
            style={{ color: "var(--ink)" }}
          >
            {f.title}
          </h3>
          <p
            className="mt-2 text-[15px] leading-[1.6] max-w-[540px]"
            style={{ color: "var(--muted)" }}
          >
            {f.description}
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
            {f.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-[13.5px] font-medium"
                style={{ color: "var(--ink)" }}
              >
                <Check
                  className="w-4 h-4 shrink-0"
                  style={{ color: f.color }}
                  strokeWidth={2.5}
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ feature: f }: { feature: Feature }) {
  return (
    <div className="card-surface card-surface-hover relative overflow-hidden p-6 flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-30px] top-[-30px] w-[160px] h-[160px]"
        style={{
          background: `radial-gradient(ellipse at center, ${f.color}29 0%, transparent 70%)`,
        }}
      />
      <div className="relative flex items-center justify-between mb-4">
        <span
          className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center"
          style={{ background: `${f.color}1A`, color: f.color }}
        >
          <f.Icon className="w-6 h-6" strokeWidth={2} />
        </span>
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em]"
          style={{
            background: `${f.color}1A`,
            color: f.color,
            border: `1px solid ${f.color}40`,
          }}
        >
          {f.pill}
        </span>
      </div>
      <h3
        className="relative text-[18px] sm:text-[19px] font-bold leading-[1.2] tracking-[-0.01em]"
        style={{ color: "var(--ink)" }}
      >
        {f.title}
      </h3>
      <p
        className="relative mt-2 text-[14px] leading-[1.6] flex-1"
        style={{ color: "var(--muted)" }}
      >
        {f.description}
      </p>
      <ul
        className="relative mt-4 pt-4 border-t space-y-1.5"
        style={{ borderColor: "var(--border-color)" }}
      >
        {f.bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2 text-[13px] font-medium"
            style={{ color: "var(--ink)" }}
          >
            <Check
              className="w-3.5 h-3.5 shrink-0"
              style={{ color: f.color }}
              strokeWidth={2.5}
            />
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

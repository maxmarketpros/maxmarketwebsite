import { SectionHeader } from "@/components/ui/section-header"
import {
  Sparkles,
  Search,
  Code2,
  ShoppingBag,
  CalendarClock,
  ArrowLeftRight,
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
    title: "Custom Squarespace website design",
    pill: "FLAGSHIP",
    description:
      "A fully bespoke Squarespace website design — Fluid Engine layouts, brand-driven typography, and a color system that hits every section. Templates are a starting line, not a finish line.",
    bullets: [
      "Fluid Engine custom layouts",
      "Bespoke type + color system",
      "Conversion-first hero + CTAs",
      "Mobile-perfect at every breakpoint",
    ],
    color: "#0B0B0B",
    Icon: Sparkles,
    flagship: true,
  },
  {
    title: "Squarespace SEO",
    pill: "RANKED",
    description:
      "On-page SEO baked into every page — title tags, meta, schema markup, image compression, sitemap, and clean URL slugs.",
    bullets: ["Schema on every page", "Image + speed optimization"],
    color: "#1677FF",
    Icon: Search,
  },
  {
    title: "Custom CSS + code injection",
    pill: "DEV-LEVEL",
    description:
      "Push past Squarespace defaults with hand-written CSS, header/footer code injection, and per-page custom code blocks.",
    bullets: ["Custom animations", "Per-page CSS rules"],
    color: "#74D3FF",
    Icon: Code2,
  },
  {
    title: "Squarespace Commerce setup",
    pill: "STORE",
    description:
      "Product catalog, payments, shipping rules, inventory, and a checkout flow tuned to the conversion behavior of your category.",
    bullets: ["Stripe + PayPal + Apple Pay", "Tax + shipping rules"],
    color: "#22C55E",
    Icon: ShoppingBag,
  },
  {
    title: "Acuity + scheduling",
    pill: "BOOKING",
    description:
      "Wire up Squarespace Scheduling (Acuity) for service businesses — quotes, consults, intakes, and recurring appointments.",
    bullets: ["Real-time availability", "Auto-confirmation flows"],
    color: "#F59E0B",
    Icon: CalendarClock,
  },
  {
    title: "Migration from any platform",
    pill: "MOVE-IN",
    description:
      "Move from WordPress, Wix, GoDaddy, or a dead host onto Squarespace without losing rankings — full 301 plan included.",
    bullets: ["301 redirect map", "Zero-downtime DNS cutover"],
    color: "#8B5CF6",
    Icon: ArrowLeftRight,
  },
]

export function SquarespaceFeaturesBento() {
  const flagship = features.find((f) => f.flagship)!
  const rest = features.filter((f) => !f.flagship)

  return (
    <section
      id="squarespace-features"
      aria-labelledby="squarespace-features-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="What's included"
          heading={
            <span id="squarespace-features-heading">
              Everything in your{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Squarespace</span>
              </span>{" "}
              website design build.
            </span>
          }
          paragraph="Six pillars that ship on every Squarespace website design we deliver — design, SEO, code, commerce, scheduling, and migration. No upsells, no surprise add-ons."
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
          background: `radial-gradient(circle, ${f.color}22 0%, transparent 70%)`,
        }}
      />
      <div className="relative p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
        <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:w-[180px] shrink-0">
          <span
            className="w-16 h-16 rounded-[var(--radius-sm)] flex items-center justify-center"
            style={{ background: `${f.color}14`, color: f.color }}
          >
            <f.Icon className="w-8 h-8" strokeWidth={2} />
          </span>
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em]"
            style={{
              background: `${f.color}14`,
              color: f.color,
              border: `1px solid ${f.color}33`,
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
          background: `radial-gradient(ellipse at center, ${f.color}1F 0%, transparent 70%)`,
        }}
      />
      <div className="relative flex items-center justify-between mb-4">
        <span
          className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center"
          style={{ background: `${f.color}14`, color: f.color }}
        >
          <f.Icon className="w-6 h-6" strokeWidth={2} />
        </span>
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em]"
          style={{
            background: `${f.color}14`,
            color: f.color,
            border: `1px solid ${f.color}33`,
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

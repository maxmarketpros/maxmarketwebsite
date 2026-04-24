import Link from "next/link"
import {
  HardHat, Home, Store, UtensilsCrossed, HeartPulse, Car,
  ArrowRight, Check,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Industry = {
  id: string
  Icon: typeof HardHat
  accent: string
  label: string
  tagline: string
  pill: string
  signatureStat: { value: string; label: string }
  bullets: string[]
  href: string
}

const industries: Industry[] = [
  {
    id: "contractors",
    Icon: HardHat,
    accent: "#EF4444",
    label: "Contractors",
    tagline: "Roofing, HVAC, plumbing, electrical, GCs, remodelers, outdoor trades.",
    pill: "Heavy trades",
    signatureStat: { value: "24/7", label: "Emergency answer" },
    bullets: [
      "Service-area schema + zip-coded landing pages",
      "Call-only Google Ads for storm & break-fix",
      "Before/after galleries with financing widgets",
    ],
    href: "/industries/contractors",
  },
  {
    id: "home-services",
    Icon: Home,
    accent: "#14B8A6",
    label: "Home Services",
    tagline: "Cleaning, pest, pool, lawn, appliance, garage, locksmith, chimney, window.",
    pill: "Recurring service",
    signatureStat: { value: "<90s", label: "AI answer time" },
    bullets: [
      "AI voice receptionist books 2am emergency calls",
      "Recurring maintenance billing + text-to-pay",
      "Review velocity tuned to seasonal demand spikes",
    ],
    href: "/industries/home-services",
  },
  {
    id: "local-service",
    Icon: Store,
    accent: "#1677FF",
    label: "Local Service Businesses",
    tagline: "Salons, studios, planners, photographers, trainers, pet pros, lawyers, CPAs.",
    pill: "Near-me search",
    signatureStat: { value: "Top 3", label: "Map Pack target" },
    bullets: [
      "Custom-coded websites built to convert, not just impress",
      "Every Google slot \u2014 Ads, AI Overview, Map Pack, Organic",
      "Rank-climb tracking with monthly cohort reports",
    ],
    href: "/industries/local-service",
  },
  {
    id: "restaurants",
    Icon: UtensilsCrossed,
    accent: "#EC4899",
    label: "Restaurants",
    tagline: "Fine dining, fast casual, cafes, bars, pizzerias, bakeries, catering.",
    pill: "Food & hospitality",
    signatureStat: { value: "24 hr", label: "Daypart playbook" },
    bullets: [
      "First-party ordering that cuts delivery-app fees",
      "Daypart-tuned ads (breakfast, lunch, dinner, late night)",
      "Menu-item playbooks + review automation on POS trigger",
    ],
    href: "/industries/restaurants",
  },
  {
    id: "medical",
    Icon: HeartPulse,
    accent: "#22C55E",
    label: "Medical",
    tagline: "Med spas, dermatology, dental, chiropractic, wellness, primary care.",
    pill: "Health & wellness",
    signatureStat: { value: "HIPAA", label: "Compliant stack" },
    bullets: [
      "Clinic-type playbooks (med spa, derm, dental, chiro, wellness)",
      "Treatment-level pages with before/after galleries",
      "HIPAA-safe intake forms and communication flows",
    ],
    href: "/industries/medical",
  },
  {
    id: "automotive",
    Icon: Car,
    accent: "#F59E0B",
    label: "Automotive",
    tagline: "Detailing, mobile mechanics, repair shops, tire/body/glass, rentals.",
    pill: "Auto & transport",
    signatureStat: { value: "5 pers", label: "Vertical playbooks" },
    bullets: [
      "Mobile-service landing pages with live area coverage",
      "Seasonal campaign cadence (ceramic, winter prep, snowbird)",
      "Rental-inventory schema + booking widget embed",
    ],
    href: "/industries/automotive",
  },
]

export function HubFeatured() {
  return (
    <section id="hub-featured" aria-labelledby="hub-featured-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Six flagship verticals"
          heading={
            <>
              Pick your industry.{" "}
              <span className="whitespace-nowrap">
                We&rsquo;ve <span className="accent-underline">ranked it</span>.
              </span>
            </>
          }
          paragraph={"Each vertical has its own landing page with a full playbook \u2014 the service types we cover, the Google slots we target, and the exact stack we wire up. Tap in to see the detail."}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind) => (
            <IndustryCard key={ind.id} ind={ind} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustryCard({ ind }: { ind: Industry }) {
  const { Icon, accent, label, tagline, pill, signatureStat, bullets, href } = ind
  return (
    <Link
      href={href}
      className="group card-surface card-surface-hover relative overflow-hidden p-7 sm:p-8 flex flex-col"
    >
      {/* Corner aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-4 -top-4 w-[70%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${accent}1C 0%, transparent 70%)`,
        }}
      />
      {/* Diagonal accent corner */}
      <span
        aria-hidden
        className="absolute top-0 right-0 w-[88px] h-[88px] pointer-events-none"
        style={{
          background: `linear-gradient(225deg, ${accent}22 0%, transparent 65%)`,
        }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <span
          className="w-14 h-14 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
          style={{
            background: `${accent}14`,
            boxShadow: `inset 0 0 0 1px ${accent}1A, inset 0 1px 0 rgba(255,255,255,0.6)`,
          }}
        >
          <Icon className="w-7 h-7" style={{ color: accent }} strokeWidth={2} />
        </span>
        <span
          className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
          style={{ background: `${accent}1A`, color: accent }}
        >
          <span className="w-1 h-1 rounded-full" style={{ background: accent }} />
          {pill}
        </span>
      </div>

      <h3
        className="relative mt-4 text-[24px] sm:text-[26px] font-bold leading-[1.15] tracking-[-0.015em]"
        style={{ color: "var(--ink)" }}
      >
        {label}
      </h3>
      <p className="relative mt-2 text-[14.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
        {tagline}
      </p>

      {/* Signature stat + bullets */}
      <div className="relative mt-5 flex items-stretch gap-4 flex-1">
        <div
          className="shrink-0 rounded-[var(--radius-sm)] p-3 flex flex-col items-center justify-center min-w-[84px]"
          style={{
            background: `${accent}12`,
            border: `1px solid ${accent}22`,
          }}
        >
          <div
            className="text-[22px] sm:text-[24px] font-bold leading-none tracking-[-0.02em]"
            style={{ color: accent }}
          >
            {signatureStat.value}
          </div>
          <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-center leading-tight" style={{ color: accent }}>
            {signatureStat.label}
          </div>
        </div>

        <ul className="flex-1 space-y-1.5 text-[13px]">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2" style={{ color: "var(--ink)" }}>
              <span
                className="mt-[3px] w-[16px] h-[16px] rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${accent}1A`, color: accent }}
              >
                <Check className="w-2.5 h-2.5" strokeWidth={3} />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <span
        className="relative mt-6 pt-5 flex items-center justify-between text-[14px] font-semibold border-t"
        style={{ borderColor: "var(--border-color)", color: accent }}
      >
        <span className="inline-flex items-center gap-1.5">
          Explore the {label.toLowerCase()} playbook
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
          /industries/{ind.id}
        </span>
      </span>
    </Link>
  )
}

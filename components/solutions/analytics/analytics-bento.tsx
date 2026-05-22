import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  LineChart,
  PhoneCall,
  Target,
  LayoutDashboard,
  ListChecks,
  BarChart3,
  Check,
} from "lucide-react"

type Feature = {
  iconId: string
  pill: string
  pillColor: string
  auraColor: string
  LucideIcon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  description: string
  deliverables: string[]
  flagship?: boolean
}

const features: Feature[] = [
  {
    iconId: "60037",
    pill: "Flagship · Foundation",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.11)",
    LucideIcon: LineChart,
    title: "GA4 Setup & Configuration",
    description:
      "Install Google Analytics 4 the right way — with conversion events, enhanced measurement, cross-domain tracking, and a clean data architecture that actually reports revenue (not just pageviews).",
    deliverables: [
      "GA4 install + config audit",
      "Conversion event mapping",
      "Cross-domain tracking",
      "Google Tag Manager setup",
      "Full documentation hand-off",
    ],
    flagship: true,
  },
  {
    iconId: "13512",
    pill: "Call Tracking",
    pillColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.10)",
    LucideIcon: PhoneCall,
    title: "Dynamic Call Tracking",
    description:
      "Unique phone numbers per source — so you know exactly which campaign drove which call, how long it lasted, and what it was about.",
    deliverables: [
      "Source-based number swap",
      "Call recording & transcription",
      "Keyword-level attribution",
      "Missed-call capture",
    ],
  },
  {
    iconId: "13739",
    pill: "Attribution",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: Target,
    title: "Conversion Attribution",
    description:
      "Tie leads, bookings, and revenue back to the exact channel, campaign, and keyword that drove them — multi-touch, not last-click.",
    deliverables: [
      "Multi-touch attribution",
      "UTM enforcement",
      "Revenue-by-source report",
      "CRM-linked conversion data",
    ],
  },
  {
    iconId: "12817",
    pill: "Dashboards",
    pillColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.09)",
    LucideIcon: LayoutDashboard,
    title: "Custom Dashboards",
    description:
      "Executive + ops dashboards in Looker Studio — live, automated, and reporting in human language (leads, booked jobs, revenue) not analytics jargon.",
    deliverables: [
      "Executive monthly report",
      "Ops live dashboard",
      "Mobile-responsive",
      "Shareable with partners",
    ],
  },
  {
    iconId: "63765",
    pill: "Goals",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.09)",
    LucideIcon: ListChecks,
    title: "Goals & Events",
    description:
      "Every key action tracked — form submissions, phone clicks, booking confirmations, video plays, scroll depth — with consistent naming and clean data.",
    deliverables: [
      "Custom event config",
      "Conversion-goal setup",
      "Enhanced ecom events",
      "Consistent event schema",
    ],
  },
  {
    iconId: "12184",
    pill: "Reports",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.10)",
    LucideIcon: BarChart3,
    title: "Looker Studio Reports",
    description:
      "Automated monthly and weekly reports emailed to you and the team — with narrative explanations, not just numbers.",
    deliverables: [
      "Weekly + monthly cadence",
      "Narrative insights",
      "White-label branded",
      "Loan/partner-ready PDFs",
    ],
  },
]

export function AnalyticsBento() {
  return (
    <section aria-labelledby="analytics-features-heading" className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="Analytics Features"
          heading={
            <span id="analytics-features-heading">
              Everything you need to measure what{" "}
              <span className="accent-underline">
                actually <span className="whitespace-nowrap">matters.</span>
              </span>
            </span>
          }
          paragraph="Full-funnel analytics — from the click to the booked job to the bank deposit. No black boxes, no missing data."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {features.map((f) => <FeatureCard key={f.title} feature={f} />)}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">Get a free analytics audit</PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { LucideIcon, flagship } = feature
  const spanClass = flagship ? "md:col-span-2 lg:col-span-2" : ""
  return (
    <article className={`${spanClass} card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col`}>
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]" style={{ background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${feature.auraColor} 0%, transparent 70%)` }} />
      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start gap-3">
          <img src={icons8Url(feature.iconId, flagship ? 192 : 128)} alt="" width={flagship ? 68 : 52} height={flagship ? 68 : 52} loading="lazy" decoding="async" className={`${flagship ? "w-[68px] h-[68px]" : "w-[52px] h-[52px]"} object-contain shrink-0`} />
          <span className="self-center inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full" style={{ background: `${feature.pillColor}1A`, color: feature.pillColor }}>
            <LucideIcon className="w-3 h-3" strokeWidth={2.5} />
            {feature.pill}
          </span>
        </div>
        <h3 className={`mt-4 ${flagship ? "text-[24px] sm:text-[28px]" : "text-[20px] sm:text-[22px]"} font-bold leading-[1.2] tracking-[-0.01em]`} style={{ color: "var(--ink)" }}>{feature.title}</h3>
        <p className={`mt-2 ${flagship ? "text-[16px] sm:text-[17px]" : "text-[15px]"} leading-[1.55]`} style={{ color: "var(--muted)" }}>{feature.description}</p>
        <ul className={`mt-5 space-y-2 ${flagship ? "sm:grid sm:grid-cols-2 sm:gap-x-4 sm:space-y-0 sm:gap-y-2.5" : ""}`}>
          {feature.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2.5 text-[14px]" style={{ color: "var(--ink)" }}>
              <span className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--accent-bg)", color: "var(--accent)" }}>
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              <span className="leading-[1.45]">{d}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group/link mt-6 pt-5 flex items-center gap-2 text-[14.5px] font-semibold border-t hover:opacity-80 transition-opacity"
          style={{ borderColor: "var(--border-color)", color: "var(--accent)" }}
        >
          <span>See it in action</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" strokeWidth={2.5} />
        </a>
      </div>
    </article>
  )
}

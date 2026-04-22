import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  Inbox,
  FileText,
  PhoneMissed,
  Star,
  GitBranch,
  Users,
  Plug,
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
    iconId: "71474",
    pill: "Flagship · Command Center",
    pillColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.11)",
    LucideIcon: Inbox,
    title: "Unified Lead Inbox",
    description:
      "Every call, text, email, web-form submission, and Facebook lead lands in one shared inbox — auto-tagged with its source, assigned to a rep, and timestamped from the second it arrives.",
    deliverables: [
      "Every channel in one view",
      "Auto source attribution",
      "Round-robin lead routing",
      "Read receipts & seen-by",
      "Mobile app for reps",
    ],
    flagship: true,
  },
  {
    iconId: "18944",
    pill: "Capture",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.09)",
    LucideIcon: FileText,
    title: "Web Forms & Pop-ups",
    description:
      "Drag-and-drop forms, exit-intent pop-ups, and multi-step surveys that drop leads straight into your pipeline — no Zapier, no duct tape.",
    deliverables: [
      "No-code form builder",
      "Conditional logic",
      "Exit-intent pop-ups",
      "Auto pipeline routing",
    ],
  },
  {
    iconId: "13512",
    pill: "Rescue",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.10)",
    LucideIcon: PhoneMissed,
    title: "Missed-Call Text-Back",
    description:
      "Every missed call triggers an automatic text within 5 seconds — so the lead that would've gone to your competitor stays in your pipeline instead.",
    deliverables: [
      "Sub-5-second response",
      "Custom message templates",
      "After-hours mode",
      "Calls logged to contact",
    ],
  },
  {
    iconId: "19417",
    pill: "Prioritize",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: Star,
    title: "Lead Scoring",
    description:
      "Rules-based + AI lead scoring ranks inbound inquiries by quality, so your team works the $12K job before the tire-kicker.",
    deliverables: [
      "Behavior-based scoring",
      "Budget & intent signals",
      "Hot-lead alerts",
      "Custom scoring rules",
    ],
  },
  {
    iconId: "12817",
    pill: "Automate",
    pillColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.09)",
    LucideIcon: GitBranch,
    title: "Pipeline Automation",
    description:
      "Visual pipelines with trigger-based stage moves, follow-up sequences, and SLA timers that keep every opportunity moving forward — automatically.",
    deliverables: [
      "Drag-and-drop pipelines",
      "Trigger-based stage moves",
      "SLA & follow-up timers",
      "Deal rot alerts",
    ],
  },
  {
    iconId: "13548",
    pill: "Enrich",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.09)",
    LucideIcon: Users,
    title: "Contact Enrichment",
    description:
      "Every new lead auto-enriches with location, property data, social profiles, and tags — so reps walk into the first call already knowing who they're talking to.",
    deliverables: [
      "Auto-populate profiles",
      "Property & address data",
      "Social & web enrichment",
      "Custom tags & segments",
    ],
  },
  {
    iconId: "12782",
    pill: "Connect",
    pillColor: "#EC4899",
    auraColor: "rgba(236,72,153,0.10)",
    LucideIcon: Plug,
    title: "Integrations Hub",
    description:
      "Native connections to Google Ads, Facebook Lead Ads, Zapier, webhooks, and 200+ tools — plus open APIs if you want to build your own.",
    deliverables: [
      "Native ad-platform sync",
      "Zapier & Make workflows",
      "Webhooks in & out",
      "Open REST API",
    ],
  },
]

export function LeadGenBento() {
  return (
    <section
      aria-labelledby="lead-gen-features-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Lead Management Features"
          heading={
            <span id="lead-gen-features-heading">
              Every lead. Every channel.{" "}
              <span className="accent-underline">
                One <span className="whitespace-nowrap">inbox.</span>
              </span>
            </span>
          }
          paragraph="A complete lead-management stack for service businesses — built so no inquiry, no matter where it comes from, ever slips through."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {features.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">
            Book a free lead-flow audit
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { LucideIcon, flagship } = feature
  const spanClass = flagship ? "md:col-span-2 lg:col-span-2" : ""

  return (
    <article
      className={`${spanClass} card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${feature.auraColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start gap-3">
          <img
            src={icons8Url(feature.iconId, flagship ? 192 : 128)}
            alt=""
            width={flagship ? 68 : 52}
            height={flagship ? 68 : 52}
            loading="lazy"
            decoding="async"
            className={`${flagship ? "w-[68px] h-[68px]" : "w-[52px] h-[52px]"} object-contain shrink-0`}
          />
          <span
            className="self-center inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
            style={{
              background: `${feature.pillColor}1A`,
              color: feature.pillColor,
            }}
          >
            <LucideIcon className="w-3 h-3" strokeWidth={2.5} />
            {feature.pill}
          </span>
        </div>

        <h3
          className={`mt-4 ${flagship ? "text-[24px] sm:text-[28px]" : "text-[20px] sm:text-[22px]"} font-bold leading-[1.2] tracking-[-0.01em]`}
          style={{ color: "var(--ink)" }}
        >
          {feature.title}
        </h3>

        <p
          className={`mt-2 ${flagship ? "text-[16px] sm:text-[17px]" : "text-[15px]"} leading-[1.55]`}
          style={{ color: "var(--muted)" }}
        >
          {feature.description}
        </p>

        <ul className={`mt-5 space-y-2 ${flagship ? "sm:grid sm:grid-cols-2 sm:gap-x-4 sm:space-y-0 sm:gap-y-2.5" : ""}`}>
          {feature.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2.5 text-[14px]"
              style={{ color: "var(--ink)" }}
            >
              <span
                className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                }}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              <span className="leading-[1.45]">{d}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group/link mt-6 pt-5 flex items-center gap-2 text-[14.5px] font-semibold border-t hover:opacity-80 transition-opacity"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--accent)",
          }}
        >
          <span>See it in action</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" strokeWidth={2.5} />
        </a>
      </div>
    </article>
  )
}

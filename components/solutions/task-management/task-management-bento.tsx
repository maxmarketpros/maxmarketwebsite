import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  Zap,
  MessageSquare,
  ClipboardList,
  Repeat,
  Plug,
  CheckCircle2,
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
    iconId: "12817",
    pill: "Flagship · Workflow Engine",
    pillColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.11)",
    LucideIcon: Zap,
    title: "Trigger-Based Workflows",
    description:
      "Build multi-step workflows from 50+ triggers (form submission, quote sent, payment received, missed call) and unlimited actions — SMS, email, task assignments, status changes, Slack pings, and custom webhooks.",
    deliverables: [
      "50+ pre-built triggers",
      "Unlimited action chains",
      "Delay & schedule steps",
      "Conditional branching",
      "Custom webhook support",
    ],
    flagship: true,
  },
  {
    iconId: "12920",
    pill: "Communicate",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.09)",
    LucideIcon: MessageSquare,
    title: "SMS + Email Automation",
    description:
      "Fire texts and emails from any workflow step — trigger-based, personalized, and tracked with open and reply rates.",
    deliverables: [
      "Two-way SMS",
      "Branded email templates",
      "Merge-field personalization",
      "Opt-out compliance built in",
    ],
  },
  {
    iconId: "35639",
    pill: "Assign",
    pillColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.10)",
    LucideIcon: ClipboardList,
    title: "Internal Task Assignments",
    description:
      "Auto-create internal tasks when a workflow fires — route to the right rep, set SLAs, and ping the team when something's stuck.",
    deliverables: [
      "Auto-route to rep",
      "Due dates & SLA timers",
      "Slack & email alerts",
      "Escalation rules",
    ],
  },
  {
    iconId: "15152",
    pill: "Follow Up",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.10)",
    LucideIcon: Repeat,
    title: "Follow-up Sequences",
    description:
      "Schedule multi-touch nurture — email Day 1, SMS Day 3, call task Day 7 — with exits when the contact replies or books.",
    deliverables: [
      "Multi-channel cadences",
      "Auto-exit on reply",
      "Pause on weekends",
      "Per-rep personalization",
    ],
  },
  {
    iconId: "12782",
    pill: "Integrate",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.09)",
    LucideIcon: Plug,
    title: "Integration Hub",
    description:
      "Native connectors to Google, Outlook, Stripe, Slack, Facebook, and 6,000+ tools via Zapier/Make. Webhooks in and out for custom setups.",
    deliverables: [
      "Native integrations",
      "Zapier + Make bridges",
      "Custom webhooks",
      "REST API access",
    ],
  },
  {
    iconId: "9fGIxsOgPawB",
    pill: "Approve",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: CheckCircle2,
    title: "Approval Chains",
    description:
      "Route quotes over $X, refunds, and sensitive emails through a manager before they go live — approve in-app or by one-click SMS.",
    deliverables: [
      "Rule-based routing",
      "SMS one-click approve",
      "Multi-level chains",
      "Audit log per approval",
    ],
  },
]

export function TaskManagementBento() {
  return (
    <section aria-labelledby="task-mgmt-features-heading" className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="Automation Features"
          heading={
            <span id="task-mgmt-features-heading">
              Every workflow your team does manually —{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">automated.</span>
              </span>
            </span>
          }
          paragraph="A complete automation engine built into your CRM. No Zapier gymnastics. No glue code. Just workflows that actually ship."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {features.map((f) => <FeatureCard key={f.title} feature={f} />)}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">Book a workflow audit</PrimaryButton>
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

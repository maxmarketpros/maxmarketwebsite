import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  GitBranch,
  Palette,
  Users,
  FlaskConical,
  Zap,
  ShieldCheck,
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
    pill: "Flagship · Compounding",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.10)",
    LucideIcon: GitBranch,
    title: "Drip Sequences",
    description:
      "Automated multi-step email flows triggered by behavior — not a calendar. New leads get nurtured. Past customers get reactivated. Quote holdouts get re-pitched. All running 24/7 without you touching them.",
    deliverables: [
      "Trigger-based drip flows",
      "Multi-step email series",
      "Conditional branching",
      "Behavior-based timing",
      "Full revenue attribution",
    ],
    flagship: true,
  },
  {
    iconId: "13237",
    pill: "Build",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.09)",
    LucideIcon: Palette,
    title: "Visual Email Builder",
    description:
      "Drag-and-drop email composer with your brand fonts, colors, and reusable blocks — zero HTML required to launch a beautifully-branded campaign.",
    deliverables: [
      "Drag-and-drop composer",
      "Brand-ready templates",
      "Mobile-responsive by default",
      "Reusable content blocks",
    ],
  },
  {
    iconId: "13466",
    pill: "Segment",
    pillColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.09)",
    LucideIcon: Users,
    title: "Segmentation & Tags",
    description:
      "Slice your list by service type, last job date, geography, deal size, lifecycle stage — so every email feels written just for them.",
    deliverables: [
      "Dynamic segments",
      "Tags & custom fields",
      "Merge-field personalization",
      "Lifecycle stage filters",
    ],
  },
  {
    iconId: "XCww9HPskKrl",
    pill: "Test",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: FlaskConical,
    title: "A/B Testing",
    description:
      "Test subject lines, send times, and creative against each other — then auto-send the winner to the rest of the segment.",
    deliverables: [
      "Subject-line splits",
      "Send-time optimization",
      "Auto-winner send",
      "Statistical significance",
    ],
  },
  {
    iconId: "15152",
    pill: "Trigger",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.10)",
    LucideIcon: Zap,
    title: "Triggered Automations",
    description:
      "Fire emails from any event — form submission, calendar booking, payment received, quote sent, birthday, or custom webhook.",
    deliverables: [
      "50+ trigger types",
      "Custom webhook triggers",
      "Cross-channel (SMS + email)",
      "Delay & branching logic",
    ],
  },
  {
    iconId: "11967",
    pill: "Deliver",
    pillColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.10)",
    LucideIcon: ShieldCheck,
    title: "Deliverability Monitoring",
    description:
      "SPF, DKIM, DMARC, domain warmup, bounce cleaning, and Gmail/Outlook inbox placement tracking — so your emails actually reach the inbox.",
    deliverables: [
      "SPF / DKIM / DMARC setup",
      "Domain warmup",
      "Auto bounce cleaning",
      "Inbox placement monitoring",
    ],
  },
]

export function EmailMarketingBento() {
  return (
    <section aria-labelledby="email-marketing-features-heading" className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="Email Marketing Features"
          heading={
            <span id="email-marketing-features-heading">
              Everything you need to run{" "}
              <span className="accent-underline">
                email that <span className="whitespace-nowrap">converts.</span>
              </span>
            </span>
          }
          paragraph="A full email stack — builder, automation, segmentation, testing, and deliverability — in one place."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {features.map((f) => <FeatureCard key={f.title} feature={f} />)}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">
            Get a free email marketing audit
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

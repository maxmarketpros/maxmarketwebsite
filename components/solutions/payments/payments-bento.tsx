import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  MessageSquare,
  FileText,
  RefreshCw,
  ClipboardList,
  Link2,
  PiggyBank,
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
    iconId: "12920",
    pill: "Flagship · Fastest to Cash",
    pillColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.11)",
    LucideIcon: MessageSquare,
    title: "Text-to-Pay Invoicing",
    description:
      "Send an invoice by text. Customer taps once, pays with Apple Pay, Google Pay, or card — and the funds hit your bank in 1–2 days. 59% faster than mailed invoices.",
    deliverables: [
      "Branded SMS invoice",
      "Apple Pay & Google Pay",
      "Auto-reminders if unpaid",
      "Instant payment receipt",
      "Zero app or login required",
    ],
    flagship: true,
  },
  {
    iconId: "13224",
    pill: "Invoice",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.09)",
    LucideIcon: FileText,
    title: "Online Invoicing",
    description:
      "Professional, branded invoices with line items, taxes, notes, and payment terms — sent by email or SMS, paid online in seconds.",
    deliverables: [
      "Branded invoice templates",
      "Itemized line items",
      "Auto-calculated tax",
      "Payment terms & notes",
    ],
  },
  {
    iconId: "sW1u8AJ5Df1H",
    pill: "Recurring",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: RefreshCw,
    title: "Recurring Billing",
    description:
      "Set up subscriptions, retainers, maintenance contracts, and payment plans — cards stored securely, billing runs on schedule.",
    deliverables: [
      "Monthly retainers",
      "Payment plans",
      "Auto-retry on failures",
      "PCI-compliant storage",
    ],
  },
  {
    iconId: "18944",
    pill: "Close",
    pillColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.09)",
    LucideIcon: ClipboardList,
    title: "Estimates & Proposals",
    description:
      "Send branded estimates that convert to invoices the moment the client approves — with one-click accept + deposit.",
    deliverables: [
      "Convert estimate → invoice",
      "One-click approval",
      "Deposit-on-accept",
      "Change order tracking",
    ],
  },
  {
    iconId: "cA6IhNFdjYHc",
    pill: "Share",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.10)",
    LucideIcon: Link2,
    title: "Payment Links",
    description:
      "Create a reusable pay link for a service or product and drop it into email signatures, DMs, yard signs, or invoices.",
    deliverables: [
      "Reusable pay links",
      "QR code version",
      "Price preset or open amount",
      "Full transaction log",
    ],
  },
  {
    iconId: "13007",
    pill: "Commit",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.09)",
    LucideIcon: PiggyBank,
    title: "Deposits & Partial Payments",
    description:
      "Require a deposit up front, charge a milestone payment mid-project, or let customers split a big invoice into installments.",
    deliverables: [
      "Deposit-on-accept",
      "Milestone billing",
      "Installment plans",
      "Auto-balance tracking",
    ],
  },
]

export function PaymentsBento() {
  return (
    <section aria-labelledby="payments-features-heading" className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="Payments Features"
          heading={
            <span id="payments-features-heading">
              Every way your customers want to{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">pay.</span>
              </span>
            </span>
          }
          paragraph="Accept cards, bank transfers, Apple Pay, Google Pay, and deposits — all in one place, all feeding your CRM."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {features.map((f) => <FeatureCard key={f.title} feature={f} />)}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">Get a free payments audit</PrimaryButton>
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

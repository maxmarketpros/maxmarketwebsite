import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  FileSignature,
  Edit3,
  ShieldCheck,
  Layers,
  Smartphone,
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
    iconId: "QanbId3SGVR7",
    pill: "Flagship · Close Faster",
    pillColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.11)",
    LucideIcon: FileSignature,
    title: "Proposals & Contracts",
    description:
      "Send a branded proposal, contract, or change order and get it signed from any phone, laptop, or tablet — in under 90 seconds. Convert proposals to invoices the moment the signature lands.",
    deliverables: [
      "Drag-and-drop document editor",
      "Dynamic contact-field merge",
      "Sequential or parallel signers",
      "One-click proposal → invoice",
      "Auto-attach to contact record",
    ],
    flagship: true,
  },
  {
    iconId: "35639",
    pill: "Sign",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.09)",
    LucideIcon: Edit3,
    title: "E-Signature Fields",
    description:
      "Drop signature, initial, date, text, and checkbox fields anywhere on the document. Signers tap, draw, or type — no ambiguity.",
    deliverables: [
      "Signature & initial fields",
      "Auto-populated dates",
      "Conditional fields",
      "Required-vs-optional markers",
    ],
  },
  {
    iconId: "16236",
    pill: "Compliance",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.09)",
    LucideIcon: ShieldCheck,
    title: "Audit Trail",
    description:
      "Every action is logged — who viewed, when they viewed, IP, device, and the document hash at the exact moment of signing. Court-ready.",
    deliverables: [
      "ESIGN + UETA + eIDAS",
      "Tamper-evident logs",
      "Downloadable certificate",
      "IP & device fingerprint",
    ],
  },
  {
    iconId: "13237",
    pill: "Templates",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: Layers,
    title: "Reusable Templates",
    description:
      "Build your service agreement once, send it a thousand times — with dynamic fields that merge contact and job data automatically.",
    deliverables: [
      "Unlimited templates",
      "Merge fields & variables",
      "Version history",
      "Team-wide access",
    ],
  },
  {
    iconId: "19038",
    pill: "Mobile",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.10)",
    LucideIcon: Smartphone,
    title: "Mobile-Friendly Signing",
    description:
      "72% of signatures happen on mobile. Documents are optimized for phones — tap to sign, pinch to zoom, no app download required.",
    deliverables: [
      "No app to download",
      "Touch + stylus signing",
      "Works offline → syncs later",
      "SMS notification links",
    ],
  },
]

export function DocumentSigningBento() {
  return (
    <section aria-labelledby="doc-signing-features-heading" className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="E-Signature Features"
          heading={
            <span id="doc-signing-features-heading">
              Everything you need to close deals on the{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">spot.</span>
              </span>
            </span>
          }
          paragraph="A complete e-signature stack — editor, signing flow, templates, audit trail — all tied into your CRM and payments."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {features.map((f) => <FeatureCard key={f.title} feature={f} />)}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">Request a sample document</PrimaryButton>
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

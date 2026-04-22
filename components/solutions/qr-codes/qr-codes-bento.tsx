import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  Palette,
  RefreshCw,
  LineChart,
  Tag,
  Layers,
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
    iconId: "RzakrK96dC5U",
    pill: "Flagship · Branded",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.11)",
    LucideIcon: Palette,
    title: "Branded QR Codes",
    description:
      "Custom-designed QR codes with your colors, rounded modules, and center logo — not the generic black-and-white ones that look like spam. Stress-tested on every major phone for scannability.",
    deliverables: [
      "Custom color schemes",
      "Rounded module shapes",
      "Embedded center logo",
      "Custom corner eyes",
      "Scannability certified",
    ],
    flagship: true,
  },
  {
    iconId: "13019",
    pill: "Dynamic",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: RefreshCw,
    title: "Dynamic QR + Real-time Edits",
    description:
      "Change the destination URL of any printed QR code anytime — no reprinting. Update promos, switch landing pages, or pause campaigns on the fly.",
    deliverables: [
      "Edit destination anytime",
      "Pause or retire live QRs",
      "Version history",
      "No-reprint policy",
    ],
  },
  {
    iconId: "12184",
    pill: "Analytics",
    pillColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.10)",
    LucideIcon: LineChart,
    title: "Scan Analytics",
    description:
      "See every scan — total, unique, by day, by city, by phone type, by source. Fully connected to GA4 so QR scans become real conversions.",
    deliverables: [
      "Total + unique scans",
      "Location & device data",
      "Time-of-day heatmap",
      "GA4 event forwarding",
    ],
  },
  {
    iconId: "63765",
    pill: "UTM",
    pillColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.09)",
    LucideIcon: Tag,
    title: "UTM Auto-Tagging",
    description:
      "Every QR automatically carries the right UTM parameters so it shows up cleanly in analytics — no manual tagging, no missed attribution.",
    deliverables: [
      "Auto UTM campaign",
      "Source + medium presets",
      "Per-placement UTM",
      "Attribution to revenue",
    ],
  },
  {
    iconId: "107439",
    pill: "Bulk",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.10)",
    LucideIcon: Layers,
    title: "Bulk QR Generation",
    description:
      "Generate hundreds of unique QR codes in one click — from a CSV. Perfect for per-neighborhood yard signs, per-tech codes, or per-product labels.",
    deliverables: [
      "CSV bulk import",
      "Unique per-row QRs",
      "Individual analytics",
      "PDF print sheets",
    ],
  },
]

export function QRCodesBento() {
  return (
    <section aria-labelledby="qr-codes-features-heading" className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="QR Code Features"
          heading={
            <span id="qr-codes-features-heading">
              Every scan tracked. Every QR{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">branded.</span>
              </span>
            </span>
          }
          paragraph="A complete QR code toolkit — branded design, dynamic destinations, and scan analytics wired into your CRM and GA4."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {features.map((f) => <FeatureCard key={f.title} feature={f} />)}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">Request a sample QR code</PrimaryButton>
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

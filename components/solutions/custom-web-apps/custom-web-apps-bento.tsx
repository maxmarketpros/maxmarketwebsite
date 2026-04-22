import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  Wrench,
  Users,
  Database,
  Package,
  LayoutDashboard,
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
    iconId: "19293",
    pill: "Flagship · Internal Ops",
    pillColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.11)",
    LucideIcon: Wrench,
    title: "Custom Internal Tools",
    description:
      "Admin panels, operational dashboards, and line-of-business apps built around your exact workflow — not the generic one a SaaS product has in mind. Auth, role-based access, and audit logs baked in.",
    deliverables: [
      "Custom admin dashboards",
      "Role-based permissions",
      "Database + Postgres backend",
      "Single-sign-on (SSO) ready",
      "Full ownership + source code",
    ],
    flagship: true,
  },
  {
    iconId: "18944",
    pill: "Portals",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.09)",
    LucideIcon: Users,
    title: "Client Portals",
    description:
      "White-labeled portals where your clients log in, see project status, download files, pay invoices, and message your team — all under your brand, not a third-party's.",
    deliverables: [
      "Branded client login",
      "Project + file hosting",
      "Messaging & notifications",
      "Payment integration",
    ],
  },
  {
    iconId: "12782",
    pill: "Integrations",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.09)",
    LucideIcon: Database,
    title: "API & Database Integrations",
    description:
      "Connect the tools you already use — CRMs, accounting, field-service apps, IoT sensors — and move data between them with reliable, monitored pipelines.",
    deliverables: [
      "REST + GraphQL APIs",
      "Webhook-based sync",
      "Postgres + migrations",
      "Observability + alerts",
    ],
  },
  {
    iconId: "sW1u8AJ5Df1H",
    pill: "SaaS",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: Package,
    title: "White-Label SaaS",
    description:
      "Productize your internal tool into a SaaS you can license to peers or franchisees — with multi-tenant architecture, Stripe billing, and usage metering built in.",
    deliverables: [
      "Multi-tenant architecture",
      "Stripe billing + metering",
      "Team & seat management",
      "Branded onboarding flow",
    ],
  },
  {
    iconId: "12817",
    pill: "Dashboards",
    pillColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.10)",
    LucideIcon: LayoutDashboard,
    title: "Dashboards & Admin Panels",
    description:
      "Executive dashboards that pull data from your CRM, payments, analytics, and ops tools into one live, role-scoped view.",
    deliverables: [
      "Live data sync",
      "Role-based views",
      "Export to PDF + CSV",
      "Mobile-responsive",
    ],
  },
]

export function CustomWebAppsBento() {
  return (
    <section aria-labelledby="custom-web-apps-features-heading" className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="What We Build"
          heading={
            <span id="custom-web-apps-features-heading">
              Software that fits your business —{" "}
              <span className="accent-underline">
                not the <span className="whitespace-nowrap">other way.</span>
              </span>
            </span>
          }
          paragraph="From a single internal tool to a fully white-label SaaS. If it runs in a browser and solves a real problem, we can build it."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {features.map((f) => <FeatureCard key={f.title} feature={f} />)}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">Book a scoping call</PrimaryButton>
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

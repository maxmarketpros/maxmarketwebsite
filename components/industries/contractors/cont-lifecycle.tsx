import Link from "next/link"
import { Phone, FileSignature, Truck, Hammer, CreditCard, Star, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Stage = {
  num: number
  label: string
  shortLabel: string
  Icon: LucideIcon
  accent: string
  body: string
  link: { label: string; href: string }
}

const stages: Stage[] = [
  {
    num: 1,
    label: "Lead",
    shortLabel: "LEAD",
    Icon: Phone,
    accent: "#EF4444",
    body: "Homeowner calls, fills a form, or clicks a Google Ad. Tracked by source, auto-routed by trade.",
    link: { label: "Lead gen", href: "/solutions/lead-generation" },
  },
  {
    num: 2,
    label: "Quote",
    shortLabel: "QUOTE",
    Icon: FileSignature,
    accent: "#FF6B35",
    body: "Site visit scheduled in 24h, digital estimate sent same day, financing options embedded in the PDF.",
    link: { label: "Calendar", href: "/solutions/calendar" },
  },
  {
    num: 3,
    label: "Dispatch",
    shortLabel: "DISPATCH",
    Icon: Truck,
    accent: "#FBBF24",
    body: "Crew assigned in the CRM, SMS to customer with tech photo and ETA, route optimized.",
    link: { label: "Task mgmt", href: "/solutions/task-management" },
  },
  {
    num: 4,
    label: "On-site",
    shortLabel: "ON-SITE",
    Icon: Hammer,
    accent: "#475569",
    body: "Tech checks in, uploads before photos, logs parts used, customer signs the work order in-app.",
    link: { label: "Doc signing", href: "/solutions/document-signing" },
  },
  {
    num: 5,
    label: "Invoice",
    shortLabel: "INVOICE",
    Icon: CreditCard,
    accent: "#EF4444",
    body: "Invoice sent before the truck leaves the driveway. Card, ACH, or financing \u2014 paid before dinner.",
    link: { label: "Payments", href: "/solutions/payments" },
  },
  {
    num: 6,
    label: "Review",
    shortLabel: "REVIEW",
    Icon: Star,
    accent: "#FF6B35",
    body: "SMS review request 3 hours later. 5-star answers route to Google; feedback routes to the owner.",
    link: { label: "Review gen", href: "/services/social-media/review-generation" },
  },
]

export function ContLifecycle() {
  return (
    <section
      aria-labelledby="cont-lifecycle-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Job Lifecycle"
          heading={
            <span id="cont-lifecycle-heading">
              From the ring of the phone{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">to the five-star review</span>.
              </span>
            </span>
          }
          paragraph="One pipeline, six stations, every tool wired in. No more sticky notes on the truck dash &mdash; the whole job runs through the same dashboard the ads fill."
        />

        {/* Pipeline strip */}
        <div className="mt-12 sm:mt-14 relative px-1">
          {/* Bar */}
          <div
            className="absolute left-2 right-2 top-[18px] h-[6px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #EF4444 0%, #FF6B35 35%, #FBBF24 55%, #475569 100%)",
              boxShadow: "0 2px 8px rgba(239,68,68,0.25)",
            }}
          />
          {/* Nodes */}
          <div className="relative flex items-start justify-between">
            {stages.map((s) => (
              <div key={s.num} className="flex flex-col items-center" style={{ flex: "0 0 auto" }}>
                <div
                  className="relative w-[42px] h-[42px] rounded-full flex items-center justify-center text-white font-bold text-[15px]"
                  style={{
                    background: `linear-gradient(135deg, ${s.accent} 0%, ${s.accent}CC 100%)`,
                    boxShadow: `0 4px 14px ${s.accent}55, 0 0 0 4px rgba(255,255,255,0.9)`,
                  }}
                >
                  {s.num}
                </div>
                <span
                  className="mt-2 text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.08em] sm:tracking-[0.12em] text-center"
                  style={{ color: "var(--muted)" }}
                >
                  {s.shortLabel}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Station cards */}
        <div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
        >
          {stages.map((s) => (
            <article
              key={s.num}
              className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6 flex flex-col"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: `radial-gradient(ellipse 70% 50% at 12% 12%, ${s.accent}1A 0%, transparent 65%)` }}
              />

              <div className="relative flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-[13px]"
                    style={{ background: s.accent, boxShadow: `0 4px 10px ${s.accent}40` }}
                  >
                    {s.num}
                  </span>
                  <h3 className="text-[18px] font-bold leading-tight tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                    {s.label}
                  </h3>
                </div>
                <div
                  className="shrink-0 w-9 h-9 rounded-[var(--radius-sm)] flex items-center justify-center"
                  style={{ background: `${s.accent}14`, border: `1px solid ${s.accent}33` }}
                >
                  <s.Icon className="w-4 h-4" style={{ color: s.accent }} strokeWidth={2.3} />
                </div>
              </div>

              <p className="relative mt-3.5 text-[13.5px] leading-[1.55] flex-1" style={{ color: "var(--muted)" }}>
                {s.body}
              </p>

              <div
                className="relative mt-4 pt-3.5"
                style={{ borderTop: "1px dashed var(--border-color)" }}
              >
                <Link
                  href={s.link.href}
                  className="group inline-flex items-center gap-1 text-[12.5px] font-semibold"
                  style={{ color: s.accent }}
                >
                  {s.link.label}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type BentoCard = {
  id: string
  pillLabel: string
  title: string
  desc: string
  bullets: string[]
  iconId: string
  accent: string
  href: string
  gridClass: string
  flagship?: boolean
}

const cards: BentoCard[] = [
  {
    id: "ai-agents",
    pillLabel: "Flagship",
    title: "AI Voice + Chat Agents",
    desc: "Answers every ring in under 2 seconds. Qualifies, books, and texts the tech \u2014 24/7 in 50+ languages.",
    bullets: ["Web chat + SMS + FB + IG", "Voice receptionist + handoff", "Custom-trained on your SOPs"],
    iconId: "L3uh0mNuxBXw",
    accent: "#14B8A6",
    href: "/solutions/ai-agents",
    gridClass: "lg:col-span-4 lg:row-span-2",
    flagship: true,
  },
  {
    id: "calendar",
    pillLabel: "Booking",
    title: "Scheduling & dispatch",
    desc: "Round-robin routes, Google/Outlook sync, SMS+email reminders that cut no-shows 29%.",
    bullets: ["Deposit-on-booking", "Embeddable booking widget"],
    iconId: "15685",
    accent: "#1677FF",
    href: "/solutions/calendar",
    gridClass: "lg:col-span-2 lg:row-span-1",
  },
  {
    id: "payments",
    pillLabel: "Payments",
    title: "Text-to-pay invoicing",
    desc: "Send a Stripe link the second the job finishes. 59% faster collections. Deposits + milestones.",
    bullets: ["Text-to-pay + QR", "Recurring maintenance billing"],
    iconId: "12279",
    accent: "#22C55E",
    href: "/solutions/payments",
    gridClass: "lg:col-span-2 lg:row-span-1",
  },
  {
    id: "lead-gen",
    pillLabel: "Lead ops",
    title: "Unified lead inbox",
    desc: "Every call, form, chat, and DM in one queue. Missed-call text-back. Lead scoring and enrichment.",
    bullets: ["Missed-call text-back", "Contact enrichment + scoring"],
    iconId: "z9qAuS0WaMJk",
    accent: "#0EA5E9",
    href: "/solutions/lead-generation",
    gridClass: "lg:col-span-3 lg:row-span-1",
  },
  {
    id: "workflows",
    pillLabel: "Automation",
    title: "Dispatch workflows",
    desc: "No-code triggers for recurring customers, route handoffs, SLA escalation, and internal approvals.",
    bullets: ["50+ triggers \u00b7 SLA routing", "6000+ integrations via Zapier"],
    iconId: "13439",
    accent: "#8B5CF6",
    href: "/solutions/task-management",
    gridClass: "lg:col-span-3 lg:row-span-1",
  },
  {
    id: "email-sms",
    pillLabel: "Retention",
    title: "Email + SMS campaigns",
    desc: "Seasonal reactivation (AC tune-up, pool open, pest quarterly) drives 320% more revenue from past customers.",
    bullets: ["Drip sequences + A/B tests", "Deliverability monitoring"],
    iconId: "19408",
    accent: "#EC4899",
    href: "/solutions/email-marketing",
    gridClass: "lg:col-span-3 lg:row-span-1",
  },
  {
    id: "analytics",
    pillLabel: "Attribution",
    title: "Analytics & attribution",
    desc: "Every lead traced from keyword to paid invoice. Call-tracking, GA4, and Looker dashboards shipped weekly.",
    bullets: ["Dynamic call tracking", "Multi-touch attribution"],
    iconId: "32215",
    accent: "#F59E0B",
    href: "/solutions/analytics",
    gridClass: "lg:col-span-3 lg:row-span-1",
  },
]

export function HsSolutionsBento() {
  return (
    <section id="hs-solutions" aria-labelledby="hs-solutions-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="The stack built for service calls"
          heading={
            <>
              Seven integrated solutions.{" "}
              <span className="whitespace-nowrap">
                One <span className="accent-underline">operator login</span>.
              </span>
            </>
          }
          paragraph={"Every module below is first-party \u2014 built by us, owned by you, and tuned to the way recurring home-service shops actually run a job from first ring to five-star review."}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:auto-rows-[minmax(0,1fr)]">
          {cards.map((card) => (
            <BentoCardCmp key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-1.5 text-[15px] font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Browse all 10 solutions
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function BentoCardCmp({ card }: { card: BentoCard }) {
  const { pillLabel, title, desc, bullets, iconId, accent, href, gridClass, flagship } = card
  const iconSize = flagship ? 72 : 56
  return (
    <Link
      href={href}
      className={`group card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col ${gridClass}`}
    >
      {/* Corner aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${accent}1C 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex items-start gap-3">
        <span
          className="rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
          style={{
            background: `${accent}14`,
            boxShadow: `inset 0 0 0 1px ${accent}1A, inset 0 1px 0 rgba(255,255,255,0.6)`,
            width: iconSize + 16,
            height: iconSize + 16,
          }}
        >
          <img
            src={icons8Url(iconId, flagship ? 192 : 128)}
            alt=""
            width={iconSize}
            height={iconSize}
            loading="lazy"
            decoding="async"
            style={{ width: iconSize, height: iconSize }}
            className="object-contain"
          />
        </span>
        <span
          className="mt-1 inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
          style={{ background: `${accent}1A`, color: accent }}
        >
          <span className="w-1 h-1 rounded-full" style={{ background: accent }} />
          {pillLabel}
        </span>
      </div>

      <h3
        className={`relative mt-4 font-bold leading-[1.2] tracking-[-0.01em] ${flagship ? "text-[22px] sm:text-[26px]" : "text-[18px] sm:text-[20px]"}`}
        style={{ color: "var(--ink)" }}
      >
        {title}
      </h3>
      <p
        className={`relative mt-2 leading-[1.55] ${flagship ? "text-[15.5px]" : "text-[14px]"}`}
        style={{ color: "var(--muted)" }}
      >
        {desc}
      </p>

      <ul className="relative mt-4 space-y-1.5 flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[13px]" style={{ color: "var(--ink)" }}>
            <span
              className="mt-[3px] w-[14px] h-[14px] rounded-full flex items-center justify-center shrink-0"
              style={{ background: `${accent}1A`, color: accent }}
            >
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <span
        className="relative mt-5 pt-4 flex items-center gap-1.5 text-[13.5px] font-semibold border-t"
        style={{ borderColor: "var(--border-color)", color: accent }}
      >
        See how it works
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
      </span>
    </Link>
  )
}

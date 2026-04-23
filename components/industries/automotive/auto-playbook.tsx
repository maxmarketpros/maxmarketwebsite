import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Stat = { value: string; label: string }
type Scenario = {
  key: string
  persona: string
  accent: string
  icons8Id: string
  headline: string
  paragraphs: string[]
  stats: Stat[]
  links: { label: string; href: string }[]
}

const scenarios: Scenario[] = [
  {
    key: "detailing",
    persona: "Detailing Studio",
    accent: "#EC4899",
    icons8Id: "18375",
    headline: "From slow Tuesdays to a 2-week wait list",
    paragraphs: [
      "A detailing studio has the skill and the work — but an inconsistent booking curve. Weekends pack out, weekdays crawl, and their Instagram feels like a graveyard.",
      "Playbook: weekly Reels of before/after transformations, a Local-SEO push on GBP, a 24/7 booking page with deposits, and an automated review ask sent 2 hours after every pickup.",
    ],
    stats: [
      { value: "+340%", label: "IG reach" },
      { value: "4.9★",  label: "Avg Google" },
      { value: "98%",   label: "Slot fill rate" },
    ],
    links: [
      { label: "Social Media",       href: "/services/social-media" },
      { label: "Calendar",           href: "/solutions/calendar" },
      { label: "Review Generation",  href: "/services/social-media/review-generation" },
    ],
  },
  {
    key: "mobile",
    persona: "Mobile Auto Repair",
    accent: "#F59E0B",
    icons8Id: "31007",
    headline: "Capturing 5pm calls that used to bounce",
    paragraphs: [
      "A mobile mechanic runs solo — can't answer every call while under a hood. They watch Google lead ads come in, but half the callers ghost before the call-back.",
      "Playbook: Google LSAs dialed to the service radius, an AI voice agent as the after-hours receptionist, 5-second text-back on every missed call, and a weekly Looker dashboard that shows exactly which ZIPs paid off.",
    ],
    stats: [
      { value: "≈0",    label: "Missed calls" },
      { value: "+23%",  label: "Booked jobs" },
      { value: "$8.40", label: "Cost / lead" },
    ],
    links: [
      { label: "Google Ads",       href: "/services/paid-ads/google-ads" },
      { label: "AI Agents",        href: "/solutions/ai-agents" },
      { label: "Lead Gen",         href: "/solutions/lead-generation" },
      { label: "Analytics",        href: "/solutions/analytics" },
    ],
  },
  {
    key: "tire-glass",
    persona: "Tire & Glass Shop",
    accent: "#14B8A6",
    icons8Id: "15173",
    headline: "Owning every \"near me\" in a 20-mile radius",
    paragraphs: [
      "A tire + windshield shop competes with chains on price, location, and speed. Organic traffic is flat, GBP is thin, and the Google Ads account is on auto-pilot with no real attribution.",
      "Playbook: rebuild the GBP with weekly posts, dial in service-area pages with schema, run tightly-geofenced Google Ads, and let customers drop deposits online for mobile windshield jobs.",
    ],
    stats: [
      { value: "#1",    label: "In Map Pack" },
      { value: "+62%",  label: "Organic calls" },
      { value: "7.2×",  label: "Ad ROAS" },
    ],
    links: [
      { label: "Local SEO",        href: "/services/seo/local" },
      { label: "Google Ads",       href: "/services/paid-ads/google-ads" },
      { label: "Payments",         href: "/solutions/payments" },
    ],
  },
]

export function AutoPlaybook() {
  return (
    <section id="playbooks" aria-labelledby="auto-playbook-heading" className="relative scroll-mt-20" style={{ background: "var(--surface)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Playbooks"
          heading={
            <span id="auto-playbook-heading">
              What{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">&ldquo;owning your market&rdquo;</span>
              </span>{" "}
              actually looks like.
            </span>
          }
          paragraph="Illustrative playbooks drawn from how we build the stack — each is an example of what a motivated auto business can do in 90 days."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {scenarios.map((s) => (
            <ScenarioCard key={s.key} scenario={s} />
          ))}
        </div>

        <p className="mt-8 text-center text-[12.5px]" style={{ color: "var(--muted)" }}>
          Example scenarios. Results vary by market, spend, and operational discipline.
        </p>
      </div>
    </section>
  )
}

function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <article className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 80% 50% at 15% 10%, ${scenario.accent}1A 0%, transparent 70%)` }}
      />

      <div className="relative flex items-start gap-4">
        <div
          className="shrink-0 rounded-[var(--radius-md)] p-2.5 flex items-center justify-center"
          style={{ background: `${scenario.accent}14`, border: `1px solid ${scenario.accent}2A` }}
        >
          <img
            src={icons8Url(scenario.icons8Id, 176)}
            alt=""
            width={72}
            height={72}
            className="w-[72px] h-[72px]"
            loading="lazy"
          />
        </div>
        <span
          className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full self-start mt-1"
          style={{ background: `${scenario.accent}14`, color: scenario.accent }}
        >
          {scenario.persona}
        </span>
      </div>

      <h3 className="relative mt-4 text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
        {scenario.headline}
      </h3>

      <div className="relative mt-3 space-y-3">
        {scenario.paragraphs.map((p, i) => (
          <p key={i} className="text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>
            {p}
          </p>
        ))}
      </div>

      <div
        className="relative mt-6 pt-5 grid grid-cols-3 gap-2"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        {scenario.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[var(--radius-sm)] px-2 py-3 text-center"
            style={{ background: `${scenario.accent}0F`, border: `1px solid ${scenario.accent}22` }}
          >
            <div className="text-[20px] sm:text-[22px] font-bold leading-none tracking-[-0.02em]" style={{ color: scenario.accent }}>
              {stat.value}
            </div>
            <div className="mt-1.5 text-[10.5px] font-medium uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {scenario.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="group inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-semibold transition-colors"
            style={{
              background: `${scenario.accent}14`,
              color: scenario.accent,
              border: `1px solid ${scenario.accent}2E`,
            }}
          >
            {l.label}
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
          </Link>
        ))}
      </div>
    </article>
  )
}

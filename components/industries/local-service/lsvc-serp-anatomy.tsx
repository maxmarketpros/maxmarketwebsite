import Link from "next/link"
import { ArrowRight, Sparkles, MapPin, ShoppingBag, Award, FileText, MessageCircleQuestion } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Slot = {
  n: string
  pill: string
  title: string
  what: string
  how: string
  Icon: typeof Sparkles
  accent: string
  href: string
  linkLabel: string
}

const slots: Slot[] = [
  {
    n: "01",
    pill: "Sponsored",
    title: "Google Ads (top of page)",
    what: "Paid slots above the map. First eyes, first clicks on high-intent keywords.",
    how: "Tight match-type, negatives, call-only, and LSA badge management.",
    Icon: ShoppingBag,
    accent: "#F59E0B",
    href: "/services/paid-ads/google-ads",
    linkLabel: "Google Ads service",
  },
  {
    n: "02",
    pill: "AI overview",
    title: "Generative answer (AI Overview)",
    what: "Google\u2019s AI-written summary at the top. Appears on 30%+ of queries now.",
    how: "Schema, FAQ blocks, authoritative content, and citation-worthy structure.",
    Icon: Sparkles,
    accent: "#8B5CF6",
    href: "/services/seo/ai-search",
    linkLabel: "AI search optimization",
  },
  {
    n: "03",
    pill: "Map pack",
    title: "Local 3-pack (the map)",
    what: "Google\u2019s top-3 local businesses for the search. The highest-intent real estate.",
    how: "GBP optimization, NAP citations, review velocity, and geo-tagged photos.",
    Icon: MapPin,
    accent: "#1677FF",
    href: "/services/seo/local",
    linkLabel: "Local SEO playbook",
  },
  {
    n: "04",
    pill: "Featured snippet",
    title: "Zero-click answer box",
    what: "A direct-answer card pulled from one website. Instant authority signal.",
    how: "Question-first content, schema, and answer-optimized H2/H3 structure.",
    Icon: FileText,
    accent: "#14B8A6",
    href: "/services/seo/on-page",
    linkLabel: "On-page SEO",
  },
  {
    n: "05",
    pill: "Organic #1",
    title: "Top organic blue link",
    what: "The highest-ranked unpaid result. Still the most clicked on most searches.",
    how: "Technical SEO, backlinks, domain authority, and content depth.",
    Icon: Award,
    accent: "#22C55E",
    href: "/services/seo/technical",
    linkLabel: "Technical SEO",
  },
  {
    n: "06",
    pill: "People also ask",
    title: "Related-question panel",
    what: "Expandable questions that keep users in the SERP. Own them or lose them.",
    how: "Question-targeted FAQ pages, long-tail targeting, and schema markup.",
    Icon: MessageCircleQuestion,
    accent: "#EC4899",
    href: "/services/seo/off-page",
    linkLabel: "Off-page & authority",
  },
]

export function LsvcSerpAnatomy() {
  return (
    <section aria-labelledby="lsvc-serp-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Google SERP anatomy"
          heading={
            <>
              Six slots. One search.{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">All yours</span>.
              </span>
            </>
          }
          paragraph={"Google shows up to six distinct result types on a local-service query. Every slot you own crowds out a competitor. We play for all six \u2014 not just the blue link."}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {slots.map((slot) => (
            <SlotCard key={slot.n} slot={slot} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services/seo"
            className="group inline-flex items-center gap-1.5 text-[15px] font-semibold"
            style={{ color: "var(--accent)" }}
          >
            See our full SEO program
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function SlotCard({ slot }: { slot: Slot }) {
  const { n, pill, title, what, how, Icon, accent, href, linkLabel } = slot
  return (
    <Link
      href={href}
      className="group card-surface card-surface-hover relative overflow-hidden p-6 flex flex-col"
    >
      {/* Corner aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${accent}18 0%, transparent 70%)`,
        }}
      />
      {/* Number watermark */}
      <div
        aria-hidden
        className="absolute top-3 right-4 text-[68px] font-bold leading-none select-none"
        style={{ color: `${accent}12` }}
      >
        {n}
      </div>

      <div className="relative flex items-center gap-3">
        <span
          className="w-12 h-12 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
          style={{
            background: `${accent}14`,
            boxShadow: `inset 0 0 0 1px ${accent}1A, inset 0 1px 0 rgba(255,255,255,0.6)`,
          }}
        >
          <Icon className="w-5 h-5" style={{ color: accent }} strokeWidth={2.2} />
        </span>
        <span
          className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
          style={{ background: `${accent}1A`, color: accent }}
        >
          <span className="w-1 h-1 rounded-full" style={{ background: accent }} />
          {pill}
        </span>
      </div>

      <h3
        className="relative mt-4 text-[18px] sm:text-[19px] font-bold leading-[1.22] tracking-[-0.01em]"
        style={{ color: "var(--ink)" }}
      >
        {title}
      </h3>
      <p className="relative mt-2 text-[13.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
        {what}
      </p>

      <div
        className="relative mt-4 pt-4 text-[12.5px] leading-[1.5] flex-1"
        style={{ borderTop: "1px dashed var(--border-color)" }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] block mb-1" style={{ color: accent }}>
          How we win it
        </span>
        <span style={{ color: "var(--ink)" }}>{how}</span>
      </div>

      <span
        className="relative mt-5 flex items-center gap-1.5 text-[13px] font-semibold"
        style={{ color: accent }}
      >
        {linkLabel}
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
      </span>
    </Link>
  )
}

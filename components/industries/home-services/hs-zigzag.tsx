import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Row = {
  id: string
  pillLabel: string
  title: React.ReactNode
  blurb: string
  bullets: string[]
  iconId: string
  accent: string
  href: string
  linkLabel: string
}

const rows: Row[] = [
  {
    id: "local-seo",
    pillLabel: "Local SEO",
    title: (
      <>
        Own the &ldquo;
        <span className="whitespace-nowrap">near&nbsp;me</span>&rdquo; moment.
      </>
    ),
    blurb:
      "When a homeowner searches at the panic-tier intent level, we want the Map Pack, the #1 organic result, and the AI-overview citation. All three. Every zip you serve.",
    bullets: [
      "Google Business Profile tuned for each service zone",
      "Review-velocity engine + photo geotag cadence",
      "Schema + citation cleanup across 70+ directories",
    ],
    iconId: "32215",
    accent: "#F59E0B",
    href: "/services/seo/local",
    linkLabel: "See our local SEO playbook",
  },
  {
    id: "emergency-ads",
    pillLabel: "Intent ads",
    title: (
      <>
        Catch broken-fridge &amp;{" "}
        <span className="whitespace-nowrap">locked-out</span> searches.
      </>
    ),
    blurb:
      "Call-only Google Ads, LSA (Local Services Ads), and retargeting tuned to emergency verbiage. We bid where the credit card is already out, not where the tire-kicker is browsing.",
    bullets: [
      "Call-only campaigns wired to your AI voice line",
      "Local Services Ads setup + badge verification",
      "Retargeting around seasonal spikes (AC, pool open, pest)",
    ],
    iconId: "13757",
    accent: "#EF4444",
    href: "/services/paid-ads/google-ads",
    linkLabel: "See the ad stack",
  },
  {
    id: "website",
    pillLabel: "Website",
    title: (
      <>
        Built to convert{" "}
        <span className="whitespace-nowrap">panicked thumbs</span>.
      </>
    ),
    blurb:
      "Sub-2-second load, click-to-call in the sticky header, booking widget embedded on every service page, and a review hero that inherits from your Google rating live.",
    bullets: [
      "Mobile-first Next.js build \u00b7 97+ Lighthouse",
      "Service-area schema so Google serves the right zip",
      "Embedded booking widget + deposit capture",
    ],
    iconId: "102562",
    accent: "#1677FF",
    href: "/services/web-design/custom-coded",
    linkLabel: "See our web builds",
  },
  {
    id: "reviews-social",
    pillLabel: "Reviews + Social",
    title: (
      <>
        Turn every happy fix into{" "}
        <span className="whitespace-nowrap">5 stars</span>.
      </>
    ),
    blurb:
      "Automated review requests the second a payment settles, short-form reel production from job-site footage, and AI-assisted reply drafting so your response rate never dips below 98%.",
    bullets: [
      "Post-invoice review SMS + Google link",
      "Monthly reel/short production from site footage",
      "Reply assistance + negative-review rescue flow",
    ],
    iconId: "19295",
    accent: "#EC4899",
    href: "/services/social-media/review-generation",
    linkLabel: "See the review engine",
  },
]

export function HsZigzag() {
  return (
    <section id="hs-zigzag" aria-labelledby="hs-zigzag-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="How jobs get booked"
          heading={
            <>
              Four levers.{" "}
              <span className="whitespace-nowrap">
                One <span className="accent-underline">full pipeline</span>.
              </span>
            </>
          }
          paragraph={"We don\u2019t pick one channel. We run Local SEO, paid intent, a conversion-grade website, and a review-social engine on the same calendar \u2014 and only measure what books a job."}
        />

        <ol className="mt-14 space-y-10 lg:space-y-16">
          {rows.map((row, idx) => (
            <ZigzagRow key={row.id} row={row} flipped={idx % 2 === 1} index={idx} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function ZigzagRow({ row, flipped, index }: { row: Row; flipped: boolean; index: number }) {
  const { pillLabel, title, blurb, bullets, iconId, accent, href, linkLabel } = row
  return (
    <li
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
      style={{ animation: "fadeInUp 0.7s ease-out both" }}
    >
      {/* Visual card */}
      <div
        className={`lg:col-span-6 ${flipped ? "lg:order-2" : "lg:order-1"}`}
      >
        <div
          className="relative overflow-hidden card-surface p-8 sm:p-10 flex items-center justify-center"
          style={{ minHeight: 260 }}
        >
          {/* Big aura */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 70% 70% at ${flipped ? "30%" : "70%"} 50%, ${accent}22 0%, transparent 70%)`,
            }}
          />
          {/* Row-number watermark */}
          <div
            aria-hidden
            className="absolute -top-4 -right-2 text-[160px] font-bold leading-none select-none"
            style={{ color: `${accent}10` }}
          >
            0{index + 1}
          </div>

          {/* Central icon + satellites */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full blur-2xl"
              style={{ background: `${accent}26` }}
            />
            <div
              className="relative w-[168px] h-[168px] sm:w-[200px] sm:h-[200px] rounded-[28px] flex items-center justify-center"
              style={{
                background: "var(--surface)",
                border: `1px solid ${accent}33`,
                boxShadow: `0 8px 28px ${accent}28, inset 0 0 0 1px rgba(255,255,255,0.7)`,
              }}
            >
              <img
                src={icons8Url(iconId, 256)}
                alt=""
                width={140}
                height={140}
                loading="lazy"
                decoding="async"
                className="w-[124px] h-[124px] sm:w-[140px] sm:h-[140px] object-contain"
              />
            </div>

            {/* Floating dots */}
            <span
              aria-hidden
              className="absolute -top-6 -left-8 w-3 h-3 rounded-full"
              style={{ background: accent, boxShadow: `0 0 12px ${accent}80` }}
            />
            <span
              aria-hidden
              className="absolute -bottom-4 right-[-28px] w-2 h-2 rounded-full"
              style={{ background: accent, opacity: 0.6 }}
            />
            <span
              aria-hidden
              className="absolute top-8 -right-10 w-1.5 h-1.5 rounded-full"
              style={{ background: accent, opacity: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Copy */}
      <div
        className={`lg:col-span-6 ${flipped ? "lg:order-1" : "lg:order-2"}`}
      >
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
          style={{ background: `${accent}1A`, color: accent }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
          {pillLabel}
        </span>
        <h3
          className="mt-4 text-[26px] sm:text-[32px] lg:text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-balance"
          style={{ color: "var(--ink)" }}
        >
          {title}
        </h3>
        <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.6] max-w-[540px]" style={{ color: "var(--muted)" }}>
          {blurb}
        </p>
        <ul className="mt-5 space-y-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-[14.5px]"
              style={{ color: "var(--ink)" }}
            >
              <span
                className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${accent}1A`, color: accent }}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="group mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold"
          style={{ color: accent }}
        >
          {linkLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
        </Link>
      </div>
    </li>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Play = {
  key: string
  iconId: string
  persona: string
  accent: string
  item: string
  price: string
  title: string
  body: string
  channels: string[]
  links: { label: string; href: string }[]
}

const plays: Play[] = [
  {
    key: "signature",
    iconId: "24467",
    persona: "Fast-casual",
    accent: "#F97316",
    item: "Hot honey chicken bowl",
    price: "$13",
    title: "Signature-dish amplification",
    body: "Build the hero dish into a repeatable Reel + Google food pack loop. UGC creators seed the look; local SEO pushes the search.",
    channels: ["IG Reels", "Food pack", "UGC creator"],
    links: [
      { label: "Video editing", href: "/services/social-media/video-editing" },
      { label: "Local SEO", href: "/services/seo/local" },
    ],
  },
  {
    key: "happyhour",
    iconId: "13300",
    persona: "Bar / brewery",
    accent: "#EC4899",
    item: "$6 drafts \u00B7 4\u20136pm",
    price: "$6",
    title: "Happy-hour fill",
    body: "Geo-fenced Meta ads lighting up a 500m radius at 3:45pm, paired with an SMS burst to your regulars list and a Google Ads daypart bid-boost.",
    channels: ["Geo-fenced Meta", "SMS burst", "Google daypart"],
    links: [
      { label: "Facebook ads", href: "/services/paid-ads/facebook-ads" },
      { label: "Email & SMS", href: "/solutions/email-marketing" },
    ],
  },
  {
    key: "brunch",
    iconId: "x5n9NkwafGXP",
    persona: "Fine dining",
    accent: "#DC2626",
    item: "Brunch tasting",
    price: "$48",
    title: "Weekend brunch reservations",
    body: "OpenTable or Resy sync, Instagram Stories showing the plating, and a 3-hour post-visit review request. Saturdays and Sundays fully booked by Thursday.",
    channels: ["OpenTable sync", "IG Stories", "Review drip"],
    links: [
      { label: "Calendar", href: "/solutions/calendar" },
      { label: "Review gen", href: "/services/social-media/review-generation" },
    ],
  },
  {
    key: "catering",
    iconId: "21575",
    persona: "Catering",
    accent: "#B91C1C",
    item: "10-person platter",
    price: "$195",
    title: "Catering & corporate lunch",
    body: "LinkedIn outreach to local offices, a quote landing page with Stripe deposit, and a quote-to-booked pipeline your ops team can actually track.",
    channels: ["LinkedIn outreach", "Quote landing", "Stripe deposit"],
    links: [
      { label: "Web design", href: "/services/web-design" },
      { label: "Payments", href: "/solutions/payments" },
    ],
  },
  {
    key: "lto",
    iconId: "RznPOv4CgPSx",
    persona: "Cafe / bakery",
    accent: "#F59E0B",
    item: "Pumpkin cold brew",
    price: "$6.50",
    title: "Seasonal LTO drop",
    body: "Push notification on launch day, email blast with a countdown banner, and a homepage hero that swaps in the LTO automatically until stock runs out.",
    channels: ["Push", "Email blast", "Countdown hero"],
    links: [
      { label: "Email & SMS", href: "/solutions/email-marketing" },
      { label: "Web design", href: "/services/web-design" },
    ],
  },
  {
    key: "loyalty",
    iconId: "36769",
    persona: "Cafe / bakery",
    accent: "#F59E0B",
    item: "Buy 9, get 1",
    price: "free",
    title: "Loyalty reward drop",
    body: "First-party app push on redemption-eligible mornings, SMS birthday freebies that never expire, and a Google Business post that shows the perk to walk-ins.",
    channels: ["App push", "SMS birthday", "GBP post"],
    links: [
      { label: "AI agents", href: "/solutions/ai-agents" },
      { label: "Analytics", href: "/solutions/analytics" },
    ],
  },
]

export function RestMenuPlaybooks() {
  return (
    <section aria-labelledby="rest-menu-heading" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-5%] right-[-8%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Menu-Level Playbooks"
          heading={
            <span id="rest-menu-heading">
              Marketing built around{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">what you actually sell</span>.
              </span>
            </span>
          }
          paragraph={"Not \u2018restaurant marketing\u2019 in the abstract \u2014 a motion per offer. Here are six signature items on six different menus, and how each one gets moved, booked, and re-ordered."}
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {plays.map((p) => (
            <article
              key={p.key}
              className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 65% 50% at 12% 12%, ${p.accent}1F 0%, transparent 65%), linear-gradient(135deg, rgba(254,243,199,0.25) 0%, transparent 40%)`,
                }}
              />

              {/* Top: icon + persona chip */}
              <div className="relative flex items-start justify-between">
                <div
                  className="shrink-0 w-14 h-14 rounded-[var(--radius-sm)] flex items-center justify-center"
                  style={{ background: `${p.accent}14`, border: `1px solid ${p.accent}33` }}
                >
                  <img
                    src={icons8Url(p.iconId, 128)}
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10"
                    loading="lazy"
                  />
                </div>
                <span
                  className="inline-flex text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                  style={{ background: `${p.accent}14`, color: p.accent }}
                >
                  {p.persona}
                </span>
              </div>

              {/* Menu dotted-leader row */}
              <div
                className="relative mt-5 flex items-end gap-2 pb-2"
                style={{ borderBottom: "1.5px dotted var(--border-color)" }}
              >
                <span className="flex-1 text-[14px] font-semibold" style={{ color: "var(--ink)" }}>
                  {p.item}
                </span>
                <span className="text-[13.5px] font-bold tabular-nums" style={{ color: p.accent }}>
                  {p.price}
                </span>
              </div>

              {/* Headline + body */}
              <h3 className="relative mt-4 text-[19px] sm:text-[21px] font-bold leading-[1.2] tracking-[-0.015em]" style={{ color: "var(--ink)" }}>
                {p.title}
              </h3>
              <p className="relative mt-2.5 text-[14px] leading-[1.6] flex-1" style={{ color: "var(--muted)" }}>
                {p.body}
              </p>

              {/* Channels */}
              <div className="relative mt-4">
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                  Channels
                </span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {p.channels.map((c) => (
                    <span
                      key={c}
                      className="inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${p.accent}14`, color: p.accent }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div
                className="relative mt-4 pt-4 flex flex-wrap gap-2.5"
                style={{ borderTop: "1px solid var(--border-color)" }}
              >
                {p.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group inline-flex items-center gap-1 text-[12.5px] font-semibold px-2.5 py-1 rounded-full transition-colors"
                    style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
                  >
                    {l.label}
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

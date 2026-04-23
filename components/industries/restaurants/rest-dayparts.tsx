import Link from "next/link"
import { Sunrise, Sun, Sunset, Moon, MoonStar, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Daypart = {
  key: string
  label: string
  time: string
  start: number
  end: number
  Icon: LucideIcon
  accent: string
  theme: string
  body: string
  bestFor: string[]
  leanOn: { label: string; href: string }[]
}

const dayparts: Daypart[] = [
  {
    key: "breakfast",
    label: "Breakfast",
    time: "6\u201310am",
    start: 6,
    end: 10,
    Icon: Sunrise,
    accent: "#F59E0B",
    theme: "Morning regulars + mobile-order pickup",
    body: "Push notifications timed to 7:30am, Google commute-window ads, and loyalty free-refill triggers that pull the same 200 faces in five days a week.",
    bestFor: ["Cafes", "Bakeries"],
    leanOn: [
      { label: "AI agents", href: "/solutions/ai-agents" },
      { label: "Email & SMS", href: "/solutions/email-marketing" },
    ],
  },
  {
    key: "lunch",
    label: "Lunch rush",
    time: "11am\u20132pm",
    start: 11,
    end: 14,
    Icon: Sun,
    accent: "#F97316",
    theme: "High-velocity bowls, combos, catering",
    body: "Meta geo-fence pulsing a 500m radius during the window, plus QR codes on receipts that push repeat orders before the week ends.",
    bestFor: ["Fast-casual", "QSR"],
    leanOn: [
      { label: "Google Ads", href: "/services/paid-ads/google-ads" },
      { label: "Analytics", href: "/solutions/analytics" },
    ],
  },
  {
    key: "happyhour",
    label: "Happy hour",
    time: "3\u20136pm",
    start: 15,
    end: 18,
    Icon: Sunset,
    accent: "#EC4899",
    theme: "Drafts, apps, after-work crowd",
    body: "SMS blasts at 3:45pm, Google Ads daypart bid-boosting on \u2018happy hour near me\u2019, and IG Story countdowns that tick the last 45 minutes.",
    bestFor: ["Bars", "Breweries"],
    leanOn: [
      { label: "Facebook ads", href: "/services/paid-ads/facebook-ads" },
      { label: "Email & SMS", href: "/solutions/email-marketing" },
    ],
  },
  {
    key: "dinner",
    label: "Dinner",
    time: "6\u20139pm",
    start: 18,
    end: 21,
    Icon: Moon,
    accent: "#DC2626",
    theme: "Reservations, tasting menus, chef-driven",
    body: "OpenTable / Resy sync, IG Reels with the chef on camera, and a 3-hour post-visit review request that ships before the table turns.",
    bestFor: ["Fine dining"],
    leanOn: [
      { label: "Calendar", href: "/solutions/calendar" },
      { label: "Review gen", href: "/services/social-media/review-generation" },
    ],
  },
  {
    key: "latenight",
    label: "Late-night",
    time: "9pm\u20131am",
    start: 21,
    end: 25,
    Icon: MoonStar,
    accent: "#B91C1C",
    theme: "Delivery-first, bar food, dorm fuel",
    body: "DoorDash promoted listings, meme-native IG creative, student-zone geo-fences, and a pizza-coupon email cadence timed to the weekend.",
    bestFor: ["Pizzerias", "Bars"],
    leanOn: [
      { label: "Social media", href: "/services/social-media" },
      { label: "Email & SMS", href: "/solutions/email-marketing" },
    ],
  },
]

const hourTicks = Array.from({ length: 25 }, (_, i) => i) // 0..24

export function RestDayparts() {
  return (
    <section
      aria-labelledby="rest-dayparts-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Daypart Rhythm"
          heading={
            <span id="rest-dayparts-heading">
              Every hour on the clock{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">is a different campaign</span>.
              </span>
            </span>
          }
          paragraph={"A restaurant doesn\u2019t sell one product a day \u2014 it sells five. We market each daypart the way your customers actually show up."}
        />

        {/* 24-hour strip */}
        <div className="mt-12 sm:mt-14 relative px-2">
          {/* Colored arcs overlay */}
          <div className="relative h-[14px] mb-2">
            {dayparts.map((d) => {
              const left = (d.start / 24) * 100
              const width = ((d.end - d.start) / 24) * 100
              return (
                <div
                  key={d.key}
                  className="absolute top-1/2 -translate-y-1/2 h-[8px] rounded-full"
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    background: `linear-gradient(90deg, ${d.accent}CC 0%, ${d.accent} 100%)`,
                    boxShadow: `0 2px 6px ${d.accent}55`,
                  }}
                />
              )
            })}
          </div>

          {/* Tick marks */}
          <div className="relative flex items-start justify-between">
            {hourTicks.map((h) => {
              const isLabel = h % 6 === 0
              return (
                <div key={h} className="flex flex-col items-center">
                  <span
                    className="block w-[1.5px] rounded-full"
                    style={{
                      height: isLabel ? "10px" : "6px",
                      background: isLabel ? "var(--ink)" : "var(--border-color)",
                    }}
                  />
                  {isLabel && (
                    <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
                      {h === 0 || h === 24 ? "12am" : h === 6 ? "6am" : h === 12 ? "12pm" : "6pm"}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* 5 daypart cards */}
        <div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {dayparts.map((d) => (
            <article
              key={d.key}
              className="card-surface card-surface-hover relative overflow-hidden p-5 flex flex-col"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: `radial-gradient(ellipse 80% 60% at 15% 10%, ${d.accent}20 0%, transparent 70%)` }}
              />

              <div className="relative flex items-start justify-between">
                <div>
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: d.accent }}>
                    {d.time}
                  </span>
                  <h3 className="mt-0.5 text-[17px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                    {d.label}
                  </h3>
                </div>
                <div
                  className="shrink-0 w-9 h-9 rounded-[var(--radius-sm)] flex items-center justify-center"
                  style={{ background: `${d.accent}14`, border: `1px solid ${d.accent}33` }}
                >
                  <d.Icon className="w-4 h-4" style={{ color: d.accent }} strokeWidth={2.3} />
                </div>
              </div>

              <p className="relative mt-3 text-[12.5px] font-semibold" style={{ color: d.accent }}>
                {d.theme}
              </p>
              <p className="relative mt-1.5 text-[12.5px] leading-[1.55] flex-1" style={{ color: "var(--muted)" }}>
                {d.body}
              </p>

              <div className="relative mt-4 pt-3.5" style={{ borderTop: "1px solid var(--border-color)" }}>
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                  Best for
                </span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {d.bestFor.map((b) => (
                    <span
                      key={b}
                      className="text-[10.5px] font-semibold px-1.5 py-0.5 rounded-full"
                      style={{ background: `${d.accent}14`, color: d.accent }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div className="mt-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                    Lean on
                  </span>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {d.leanOn.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="group inline-flex items-center gap-0.5 text-[11px] font-semibold"
                        style={{ color: d.accent }}
                      >
                        {l.label}
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

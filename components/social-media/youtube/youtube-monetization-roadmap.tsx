import { Pill } from "@/components/ui/pill"
import {
  ArrowRight,
  Sparkles,
  DollarSign,
  Users,
  Heart,
  ShoppingBag,
  Briefcase,
  Crown,
} from "lucide-react"

type Milestone = {
  subs: string
  label: string
  Icon: typeof DollarSign
  unlock: string
  blurb: string
  est: string
  color: string
}

const milestones: Milestone[] = [
  {
    subs: "0 → 500",
    label: "Foundation",
    Icon: Sparkles,
    unlock: "Brand voice + first 50 uploads",
    blurb:
      "No monetization yet — every video earns your future watch-time signal. Lead capture via description links and pinned comments.",
    est: "Lead gen only",
    color: "#5B6B84",
  },
  {
    subs: "500 → 1,000",
    label: "Shorts Fund qualifier",
    Icon: Users,
    unlock: "500 subs + 3K watch hours (or 3M Shorts views)",
    blurb:
      "Hit YPP&rsquo;s lower threshold. Shorts revenue sharing turns on. We push Shorts cadence to daily here to compound subs.",
    est: "$80–$300/mo",
    color: "#EC4899",
  },
  {
    subs: "1,000 → 10,000",
    label: "YPP unlocked",
    Icon: DollarSign,
    unlock: "AdSense + Super Thanks + Channel Memberships",
    blurb:
      "Mid-roll ads on long-form, Super Thanks tipping, and a $4.99/mo membership tier with member-only perks. Stack starts compounding.",
    est: "$1.5K–$8K/mo",
    color: "#F59E0B",
  },
  {
    subs: "10K → 100K",
    label: "Brand-deal era",
    Icon: Briefcase,
    unlock: "Sponsorships + affiliate stack + Shopping",
    blurb:
      "Mid-tier brand deals start at 10K subs in service-business niches. We layer affiliate links and YouTube Shopping on every relevant video.",
    est: "$8K–$45K/mo",
    color: "#1677FF",
  },
  {
    subs: "100K → 1M",
    label: "Owned products",
    Icon: ShoppingBag,
    unlock: "Lead-gen → owned product or course",
    blurb:
      "Channel becomes a top-of-funnel for your own service offer or course. Highest-margin revenue stream, lowest platform risk.",
    est: "$45K–$250K+/mo",
    color: "#22C55E",
  },
  {
    subs: "1M+",
    label: "Category authority",
    Icon: Crown,
    unlock: "Acquisition leverage + media exits",
    blurb:
      "Channel itself becomes an asset — acquisition offers, licensing, and category-defining authority in your service vertical.",
    est: "$250K+/mo",
    color: "#A855F7",
  },
]

export function YoutubeMonetizationRoadmap() {
  return (
    <section
      id="youtube-monetization-roadmap"
      aria-labelledby="youtube-monetization-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-6%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] right-[-6%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="text-center max-w-[760px] mx-auto">
          <div className="flex justify-center mb-5">
            <Pill>YouTube monetization roadmap</Pill>
          </div>
          <h2
            id="youtube-monetization-heading"
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            What our YouTube marketing services{" "}
            <span className="accent-underline">unlock</span> at every milestone.
          </h2>
          <p
            className="mt-5 text-[17px] sm:text-[18.5px] leading-[1.65] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            We don&rsquo;t promise a viral video — we promise a ladder. Every
            milestone unlocks a new revenue stream, and every revenue stream
            stacks on top of the one below it. Here&rsquo;s the path your
            channel takes inside our YouTube marketing services.
          </p>
        </div>

        {/* Vertical timeline */}
        <div
          className="mt-12 lg:mt-16 relative max-w-[920px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out 0.05s both" }}
        >
          {/* Center spine */}
          <div
            aria-hidden
            className="absolute hidden md:block top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(91,107,132,0.4) 0%, rgba(236,72,153,0.4) 18%, rgba(245,158,11,0.4) 36%, rgba(22,119,255,0.4) 56%, rgba(34,197,94,0.4) 76%, rgba(168,85,247,0.4) 100%)",
            }}
          />
          {/* Mobile spine */}
          <div
            aria-hidden
            className="absolute md:hidden top-0 bottom-0 left-5 w-[2px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(91,107,132,0.4) 0%, rgba(236,72,153,0.4) 18%, rgba(245,158,11,0.4) 36%, rgba(22,119,255,0.4) 56%, rgba(34,197,94,0.4) 76%, rgba(168,85,247,0.4) 100%)",
            }}
          />

          <ul className="space-y-8 sm:space-y-10">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <li
                  key={m.subs}
                  className="relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.05 * i}s both`,
                  }}
                >
                  <div
                    className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 ${
                      isLeft ? "" : "md:[&>article]:order-3"
                    }`}
                  >
                    {/* Card */}
                    <article
                      className={`card-surface relative overflow-hidden ${
                        isLeft ? "md:text-right md:order-1" : "md:order-3"
                      } ml-12 md:ml-0`}
                      style={{ borderRadius: "var(--radius-lg)" }}
                    >
                      <div
                        aria-hidden
                        className="absolute pointer-events-none"
                        style={{
                          [isLeft ? "right" : "left"]: 0,
                          top: 0,
                          bottom: 0,
                          width: "55%",
                          background: `linear-gradient(${
                            isLeft ? "270deg" : "90deg"
                          }, transparent 0%, ${m.color}1A 100%)`,
                        }}
                      />
                      <div className="relative px-5 sm:px-6 py-5">
                        <div
                          className={`flex items-center gap-2 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          <span
                            className="text-[11px] font-bold uppercase tracking-[0.14em]"
                            style={{ color: m.color }}
                          >
                            {m.label}
                          </span>
                        </div>
                        <h3
                          className="mt-1.5 text-[18px] sm:text-[20px] font-bold leading-tight tracking-[-0.01em]"
                          style={{ color: "var(--ink)" }}
                        >
                          {m.unlock}
                        </h3>
                        <p
                          className="mt-2 text-[13.5px] leading-[1.55]"
                          style={{ color: "var(--muted)" }}
                        >
                          {m.blurb}
                        </p>
                        <div
                          className={`mt-3 flex items-center gap-2 flex-wrap ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          <span
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11.5px] font-bold"
                            style={{
                              background: `${m.color}1A`,
                              color: m.color,
                              border: `1px solid ${m.color}40`,
                            }}
                          >
                            <DollarSign className="w-3 h-3" strokeWidth={3} />
                            {m.est}
                          </span>
                        </div>
                      </div>
                    </article>

                    {/* Center node */}
                    <div className="hidden md:flex order-2 relative items-center justify-center">
                      <span
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          background: "var(--surface)",
                          border: `2px solid ${m.color}`,
                          color: m.color,
                          boxShadow: `0 0 0 6px var(--bg), 0 12px 28px ${m.color}33`,
                        }}
                      >
                        <m.Icon className="w-6 h-6" strokeWidth={2.25} />
                      </span>
                    </div>

                    {/* Subs label */}
                    <div
                      className={`md:order-${isLeft ? 3 : 1} ml-12 md:ml-0 ${
                        isLeft ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <span
                        className="text-[11px] font-bold uppercase tracking-[0.14em] block"
                        style={{ color: "var(--muted)" }}
                      >
                        Subscribers
                      </span>
                      <span
                        className="text-[24px] sm:text-[30px] font-extrabold tracking-[-0.02em] block"
                        style={{ color: m.color }}
                      >
                        {m.subs}
                      </span>
                    </div>
                  </div>

                  {/* Mobile node */}
                  <span
                    className="absolute left-5 -translate-x-1/2 md:hidden flex items-center justify-center w-9 h-9 rounded-full"
                    style={{
                      top: 12,
                      background: "var(--surface)",
                      border: `2px solid ${m.color}`,
                      color: m.color,
                      boxShadow: `0 0 0 4px var(--bg)`,
                    }}
                  >
                    <m.Icon className="w-4 h-4" strokeWidth={2.25} />
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 rounded-[var(--radius-lg)] max-w-[920px] mx-auto"
          style={{
            background:
              "linear-gradient(90deg, rgba(34,197,94,0.10) 0%, rgba(22,119,255,0.10) 100%)",
            border: "1px solid rgba(34,197,94,0.20)",
          }}
        >
          <span
            className="text-[14.5px] font-semibold flex items-center gap-2"
            style={{ color: "var(--ink)" }}
          >
            <Heart className="w-4 h-4" style={{ color: "#16A34A" }} />
            Pricing scales with the milestone, not the channel size.
          </span>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-1.5 font-semibold text-[14.5px] group"
            style={{ color: "var(--accent)" }}
          >
            See plans &amp; pricing
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

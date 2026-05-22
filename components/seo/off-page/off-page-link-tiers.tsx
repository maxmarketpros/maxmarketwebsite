import { SectionHeader } from "@/components/ui/section-header"
import { Award, Briefcase, MapPin, X } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Tier = {
  n: string
  Icon: LucideIcon
  tierName: string
  drRange: string
  examples: string
  cadence: string
  bg: string
  accent: string
  widthPct: number
}

const tiers: Tier[] = [
  {
    n: "Tier 1",
    Icon: Award,
    tierName: "Editorial authority",
    drRange: "DR 70 – 100",
    examples: "Forbes · HubSpot · Inc · Entrepreneur · industry flagships",
    cadence: "2–4 per quarter",
    bg: "linear-gradient(180deg, #6D28D9 0%, #5B21B6 100%)",
    accent: "#fff",
    widthPct: 52,
  },
  {
    n: "Tier 2",
    Icon: Briefcase,
    tierName: "Industry + niche",
    drRange: "DR 40 – 70",
    examples: "Trade pubs · podcasts · expert roundups · guest bylines",
    cadence: "6–12 per month",
    bg: "linear-gradient(180deg, #A78BFA 0%, #8B5CF6 100%)",
    accent: "#fff",
    widthPct: 76,
  },
  {
    n: "Tier 3",
    Icon: MapPin,
    tierName: "Local + foundational",
    drRange: "DR 20 – 50",
    examples: "Chamber · BBB · Yelp · niche directories · citation base",
    cadence: "Recurring build",
    bg: "linear-gradient(180deg, #EDE9FE 0%, #DDD6FE 100%)",
    accent: "#4C1D95",
    widthPct: 100,
  },
]

const neverList = [
  "Private blog networks (PBNs)",
  "Paid link schemes",
  "Link farms & link exchanges",
  "Comment / forum spam",
  "Over-optimized exact-match anchors",
]

export function OffPageLinkTiers() {
  return (
    <section
      id="off-page-link-tiers"
      aria-labelledby="off-page-tiers-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] left-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Link quality"
          heading={
            <span id="off-page-tiers-heading">
              Not all backlinks are{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">equal</span>.
              </span>
            </span>
          }
          paragraph="One editorial backlink from a DR 90 publication can outrank a hundred low-quality directory citations. We build a pyramid — foundation supports authority."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Pyramid column */}
          <div className="relative">
            <div className="flex flex-col gap-3 items-center">
              {tiers.map((tier) => (
                <div
                  key={tier.n}
                  className="relative overflow-hidden"
                  style={{
                    width: `${tier.widthPct}%`,
                    minWidth: 280,
                    borderRadius: "var(--radius-lg)",
                    background: tier.bg,
                    color: tier.accent,
                    boxShadow:
                      "0 1px 3px rgba(17,35,68,0.08), 0 10px 30px rgba(109,40,217,0.12)",
                  }}
                >
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="inline-flex items-center justify-center w-8 h-8 rounded-[var(--radius-xs)]"
                          style={{
                            background:
                              tier.accent === "#fff"
                                ? "rgba(255,255,255,0.18)"
                                : "rgba(76,29,149,0.1)",
                            color: tier.accent,
                          }}
                        >
                          <tier.Icon
                            className="w-[18px] h-[18px]"
                            strokeWidth={2.25}
                          />
                        </span>
                        <div>
                          <div
                            className="text-[11px] font-bold uppercase tracking-[0.1em] opacity-80"
                          >
                            {tier.n}
                          </div>
                          <div className="text-[16px] sm:text-[17px] font-bold leading-tight">
                            {tier.tierName}
                          </div>
                        </div>
                      </div>
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-bold"
                        style={{
                          background:
                            tier.accent === "#fff"
                              ? "rgba(255,255,255,0.18)"
                              : "rgba(76,29,149,0.12)",
                          color: tier.accent,
                        }}
                      >
                        {tier.drRange}
                      </span>
                    </div>
                    <div
                      className="mt-3 text-[12.5px] leading-[1.45] opacity-90"
                    >
                      {tier.examples}
                    </div>
                    <div
                      className="mt-3 pt-3 border-t text-[11.5px] font-semibold flex items-center justify-between"
                      style={{
                        borderColor:
                          tier.accent === "#fff"
                            ? "rgba(255,255,255,0.18)"
                            : "rgba(76,29,149,0.15)",
                        opacity: 0.95,
                      }}
                    >
                      <span>Our cadence</span>
                      <span>{tier.cadence}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: explainer + never list */}
          <div>
            <h3
              className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              Why a pyramid, not a grid?
            </h3>
            <p
              className="mt-4 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              The foundation supports the peak. You can&rsquo;t earn Forbes
              placements with nothing underneath them — Google scores your{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                entire link graph
              </span>
              . Tier 3 citations build the legitimacy profile. Tier 2 industry
              links compound topical authority. Tier 1 editorial links are the
              ranking accelerant on top.
            </p>

            <div
              className="mt-6 p-5 rounded-[var(--radius-lg)]"
              style={{
                background: "rgba(239,68,68,0.04)",
                border: "1px solid rgba(239,68,68,0.18)",
              }}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                style={{ color: "#DC2626" }}
              >
                What we never do
              </div>
              <ul className="mt-3 space-y-2">
                {neverList.map((n) => (
                  <li key={n} className="flex items-start gap-2.5">
                    <span
                      className="mt-[3px] inline-flex items-center justify-center w-[18px] h-[18px] rounded-full shrink-0"
                      style={{
                        background: "rgba(239,68,68,0.12)",
                        color: "#DC2626",
                      }}
                    >
                      <X className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span
                      className="text-[14px] leading-[1.45]"
                      style={{ color: "var(--ink)" }}
                    >
                      {n}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-4 pt-3 border-t text-[12.5px] leading-[1.5]"
                style={{
                  borderColor: "rgba(239,68,68,0.18)",
                  color: "var(--muted)",
                }}
              >
                Every link is editorial, relationship-based, and recoverable —
                audit-safe under any Google spam update.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

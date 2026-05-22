import { SectionHeader } from "@/components/ui/section-header"
import {
  Check,
  X,
  Minus,
  ArrowRight,
  Star,
  User,
  Users,
  Briefcase,
  Building2,
} from "lucide-react"

type Cell = "yes" | "no" | "partial"

type Column = {
  name: string
  subtitle: string
  cost: string
  costNote: string
  Icon: typeof User
  recommended?: boolean
  capabilities: Cell[]
}

const capabilities = [
  "Pixel + Conversions API installed correctly",
  "Weekly creative refresh (Reels + static + carousel)",
  "Advantage+ campaign tuning + audience floors",
  "Lead-form ads + real-time CRM sync",
  "Offline conversion uploads (booked jobs)",
  "Funnel-stage audience exclusion tree",
  "Monthly creative production (4–8 assets)",
  "Flat-fee, no % of spend",
]

const columns: Column[] = [
  {
    name: "DIY",
    subtitle: "You + Boost Post button",
    cost: "Your time",
    costNote: "10–15 hrs/wk",
    Icon: User,
    capabilities: ["no", "no", "no", "no", "no", "no", "no", "yes"],
  },
  {
    name: "In-House Specialist",
    subtitle: "1 paid social manager",
    cost: "$70K+/yr",
    costNote: "+ benefits + tools",
    Icon: Users,
    capabilities: ["partial", "partial", "yes", "partial", "partial", "yes", "no", "partial"],
  },
  {
    name: "Freelancer",
    subtitle: "1 generalist marketer",
    cost: "$1.5–4K/mo",
    costNote: "varies wildly",
    Icon: Briefcase,
    capabilities: ["partial", "no", "partial", "partial", "no", "partial", "no", "partial"],
  },
  {
    name: "Other Agency",
    subtitle: "Mid-size shop",
    cost: "% of spend",
    costNote: "+ setup fees",
    Icon: Building2,
    capabilities: ["yes", "partial", "partial", "yes", "partial", "partial", "partial", "no"],
  },
  {
    name: "Max Market Pros",
    subtitle: "Full team + system",
    cost: "Fixed monthly",
    costNote: "all-inclusive",
    Icon: Star,
    recommended: true,
    capabilities: ["yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes"],
  },
]

function CellIcon({ cell }: { cell: Cell }) {
  if (cell === "yes")
    return (
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center"
        style={{ background: "rgba(34,197,94,0.14)", color: "#15803D" }}
      >
        <Check className="w-3.5 h-3.5" strokeWidth={3} />
      </span>
    )
  if (cell === "no")
    return (
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center"
        style={{ background: "rgba(239,68,68,0.10)", color: "#B91C1C" }}
      >
        <X className="w-3.5 h-3.5" strokeWidth={3} />
      </span>
    )
  return (
    <span
      className="w-7 h-7 rounded-full flex items-center justify-center"
      style={{ background: "rgba(245,158,11,0.14)", color: "#A16207" }}
    >
      <Minus className="w-3.5 h-3.5" strokeWidth={3} />
    </span>
  )
}

export function FacebookAdsVsAlternatives() {
  return (
    <section
      id="facebook-ads-vs"
      aria-labelledby="facebook-ads-vs-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(24,119,242,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="How it stacks up"
          heading={
            <span id="facebook-ads-vs-heading">
              DIY, freelancer, or{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Facebook Ads agency</span>?
              </span>
            </span>
          }
          paragraph="Most service businesses cycle through Boost Post, a freelancer, and an in-house specialist before they land on a real Facebook Ads agency. Here&rsquo;s the honest comparison &mdash; including where the cheap options actually beat us."
        />

        <div
          className="mt-12 sm:mt-14"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Comparison table */}
          <div
            className="relative overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 pb-2"
            style={{ scrollbarWidth: "thin" }}
          >
            <div
              className="grid gap-3 min-w-[860px]"
              style={{
                gridTemplateColumns:
                  "minmax(220px,1.4fr) repeat(5, minmax(140px, 1fr))",
              }}
            >
              {/* Empty corner */}
              <div />
              {/* Column headers */}
              {columns.map((c) => (
                <div
                  key={c.name}
                  className="relative rounded-[var(--radius-lg)] overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    border: c.recommended
                      ? "2px solid var(--accent)"
                      : "1px solid var(--border-color)",
                    boxShadow: c.recommended
                      ? "0 4px 24px rgba(22,119,255,0.20), 0 1px 3px var(--shadow-color)"
                      : "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
                    transform: c.recommended ? "scale(1.02)" : "none",
                    zIndex: c.recommended ? 2 : 1,
                  }}
                >
                  {c.recommended && (
                    <div
                      className="text-center text-[10px] font-extrabold uppercase tracking-[0.14em] py-1.5"
                      style={{
                        background:
                          "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                        color: "#fff",
                      }}
                    >
                      <span className="inline-flex items-center gap-1">
                        <Star
                          className="w-3 h-3"
                          strokeWidth={2.75}
                          fill="#fff"
                        />
                        Most complete
                      </span>
                    </div>
                  )}
                  <div className="px-3 py-4 flex flex-col items-center text-center">
                    <span
                      className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                      style={{
                        background: c.recommended
                          ? "rgba(22,119,255,0.10)"
                          : "var(--bg)",
                        color: c.recommended ? "var(--accent)" : "var(--muted)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      <c.Icon className="w-5 h-5" strokeWidth={2.25} />
                    </span>
                    <h3
                      className="mt-2 text-[14.5px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {c.name}
                    </h3>
                    <p
                      className="mt-0.5 text-[11.5px] font-medium"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.subtitle}
                    </p>
                    <div
                      className="mt-2 pt-2 border-t w-full"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div
                        className="text-[14px] font-extrabold leading-tight"
                        style={{
                          color: c.recommended
                            ? "var(--accent)"
                            : "var(--ink)",
                        }}
                      >
                        {c.cost}
                      </div>
                      <div
                        className="text-[10.5px]"
                        style={{ color: "var(--muted)" }}
                      >
                        {c.costNote}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Rows */}
              {capabilities.map((cap, rowIdx) => (
                <RowGroup
                  key={cap}
                  label={cap}
                  cells={columns.map((c) => c.capabilities[rowIdx])}
                  highlightCol={columns.findIndex((c) => c.recommended)}
                />
              ))}
            </div>
          </div>

          {/* Inline CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span
              className="text-[15.5px]"
              style={{ color: "var(--muted)" }}
            >
              Tired of paying a percent of spend for one Reel a month?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "var(--accent)" }}
            >
              Switch to a flat-fee Facebook Ads agency
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function RowGroup({
  label,
  cells,
  highlightCol,
}: {
  label: string
  cells: Cell[]
  highlightCol: number
}) {
  return (
    <>
      <div
        className="flex items-center px-4 py-3.5 rounded-[var(--radius-sm)] text-[14px] font-semibold"
        style={{
          background: "var(--bg)",
          color: "var(--ink)",
          border: "1px solid var(--border-color)",
        }}
      >
        {label}
      </div>
      {cells.map((cell, i) => (
        <div
          key={i}
          className="flex items-center justify-center py-3.5 rounded-[var(--radius-sm)]"
          style={{
            background:
              i === highlightCol
                ? "rgba(22,119,255,0.06)"
                : "var(--surface)",
            border:
              i === highlightCol
                ? "1px solid rgba(22,119,255,0.25)"
                : "1px solid var(--border-color)",
          }}
        >
          <CellIcon cell={cell} />
        </div>
      ))}
    </>
  )
}

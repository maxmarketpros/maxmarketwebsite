import { SectionHeader } from "@/components/ui/section-header"
import { Check, X, Minus, ArrowRight, Star, User, Users } from "lucide-react"

type Cell = "yes" | "no" | "partial"

type Column = {
  name: string
  subtitle: string
  cost: string
  costNote: string
  logo:
    | { type: "favicon"; domain: string }
    | { type: "lucide"; Icon: typeof User }
  recommended?: boolean
  capabilities: Cell[]
}

const capabilities = [
  "Multi-platform posting",
  "Content production (video + design)",
  "Caption + hashtag writing",
  "Community management & DMs",
  "Analytics + monthly reporting",
  "Strategy + dedicated team",
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const columns: Column[] = [
  {
    name: "DIY",
    subtitle: "You + a phone",
    cost: "Your time",
    costNote: "10–15 hrs/wk",
    logo: { type: "lucide", Icon: User },
    capabilities: ["partial", "no", "yes", "partial", "no", "no"],
  },
  {
    name: "In-House",
    subtitle: "1 social manager",
    cost: "$60K+/yr",
    costNote: "+ benefits",
    logo: { type: "lucide", Icon: Users },
    capabilities: ["yes", "partial", "yes", "yes", "partial", "partial"],
  },
  {
    name: "Freelancer",
    subtitle: "1 generalist",
    cost: "$1.5–4K/mo",
    costNote: "varies wildly",
    logo: { type: "lucide", Icon: User },
    capabilities: ["yes", "partial", "yes", "no", "partial", "no"],
  },
  {
    name: "Hootsuite",
    subtitle: "Scheduling tool",
    cost: "$99/mo",
    costNote: "software only",
    logo: { type: "favicon", domain: "hootsuite.com" },
    capabilities: ["yes", "no", "no", "partial", "yes", "no"],
  },
  {
    name: "Sprout Social",
    subtitle: "Scheduling tool",
    cost: "$249/mo",
    costNote: "software only",
    logo: { type: "favicon", domain: "sproutsocial.com" },
    capabilities: ["yes", "no", "no", "partial", "yes", "no"],
  },
  {
    name: "Max Market Pros",
    subtitle: "Full team + system",
    cost: "Fixed monthly",
    costNote: "all-inclusive",
    logo: { type: "favicon", domain: "maxmarketpros.com" },
    recommended: true,
    capabilities: ["yes", "yes", "yes", "yes", "yes", "yes"],
  },
]

const otherTools = [
  { name: "Buffer", domain: "buffer.com" },
  { name: "Later", domain: "later.com" },
  { name: "Loomly", domain: "loomly.com" },
  { name: "SocialBee", domain: "socialbee.com" },
  { name: "Planoly", domain: "planoly.com" },
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

export function ManagementVsAlternatives() {
  return (
    <section
      id="management-vs"
      aria-labelledby="management-vs-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 70%)",
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
          pill="Why Outsourced > Software"
          heading={
            <span id="management-vs-heading">
              Hootsuite is software. We&rsquo;re the team{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">using</span> it.
              </span>
            </span>
          }
          paragraph="Most social media management tools just schedule posts. Our social media management service plans the strategy, produces the content, writes the captions, talks to your followers, and reports the results — every month."
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
              className="grid gap-3 min-w-[920px]"
              style={{
                gridTemplateColumns:
                  "minmax(200px,1.2fr) repeat(6, minmax(140px, 1fr))",
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
                      className="w-10 h-10 rounded-[12px] flex items-center justify-center overflow-hidden"
                      style={{
                        background: "#fff",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      {c.logo.type === "favicon" ? (
                        <img
                          src={favicon(c.logo.domain, 128)}
                          alt={`${c.name} logo`}
                          width={22}
                          height={22}
                          loading="lazy"
                          decoding="async"
                          className="w-[22px] h-[22px] object-contain"
                        />
                      ) : (
                        <c.logo.Icon
                          className="w-5 h-5"
                          strokeWidth={2.25}
                          style={{ color: "var(--muted)" }}
                        />
                      )}
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

          {/* Other tools strip */}
          <div
            className="mt-8 px-5 sm:px-6 py-4 rounded-[var(--radius-lg)] flex flex-col sm:flex-row items-center gap-3 sm:gap-5"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow: "0 1px 3px var(--shadow-color)",
            }}
          >
            <span
              className="text-[11.5px] font-bold uppercase tracking-[0.12em] shrink-0"
              style={{ color: "var(--muted)" }}
            >
              Already using
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {otherTools.map((t) => (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  <img
                    src={favicon(t.domain, 64)}
                    alt={t.name}
                    width={16}
                    height={16}
                    loading="lazy"
                    decoding="async"
                    className="w-[16px] h-[16px] object-contain"
                  />
                  {t.name}
                </span>
              ))}
            </div>
            <span
              className="sm:ml-auto text-[13px] sm:text-right"
              style={{ color: "var(--muted)" }}
            >
              We use them under the hood, so you don&rsquo;t have to.
            </span>
          </div>

          {/* Inline CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span
              className="text-[15.5px]"
              style={{ color: "var(--muted)" }}
            >
              Done buying tools and still posting nothing?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "var(--accent)" }}
            >
              Switch to a real team
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

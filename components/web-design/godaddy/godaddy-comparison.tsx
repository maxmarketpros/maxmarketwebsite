import { SectionHeader } from "@/components/ui/section-header"
import { Check, X, Minus, ArrowRight, Star, User, Wrench } from "lucide-react"

type Cell = "yes" | "no" | "partial"

type Column = {
  name: string
  subtitle: string
  cost: string
  costNote: string
  logo:
    | { type: "favicon"; domain: string }
    | { type: "lucide"; Icon: typeof User }
    | { type: "asset"; src: string; alt: string }
  recommended?: boolean
  capabilities: Cell[]
}

const capabilities = [
  "Custom design (not a template)",
  "Mobile-first layout",
  "On-page SEO + schema",
  "Speed / Core Web Vitals tuning",
  "Lead-capture forms + tap-to-call",
  "Ongoing GoDaddy support",
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const columns: Column[] = [
  {
    name: "GoDaddy DIY template",
    subtitle: "Stock Websites + Marketing",
    cost: "$10–25/mo",
    costNote: "+ your nights",
    logo: { type: "asset", src: "/partners/godaddy-logo.svg", alt: "GoDaddy logo" },
    capabilities: ["partial", "partial", "no", "no", "partial", "no"],
  },
  {
    name: "Random freelancer",
    subtitle: "Single contractor",
    cost: "$300–$1.5K",
    costNote: "one-time",
    logo: { type: "favicon", domain: "fiverr.com" },
    capabilities: ["partial", "partial", "no", "no", "partial", "no"],
  },
  {
    name: "GoDaddy concierge",
    subtitle: "GoDaddy in-house",
    cost: "$1–3K + $30/mo",
    costNote: "templated",
    logo: { type: "asset", src: "/partners/godaddy-logo.svg", alt: "GoDaddy concierge" },
    capabilities: ["partial", "yes", "partial", "no", "partial", "partial"],
  },
  {
    name: "Generic web agency",
    subtitle: "Platform-agnostic",
    cost: "$5–18K",
    costNote: "+ retainer",
    logo: { type: "lucide", Icon: Wrench },
    capabilities: ["yes", "yes", "partial", "partial", "yes", "no"],
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

export function GoDaddyComparison() {
  return (
    <section
      id="godaddy-comparison"
      aria-labelledby="godaddy-comparison-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(27,219,219,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Why us > the alternatives"
          heading={
            <span id="godaddy-comparison-heading">
              GoDaddy website design,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">done right</span>.
              </span>
            </span>
          }
          paragraph="Four other ways to get a GoDaddy site — and what each one trades away. We're the only option that ships every layer of the stack on every project."
        />

        <div
          className="mt-12 sm:mt-14"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            className="relative overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 pb-2"
            style={{ scrollbarWidth: "thin" }}
          >
            <div
              className="grid gap-3 min-w-[980px]"
              style={{
                gridTemplateColumns:
                  "minmax(220px,1.2fr) repeat(5, minmax(150px, 1fr))",
              }}
            >
              <div />
              {columns.map((c) => (
                <div
                  key={c.name}
                  className="relative rounded-[var(--radius-lg)] overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    border: c.recommended
                      ? "2px solid #1BDBDB"
                      : "1px solid var(--border-color)",
                    boxShadow: c.recommended
                      ? "0 4px 24px rgba(27,219,219,0.28), 0 1px 3px var(--shadow-color)"
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
                          "linear-gradient(180deg, #1BDBDB 0%, #0FB3B3 100%)",
                        color: "#0B132B",
                      }}
                    >
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-3 h-3" strokeWidth={2.75} fill="#0B132B" />
                        Most complete
                      </span>
                    </div>
                  )}
                  <div className="px-3 py-4 flex flex-col items-center text-center">
                    <span
                      className="w-10 h-10 rounded-[12px] flex items-center justify-center overflow-hidden p-1"
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
                      ) : c.logo.type === "lucide" ? (
                        <c.logo.Icon
                          className="w-5 h-5"
                          strokeWidth={2.25}
                          style={{ color: "var(--muted)" }}
                        />
                      ) : (
                        <img
                          src={c.logo.src}
                          alt={c.logo.alt}
                          width={32}
                          height={10}
                          loading="lazy"
                          decoding="async"
                          className="h-[10px] w-auto object-contain"
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
                          color: c.recommended ? "#0FB3B3" : "var(--ink)",
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

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Tired of generic GoDaddy templates?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "#0FB3B3" }}
            >
              Get a real GoDaddy website design quote
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
              i === highlightCol ? "rgba(27,219,219,0.08)" : "var(--surface)",
            border:
              i === highlightCol
                ? "1px solid rgba(27,219,219,0.30)"
                : "1px solid var(--border-color)",
          }}
        >
          <CellIcon cell={cell} />
        </div>
      ))}
    </>
  )
}

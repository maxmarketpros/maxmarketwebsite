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
  "Custom Wix design (not a template)",
  "Wix Editor + Wix Studio fluent",
  "App Market wired (Bookings/Stores/Members)",
  "Velo by Wix custom code",
  "Wix schema markup + Lighthouse 90+",
  "Migration from Wix to anywhere",
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const columns: Column[] = [
  {
    name: "DIY Wix template",
    subtitle: "Wix ADI / pre-made",
    cost: "$17–49/mo",
    costNote: "+ your nights",
    logo: { type: "asset", src: "/partners/wix-logo.png", alt: "Wix logo" },
    capabilities: ["partial", "no", "partial", "no", "no", "no"],
  },
  {
    name: "Random freelancer",
    subtitle: "Single Wix contractor",
    cost: "$400–$2K",
    costNote: "one-time",
    logo: { type: "favicon", domain: "fiverr.com" },
    capabilities: ["partial", "partial", "partial", "no", "no", "no"],
  },
  {
    name: "Wix Marketplace pro",
    subtitle: "Wix-vetted designer",
    cost: "$1.5–6K + retainer",
    costNote: "design only",
    logo: { type: "asset", src: "/partners/wix-logo.png", alt: "Wix Marketplace" },
    capabilities: ["yes", "partial", "partial", "partial", "no", "partial"],
  },
  {
    name: "Generic web agency",
    subtitle: "Platform-agnostic",
    cost: "$5–18K",
    costNote: "+ retainer",
    logo: { type: "lucide", Icon: Wrench },
    capabilities: ["yes", "yes", "partial", "partial", "partial", "no"],
  },
  {
    name: "Max Market Pros",
    subtitle: "Full team + Wix system",
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
        style={{ background: "rgba(214,255,85,0.32)", color: "#0B0B0B" }}
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

export function WixComparison() {
  return (
    <section
      id="wix-comparison"
      aria-labelledby="wix-comparison-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(214,255,85,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11,11,11,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Why us > the alternatives"
          heading={
            <span id="wix-comparison-heading">
              Wix website design,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">done right</span>.
              </span>
            </span>
          }
          paragraph="Four other ways to get a Wix site — and what each one trades away. We're the only option that ships every layer of the stack on every Wix website design project."
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
                      ? "2px solid #D6FF55"
                      : "1px solid var(--border-color)",
                    boxShadow: c.recommended
                      ? "0 4px 24px rgba(214,255,85,0.36), 0 1px 3px var(--shadow-color)"
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
                          "linear-gradient(180deg, #D6FF55 0%, #B8E840 100%)",
                        color: "#0B0B0B",
                      }}
                    >
                      <span className="inline-flex items-center gap-1">
                        <Star
                          className="w-3 h-3"
                          strokeWidth={2.75}
                          fill="#0B0B0B"
                        />
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
                          height={14}
                          loading="lazy"
                          decoding="async"
                          className="h-[14px] w-auto object-contain"
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
                          color: c.recommended ? "#0B0B0B" : "var(--ink)",
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

          {/* Cross-platform footer */}
          <div
            className="mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12.5px]"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--muted)",
            }}
          >
            <span>Comparing platforms?</span>
            <a
              href="/services/web-design/squarespace"
              className="font-semibold hover:underline"
              style={{ color: "var(--ink)" }}
            >
              Squarespace design
            </a>
            <a
              href="/services/web-design/godaddy"
              className="font-semibold hover:underline"
              style={{ color: "var(--ink)" }}
            >
              GoDaddy design
            </a>
            <a
              href="/services/web-design"
              className="font-semibold hover:underline"
              style={{ color: "var(--ink)" }}
            >
              All platforms →
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Done with cookie-cutter Wix templates?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "#0B0B0B" }}
            >
              Get a real Wix website design quote
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
              i === highlightCol ? "rgba(214,255,85,0.10)" : "var(--surface)",
            border:
              i === highlightCol
                ? "1px solid rgba(214,255,85,0.40)"
                : "1px solid var(--border-color)",
          }}
        >
          <CellIcon cell={cell} />
        </div>
      ))}
    </>
  )
}

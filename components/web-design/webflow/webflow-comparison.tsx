import { SectionHeader } from "@/components/ui/section-header"
import { Check, X, Minus, ArrowRight, Star, Code2 } from "lucide-react"
import { WebflowGlyph } from "./webflow-hero"

const WF_BLUE = "#146EF5"

type Cell = "yes" | "no" | "partial"

type Column = {
  name: string
  subtitle: string
  cost: string
  costNote: string
  logo:
    | { type: "favicon"; domain: string }
    | { type: "lucide"; Icon: typeof Code2 }
    | { type: "webflow" }
  recommended?: boolean
  capabilities: Cell[]
}

const capabilities = [
  "Pixel-perfect designer canvas",
  "Built-in interactions engine",
  "CMS for dynamic pages",
  "Managed hosting + auto SSL",
  "Plugin-free SEO + schema",
  "Lighthouse 90+ on mobile",
  "Client-safe edit mode",
  "No platform lock-in (export)",
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const columns: Column[] = [
  {
    name: "Squarespace",
    subtitle: "Template-first builder",
    cost: "$23–65/mo",
    costNote: "DIY effort",
    logo: { type: "favicon", domain: "squarespace.com" },
    capabilities: ["partial", "no", "partial", "yes", "partial", "partial", "yes", "no"],
  },
  {
    name: "Wix",
    subtitle: "Drag-and-drop + Studio",
    cost: "$17–59/mo",
    costNote: "DIY effort",
    logo: { type: "favicon", domain: "wix.com" },
    capabilities: ["yes", "partial", "yes", "yes", "partial", "partial", "yes", "no"],
  },
  {
    name: "GoDaddy",
    subtitle: "AI website builder",
    cost: "$10–25/mo",
    costNote: "DIY effort",
    logo: { type: "favicon", domain: "godaddy.com" },
    capabilities: ["no", "no", "no", "yes", "no", "no", "yes", "no"],
  },
  {
    name: "WordPress",
    subtitle: "Self-hosted + plugins",
    cost: "$8–60/mo",
    costNote: "+ plugin licenses",
    logo: { type: "favicon", domain: "wordpress.org" },
    capabilities: ["partial", "no", "yes", "no", "no", "partial", "partial", "yes"],
  },
  {
    name: "Custom-coded",
    subtitle: "Hand-rolled HTML / React",
    cost: "$15–60K+",
    costNote: "+ hosting + dev",
    logo: { type: "lucide", Icon: Code2 },
    capabilities: ["yes", "no", "yes", "no", "yes", "yes", "no", "yes"],
  },
  {
    name: "Webflow + MMP",
    subtitle: "Full Webflow build, by us",
    cost: "Fixed monthly",
    costNote: "all-inclusive",
    logo: { type: "webflow" },
    recommended: true,
    capabilities: ["yes", "yes", "yes", "yes", "yes", "yes", "yes", "partial"],
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

export function WebflowComparison() {
  return (
    <section
      id="webflow-comparison"
      aria-labelledby="webflow-comparison-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11,19,43,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,110,245,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Webflow vs the rest"
          heading={
            <span id="webflow-comparison-heading">
              Webflow website design,{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(20,110,245,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  vs the field
                </span>
                .
              </span>
            </span>
          }
          paragraph="Five other ways to ship a service-business website — and what each one trades away. Webflow plus our team is the only column that ships every layer on every project."
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
              className="grid gap-3 min-w-[1080px]"
              style={{
                gridTemplateColumns:
                  "minmax(220px,1.2fr) repeat(6, minmax(140px, 1fr))",
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
                      ? `2px solid ${WF_BLUE}`
                      : "1px solid var(--border-color)",
                    boxShadow: c.recommended
                      ? `0 4px 24px rgba(20,110,245,0.20), 0 1px 3px var(--shadow-color)`
                      : "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
                    transform: c.recommended ? "scale(1.02)" : "none",
                    zIndex: c.recommended ? 2 : 1,
                  }}
                >
                  {c.recommended && (
                    <div
                      className="text-center text-[10px] font-extrabold uppercase tracking-[0.14em] py-1.5"
                      style={{
                        background: WF_BLUE,
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
                      ) : c.logo.type === "lucide" ? (
                        <c.logo.Icon
                          className="w-5 h-5"
                          strokeWidth={2.25}
                          style={{ color: "var(--muted)" }}
                        />
                      ) : (
                        <WebflowGlyph size={20} />
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
                          color: c.recommended ? WF_BLUE : "var(--ink)",
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
              Done shopping platforms?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: WF_BLUE }}
            >
              Get a real Webflow website design quote
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px]">
            <span style={{ color: "var(--muted)" }}>Prefer another platform?</span>
            <a
              href="/services/web-design/squarespace"
              className="font-semibold hover:underline"
              style={{ color: WF_BLUE }}
            >
              Squarespace
            </a>
            <a
              href="/services/web-design/wix"
              className="font-semibold hover:underline"
              style={{ color: WF_BLUE }}
            >
              Wix
            </a>
            <a
              href="/services/web-design/godaddy"
              className="font-semibold hover:underline"
              style={{ color: WF_BLUE }}
            >
              GoDaddy
            </a>
            <a
              href="/services/web-design/wordpress"
              className="font-semibold hover:underline"
              style={{ color: WF_BLUE }}
            >
              WordPress
            </a>
            <a
              href="/services/web-design"
              className="font-semibold hover:underline"
              style={{ color: WF_BLUE }}
            >
              See all platforms →
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
                ? "rgba(20,110,245,0.06)"
                : "var(--surface)",
            border:
              i === highlightCol
                ? "1px solid rgba(20,110,245,0.30)"
                : "1px solid var(--border-color)",
          }}
        >
          <CellIcon cell={cell} />
        </div>
      ))}
    </>
  )
}

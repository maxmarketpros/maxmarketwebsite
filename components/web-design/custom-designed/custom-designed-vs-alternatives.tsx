import { SectionHeader } from "@/components/ui/section-header"
import { Check, X, Minus, Star, Brush } from "lucide-react"

type Cell = "yes" | "no" | "partial"

type Column = {
  name: string
  href?: string
  blurb: string
  recommended?: boolean
  cells: Cell[]
}

const rows = [
  "On-brand from H1 to footer",
  "Owned type system & color tokens",
  "Custom illustrations & iconography",
  "Layouts tuned to your conversion path",
  "Motion language designed in",
  "Pixel-perfect on every breakpoint",
  "Accessibility (WCAG 2.2 AA) by default",
  "Brand consistency across new pages",
  "No platform / template lock-in",
]

const columns: Column[] = [
  {
    name: "DIY page builder",
    href: "/services/web-design/squarespace",
    blurb: "Click & drag",
    cells: ["no", "no", "no", "partial", "no", "partial", "partial", "no", "no"],
  },
  {
    name: "Premium template",
    href: "/services/web-design/wordpress",
    blurb: "Theme kit",
    cells: ["partial", "partial", "no", "partial", "partial", "partial", "partial", "no", "partial"],
  },
  {
    name: "AI-generated site",
    blurb: "Prompted layout",
    cells: ["no", "no", "no", "no", "no", "no", "no", "no", "no"],
  },
  {
    name: "Custom website design",
    blurb: "Brand-led, hand-crafted",
    recommended: true,
    cells: ["yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes"],
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

export function CustomDesignedVsAlternatives() {
  return (
    <section
      id="custom-designed-vs"
      aria-labelledby="custom-designed-vs-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(244,63,94,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Custom design vs. templates, kits & AI"
          heading={
            <span id="custom-designed-vs-heading">
              Why teams pick a{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(244,63,94,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  custom website design
                </span>
              </span>{" "}
              over a kit.
            </span>
          }
          paragraph="A template gets you online. A custom website design makes the brand the reason people stay. Here's the honest, side-by-side breakdown."
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
              className="grid gap-3 min-w-[860px]"
              style={{
                gridTemplateColumns:
                  "minmax(220px,1.4fr) repeat(4, minmax(150px, 1fr))",
              }}
            >
              <div />
              {columns.map((c) => (
                <a
                  key={c.name}
                  href={c.href ?? "#contact"}
                  className="relative rounded-[var(--radius-lg)] overflow-hidden block transition-transform hover:translate-y-[-2px]"
                  style={{
                    background: "var(--surface)",
                    border: c.recommended
                      ? "2px solid #F43F5E"
                      : "1px solid var(--border-color)",
                    boxShadow: c.recommended
                      ? "0 4px 24px rgba(244,63,94,0.20), 0 1px 3px var(--shadow-color)"
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
                          "linear-gradient(180deg, #F43F5E 0%, #E11D48 100%)",
                        color: "#fff",
                      }}
                    >
                      <span className="inline-flex items-center gap-1">
                        <Star
                          className="w-3 h-3"
                          strokeWidth={2.75}
                          fill="#fff"
                        />
                        Recommended
                      </span>
                    </div>
                  )}
                  <div className="px-3 py-4 flex flex-col items-center text-center">
                    <span
                      className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                      style={{
                        background: c.recommended
                          ? "linear-gradient(135deg, #F43F5E 0%, #8B5CF6 100%)"
                          : "#fff",
                        border: c.recommended
                          ? "none"
                          : "1px solid var(--border-color)",
                        color: c.recommended ? "#fff" : "var(--muted)",
                      }}
                    >
                      <Brush className="w-5 h-5" strokeWidth={2.25} />
                    </span>
                    <h3
                      className="mt-2 text-[14.5px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {c.name}
                    </h3>
                    <p
                      className="mt-0.5 text-[11px]"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.blurb}
                    </p>
                  </div>
                </a>
              ))}

              {rows.map((row, rowIdx) => (
                <RowGroup
                  key={row}
                  label={row}
                  cells={columns.map((c) => c.cells[rowIdx])}
                  highlightCol={columns.findIndex((c) => c.recommended)}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Already on a builder and outgrew it?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px]"
              style={{ color: "var(--accent)" }}
            >
              Get a custom design quote →
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
                ? "rgba(244,63,94,0.06)"
                : "var(--surface)",
            border:
              i === highlightCol
                ? "1px solid rgba(244,63,94,0.25)"
                : "1px solid var(--border-color)",
          }}
        >
          <CellIcon cell={cell} />
        </div>
      ))}
    </>
  )
}

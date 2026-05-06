import { SectionHeader } from "@/components/ui/section-header"
import { Check, X, Minus, Star, Code2 } from "lucide-react"

type Cell = "yes" | "no" | "partial"

type Column = {
  name: string
  href?: string
  domain?: string
  recommended?: boolean
  cells: Cell[]
}

const rows = [
  "Lighthouse 100 ceiling on mobile",
  "Sub-50kB JS bundle control",
  "Edge / SSR / RSC rendering",
  "Custom animation freedom",
  "Custom backend & API routes",
  "Full code ownership (export & self-host)",
  "No plugin / template bloat",
  "No platform lock-in",
  "Custom integrations without rebuilds",
]

function favicon(domain: string, size = 64) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const columns: Column[] = [
  {
    name: "Squarespace",
    href: "/services/web-design/squarespace",
    domain: "squarespace.com",
    cells: ["no", "no", "no", "partial", "no", "no", "partial", "no", "no"],
  },
  {
    name: "Wix",
    href: "/services/web-design/wix",
    domain: "wix.com",
    cells: ["no", "no", "no", "partial", "partial", "no", "no", "no", "partial"],
  },
  {
    name: "WordPress",
    href: "/services/web-design/wordpress",
    domain: "wordpress.org",
    cells: [
      "partial",
      "partial",
      "no",
      "partial",
      "partial",
      "yes",
      "no",
      "partial",
      "partial",
    ],
  },
  {
    name: "Webflow",
    href: "/services/web-design/webflow",
    domain: "webflow.com",
    cells: [
      "partial",
      "partial",
      "no",
      "yes",
      "partial",
      "partial",
      "yes",
      "no",
      "partial",
    ],
  },
  {
    name: "Custom Coded",
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

export function CustomCodedVsBuilders() {
  return (
    <section
      id="custom-coded-vs-builders"
      aria-labelledby="custom-coded-vs-builders-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
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
              "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Custom coded vs. drag-and-drop"
          heading={
            <span id="custom-coded-vs-builders-heading">
              Why teams move off{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Squarespace, Wix,</span>
              </span>{" "}
              and WordPress.
            </span>
          }
          paragraph="A custom coded website unlocks performance, ownership, and design freedom that template builders cap by design. Here's the honest, head-to-head breakdown."
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
                  "minmax(220px,1.4fr) repeat(5, minmax(140px, 1fr))",
              }}
            >
              {/* empty corner */}
              <div />
              {/* column headers */}
              {columns.map((c) => (
                <a
                  key={c.name}
                  href={c.href ?? "#contact"}
                  className="relative rounded-[var(--radius-lg)] overflow-hidden block transition-transform hover:translate-y-[-2px]"
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
                        Recommended
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
                      {c.recommended ? (
                        <Code2
                          className="w-5 h-5"
                          strokeWidth={2.25}
                          style={{ color: "var(--accent)" }}
                        />
                      ) : c.domain ? (
                        <img
                          src={favicon(c.domain, 128)}
                          alt={`${c.name} logo`}
                          width={22}
                          height={22}
                          loading="lazy"
                          decoding="async"
                          className="w-[22px] h-[22px] object-contain"
                        />
                      ) : null}
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
                      {c.recommended ? "Hand-built React" : "Template builder"}
                    </p>
                  </div>
                </a>
              ))}

              {/* Rows */}
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
              Already on a builder and ready to migrate?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px]"
              style={{ color: "var(--accent)" }}
            >
              Get a migration plan →
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

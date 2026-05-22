import { SectionHeader } from "@/components/ui/section-header"
import {
  Check,
  X,
  Minus,
  ArrowRight,
  Star,
  User,
  Store,
  Briefcase,
} from "lucide-react"

type Cell = "yes" | "no" | "partial"

type Column = {
  name: string
  subtitle: string
  cost: string
  costNote: string
  logo:
    | { type: "favicon"; domain: string }
    | { type: "lucide"; Icon: typeof User }
    | { type: "monogram"; text: string; bg: string; color: string }
  recommended?: boolean
  capabilities: Cell[]
}

const capabilities = [
  "Conversion-focused layout",
  "Custom CSS / code injection",
  "On-page SEO done right",
  "Schema markup on every page",
  "Mobile Lighthouse 90+",
  "Lead capture + CRM hookup",
  "Post-launch support",
  "Predictable monthly cost",
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const columns: Column[] = [
  {
    name: "DIY template",
    subtitle: "Stock Squarespace",
    cost: "$16/mo+",
    costNote: "+ your nights",
    logo: { type: "favicon", domain: "squarespace.com" },
    capabilities: ["partial", "no", "partial", "no", "partial", "no", "no", "yes"],
  },
  {
    name: "Fiverr freelancer",
    subtitle: "Single contractor",
    cost: "$300–$1.5K",
    costNote: "one-time",
    logo: { type: "favicon", domain: "fiverr.com" },
    capabilities: ["partial", "partial", "no", "no", "partial", "partial", "no", "no"],
  },
  {
    name: "Squarespace Circle",
    subtitle: "Solo designer",
    cost: "$3–8K",
    costNote: "one-time",
    logo: { type: "monogram", text: "Sq", bg: "#0B0B0B", color: "#fff" },
    capabilities: ["yes", "partial", "partial", "partial", "partial", "partial", "partial", "no"],
  },
  {
    name: "Generic web agency",
    subtitle: "Platform-agnostic",
    cost: "$8–25K",
    costNote: "+ retainer",
    logo: { type: "lucide", Icon: Briefcase },
    capabilities: ["yes", "yes", "partial", "partial", "yes", "yes", "partial", "no"],
  },
  {
    name: "Cheap template shop",
    subtitle: "Pre-built kits",
    cost: "$200–$600",
    costNote: "you install",
    logo: { type: "lucide", Icon: Store },
    capabilities: ["partial", "no", "no", "no", "partial", "no", "no", "yes"],
  },
  {
    name: "Max Market Pros",
    subtitle: "Full team + system",
    cost: "Fixed monthly",
    costNote: "all-inclusive",
    logo: { type: "favicon", domain: "maxmarketpros.com" },
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

export function SquarespaceComparison() {
  return (
    <section
      id="squarespace-comparison"
      aria-labelledby="squarespace-comparison-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11,11,11,0.06) 0%, transparent 70%)",
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
          pill="Why us > the alternatives"
          heading={
            <span id="squarespace-comparison-heading">
              Squarespace website design,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">done right</span>.
              </span>
            </span>
          }
          paragraph="The five other ways to get a Squarespace site — and what each one trades away. We're the only option that ships every layer of the stack on every project."
        />

        <div
          className="mt-12 sm:mt-14"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            className="relative overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 pb-2 hidden md:block"
            style={{ scrollbarWidth: "thin" }}
          >
            <div
              className="grid gap-3 min-w-[1020px]"
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
                      ) : c.logo.type === "lucide" ? (
                        <c.logo.Icon
                          className="w-5 h-5"
                          strokeWidth={2.25}
                          style={{ color: "var(--muted)" }}
                        />
                      ) : (
                        <span
                          className="w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-extrabold"
                          style={{
                            background: c.logo.bg,
                            color: c.logo.color,
                            fontFamily: "Outfit, sans-serif",
                            letterSpacing: "-0.04em",
                          }}
                        >
                          {c.logo.text}
                        </span>
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

          <div className="md:hidden space-y-4">
            {columns.map((c) => {
              const recommended = !!c.recommended
              return (
                <article
                  key={c.name}
                  className="relative rounded-[var(--radius-lg)] overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    border: recommended
                      ? "2px solid var(--accent)"
                      : "1px solid var(--border-color)",
                    boxShadow: recommended
                      ? "0 4px 24px rgba(22,119,255,0.20), 0 1px 3px var(--shadow-color)"
                      : "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
                  }}
                >
                  {recommended && (
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
                  <div className="px-4 pt-4 pb-3 flex items-center gap-3">
                    <span
                      className="shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center overflow-hidden"
                      style={{
                        background: "#fff",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      {c.logo.type === "favicon" ? (
                        <img
                          src={favicon(c.logo.domain, 128)}
                          alt={`${c.name} logo`}
                          width={24}
                          height={24}
                          loading="lazy"
                          decoding="async"
                          className="w-6 h-6 object-contain"
                        />
                      ) : c.logo.type === "lucide" ? (
                        <c.logo.Icon
                          className="w-5 h-5"
                          strokeWidth={2.25}
                          style={{ color: "var(--muted)" }}
                        />
                      ) : (
                        <span
                          className="w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-extrabold"
                          style={{
                            background: c.logo.bg,
                            color: c.logo.color,
                            fontFamily: "Outfit, sans-serif",
                            letterSpacing: "-0.04em",
                          }}
                        >
                          {c.logo.text}
                        </span>
                      )}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-[15px] font-bold leading-tight"
                        style={{ color: "var(--ink)" }}
                      >
                        {c.name}
                      </h3>
                      <p
                        className="mt-0.5 text-[12px] font-medium"
                        style={{ color: "var(--muted)" }}
                      >
                        {c.subtitle}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div
                        className="text-[14px] font-extrabold leading-tight"
                        style={{
                          color: recommended
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
                  <ul
                    className="border-t divide-y"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    {capabilities.map((cap, i) => (
                      <li
                        key={cap}
                        className="flex items-center gap-3 px-4 py-2.5"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <CellIcon cell={c.capabilities[i]} />
                        <span
                          className="text-[13.5px] font-medium leading-snug"
                          style={{ color: "var(--ink)" }}
                        >
                          {cap}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Tired of comparing apples to lemons?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "var(--accent)" }}
            >
              Get a real Squarespace website design quote
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px]">
            <span style={{ color: "var(--muted)" }}>Prefer another platform?</span>
            <a
              href="/services/web-design/wordpress"
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              WordPress
            </a>
            <a
              href="/services/web-design/webflow"
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              Webflow
            </a>
            <a
              href="/services/web-design/wix"
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              Wix
            </a>
            <a
              href="/services/web-design"
              className="font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
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


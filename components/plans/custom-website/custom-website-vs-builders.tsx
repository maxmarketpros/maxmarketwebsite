import { Check, Minus, X, Sparkles } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { vsBuilders, vsBuildersRows, type VsCell } from "@/lib/custom-website-data"

const CUSTOM_ACCENT = "#1677FF"

function Cell({ value, accent }: { value: VsCell; accent: string }) {
  if (value === "yes") {
    return (
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full"
        style={{ background: `${accent}1A`, color: accent }}
        aria-label="yes"
      >
        <Check className="w-4 h-4" strokeWidth={3} />
      </span>
    )
  }
  if (value === "partial") {
    return (
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full"
        style={{ background: "rgba(245,158,11,0.14)", color: "#B45309" }}
        aria-label="sort of"
      >
        <Minus className="w-4 h-4" strokeWidth={3} />
      </span>
    )
  }
  return (
    <span
      className="inline-flex items-center justify-center w-7 h-7 rounded-full"
      style={{ background: "rgba(11,19,43,0.06)", color: "var(--muted)" }}
      aria-label="no"
    >
      <X className="w-4 h-4" strokeWidth={2.4} />
    </span>
  )
}

export function CustomWebsiteVsBuilders() {
  return (
    <section
      id="custom-website-vs"
      aria-labelledby="custom-website-vs-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Custom vs DIY builders"
          heading={
            <span id="custom-website-vs-heading">
              Better than a{" "}
              <span className="whitespace-nowrap">
                DIY <span className="accent-underline">template</span>.
              </span>
            </span>
          }
          paragraph="DIY builders are fine for a hobby site. They're not great for a business that needs phone calls."
        />

        <div
          className="mt-12 max-w-[1040px] mx-auto rounded-[var(--radius-xl)] overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 12px 36px var(--shadow-color)",
            animation: "fadeInUp 0.7s ease-out both",
          }}
        >
          {/* Header row */}
          <div
            className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-5 items-end"
            style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-color)" }}
          >
            <span
              className="text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.08em] hidden sm:inline"
              style={{ color: "var(--muted)" }}
            >
              What you actually need
            </span>
            <span className="sm:hidden" />

            {/* Custom column header */}
            <div className="flex flex-col items-center text-center gap-1.5">
              <span
                className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${CUSTOM_ACCENT}E6 0%, #74D3FF 100%)`,
                  color: "#fff",
                  boxShadow: `0 4px 14px ${CUSTOM_ACCENT}55`,
                }}
              >
                <Sparkles className="w-4 h-4" strokeWidth={2.4} />
              </span>
              <span
                className="text-[11px] sm:text-[12.5px] font-bold leading-tight"
                style={{ color: CUSTOM_ACCENT }}
              >
                Our custom build
              </span>
            </div>

            {vsBuilders.map((b) => (
              <div key={b.domain} className="flex flex-col items-center text-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://www.google.com/s2/favicons?domain=${b.domain}&sz=128`}
                  alt={`${b.name} logo`}
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                  className="rounded-[6px]"
                  style={{ width: 28, height: 28 }}
                />
                <span
                  className="text-[11px] sm:text-[12.5px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {b.name}
                </span>
              </div>
            ))}
          </div>

          {/* Rows */}
          <ul>
            {vsBuildersRows.map((row, idx) => (
              <li
                key={row.feature}
                className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-2 sm:gap-3 items-center px-4 sm:px-6 py-3.5 sm:py-4"
                style={{
                  borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                  background: idx % 2 === 1 ? "var(--bg)" : "transparent",
                }}
              >
                <span
                  className="text-[13px] sm:text-[14.5px] font-semibold leading-snug"
                  style={{ color: "var(--ink)" }}
                >
                  {row.feature}
                </span>
                <div className="flex justify-center">
                  <Cell value={row.custom} accent={CUSTOM_ACCENT} />
                </div>
                <div className="flex justify-center">
                  <Cell value={row.godaddy} accent={CUSTOM_ACCENT} />
                </div>
                <div className="flex justify-center">
                  <Cell value={row.wix} accent={CUSTOM_ACCENT} />
                </div>
                <div className="flex justify-center">
                  <Cell value={row.squarespace} accent={CUSTOM_ACCENT} />
                </div>
              </li>
            ))}
          </ul>

          {/* Caveats row */}
          <div
            className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-2 sm:gap-3 items-center px-4 sm:px-6 py-3.5 text-[11.5px]"
            style={{
              borderTop: "1px solid var(--border-color)",
              background: "var(--bg)",
              color: "var(--muted)",
            }}
          >
            <span className="hidden sm:inline font-bold uppercase tracking-[0.08em] text-[10.5px]">
              The trade-off
            </span>
            <span className="sm:hidden" />
            <span className="text-center font-semibold" style={{ color: CUSTOM_ACCENT }}>
              Built for you
            </span>
            {vsBuilders.map((b) => (
              <span key={b.domain} className="text-center leading-tight">
                {b.caveat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

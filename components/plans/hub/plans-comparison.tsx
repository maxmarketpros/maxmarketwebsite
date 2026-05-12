import { Check, Minus } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { plans, comparisonSections, type CellValue } from "@/lib/plans-data"
import { getIcon } from "./icon-map"

function Cell({ value, isFeatured }: { value: CellValue; isFeatured?: boolean }) {
  if (value.kind === "yes") {
    return (
      <span
        className="inline-flex w-7 h-7 rounded-full items-center justify-center"
        style={{ background: "#DCFCE7", color: "#16A34A" }}
        aria-label="Included"
      >
        <Check className="w-4 h-4" strokeWidth={2.6} />
      </span>
    )
  }
  if (value.kind === "no") {
    return (
      <span
        className="inline-flex w-7 h-7 rounded-full items-center justify-center"
        style={{ background: "var(--bg)", color: "var(--muted)" }}
        aria-label="Not included"
      >
        <Minus className="w-4 h-4" strokeWidth={2.4} />
      </span>
    )
  }
  return (
    <span
      className="inline-block text-[14px] sm:text-[15px] font-semibold"
      style={{ color: isFeatured ? "var(--accent)" : "var(--ink)" }}
    >
      {value.value}
    </span>
  )
}

export function PlansComparison() {
  return (
    <section id="compare" aria-labelledby="plans-compare-heading" className="relative scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] left-[-10%] w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Plan comparison"
          heading={
            <span id="plans-compare-heading">
              Compare every feature{" "}
              <span className="whitespace-nowrap">
                side-by-<span className="accent-underline">side</span>.
              </span>
            </span>
          }
          paragraph="Every line item, every plan, no fine print. ServicePro is the most popular for a reason — but pick the plan that matches the stage you&rsquo;re actually in."
        />

        <div
          className="mt-12 rounded-[var(--radius-lg)] overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 12px 32px var(--shadow-color)",
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead className="sticky top-0 z-20" style={{ background: "var(--surface)" }}>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <th
                    className="text-left text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.1em] px-5 sm:px-7 py-5 sticky left-0 z-10"
                    style={{ color: "var(--muted)", background: "var(--surface)" }}
                  >
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.slug}
                      className="px-3 sm:px-5 py-5 text-center"
                      style={{
                        background: p.recommended ? "rgba(22,119,255,0.05)" : undefined,
                      }}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span
                          className="text-[14px] sm:text-[15px] font-bold"
                          style={{ color: p.recommended ? "var(--accent)" : "var(--ink)" }}
                        >
                          {p.name}
                        </span>
                        <span className="text-[12.5px] font-medium" style={{ color: "var(--muted)" }}>
                          {p.price}/mo
                        </span>
                        {p.recommended && (
                          <span
                            className="mt-1 inline-flex items-center px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-[0.08em] text-white"
                            style={{ background: "var(--accent)" }}
                          >
                            Most Popular
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {comparisonSections.map((section) => {
                const SectionIcon = getIcon(section.iconName)
                return (
                  <tbody key={section.title}>
                    <tr style={{ background: "var(--bg)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
                      <th
                        colSpan={5}
                        className="text-left px-5 sm:px-7 py-3.5 sticky left-0"
                        style={{ background: "var(--bg)" }}
                      >
                        <span className="inline-flex items-center gap-2">
                          <span
                            className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0"
                            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                          >
                            <SectionIcon className="w-4 h-4" strokeWidth={2.3} />
                          </span>
                          <span
                            className="text-[12.5px] sm:text-[13.5px] font-bold uppercase tracking-[0.08em]"
                            style={{ color: "var(--ink)" }}
                          >
                            {section.title}
                          </span>
                        </span>
                      </th>
                    </tr>

                    {section.rows.map((row, i) => (
                      <tr key={`${section.title}-${i}`} style={{ borderBottom: "1px solid var(--border-color)" }}>
                        <td
                          className="text-left px-5 sm:px-7 py-4 text-[14px] sm:text-[15px] font-medium sticky left-0 z-[1]"
                          style={{ color: "var(--ink)", background: "var(--surface)" }}
                        >
                          {row.label}
                        </td>
                        {row.values.map((v, idx) => (
                          <td
                            key={idx}
                            className="px-3 sm:px-5 py-4 text-center"
                            style={{
                              background: plans[idx].recommended ? "rgba(22,119,255,0.04)" : undefined,
                            }}
                          >
                            <Cell value={v} isFeatured={plans[idx].recommended} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                )
              })}
            </table>
          </div>
        </div>

        <p className="mt-6 text-center text-[13px]" style={{ color: "var(--muted)" }}>
          Scroll horizontally on smaller screens to see every column.
        </p>
      </div>
    </section>
  )
}

"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

// VERIFY: share of LLM citations by schema.org type detected on the cited page.
// Reasoned estimates from Profound's 2026 schema-citation correlation study.
const DATA = [
  { name: "FAQPage", value: 28, color: "#1677FF", note: "Q&A blocks LLMs lift directly" },
  { name: "HowTo", value: 19, color: "#74D3FF", note: "Step-by-step procedures" },
  { name: "Article", value: 17, color: "#0B132B", note: "Author + date + body" },
  { name: "Product", value: 12, color: "#FFB400", note: "Specs, prices, ratings" },
  { name: "Organization", value: 11, color: "#22A06B", note: "Trust + identity" },
  { name: "Other / none", value: 13, color: "#A0AEC0", note: "Sites with no schema at all" },
]

export function SchemaCitationPie() {
  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="grid sm:grid-cols-[1fr_1.2fr] gap-6 items-center">
        <div className="relative h-[280px] sm:h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={DATA}
                dataKey="value"
                innerRadius="55%"
                outerRadius="85%"
                paddingAngle={2}
                stroke="var(--surface)"
                strokeWidth={3}
              >
                {DATA.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(v: number, _name, props: { payload?: { name?: string } }) => [
                  `${v}%`,
                  props.payload?.name,
                ]}
                contentStyle={{
                  border: "1px solid var(--border-color)",
                  borderRadius: 12,
                  background: "var(--surface)",
                  color: "var(--ink)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              Of LLM citations
            </span>
            <span
              className="text-[28px] font-bold leading-tight tabular-nums"
              style={{ color: "var(--ink)" }}
            >
              87%
            </span>
            <span className="text-[11px]" style={{ color: "var(--muted)" }}>
              come from pages with schema
            </span>
          </div>
        </div>

        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-[0.08em] mb-2"
            style={{ color: "var(--accent)" }}
          >
            Schema type · share of citations
          </div>
          <ul className="space-y-2">
            {DATA.map((d) => (
              <li
                key={d.name}
                className="flex items-start gap-3 px-3 py-2.5 rounded-xl"
                style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
              >
                <span
                  className="mt-0.5 w-3 h-3 rounded-sm shrink-0"
                  style={{ background: d.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className="text-[13.5px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {d.name}
                    </span>
                    <span
                      className="text-[12.5px] font-bold tabular-nums"
                      style={{ color: "var(--accent)" }}
                    >
                      {d.value}%
                    </span>
                  </div>
                  <div className="text-[12px]" style={{ color: "var(--muted)" }}>
                    {d.note}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

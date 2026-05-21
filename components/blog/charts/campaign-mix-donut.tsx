"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

// VERIFY: recommended starting mix for a $5K/mo Irvine home-services Google Ads
// account in 2026. Tune based on lead quality and seasonality.
const DATA = [
  { name: "Local Services Ads", value: 35, color: "#1677FF", dollars: 1750, sub: "Pay-per-lead, Google Guaranteed badge" },
  { name: "Search Ads", value: 40, color: "#74D3FF", dollars: 2000, sub: "Exact + phrase intent terms" },
  { name: "Performance Max", value: 15, color: "#FFB400", dollars: 750, sub: "Cross-channel remarketing" },
  { name: "YouTube / Display", value: 10, color: "#4A5A75", dollars: 500, sub: "Awareness on the cheap" },
]

export function CampaignMixDonut() {
  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="grid sm:grid-cols-[1fr_1.2fr] gap-6 items-center">
        <div className="relative h-[260px] sm:h-[320px] w-full">
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
                  `${v}% · $${(v * 50).toLocaleString()}`,
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
          <div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <span
              className="text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              Monthly budget
            </span>
            <span
              className="text-[32px] font-bold leading-tight tabular-nums"
              style={{ color: "var(--ink)" }}
            >
              $5,000
            </span>
          </div>
        </div>

        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-[0.08em] mb-2"
            style={{ color: "var(--accent)" }}
          >
            Recommended mix · $5K/mo Irvine home services
          </div>
          <ul className="space-y-2.5">
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
                      className="text-[14px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {d.name}
                    </span>
                    <span
                      className="text-[13px] font-bold tabular-nums"
                      style={{ color: "var(--accent)" }}
                    >
                      {d.value}%
                    </span>
                  </div>
                  <div
                    className="text-[12px] mt-0.5 flex items-baseline gap-2"
                    style={{ color: "var(--muted)" }}
                  >
                    <span className="font-semibold tabular-nums">
                      ${d.dollars.toLocaleString()}/mo
                    </span>
                    <span>·</span>
                    <span>{d.sub}</span>
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

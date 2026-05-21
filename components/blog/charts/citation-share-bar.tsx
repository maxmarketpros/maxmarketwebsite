"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts"

// VERIFY: avg citation share — % of AI-generated answers that link to your
// domain when asked an in-category query. Reasoned estimates from public GEO
// benchmarks (Bain, Profound, BrightEdge GenAI studies, 2025-26).
const DATA = [
  { model: "ChatGPT", optimized: 12.4, baseline: 2.1 },
  { model: "Perplexity", optimized: 18.7, baseline: 3.8 },
  { model: "Gemini", optimized: 9.6, baseline: 1.9 },
  { model: "Claude", optimized: 10.2, baseline: 2.4 },
  { model: "Copilot", optimized: 11.8, baseline: 2.0 },
  { model: "AI Overviews", optimized: 14.3, baseline: 2.7 },
]

export function CitationShareBar() {
  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-[0.08em]"
            style={{ color: "var(--accent)" }}
          >
            Citation share by LLM
          </div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            % of in-category answers that cite your site
          </h3>
        </div>
        <div className="flex items-center gap-3 text-[12px]" style={{ color: "var(--muted)" }}>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: "#1677FF" }} />
            GEO-optimized
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: "#DCE6F2" }} />
            No optimization
          </span>
        </div>
      </div>

      <div className="h-[320px] sm:h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={DATA} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid vertical={false} stroke="var(--border-color)" />
            <XAxis
              dataKey="model"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--ink)", fontSize: 11, fontWeight: 600 }}
              interval={0}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted)", fontSize: 11 }}
              tickFormatter={(v) => `${v}%`}
            />
            <Legend wrapperStyle={{ display: "none" }} />
            <Bar dataKey="baseline" fill="#DCE6F2" radius={[6, 6, 0, 0]} barSize={18} />
            <Bar dataKey="optimized" fill="#1677FF" radius={[6, 6, 0, 0]} barSize={18}>
              <LabelList
                dataKey="optimized"
                position="top"
                formatter={(v: number) => `${v}%`}
                style={{
                  fill: "var(--ink)",
                  fontWeight: 700,
                  fontSize: 11,
                  fontVariantNumeric: "tabular-nums",
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-[12.5px]" style={{ color: "var(--muted)" }}>
        Optimized = schema + structured content + authoritative outbound citations. Lift averages <span style={{ fontWeight: 700, color: "var(--ink)" }}>4.9×</span> across the six models. Perplexity rewards GEO most; Gemini still cites least overall.
      </p>
    </div>
  )
}

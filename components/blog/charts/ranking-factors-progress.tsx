// VERIFY: weighted importance scores (0-100) for the eight signals LLMs use
// when picking sources to cite. Reasoned estimates synthesized from Bain GenAI
// 2025 study + Profound's Q1 2026 GEO ranking factors report.
const FACTORS: { label: string; weight: number; note: string; color: string }[] = [
  { label: "E-E-A-T signals", weight: 92, note: "Author bios, original perspectives, named expertise", color: "#1677FF" },
  { label: "Schema markup", weight: 88, note: "FAQPage, HowTo, Article, Organization", color: "#1677FF" },
  { label: "Authoritative outbound citations", weight: 84, note: "Linking out to .gov, .edu, top-tier journals", color: "#1677FF" },
  { label: "Content freshness", weight: 78, note: "Last-updated dates + year-stamped data points", color: "#74D3FF" },
  { label: "Original data / research", weight: 76, note: "Numbers, studies, surveys that don't exist elsewhere", color: "#74D3FF" },
  { label: "Structured content (lists, tables)", weight: 71, note: "LLMs lift bullet lists and tables almost verbatim", color: "#74D3FF" },
  { label: "Semantic clarity", weight: 64, note: "Definition-style intros, plain language, no fluff", color: "#FFB400" },
  { label: "Backlink authority", weight: 48, note: "Less central than for classic SEO, but still a tiebreaker", color: "#FFB400" },
]

export function RankingFactorsProgress() {
  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="mb-5">
        <div
          className="text-[11px] font-bold uppercase tracking-[0.08em]"
          style={{ color: "var(--accent)" }}
        >
          What LLMs actually weigh
        </div>
        <h3
          className="text-[18px] sm:text-[20px] font-bold leading-tight"
          style={{ color: "var(--ink)" }}
        >
          AI search ranking factors, weighted
        </h3>
      </div>

      <div className="space-y-3">
        {FACTORS.map((f) => (
          <div
            key={f.label}
            className="px-4 py-3.5 rounded-xl"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div className="flex items-baseline justify-between gap-3 mb-1.5">
              <span
                className="text-[14px] sm:text-[14.5px] font-bold leading-snug"
                style={{ color: "var(--ink)" }}
              >
                {f.label}
              </span>
              <span
                className="text-[13px] font-bold tabular-nums"
                style={{ color: f.color }}
              >
                {f.weight}
              </span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden mb-1.5"
              style={{ background: "rgba(11,19,43,0.06)" }}
            >
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${f.weight}%`, background: f.color }}
              />
            </div>
            <p
              className="text-[12.5px] leading-snug"
              style={{ color: "var(--muted)" }}
            >
              {f.note}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[12.5px]" style={{ color: "var(--muted)" }}>
        Blue bars are non-negotiable. Cyan bars are accelerators. Yellow bars still matter — but you'll lose without nailing the top half first.
      </p>
    </div>
  )
}

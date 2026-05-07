import type { ReadabilityReport } from "@/lib/seo-audit/types"

function fleschColor(score: number) {
  if (score >= 70) return { color: "#16A34A", bg: "rgba(22,163,74,0.10)", border: "rgba(22,163,74,0.25)" }
  if (score >= 50) return { color: "#B45309", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.30)" }
  return { color: "#B91C1C", bg: "rgba(229,62,62,0.10)", border: "rgba(229,62,62,0.30)" }
}

export function ReadabilityCard({
  report,
}: {
  report: ReadabilityReport | null
}) {
  if (!report) {
    return (
      <div
        className="card-surface p-5 sm:p-7"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <h3
          className="text-[18px] sm:text-[20px] font-bold tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          Content readability
        </h3>
        <p className="mt-3 text-[14px]" style={{ color: "var(--muted)" }}>
          Not enough body text to analyze.
        </p>
      </div>
    )
  }

  const flesch = report.fleschReadingEase ?? 0
  const tone = fleschColor(flesch)

  const stats: Array<{ label: string; value: string | number }> = [
    { label: "Words", value: report.wordCount.toLocaleString() },
    { label: "Sentences", value: report.sentenceCount.toLocaleString() },
    { label: "Paragraphs", value: report.paragraphCount.toLocaleString() },
    {
      label: "Avg words / sentence",
      value: report.avgWordsPerSentence,
    },
    {
      label: "Avg words / paragraph",
      value: report.avgWordsPerParagraph,
    },
    {
      label: "Longest paragraph",
      value: `${report.longestParagraphWords} words`,
    },
  ]

  return (
    <div
      className="card-surface p-5 sm:p-7"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h3
            className="text-[18px] sm:text-[20px] font-bold tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            Content readability
          </h3>
          <p className="mt-0.5 text-[13.5px]" style={{ color: "var(--muted)" }}>
            How approachable your copy is for the average reader.
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-center">
        {/* Flesch panel */}
        <div
          className="flex flex-col items-center justify-center p-5 rounded-[var(--radius-md)] min-w-[180px]"
          style={{
            background: tone.bg,
            border: `1px solid ${tone.border}`,
          }}
        >
          <div
            className="text-[44px] font-bold tracking-tight leading-none"
            style={{ color: tone.color }}
          >
            {flesch}
          </div>
          <div
            className="mt-1 text-[11px] font-bold uppercase tracking-[0.10em]"
            style={{ color: tone.color }}
          >
            Flesch Reading Ease
          </div>
          <div
            className="mt-2 text-[13px] font-semibold text-center"
            style={{ color: "var(--ink)" }}
          >
            {report.fleschGrade}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-3 rounded-[var(--radius-sm)]"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.08em]"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </div>
              <div
                className="mt-0.5 text-[16px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

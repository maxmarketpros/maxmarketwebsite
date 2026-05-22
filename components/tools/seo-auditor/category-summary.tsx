import { ScoreGauge } from "./score-gauge"
import type { CategoryScore } from "@/lib/seo-audit/types"

interface CategorySummaryProps {
  overallScore: number
  categoryScores: CategoryScore[]
}

function tagline(score: number) {
  if (score >= 90) return "Excellent — your site is in great shape."
  if (score >= 75) return "Good — a few opportunities to climb higher."
  if (score >= 50) return "Needs work — meaningful gaps to close."
  return "Critical — your site is leaving rankings on the table."
}

export function CategorySummary({
  overallScore,
  categoryScores,
}: CategorySummaryProps) {
  return (
    <div
      className="card-surface p-6 sm:p-8 lg:p-10"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-8 lg:gap-12">
        <div className="flex flex-col items-center gap-3 mx-auto lg:mx-0">
          <ScoreGauge score={overallScore} size="lg" />
          <div
            className="text-[12px] font-bold uppercase tracking-[0.10em]"
            style={{ color: "var(--muted)" }}
          >
            Overall Score
          </div>
        </div>
        <div>
          <h3
            className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-center lg:text-left"
            style={{ color: "var(--ink)" }}
          >
            {tagline(overallScore)}
          </h3>
          <p
            className="mt-2 text-[14.5px] leading-relaxed text-center lg:text-left"
            style={{ color: "var(--muted)" }}
          >
            Below are detailed category scores. Lighthouse-powered metrics combine with our on-page checks to give you the full picture.
          </p>
          <div
            className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
            style={{ borderTop: "1px solid var(--border-color)" }}
          >
            {categoryScores
              .filter((c) => c.category !== "content")
              .map((c) => (
                <div key={c.category} className="flex flex-col items-center gap-1.5">
                  <ScoreGauge score={c.score} size="sm" />
                  <div
                    className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.06em] text-center"
                    style={{ color: "var(--muted)" }}
                  >
                    {c.label}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

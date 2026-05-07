import type { Category, CategoryScore, Issue, PageSpeedReport } from "./types"

const SEVERITY_WEIGHT: Record<Issue["severity"], number> = {
  critical: 25,
  warning: 10,
  notice: 3,
  passed: 0,
}

const CATEGORY_LABELS: Record<Category, string> = {
  performance: "Performance",
  seo: "SEO",
  "best-practices": "Best Practices",
  accessibility: "Accessibility",
  content: "Content",
}

/**
 * Compute a 0–100 score for a single category based on its issues.
 * Each issue subtracts a penalty (capped at 100). PSI scores override
 * the equivalent category when available.
 */
export function categoryScoreFromIssues(
  category: Category,
  issues: Issue[],
): number {
  const relevant = issues.filter(
    (i) => i.category === category && i.severity !== "passed",
  )
  const penalty = relevant.reduce(
    (sum, i) => sum + SEVERITY_WEIGHT[i.severity],
    0,
  )
  return Math.max(0, Math.min(100, 100 - penalty))
}

export function buildCategoryScores(
  issues: Issue[],
  mobile: PageSpeedReport | null,
  desktop: PageSpeedReport | null,
): CategoryScore[] {
  const psiAvg = (k: keyof PageSpeedReport["scores"]): number | null => {
    const m = mobile?.scores[k]
    const d = desktop?.scores[k]
    if (typeof m === "number" && typeof d === "number") return Math.round((m + d) / 2)
    if (typeof m === "number") return m
    if (typeof d === "number") return d
    return null
  }

  const mkScore = (
    category: Category,
    psiKey: keyof PageSpeedReport["scores"] | null,
  ): CategoryScore => {
    const psi = psiKey ? psiAvg(psiKey) : null
    const issueScore = categoryScoreFromIssues(category, issues)
    // Blend: when PSI is available, weight it more heavily (it's authoritative)
    const score = psi !== null ? Math.round(psi * 0.7 + issueScore * 0.3) : issueScore
    return { category, label: CATEGORY_LABELS[category], score }
  }

  return [
    mkScore("performance", "performance"),
    mkScore("seo", "seo"),
    mkScore("best-practices", "bestPractices"),
    mkScore("accessibility", "accessibility"),
    mkScore("content", null),
  ]
}

export function overallScore(categories: CategoryScore[]): number {
  // Weighted: SEO + Performance dominate, content + a11y are supporting
  const weights: Record<Category, number> = {
    seo: 1.5,
    performance: 1.3,
    accessibility: 1.0,
    "best-practices": 1.0,
    content: 0.8,
  }
  let weightedSum = 0
  let weightTotal = 0
  for (const c of categories) {
    const w = weights[c.category]
    weightedSum += c.score * w
    weightTotal += w
  }
  return Math.round(weightedSum / weightTotal)
}

export function sortIssues(issues: Issue[]): Issue[] {
  const sevOrder: Record<Issue["severity"], number> = {
    critical: 0,
    warning: 1,
    notice: 2,
    passed: 3,
  }
  return [...issues].sort((a, b) => {
    const s = sevOrder[a.severity] - sevOrder[b.severity]
    if (s !== 0) return s
    return a.title.localeCompare(b.title)
  })
}

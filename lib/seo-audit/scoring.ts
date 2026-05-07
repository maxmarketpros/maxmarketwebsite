import type { Category, CategoryScore, Issue } from "./types"

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

export function buildCategoryScores(issues: Issue[]): CategoryScore[] {
  const cats: Category[] = [
    "performance",
    "seo",
    "best-practices",
    "accessibility",
    "content",
  ]
  return cats.map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    score: categoryScoreFromIssues(category, issues),
  }))
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

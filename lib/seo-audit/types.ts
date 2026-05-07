export type Severity = "critical" | "warning" | "notice" | "passed"

export type Category =
  | "performance"
  | "seo"
  | "best-practices"
  | "accessibility"
  | "content"

export interface Issue {
  id: string
  category: Category
  severity: Severity
  title: string
  description: string
  fix: string
  evidence?: string
  metric?: string | number
}

export interface CategoryScore {
  category: Category
  label: string
  score: number // 0-100
}

export interface CoreWebVitals {
  lcp: { value: number; displayValue: string; category: "good" | "needs-improvement" | "poor" } | null
  cls: { value: number; displayValue: string; category: "good" | "needs-improvement" | "poor" } | null
  inp: { value: number; displayValue: string; category: "good" | "needs-improvement" | "poor" } | null
  fcp: { value: number; displayValue: string; category: "good" | "needs-improvement" | "poor" } | null
  tbt: { value: number; displayValue: string; category: "good" | "needs-improvement" | "poor" } | null
  si: { value: number; displayValue: string; category: "good" | "needs-improvement" | "poor" } | null
}

export interface PageSpeedReport {
  strategy: "mobile" | "desktop"
  scores: {
    performance: number | null
    accessibility: number | null
    bestPractices: number | null
    seo: number | null
  }
  vitals: CoreWebVitals
  topOpportunities: Array<{
    id: string
    title: string
    description: string
    savingsMs?: number
    savingsBytes?: number
  }>
}

export interface PageSnapshot {
  inputUrl: string
  finalUrl: string
  status: number
  redirectCount: number
  responseTimeMs: number
  https: boolean
  contentBytes: number
  title: string
  description: string
  favicon: string | null
}

export interface AuditResult {
  snapshot: PageSnapshot
  overallScore: number
  categoryScores: CategoryScore[]
  issues: Issue[]
  pageSpeed: {
    mobile: PageSpeedReport | null
    desktop: PageSpeedReport | null
  }
  generatedAt: string
}

export interface AuditError {
  error: string
  code: "INVALID_URL" | "FETCH_FAILED" | "TIMEOUT" | "BLOCKED" | "INTERNAL"
  details?: string
}

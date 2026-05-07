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

export interface HeadingNode {
  level: 1 | 2 | 3 | 4 | 5 | 6
  text: string
  children: HeadingNode[]
}

export interface DetectedTech {
  name: string
  category: "analytics" | "tag-manager" | "advertising" | "fonts" | "chat" | "cms" | "framework"
  detected: boolean
  evidence?: string
}

export interface ReadabilityReport {
  wordCount: number
  sentenceCount: number
  paragraphCount: number
  avgWordsPerSentence: number
  avgWordsPerParagraph: number
  fleschReadingEase: number | null
  fleschGrade: string | null // e.g. "Standard / 8-9th grade"
  longestParagraphWords: number
}

export interface AuditResult {
  snapshot: PageSnapshot
  overallScore: number
  categoryScores: CategoryScore[]
  issues: Issue[]
  headingOutline: HeadingNode[]
  techStack: DetectedTech[]
  readability: ReadabilityReport | null
  generatedAt: string
}

export interface AuditError {
  error: string
  code: "INVALID_URL" | "FETCH_FAILED" | "TIMEOUT" | "BLOCKED" | "INTERNAL"
  details?: string
}

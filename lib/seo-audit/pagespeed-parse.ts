import type { CoreWebVitals, PageSpeedReport } from "./types"

function classifyMetric(
  id: string,
  value: number,
): "good" | "needs-improvement" | "poor" {
  switch (id) {
    case "lcp":
      return value <= 2500 ? "good" : value <= 4000 ? "needs-improvement" : "poor"
    case "cls":
      return value <= 0.1 ? "good" : value <= 0.25 ? "needs-improvement" : "poor"
    case "inp":
      return value <= 200 ? "good" : value <= 500 ? "needs-improvement" : "poor"
    case "fcp":
      return value <= 1800 ? "good" : value <= 3000 ? "needs-improvement" : "poor"
    case "tbt":
      return value <= 200 ? "good" : value <= 600 ? "needs-improvement" : "poor"
    case "si":
      return value <= 3400 ? "good" : value <= 5800 ? "needs-improvement" : "poor"
    default:
      return "needs-improvement"
  }
}

function readAudit(
  audits: Record<string, any> | undefined,
  key: string,
): { value: number; displayValue: string } | null {
  const a = audits?.[key]
  if (!a || typeof a.numericValue !== "number") return null
  return {
    value: a.numericValue,
    displayValue: a.displayValue || String(a.numericValue),
  }
}

function buildVitals(audits: Record<string, any> | undefined): CoreWebVitals {
  const map = (id: string, key: string) => {
    const r = readAudit(audits, key)
    if (!r) return null
    return { ...r, category: classifyMetric(id, r.value) }
  }
  return {
    lcp: map("lcp", "largest-contentful-paint"),
    cls: map("cls", "cumulative-layout-shift"),
    inp:
      map("inp", "interaction-to-next-paint") ||
      map("inp", "experimental-interaction-to-next-paint"),
    fcp: map("fcp", "first-contentful-paint"),
    tbt: map("tbt", "total-blocking-time"),
    si: map("si", "speed-index"),
  }
}

function stripMarkdownLinks(s: string): string {
  return s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
}

function buildOpportunities(
  audits: Record<string, any> | undefined,
): PageSpeedReport["topOpportunities"] {
  if (!audits) return []
  return Object.entries(audits)
    .filter(
      ([, a]: [string, any]) =>
        a?.details?.type === "opportunity" &&
        typeof a.details.overallSavingsMs === "number" &&
        a.details.overallSavingsMs > 50,
    )
    .map(([id, a]: [string, any]) => ({
      id,
      title: a.title,
      description:
        typeof a.description === "string" ? stripMarkdownLinks(a.description) : "",
      savingsMs: a.details.overallSavingsMs,
      savingsBytes:
        typeof a.details.overallSavingsBytes === "number"
          ? a.details.overallSavingsBytes
          : undefined,
    }))
    .sort((a, b) => (b.savingsMs ?? 0) - (a.savingsMs ?? 0))
    .slice(0, 5)
}

export function parseLighthouseResult(
  data: any,
  strategy: "mobile" | "desktop",
): PageSpeedReport {
  const lhr = data?.lighthouseResult
  const cats = lhr?.categories ?? {}
  const audits = lhr?.audits

  const round = (v: number | undefined | null) =>
    typeof v === "number" ? Math.round(v * 100) : null

  return {
    strategy,
    scores: {
      performance: round(cats.performance?.score),
      accessibility: round(cats.accessibility?.score),
      bestPractices: round(cats["best-practices"]?.score),
      seo: round(cats.seo?.score),
    },
    vitals: buildVitals(audits),
    topOpportunities: buildOpportunities(audits),
  }
}

export const PSI_ENDPOINT =
  "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"

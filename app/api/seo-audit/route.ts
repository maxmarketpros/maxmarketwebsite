import { NextRequest, NextResponse } from "next/server"
import {
  fetchPage,
  fetchOriginResource,
  normalizeUrl,
} from "@/lib/seo-audit/fetch-page"
import {
  parseHtml,
  getMetaSummary,
  checkTitle,
  checkMetaDescription,
  checkCanonical,
  checkLangAttr,
  checkViewport,
  checkRobotsMeta,
  checkHeadings,
  checkImages,
  checkLinks,
  checkOpenGraph,
  checkTwitterCard,
  checkStructuredData,
  checkContent,
  checkHttps,
  checkResponseTime,
  checkRobotsTxt,
  checkSitemap,
  checkFavicon,
} from "@/lib/seo-audit/checks"
import {
  buildCategoryScores,
  overallScore,
  sortIssues,
} from "@/lib/seo-audit/scoring"
import type { AuditResult, AuditError, Issue } from "@/lib/seo-audit/types"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Naive in-memory rate limiter (per warm function instance).
const RATE_LIMIT_MAX = 10
const RATE_LIMIT_WINDOW_MS = 60_000
const ipHits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  if (hits.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, hits)
    return true
  }
  hits.push(now)
  ipHits.set(ip, hits)
  return false
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  )
}

function errorResponse(payload: AuditError, status: number) {
  return NextResponse.json(payload, { status })
}

export async function POST(req: NextRequest) {
  let body: { url?: string }
  try {
    body = await req.json()
  } catch {
    return errorResponse(
      { error: "Invalid JSON body", code: "INVALID_URL" },
      400,
    )
  }

  const inputUrl = typeof body.url === "string" ? body.url : ""
  const url = normalizeUrl(inputUrl)
  if (!url) {
    return errorResponse(
      {
        error:
          "That doesn't look like a valid URL. Try something like example.com or https://example.com.",
        code: "INVALID_URL",
      },
      400,
    )
  }

  if (rateLimited(getClientIp(req))) {
    return errorResponse(
      {
        error:
          "You've run a few audits in a short time. Give it a minute and try again.",
        code: "INTERNAL",
      },
      429,
    )
  }

  let page
  try {
    page = await fetchPage(url)
  } catch (err: any) {
    const isAbort = err?.name === "AbortError"
    return errorResponse(
      {
        error: isAbort
          ? "The site took too long to respond. It may be slow or blocking our crawler."
          : "Couldn't reach that website. Double-check the URL and try again.",
        code: isAbort ? "TIMEOUT" : "FETCH_FAILED",
        details: err?.message,
      },
      502,
    )
  }

  if (page.status >= 400) {
    return errorResponse(
      {
        error: `The site returned HTTP ${page.status}. We couldn't audit a page that doesn't load.`,
        code: page.status === 403 || page.status === 401 ? "BLOCKED" : "FETCH_FAILED",
      },
      502,
    )
  }

  const $ = parseHtml(page.html)
  const meta = getMetaSummary($, page.finalUrl)

  let origin = page.finalUrl
  try {
    origin = new URL(page.finalUrl).origin
  } catch {
    /* ignore */
  }
  const [robotsRes, sitemapRes] = await Promise.all([
    fetchOriginResource(origin, "/robots.txt"),
    fetchOriginResource(origin, "/sitemap.xml"),
  ])

  const issues: Issue[] = [
    ...checkTitle($),
    ...checkMetaDescription($),
    ...checkCanonical($, page.finalUrl),
    ...checkLangAttr($),
    ...checkViewport($),
    ...checkRobotsMeta($),
    ...checkHeadings($),
    ...checkImages($),
    ...checkLinks($, page.finalUrl),
    ...checkOpenGraph($),
    ...checkTwitterCard($),
    ...checkStructuredData($),
    ...checkContent($, page.contentBytes),
    ...checkHttps(page.finalUrl),
    ...checkResponseTime(page.responseTimeMs),
    ...checkRobotsTxt(robotsRes.ok, robotsRes.body),
    ...checkSitemap(sitemapRes.ok, sitemapRes.body),
    ...checkFavicon(meta.favicon),
  ]

  // PageSpeed Insights now runs in the browser to avoid Netlify gateway
  // timeouts on large sites. mobile/desktop start as null and the client
  // merges them in via mergePsiIntoResult() once PSI returns.
  const categoryScores = buildCategoryScores(issues, null, null)

  const result: AuditResult = {
    snapshot: {
      inputUrl,
      finalUrl: page.finalUrl,
      status: page.status,
      redirectCount: page.redirectCount,
      responseTimeMs: page.responseTimeMs,
      https: page.finalUrl.startsWith("https://"),
      contentBytes: page.contentBytes,
      title: meta.title,
      description: meta.description,
      favicon: meta.favicon,
    },
    overallScore: overallScore(categoryScores),
    categoryScores,
    issues: sortIssues(issues),
    pageSpeed: {
      mobile: null,
      desktop: null,
    },
    generatedAt: new Date().toISOString(),
  }

  return NextResponse.json(result)
}

import { parseLighthouseResult, PSI_ENDPOINT } from "./pagespeed-parse"
import type { PageSpeedReport } from "./types"

const PSI_TIMEOUT_MS = 90_000 // browser-side, no Netlify gateway pressure — let it breathe

export async function runPageSpeedClient(
  url: string,
  strategy: "mobile" | "desktop",
): Promise<PageSpeedReport | null> {
  const apiKey = process.env.NEXT_PUBLIC_PAGESPEED_API_KEY
  if (!apiKey) {
    console.warn(
      "NEXT_PUBLIC_PAGESPEED_API_KEY not set — Lighthouse scores will be skipped.",
    )
    return null
  }

  const params = new URLSearchParams({
    url,
    strategy,
    key: apiKey,
  })
  for (const cat of ["performance", "accessibility", "best-practices", "seo"]) {
    params.append("category", cat)
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), PSI_TIMEOUT_MS)

  try {
    const res = await fetch(`${PSI_ENDPOINT}?${params.toString()}`, {
      signal: controller.signal,
    })
    if (!res.ok) {
      console.warn(`PageSpeed (${strategy}) returned ${res.status}`)
      return null
    }
    const data = await res.json()
    return parseLighthouseResult(data, strategy)
  } catch (err) {
    console.warn(`PageSpeed (${strategy}) error:`, err)
    return null
  } finally {
    clearTimeout(timer)
  }
}

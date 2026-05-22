const USER_AGENT =
  "MaxMarketPros-SEO-Auditor/1.0 (+https://www.maxmarketpros.com/tools/seo-auditor)"
const FETCH_TIMEOUT_MS = 15000

export interface FetchedPage {
  html: string
  finalUrl: string
  status: number
  redirectCount: number
  responseTimeMs: number
  contentBytes: number
  headers: Record<string, string>
}

export async function fetchPage(url: string): Promise<FetchedPage> {
  const start = Date.now()
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

  let response: Response
  try {
    response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": USER_AGENT,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
    })
  } finally {
    clearTimeout(timer)
  }

  const html = await response.text()
  const responseTimeMs = Date.now() - start
  const finalUrl = response.url || url

  // Best-effort redirect count: compare hostnames/paths, default to 1 if URL changed
  const redirectCount = finalUrl !== url ? 1 : 0

  const headers: Record<string, string> = {}
  response.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value
  })

  return {
    html,
    finalUrl,
    status: response.status,
    redirectCount,
    responseTimeMs,
    contentBytes: new Blob([html]).size,
    headers,
  }
}

export async function fetchOriginResource(
  origin: string,
  path: string,
): Promise<{ ok: boolean; status: number; body: string }> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)
  try {
    const res = await fetch(new URL(path, origin).toString(), {
      method: "GET",
      signal: controller.signal,
      headers: { "User-Agent": USER_AGENT },
    })
    const body = await res.text()
    return { ok: res.ok, status: res.status, body }
  } catch {
    return { ok: false, status: 0, body: "" }
  } finally {
    clearTimeout(timer)
  }
}

export function normalizeUrl(input: string): string | null {
  let value = input.trim()
  if (!value) return null
  if (!/^https?:\/\//i.test(value)) {
    value = `https://${value}`
  }
  try {
    const u = new URL(value)
    if (!/^https?:$/.test(u.protocol)) return null
    if (!u.hostname.includes(".")) return null
    return u.toString()
  } catch {
    return null
  }
}

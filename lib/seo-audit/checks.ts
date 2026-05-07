import * as cheerio from "cheerio"
import type {
  DetectedTech,
  HeadingNode,
  Issue,
  ReadabilityReport,
} from "./types"

export interface ParsedPage {
  $: cheerio.CheerioAPI
  finalUrl: string
  contentBytes: number
  responseTimeMs: number
  status: number
  redirectCount: number
}

export interface MetaSummary {
  title: string
  description: string
  favicon: string | null
}

export function parseHtml(html: string): cheerio.CheerioAPI {
  return cheerio.load(html)
}

export function getMetaSummary(
  $: cheerio.CheerioAPI,
  finalUrl: string,
): MetaSummary {
  const title = $("head > title").first().text().trim()
  const description =
    $('meta[name="description"]').attr("content")?.trim() ||
    $('meta[property="og:description"]').attr("content")?.trim() ||
    ""
  const faviconHref =
    $('link[rel="icon"]').attr("href") ||
    $('link[rel="shortcut icon"]').attr("href") ||
    $('link[rel="apple-touch-icon"]').attr("href") ||
    null
  let favicon: string | null = null
  if (faviconHref) {
    try {
      favicon = new URL(faviconHref, finalUrl).toString()
    } catch {
      favicon = null
    }
  }
  return { title, description, favicon }
}

// ─── Checks ───────────────────────────────────────────────────────────────

export function checkTitle($: cheerio.CheerioAPI): Issue[] {
  const titles = $("head > title")
  const text = titles.first().text().trim()
  const issues: Issue[] = []
  if (titles.length === 0 || !text) {
    issues.push({
      id: "missing-title",
      category: "seo",
      severity: "critical",
      title: "Page is missing a <title> tag",
      description:
        "The title tag is one of the most important on-page SEO signals and is what shows up as the clickable headline in Google search results.",
      fix: "Add a unique, descriptive <title> tag inside the <head> of this page. Aim for 30–60 characters and lead with your primary keyword.",
    })
    return issues
  }
  if (titles.length > 1) {
    issues.push({
      id: "multiple-titles",
      category: "seo",
      severity: "warning",
      title: `Page has ${titles.length} <title> tags`,
      description:
        "Search engines expect exactly one title per page. Multiple titles cause unpredictable behavior in search snippets.",
      fix: "Remove all but one <title> tag from the <head>.",
    })
  }
  if (text.length < 30) {
    issues.push({
      id: "title-too-short",
      category: "seo",
      severity: "warning",
      title: "Title tag is too short",
      description: `Your title is only ${text.length} characters. Short titles miss an opportunity to include keywords and compelling copy.`,
      fix: "Expand the title to 30–60 characters. Include your primary keyword and a benefit or location.",
      evidence: `Current: "${text}"`,
      metric: text.length,
    })
  } else if (text.length > 60) {
    issues.push({
      id: "title-too-long",
      category: "seo",
      severity: "warning",
      title: "Title tag is too long",
      description: `Your title is ${text.length} characters. Google typically truncates titles around 60 characters in search results.`,
      fix: "Trim the title to 60 characters or fewer so it displays in full on Google.",
      evidence: `Current: "${text}"`,
      metric: text.length,
    })
  } else {
    issues.push({
      id: "title-ok",
      category: "seo",
      severity: "passed",
      title: "Title tag is the right length",
      description: `Your title is ${text.length} characters — well within Google's display range.`,
      fix: "",
      evidence: `"${text}"`,
    })
  }
  return issues
}

export function checkMetaDescription($: cheerio.CheerioAPI): Issue[] {
  const desc = $('meta[name="description"]').attr("content")?.trim() || ""
  if (!desc) {
    return [
      {
        id: "missing-meta-description",
        category: "seo",
        severity: "critical",
        title: "Page is missing a meta description",
        description:
          "Without a meta description, Google auto-generates one from page content — usually less compelling than something you write.",
        fix: 'Add <meta name="description" content="..."> to the <head>. Aim for 120–160 characters and include a clear value proposition + call to action.',
      },
    ]
  }
  if (desc.length < 70) {
    return [
      {
        id: "meta-description-short",
        category: "seo",
        severity: "warning",
        title: "Meta description is too short",
        description: `Only ${desc.length} characters. You're leaving prime SERP real estate on the table.`,
        fix: "Expand to 120–160 characters with a clear value prop and call to action.",
        evidence: `Current: "${desc}"`,
        metric: desc.length,
      },
    ]
  }
  if (desc.length > 165) {
    return [
      {
        id: "meta-description-long",
        category: "seo",
        severity: "warning",
        title: "Meta description is too long",
        description: `${desc.length} characters. Google truncates around 160 characters on desktop.`,
        fix: "Trim to under 160 characters so the description displays in full.",
        evidence: `Current: "${desc}"`,
        metric: desc.length,
      },
    ]
  }
  return [
    {
      id: "meta-description-ok",
      category: "seo",
      severity: "passed",
      title: "Meta description length is good",
      description: `${desc.length} characters — within the ideal display range.`,
      fix: "",
    },
  ]
}

export function checkCanonical(
  $: cheerio.CheerioAPI,
  finalUrl: string,
): Issue[] {
  const canonical = $('link[rel="canonical"]').attr("href")
  if (!canonical) {
    return [
      {
        id: "missing-canonical",
        category: "seo",
        severity: "warning",
        title: "No canonical URL declared",
        description:
          "A canonical link tells search engines which version of a page is the master copy. Without one, duplicate content can compete for the same rankings.",
        fix: 'Add <link rel="canonical" href="https://yoursite.com/this-page" /> to the <head>.',
      },
    ]
  }
  try {
    const resolved = new URL(canonical, finalUrl).toString().replace(/\/$/, "")
    const final = finalUrl.replace(/\/$/, "")
    if (resolved !== final) {
      return [
        {
          id: "canonical-mismatch",
          category: "seo",
          severity: "notice",
          title: "Canonical URL doesn't match the final URL",
          description: `The page resolved to ${final} but declares ${resolved} as canonical. This is fine if intentional (e.g. pointing to a master version) but worth confirming.`,
          fix: "Verify the canonical points to the correct master URL for this content.",
          evidence: `Canonical: ${resolved}\nFinal URL: ${final}`,
        },
      ]
    }
  } catch {
    // ignore malformed
  }
  return [
    {
      id: "canonical-ok",
      category: "seo",
      severity: "passed",
      title: "Canonical URL is set correctly",
      description: "The page declares a canonical URL that matches its final URL.",
      fix: "",
    },
  ]
}

export function checkLangAttr($: cheerio.CheerioAPI): Issue[] {
  const lang = $("html").attr("lang")
  if (!lang) {
    return [
      {
        id: "missing-lang",
        category: "accessibility",
        severity: "warning",
        title: "<html> tag is missing a lang attribute",
        description:
          "Screen readers use the lang attribute to choose the right pronunciation. Without it, accessibility tools may default to the wrong language.",
        fix: 'Add lang="en" (or your page\'s actual language) to the <html> element.',
      },
    ]
  }
  return [
    {
      id: "lang-ok",
      category: "accessibility",
      severity: "passed",
      title: "Page declares a language",
      description: `Language set to "${lang}".`,
      fix: "",
    },
  ]
}

export function checkViewport($: cheerio.CheerioAPI): Issue[] {
  const viewport = $('meta[name="viewport"]').attr("content")
  if (!viewport) {
    return [
      {
        id: "missing-viewport",
        category: "best-practices",
        severity: "critical",
        title: "Missing mobile viewport meta tag",
        description:
          "Without a viewport meta tag, mobile browsers render the page at desktop width, hurting usability and Google rankings.",
        fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1" /> to the <head>.',
      },
    ]
  }
  return [
    {
      id: "viewport-ok",
      category: "best-practices",
      severity: "passed",
      title: "Mobile viewport is configured",
      description: "Page is set up to render correctly on mobile devices.",
      fix: "",
    },
  ]
}

export function checkRobotsMeta($: cheerio.CheerioAPI): Issue[] {
  const content = $('meta[name="robots"]').attr("content")?.toLowerCase() || ""
  if (content.includes("noindex")) {
    return [
      {
        id: "robots-noindex",
        category: "seo",
        severity: "critical",
        title: "Page is set to noindex",
        description:
          "This page explicitly tells search engines not to index it. If this is your homepage or a page you want to rank, this is a critical issue.",
        fix: 'Remove "noindex" from the robots meta tag — or remove the tag entirely if you want the page indexed.',
        evidence: `<meta name="robots" content="${content}">`,
      },
    ]
  }
  return []
}

export function checkHeadings($: cheerio.CheerioAPI): Issue[] {
  const issues: Issue[] = []
  const h1s = $("h1")
  const h2s = $("h2")

  if (h1s.length === 0) {
    issues.push({
      id: "missing-h1",
      category: "seo",
      severity: "critical",
      title: "Page has no H1 heading",
      description:
        "The H1 is the main headline of the page and a strong on-page SEO signal. Search engines and screen readers both rely on it.",
      fix: "Add exactly one <h1> that describes the page's primary topic.",
    })
  } else if (h1s.length > 1) {
    issues.push({
      id: "multiple-h1",
      category: "seo",
      severity: "warning",
      title: `Page has ${h1s.length} H1 headings`,
      description:
        "Multiple H1s dilute the topical focus of the page. Modern best practice is one H1 per page.",
      fix: "Keep one <h1> for the page's main topic and demote the rest to <h2> or <h3>.",
      metric: h1s.length,
    })
  } else {
    const h1Text = h1s.first().text().trim()
    issues.push({
      id: "h1-ok",
      category: "seo",
      severity: "passed",
      title: "Page has exactly one H1",
      description: "Single, focused H1 — exactly what search engines expect.",
      fix: "",
      evidence: h1Text ? `"${h1Text}"` : undefined,
    })
  }

  if (h2s.length === 0) {
    issues.push({
      id: "no-h2",
      category: "content",
      severity: "notice",
      title: "Page has no H2 subheadings",
      description:
        "H2 subheadings break content into scannable sections — important for both readers and SEO crawlers building topic context.",
      fix: "Add 2–5 H2 subheadings that summarize each major section of the page.",
    })
  }

  return issues
}

export function checkImages($: cheerio.CheerioAPI): Issue[] {
  const imgs = $("img")
  if (imgs.length === 0) {
    return []
  }
  let missingAlt = 0
  let missingDimensions = 0
  imgs.each((_, el) => {
    const $el = $(el)
    const alt = $el.attr("alt")
    if (alt === undefined || alt === null) missingAlt++
    if (!$el.attr("width") || !$el.attr("height")) missingDimensions++
  })
  const issues: Issue[] = []
  if (missingAlt > 0) {
    issues.push({
      id: "img-missing-alt",
      category: "accessibility",
      severity: missingAlt > imgs.length / 2 ? "critical" : "warning",
      title: `${missingAlt} of ${imgs.length} images missing alt text`,
      description:
        "Alt text describes images for screen readers and is used by Google Images to understand what your images show.",
      fix: 'Add alt="..." to every <img>. Use empty alt="" only for decorative images.',
      metric: missingAlt,
    })
  } else {
    issues.push({
      id: "img-alt-ok",
      category: "accessibility",
      severity: "passed",
      title: "All images have alt text",
      description: `${imgs.length} images, all with alt attributes.`,
      fix: "",
    })
  }
  if (missingDimensions > 0) {
    issues.push({
      id: "img-missing-dimensions",
      category: "performance",
      severity: "notice",
      title: `${missingDimensions} of ${imgs.length} images missing width/height`,
      description:
        "Images without explicit dimensions cause layout shift as they load — hurting your Cumulative Layout Shift (CLS) score.",
      fix: "Add width and height attributes to every <img> so the browser can reserve space before the image loads.",
      metric: missingDimensions,
    })
  }
  return issues
}

export function checkLinks(
  $: cheerio.CheerioAPI,
  finalUrl: string,
): Issue[] {
  const issues: Issue[] = []
  let internal = 0
  let external = 0
  let externalNoOpener = 0
  const vagueAnchors: string[] = []
  let origin: string
  try {
    origin = new URL(finalUrl).origin
  } catch {
    return issues
  }
  $("a[href]").each((_, el) => {
    const $el = $(el)
    const href = $el.attr("href") || ""
    const text = $el.text().trim().toLowerCase()
    let absUrl: URL | null = null
    try {
      absUrl = new URL(href, finalUrl)
    } catch {
      return
    }
    if (absUrl.origin === origin) {
      internal++
    } else if (absUrl.protocol.startsWith("http")) {
      external++
      const rel = ($el.attr("rel") || "").toLowerCase()
      if (!rel.includes("noopener")) externalNoOpener++
    }
    if (text && /^(click here|read more|learn more|here|more)$/.test(text)) {
      vagueAnchors.push(text)
    }
  })

  if (externalNoOpener > 0) {
    issues.push({
      id: "external-no-opener",
      category: "best-practices",
      severity: "notice",
      title: `${externalNoOpener} external links missing rel="noopener"`,
      description:
        'Links opening in a new tab without rel="noopener" can let the destination page access window.opener — a small security and performance risk.',
      fix: 'Add rel="noopener" (or rel="noopener noreferrer") to external links, especially those with target="_blank".',
      metric: externalNoOpener,
    })
  }
  if (vagueAnchors.length > 2) {
    issues.push({
      id: "vague-anchor-text",
      category: "seo",
      severity: "notice",
      title: `${vagueAnchors.length} links use vague anchor text`,
      description:
        'Anchors like "click here" or "read more" tell search engines nothing about the destination page.',
      fix: 'Replace vague link text with descriptive phrases that include relevant keywords (e.g. "view our SEO services" instead of "click here").',
      metric: vagueAnchors.length,
    })
  }
  issues.push({
    id: "link-summary",
    category: "seo",
    severity: "passed",
    title: "Link structure analyzed",
    description: `Found ${internal} internal links and ${external} external links.`,
    fix: "",
  })
  return issues
}

export function checkOpenGraph($: cheerio.CheerioAPI): Issue[] {
  const required = ["og:title", "og:description", "og:image", "og:url"]
  const missing = required.filter(
    (prop) => !$(`meta[property="${prop}"]`).attr("content"),
  )
  if (missing.length === required.length) {
    return [
      {
        id: "missing-og",
        category: "best-practices",
        severity: "warning",
        title: "Page has no Open Graph tags",
        description:
          "When this page is shared on Facebook, LinkedIn, Slack, iMessage, or any modern app, the preview will be ugly or empty.",
        fix: 'Add og:title, og:description, og:image, and og:url meta tags inside the <head>.',
      },
    ]
  }
  if (missing.length > 0) {
    return [
      {
        id: "partial-og",
        category: "best-practices",
        severity: "notice",
        title: "Some Open Graph tags are missing",
        description: `Missing: ${missing.join(", ")}. Social previews will look incomplete.`,
        fix: "Add the missing Open Graph tags. og:image is the most impactful for click-through.",
        metric: missing.length,
      },
    ]
  }
  return [
    {
      id: "og-ok",
      category: "best-practices",
      severity: "passed",
      title: "Open Graph tags are set",
      description: "Page is ready for social sharing on Facebook, LinkedIn, Slack, etc.",
      fix: "",
    },
  ]
}

export function checkTwitterCard($: cheerio.CheerioAPI): Issue[] {
  const card = $('meta[name="twitter:card"]').attr("content")
  if (!card) {
    return [
      {
        id: "missing-twitter",
        category: "best-practices",
        severity: "notice",
        title: "No Twitter Card tags found",
        description:
          "Twitter Cards control how your page appears when shared on X/Twitter. Without them, you get a plain link.",
        fix: 'Add <meta name="twitter:card" content="summary_large_image"> plus twitter:title, twitter:description, and twitter:image.',
      },
    ]
  }
  return [
    {
      id: "twitter-ok",
      category: "best-practices",
      severity: "passed",
      title: "Twitter Card configured",
      description: `Card type: ${card}.`,
      fix: "",
    },
  ]
}

export function checkStructuredData($: cheerio.CheerioAPI): Issue[] {
  const blocks = $('script[type="application/ld+json"]')
  if (blocks.length === 0) {
    return [
      {
        id: "no-schema",
        category: "seo",
        severity: "warning",
        title: "No structured data (JSON-LD) found",
        description:
          "Schema markup helps Google understand your business, products, reviews, and more — and can earn rich results in search.",
        fix: "Add JSON-LD structured data appropriate for the page (LocalBusiness, Service, FAQ, BreadcrumbList, etc.).",
      },
    ]
  }
  const types: string[] = []
  blocks.each((_, el) => {
    try {
      const json = JSON.parse($(el).contents().text())
      const collect = (obj: any) => {
        if (obj && typeof obj === "object") {
          if (typeof obj["@type"] === "string") types.push(obj["@type"])
          else if (Array.isArray(obj["@type"])) types.push(...obj["@type"])
          if (Array.isArray(obj["@graph"])) obj["@graph"].forEach(collect)
        }
      }
      collect(json)
    } catch {
      // ignore parse errors
    }
  })
  return [
    {
      id: "schema-ok",
      category: "seo",
      severity: "passed",
      title: `Structured data detected (${blocks.length} block${blocks.length > 1 ? "s" : ""})`,
      description: types.length
        ? `Schema types found: ${[...new Set(types)].join(", ")}`
        : "JSON-LD blocks present.",
      fix: "",
    },
  ]
}

export function checkContent(
  $: cheerio.CheerioAPI,
  contentBytes: number,
): Issue[] {
  const text = $("body").text().replace(/\s+/g, " ").trim()
  const wordCount = text ? text.split(" ").length : 0
  const issues: Issue[] = []
  if (wordCount < 300) {
    issues.push({
      id: "thin-content",
      category: "content",
      severity: "warning",
      title: `Page has only ~${wordCount} words`,
      description:
        "Pages with less than 300 words often struggle to rank because there isn't enough text for search engines to understand the topic.",
      fix: "Add depth: explain who you serve, what makes you different, FAQs, testimonials, service details. Aim for 600+ words on landing pages.",
      metric: wordCount,
    })
  } else {
    issues.push({
      id: "content-length-ok",
      category: "content",
      severity: "passed",
      title: `Page has ~${wordCount} words of content`,
      description: "Solid content depth.",
      fix: "",
    })
  }
  if (contentBytes > 1_500_000) {
    issues.push({
      id: "html-too-large",
      category: "performance",
      severity: "warning",
      title: `HTML payload is ${(contentBytes / 1024).toFixed(0)} KB`,
      description:
        "Large HTML responses delay first paint, especially on mobile networks.",
      fix: "Server-side render less, lazy-load below-the-fold sections, or split the page.",
      metric: contentBytes,
    })
  }
  return issues
}

export function checkHttps(finalUrl: string): Issue[] {
  try {
    const u = new URL(finalUrl)
    if (u.protocol !== "https:") {
      return [
        {
          id: "no-https",
          category: "best-practices",
          severity: "critical",
          title: "Site is not served over HTTPS",
          description:
            "HTTPS is a Google ranking signal and required for modern browser features. Visitors also see a warning in the address bar.",
          fix: "Install an SSL certificate and force all traffic to https:// (your hosting provider likely offers free Let's Encrypt SSL).",
        },
      ]
    }
  } catch {
    // skip
  }
  return [
    {
      id: "https-ok",
      category: "best-practices",
      severity: "passed",
      title: "Site is served over HTTPS",
      description: "Secure connection confirmed.",
      fix: "",
    },
  ]
}

export function checkResponseTime(ms: number): Issue[] {
  if (ms > 2000) {
    return [
      {
        id: "slow-response",
        category: "performance",
        severity: ms > 4000 ? "critical" : "warning",
        title: `Server response took ${(ms / 1000).toFixed(1)}s`,
        description:
          "Slow Time to First Byte (TTFB) hurts every other performance metric. Google considers anything over 800ms problematic.",
        fix: "Investigate server-side bottlenecks: database queries, API calls, lack of caching. Consider a CDN or faster host.",
        metric: ms,
      },
    ]
  }
  return [
    {
      id: "response-time-ok",
      category: "performance",
      severity: "passed",
      title: `Fast server response (${ms}ms)`,
      description: "Server responded quickly — good for both users and crawl budget.",
      fix: "",
    },
  ]
}

export function checkRobotsTxt(present: boolean, body: string): Issue[] {
  if (!present) {
    return [
      {
        id: "no-robots-txt",
        category: "seo",
        severity: "notice",
        title: "No robots.txt found at /robots.txt",
        description:
          "robots.txt tells search engines what to crawl and points to your sitemap. While not required, it's standard for any production site.",
        fix: "Create a robots.txt at the site root. At minimum: 'User-agent: *\\nAllow: /\\nSitemap: https://yoursite.com/sitemap.xml'.",
      },
    ]
  }
  if (!/sitemap\s*:/i.test(body)) {
    return [
      {
        id: "robots-no-sitemap",
        category: "seo",
        severity: "notice",
        title: "robots.txt doesn't reference a sitemap",
        description:
          "Including a Sitemap: directive in robots.txt helps search engines discover all your URLs faster.",
        fix: "Add a line like 'Sitemap: https://yoursite.com/sitemap.xml' to your robots.txt.",
      },
    ]
  }
  return [
    {
      id: "robots-ok",
      category: "seo",
      severity: "passed",
      title: "robots.txt is set up correctly",
      description: "robots.txt exists and references a sitemap.",
      fix: "",
    },
  ]
}

export function checkSitemap(present: boolean, body: string): Issue[] {
  if (!present) {
    return [
      {
        id: "no-sitemap",
        category: "seo",
        severity: "warning",
        title: "No sitemap.xml found at /sitemap.xml",
        description:
          "A sitemap is the fastest way to tell Google about every page on your site. Without one, you depend entirely on crawl discovery.",
        fix: "Generate a sitemap.xml (Next.js can do this automatically with a sitemap.ts file) and submit it in Google Search Console.",
      },
    ]
  }
  const urlCount = (body.match(/<url>/g) || []).length
  return [
    {
      id: "sitemap-ok",
      category: "seo",
      severity: "passed",
      title: `Sitemap detected (${urlCount} URLs)`,
      description: "sitemap.xml is reachable and contains entries.",
      fix: "",
      metric: urlCount,
    },
  ]
}

export function checkFavicon(favicon: string | null): Issue[] {
  if (!favicon) {
    return [
      {
        id: "no-favicon",
        category: "best-practices",
        severity: "notice",
        title: "No favicon declared",
        description:
          "Favicons appear in browser tabs, bookmarks, and search results. Missing one looks unprofessional.",
        fix: "Add <link rel=\"icon\" href=\"/favicon.ico\"> (and ideally an Apple touch icon) to your <head>.",
      },
    ]
  }
  return []
}

// ─── Security headers ─────────────────────────────────────────────────────

export function checkSecurityHeaders(
  headers: Record<string, string>,
): Issue[] {
  const issues: Issue[] = []

  const hsts = headers["strict-transport-security"]
  if (!hsts) {
    issues.push({
      id: "no-hsts",
      category: "best-practices",
      severity: "warning",
      title: "Missing HSTS header",
      description:
        "HTTP Strict Transport Security forces browsers to use HTTPS, preventing downgrade attacks. Google flags missing HSTS in security audits.",
      fix: "Add a response header: Strict-Transport-Security: max-age=31536000; includeSubDomains",
    })
  } else {
    const m = hsts.match(/max-age=(\d+)/i)
    const maxAge = m ? parseInt(m[1], 10) : 0
    if (maxAge < 31536000) {
      issues.push({
        id: "weak-hsts",
        category: "best-practices",
        severity: "notice",
        title: `HSTS max-age is short (${maxAge}s)`,
        description:
          "HSTS is set but the max-age is below the recommended 1 year (31536000 seconds).",
        fix: "Bump max-age to at least 31536000 and consider adding includeSubDomains.",
        evidence: hsts,
      })
    } else {
      issues.push({
        id: "hsts-ok",
        category: "best-practices",
        severity: "passed",
        title: "HSTS is configured",
        description: `Strict-Transport-Security max-age=${maxAge}s.`,
        fix: "",
      })
    }
  }

  if (!headers["content-security-policy"]) {
    issues.push({
      id: "no-csp",
      category: "best-practices",
      severity: "notice",
      title: "No Content Security Policy header",
      description:
        "CSP is the strongest defense against XSS. It's not required, but every modern site should have at least a basic policy.",
      fix: "Add a Content-Security-Policy header. Start with a report-only policy to learn what your site needs.",
    })
  }

  const xfo = headers["x-frame-options"]?.toLowerCase()
  if (!xfo && !headers["content-security-policy"]?.includes("frame-ancestors")) {
    issues.push({
      id: "no-xfo",
      category: "best-practices",
      severity: "notice",
      title: "Missing clickjacking protection",
      description:
        "Without X-Frame-Options or a CSP frame-ancestors directive, attackers can embed your site in a hidden iframe to trick users.",
      fix: "Add X-Frame-Options: SAMEORIGIN (or DENY) to your response headers.",
    })
  }

  if (!headers["x-content-type-options"]) {
    issues.push({
      id: "no-nosniff",
      category: "best-practices",
      severity: "notice",
      title: "Missing X-Content-Type-Options",
      description:
        "Prevents browsers from MIME-sniffing responses. A 1-line header that closes a real attack vector.",
      fix: "Add X-Content-Type-Options: nosniff to your response headers.",
    })
  }

  if (!headers["referrer-policy"]) {
    issues.push({
      id: "no-referrer-policy",
      category: "best-practices",
      severity: "notice",
      title: "No Referrer-Policy header",
      description:
        "Without an explicit policy, browsers leak your URLs (sometimes including query parameters) to third-party sites you link to.",
      fix: "Add Referrer-Policy: strict-origin-when-cross-origin to your response headers.",
    })
  }

  return issues
}

// ─── Heading outline ──────────────────────────────────────────────────────

export function getHeadingOutline($: cheerio.CheerioAPI): HeadingNode[] {
  const flat: HeadingNode[] = []
  $("h1, h2, h3, h4, h5, h6").each((_, el) => {
    const level = parseInt(el.tagName.slice(1), 10) as HeadingNode["level"]
    const text = $(el).text().trim().replace(/\s+/g, " ").slice(0, 200)
    if (text) flat.push({ level, text, children: [] })
  })

  const root: HeadingNode[] = []
  const stack: HeadingNode[] = []
  for (const node of flat) {
    while (stack.length && stack[stack.length - 1].level >= node.level) {
      stack.pop()
    }
    if (stack.length === 0) {
      root.push(node)
    } else {
      stack[stack.length - 1].children.push(node)
    }
    stack.push(node)
  }
  return root
}

export function checkHeadingHierarchy($: cheerio.CheerioAPI): Issue[] {
  const headings = $("h1, h2, h3, h4, h5, h6")
  const skips: string[] = []
  let prevLevel = 0
  headings.each((_, el) => {
    const level = parseInt(el.tagName.slice(1), 10)
    if (prevLevel > 0 && level - prevLevel > 1) {
      skips.push(`h${prevLevel} → h${level}`)
    }
    prevLevel = level
  })
  if (skips.length > 0) {
    return [
      {
        id: "heading-skips",
        category: "accessibility",
        severity: "notice",
        title: `Heading levels skip in ${skips.length} place${skips.length > 1 ? "s" : ""}`,
        description:
          "Screen readers use heading levels to navigate. Jumping from H1 to H3 (skipping H2) breaks that flow.",
        fix: "Re-order or re-tag headings so each level only steps down by one.",
        evidence: skips.slice(0, 5).join(", "),
        metric: skips.length,
      },
    ]
  }
  return []
}

// ─── Tech stack detection ─────────────────────────────────────────────────

const TECH_PATTERNS: Array<{
  name: DetectedTech["name"]
  category: DetectedTech["category"]
  patterns: RegExp[]
}> = [
  {
    name: "Google Analytics 4",
    category: "analytics",
    patterns: [
      /googletagmanager\.com\/gtag\/js\?id=G-[A-Z0-9]+/i,
      /gtag\(['"]config['"]\s*,\s*['"]G-[A-Z0-9]+/i,
    ],
  },
  {
    name: "Google Analytics (Universal)",
    category: "analytics",
    patterns: [/google-analytics\.com\/analytics\.js/i, /UA-\d+-\d+/i],
  },
  {
    name: "Google Tag Manager",
    category: "tag-manager",
    patterns: [/googletagmanager\.com\/gtm\.js\?id=GTM-/i, /GTM-[A-Z0-9]+/i],
  },
  {
    name: "Meta (Facebook) Pixel",
    category: "advertising",
    patterns: [/connect\.facebook\.net\/.+\/fbevents\.js/i, /fbq\(['"]init['"]/i],
  },
  {
    name: "Hotjar",
    category: "analytics",
    patterns: [/static\.hotjar\.com/i, /hjid:\s*\d+/i],
  },
  {
    name: "Microsoft Clarity",
    category: "analytics",
    patterns: [/clarity\.ms\/tag\//i, /clarity\(["']set/i],
  },
  {
    name: "HubSpot",
    category: "analytics",
    patterns: [/js\.hs-scripts\.com/i, /js\.hs-analytics\.net/i],
  },
  {
    name: "Google Fonts",
    category: "fonts",
    patterns: [/fonts\.googleapis\.com/i, /fonts\.gstatic\.com/i],
  },
  {
    name: "WordPress",
    category: "cms",
    patterns: [/wp-content\//i, /wp-includes\//i, /<meta name="generator" content="WordPress/i],
  },
  {
    name: "Next.js",
    category: "framework",
    patterns: [/_next\/static/i, /__NEXT_DATA__/],
  },
  {
    name: "Shopify",
    category: "cms",
    patterns: [/cdn\.shopify\.com/i, /Shopify\.theme/i],
  },
  {
    name: "Webflow",
    category: "cms",
    patterns: [/data-wf-page/i, /webflow\.com/i],
  },
  {
    name: "Squarespace",
    category: "cms",
    patterns: [/squarespace\.com/i, /Static\.SQUARESPACE_CONTEXT/i],
  },
  {
    name: "Wix",
    category: "cms",
    patterns: [/wix\.com\/_partials/i, /static\.parastorage\.com/i],
  },
]

export function detectTechStack(html: string): DetectedTech[] {
  return TECH_PATTERNS.map(({ name, category, patterns }) => {
    const match = patterns.find((p) => p.test(html))
    return {
      name,
      category,
      detected: !!match,
      evidence: match ? match.source.slice(0, 60) : undefined,
    }
  })
}

export function checkTechStack(detected: DetectedTech[]): Issue[] {
  const issues: Issue[] = []

  const hasAnalytics = detected.some(
    (t) => t.category === "analytics" && t.detected,
  )
  const hasTagManager = detected.some(
    (t) => t.category === "tag-manager" && t.detected,
  )

  if (!hasAnalytics && !hasTagManager) {
    issues.push({
      id: "no-analytics",
      category: "best-practices",
      severity: "warning",
      title: "No website analytics detected",
      description:
        "We didn't find Google Analytics, Microsoft Clarity, Hotjar, or HubSpot tracking on your page. You're flying blind on traffic, conversions, and user behavior.",
      fix: "Install Google Analytics 4 (free) at minimum. Add Microsoft Clarity for free heatmaps and session recordings.",
    })
  } else {
    const found = detected
      .filter((t) => t.detected && (t.category === "analytics" || t.category === "tag-manager"))
      .map((t) => t.name)
    issues.push({
      id: "analytics-ok",
      category: "best-practices",
      severity: "passed",
      title: `Analytics detected: ${found.join(", ")}`,
      description: "You're tracking visitor behavior — good.",
      fix: "",
    })
  }

  return issues
}

// ─── Content readability ──────────────────────────────────────────────────

function countSyllables(word: string): number {
  word = word.toLowerCase().replace(/[^a-z]/g, "")
  if (!word) return 0
  if (word.length <= 3) return 1
  // Strip silent e
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "")
  word = word.replace(/^y/, "")
  const matches = word.match(/[aeiouy]{1,2}/g)
  return matches ? matches.length : 1
}

export function buildReadabilityReport(
  $: cheerio.CheerioAPI,
): ReadabilityReport | null {
  // Use main/article if present, else body, but exclude scripts/styles/nav/footer
  const $clone = cheerio.load($.html())
  $clone("script, style, nav, header, footer, aside, noscript").remove()
  const root =
    $clone("main").length > 0
      ? $clone("main")
      : $clone("article").length > 0
        ? $clone("article")
        : $clone("body")
  const text = root.text().replace(/\s+/g, " ").trim()
  if (!text) return null

  const words = text.match(/\b[\w'-]+\b/g) || []
  const wordCount = words.length
  if (wordCount < 50) return null

  const sentences = text.split(/[.!?]+\s+/).filter((s) => s.trim().length > 5)
  const sentenceCount = Math.max(1, sentences.length)

  const paragraphs: string[] = []
  $clone("p").each((_, el) => {
    const t = $clone(el).text().trim()
    if (t) paragraphs.push(t)
  })
  const paragraphCount = Math.max(1, paragraphs.length)

  const totalSyllables = words.reduce((sum, w) => sum + countSyllables(w), 0)

  const avgWordsPerSentence = wordCount / sentenceCount
  const avgWordsPerParagraph =
    paragraphs.length > 0
      ? paragraphs.reduce(
          (s, p) => s + (p.match(/\b[\w'-]+\b/g) || []).length,
          0,
        ) / paragraphCount
      : wordCount / paragraphCount
  const avgSyllablesPerWord = totalSyllables / wordCount

  // Flesch Reading Ease: 206.835 - 1.015*(words/sentences) - 84.6*(syllables/words)
  const flesch = Math.round(
    206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord,
  )

  let grade: string | null = null
  if (flesch >= 90) grade = "Very easy (5th grade)"
  else if (flesch >= 80) grade = "Easy (6th grade)"
  else if (flesch >= 70) grade = "Fairly easy (7th grade)"
  else if (flesch >= 60) grade = "Standard (8–9th grade)"
  else if (flesch >= 50) grade = "Fairly difficult (10–12th grade)"
  else if (flesch >= 30) grade = "Difficult (college)"
  else grade = "Very difficult (college graduate)"

  const longestParagraphWords = paragraphs.reduce(
    (max, p) => Math.max(max, (p.match(/\b[\w'-]+\b/g) || []).length),
    0,
  )

  return {
    wordCount,
    sentenceCount,
    paragraphCount,
    avgWordsPerSentence: Math.round(avgWordsPerSentence * 10) / 10,
    avgWordsPerParagraph: Math.round(avgWordsPerParagraph * 10) / 10,
    fleschReadingEase: flesch,
    fleschGrade: grade,
    longestParagraphWords,
  }
}

export function checkReadability(
  report: ReadabilityReport | null,
): Issue[] {
  if (!report) return []
  const issues: Issue[] = []

  if (report.fleschReadingEase !== null && report.fleschReadingEase < 50) {
    issues.push({
      id: "hard-to-read",
      category: "content",
      severity: "warning",
      title: `Content reads at ${report.fleschGrade} level`,
      description: `Flesch Reading Ease score: ${report.fleschReadingEase}. Most local-business audiences read most comfortably at 8th–9th grade level (60–70).`,
      fix: "Shorten sentences, use simpler words, break dense paragraphs into bullets. Aim for an 8th-grade reading level.",
      metric: report.fleschReadingEase,
    })
  } else if (report.fleschReadingEase !== null) {
    issues.push({
      id: "readability-ok",
      category: "content",
      severity: "passed",
      title: `Content reads at ${report.fleschGrade} level`,
      description: `Flesch Reading Ease score: ${report.fleschReadingEase}. Easy enough for most readers.`,
      fix: "",
    })
  }

  if (report.avgWordsPerSentence > 25) {
    issues.push({
      id: "long-sentences",
      category: "content",
      severity: "notice",
      title: `Sentences average ${report.avgWordsPerSentence} words`,
      description:
        "Long sentences hurt readability and SEO snippet quality. Aim for 14–20 words on average.",
      fix: "Break complex sentences into two. Use periods instead of commas. Cut filler phrases.",
      metric: report.avgWordsPerSentence,
    })
  }

  if (report.longestParagraphWords > 150) {
    issues.push({
      id: "wall-of-text",
      category: "content",
      severity: "notice",
      title: `Longest paragraph is ${report.longestParagraphWords} words`,
      description:
        "Walls of text scare off mobile readers. People scan first, read second.",
      fix: "Break long paragraphs at natural pauses. Aim for 50–80 words per paragraph max.",
      metric: report.longestParagraphWords,
    })
  }

  return issues
}

import { SectionHeader } from "@/components/ui/section-header"
import { Check, ArrowRight } from "lucide-react"

type SeoItem = {
  title: string
  body: string
  metric: string
}

const items: SeoItem[] = [
  {
    title: "Wix schema markup on every page",
    body: "JSON-LD for LocalBusiness, Service, FAQPage, BreadcrumbList, and Product injected via Velo — not the truncated defaults.",
    metric: "5+ schemas / page",
  },
  {
    title: "Hand-written titles + meta",
    body: "Per-page title tags, descriptions, OG and Twitter cards keyword-mapped to the queries that actually convert for your business.",
    metric: "100% pages",
  },
  {
    title: "Wix Lighthouse + Core Web Vitals",
    body: "Image compression to WebP, font subsetting, deferred third-party scripts, lazy-load below the fold — tuned on a real mid-tier Android.",
    metric: "Mobile 90+",
  },
  {
    title: "Clean URL slugs + 301 map",
    body: "Short, keyword-mapped slugs across every Wix Editor or Wix Studio page. Migration projects ship with a complete redirect map.",
    metric: "Zero rank loss",
  },
  {
    title: "Internal-link topology",
    body: "We map the link graph between service pages, location pages, blog posts, and product pages — compounding Wix SEO authority over time.",
    metric: "8–14 links / page",
  },
  {
    title: "Image alt text + filenames",
    body: "Every image renamed and alt-tagged with descriptive, keyword-mapped copy — accessibility win and a quiet ranking lift.",
    metric: "100% covered",
  },
  {
    title: "Sitemap + robots tuned",
    body: "Wix's auto-sitemap reviewed and trimmed (no orphan thank-you pages, no draft leaks); robots.txt customized; Search Console verified.",
    metric: "Indexed cleanly",
  },
  {
    title: "Wix CMS content scaffolding",
    body: "On Wix Studio, we use CMS collections so location pages, services, and FAQs render as structured, keyword-rich dynamic pages.",
    metric: "Scales with content",
  },
  {
    title: "Local SEO + GMB linkage",
    body: "NAP consistency, embedded map, GMB profile linked, review schema, and city/service landing pages — for local Wix sites that need to rank.",
    metric: "Local pack ready",
  },
  {
    title: "Page-speed budget enforcement",
    body: "Every page ships under a hard performance budget — 1.5s LCP target on 4G mobile, no third-party script over 50KB without justification.",
    metric: "<2s LCP target",
  },
  {
    title: "Analytics + Search Console wired",
    body: "GA4, Meta Pixel, Microsoft Clarity, and Google Search Console — installed via Wix's tag manager, event-mapped to bookings/orders.",
    metric: "Day-1 attribution",
  },
  {
    title: "Post-launch indexing audit",
    body: "Two weeks after launch: indexing check, Core Web Vitals re-pass, fix any soft-404s, submit re-crawl requests, document remaining lifts.",
    metric: "Tuned for 6 months",
  },
]

export function WixSeoAccelerator() {
  return (
    <section
      id="wix-seo-accelerator"
      aria-labelledby="wix-seo-accelerator-heading"
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--surface) 60%, var(--bg) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(214,255,85,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-8%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(17,109,255,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Wix SEO accelerator"
          heading={
            <span id="wix-seo-accelerator-heading">
              Yes, Wix can rank — here's the{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">12-point checklist</span>.
              </span>
            </span>
          }
          paragraph={`"Is Wix good for SEO?" — yes, when you actually do the work. Stock Wix ships the basics; we ship the layer above it. Twelve technical, on-page, and content moves we run on every Wix website design — addressed head-on so your rankings don't live on hope.`}
        />

        {/* Checklist grid */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {items.map((item, i) => (
            <SeoRow key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Score callout */}
        <div
          className="mt-12 max-w-[860px] mx-auto rounded-[var(--radius-xl)] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0B0B0B 0%, #181818 60%, #1a1a1a 100%)",
            border: "1px solid rgba(214,255,85,0.30)",
          }}
        >
          <div className="px-6 sm:px-8 py-7 grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-5 sm:gap-7 items-center">
            <span
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-extrabold text-[24px] sm:text-[28px] mx-auto sm:mx-0"
              style={{
                background:
                  "linear-gradient(135deg, #D6FF55 0%, #B8E840 100%)",
                color: "#0B0B0B",
                boxShadow: "0 0 0 6px rgba(214,255,85,0.18)",
              }}
            >
              12 / 12
            </span>
            <div className="text-center sm:text-left">
              <h3
                className="text-[18px] sm:text-[20px] font-bold tracking-tight"
                style={{ color: "#fff" }}
              >
                Every Wix website design ships with all 12 points done.
              </h3>
              <p
                className="mt-1.5 text-[14px] leading-[1.5]"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                No SEO upsell. No "phase 2." Built into the base Wix website
                design engagement, including a post-launch indexing pass.
              </p>
            </div>
            <a
              href="/services/seo/on-page"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-bold whitespace-nowrap mx-auto sm:mx-0"
              style={{
                background: "rgba(214,255,85,0.16)",
                color: "#D6FF55",
                border: "1px solid rgba(214,255,85,0.38)",
              }}
            >
              See full on-page SEO process
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Have an existing Wix site that won't rank?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
            style={{ color: "#0B0B0B" }}
          >
            Book a free Wix SEO audit
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

function SeoRow({ item, index }: { item: SeoItem; index: number }) {
  return (
    <div
      className="card-surface card-surface-hover p-5"
      style={{
        borderRadius: "var(--radius-md)",
        animation: `fadeInUp 0.5s ease-out ${0.03 * index}s both`,
      }}
    >
      <div className="flex items-start gap-3">
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-[11.5px]"
          style={{
            background: "#0B0B0B",
            color: "#D6FF55",
          }}
        >
          <Check className="w-3.5 h-3.5" strokeWidth={3} />
        </span>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3
              className="text-[14.5px] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              {item.title}
            </h3>
            <span
              className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-[0.06em]"
              style={{
                background: "rgba(214,255,85,0.20)",
                color: "#0B0B0B",
                border: "1px solid rgba(214,255,85,0.40)",
              }}
            >
              {item.metric}
            </span>
          </div>
          <p
            className="mt-2 text-[13px] leading-[1.55]"
            style={{ color: "var(--muted)" }}
          >
            {item.body}
          </p>
        </div>
      </div>
    </div>
  )
}

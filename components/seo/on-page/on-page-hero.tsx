import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { FileCode2, Check, Star } from "lucide-react"

const proofPills = [
  { label: "10-element on-page framework" },
  { label: "Schema on every URL" },
  { label: "Content score ≥ 85/100" },
  { label: "250+ pages ranked" },
]

export function OnPageHero() {
  return (
    <section
      aria-labelledby="on-page-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Blue-dominant ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.18) 0%, rgba(22,119,255,0.05) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[20%] left-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[10%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(11,19,43,0.08) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <a href="/" className="hover:text-[var(--accent)]">
                Home
              </a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a href="/services" className="hover:text-[var(--accent)]">
                Services
              </a>
            </li>
            <li aria-hidden>/</li>
            <li>
              <a href="/services/seo" className="hover:text-[var(--accent)]">
                SEO
              </a>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              On-Page SEO
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(22,119,255,0.08)",
                borderColor: "rgba(22,119,255,0.22)",
                color: "#1677FF",
              }}
            >
              <FileCode2 className="w-3.5 h-3.5" strokeWidth={2.5} />
              On-Page SEO · Content + structure
            </span>

            <h1
              id="on-page-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              On-Page SEO that makes Google{" "}
              <span className="accent-underline">understand</span> every{" "}
              <span className="whitespace-nowrap">page you publish.</span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Done-for-you on-page SEO services. We tune every{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                title tag, meta description, heading, schema markup
              </span>
              , and internal link so Google classifies your pages correctly
              and ranks them for the queries your customers actually search.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get your free on-page audit
              </PrimaryButton>
              <SecondaryButton asLink href="#on-page-elements">
                See what we tune
              </SecondaryButton>
            </div>

            {/* Proof ribbon */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#1677FF" }}
                  />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: annotated page teardown */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <AnnotatedPageTeardown />
          </div>
        </div>
      </div>
    </section>
  )
}

type Signal = {
  tag: string
  tagColor: string
  label: string
  sub: string
}

const signals: Signal[] = [
  {
    tag: "<title>",
    tagColor: "#1677FF",
    label: "Title tag",
    sub: "Keyword-led, ≤60 chars",
  },
  {
    tag: "<meta>",
    tagColor: "#2B8AFF",
    label: "Meta description",
    sub: "Intent-matched, ≤155 chars",
  },
  {
    tag: "<h1>",
    tagColor: "#0EA5E9",
    label: "H1 + heading tree",
    sub: "One per page, semantic tree",
  },
  {
    tag: "schema",
    tagColor: "#F59E0B",
    label: "JSON-LD schema",
    sub: "Article · FAQ · Service",
  },
  {
    tag: "alt=\"\"",
    tagColor: "#10B981",
    label: "Image alt text",
    sub: "Descriptive, keyword-rich",
  },
  {
    tag: "<a>",
    tagColor: "#8B5CF6",
    label: "Internal links",
    sub: "Semantic anchors, 3-8 per page",
  },
]

function AnnotatedPageTeardown() {
  return (
    <div className="relative max-w-[540px] mx-auto">
      {/* Main inspector card */}
      <div
        className="relative card-surface overflow-hidden"
        style={{ borderRadius: "var(--radius-xl)" }}
      >
        {/* Window chrome */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{
            background: "linear-gradient(180deg, #F7F9FC 0%, #EEF3FA 100%)",
            borderColor: "var(--border-color)",
          }}
        >
          <span className="flex gap-1.5">
            <span
              className="w-[10px] h-[10px] rounded-full"
              style={{ background: "#FF5F57" }}
            />
            <span
              className="w-[10px] h-[10px] rounded-full"
              style={{ background: "#FEBC2E" }}
            />
            <span
              className="w-[10px] h-[10px] rounded-full"
              style={{ background: "#28C840" }}
            />
          </span>
          <div
            className="ml-2 flex-1 px-3 py-1 text-[11px] font-mono rounded-md truncate"
            style={{
              background: "#fff",
              color: "#6B7280",
              border: "1px solid var(--border-color)",
            }}
          >
            google.com/search?q=on-page+seo+services
          </div>
        </div>

        {/* Top section: polished SERP result */}
        <div
          className="px-5 sm:px-6 pt-5 pb-5"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #FAFBFE 100%)",
          }}
        >
          <div
            className="text-[10px] font-bold uppercase tracking-[0.1em] mb-2.5"
            style={{ color: "#1677FF" }}
          >
            Google SERP result
          </div>
          <div className="flex items-center gap-1.5 text-[12px]">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
              style={{
                background:
                  "linear-gradient(135deg, #0B132B 0%, #1F2937 100%)",
                color: "#F59E0B",
              }}
            >
              M
            </div>
            <span className="font-medium" style={{ color: "#202124" }}>
              Max Market Pros
            </span>
            <span style={{ color: "#70757A" }}>
              · maxmarketpros.com › on-page-seo
            </span>
          </div>
          <div
            className="mt-1.5 text-[18px] leading-[1.3] font-medium"
            style={{ color: "#1A0DAB", letterSpacing: "-0.005em" }}
          >
            On-Page SEO Services — Rank Every Page | Max Market Pros
          </div>
          <div
            className="mt-1 text-[13px] leading-[1.5]"
            style={{ color: "#4D5156" }}
          >
            Done-for-you on-page SEO: title tags, meta descriptions, schema
            markup, internal linking, and content optimization that make
            Google understand every page.
          </div>
          <div className="mt-2 flex items-center gap-3 text-[12px]">
            <span
              className="inline-flex items-center gap-1"
              style={{ color: "#70757A" }}
            >
              <span className="flex gap-[1px]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-3 h-3"
                    style={{ color: "#F59E0B" }}
                    fill="#F59E0B"
                    strokeWidth={0}
                  />
                ))}
              </span>
              <span className="font-semibold">4.9</span>
              <span>(214)</span>
            </span>
            <span style={{ color: "#70757A" }}>· FAQ</span>
            <span style={{ color: "#70757A" }}>· 3 sitelinks</span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="px-5 sm:px-6 py-2.5 flex items-center gap-2 border-y"
          style={{
            background: "#F7F9FC",
            borderColor: "var(--border-color)",
          }}
        >
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Powered by
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--border-color)" }}
          />
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
            style={{
              background: "rgba(16,185,129,0.12)",
              color: "#059669",
            }}
          >
            <Check className="w-2.5 h-2.5" strokeWidth={3} />
            All 6 tuned
          </span>
        </div>

        {/* Bottom section: signals list (clean, no overlapping icons) */}
        <div className="divide-y" style={{ borderColor: "var(--border-color)" }}>
          {signals.map((s) => (
            <div
              key={s.tag}
              className="px-5 sm:px-6 py-3 flex items-center gap-3"
              style={{ borderColor: "var(--border-color)" }}
            >
              <span
                className="shrink-0 inline-flex items-center justify-center px-2 py-1 rounded-md text-[11px] font-mono font-bold"
                style={{
                  background: `${s.tagColor}14`,
                  color: s.tagColor,
                  border: `1px solid ${s.tagColor}30`,
                  minWidth: 76,
                }}
              >
                {s.tag}
              </span>
              <div className="min-w-0 flex-1">
                <div
                  className="text-[13.5px] font-semibold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {s.label}
                </div>
                <div
                  className="mt-0.5 text-[12px] leading-tight"
                  style={{ color: "var(--muted)" }}
                >
                  {s.sub}
                </div>
              </div>
              <Check
                className="w-[18px] h-[18px] shrink-0"
                strokeWidth={2.75}
                style={{ color: "#10B981" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge — top right */}
      <div
        className="hidden sm:flex absolute -top-3 -right-3 items-center gap-1.5 px-3 py-2 rounded-full text-[11.5px] font-semibold"
        style={{
          background: "#0B132B",
          color: "#74D3FF",
          boxShadow: "0 4px 16px rgba(11,19,43,0.25)",
        }}
      >
        <FileCode2 className="w-3.5 h-3.5" strokeWidth={2.5} />
        6 on-page signals tuned
      </div>

      {/* Floating stat — bottom left */}
      <div
        className="hidden sm:flex absolute -bottom-4 -left-4 flex-col items-start px-4 py-2.5 rounded-[var(--radius-sm)]"
        style={{
          background: "#fff",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.08), 0 10px 30px rgba(17,35,68,0.12)",
          border: "1px solid var(--border-color)",
        }}
      >
        <div
          className="text-[10px] font-semibold uppercase tracking-[0.08em]"
          style={{ color: "var(--muted)" }}
        >
          Content Score
        </div>
        <div className="flex items-baseline gap-1">
          <span
            className="text-[22px] font-bold leading-none"
            style={{ color: "var(--ink)" }}
          >
            94
          </span>
          <span
            className="text-[12px] font-semibold"
            style={{ color: "var(--muted)" }}
          >
            / 100
          </span>
        </div>
      </div>
    </div>
  )
}

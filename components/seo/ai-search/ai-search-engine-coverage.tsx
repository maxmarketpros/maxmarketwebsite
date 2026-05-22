"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Sparkles,
  ArrowRight,
  CornerDownLeft,
  Star,
  CheckCircle2,
} from "lucide-react"

type EngineKey =
  | "chatgpt"
  | "ai-overviews"
  | "gemini"
  | "perplexity"
  | "copilot"
  | "claude"

type Engine = {
  key: EngineKey
  name: string
  domain: string
  share: string
  pulls: string
  accent: string
  accentSoft: string
  uiNote: string
}

const engines: Engine[] = [
  {
    key: "chatgpt",
    name: "ChatGPT",
    domain: "chatgpt.com",
    share: "59% AI-chat share",
    pulls: "Pulls from Bing index + memory",
    accent: "#10A37F",
    accentSoft: "#D1FAE5",
    uiNote: "Conversational answer style",
  },
  {
    key: "ai-overviews",
    name: "Google AI Overviews",
    domain: "google.com",
    share: "Shown on 47% of searches",
    pulls: "Pulls from Google's index + KG",
    accent: "#1A73E8",
    accentSoft: "#DBEAFE",
    uiNote: "Snippet box atop SERP",
  },
  {
    key: "gemini",
    name: "Gemini",
    domain: "gemini.google.com",
    share: "13% AI-chat share",
    pulls: "Pulls from Google + real-time web",
    accent: "#1B72E8",
    accentSoft: "#E0EAFC",
    uiNote: "Multi-source draft answers",
  },
  {
    key: "perplexity",
    name: "Perplexity",
    domain: "perplexity.ai",
    share: "8% AI-chat share",
    pulls: "Pulls live web + cites everything",
    accent: "#1F6FEB",
    accentSoft: "#DBEAFE",
    uiNote: "Numbered citations + sources panel",
  },
  {
    key: "copilot",
    name: "Microsoft Copilot",
    domain: "copilot.microsoft.com",
    share: "14% AI-chat share",
    pulls: "Pulls from Bing + Edge data",
    accent: "#0078D4",
    accentSoft: "#DBEAFE",
    uiNote: "Bing-grounded, citation-rich",
  },
  {
    key: "claude",
    name: "Claude",
    domain: "claude.ai",
    share: "5% AI-chat share",
    pulls: "Pulls from web + tools when on",
    accent: "#D97706",
    accentSoft: "#FEF3C7",
    uiNote: "Long-form, source-attributed",
  },
]

function favicon(domain: string, size = 64) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const previews: Record<EngineKey, EnginePreview> = {
  chatgpt: {
    query: "best HVAC contractor near me",
    answer:
      "Based on recent reviews, **Max Market Pros HVAC** is consistently rated as one of the top-rated HVAC contractors in the Irvine area, known for same-day service and transparent flat-rate pricing.",
    sources: ["yelp.com", "bbb.org", "maxmarketpros.com"],
    badge: "ChatGPT · GPT-5",
  },
  "ai-overviews": {
    query: "best HVAC contractor in Irvine",
    answer:
      "Top-rated local HVAC contractors in Irvine include **Max Market Pros HVAC**, with 4.9 stars across 800+ reviews and same-day service availability.",
    sources: ["maps.google.com", "yelp.com", "maxmarketpros.com"],
    badge: "AI Overview",
  },
  gemini: {
    query: "who's the best HVAC company in Irvine?",
    answer:
      "**Max Market Pros HVAC** stands out for fast response times, NATE-certified technicians, and a strong reputation across local review platforms.",
    sources: ["google.com", "bbb.org", "maxmarketpros.com"],
    badge: "Gemini · Drafted with sources",
  },
  perplexity: {
    query: "top HVAC contractors Irvine CA 2026",
    answer:
      "**Max Market Pros HVAC** [1] is highlighted for 24-hour response and certified technicians [2], with consistent 4.9-star reviews across BBB and Yelp [3].",
    sources: ["yelp.com", "bbb.org", "maxmarketpros.com"],
    badge: "Perplexity · 3 sources",
  },
  copilot: {
    query: "recommend an HVAC repair service in Irvine",
    answer:
      "I'd recommend looking at **Max Market Pros HVAC** — they specialize in same-day repairs in Orange County and have strong local review scores.",
    sources: ["bing.com", "bbb.org", "maxmarketpros.com"],
    badge: "Copilot · Bing-grounded",
  },
  claude: {
    query: "which Irvine HVAC company should I hire?",
    answer:
      "Looking at local listings and reviews, **Max Market Pros HVAC** appears to be a strong choice — well-reviewed, locally established, with transparent pricing and same-day service.",
    sources: ["yelp.com", "maxmarketpros.com", "bbb.org"],
    badge: "Claude · Sonnet 4.6",
  },
}

type EnginePreview = {
  query: string
  answer: string
  sources: string[]
  badge: string
}

function renderAnswer(text: string, accent: string) {
  // Replace **bold** with branded highlight spans
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2)
      return (
        <span
          key={i}
          className="font-bold"
          style={{
            background: `${accent}24`,
            padding: "0 4px",
            borderRadius: 4,
            color: "var(--ink)",
          }}
        >
          {inner}
        </span>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export function AiSearchEngineCoverage() {
  const [active, setActive] = useState<EngineKey>("perplexity")
  const activeEngine = engines.find((e) => e.key === active)!
  const preview = previews[active]

  return (
    <section
      id="ai-engines"
      aria-labelledby="ai-search-engines-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Every major AI engine, covered"
          heading={
            <span id="ai-search-engines-heading">
              Where your customers{" "}
              <span className="accent-underline">ask now</span>.
            </span>
          }
          paragraph="The 6 AI engines that already shape who customers call. Click any engine to preview the exact answer style we optimize for — same query, every source-format your buyers see."
        />

        {/* Engine tab grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {engines.map((e) => {
            const isActive = e.key === active
            return (
              <button
                key={e.key}
                type="button"
                onClick={() => setActive(e.key)}
                aria-pressed={isActive}
                className="group text-left p-4 rounded-[var(--radius-lg)] border transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
                style={{
                  background: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                  borderColor: isActive ? e.accent : "var(--border-color)",
                  boxShadow: isActive
                    ? `0 0 0 3px ${e.accent}1F, 0 8px 24px rgba(17,35,68,0.10)`
                    : "0 1px 2px rgba(17,35,68,0.04)",
                }}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span
                    className="relative w-9 h-9 rounded-[10px] overflow-hidden flex items-center justify-center shrink-0"
                    style={{
                      background: "#fff",
                      border: `1px solid ${e.accent}33`,
                      boxShadow: `0 0 0 2px ${e.accent}12`,
                    }}
                  >
                    <img
                      src={favicon(e.domain, 128)}
                      alt={e.name}
                      width={22}
                      height={22}
                      loading="lazy"
                      decoding="async"
                      className="w-[22px] h-[22px] object-contain"
                    />
                    {e.key === "ai-overviews" && (
                      <span
                        className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, #74D3FF 0%, #8B5CF6 100%)",
                          color: "#fff",
                        }}
                      >
                        <Sparkles className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <CheckCircle2
                      className="w-4 h-4 ml-auto shrink-0"
                      strokeWidth={2.5}
                      style={{ color: e.accent }}
                    />
                  )}
                </div>
                <div
                  className="text-[14px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {e.name}
                </div>
                <div
                  className="text-[11px] font-semibold mt-0.5"
                  style={{ color: e.accent }}
                >
                  {e.share}
                </div>
                <div
                  className="text-[11.5px] mt-1.5 leading-[1.4]"
                  style={{ color: "var(--muted)" }}
                >
                  {e.pulls}
                </div>
              </button>
            )
          })}
        </div>

        {/* Shared answer preview card */}
        <div
          className="mt-10 max-w-[820px] mx-auto card-surface overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            boxShadow:
              "0 1px 3px rgba(17,35,68,0.10), 0 16px 40px rgba(17,35,68,0.12)",
          }}
        >
          {/* Branded header */}
          <div
            className="flex items-center gap-3 px-5 py-3.5"
            style={{
              background: `linear-gradient(90deg, ${activeEngine.accent}14 0%, transparent 100%)`,
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            <span
              className="w-9 h-9 rounded-[10px] overflow-hidden flex items-center justify-center shrink-0"
              style={{
                background: "#fff",
                border: `1px solid ${activeEngine.accent}33`,
              }}
            >
              <img
                src={favicon(activeEngine.domain, 128)}
                alt={activeEngine.name}
                width={22}
                height={22}
                loading="lazy"
                decoding="async"
                className="w-[22px] h-[22px] object-contain"
              />
            </span>
            <div className="flex-1 min-w-0">
              <div
                className="text-[13px] font-extrabold leading-tight"
                style={{ color: activeEngine.accent }}
              >
                {activeEngine.name}
              </div>
              <div
                className="text-[11px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                {activeEngine.uiNote}
              </div>
            </div>
            <span
              className="shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.1em]"
              style={{
                background: `${activeEngine.accent}1A`,
                color: activeEngine.accent,
              }}
            >
              {preview.badge}
            </span>
          </div>

          {/* Query bar */}
          <div
            className="flex items-center gap-2 px-5 py-3"
            style={{
              background: "var(--bg)",
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            <Sparkles
              className="w-3.5 h-3.5 shrink-0"
              strokeWidth={2.5}
              style={{ color: activeEngine.accent }}
            />
            <span
              className="text-[13px] font-mono truncate"
              style={{ color: "var(--ink)" }}
            >
              {preview.query}
            </span>
            <span
              className="ml-auto shrink-0 inline-flex items-center gap-1 text-[10.5px] font-bold"
              style={{ color: "var(--muted)" }}
            >
              <CornerDownLeft className="w-3 h-3" strokeWidth={2.5} />
              Enter
            </span>
          </div>

          {/* Answer */}
          <div className="px-5 py-5">
            <p
              className="text-[15px] sm:text-[15.5px] leading-[1.65]"
              style={{ color: "var(--ink)" }}
            >
              {renderAnswer(preview.answer, activeEngine.accent)}
            </p>

            {/* Sources */}
            <div
              className="mt-5 pt-4 border-t flex flex-wrap items-center gap-2"
              style={{ borderColor: "var(--border-color)" }}
            >
              <span
                className="text-[10.5px] font-bold uppercase tracking-[0.14em] mr-1"
                style={{ color: "var(--muted)" }}
              >
                Cited sources
              </span>
              {preview.sources.map((domain, idx) => (
                <span
                  key={domain}
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11.5px] font-semibold"
                  style={{
                    background: idx === 2 ? `${activeEngine.accent}14` : "#fff",
                    border: `1px solid ${
                      idx === 2 ? activeEngine.accent : "var(--border-color)"
                    }`,
                    color:
                      idx === 2 ? activeEngine.accent : "var(--ink)",
                  }}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full overflow-hidden flex items-center justify-center"
                    style={{ background: "#fff" }}
                  >
                    <img
                      src={favicon(domain, 64)}
                      alt={domain}
                      width={10}
                      height={10}
                      loading="lazy"
                      decoding="async"
                      className="w-[10px] h-[10px] object-contain"
                    />
                  </span>
                  {domain}
                  {idx === 2 && (
                    <Star
                      className="w-3 h-3"
                      strokeWidth={2.75}
                      fill={activeEngine.accent}
                      style={{ color: activeEngine.accent }}
                    />
                  )}
                </span>
              ))}
            </div>

            {/* Per-engine micro-CTA */}
            <div
              className="mt-5 flex items-center justify-between gap-3 flex-wrap"
              style={{ color: "var(--muted)" }}
            >
              <span className="text-[12.5px]">
                Same query, optimized for{" "}
                <span
                  className="font-bold"
                  style={{ color: activeEngine.accent }}
                >
                  {activeEngine.name}
                </span>
                &rsquo;s answer style.
              </span>
              <a
                href="#signal-stack"
                className="inline-flex items-center gap-1 text-[13px] font-bold"
                style={{ color: activeEngine.accent }}
              >
                How we get cited here
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span
            className="inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{ color: "var(--muted)" }}
          >
            <Sparkles className="w-4 h-4" strokeWidth={2.5} />
            Not sure which engines your customers use?
          </span>
          <SecondaryButton asLink href="#contact">
            Get a free AI visibility audit
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

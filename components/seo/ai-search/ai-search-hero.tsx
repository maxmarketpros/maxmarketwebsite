import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Layers,
  BadgeCheck,
  Mic,
  Search,
  ChevronDown,
  ChevronRight,
  ThumbsUp,
} from "lucide-react"

const proofPills = [
  { Icon: Sparkles, label: "Cited across 6 AI engines" },
  { Icon: BadgeCheck, label: "AI Overviews ready" },
  { Icon: Layers, label: "Schema-tuned content" },
  { Icon: ShieldCheck, label: "Free visibility audit" },
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function AiSearchHero() {
  return (
    <section
      aria-labelledby="ai-search-hero-heading"
      className="relative overflow-hidden"
    >
      {/* Glow stack — cyan / violet / blue (different from press-releases yellow) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-14%] right-[-8%] w-[520px] h-[520px] sm:w-[860px] sm:h-[860px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.20) 0%, rgba(116,211,255,0.05) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[18%] left-[-10%] w-[420px] h-[420px] sm:w-[680px] sm:h-[680px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[8%] w-[360px] h-[360px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
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
              AI Search Visibility
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background:
                  "linear-gradient(90deg, rgba(116,211,255,0.14) 0%, rgba(139,92,246,0.14) 100%)",
                borderColor: "rgba(116,211,255,0.32)",
                color: "#0E7490",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              AI Search · GEO · AEO · LLM SEO
            </span>

            <h1
              id="ai-search-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Be the business AI{" "}
              <span className="accent-underline">recommends</span> to your
              customers.
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              When customers ask{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                ChatGPT, Gemini, Perplexity, Microsoft Copilot, Claude
              </span>{" "}
              and Google&rsquo;s AI Overviews who to hire, we make sure your
              business is the answer they get — cited, sourced, and clicked.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Get found by AI
              </PrimaryButton>
              <SecondaryButton asLink href="#ai-engines">
                See how AI cites you
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(116,211,255,0.18) 0%, rgba(139,92,246,0.18) 100%)",
                      color: "#0E7490",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: AI answer card showcase */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <AiAnswerShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

// Google's brand colors used for accents
const GBLUE = "#1A73E8"
const GRED = "#EA4335"
const GYELLOW = "#FBBC04"
const GGREEN = "#34A853"

const sources = [
  {
    domain: "maxmarketpros.com",
    outlet: "Your Business",
    title: "HVAC Repair & Install — Irvine, CA",
    snippet: "Same-day HVAC repair across Orange County. NATE-certified.",
  },
  {
    domain: "yelp.com",
    outlet: "Yelp",
    title: "Top 10 Best HVAC in Irvine — Yelp",
    snippet: "4.9★ across 820+ reviews · Open 24 hours · Licensed",
  },
  {
    domain: "bbb.org",
    outlet: "Better Business Bureau",
    title: "BBB Accredited HVAC Contractor",
    snippet: "A+ rating · 12 years accredited · 0 complaints in 2025",
  },
]

const peopleAlsoAsk = [
  "How much does HVAC repair cost in Irvine?",
  "Who offers same-day AC service in Orange County?",
]

function AiAnswerShowcase() {
  return (
    <div className="relative max-w-[580px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-2deg) translate(-10px, 12px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(224,242,254,0.92) 100%)",
          border: "1px solid rgba(116,211,255,0.36)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(22,119,255,0.18)",
        }}
      />

      {/* Main card — Google SERP look */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "#fff",
          borderRadius: "var(--radius-xl)",
          border: "1px solid #DADCE0",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.08), 0 24px 60px rgba(17,35,68,0.16)",
        }}
      >
        {/* ── Google-style search bar ── */}
        <div
          className="flex items-center gap-3 px-4 sm:px-5 py-3"
          style={{ borderBottom: "1px solid #EDEFF2" }}
        >
          {/* Google G logo */}
          <span
            aria-hidden
            className="shrink-0 select-none text-[20px] font-bold leading-none"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <span style={{ color: GBLUE }}>G</span>
            <span style={{ color: GRED }}>o</span>
            <span style={{ color: GYELLOW }}>o</span>
            <span style={{ color: GBLUE }}>g</span>
            <span style={{ color: GGREEN }}>l</span>
            <span style={{ color: GRED }}>e</span>
          </span>

          {/* Pill query input */}
          <div
            className="flex-1 flex items-center gap-2 px-3.5 py-2 rounded-full min-w-0"
            style={{
              border: "1px solid #DFE1E5",
              background: "#fff",
              boxShadow: "0 1px 3px rgba(32,33,36,0.06)",
            }}
          >
            <span
              className="text-[13.5px] truncate"
              style={{ color: "#202124", fontFamily: "Arial, sans-serif" }}
            >
              best HVAC contractor in Irvine
              <span
                className="inline-block w-[1.5px] h-[13px] ml-1 align-[-2px]"
                style={{
                  background: "#202124",
                  animation: "subtlePulse 1.1s ease-in-out infinite",
                }}
              />
            </span>
            <Mic
              className="w-[15px] h-[15px] ml-auto shrink-0"
              strokeWidth={2}
              style={{ color: GBLUE }}
            />
            <Search
              className="w-[15px] h-[15px] shrink-0"
              strokeWidth={2}
              style={{ color: GBLUE }}
            />
          </div>
        </div>

        {/* ── SERP tabs row ── */}
        <div
          className="flex items-center gap-5 px-4 sm:px-5 pt-3"
          style={{ borderBottom: "1px solid #EDEFF2" }}
        >
          {[
            { label: "All", active: true },
            { label: "Images" },
            { label: "Videos" },
            { label: "Maps" },
            { label: "News" },
          ].map((t) => (
            <span
              key={t.label}
              className="text-[12.5px] font-medium pb-2.5 relative"
              style={{
                color: t.active ? GBLUE : "#5F6368",
                fontFamily: "Arial, sans-serif",
                borderBottom: t.active ? `2.5px solid ${GBLUE}` : "none",
                marginBottom: t.active ? "-1px" : 0,
              }}
            >
              {t.label}
            </span>
          ))}
          <span
            className="ml-auto text-[11px] pb-2.5"
            style={{
              color: "#5F6368",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Tools
          </span>
        </div>

        {/* ── AI Overview block ── */}
        <div
          className="relative px-4 sm:px-5 pt-4 pb-4"
          style={{
            background:
              "linear-gradient(180deg, #F0F4FF 0%, #FAFCFF 70%, #fff 100%)",
            borderBottom: "1px solid #EDEFF2",
          }}
        >
          {/* Soft Google-AI gradient ring on the left edge */}
          <div
            aria-hidden
            className="absolute top-3 left-0 bottom-3 w-[3px] rounded-r-full"
            style={{
              background:
                "linear-gradient(180deg, #4285F4 0%, #9B72CB 50%, #D96570 100%)",
            }}
          />

          {/* AI Overview header */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #4285F4 0deg, #9B72CB 90deg, #D96570 180deg, #F9AB00 270deg, #4285F4 360deg)",
                padding: 1.5,
              }}
            >
              <span
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ background: "#fff" }}
              >
                <Sparkles
                  className="w-3.5 h-3.5"
                  strokeWidth={2.5}
                  style={{ color: "#9B72CB" }}
                />
              </span>
            </span>
            <span
              className="text-[15px] font-semibold"
              style={{
                color: "#202124",
                fontFamily: "Arial, sans-serif",
              }}
            >
              AI Overview
            </span>
            <span
              className="ml-auto inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full"
              style={{
                background: "#E8F0FE",
                color: GBLUE,
                fontFamily: "Arial, sans-serif",
              }}
            >
              Search Labs
            </span>
          </div>

          {/* Body: answer (left) + source thumbnails (right) */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-4">
            {/* Answer text */}
            <div>
              <p
                className="text-[14.5px] leading-[1.6]"
                style={{
                  color: "#202124",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                For HVAC service in Irvine, customers most often recommend{" "}
                <span
                  className="font-semibold"
                  style={{ color: "#202124" }}
                >
                  Your Business
                </span>
                <sup
                  className="ml-0.5 text-[10px] font-medium"
                  style={{ color: GBLUE }}
                >
                  1
                </sup>{" "}
                — known for{" "}
                <span style={{ fontWeight: 600 }}>same-day repairs</span>,
                NATE-certified technicians, and 4.9-star reviews
                <sup
                  className="ml-0.5 text-[10px] font-medium"
                  style={{ color: GBLUE }}
                >
                  2
                </sup>
                . The company holds an A+ BBB rating with no recent
                complaints
                <sup
                  className="ml-0.5 text-[10px] font-medium"
                  style={{ color: GBLUE }}
                >
                  3
                </sup>
                .
              </p>

              {/* Footer row: helpful + show more */}
              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11.5px] font-medium"
                  style={{
                    background: "#fff",
                    border: "1px solid #DADCE0",
                    color: "#5F6368",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  <ThumbsUp className="w-3 h-3" strokeWidth={2} />
                  Helpful
                </button>
                <span
                  className="text-[11.5px]"
                  style={{
                    color: "#5F6368",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Generative AI is experimental
                </span>
                <a
                  href="#"
                  className="ml-auto inline-flex items-center gap-0.5 text-[12px] font-medium"
                  style={{
                    color: GBLUE,
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Show more
                  <ChevronDown className="w-3 h-3" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Source thumbnail panel (Google's signature side panel) */}
            <div className="space-y-2">
              {sources.map((s, idx) => (
                <a
                  key={s.domain}
                  href="#"
                  className="block px-2.5 py-2 rounded-[12px] hover:translate-y-[-1px] transition-all"
                  style={{
                    background: "#fff",
                    border: idx === 0 ? `1px solid ${GBLUE}66` : "1px solid #DADCE0",
                    boxShadow:
                      idx === 0
                        ? `0 0 0 2px ${GBLUE}1F, 0 1px 3px rgba(32,33,36,0.06)`
                        : "0 1px 2px rgba(32,33,36,0.04)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full overflow-hidden flex items-center justify-center shrink-0"
                      style={{ background: "#fff" }}
                    >
                      <img
                        src={favicon(s.domain, 64)}
                        alt={s.outlet}
                        width={12}
                        height={12}
                        loading="lazy"
                        decoding="async"
                        className="w-[12px] h-[12px] object-contain"
                      />
                    </span>
                    <span
                      className="text-[10.5px] truncate"
                      style={{
                        color: "#5F6368",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {s.outlet}
                    </span>
                    <span
                      className="ml-auto text-[10px] font-bold"
                      style={{
                        color: idx === 0 ? GBLUE : "#5F6368",
                      }}
                    >
                      {idx + 1}
                    </span>
                  </div>
                  <div
                    className="text-[11.5px] font-medium leading-[1.3] line-clamp-2"
                    style={{
                      color: idx === 0 ? GBLUE : "#202124",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {s.title}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── People also ask (Google-style) ── */}
        <div className="px-4 sm:px-5 py-3.5">
          <div
            className="text-[13.5px] font-semibold mb-2"
            style={{
              color: "#202124",
              fontFamily: "Arial, sans-serif",
            }}
          >
            People also ask
          </div>
          <ul className="space-y-0">
            {peopleAlsoAsk.map((q, i) => (
              <li
                key={q}
                className="flex items-center gap-2 py-2 cursor-pointer"
                style={{
                  borderTop: i === 0 ? "1px solid #EDEFF2" : "none",
                  borderBottom: "1px solid #EDEFF2",
                }}
              >
                <span
                  className="flex-1 text-[13px] truncate"
                  style={{
                    color: "#202124",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {q}
                </span>
                <ChevronDown
                  className="w-3.5 h-3.5 shrink-0"
                  strokeWidth={2.25}
                  style={{ color: "#5F6368" }}
                />
              </li>
            ))}
          </ul>

          {/* Cross-engine reassurance strip — small */}
          <div className="mt-3.5 pt-3 flex items-center gap-2 flex-wrap"
            style={{ borderTop: "1px dashed #DADCE0" }}
          >
            <Sparkles
              className="w-3 h-3 shrink-0"
              strokeWidth={2.5}
              style={{ color: "#9B72CB" }}
            />
            <span
              className="text-[10.5px] font-medium"
              style={{
                color: "#5F6368",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Same coverage applied to ChatGPT, Perplexity, Gemini, Copilot
              &amp; Claude
            </span>
            <a
              href="#ai-engines"
              className="ml-auto inline-flex items-center gap-0.5 text-[11.5px] font-semibold"
              style={{ color: GBLUE, fontFamily: "Arial, sans-serif" }}
            >
              See all 6
              <ChevronRight className="w-3 h-3" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Single floating accent (icons8 sparkles tile, Google-gradient ring) ── */}
      <div
        className="absolute -top-7 -right-6 z-20 hidden sm:block"
        style={{
          filter: "drop-shadow(0 12px 28px rgba(116,211,255,0.45))",
          transform: "rotate(8deg)",
        }}
      >
        <div
          className="w-[80px] h-[80px] rounded-[20px] flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(224,242,254,0.98) 100%)",
            border: "1px solid rgba(116,211,255,0.42)",
          }}
        >
          <img
            src={icons8Url("unXm4ixWAr6H", 256)}
            alt="AI"
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
            className="w-[56px] h-[56px] object-contain"
          />
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(116,211,255,0.40) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}

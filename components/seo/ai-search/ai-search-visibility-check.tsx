import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  Search,
  BarChart3,
  ListChecks,
  ArrowRight,
  Sparkles,
} from "lucide-react"

type Step = {
  num: string
  title: string
  body: string
  icons8: string
  Icon: typeof Search
  accent: string
  meta: string
  output: { label: string; value: string }
  cta: string
}

const steps: Step[] = [
  {
    num: "01",
    title: "Query sweep",
    body: "We run 25 real buyer queries across all 6 AI engines — the exact phrases customers type when they need your service.",
    icons8: "MSQWrXb2vEle",
    Icon: Search,
    accent: "#0EA5E9",
    meta: "ChatGPT · Gemini · Perplexity · Copilot · Claude · AI Overviews",
    output: { label: "Sample query", value: "best HVAC contractor near me" },
    cta: "See sample queries",
  },
  {
    num: "02",
    title: "Citation scoring",
    body: "We score brand mentions, sentiment, source authority, and competitor share — so you know exactly where AI is recommending someone else.",
    icons8: "13551",
    Icon: BarChart3,
    accent: "#8B5CF6",
    meta: "Citation rate · Sentiment · Source DR · Competitor share",
    output: { label: "Visibility score", value: "B− (rising to A+)" },
    cta: "See sample report",
  },
  {
    num: "03",
    title: "Fix-list delivery",
    body: "You get a prioritized, page-by-page plan you can ship in 30 days — schema, content, citations, and authority moves, all mapped.",
    icons8: "104234",
    Icon: ListChecks,
    accent: "#10B981",
    meta: "Schema · Content · Citations · Authority signals",
    output: { label: "Deliverable", value: "30-day fix list (PDF + Notion)" },
    cta: "See sample plan",
  },
]

export function AiSearchVisibilityCheck() {
  return (
    <section
      aria-labelledby="ai-search-visibility-check-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Free AI visibility audit"
          heading={
            <span id="ai-search-visibility-check-heading">
              See if AI{" "}
              <span className="accent-underline">mentions you</span>.
            </span>
          }
          paragraph="Most local service businesses have never tested whether AI engines recommend them. We run the test — across 6 engines, 25 real queries, and every major competitor — and hand you the fix list."
        />

        {/* 3-step cards with connecting dotted rail */}
        <div className="mt-14 relative">
          {/* Connecting dotted rail (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[112px] left-[12%] right-[12%] h-px z-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(14,165,233,0.4) 0%, rgba(139,92,246,0.4) 50%, rgba(16,185,129,0.4) 100%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          />

          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">
            {steps.map((s, idx) => (
              <li
                key={s.num}
                className="relative"
                style={{
                  animation: `fadeInUp 0.7s ease-out ${0.08 * idx}s both`,
                }}
              >
                {/* Step icon ring */}
                <div className="flex items-center justify-center relative z-10">
                  <div
                    className="relative w-[88px] h-[88px] rounded-[24px] flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
                      border: `1px solid ${s.accent}40`,
                      boxShadow: `0 4px 14px ${s.accent}1F, inset 0 1px 0 rgba(255,255,255,0.9)`,
                    }}
                  >
                    <img
                      src={icons8Url(s.icons8, 192)}
                      alt={s.title}
                      width={56}
                      height={56}
                      loading="lazy"
                      decoding="async"
                      className="w-[56px] h-[56px] object-contain"
                    />
                    {/* Step number badge */}
                    <span
                      className="absolute -top-2 -left-2 w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-extrabold"
                      style={{
                        background:
                          "linear-gradient(180deg, #0B132B 0%, #1F2937 100%)",
                        color: "#fff",
                        boxShadow: "0 4px 12px rgba(11,19,43,0.32)",
                        border: "3px solid #fff",
                      }}
                    >
                      {s.num}
                    </span>
                    {/* Active corner sparkle */}
                    <span
                      className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${s.accent} 0%, ${s.accent}CC 100%)`,
                        color: "#fff",
                        boxShadow: `0 4px 10px ${s.accent}55`,
                      }}
                    >
                      <s.Icon className="w-3.5 h-3.5" strokeWidth={2.75} />
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className="mt-6 card-surface card-surface-hover p-6"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <h3
                    className="text-[20px] font-bold leading-[1.2]"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2.5 text-[14.5px] leading-[1.6]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.body}
                  </p>

                  {/* Meta strip */}
                  <div
                    className="mt-4 text-[11px] font-bold uppercase tracking-[0.1em] leading-[1.4]"
                    style={{ color: s.accent }}
                  >
                    {s.meta}
                  </div>

                  {/* Output mini-tile */}
                  <div
                    className="mt-4 px-3.5 py-3 rounded-[var(--radius-sm)]"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent}10 0%, ${s.accent}04 100%)`,
                      border: `1px dashed ${s.accent}40`,
                    }}
                  >
                    <div
                      className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                      style={{ color: "var(--muted)" }}
                    >
                      {s.output.label}
                    </div>
                    <div
                      className="text-[14px] font-bold mt-0.5 font-mono"
                      style={{ color: "var(--ink)" }}
                    >
                      {s.output.value}
                    </div>
                  </div>

                  {/* Per-step CTA */}
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1 text-[13px] font-bold"
                    style={{ color: s.accent }}
                  >
                    {s.cta}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Section CTA */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <PrimaryButton size="lg" asLink href="#contact">
            <Sparkles className="w-4 h-4 mr-2" strokeWidth={2.5} />
            Run my free AI audit
          </PrimaryButton>
          <span className="text-[13.5px]" style={{ color: "var(--muted)" }}>
            No commitment · 5 business days · 25-query report
          </span>
        </div>
      </div>
    </section>
  )
}

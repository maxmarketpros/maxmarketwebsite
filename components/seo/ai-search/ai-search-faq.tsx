"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Plus, Search, Sparkles, Bot } from "lucide-react"
import { aiSearchFaqs } from "./ai-search-faq-data"

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "")
}

const compareCols = [
  {
    key: "seo",
    label: "SEO",
    sub: "Classic search rankings",
    Icon: Search,
    accent: "#1677FF",
    accentSoft: "#DBEAFE",
    body: "Optimizes for blue-link rankings in Google&rsquo;s SERP. Foundation for everything else.",
  },
  {
    key: "aeo",
    label: "AEO",
    sub: "Answer Engine Optimization",
    Icon: Bot,
    accent: "#0EA5E9",
    accentSoft: "#E0F2FE",
    body: "Optimizes pages to be the cited answer inside AI Overviews, ChatGPT, Perplexity, and voice search.",
  },
  {
    key: "geo",
    label: "GEO",
    sub: "Generative Engine Optimization",
    Icon: Sparkles,
    accent: "#8B5CF6",
    accentSoft: "#EDE9FE",
    body: "Feeds entity, schema, content, and authority signals into every generative AI engine.",
  },
]

export function AiSearchFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="ai-search-faq"
      aria-labelledby="ai-search-faq-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] right-[-5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="AI search, answered"
          heading={
            <span id="ai-search-faq-heading">
              Common AI search{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">questions</span>.
              </span>
            </span>
          }
          paragraph="The questions we get most from local service businesses researching AI search visibility — what AEO/GEO mean, how long it takes, what it costs, and whether it actually works."
        />

        {/* AEO / GEO / SEO comparison strip */}
        <div className="mt-12 max-w-[920px] mx-auto">
          <div
            className="text-center text-[11px] font-bold uppercase tracking-[0.14em] mb-4"
            style={{ color: "var(--muted)" }}
          >
            AEO vs GEO vs SEO — we cover all three
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            style={{ animation: "fadeInUp 0.7s ease-out both" }}
          >
            {compareCols.map((c, idx) => (
              <div
                key={c.key}
                className="card-surface card-surface-hover p-5 relative overflow-hidden"
                style={{
                  borderRadius: "var(--radius-lg)",
                  animation: `fadeInUp 0.6s ease-out ${0.08 * idx}s both`,
                }}
              >
                {/* Subtle accent corner */}
                <div
                  aria-hidden
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${c.accent}1A 0%, transparent 70%)`,
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                      style={{
                        background: c.accentSoft,
                        color: c.accent,
                        border: `1px solid ${c.accent}33`,
                      }}
                    >
                      <c.Icon className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                    <div>
                      <div
                        className="text-[18px] font-extrabold leading-none tracking-[-0.01em]"
                        style={{ color: c.accent }}
                      >
                        {c.label}
                      </div>
                      <div
                        className="text-[10.5px] font-bold uppercase tracking-[0.1em] mt-0.5"
                        style={{ color: "var(--muted)" }}
                      >
                        {c.sub}
                      </div>
                    </div>
                  </div>
                  <p
                    className="mt-3 text-[13.5px] leading-[1.55]"
                    style={{ color: "var(--muted)" }}
                    dangerouslySetInnerHTML={{ __html: c.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ accordion */}
        <div
          className="mt-12 max-w-[860px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out 0.1s both" }}
        >
          <ul
            className="divide-y rounded-[var(--radius-lg)] border overflow-hidden"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-color)",
              boxShadow:
                "0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)",
            }}
          >
            {aiSearchFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <li
                  key={faq.q}
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-start gap-5 px-5 sm:px-7 py-5 text-left cursor-pointer hover:bg-[var(--bg)] transition-colors"
                  >
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative transition-transform"
                      style={{
                        background: isOpen
                          ? "linear-gradient(135deg, #74D3FF 0%, #8B5CF6 100%)"
                          : "rgba(116,211,255,0.14)",
                        color: isOpen ? "#fff" : "#0E7490",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <Plus className="w-4 h-4" strokeWidth={2.75} />
                    </span>
                    <span
                      className="flex-1 text-[16px] sm:text-[17.5px] font-semibold leading-[1.35] pt-1"
                      style={{ color: "var(--ink)" }}
                    >
                      {faq.q}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="px-5 sm:px-7 pb-6 pl-[72px] sm:pl-[88px] text-[15px] sm:text-[16px] leading-[1.65]"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: faq.a }}
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Still unsure?
            </span>
            <SecondaryButton asLink href="#contact">
              Get a free AI visibility audit
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AiSearchFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aiSearchFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripHtml(f.a) },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

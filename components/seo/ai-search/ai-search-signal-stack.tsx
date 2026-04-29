import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import {
  Brain,
  Code2,
  FileText,
  Megaphone,
  Link2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

type Signal = {
  num: string
  title: string
  oneLiner: string
  body: string
  Icon: typeof Brain
  accent: string
  accentSoft: string
  href: string
  hrefLabel: string
  produced: string
}

const signals: Signal[] = [
  {
    num: "01",
    title: "Entity & E-E-A-T",
    oneLiner: "Who you are, provably.",
    body: "AI engines need to recognize your business as a real, trustworthy entity. We unify your knowledge graph, sameAs links, expertise signals, and review profile so engines can confidently cite you.",
    Icon: Brain,
    accent: "#8B5CF6",
    accentSoft: "#EDE9FE",
    href: "/services/seo/off-page",
    hrefLabel: "Off-page SEO",
    produced: "Knowledge Graph entry",
  },
  {
    num: "02",
    title: "Schema & structured data",
    oneLiner: "Machine-readable proof.",
    body: "LocalBusiness, Service, FAQ, Review, and Article schema make your pages parseable. AI Overviews + Perplexity lift directly from structured data — no schema, no citation.",
    Icon: Code2,
    accent: "#0EA5E9",
    accentSoft: "#E0F2FE",
    href: "/services/seo/technical",
    hrefLabel: "Technical SEO",
    produced: "100% schema coverage",
  },
  {
    num: "03",
    title: "Citable content blocks",
    oneLiner: "Answers AI can quote.",
    body: "We rewrite your service pages into the short, definitive, fact-dense blocks AI engines actually pull as citations — pricing tables, service-area lists, expert quotes, and FAQ pairs.",
    Icon: FileText,
    accent: "#10B981",
    accentSoft: "#D1FAE5",
    href: "/services/seo/on-page",
    hrefLabel: "On-page SEO",
    produced: "Quotable answer blocks",
  },
  {
    num: "04",
    title: "Brand mentions & PR",
    oneLiner: "Cited by who AI trusts.",
    body: "AI engines weight what authoritative sites say *about* you. Press releases on Yahoo Finance, AP News, and MarketWatch create the third-party mentions that compound your AI citation rate.",
    Icon: Megaphone,
    accent: "#F59E0B",
    accentSoft: "#FEF3C7",
    href: "/services/seo/press-releases",
    hrefLabel: "Press releases",
    produced: "200+ outlet mentions",
  },
  {
    num: "05",
    title: "Authority backlinks",
    oneLiner: "Domain rating, earned.",
    body: "Higher DR = AI engines treat your site as a primary source. Our backlink program builds the editorial, directory, and citation links that lift your domain into AI's trusted-source tier.",
    Icon: Link2,
    accent: "#EF4444",
    accentSoft: "#FEE2E2",
    href: "/services/seo/backlinks",
    hrefLabel: "Backlinks",
    produced: "DR 28 → DR 71",
  },
]

export function AiSearchSignalStack() {
  return (
    <section
      id="signal-stack"
      aria-labelledby="ai-search-signals-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="What AI engines reward"
          heading={
            <span id="ai-search-signals-heading">
              The 5 signals AI engines{" "}
              <span className="accent-underline">reward</span>.
            </span>
          }
          paragraph="Every AI engine — ChatGPT, Gemini, Perplexity, Claude, Copilot, AI Overviews — pulls from the same 5 signal inputs. We build all 5 in parallel, so you compound across every engine, not just one."
        />

        {/* Horizontal flow: 5 signal feeders → center AI answer */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-10">
          {/* LEFT: 5 signal feeder cards */}
          <ol className="space-y-4 relative">
            {signals.map((s, idx) => (
              <li
                key={s.num}
                className="relative"
                style={{
                  animation: `fadeInUp 0.7s ease-out ${0.08 * idx}s both`,
                }}
              >
                <div
                  className="card-surface card-surface-hover relative grid grid-cols-[64px_1fr] sm:grid-cols-[88px_1fr_auto] items-stretch gap-5 p-5 sm:p-6"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  {/* Left: number + icon stack */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-[0.14em]"
                      style={{ color: "var(--muted)" }}
                    >
                      Signal
                    </span>
                    <div
                      className="relative w-[56px] h-[56px] rounded-[16px] flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${s.accent} 0%, ${s.accent}CC 100%)`,
                        boxShadow: `0 6px 18px ${s.accent}40`,
                        color: "#fff",
                      }}
                    >
                      <s.Icon className="w-6 h-6" strokeWidth={2.25} />
                      <span
                        className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold"
                        style={{
                          background: "#fff",
                          color: s.accent,
                          border: `2px solid ${s.accent}`,
                          boxShadow: "0 2px 6px rgba(17,35,68,0.12)",
                        }}
                      >
                        {s.num}
                      </span>
                    </div>
                  </div>

                  {/* Middle: copy */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className="text-[19px] sm:text-[20px] font-bold leading-[1.2]"
                        style={{ color: "var(--ink)" }}
                      >
                        {s.title}
                      </h3>
                      <span
                        className="text-[11px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
                        style={{
                          background: s.accentSoft,
                          color: s.accent,
                        }}
                      >
                        {s.oneLiner}
                      </span>
                    </div>
                    <p
                      className="mt-2 text-[14.5px] leading-[1.6]"
                      style={{ color: "var(--muted)" }}
                    >
                      {s.body}
                    </p>
                    <a
                      href={s.href}
                      className="mt-3 inline-flex items-center gap-1 text-[13px] font-bold"
                      style={{ color: s.accent }}
                    >
                      Built in our {s.hrefLabel.toLowerCase()} program
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </a>
                  </div>

                  {/* Right (desktop): "produced" output chip + arrow into central card */}
                  <div className="hidden sm:flex flex-col items-end justify-center gap-2 shrink-0">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: "var(--muted)" }}
                    >
                      Output
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11.5px] font-bold whitespace-nowrap"
                      style={{
                        background: s.accentSoft,
                        color: s.accent,
                        border: `1px solid ${s.accent}40`,
                      }}
                    >
                      <CheckCircle2 className="w-3 h-3" strokeWidth={2.75} />
                      {s.produced}
                    </span>
                    {/* Arrow into central card (desktop only) */}
                    <span
                      aria-hidden
                      className="hidden lg:inline-flex items-center text-[10px] font-bold mt-1"
                      style={{ color: s.accent }}
                    >
                      feeds AI →
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* RIGHT: Sticky "AI answer target" card */}
          <div className="lg:sticky lg:top-24 self-start">
            <div
              className="relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #0B132B 0%, #111B3A 60%, #1E1B4B 100%)",
                borderRadius: "var(--radius-xl)",
                boxShadow:
                  "0 10px 30px rgba(11,19,43,0.30), 0 30px 80px rgba(11,19,43,0.20)",
                animation: "fadeInUp 0.9s ease-out 0.4s both",
              }}
            >
              {/* Glow */}
              <div
                aria-hidden
                className="absolute top-[-30%] left-[-20%] w-[360px] h-[360px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(139,92,246,0.30) 0%, transparent 65%)",
                }}
              />
              <div
                aria-hidden
                className="absolute bottom-[-30%] right-[-20%] w-[360px] h-[360px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(116,211,255,0.28) 0%, transparent 65%)",
                }}
              />

              <div className="relative p-6 sm:p-7">
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #74D3FF 0%, #8B5CF6 100%)",
                      boxShadow: "0 0 0 3px rgba(116,211,255,0.18)",
                    }}
                  >
                    <Sparkles
                      className="w-4 h-4 text-white"
                      strokeWidth={2.5}
                    />
                  </span>
                  <div>
                    <div
                      className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      AI answer target
                    </div>
                    <div className="text-[13.5px] font-bold text-white">
                      Where the 5 signals land
                    </div>
                  </div>
                </div>

                {/* Stacked signal labels */}
                <ul className="space-y-2 mb-5">
                  {signals.map((s) => (
                    <li
                      key={s.num}
                      className="flex items-center gap-2.5 text-[13px] font-semibold"
                      style={{ color: "rgba(255,255,255,0.88)" }}
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: `${s.accent}40`,
                          color: "#fff",
                          border: `1px solid ${s.accent}80`,
                        }}
                      >
                        <s.Icon className="w-3 h-3" strokeWidth={2.5} />
                      </span>
                      <span className="flex-1">{s.title}</span>
                      <span
                        className="text-[10px] font-mono"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        →
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Outcome strip */}
                <div
                  className="rounded-[var(--radius-sm)] p-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-1"
                    style={{ color: "#7DD3FC" }}
                  >
                    Outcome
                  </div>
                  <div className="text-[16px] font-bold leading-[1.35] text-white">
                    Your business shows up in the answer — every engine, every
                    query, every time.
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #74D3FF 0%, #8B5CF6 100%)",
                    color: "#0B132B",
                    boxShadow: "0 8px 24px rgba(116,211,255,0.32)",
                  }}
                >
                  Build my AI signal stack
                  <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Build my AI signal stack
          </PrimaryButton>
          <a
            href="/services/seo"
            className="text-[14px] font-semibold inline-flex items-center gap-1"
            style={{ color: "var(--accent)" }}
          >
            See our full SEO program
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

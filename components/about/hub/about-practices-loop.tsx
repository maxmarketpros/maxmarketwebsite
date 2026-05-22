import Link from "next/link"
import { Crown, ListChecks, Calendar, Home, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"

type LoopStep = {
  num: string
  name: string
  iconId: string
  accent: string
  blurb: string
}

const steps: LoopStep[] = [
  {
    num: "01",
    name: "Audit",
    iconId: "103931",
    accent: "#1677FF",
    blurb:
      "Crawl your site, your top competitors, and the search demand you&rsquo;re missing.",
  },
  {
    num: "02",
    name: "Strategy",
    iconId: "4gURKWl6bT1u",
    accent: "#74D3FF",
    blurb:
      "Pick the 2&ndash;3 services that move revenue. Bundle them into a 90-day plan.",
  },
  {
    num: "03",
    name: "Execute",
    iconId: "15152",
    accent: "#7C3AED",
    blurb:
      "In-house team ships the work &mdash; sites, SEO, ads, social, automation.",
  },
  {
    num: "04",
    name: "Optimize",
    iconId: "33470",
    accent: "#22C55E",
    blurb:
      "Kill what isn&rsquo;t working, double down on what is. Monthly read-out.",
  },
]

const guarantees = [
  { Icon: Crown, label: "Senior strategist" },
  { Icon: ListChecks, label: "Fixed scope" },
  { Icon: Calendar, label: "~30-day cadence" },
  { Icon: Home, label: "In-house only" },
]

export function AboutPracticesLoop() {
  return (
    <section
      aria-labelledby="about-practices-loop-heading"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="How we work"
          heading={
            <span id="about-practices-loop-heading">
              The loop, <span className="accent-underline">every month</span>.
            </span>
          }
          paragraph="No 6-month strategy decks. No mystery Slack silence. A four-step loop you can actually watch — and a senior strategist who runs it with you."
        />

        <div
          className="mt-12 sm:mt-14 relative"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          {/* Desktop dash-flow connectors */}
          <svg
            aria-hidden
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient
                id="about-loop-gradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#1677FF" stopOpacity="0.0" />
                <stop offset="20%" stopColor="#1677FF" stopOpacity="0.55" />
                <stop offset="80%" stopColor="#22C55E" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {[
              "M 22 34 Q 25 18 28 34",
              "M 47 34 Q 50 18 53 34",
              "M 72 34 Q 75 18 78 34",
            ].map((d, i) => (
              <path
                key={d}
                d={d}
                fill="none"
                stroke="url(#about-loop-gradient)"
                strokeWidth="0.45"
                strokeDasharray="1.6 1.2"
                strokeLinecap="round"
                style={{
                  animation: `dash-flow 2.4s linear infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
            {steps.map((s, i) => (
              <article
                key={s.num}
                className="relative card-surface card-surface-hover p-6 sm:p-7"
                style={{
                  animation: `fadeInUp 0.7s ease-out ${0.05 + i * 0.08}s both`,
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full"
                  style={{
                    background: `linear-gradient(180deg, ${s.accent} 0%, ${s.accent}33 100%)`,
                  }}
                />

                <div className="flex items-start justify-between">
                  <span
                    className="text-[40px] sm:text-[44px] font-extrabold leading-none tracking-[-0.04em]"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent} 0%, ${s.accent}88 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="w-11 h-11 rounded-[12px] inline-flex items-center justify-center shrink-0"
                    style={{
                      background: `${s.accent}14`,
                      border: `1px solid ${s.accent}33`,
                    }}
                  >
                    <img
                      src={icons8Url(s.iconId, 96)}
                      alt=""
                      width={26}
                      height={26}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </div>

                <h3
                  className="mt-4 text-[22px] sm:text-[24px] font-bold leading-tight tracking-[-0.015em]"
                  style={{ color: "var(--ink)" }}
                >
                  {s.name}
                </h3>

                <p
                  className="mt-3 text-[14.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                  dangerouslySetInnerHTML={{ __html: s.blurb }}
                />

                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "#fff",
                      border: "1px solid var(--border-color)",
                      boxShadow: "0 2px 8px rgba(11,19,43,0.08)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                      <path
                        d="M7 2 V12 M3 8 L7 12 L11 8"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </article>
            ))}
          </div>

          <style>{`
            @keyframes dash-flow {
              to { stroke-dashoffset: -6; }
            }
          `}</style>
        </div>

        {/* "Every engagement gets" tiles */}
        <div className="mt-14 sm:mt-16">
          <p
            className="text-center text-[11px] font-bold uppercase tracking-[0.16em] mb-5"
            style={{ color: "var(--muted)" }}
          >
            Every engagement gets
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-[920px] mx-auto">
            {guarantees.map((g, i) => (
              <div
                key={g.label}
                className="flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)]"
                style={{
                  background: "rgba(22,119,255,0.06)",
                  border: "1px solid rgba(22,119,255,0.18)",
                  animation: `fadeInUp 0.6s ease-out ${0.05 + i * 0.06}s both`,
                }}
              >
                <span
                  className="w-9 h-9 rounded-full inline-flex items-center justify-center shrink-0"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                  }}
                >
                  <g.Icon className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <span
                  className="text-[13.5px] sm:text-[14px] font-semibold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {g.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center gap-2 flex-wrap">
          <SecondaryButton asLink href="/about/practices">
            See our full playbook
          </SecondaryButton>
          <Link
            href="/about/practices#guarantees"
            className="text-[14px] font-semibold inline-flex items-center gap-1 hover:underline"
            style={{ color: "var(--muted)" }}
          >
            <ArrowRight className="w-3.5 h-3.5" />
            Quality bars we guarantee
          </Link>
        </div>
      </div>
    </section>
  )
}

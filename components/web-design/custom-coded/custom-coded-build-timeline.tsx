import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

type Milestone = {
  week: string
  title: string
  body: string
  metric: string
  spark: number[]
  color: string
}

const milestones: Milestone[] = [
  {
    week: "Week 1",
    title: "Discovery + sitemap",
    body: "Strategy call, content audit, competitor teardown, page-level wireframes.",
    metric: "Pages mapped",
    spark: [0, 2, 4, 6, 8, 10, 12],
    color: "#1677FF",
  },
  {
    week: "Week 2",
    title: "Design system",
    body: "Tokens, type scale, components designed in Figma and translated to Tailwind.",
    metric: "Design tokens locked",
    spark: [4, 9, 16, 24, 32, 38, 42],
    color: "#7C3AED",
  },
  {
    week: "Week 3",
    title: "Page builds",
    body: "Hand-coded React across all breakpoints. Storybook entries for every component.",
    metric: "Components shipped",
    spark: [2, 6, 11, 17, 23, 29, 36],
    color: "#0F766E",
  },
  {
    week: "Week 4",
    title: "CMS + integrations",
    body: "Sanity content models, Stripe checkout, Resend transactional email, GA4 + GTM.",
    metric: "Integrations wired",
    spark: [1, 2, 3, 4, 6, 7, 8],
    color: "#EA580C",
  },
  {
    week: "Week 5",
    title: "Performance + SEO",
    body: "Core Web Vitals tuned on real device, JSON-LD schema, redirect map, OG images.",
    metric: "Lighthouse score",
    spark: [62, 71, 78, 85, 91, 96, 100],
    color: "#10B981",
  },
  {
    week: "Week 6",
    title: "Launch",
    body: "Zero-downtime DNS cutover, indexing check, monitoring dashboards, training handoff.",
    metric: "Live sites",
    spark: [0, 0, 0, 0, 0, 0, 1],
    color: "#1677FF",
  },
]

function Sparkline({ points, color }: { points: number[]; color: string }) {
  const max = Math.max(...points, 1)
  const w = 100
  const h = 32
  const stepX = w / (points.length - 1 || 1)
  const path = points
    .map((p, i) => {
      const x = i * stepX
      const y = h - (p / max) * (h - 4) - 2
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(" ")
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="w-full h-9 mt-3"
      aria-hidden
    >
      <defs>
        <linearGradient id={`spark-${color.replace("#", "")}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`${path} L ${w} ${h} L 0 ${h} Z`}
        fill={`url(#spark-${color.replace("#", "")})`}
      />
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* end dot */}
      <circle
        cx={w}
        cy={h - (points[points.length - 1] / max) * (h - 4) - 2}
        r="2.5"
        fill={color}
      />
    </svg>
  )
}

export function CustomCodedBuildTimeline() {
  return (
    <section
      id="custom-coded-build-timeline"
      aria-labelledby="custom-coded-build-timeline-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] right-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="6-week build"
          heading={
            <span id="custom-coded-build-timeline-heading">
              From kickoff to launch in{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">6 weeks</span>.
              </span>
            </span>
          }
          paragraph="Every custom coded website we ship runs on the same transparent timeline. You see what's happening each week — and we hit the launch date we set on day one."
        />

        <div className="mt-14 relative">
          {/* Connecting rail */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[26px] left-[8%] right-[8%] h-[3px] rounded-full z-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(22,119,255,0.6) 0%, rgba(124,58,237,0.6) 30%, rgba(15,118,110,0.6) 50%, rgba(234,88,12,0.6) 70%, rgba(16,185,129,0.7) 100%)",
            }}
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-3 relative items-stretch">
            {milestones.map((m, idx) => (
              <li
                key={m.week}
                className="relative flex flex-col"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both`,
                }}
              >
                {/* Week node */}
                <div className="flex items-center justify-center relative z-10">
                  <div
                    className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center z-10"
                    style={{
                      background: `linear-gradient(180deg, ${m.color}DD 0%, ${m.color} 100%)`,
                      color: "#fff",
                      boxShadow: `0 4px 14px ${m.color}66`,
                      border: "4px solid #fff",
                    }}
                  >
                    <span className="text-[14px] font-extrabold">
                      {idx + 1}
                    </span>
                  </div>
                </div>

                <div
                  className="mt-4 card-surface card-surface-hover p-5 relative flex-1"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
                      style={{ color: m.color }}
                    >
                      {m.week}
                    </span>
                  </div>
                  <h3
                    className="mt-2 text-[15.5px] font-bold leading-[1.25]"
                    style={{ color: "var(--ink)" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="mt-2 text-[12.5px] leading-[1.55]"
                    style={{ color: "var(--muted)" }}
                  >
                    {m.body}
                  </p>
                  <div
                    className="mt-3 pt-3 border-t"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <div
                      className="text-[10px] font-bold uppercase tracking-[0.1em]"
                      style={{ color: "var(--muted)" }}
                    >
                      {m.metric}
                    </div>
                    <Sparkline points={m.spark} color={m.color} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <PrimaryButton size="lg" asLink href="#contact">
            Lock your launch window
          </PrimaryButton>
          <SecondaryButton asLink href="#custom-coded-faq">
            Have questions first?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

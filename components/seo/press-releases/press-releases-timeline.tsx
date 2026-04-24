import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Link2, TrendingUp, MousePointerClick } from "lucide-react"

type Milestone = {
  day: string
  title: string
  body: string
  tag: string
}

const milestones: Milestone[] = [
  {
    day: "Day 0",
    title: "Intake + angle workshop",
    body: "30-minute call. We lock the newsworthy angle, target keywords, and outlet mix.",
    tag: "Kickoff",
  },
  {
    day: "Day 3",
    title: "Release written + approved",
    body: "Draft delivered for review. Two rounds of revisions included. Legal-safe phrasing baked in.",
    tag: "Copy",
  },
  {
    day: "Day 7",
    title: "Distribution goes live",
    body: "Release hits Yahoo Finance, AP News, MarketWatch, and the full 200+ outlet network same day.",
    tag: "Launch",
  },
  {
    day: "Day 14",
    title: "Syndication compounds",
    body: "Secondary pickups roll in — NBC/CBS affiliates, industry trades, Google News indexing.",
    tag: "Compound",
  },
  {
    day: "Day 30",
    title: "Reporting + ranking lift",
    body: "Full placement report with every URL, DR, traffic, and the keyword positions you moved.",
    tag: "Measure",
  },
]

type Sparkline = number[]

function MiniChart({ points, color }: { points: Sparkline; color: string }) {
  const max = Math.max(...points)
  const bars = points.map((p) => (p / max) * 100)
  return (
    <div className="flex items-end gap-1 h-10 mt-3">
      {bars.map((h, idx) => (
        <div
          key={idx}
          className="flex-1 rounded-t-sm"
          style={{
            height: `${h}%`,
            background:
              idx === bars.length - 1
                ? color
                : `${color}55`,
            minHeight: 4,
          }}
        />
      ))}
    </div>
  )
}

const metrics = [
  {
    Icon: Link2,
    label: "Dofollow links earned",
    value: "+27",
    sub: "Avg. per campaign",
    color: "#EAB308",
    spark: [4, 8, 11, 14, 18, 22, 27],
  },
  {
    Icon: MousePointerClick,
    label: "Referral traffic",
    value: "+1,820",
    sub: "Sessions in first 30 days",
    color: "#1677FF",
    spark: [80, 210, 410, 720, 1050, 1480, 1820],
  },
  {
    Icon: TrendingUp,
    label: "Keyword lift",
    value: "+18 positions",
    sub: "Avg. across target terms",
    color: "#10B981",
    spark: [2, 4, 7, 10, 13, 16, 18],
  },
]

export function PressReleasesTimeline() {
  return (
    <section
      id="press-releases-timeline"
      aria-labelledby="press-releases-timeline-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[30%] left-[10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(234,179,8,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Placement timeline"
          heading={
            <span id="press-releases-timeline-heading">
              Your placement timeline,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">day by day</span>.
              </span>
            </span>
          }
          paragraph="From kickoff call to final reporting in 30 days. Every campaign runs on the same transparent schedule so you know exactly what&rsquo;s happening on your behalf — and when."
        />

        {/* Horizontal timeline rail */}
        <div className="mt-14 relative">
          {/* Connecting rail line (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[3px] rounded-full z-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(234,179,8,0.6) 0%, rgba(234,179,8,0.9) 60%, rgba(22,119,255,0.7) 100%)",
            }}
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 relative items-stretch">
            {milestones.map((m, idx) => (
              <li
                key={m.day}
                className="relative flex flex-col"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both`,
                }}
              >
                {/* Day node */}
                <div className="flex items-center justify-center relative z-10">
                  <div
                    className="relative w-[48px] h-[48px] rounded-full flex items-center justify-center z-10"
                    style={{
                      background:
                        idx === milestones.length - 1
                          ? "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)"
                          : "linear-gradient(180deg, #FBBF24 0%, #EAB308 100%)",
                      color: idx === milestones.length - 1 ? "#fff" : "#422006",
                      boxShadow:
                        idx === milestones.length - 1
                          ? "0 4px 14px rgba(22,119,255,0.35)"
                          : "0 4px 14px rgba(234,179,8,0.35)",
                      border: "4px solid #fff",
                    }}
                  >
                    <span className="text-[14px] font-extrabold">
                      {idx + 1}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className="mt-4 card-surface card-surface-hover p-5 relative flex-1"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
                      style={{ color: "#A16207" }}
                    >
                      {m.day}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-md"
                      style={{
                        background: "rgba(22,119,255,0.08)",
                        color: "var(--accent)",
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>
                  <h3
                    className="mt-2 text-[16px] font-bold leading-[1.25]"
                    style={{ color: "var(--ink)" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="mt-2 text-[13.5px] leading-[1.55]"
                    style={{ color: "var(--muted)" }}
                  >
                    {m.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Compounding metrics row */}
        <div className="mt-14">
          <div
            className="text-center text-[12px] font-bold uppercase tracking-[0.14em] mb-4"
            style={{ color: "var(--muted)" }}
          >
            What compounds in the first 30 days
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {metrics.map((m, idx) => (
              <div
                key={m.label}
                className="card-surface p-6"
                style={{
                  borderRadius: "var(--radius-lg)",
                  animation: `fadeInUp 0.6s ease-out ${0.1 * idx}s both`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center"
                    style={{
                      background: `${m.color}1F`,
                      color: m.color,
                    }}
                  >
                    <m.Icon className="w-5 h-5" strokeWidth={2.25} />
                  </span>
                  <TrendingUp
                    className="w-4 h-4"
                    strokeWidth={2.5}
                    style={{ color: "#10B981" }}
                  />
                </div>
                <div
                  className="mt-4 text-[13px] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: "var(--muted)" }}
                >
                  {m.label}
                </div>
                <div
                  className="mt-1 text-[28px] sm:text-[32px] font-extrabold tracking-[-0.02em] leading-none"
                  style={{ color: "var(--ink)" }}
                >
                  {m.value}
                </div>
                <div
                  className="mt-1 text-[13px]"
                  style={{ color: "var(--muted)" }}
                >
                  {m.sub}
                </div>
                <MiniChart points={m.spark} color={m.color} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA band */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <PrimaryButton size="lg" asLink href="#contact">
            Launch your first campaign
          </PrimaryButton>
          <SecondaryButton asLink href="#press-releases-faq">
            Have questions first?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

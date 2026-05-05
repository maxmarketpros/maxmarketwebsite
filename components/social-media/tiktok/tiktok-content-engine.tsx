import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Lightbulb,
  PenLine,
  Camera,
  Scissors,
  Send,
  LineChart,
} from "lucide-react"

type Step = {
  day: string
  Icon: typeof Lightbulb
  title: string
  body: string
  tag: string
  color: string
  kpi: string
}

const steps: Step[] = [
  {
    day: "Day 1",
    Icon: Lightbulb,
    title: "Ideate against the radar",
    body: "Trend radar + your content pillars feed a weekly slate of 8–10 TikTok concepts, ranked by FYP fit.",
    tag: "Strategy",
    color: "#22D3EE",
    kpi: "10 ideas/wk",
  },
  {
    day: "Day 2",
    Icon: PenLine,
    title: "Script the hook",
    body: "Every TikTok ships with a hook-first script — under 1.5s to grab, payoff under 8s, CTA under 22s.",
    tag: "Copy",
    color: "#0EA5E9",
    kpi: "<1.5s hook",
  },
  {
    day: "Day 3",
    Icon: Camera,
    title: "Shoot on-site",
    body: "Once-a-month shoot day captures 30–60 ready-to-edit clips. Self-shot phone option for tight schedules.",
    tag: "Capture",
    color: "#A855F7",
    kpi: "30–60 clips",
  },
  {
    day: "Day 4",
    Icon: Scissors,
    title: "Edit vertical-native",
    body: "9:16 cuts, kinetic captions, sound-trend matching, overlays. Average 18–22s runtime.",
    tag: "Post",
    color: "#EC4899",
    kpi: "18–22s avg",
  },
  {
    day: "Day 5",
    Icon: Send,
    title: "Post at audience peak",
    body: "5–7 TikToks/week scheduled to your specific audience's active hours, scored against the FYP checklist.",
    tag: "Publish",
    color: "#F59E0B",
    kpi: "5–7/week",
  },
  {
    day: "Day 7",
    Icon: LineChart,
    title: "Iterate on what hit",
    body: "Weekly retro on watch-time, shares, and comments. Winning formats get amplified, losers get pruned.",
    tag: "Learn",
    color: "#22C55E",
    kpi: "Weekly retro",
  },
]

export function TiktokContentEngine() {
  return (
    <section
      id="tiktok-content-engine"
      aria-labelledby="tiktok-content-engine-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] left-[5%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[15%] right-[5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Content engine"
          heading={
            <span id="tiktok-content-engine-heading">
              From idea to FYP in{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">six steps</span>.
              </span>
            </span>
          }
          paragraph="Every account on our TikTok marketing services runs the same compounding content engine — same weekly cadence, same scoring system, same retro loop. Predictable inputs, surprising upside."
        />

        <p
          className="mt-4 text-[15px] text-center"
          style={{ color: "var(--muted)" }}
        >
          Cross-sell idea? Pair it with a{" "}
          <a
            href="/services/seo/press-releases"
            style={{ color: "var(--accent)", fontWeight: 600 }}
          >
            press release campaign
          </a>{" "}
          to amplify your viral hits beyond the FYP.
        </p>

        <div className="mt-14 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-[24px] left-[8%] right-[8%] h-[3px] rounded-full z-0"
            style={{
              background:
                "linear-gradient(90deg, #22D3EE 0%, #0EA5E9 20%, #A855F7 40%, #EC4899 60%, #F59E0B 80%, #22C55E 100%)",
              opacity: 0.85,
            }}
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-3 relative items-stretch">
            {steps.map((s, idx) => (
              <li
                key={s.title}
                className="relative flex flex-col"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both`,
                }}
              >
                <div className="flex items-center justify-center relative z-10">
                  <div
                    className="relative w-[48px] h-[48px] rounded-full flex items-center justify-center z-10"
                    style={{
                      background: `linear-gradient(180deg, #fff 0%, ${s.color}1A 100%)`,
                      color: s.color,
                      boxShadow: `0 4px 14px ${s.color}55`,
                      border: `3px solid ${s.color}`,
                    }}
                  >
                    <s.Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>

                <div
                  className="mt-4 card-surface card-surface-hover p-5 relative flex-1"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
                      style={{ color: s.color }}
                    >
                      {s.day}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-md"
                      style={{
                        background: `${s.color}1A`,
                        color: s.color,
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    className="mt-2 text-[15.5px] font-bold leading-[1.25]"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-[13px] leading-[1.55]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.body}
                  </p>
                  <div
                    className="mt-3 inline-flex items-center px-2 py-0.5 rounded-md text-[10.5px] font-bold uppercase tracking-[0.1em]"
                    style={{
                      background: "var(--bg)",
                      color: "var(--ink)",
                      border: `1px solid ${s.color}33`,
                    }}
                  >
                    {s.kpi}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Start your engine
          </PrimaryButton>
          <SecondaryButton asLink href="#tiktok-faq">
            Have questions first?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

import { SectionHeader } from "@/components/ui/section-header"
import {
  Compass,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react"

type Step = {
  num: string
  duration: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const steps: Step[] = [
  {
    num: "01",
    duration: "Week 1",
    title: "Discovery",
    description:
      "Kickoff call, competitor audit, voice & goals, content inventory, and a locked-in scope + timeline.",
    icon: <Compass className="w-5 h-5" strokeWidth={2.25} />,
    color: "#1677FF",
  },
  {
    num: "02",
    duration: "Week 1–2",
    title: "Design",
    description:
      "Figma wireframes, brand system, hi-fi mockups for every page. Review in real-time comments.",
    icon: <PenTool className="w-5 h-5" strokeWidth={2.25} />,
    color: "#8B5CF6",
  },
  {
    num: "03",
    duration: "Week 2–4",
    title: "Build",
    description:
      "Dev on your chosen platform — Webflow, WordPress, custom code. CMS setup, forms, integrations.",
    icon: <Code2 className="w-5 h-5" strokeWidth={2.25} />,
    color: "#F59E0B",
  },
  {
    num: "04",
    duration: "Week 4",
    title: "Launch",
    description:
      "DNS cutover, 301 redirects, Analytics + Search Console wiring, and a 30-day tweak window.",
    icon: <Rocket className="w-5 h-5" strokeWidth={2.25} />,
    color: "#10B981",
  },
]

export function WebProcess() {
  return (
    <section aria-labelledby="web-process-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Studio Timeline"
          heading={
            <span id="web-process-heading">
              From kickoff to launch in 4{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">weeks</span>.
              </span>
            </span>
          }
          paragraph="Transparent, week-by-week. No mystery Slack silence — you see the build happen in real time."
        />

        <div
          className="mt-14 relative"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Connector — desktop horizontal */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[36px] left-[7%] right-[7%] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, #1677FF 0%, #8B5CF6 33%, #F59E0B 66%, #10B981 100%)",
              opacity: 0.35,
            }}
          />

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {steps.map((s) => (
              <li key={s.num} className="relative">
                {/* Icon + number above */}
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center shrink-0 relative z-[1]"
                    style={{
                      background: "#fff",
                      border: `2px solid ${s.color}`,
                      color: s.color,
                      boxShadow: `0 8px 24px ${s.color}33`,
                    }}
                  >
                    {s.icon}
                  </div>
                </div>

                <div className="mt-5 text-center lg:text-left">
                  <div
                    className="flex items-center justify-center lg:justify-start gap-2"
                  >
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.08em]"
                      style={{ color: s.color }}
                    >
                      {s.num} · {s.duration}
                    </span>
                  </div>
                  <h3
                    className="mt-2 text-[19px] sm:text-[20px] font-bold leading-[1.2] tracking-[-0.01em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-[14px] leading-[1.55] max-w-[260px] mx-auto lg:mx-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

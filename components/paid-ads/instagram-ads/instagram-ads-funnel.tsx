import { SectionHeader } from "@/components/ui/section-header"
import {
  Eye,
  ThumbsUp,
  MousePointerClick,
  ClipboardCheck,
  CalendarCheck,
  ArrowRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { IG_GRADIENT_CSS } from "./instagram-ads-hero"

type Node = {
  n: string
  Icon: LucideIcon
  label: string
  metric: { value: string; label: string }
  detail: string
}

const nodes: Node[] = [
  {
    n: "01",
    Icon: Eye,
    label: "Impression",
    metric: { value: "$3.40", label: "CPM" },
    detail: "Reels, Stories, Feed, Explore &mdash; cold viewers in your service area.",
  },
  {
    n: "02",
    Icon: ThumbsUp,
    label: "Engagement",
    metric: { value: "1.8%", label: "ER" },
    detail: "3-second video views, profile taps, saves, follows from people likely to convert.",
  },
  {
    n: "03",
    Icon: MousePointerClick,
    label: "Click / Form open",
    metric: { value: "1.2%", label: "CTR" },
    detail: "Site click or instant lead-form open &mdash; the audience self-identifies.",
  },
  {
    n: "04",
    Icon: ClipboardCheck,
    label: "Qualified lead",
    metric: { value: "$38", label: "CPL" },
    detail: "Validated contact info synced to your CRM in under 5 minutes.",
  },
  {
    n: "05",
    Icon: CalendarCheck,
    label: "Booked job",
    metric: { value: "$112", label: "Cost / job" },
    detail: "CRM-confirmed booking. Closes the loop with offline conversions back to Meta.",
  },
]

const liftMetrics = [
  {
    label: "Avg time to lead",
    value: "8 min",
    spark: "M0,28 L20,24 L40,20 L60,16 L80,14 L100,10",
  },
  {
    label: "Lead → booked %",
    value: "34%",
    spark: "M0,26 L20,22 L40,18 L60,16 L80,12 L100,8",
  },
  {
    label: "CPL trend (90d)",
    value: "−42%",
    spark: "M0,8 L20,12 L40,14 L60,18 L80,22 L100,26",
  },
]

export function InstagramAdsFunnel() {
  return (
    <section
      id="instagram-ads-funnel"
      aria-labelledby="instagram-ads-funnel-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(250,126,30,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-10%] w-[480px] h-[480px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(150,47,191,0.12) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Funnel"
          heading={
            <span id="instagram-ads-funnel-heading">
              From scroll to{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    background: IG_GRADIENT_CSS,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  booked job
                </span>
                .
              </span>
            </span>
          }
          paragraph="Five steps. Same Instagram Ads management runs every step, with creative and audiences that match the headspace at each stage. Every event sends back to Meta via the Conversions API so Advantage+ optimizes for booked revenue, not lead-form opens."
        />

        {/* Horizontal timeline */}
        <div
          className="mt-14 sm:mt-16 relative"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Connecting rail — desktop horizontal */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[5%] right-[5%] top-[34px] h-[2px] -z-10"
            style={{
              background: IG_GRADIENT_CSS,
              opacity: 0.55,
              maskImage:
                "linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
            }}
          />

          {/* Nodes */}
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
            {nodes.map((node) => (
              <li key={node.n} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Numbered node circle */}
                  <span
                    className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center mb-4"
                    style={{
                      background: IG_GRADIENT_CSS,
                      color: "#fff",
                      boxShadow:
                        "0 1px 3px rgba(214,41,118,0.32), 0 12px 28px rgba(150,47,191,0.32)",
                      padding: 3,
                    }}
                  >
                    <span
                      className="w-full h-full rounded-full flex items-center justify-center"
                      style={{
                        background: "#fff",
                        color: "#B83265",
                      }}
                    >
                      <node.Icon className="w-7 h-7" strokeWidth={2.25} />
                    </span>
                    {/* Step number badge */}
                    <span
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold border-2 border-white"
                      style={{
                        background: "#0F1116",
                        color: "#fff",
                      }}
                    >
                      {node.n}
                    </span>
                  </span>

                  {/* Card */}
                  <div
                    className="card-surface w-full p-4"
                    style={{
                      borderRadius: "var(--radius-lg)",
                    }}
                  >
                    <h3
                      className="text-[16px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {node.label}
                    </h3>
                    <p
                      className="mt-1.5 text-[12.5px] leading-[1.5] min-h-[3.5em]"
                      style={{ color: "var(--muted)" }}
                      dangerouslySetInnerHTML={{ __html: node.detail }}
                    />
                    <div
                      className="mt-3 pt-3 border-t flex items-center justify-between"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.1em]"
                        style={{ color: "var(--muted)" }}
                      >
                        {node.metric.label}
                      </span>
                      <span
                        className="text-[16px] font-extrabold leading-none tracking-[-0.01em]"
                        style={{
                          background: IG_GRADIENT_CSS,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {node.metric.value}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Lift sparklines */}
          <div
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-[860px] mx-auto p-5 sm:p-6 rounded-[var(--radius-lg)]"
            style={{
              background:
                "linear-gradient(90deg, rgba(250,126,30,0.06) 0%, rgba(214,41,118,0.06) 50%, rgba(150,47,191,0.08) 100%)",
              border: "1px solid rgba(214,41,118,0.18)",
            }}
          >
            {liftMetrics.map((m) => (
              <div
                key={m.label}
                className="px-4 py-3 rounded-[var(--radius-md)]"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "var(--muted)" }}
                >
                  {m.label}
                </div>
                <div className="mt-1 flex items-end justify-between gap-3">
                  <span
                    className="text-[24px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{
                      background: IG_GRADIENT_CSS,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {m.value}
                  </span>
                  <svg
                    width="80"
                    height="32"
                    viewBox="0 0 100 32"
                    aria-hidden
                    className="shrink-0"
                  >
                    <defs>
                      <linearGradient
                        id={`spark-${m.label}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#fa7e1e" />
                        <stop offset="50%" stopColor="#d62976" />
                        <stop offset="100%" stopColor="#962fbf" />
                      </linearGradient>
                    </defs>
                    <path
                      d={m.spark}
                      fill="none"
                      stroke={`url(#spark-${m.label})`}
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Want to see this funnel built for your service business?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "#B83265" }}
            >
              Trace my funnel
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Globe, Search, Target, MessageCircle, Star, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Layer = {
  n: string
  Icon: typeof Globe
  title: string
  tuning: string
  accent: string
}

const layers: Layer[] = [
  { n: "01", Icon: Globe,         title: "Custom website",      tuning: "Booking widgets, portfolios, menus, inventories", accent: "#1677FF" },
  { n: "02", Icon: Search,        title: "SEO + Map Pack",      tuning: "Service-area, treatment, menu, or zip targeting",  accent: "#22C55E" },
  { n: "03", Icon: Target,        title: "Paid intent capture", tuning: "Emergency, consult, reservation, or LSA channels", accent: "#F59E0B" },
  { n: "04", Icon: MessageCircle, title: "AI chat + booking",   tuning: "Industry-specific intake + appointment logic",     accent: "#14B8A6" },
  { n: "05", Icon: Star,          title: "Reviews + retention", tuning: "Post-job, post-meal, post-visit review triggers",  accent: "#EC4899" },
]

const tuneExamples = [
  { industry: "Contractors",      accent: "#EF4444", swap: "Call-only ads, service-area schema, financing widgets" },
  { industry: "Home Services",    accent: "#14B8A6", swap: "24/7 AI voice, recurring billing, seasonal review cadence" },
  { industry: "Local Service",    accent: "#1677FF", swap: "Near-me Map Pack, custom-coded sites, rank-climb cohorts" },
  { industry: "Restaurants",      accent: "#EC4899", swap: "First-party ordering, daypart playbooks, menu schema" },
  { industry: "Medical",          accent: "#22C55E", swap: "HIPAA-safe intake, treatment pages, clinic-type tabs" },
  { industry: "Automotive",       accent: "#F59E0B", swap: "Mobile-service maps, seasonal ads, rental-inventory schema" },
]

export function HubOneStack() {
  return (
    <section aria-labelledby="hub-stack-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="The universal stack"
          heading={
            <>
              Same five layers.{" "}
              <span className="whitespace-nowrap">
                Tuned per <span className="accent-underline">vertical</span>.
              </span>
            </>
          }
          paragraph={"We don\u2019t build six different products. We build one marketing stack \u2014 five layers that sit on top of each other \u2014 and swap the tuning per industry."}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: the 5-layer stack */}
          <div className="lg:col-span-7">
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)] p-6 sm:p-8"
              style={{
                background: "linear-gradient(180deg, var(--surface) 0%, #F7FAFC 100%)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 3px var(--shadow-color), 0 10px 30px -10px var(--shadow-color)",
              }}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "var(--muted)" }}>
                The stack
              </div>

              <ol className="space-y-2.5">
                {layers.map((layer, idx) => (
                  <li
                    key={layer.n}
                    className="relative flex items-center gap-4 px-4 py-3.5 rounded-[var(--radius-sm)] overflow-hidden"
                    style={{
                      background: "var(--surface)",
                      border: `1px solid ${layer.accent}24`,
                      boxShadow: `0 1px 2px rgba(17,35,68,0.04), 0 4px 14px ${layer.accent}10`,
                      animation: `fadeInUp 0.7s ease-out ${0.08 + idx * 0.05}s both`,
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{ background: layer.accent }}
                    />
                    <span
                      className="text-[22px] font-bold leading-none tabular-nums shrink-0"
                      style={{ color: layer.accent }}
                    >
                      {layer.n}
                    </span>
                    <span
                      className="w-10 h-10 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
                      style={{
                        background: `${layer.accent}14`,
                        boxShadow: `inset 0 0 0 1px ${layer.accent}1A`,
                      }}
                    >
                      <layer.Icon className="w-5 h-5" style={{ color: layer.accent }} strokeWidth={2.2} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[15px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                        {layer.title}
                      </div>
                      <div className="text-[12.5px] leading-tight mt-0.5" style={{ color: "var(--muted)" }}>
                        {layer.tuning}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div
                className="mt-5 rounded-[var(--radius-sm)] p-4 flex items-center gap-3"
                style={{
                  background: "linear-gradient(135deg, #EBF4FF 0%, #E6FCF5 100%)",
                  border: "1px solid #BFDBFE",
                }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--surface)", color: "var(--accent)", boxShadow: "inset 0 0 0 1px #BFDBFE" }}
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <div>
                  <div className="text-[12.5px] font-semibold" style={{ color: "var(--ink)" }}>
                    Each layer compounds the one below it.
                  </div>
                  <div className="text-[11.5px]" style={{ color: "var(--muted)" }}>
                    Skip a layer and the whole stack leaks.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: per-industry tunings */}
          <div className="lg:col-span-5">
            <div
              className="relative rounded-[var(--radius-xl)] p-6 sm:p-7 h-full"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 3px var(--shadow-color)",
              }}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-1" style={{ color: "var(--muted)" }}>
                Industry tunings
              </div>
              <div className="text-[16px] font-bold mb-5" style={{ color: "var(--ink)" }}>
                What slots into each layer per vertical.
              </div>

              <ul className="space-y-2.5">
                {tuneExamples.map(({ industry, accent, swap }) => (
                  <li
                    key={industry}
                    className="group flex items-start gap-3 rounded-[var(--radius-sm)] px-3.5 py-2.5"
                    style={{
                      background: `${accent}08`,
                      border: `1px solid ${accent}1F`,
                    }}
                  >
                    <span
                      className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full shrink-0 mt-0.5"
                      style={{ background: accent, color: "#fff" }}
                    >
                      {industry}
                    </span>
                    <span className="text-[12.5px] leading-[1.45]" style={{ color: "var(--ink)" }}>
                      {swap}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/solutions"
                className="group mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold"
                style={{ color: "var(--accent)" }}
              >
                See the full solutions catalogue
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

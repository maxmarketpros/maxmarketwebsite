import { SectionHeader } from "@/components/ui/section-header"
import { Search, Link2, TrendingUp } from "lucide-react"

type Signal = {
  n: string
  label: string
  desc: string
  weight: number
}

const signals: Signal[] = [
  {
    n: "01",
    label: "Referring domains",
    desc: "How many unique domains link to you — breadth beats depth every time.",
    weight: 92,
  },
  {
    n: "02",
    label: "Domain Rating / authority",
    desc: "Link-equity passed per domain. A DR 90 editorial beats 100 DR 20 directories.",
    weight: 85,
  },
  {
    n: "03",
    label: "Anchor text diversity",
    desc: "Natural mix of branded, topical, URL, and generic anchors — no over-optimization.",
    weight: 78,
  },
  {
    n: "04",
    label: "Link velocity",
    desc: "New-link pace versus your competitors. Steady compounding outperforms spikes.",
    weight: 64,
  },
  {
    n: "05",
    label: "Topical relevance",
    desc: "Site-level topic match between linker and linkee — co-citation and entity overlap.",
    weight: 51,
  },
]

const workflow = [
  {
    Icon: Search,
    label: "Audit",
    desc: "Benchmark your referring-domain profile vs. top 3 organic competitors.",
  },
  {
    Icon: Link2,
    label: "Build",
    desc: "Earn links across all 5 signals — not just chasing referring-domain count.",
  },
  {
    Icon: TrendingUp,
    label: "Monitor",
    desc: "Weekly velocity tracking, anchor diversity audit, toxic-link disavow.",
  },
]

export function OffPageSignals() {
  return (
    <section
      id="off-page-signals"
      aria-labelledby="off-page-signals-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="The link graph"
          heading={
            <span id="off-page-signals-heading">
              The 5 signals Google&rsquo;s link graph actually{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">reads</span>.
              </span>
            </span>
          }
          paragraph="Off-page SEO is not one metric. Google scores your backlink profile across five weighted signals — and we build against every one, not just referring-domain count."
        />

        <div
          className="mt-12 sm:mt-14 max-w-[980px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Signals list */}
          <div
            className="card-surface overflow-hidden"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              className="px-5 sm:px-6 py-3 flex items-center justify-between border-b"
              style={{
                background:
                  "linear-gradient(180deg, #F7F2FF 0%, #EEF0FF 100%)",
                borderColor: "var(--border-color)",
              }}
            >
              <span
                className="text-[11px] font-bold uppercase tracking-[0.1em]"
                style={{ color: "#6D28D9" }}
              >
                Relative weight
              </span>
              <span
                className="text-[11px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                Out of 100
              </span>
            </div>
            <div
              className="divide-y"
              style={{ borderColor: "var(--border-color)" }}
            >
              {signals.map((s) => (
                <div
                  key={s.n}
                  className="px-5 sm:px-6 py-5 grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-4 items-center"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  {/* Number + label */}
                  <div className="flex items-start gap-3">
                    <span
                      className="shrink-0 w-10 h-10 rounded-[var(--radius-xs)] flex items-center justify-center text-[13px] font-bold"
                      style={{
                        background:
                          "linear-gradient(180deg, #A78BFA 0%, #8B5CF6 100%)",
                        color: "#fff",
                        boxShadow:
                          "0 1px 2px rgba(17,35,68,0.1), 0 6px 14px rgba(139,92,246,0.22)",
                      }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <div
                        className="text-[16px] font-bold leading-tight"
                        style={{ color: "var(--ink)" }}
                      >
                        {s.label}
                      </div>
                      <div
                        className="mt-0.5 text-[13px] leading-[1.5] sm:hidden"
                        style={{ color: "var(--muted)" }}
                      >
                        {s.desc}
                      </div>
                    </div>
                  </div>

                  {/* Description (sm+) */}
                  <div
                    className="hidden sm:block text-[13.5px] leading-[1.5] max-w-[420px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.desc}
                  </div>

                  {/* Weight bar */}
                  <div className="flex items-center gap-3 min-w-[160px]">
                    <div
                      className="flex-1 sm:w-[160px] h-2 rounded-full overflow-hidden"
                      style={{ background: "rgba(11,19,43,0.08)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${s.weight}%`,
                          background:
                            "linear-gradient(90deg, #A78BFA 0%, #6D28D9 100%)",
                          transition: "width 0.6s ease-out",
                        }}
                      />
                    </div>
                    <span
                      className="text-[13px] font-mono font-bold shrink-0"
                      style={{ color: "#6D28D9" }}
                    >
                      {s.weight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow quick-takes */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {workflow.map((w) => (
              <div
                key={w.label}
                className="card-surface p-5"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center"
                    style={{
                      background: "rgba(139,92,246,0.1)",
                      color: "#6D28D9",
                    }}
                  >
                    <w.Icon
                      className="w-[18px] h-[18px]"
                      strokeWidth={2.25}
                    />
                  </span>
                  <span
                    className="text-[15px] font-bold"
                    style={{ color: "var(--ink)" }}
                  >
                    {w.label}
                  </span>
                </div>
                <p
                  className="mt-3 text-[13.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

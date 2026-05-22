import { SectionHeader } from "@/components/ui/section-header"
import { ArrowUpRight } from "lucide-react"

type Score = {
  label: string
  value: number
  builderValue: number
  color: string
  description: string
}

const scores: Score[] = [
  {
    label: "Performance",
    value: 100,
    builderValue: 54,
    color: "#10B981",
    description: "FCP < 1.0s, LCP < 1.5s, no layout shift.",
  },
  {
    label: "Accessibility",
    value: 100,
    builderValue: 78,
    color: "#1677FF",
    description: "WCAG 2.2 AA, keyboard-first, semantic HTML.",
  },
  {
    label: "Best Practices",
    value: 100,
    builderValue: 83,
    color: "#7C3AED",
    description: "HTTPS, modern image formats, no console errors.",
  },
  {
    label: "SEO",
    value: 100,
    builderValue: 91,
    color: "#F59E0B",
    description: "Crawlable, indexable, structured data on every URL.",
  },
]

export function CustomCodedLighthouseScorecard() {
  return (
    <section
      id="custom-coded-lighthouse"
      aria-labelledby="custom-coded-lighthouse-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Lighthouse 100s, by default"
          heading={
            <span id="custom-coded-lighthouse-heading">
              Built to score where{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">templates can&rsquo;t</span>.
              </span>
            </span>
          }
          paragraph="Every custom coded website we ship is Lighthouse-tested on a real mid-tier Android over throttled 4G before launch. Templated builders rarely pass mobile performance — we don&rsquo;t ship until all four scores hit 100."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {scores.map((s, idx) => (
            <div
              key={s.label}
              className="card-surface card-surface-hover p-5 sm:p-6 text-center"
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.7s ease-out ${0.05 * idx}s both`,
              }}
            >
              <Gauge value={s.value} color={s.color} />
              <div
                className="mt-4 text-[14.5px] font-bold tracking-[-0.005em]"
                style={{ color: "var(--ink)" }}
              >
                {s.label}
              </div>
              <p
                className="mt-1.5 text-[12.5px] leading-[1.5]"
                style={{ color: "var(--muted)" }}
              >
                {s.description}
              </p>
              {/* delta vs builder */}
              <div
                className="mt-4 pt-3 flex items-center justify-center gap-1.5 text-[11px] font-mono font-semibold border-t"
                style={{ borderColor: "var(--border-color)" }}
              >
                <span
                  className="px-1.5 py-0.5 rounded"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    color: "#DC2626",
                    textDecoration: "line-through",
                  }}
                >
                  {s.builderValue}
                </span>
                <ArrowUpRight
                  className="w-3.5 h-3.5"
                  style={{ color: "#10B981" }}
                  strokeWidth={2.5}
                />
                <span
                  className="px-1.5 py-0.5 rounded"
                  style={{
                    background: "rgba(16,185,129,0.10)",
                    color: "#059669",
                  }}
                >
                  {s.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-center text-[13.5px]"
          style={{ color: "var(--muted)" }}
        >
          Real Lighthouse mobile scores from a recent custom coded launch
          versus the average templated{" "}
          <a
            href="/services/web-design/wordpress"
            className="font-semibold underline decoration-[var(--accent)]/30 hover:decoration-[var(--accent)]"
            style={{ color: "var(--accent)" }}
          >
            WordPress
          </a>{" "}
          or{" "}
          <a
            href="/services/web-design/squarespace"
            className="font-semibold underline decoration-[var(--accent)]/30 hover:decoration-[var(--accent)]"
            style={{ color: "var(--accent)" }}
          >
            Squarespace
          </a>{" "}
          build of the same page weight.
        </p>
      </div>
    </section>
  )
}

function Gauge({ value, color }: { value: number; color: string }) {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width="112"
        height="112"
        viewBox="0 0 100 100"
        aria-hidden
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(11,19,43,0.08)"
          strokeWidth="6"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            filter: `drop-shadow(0 0 6px ${color}55)`,
          }}
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center text-[28px] font-extrabold tracking-[-0.02em]"
        style={{ color }}
      >
        {value}
      </span>
    </div>
  )
}

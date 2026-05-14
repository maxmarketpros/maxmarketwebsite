import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { methodSteps } from "@/lib/practices-data"

export function PracticesMethod() {
  return (
    <section
      aria-labelledby="practices-method-heading"
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
          pill="The loop, every month"
          heading={
            <span id="practices-method-heading">
              Audit. Strategy. Execute.{" "}
              <span className="accent-underline">Optimize</span>.
            </span>
          }
          paragraph="No 6-month strategy decks. No mystery Slack silence. A tight four-step loop you can actually watch — and a senior strategist who runs it with you, every month."
        />

        <div
          className="mt-12 sm:mt-14 relative"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          {/* Desktop curved connectors layer (lg+) */}
          <svg
            aria-hidden
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="method-arrow-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"  stopColor="#1677FF" stopOpacity="0.0" />
                <stop offset="20%" stopColor="#1677FF" stopOpacity="0.55" />
                <stop offset="80%" stopColor="#22C55E" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Three arcs connecting the 4 cards across the row */}
            {[
              "M 22 38 Q 25 22 28 38",
              "M 47 38 Q 50 22 53 38",
              "M 72 38 Q 75 22 78 38",
            ].map((d, i) => (
              <path
                key={d}
                d={d}
                fill="none"
                stroke="url(#method-arrow-gradient)"
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
            {methodSteps.map((s, i) => (
              <article
                key={s.number}
                className="relative card-surface card-surface-hover p-6 sm:p-7"
                style={{
                  animation: `fadeInUp 0.7s ease-out ${0.05 + i * 0.08}s both`,
                  borderRadius: "var(--radius-lg)",
                }}
              >
                {/* Left accent stripe */}
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
                    {s.number}
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

                <dl className="mt-5 space-y-3 text-[14px] leading-[1.55]">
                  <Row label="What we do" value={s.whatWeDo} />
                  <Row label="What you see" value={s.whatYouSee} />
                  <Row label="When" value={s.duration} accent={s.accent} />
                </dl>

                {/* Mobile downward arrow between cards (hidden on last + lg+) */}
                {i < methodSteps.length - 1 && (
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
        </div>

        <style>{`
          @keyframes dash-flow {
            to { stroke-dashoffset: -6; }
          }
        `}</style>
      </div>
    </section>
  )
}

function Row({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent?: string
}) {
  return (
    <div>
      <dt
        className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
        style={{ color: accent ?? "var(--muted)" }}
      >
        {label}
      </dt>
      <dd className="mt-0.5" style={{ color: "var(--ink)" }}>
        {value}
      </dd>
    </div>
  )
}

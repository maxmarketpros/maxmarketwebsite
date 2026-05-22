import { serviceproNumbers } from "@/lib/servicepro-data"
import { getIcon } from "@/components/plans/hub/icon-map"

export function ServiceProNumbers() {
  return (
    <section
      aria-labelledby="servicepro-numbers-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container py-14 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center max-w-[680px] mx-auto">
          <span
            className="inline-flex items-center text-[10.5px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
            style={{
              background: "rgba(245,158,11,0.10)",
              color: "#D97706",
              border: "1px solid rgba(245,158,11,0.30)",
            }}
          >
            ServicePro, by the numbers
          </span>
          <h2
            id="servicepro-numbers-heading"
            className="mt-5 text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            What ServicePro actually delivers.
          </h2>
          <p
            className="mt-4 text-[15.5px] sm:text-[16.5px] leading-[1.6]"
            style={{ color: "var(--muted)" }}
          >
            Real outputs you can count — built, designed, optimized, and reported on by an in-house team every month.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {serviceproNumbers.map((n, i) => {
            const Icon = getIcon(n.iconName)
            return (
              <div
                key={n.label}
                className="relative overflow-hidden p-5 sm:p-6 rounded-[var(--radius-xl)] flex flex-col"
                style={{
                  background: "var(--bg)",
                  border: `1px solid ${n.accent}33`,
                  boxShadow: `0 1px 3px var(--shadow-color), 0 6px 20px ${n.accent}1F`,
                  animation: `fadeInUp 0.7s ease-out ${0.08 + i * 0.07}s both`,
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 w-[180px] h-[180px] rounded-full"
                  style={{ background: `radial-gradient(circle, ${n.accent}2E 0%, transparent 70%)` }}
                />

                <div className="relative">
                  <span
                    className="inline-flex w-10 h-10 rounded-[10px] items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${n.accent}26 0%, ${n.accent}0A 100%)`,
                      color: n.accent,
                      border: `1px solid ${n.accent}33`,
                    }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.3} />
                  </span>

                  <div className="mt-4 flex items-baseline gap-1.5 flex-wrap">
                    <span
                      className="text-[44px] sm:text-[52px] lg:text-[58px] font-bold leading-none tracking-[-0.03em]"
                      style={{
                        background: `linear-gradient(180deg, ${n.accent} 0%, ${n.accent}CC 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {n.value}
                    </span>
                    <span
                      className="text-[12.5px] font-semibold"
                      style={{ color: n.accent }}
                    >
                      {n.unit}
                    </span>
                  </div>

                  <div
                    className="mt-2 text-[14px] sm:text-[15px] font-bold leading-[1.3]"
                    style={{ color: "var(--ink)" }}
                  >
                    {n.label}
                  </div>
                  <p
                    className="mt-1.5 text-[13px] leading-[1.5]"
                    style={{ color: "var(--muted)" }}
                  >
                    {n.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-[12.5px]" style={{ color: "var(--muted)" }}>
          Every output above is included in the $899/mo base plan. Ad spend (if you run paid ads à la carte) is separate.
        </p>
      </div>
    </section>
  )
}

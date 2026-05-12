import { ArrowUp, Plus } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { serviceproUnlocks, serviceproBumps } from "@/lib/servicepro-data"
import { getIcon } from "@/components/plans/hub/icon-map"

export function ServiceProUpgrade() {
  return (
    <section
      aria-labelledby="servicepro-upgrade-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-10%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[15%] right-[-10%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Upgrade from LocalMark"
          heading={
            <span id="servicepro-upgrade-heading">
              Everything you unlock by{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">leveling up</span>.
              </span>
            </span>
          }
          paragraph="LocalMark gets you found. ServicePro converts what gets found into booked, paid jobs — automatically. Here&rsquo;s the gap you close by moving up."
        />

        {/* Bumped stats strip */}
        <div className="mt-10 mx-auto max-w-[760px]">
          <div
            className="rounded-[var(--radius-xl)] p-5 sm:p-6 flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow: "0 1px 3px var(--shadow-color), 0 6px 18px var(--shadow-color)",
              borderColor: "var(--border-color)",
            }}
          >
            {serviceproBumps.map((bump) => (
              <div key={bump.label} className="flex-1 px-3 sm:px-5 py-3 sm:py-2 text-center" style={{ borderColor: "var(--border-color)" }}>
                <div className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                  {bump.label}
                </div>
                <div className="mt-2 flex items-baseline justify-center gap-2">
                  <span
                    className="text-[18px] font-semibold line-through opacity-50"
                    style={{ color: "var(--muted)" }}
                  >
                    {bump.from}
                  </span>
                  <ArrowUp className="w-4 h-4" strokeWidth={2.6} style={{ color: "#22C55E" }} />
                  <span
                    className="text-[28px] font-bold tracking-[-0.01em]"
                    style={{ color: "#F59E0B" }}
                  >
                    {bump.to}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "You also get" 8-card grid */}
        <div className="mt-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-[160px]" style={{ background: "var(--border-color)" }} />
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
              style={{ background: "rgba(245,158,11,0.10)", color: "#D97706", border: "1px solid rgba(245,158,11,0.30)" }}
            >
              <Plus className="w-3 h-3" strokeWidth={3} />
              And you also unlock
            </span>
            <div className="h-px flex-1 max-w-[160px]" style={{ background: "var(--border-color)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {serviceproUnlocks.map((unlock, i) => {
              const Icon = getIcon(unlock.iconName)
              return (
                <div
                  key={unlock.title}
                  className="relative overflow-hidden p-5 rounded-[var(--radius-lg)] flex flex-col transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--surface)",
                    border: `1px solid ${unlock.accent}33`,
                    boxShadow: `0 1px 3px var(--shadow-color), 0 6px 16px ${unlock.accent}14`,
                    animation: `fadeInUp 0.6s ease-out ${0.05 + i * 0.04}s both`,
                  }}
                >
                  {/* Aura */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-8 -right-8 w-[140px] h-[140px] rounded-full"
                    style={{ background: `radial-gradient(circle, ${unlock.accent}1A 0%, transparent 70%)` }}
                  />

                  <div className="relative">
                    <span
                      className="inline-flex w-11 h-11 rounded-[12px] items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${unlock.accent}26 0%, ${unlock.accent}0A 100%)`,
                        color: unlock.accent,
                        border: `1px solid ${unlock.accent}33`,
                      }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2.2} />
                    </span>

                    <h3
                      className="mt-4 text-[15.5px] font-bold leading-[1.3] tracking-[-0.005em]"
                      style={{ color: "var(--ink)" }}
                    >
                      {unlock.title}
                    </h3>

                    <p className="mt-2 text-[13.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
                      {unlock.blurb}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

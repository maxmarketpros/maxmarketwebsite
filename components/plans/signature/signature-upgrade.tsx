import Link from "next/link"
import { ArrowUp, Plus } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { signatureUnlocks, signatureBumps } from "@/lib/signature-data"
import { getIcon } from "@/components/plans/hub/icon-map"

export function SignatureUpgrade() {
  return (
    <section
      aria-labelledby="signature-upgrade-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-10%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[15%] right-[-10%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="ServicePro → Signature"
          heading={
            <span id="signature-upgrade-heading">
              Everything you unlock by{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">leveling up</span>.
              </span>
            </span>
          }
          paragraph="ServicePro converts the leads you get. Signature creates new ones — through media, ads, content, and PR — while still doing every conversion thing ServicePro does."
        />

        {/* Bumped stats strip */}
        <div className="mt-10 mx-auto max-w-[820px]">
          <div
            className="rounded-[var(--radius-xl)] p-5 sm:p-6 flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border-color)",
              boxShadow: "0 1px 3px var(--shadow-color), 0 6px 18px var(--shadow-color)",
              borderColor: "var(--border-color)",
            }}
          >
            {signatureBumps.map((bump) => (
              <div
                key={bump.label}
                className="flex-1 px-3 sm:px-5 py-3 sm:py-2 text-center"
                style={{ borderColor: "var(--border-color)" }}
              >
                <div
                  className="text-[11px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "var(--muted)" }}
                >
                  {bump.label}
                </div>
                <div className="mt-2 flex items-baseline justify-center gap-2 flex-wrap">
                  <span
                    className="text-[16px] sm:text-[18px] font-semibold line-through opacity-50"
                    style={{ color: "var(--muted)" }}
                  >
                    {bump.from}
                  </span>
                  <ArrowUp className="w-4 h-4" strokeWidth={2.6} style={{ color: "#EC4899" }} />
                  <span
                    className="text-[22px] sm:text-[26px] font-bold tracking-[-0.01em]"
                    style={{ color: "#BE185D" }}
                  >
                    {bump.to}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unlocks grid */}
        <div className="mt-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-[160px]" style={{ background: "var(--border-color)" }} />
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
              style={{
                background: "rgba(236,72,153,0.10)",
                color: "#BE185D",
                border: "1px solid rgba(236,72,153,0.30)",
              }}
            >
              <Plus className="w-3 h-3" strokeWidth={3} />
              And you also unlock
            </span>
            <div className="h-px flex-1 max-w-[160px]" style={{ background: "var(--border-color)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {signatureUnlocks.map((unlock, i) => {
              const Icon = getIcon(unlock.iconName)
              return (
                <div
                  key={unlock.title}
                  className="relative overflow-hidden p-5 rounded-[var(--radius-lg)] flex flex-col transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--bg)",
                    border: `1px solid ${unlock.accent}33`,
                    boxShadow: `0 1px 3px var(--shadow-color), 0 6px 16px ${unlock.accent}14`,
                    animation: `fadeInUp 0.6s ease-out ${0.05 + i * 0.04}s both`,
                  }}
                >
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

          <p className="mt-8 text-center text-[14px]" style={{ color: "var(--muted)" }}>
            Coming from ServicePro?{" "}
            <Link
              href="/plans"
              className="font-semibold underline underline-offset-4"
              style={{ color: "#BE185D" }}
            >
              See the full plan comparison →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

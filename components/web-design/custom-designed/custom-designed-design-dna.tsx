import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"

const CD_INK = "#0B132B"
const CD_ROSE = "#F43F5E"
const CD_VIOLET = "#8B5CF6"
const CD_AMBER = "#FBBF24"
const CD_TEAL = "#14B8A6"

const typeRamp = [
  { label: "Display", size: 64, weight: 800, tracking: "-0.03em" },
  { label: "H1", size: 48, weight: 700, tracking: "-0.025em" },
  { label: "H2", size: 32, weight: 700, tracking: "-0.02em" },
  { label: "H3", size: 22, weight: 600, tracking: "-0.01em" },
  { label: "Body", size: 17, weight: 400, tracking: "0" },
  { label: "Caption", size: 13, weight: 500, tracking: "0.02em" },
]

const palette = [
  { token: "ink-900", value: CD_INK, role: "Primary text" },
  { token: "rose-500", value: CD_ROSE, role: "Brand accent" },
  { token: "violet-500", value: CD_VIOLET, role: "Secondary accent" },
  { token: "amber-400", value: CD_AMBER, role: "Highlight" },
  { token: "teal-500", value: CD_TEAL, role: "Success / data" },
  { token: "stone-50", value: "#FAF7F2", role: "Surface" },
]

const spacing = [4, 8, 12, 16, 24, 32, 48, 64]

const easings = [
  { label: "ease-snap", curve: "cubic-bezier(.2,.85,.3,1)" },
  { label: "ease-glide", curve: "cubic-bezier(.4,.0,.2,1)" },
  { label: "ease-spring", curve: "cubic-bezier(.34,1.56,.64,1)" },
]

export function CustomDesignedDesignDna() {
  return (
    <section
      id="custom-designed-dna"
      aria-labelledby="custom-designed-dna-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Every custom website design ships a brand system"
          heading={
            <span id="custom-designed-dna-heading">
              The{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, rgba(244,63,94,0.30) 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                design DNA
              </span>{" "}
              behind every page.
            </span>
          }
          paragraph="A custom website design isn't six pages — it's a system. We design the type ramp, color tokens, spacing scale, and motion easing once, then every page in your site inherits the same DNA."
        />

        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Type ramp — large card */}
          <article
            className="lg:col-span-7 card-surface p-6 sm:p-8"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <header className="flex items-baseline justify-between mb-6">
              <h3
                className="text-[18px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                Type ramp
              </h3>
              <span
                className="text-[11px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                /tokens/typography.ts
              </span>
            </header>
            <ul className="divide-y" style={{ borderColor: "var(--border-color)" }}>
              {typeRamp.map((t) => (
                <li
                  key={t.label}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <span
                    style={{
                      color: CD_INK,
                      fontSize: Math.min(t.size, 40),
                      fontWeight: t.weight,
                      letterSpacing: t.tracking,
                      lineHeight: 1.05,
                    }}
                  >
                    {t.label} — Aa
                  </span>
                  <span
                    className="text-[11px] font-mono shrink-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {t.size}/{t.weight}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* Color tokens */}
          <article
            className="lg:col-span-5 card-surface p-6 sm:p-8"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <header className="flex items-baseline justify-between mb-6">
              <h3
                className="text-[18px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                Color tokens
              </h3>
              <span
                className="text-[11px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                /tokens/color.ts
              </span>
            </header>
            <ul className="space-y-2.5">
              {palette.map((p) => (
                <li
                  key={p.token}
                  className="flex items-center gap-3 px-2.5 py-1.5 rounded-md"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-md shrink-0"
                    style={{
                      background: p.value,
                      border: "1px solid rgba(11,19,43,0.10)",
                    }}
                    aria-hidden
                  />
                  <span
                    className="text-[12.5px] font-mono font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {p.token}
                  </span>
                  <span
                    className="ml-auto text-[11.5px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.role}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* Spacing scale */}
          <article
            className="lg:col-span-7 card-surface p-6 sm:p-8"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <header className="flex items-baseline justify-between mb-6">
              <h3
                className="text-[18px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                Spacing scale
              </h3>
              <span
                className="text-[11px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                /tokens/spacing.ts
              </span>
            </header>
            <div className="flex items-end gap-2.5 flex-wrap">
              {spacing.map((s) => (
                <div key={s} className="flex flex-col items-center gap-1.5">
                  <div
                    className="rounded-md"
                    style={{
                      width: s,
                      height: s,
                      background: `linear-gradient(135deg, ${CD_ROSE} 0%, ${CD_VIOLET} 100%)`,
                    }}
                    aria-hidden
                  />
                  <span
                    className="text-[10.5px] font-mono"
                    style={{ color: "var(--muted)" }}
                  >
                    {s}
                  </span>
                </div>
              ))}
            </div>
            <p
              className="mt-5 text-[13.5px] leading-[1.55]"
              style={{ color: "var(--muted)" }}
            >
              An 8-pt baseline. Every gap, padding, radius, and stroke in your
              custom website design snaps to this grid — that's why it feels
              calm even when it's busy.
            </p>
          </article>

          {/* Motion easing */}
          <article
            className="lg:col-span-5 card-surface p-6 sm:p-8"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <header className="flex items-baseline justify-between mb-6">
              <h3
                className="text-[18px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                Motion easing
              </h3>
              <span
                className="text-[11px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                /tokens/motion.ts
              </span>
            </header>
            <ul className="space-y-3">
              {easings.map((e) => (
                <li key={e.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="text-[12.5px] font-mono font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      {e.label}
                    </span>
                    <span
                      className="text-[10.5px] font-mono"
                      style={{ color: "var(--muted)" }}
                    >
                      {e.curve}
                    </span>
                  </div>
                  <div
                    className="relative h-2 rounded-full overflow-hidden"
                    style={{ background: "var(--bg)" }}
                  >
                    <span
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{
                        width: "30%",
                        background: `linear-gradient(90deg, ${CD_ROSE} 0%, ${CD_VIOLET} 100%)`,
                        animation: `dna-glide 2.4s ${e.curve} infinite`,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <style>{`
              @keyframes dna-glide {
                0% { transform: translateX(-10%); }
                50% { transform: translateX(240%); }
                100% { transform: translateX(-10%); }
              }
            `}</style>
          </article>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Want to see the full design system you&rsquo;d ship with?
          </span>
          <SecondaryButton asLink href="#contact">
            Request a sample brand pack
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

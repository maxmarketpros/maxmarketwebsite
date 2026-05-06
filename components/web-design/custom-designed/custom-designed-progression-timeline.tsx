import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"

const CD_INK = "#0B132B"
const CD_ROSE = "#F43F5E"
const CD_VIOLET = "#8B5CF6"
const CD_AMBER = "#FBBF24"

const steps = [
  {
    num: "01",
    week: "Week 1",
    title: "Discovery",
    blurb:
      "Brand interviews, audience research, competitor teardown, and a goal-locked creative brief.",
    accent: CD_AMBER,
  },
  {
    num: "02",
    week: "Week 2",
    title: "Mood board",
    blurb:
      "Three visual directions — type pairings, color stories, image worlds — for you to react to.",
    accent: CD_ROSE,
  },
  {
    num: "03",
    week: "Weeks 3–5",
    title: "Hi-fi mockup",
    blurb:
      "Pixel-perfect Figma frames at every breakpoint, paired with a working design system.",
    accent: CD_VIOLET,
  },
  {
    num: "04",
    week: "Weeks 6–8",
    title: "Live site",
    blurb:
      "We build it on the platform that fits — Webflow, Next.js, Squarespace — pixel-matched.",
    accent: "#14B8A6",
  },
]

export function CustomDesignedProgressionTimeline() {
  return (
    <section
      id="custom-designed-progression"
      aria-labelledby="custom-designed-progression-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(244,63,94,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Mood board → live site"
          heading={
            <span id="custom-designed-progression-heading">
              The four-stage{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(139,92,246,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  custom design
                </span>{" "}
                process.
              </span>
            </span>
          }
          paragraph="Every custom-designed website ships through the same four-stage progression. No surprises, no scope drift — you see the work shaping up week by week."
        />

        <div className="mt-12 sm:mt-14 relative">
          {/* Connector line for desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[6%] right-[6%] top-[58px] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(251,191,36,0.6) 0%, rgba(244,63,94,0.6) 35%, rgba(139,92,246,0.6) 70%, rgba(20,184,166,0.6) 100%)",
            }}
          />

          <ol
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative"
            style={{ animation: "fadeInUp 0.7s ease-out both" }}
          >
            {steps.map((s, idx) => (
              <li
                key={s.num}
                className="card-surface p-6 relative transition-transform hover:translate-y-[-4px]"
                style={{
                  borderRadius: "var(--radius-lg)",
                  borderTop: `3px solid ${s.accent}`,
                  animation: `fadeInUp 0.7s ease-out ${0.1 * idx}s both`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full font-extrabold text-[14px]"
                    style={{
                      background: s.accent,
                      color: s.accent === CD_AMBER ? CD_INK : "#fff",
                      boxShadow: `0 4px 16px ${s.accent}55`,
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.week}
                  </span>
                </div>

                <h3
                  className="mt-5 text-[20px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-[14.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {s.blurb}
                </p>

                {/* Mini visual per step */}
                <div className="mt-5">
                  <StepVisual idx={idx} />
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
              Total runway: 6–8 weeks from kickoff to launch.
            </span>
            <SecondaryButton asLink href="#contact">
              Lock in a kickoff date
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function StepVisual({ idx }: { idx: number }) {
  if (idx === 0) {
    // Discovery — research notes
    return (
      <div
        className="rounded-md p-3"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        {["audience: founders, 32–55", "goal: book demos", "voice: direct, warm"].map(
          (line, i) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <span
                className="w-3 h-3 rounded-sm shrink-0"
                style={{
                  background: "rgba(251,191,36,0.30)",
                  border: "1px solid rgba(251,191,36,0.50)",
                }}
              />
              <span
                className="text-[10.5px] font-mono"
                style={{ color: "var(--ink)" }}
              >
                {line}
              </span>
            </div>
          )
        )}
      </div>
    )
  }
  if (idx === 1) {
    // Mood board — color blocks
    return (
      <div className="grid grid-cols-3 gap-1.5">
        {[
          [CD_ROSE, CD_INK, "#FAF7F2"],
          [CD_VIOLET, "#0F172A", "#FBCFE8"],
          [CD_AMBER, "#1F2937", "#FEF3C7"],
        ].map((row, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 rounded-md overflow-hidden"
            style={{ border: "1px solid var(--border-color)" }}
          >
            {row.map((c, j) => (
              <span
                key={j}
                className="block"
                style={{ background: c, height: 16 }}
              />
            ))}
          </div>
        ))}
      </div>
    )
  }
  if (idx === 2) {
    // Hi-fi mockup — wireframe
    return (
      <div
        className="rounded-md p-3"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
        }}
      >
        <div
          className="h-1.5 rounded-full mb-1.5"
          style={{ background: CD_INK, width: "55%" }}
        />
        <div
          className="h-1.5 rounded-full mb-2"
          style={{ background: "rgba(11,19,43,0.30)", width: "78%" }}
        />
        <div className="grid grid-cols-2 gap-1.5">
          <div
            className="rounded-sm"
            style={{ background: "rgba(139,92,246,0.18)", height: 28 }}
          />
          <div
            className="rounded-sm"
            style={{ background: "rgba(244,63,94,0.18)", height: 28 }}
          />
        </div>
      </div>
    )
  }
  // Live site — browser frame
  return (
    <div
      className="rounded-md overflow-hidden"
      style={{
        background: "#fff",
        border: "1px solid var(--border-color)",
      }}
    >
      <div
        className="flex gap-1 px-2 py-1.5"
        style={{ background: "#F1F5F9" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#FF5F56" }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#FFBD2E" }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#27C93F" }}
        />
      </div>
      <div className="p-3">
        <div
          className="h-1.5 rounded-full mb-1.5"
          style={{ background: CD_INK, width: "60%" }}
        />
        <div
          className="h-1.5 rounded-full mb-2"
          style={{ background: "rgba(11,19,43,0.20)", width: "82%" }}
        />
        <div
          className="rounded-sm"
          style={{
            background: `linear-gradient(135deg, #14B8A6 0%, ${CD_VIOLET} 100%)`,
            height: 22,
          }}
        />
      </div>
    </div>
  )
}

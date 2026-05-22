import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { MessageSquare, Video, Users, RefreshCw } from "lucide-react"

const CD_INK = "#0B132B"
const CD_ROSE = "#F43F5E"
const CD_VIOLET = "#8B5CF6"

const rounds = [
  {
    label: "R1 · Direction lock",
    when: "Day 14",
    deliverable: "3 mood directions → you pick one",
    via: { Icon: MessageSquare, label: "Figma comments" },
  },
  {
    label: "R2 · Design refinement",
    when: "Day 28",
    deliverable: "Hi-fi homepage + key pages, ready for nits",
    via: { Icon: Video, label: "Async Loom walkthrough" },
  },
  {
    label: "R3 · Final polish",
    when: "Day 42",
    deliverable: "All breakpoints, all states, sign-off",
    via: { Icon: Users, label: "Live working session" },
  },
]

export function CustomDesignedRevisionsCadence() {
  return (
    <section
      id="custom-designed-revisions"
      aria-labelledby="custom-designed-revisions-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Three rounds. Zero scope drift."
          heading={
            <span id="custom-designed-revisions-heading">
              How feedback{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, rgba(139,92,246,0.30) 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                actually moves
              </span>{" "}
              the design forward.
            </span>
          }
          paragraph="Every custom website design we ship runs through a fixed three-round revision cadence. You always know what's next, what's locked, and what's still in motion."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          {/* Left: rounds list */}
          <ol
            className="relative space-y-4"
            style={{ animation: "fadeInUp 0.7s ease-out both" }}
          >
            <span
              aria-hidden
              className="absolute left-[19px] top-[36px] bottom-[36px] w-[2px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(244,63,94,0.5) 0%, rgba(139,92,246,0.5) 100%)",
              }}
            />
            {rounds.map((r, idx) => {
              const Icon = r.via.Icon
              return (
                <li
                  key={r.label}
                  className="card-surface p-5 sm:p-6 relative"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    animation: `fadeInUp 0.7s ease-out ${0.1 * idx}s both`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center font-extrabold text-[13px]"
                      style={{
                        background:
                          idx === 0
                            ? CD_ROSE
                            : idx === 1
                            ? CD_VIOLET
                            : "#14B8A6",
                        color: "#fff",
                        boxShadow: `0 4px 14px ${
                          idx === 0
                            ? "rgba(244,63,94,0.40)"
                            : idx === 1
                            ? "rgba(139,92,246,0.40)"
                            : "rgba(20,184,166,0.40)"
                        }`,
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      R{idx + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <h3
                          className="text-[16.5px] font-bold leading-tight"
                          style={{ color: "var(--ink)" }}
                        >
                          {r.label}
                        </h3>
                        <span
                          className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                          style={{ color: "var(--muted)" }}
                        >
                          {r.when}
                        </span>
                      </div>
                      <p
                        className="mt-1.5 text-[14px] leading-[1.55]"
                        style={{ color: "var(--muted)" }}
                      >
                        {r.deliverable}
                      </p>
                      <div
                        className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11.5px] font-semibold"
                        style={{
                          background: "var(--bg)",
                          border: "1px solid var(--border-color)",
                          color: CD_INK,
                        }}
                      >
                        <Icon className="w-3.5 h-3.5" strokeWidth={2.25} />
                        Via {r.via.label}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>

          {/* Right: Figma-style comment thread mockup */}
          <aside
            className="card-surface p-5 sm:p-6 relative"
            style={{
              borderRadius: "var(--radius-lg)",
              animation: "fadeInUp 0.8s ease-out 0.2s both",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-[15px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                Live in your Figma file
              </h3>
              <span
                className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(34,197,94,0.10)",
                  color: "#15803D",
                  border: "1px solid rgba(34,197,94,0.30)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#22C55E" }}
                />
                3 collaborators
              </span>
            </div>

            <div className="space-y-3">
              <CommentRow
                initials="MM"
                gradient={`linear-gradient(135deg, ${CD_ROSE} 0%, ${CD_VIOLET} 100%)`}
                name="Will · Lead designer"
                time="2m"
                message="Tightened the hero H1 — pulled tracking to -0.03em. Way punchier."
                resolved
              />
              <CommentRow
                initials="JK"
                gradient="linear-gradient(135deg, #14B8A6 0%, #2563EB 100%)"
                name="Jordan · Founder"
                time="1h"
                message="Love it. Can the CTA pill use the rose gradient instead of solid?"
              />
              <CommentRow
                initials="MM"
                gradient={`linear-gradient(135deg, ${CD_ROSE} 0%, ${CD_VIOLET} 100%)`}
                name="Will · Lead designer"
                time="just now"
                message="Done. Updated the button token — propagates to all 38 instances."
                pulse
              />
            </div>

            <div
              className="mt-5 flex items-center gap-2 px-3 py-2 rounded-md"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <RefreshCw
                className="w-3.5 h-3.5"
                strokeWidth={2.25}
                style={{ color: CD_ROSE }}
              />
              <span
                className="text-[11.5px]"
                style={{ color: "var(--muted)" }}
              >
                Auto-syncs to your Slack &middot; design-handoff channel
              </span>
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Tighter loop, faster ship.
          </span>
          <SecondaryButton asLink href="#contact">
            Start your design intake
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

function CommentRow({
  initials,
  gradient,
  name,
  time,
  message,
  resolved,
  pulse,
}: {
  initials: string
  gradient: string
  name: string
  time: string
  message: string
  resolved?: boolean
  pulse?: boolean
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className="w-7 h-7 rounded-full flex items-center justify-center font-extrabold text-[10.5px] shrink-0 relative"
        style={{ background: gradient, color: "#fff" }}
      >
        {initials}
        {pulse && (
          <span
            aria-hidden
            className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
            style={{
              background: "#22C55E",
              border: "1.5px solid #fff",
              animation: "dna-pulse 1.4s ease-out infinite",
            }}
          />
        )}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="text-[12px] font-bold"
            style={{ color: "var(--ink)" }}
          >
            {name}
          </span>
          <span
            className="text-[10.5px]"
            style={{ color: "var(--muted)" }}
          >
            · {time}
          </span>
          {resolved && (
            <span
              className="text-[9.5px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
              style={{
                background: "rgba(34,197,94,0.10)",
                color: "#15803D",
              }}
            >
              ✓ resolved
            </span>
          )}
        </div>
        <div
          className="mt-1 px-3 py-2 rounded-md text-[12.5px] leading-[1.5]"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border-color)",
            color: "var(--ink)",
          }}
        >
          {message}
        </div>
      </div>
      <style>{`
        @keyframes dna-pulse {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.50); }
          100% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
        }
      `}</style>
    </div>
  )
}

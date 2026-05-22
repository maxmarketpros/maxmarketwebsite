import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { specialists } from "@/lib/practices-data"

// Geometry
const SIZE = 560
const CENTER = SIZE / 2
const HUB_R = 96
const ORBIT = 224
const ORBIT_DOT = 158
const WEDGE_OUTER = 252
const WEDGE_INNER = 116

// One position per specialist, in render order: top, right, bottom, left.
const positions = [
  { angle: -90 },
  { angle: 0 },
  { angle: 90 },
  { angle: 180 },
] as const

function toXY(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180
  return [CENTER + r * Math.cos(rad), CENTER + r * Math.sin(rad)] as const
}

// Wedge path: ring segment between innerR and outerR, from startAngle to endAngle.
function wedgePath(startAngle: number, endAngle: number, outerR: number, innerR: number) {
  const [x1, y1] = toXY(startAngle, outerR)
  const [x2, y2] = toXY(endAngle, outerR)
  const [x3, y3] = toXY(endAngle, innerR)
  const [x4, y4] = toXY(startAngle, innerR)
  return `M ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 0 0 ${x4} ${y4} Z`
}

export function PracticesTeamModel() {
  // Each specialist owns a quadrant. Wedges centered on their position angle, ±45°.
  const wedges = specialists.map((s, idx) => ({
    accent: s.accent,
    startAngle: positions[idx].angle - 45,
    endAngle: positions[idx].angle + 45,
  }))

  return (
    <section
      aria-labelledby="practices-team-model-heading"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-[-8%] w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[10%] right-[-6%] w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The team you actually work with"
          heading={
            <span id="practices-team-model-heading">
              How an engagement is{" "}
              <span className="accent-underline">staffed</span>.
            </span>
          }
          paragraph="One senior strategist owns your account. Four in-house specialists ship the work. No Slack silence. No junior handoffs. No offshoring."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Diagram — desktop SVG, mobile stacked list */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.8s ease-out both" }}
          >
            {/* Desktop diagram inside a soft backdrop card */}
            <div
              className="hidden sm:block relative w-full max-w-[580px] mx-auto p-3 sm:p-5"
              style={{
                borderRadius: "var(--radius-xl)",
                background:
                  "linear-gradient(135deg, #F7FAFC 0%, #FFFFFF 55%, #EDF5FF 100%)",
                border: "1px solid var(--border-color)",
                boxShadow:
                  "0 1px 3px rgba(17,35,68,0.06), 0 12px 36px rgba(17,35,68,0.08)",
              }}
            >
              {/* Subtle dot-grid texture */}
              <svg
                aria-hidden
                className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
              >
                <defs>
                  <pattern
                    id="team-model-dots"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="1.5" cy="1.5" r="1" fill="rgba(22,119,255,0.20)" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#team-model-dots)"
                  rx={20}
                />
              </svg>

              <div className="relative aspect-square">
                <svg
                  viewBox={`0 0 ${SIZE} ${SIZE}`}
                  className="absolute inset-0 w-full h-full"
                  aria-hidden
                >
                  <defs>
                    {/* Per-specialist spoke gradients: hub-blue → specialist accent */}
                    {specialists.map((s, i) => (
                      <linearGradient
                        key={`spoke-grad-${i}`}
                        id={`spoke-grad-${i}`}
                        gradientUnits="userSpaceOnUse"
                        x1={CENTER}
                        y1={CENTER}
                        x2={toXY(positions[i].angle, ORBIT)[0]}
                        y2={toXY(positions[i].angle, ORBIT)[1]}
                      >
                        <stop offset="0%" stopColor="#1677FF" stopOpacity="0.65" />
                        <stop offset="100%" stopColor={s.accent} stopOpacity="0.85" />
                      </linearGradient>
                    ))}

                    {/* Wedge fill gradients — very low alpha radial */}
                    {wedges.map((w, i) => (
                      <radialGradient
                        key={`wedge-grad-${i}`}
                        id={`wedge-grad-${i}`}
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <stop offset="40%" stopColor={w.accent} stopOpacity="0" />
                        <stop offset="80%" stopColor={w.accent} stopOpacity="0.10" />
                        <stop offset="100%" stopColor={w.accent} stopOpacity="0" />
                      </radialGradient>
                    ))}

                    {/* Hub gradients */}
                    <radialGradient id="hub-fill" cx="50%" cy="40%" r="65%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="60%" stopColor="#EEF6FF" />
                      <stop offset="100%" stopColor="#D6E8FF" />
                    </radialGradient>
                    <radialGradient id="hub-halo" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#74D3FF" stopOpacity="0.40" />
                      <stop offset="60%" stopColor="#1677FF" stopOpacity="0.10" />
                      <stop offset="100%" stopColor="#1677FF" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Quadrant wedge backgrounds */}
                  {wedges.map((w, i) => (
                    <path
                      key={`wedge-${i}`}
                      d={wedgePath(w.startAngle, w.endAngle, WEDGE_OUTER, WEDGE_INNER)}
                      fill={`url(#wedge-grad-${i})`}
                    />
                  ))}

                  {/* Outer orbit — solid faint blue */}
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={ORBIT}
                    fill="none"
                    stroke="rgba(22,119,255,0.22)"
                    strokeWidth="1.5"
                  />
                  {/* Inner orbit — fine dotted */}
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={ORBIT_DOT}
                    fill="none"
                    stroke="rgba(22,119,255,0.18)"
                    strokeWidth="1.25"
                    strokeDasharray="1.5 5"
                  />

                  {/* Spokes — gradient strokes with traveling pulse dots */}
                  {specialists.map((_, i) => {
                    const [x, y] = toXY(positions[i].angle, ORBIT - 4)
                    return (
                      <g key={`spoke-${i}`}>
                        {/* Base line — quiet gradient */}
                        <line
                          x1={CENTER}
                          y1={CENTER}
                          x2={x}
                          y2={y}
                          stroke={`url(#spoke-grad-${i})`}
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          opacity={0.55}
                        />
                        {/* Animated dashed overlay — energy flowing outward */}
                        <line
                          x1={CENTER}
                          y1={CENTER}
                          x2={x}
                          y2={y}
                          stroke={`url(#spoke-grad-${i})`}
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeDasharray="3 8"
                          className="team-spoke-pulse"
                          style={{ animationDelay: `${i * 0.35}s` }}
                        />
                      </g>
                    )
                  })}

                  {/* Hub halo */}
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={HUB_R + 18}
                    fill="url(#hub-halo)"
                    className="team-hub-pulse"
                  />
                  {/* Hub body */}
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={HUB_R}
                    fill="url(#hub-fill)"
                    stroke="rgba(22,119,255,0.45)"
                    strokeWidth="2"
                  />
                  {/* Hub inner accent ring */}
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={HUB_R - 8}
                    fill="none"
                    stroke="rgba(22,119,255,0.18)"
                    strokeWidth="1"
                    strokeDasharray="1.5 4"
                  />

                  {/* Hub label */}
                  {/* Small star marker */}
                  <path
                    d={`M ${CENTER} ${CENTER - 40} l 3 6 l 6 1 l -4.5 4 l 1 6 l -5.5 -3 l -5.5 3 l 1 -6 l -4.5 -4 l 6 -1 z`}
                    fill="#1677FF"
                    opacity="0.85"
                  />
                  <text
                    x={CENTER}
                    y={CENTER - 6}
                    textAnchor="middle"
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.20em",
                      fill: "#1677FF",
                    }}
                  >
                    STRATEGY
                  </text>
                  <text
                    x={CENTER}
                    y={CENTER + 16}
                    textAnchor="middle"
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: 22,
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      fill: "#0B132B",
                    }}
                  >
                    LEAD
                  </text>
                  <line
                    x1={CENTER - 24}
                    y1={CENTER + 28}
                    x2={CENTER + 24}
                    y2={CENTER + 28}
                    stroke="rgba(22,119,255,0.30)"
                    strokeWidth="1.5"
                  />
                  <text
                    x={CENTER}
                    y={CENTER + 44}
                    textAnchor="middle"
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      fill: "#4A5A75",
                    }}
                  >
                    your single point
                  </text>
                  <text
                    x={CENTER}
                    y={CENTER + 58}
                    textAnchor="middle"
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      fill: "#4A5A75",
                    }}
                  >
                    of contact
                  </text>
                </svg>

                {/* Specialist nodes — HTML overlay, positioned via % */}
                {specialists.map((s, idx) => {
                  const angle = positions[idx].angle
                  const [px, py] = toXY(angle, ORBIT)
                  const left = (px / SIZE) * 100
                  const top = (py / SIZE) * 100
                  return (
                    <div
                      key={s.role}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group"
                      style={{ left: `${left}%`, top: `${top}%` }}
                    >
                      {/* Soft halo */}
                      <span
                        aria-hidden
                        className="absolute inset-0 -m-3 rounded-full pointer-events-none team-node-halo"
                        style={{
                          background: `radial-gradient(circle, ${s.accent}33 0%, ${s.accent}00 70%)`,
                          animationDelay: `${idx * 0.3}s`,
                        }}
                      />
                      <div className="flex flex-col items-center gap-2.5 relative">
                        <span
                          className="relative w-[88px] h-[88px] rounded-full inline-flex items-center justify-center transition-transform duration-200 group-hover:-translate-y-0.5"
                          style={{
                            background: "#fff",
                            boxShadow: `0 1px 2px rgba(17,35,68,0.10), 0 10px 28px ${s.accent}44`,
                          }}
                        >
                          {/* Gradient ring */}
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: `conic-gradient(from 90deg, ${s.accent} 0%, ${s.accent}88 50%, ${s.accent} 100%)`,
                              padding: 2.5,
                              WebkitMask:
                                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                              WebkitMaskComposite: "xor",
                              maskComposite: "exclude",
                            }}
                          />
                          <img
                            src={icons8Url(s.iconId, 128)}
                            alt=""
                            width={42}
                            height={42}
                            loading="lazy"
                            decoding="async"
                            className="relative"
                          />
                        </span>
                        <div
                          className="text-center px-3.5 py-2 rounded-[14px] min-w-[148px]"
                          style={{
                            background: "#fff",
                            border: `1px solid ${s.accent}33`,
                            boxShadow: "0 4px 14px rgba(17,35,68,0.08)",
                          }}
                        >
                          <p
                            className="inline-flex items-center gap-1.5 text-[12.5px] font-bold leading-tight"
                            style={{ color: "var(--ink)" }}
                          >
                            <span
                              aria-hidden
                              className="w-1.5 h-1.5 rounded-full inline-block"
                              style={{ background: s.accent }}
                            />
                            {s.role}
                          </p>
                          <p
                            className="mt-0.5 text-[10.5px] leading-tight"
                            style={{ color: "var(--muted)" }}
                          >
                            {s.owns}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile fallback — vertical list */}
            <ul className="sm:hidden flex flex-col gap-3">
              <li
                className="card-surface p-4 flex items-center gap-3"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-[11px] tracking-[0.10em]"
                  style={{
                    background:
                      "linear-gradient(135deg, #74D3FF 0%, #1677FF 100%)",
                    color: "#fff",
                  }}
                >
                  LEAD
                </span>
                <div>
                  <p
                    className="text-[14px] font-bold"
                    style={{ color: "var(--ink)" }}
                  >
                    Strategy lead
                  </p>
                  <p
                    className="text-[12.5px]"
                    style={{ color: "var(--muted)" }}
                  >
                    Your single point of contact
                  </p>
                </div>
              </li>
              {specialists.map((s) => (
                <li
                  key={s.role}
                  className="card-surface p-4 flex items-center gap-3 ml-6"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <span
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "#fff",
                      border: `2px solid ${s.accent}44`,
                    }}
                  >
                    <img
                      src={icons8Url(s.iconId, 96)}
                      alt=""
                      width={28}
                      height={28}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <div>
                    <p
                      className="text-[14px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {s.role}
                    </p>
                    <p
                      className="text-[12.5px]"
                      style={{ color: s.accent, fontWeight: 600 }}
                    >
                      {s.owns}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Explainer + CTA */}
          <div style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}>
            <p
              className="text-[16.5px] sm:text-[17.5px] leading-[1.7]"
              style={{ color: "var(--muted)" }}
            >
              You get a single senior strategist who owns the relationship and
              the roadmap. Behind that strategist, four in-house specialists ship
              the work &mdash; design, video, ads, SEO &mdash; all on payroll, all in
              the same building, all reachable.
            </p>
            <p
              className="mt-5 text-[16.5px] sm:text-[17.5px] leading-[1.7]"
              style={{ color: "var(--muted)" }}
            >
              No revolving account managers. No agency Slack-silence. No work
              quietly shipped overseas. The person who plans your engagement is
              the person who runs it.
            </p>

            <div className="mt-7">
              <SecondaryButton asLink href="/about/team">
                Meet the team
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes team-spoke-pulse {
          0%   { stroke-dashoffset: 0;  opacity: 0; }
          15%  { opacity: 0.95; }
          85%  { opacity: 0.95; }
          100% { stroke-dashoffset: -44; opacity: 0; }
        }
        .team-spoke-pulse {
          animation: team-spoke-pulse 2.6s linear infinite;
        }
        @keyframes team-hub-pulse {
          0%, 100% { transform: scale(1);    opacity: 0.85; transform-origin: ${CENTER}px ${CENTER}px; }
          50%      { transform: scale(1.06); opacity: 1; }
        }
        .team-hub-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: team-hub-pulse 4s ease-in-out infinite;
        }
        @keyframes team-node-halo {
          0%, 100% { transform: scale(1);    opacity: 0.6; }
          50%      { transform: scale(1.12); opacity: 1; }
        }
        .team-node-halo {
          animation: team-node-halo 3.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .team-spoke-pulse,
          .team-hub-pulse,
          .team-node-halo {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

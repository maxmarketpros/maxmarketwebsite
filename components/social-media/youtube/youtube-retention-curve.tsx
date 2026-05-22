import { Pill } from "@/components/ui/pill"
import { ArrowRight, Zap, Repeat, Wand2, ArrowRightCircle } from "lucide-react"

type Annotation = {
  step: string
  title: string
  Icon: typeof Zap
  blurb: string
  pos: number
  color: string
}

const annotations: Annotation[] = [
  {
    step: "0:00–0:08",
    title: "Hook",
    Icon: Zap,
    blurb:
      "Open with the visceral promise — show the result first, callback the title, fight the swipe-back.",
    pos: 4,
    color: "#FF0000",
  },
  {
    step: "0:15",
    title: "Reframe",
    Icon: Repeat,
    blurb:
      "Reset expectations and reintroduce the stakes once the algorithm has the first watch-decision.",
    pos: 17,
    color: "#F59E0B",
  },
  {
    step: "Midpoint",
    title: "Pattern interrupt",
    Icon: Wand2,
    blurb:
      "B-roll cut, location switch, or chart reveal at minute 4–6 to flatten the natural drop-off.",
    pos: 50,
    color: "#1677FF",
  },
  {
    step: "End-card",
    title: "Loop hook",
    Icon: ArrowRightCircle,
    blurb:
      "Tease the next video at 90% so end-screen click-through earns suggested-video placement.",
    pos: 92,
    color: "#22C55E",
  },
]

const ourPath =
  "M 0 18 C 12 20, 22 25, 28 30 C 36 36, 50 50, 60 58 C 72 66, 84 72, 100 78"
const theirPath =
  "M 0 18 C 6 28, 14 60, 22 80 C 32 100, 48 120, 60 132 C 74 144, 86 152, 100 158"

export function YoutubeRetentionCurve() {
  return (
    <section
      id="youtube-retention-curve"
      aria-labelledby="youtube-retention-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-8%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,0,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="text-center max-w-[760px] mx-auto">
          <div className="flex justify-center mb-5">
            <Pill>YouTube watch-time engineering</Pill>
          </div>
          <h2
            id="youtube-retention-heading"
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Our YouTube marketing services{" "}
            <span className="accent-underline">engineer</span> the audience-retention
            curve.
          </h2>
          <p
            className="mt-5 text-[17px] sm:text-[18.5px] leading-[1.65] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Watch time is the single biggest signal YouTube uses to recommend
            your videos. Every script we ship has four engineered moments — a
            cold-open hook, a 0:15 reframe, a midpoint pattern interrupt, and a
            loop hook — designed to flatten the drop-off curve you see in
            YouTube Studio.
          </p>
        </div>

        <div
          className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Studio-style chart card */}
          <article
            className="relative overflow-hidden"
            style={{
              borderRadius: "var(--radius-xl)",
              background:
                "linear-gradient(180deg, #0F0F0F 0%, #181820 100%)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.08), 0 30px 80px rgba(255,0,0,0.18)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Studio header */}
            <div
              className="flex items-center justify-between px-5 py-3 border-b"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center"
                  style={{ background: "#FF0000" }}
                >
                  <span
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid #fff",
                      borderTop: "4px solid transparent",
                      borderBottom: "4px solid transparent",
                      marginLeft: 1.5,
                    }}
                  />
                </span>
                <span
                  className="text-[13px] font-bold tracking-[-0.01em]"
                  style={{ color: "#fff" }}
                >
                  YouTube Studio · Audience retention
                </span>
              </div>
              <span
                className="text-[10.5px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded"
                style={{
                  background: "rgba(34,197,94,0.18)",
                  color: "#4ADE80",
                }}
              >
                ▲ Above average
              </span>
            </div>

            {/* Chart area */}
            <div className="px-4 sm:px-6 pt-5 pb-4 relative">
              <div className="flex items-center justify-between mb-3 text-[10.5px] font-semibold uppercase tracking-[0.1em]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5" style={{ color: "#FF6B6B" }}>
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ background: "#FF0000" }}
                    />
                    Our retention
                  </span>
                  <span
                    className="flex items-center gap-1.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.35)" }}
                    />
                    Typical channel
                  </span>
                </div>
                <span style={{ color: "rgba(255,255,255,0.55)" }}>
                  AVG % VIEWED
                </span>
              </div>

              <div className="relative" style={{ aspectRatio: "16 / 8" }}>
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full"
                  aria-label="Audience retention curve — our YouTube marketing services vs. typical channel"
                  role="img"
                >
                  <defs>
                    <linearGradient id="retGradOurs" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF0000" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid lines */}
                  {[20, 40, 60, 80].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      x2="100"
                      y1={y}
                      y2={y}
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="0.3"
                    />
                  ))}
                  {[25, 50, 75].map((x) => (
                    <line
                      key={x}
                      x1={x}
                      x2={x}
                      y1="0"
                      y2="100"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="0.3"
                    />
                  ))}

                  {/* Theirs (background curve) */}
                  <path
                    d={`${theirPath} L 100 100 L 0 100 Z`}
                    fill="rgba(255,255,255,0.04)"
                  />
                  <path
                    d={theirPath}
                    fill="none"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="0.7"
                    strokeDasharray="2 1.5"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Ours (foreground area + curve) */}
                  <path
                    d={`${ourPath} L 100 100 L 0 100 Z`}
                    fill="url(#retGradOurs)"
                  />
                  <path
                    d={ourPath}
                    fill="none"
                    stroke="#FF0000"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Annotation pins */}
                {annotations.map((a, i) => (
                  <div
                    key={i}
                    className="absolute -translate-x-1/2"
                    style={{
                      left: `${a.pos}%`,
                      top: 0,
                      bottom: 0,
                    }}
                    aria-hidden
                  >
                    <span
                      className="absolute top-0 bottom-0 w-px"
                      style={{
                        background: `${a.color}55`,
                      }}
                    />
                    <span
                      className="absolute -translate-x-1/2 flex items-center justify-center rounded-full font-extrabold"
                      style={{
                        top: -10,
                        left: 0,
                        width: 22,
                        height: 22,
                        background: a.color,
                        color: "#fff",
                        fontSize: 11,
                        boxShadow: `0 0 0 3px rgba(0,0,0,0.6), 0 0 10px ${a.color}88`,
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* X axis labels */}
              <div
                className="mt-2 flex justify-between text-[10.5px] font-semibold"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <span>0:00</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>End</span>
              </div>
            </div>

            {/* Stat strip */}
            <div
              className="grid grid-cols-3 gap-px"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              {[
                { label: "Avg % viewed", value: "62%", delta: "+24%" },
                { label: "Avg view duration", value: "6:42", delta: "+3:11" },
                { label: "Suggested-video pickup", value: "38%", delta: "+19%" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="px-4 py-4"
                  style={{ background: "#0F0F0F" }}
                >
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {s.label}
                  </div>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span
                      className="text-[18px] font-extrabold"
                      style={{ color: "#fff" }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="text-[11px] font-bold"
                      style={{ color: "#4ADE80" }}
                    >
                      {s.delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Annotations side panel */}
          <div className="space-y-3">
            {annotations.map((a, i) => (
              <article
                key={a.title}
                className="card-surface relative overflow-hidden"
                style={{
                  borderRadius: "var(--radius-lg)",
                  borderLeft: `4px solid ${a.color}`,
                  animation: `fadeInUp 0.6s ease-out ${0.05 * i}s both`,
                }}
              >
                <div className="px-5 py-4 flex items-start gap-3">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-extrabold"
                    style={{
                      background: `${a.color}1A`,
                      color: a.color,
                      boxShadow: `inset 0 0 0 1px ${a.color}33`,
                      fontSize: 13,
                    }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div
                      className="flex items-center gap-2 mb-0.5 flex-wrap"
                    >
                      <span
                        className="text-[10.5px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: a.color }}
                      >
                        {a.step}
                      </span>
                      <a.Icon className="w-3.5 h-3.5" style={{ color: a.color }} strokeWidth={2.5} />
                    </div>
                    <h3
                      className="text-[16.5px] font-bold leading-[1.25] tracking-[-0.01em]"
                      style={{ color: "var(--ink)" }}
                    >
                      {a.title}
                    </h3>
                    <p
                      className="mt-1.5 text-[13.5px] leading-[1.5]"
                      style={{ color: "var(--muted)" }}
                    >
                      {a.blurb}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-1.5 font-semibold text-[14.5px] group px-4 py-3 rounded-[var(--radius-sm)]"
              style={{
                background: "var(--accent-bg)",
                color: "var(--accent)",
              }}
            >
              See your channel&rsquo;s retention diagnostic
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { PrimaryButton } from "@/components/ui/primary-button"
import { Pill } from "@/components/ui/pill"
import { TrendingUp, Users, Eye, Heart, MousePointerClick } from "lucide-react"

const metrics = [
  {
    Icon: Users,
    number: "+127K",
    label: "new followers added across client accounts in the last 12 months",
    color: "#1677FF",
  },
  {
    Icon: Eye,
    number: "180M+",
    label: "organic impressions generated across TikTok, IG, and YouTube",
    color: "#E1306C",
  },
  {
    Icon: Heart,
    number: "4.2%",
    label: "average engagement rate — 3x the industry benchmark",
    color: "#EF4444",
  },
  {
    Icon: MousePointerClick,
    number: "3.8x",
    label: "return on ad spend on boosted social campaigns",
    color: "#10B981",
  },
]

export function SocialGrowthNumbers() {
  return (
    <section
      id="social-growth"
      aria-labelledby="social-growth-heading"
      className="relative"
    >
      {/* Soft background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[50%] translate-x-[-50%] w-[900px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div
          className="card-surface relative overflow-hidden"
          style={{ borderRadius: "var(--radius-xl)" }}
        >
          {/* aura */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 w-[60%] h-full"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(116,211,255,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 p-8 sm:p-12 lg:p-16 items-center">
            {/* Left: copy */}
            <div>
              <Pill>
                <TrendingUp className="w-3.5 h-3.5" />
                Real Growth
              </Pill>
              <h2
                id="social-growth-heading"
                className="mt-5 text-[30px] sm:text-[38px] lg:text-[46px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
                style={{ color: "var(--ink)" }}
              >
                Numbers that actually{" "}
                <span className="text-gradient">move the needle</span>.
              </h2>
              <p
                className="mt-5 text-[16px] sm:text-[18px] leading-[1.6] max-w-[520px]"
                style={{ color: "var(--muted)" }}
              >
                Followers are a vanity metric. We optimize for the numbers that
                translate into booked jobs: engagement, DMs, website clicks, and
                revenue attributed to social.
              </p>

              <div className="mt-8">
                <PrimaryButton size="lg" asLink href="#contact">
                  Get your growth plan
                </PrimaryButton>
              </div>
            </div>

            {/* Right: metric cards + chart */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="relative overflow-hidden rounded-[var(--radius-md)] p-5 border"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute right-[-20px] top-[-20px] w-[90px] h-[90px]"
                    style={{
                      background: `radial-gradient(ellipse at center, ${m.color}22 0%, transparent 70%)`,
                    }}
                  />
                  <div className="relative">
                    <div
                      className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center"
                      style={{
                        background: `${m.color}14`,
                        color: m.color,
                      }}
                    >
                      <m.Icon className="w-4 h-4" strokeWidth={2.25} />
                    </div>
                    <div
                      className="mt-3 text-[26px] sm:text-[30px] font-bold leading-none tracking-[-0.02em]"
                      style={{ color: "var(--ink)" }}
                    >
                      {m.number}
                    </div>
                    <p
                      className="mt-2 text-[12.5px] sm:text-[13px] leading-[1.4]"
                      style={{ color: "var(--muted)" }}
                    >
                      {m.label}
                    </p>
                  </div>
                </div>
              ))}

              {/* Mini growth chart — spans full width */}
              <div
                className="col-span-2 relative overflow-hidden rounded-[var(--radius-md)] p-5 border"
                style={{
                  background: "var(--bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="text-[12.5px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    12-month follower growth
                  </div>
                  <div
                    className="text-[12px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: "#10B98114",
                      color: "#10B981",
                    }}
                  >
                    +312%
                  </div>
                </div>
                <svg
                  viewBox="0 0 300 70"
                  className="w-full h-[60px]"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient
                      id="growthFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#1677FF"
                        stopOpacity="0.28"
                      />
                      <stop
                        offset="100%"
                        stopColor="#1677FF"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,55 C25,54 50,52 75,46 C100,40 125,42 150,34 C175,26 200,28 225,18 C250,10 275,8 300,5 L300,70 L0,70 Z"
                    fill="url(#growthFill)"
                  />
                  <path
                    d="M0,55 C25,54 50,52 75,46 C100,40 125,42 150,34 C175,26 200,28 225,18 C250,10 275,8 300,5"
                    fill="none"
                    stroke="#1677FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

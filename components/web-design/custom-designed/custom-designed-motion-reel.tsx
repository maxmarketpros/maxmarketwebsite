"use client"

import { SectionHeader } from "@/components/ui/section-header"
import { ArrowRight, Play, Heart } from "lucide-react"

const CD_INK = "#0B132B"
const CD_ROSE = "#F43F5E"
const CD_VIOLET = "#8B5CF6"
const CD_AMBER = "#FBBF24"
const CD_TEAL = "#14B8A6"

export function CustomDesignedMotionReel() {
  return (
    <section
      id="custom-designed-motion"
      aria-labelledby="custom-designed-motion-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] right-[-8%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Live, on this page — no images"
          heading={
            <span id="custom-designed-motion-heading">
              Motion that{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, rgba(139,92,246,0.30) 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                rewards attention
              </span>
              .
            </span>
          }
          paragraph="Hover, scroll, click. Every micro-interaction is designed against the same easing curves and durations as the rest of the system. Hover the cards below — these are real, working interactions you'd ship."
        />

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <ReelCard
            label="Magnetic CTA"
            description="Buttons that lean toward the cursor."
          >
            <MagneticButton />
          </ReelCard>

          <ReelCard
            label="Marquee proof"
            description="Logos that loop in eased motion."
          >
            <Marquee />
          </ReelCard>

          <ReelCard
            label="Stat reveal"
            description="Counters that count up in view."
          >
            <CounterReveal />
          </ReelCard>

          <ReelCard
            label="Like burst"
            description="Tap & celebrate — particle pulse."
          >
            <LikeBurst />
          </ReelCard>

          <ReelCard
            label="Card lift"
            description="Subtle 3D tilt on cursor trace."
            wide
          >
            <TiltCard />
          </ReelCard>

          <ReelCard
            label="Color flip"
            description="Hover swaps the brand gradient direction."
            wide
          >
            <ColorFlip />
          </ReelCard>
        </div>

        <p
          className="mt-10 text-center text-[14px]"
          style={{ color: "var(--muted)" }}
        >
          Every interaction respects{" "}
          <code
            className="px-1 py-0.5 rounded"
            style={{ background: "var(--bg)", color: CD_INK }}
          >
            prefers-reduced-motion
          </code>{" "}
          — no surprises for users who&rsquo;ve opted out.
        </p>
      </div>

      <style>{`
        @keyframes reel-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes reel-pulse {
          0% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(1); opacity: 0.9; }
        }
        @keyframes reel-count {
          0% { transform: translateY(100%); opacity: 0; }
          15% { transform: translateY(0%); opacity: 1; }
          85% { transform: translateY(0%); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes reel-burst {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </section>
  )
}

function ReelCard({
  label,
  description,
  children,
  wide,
}: {
  label: string
  description: string
  children: React.ReactNode
  wide?: boolean
}) {
  return (
    <article
      className={`card-surface p-5 ${wide ? "lg:col-span-2" : ""}`}
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div
        className="rounded-md mb-4 flex items-center justify-center"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border-color)",
          height: 160,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {children}
      </div>
      <h3
        className="text-[14.5px] font-bold leading-tight"
        style={{ color: "var(--ink)" }}
      >
        {label}
      </h3>
      <p
        className="mt-1 text-[13px] leading-[1.5]"
        style={{ color: "var(--muted)" }}
      >
        {description}
      </p>
    </article>
  )
}

function MagneticButton() {
  return (
    <button
      type="button"
      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-[14px] transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${CD_ROSE} 0%, ${CD_VIOLET} 100%)`,
        color: "#fff",
        boxShadow: "0 4px 16px rgba(244,63,94,0.30)",
        transitionTimingFunction: "cubic-bezier(.34,1.56,.64,1)",
      }}
      onMouseMove={(e) => {
        const t = e.currentTarget
        const r = t.getBoundingClientRect()
        const x = e.clientX - r.left - r.width / 2
        const y = e.clientY - r.top - r.height / 2
        t.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.04)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0,0) scale(1)"
      }}
    >
      Try me
      <ArrowRight
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
        strokeWidth={2.5}
      />
    </button>
  )
}

function Marquee() {
  const items = ["Brand", "Type", "Color", "Motion", "Grid"]
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-3 whitespace-nowrap"
        style={{
          animation: "reel-marquee 14s linear infinite",
          width: "max-content",
        }}
      >
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-full text-[12px] font-bold"
            style={{
              background: "#fff",
              border: "1px solid var(--border-color)",
              color: CD_INK,
            }}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  )
}

function CounterReveal() {
  return (
    <div className="text-center">
      <div
        className="relative inline-flex h-[42px] overflow-hidden font-extrabold text-[40px] tracking-[-0.03em] leading-none"
        style={{ color: CD_INK }}
      >
        <span
          className="block"
          style={{
            animation: "reel-count 4s cubic-bezier(.4,0,.2,1) infinite",
          }}
        >
          312%
        </span>
      </div>
      <div
        className="text-[10.5px] font-bold uppercase tracking-[0.14em] mt-2"
        style={{ color: "var(--muted)" }}
      >
        avg engagement lift
      </div>
    </div>
  )
}

function LikeBurst() {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full transition-transform duration-300"
      style={{
        background: "#fff",
        border: `1px solid ${CD_ROSE}40`,
      }}
      onMouseEnter={(e) => {
        const burst = e.currentTarget.querySelector("[data-burst]") as HTMLElement | null
        if (burst) {
          burst.style.animation = "none"
          // force reflow
          void burst.offsetWidth
          burst.style.animation = "reel-burst 0.6s ease-out 1"
        }
      }}
    >
      <Heart
        className="w-5 h-5"
        style={{ color: CD_ROSE, fill: CD_ROSE }}
        strokeWidth={2}
      />
      <span
        data-burst
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          border: `2px solid ${CD_ROSE}`,
          opacity: 0,
        }}
      />
    </button>
  )
}

function TiltCard() {
  return (
    <div
      className="rounded-md p-4 cursor-pointer"
      style={{
        background: "#fff",
        border: "1px solid var(--border-color)",
        boxShadow: "0 4px 16px rgba(11,19,43,0.08)",
        width: 180,
        transformStyle: "preserve-3d",
        transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
      }}
      onMouseMove={(e) => {
        const t = e.currentTarget
        const r = t.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        t.style.transform = `perspective(700px) rotateX(${-y * 8}deg) rotateY(${
          x * 8
        }deg) translateZ(0)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "perspective(700px) rotateX(0deg) rotateY(0deg)"
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-7 h-7 rounded-md flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${CD_TEAL} 0%, ${CD_VIOLET} 100%)`,
            color: "#fff",
          }}
        >
          <Play className="w-3.5 h-3.5" strokeWidth={2.5} fill="#fff" />
        </span>
        <span
          className="text-[12px] font-bold"
          style={{ color: CD_INK }}
        >
          Brand reel · 0:42
        </span>
      </div>
      <div
        className="h-2 rounded-full mb-1.5"
        style={{ background: CD_INK, width: "70%" }}
      />
      <div
        className="h-2 rounded-full"
        style={{ background: "rgba(11,19,43,0.20)", width: "45%" }}
      />
    </div>
  )
}

function ColorFlip() {
  return (
    <div
      className="rounded-md w-[180px] h-[100px] cursor-pointer transition-all duration-500 group flex items-center justify-center font-extrabold text-[20px] tracking-[-0.02em] text-[#fff]"
      style={{
        background: `linear-gradient(135deg, ${CD_ROSE} 0%, ${CD_VIOLET} 100%)`,
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 0%",
        transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundPosition = "100% 100%"
        e.currentTarget.style.background = `linear-gradient(135deg, ${CD_AMBER} 0%, ${CD_ROSE} 100%)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = `linear-gradient(135deg, ${CD_ROSE} 0%, ${CD_VIOLET} 100%)`
      }}
    >
      Hover me
    </div>
  )
}

import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  DEPARTMENTS,
  TEAM_MEMBERS,
  type Department,
  type TeamMember,
} from "@/lib/team-data"

const departmentByIdMap: Record<Department, (typeof DEPARTMENTS)[number]> =
  DEPARTMENTS.reduce(
    (acc, d) => {
      acc[d.id] = d
      return acc
    },
    {} as Record<Department, (typeof DEPARTMENTS)[number]>
  )

// Slightly tightened positions for the smaller hub-page cluster.
const BUBBLE_POSITIONS: Record<string, { top: number; left: number }> = {
  "joseph-stirling": { top: 38, left: 40 },
  "lawrence-welsh": { top: 60, left: 62 },
  "lucas-herman": { top: 22, left: 24 },
  "brandon-lopez": { top: 12, left: 50 },
  "mike-stirling": { top: 24, left: 78 },
  "will-cruttenden": { top: 75, left: 80 },
  "hector-camacho": { top: 76, left: 22 },
  "muzammil-ilbrahim": { top: 50, left: 12 },
  "myles-mendez": { top: 50, left: 88 },
  "moustafa-ramzy": { top: 86, left: 50 },
}

const departmentAnchors: Record<Department, string> = {
  leadership: "/about/team#leadership",
  "client-growth": "/about/team#client-growth",
  "web-development": "/about/team#web-development",
  "business-development": "/about/team#business-development",
}

export function AboutTeamCluster() {
  return (
    <section
      aria-labelledby="about-team-cluster-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 0% 0%, rgba(22,119,255,0.10) 0%, transparent 60%), radial-gradient(120% 100% at 100% 100%, rgba(116,211,255,0.08) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — Bubble cluster */}
          <div
            className="relative order-2 lg:order-1"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <BubbleCluster />
          </div>

          {/* Right — copy + dept badges */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(22,119,255,0.35)",
                color: "var(--accent)",
              }}
            >
              Meet the team
            </span>

            <h2
              id="about-team-cluster-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              The faces behind{" "}
              <span className="accent-underline">your account</span>.
            </h2>

            <p
              className="mt-5 text-[16px] sm:text-[18px] leading-[1.6]"
              style={{ color: "var(--muted)" }}
            >
              Ten specialists. Four departments. One office in Irvine. The
              people who answer the phone when you call are the same people
              running your account.
            </p>

            <div
              className="mt-7 flex items-start gap-3 p-4 rounded-[var(--radius-md)]"
              style={{
                background: "rgba(22,119,255,0.06)",
                border: "1px solid rgba(22,119,255,0.18)",
              }}
            >
              <Quote
                className="w-5 h-5 shrink-0 mt-0.5"
                strokeWidth={2}
                style={{ color: "var(--accent)" }}
              />
              <p
                className="text-[15px] italic leading-[1.55]"
                style={{ color: "var(--ink)" }}
              >
                Same people who answer the phone when you call.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEPARTMENTS.map((d, i) => (
                <Link
                  key={d.id}
                  href={departmentAnchors[d.id]}
                  className="group flex items-center justify-between px-4 py-3 rounded-[var(--radius-md)] border transition-all hover:translate-y-[-1px]"
                  style={{
                    background: "#fff",
                    borderColor: `${d.accent}33`,
                    boxShadow: "0 1px 3px rgba(11,19,43,0.04)",
                    animation: `fadeInUp 0.6s ease-out ${0.1 + i * 0.06}s both`,
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: d.accent }}
                    />
                    <span
                      className="text-[14px] font-semibold"
                      style={{ color: "var(--ink)" }}
                    >
                      {d.pill}
                    </span>
                  </span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    style={{ color: d.accent }}
                  />
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <SecondaryButton asLink href="/about/team">
                Meet the whole team
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BubbleCluster() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="relative w-full aspect-square">
        <div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(235,244,255,0.85) 70%, rgba(235,244,255,0.55) 100%)",
            border: "1px solid var(--border-color)",
            boxShadow:
              "0 4px 24px rgba(11,19,43,0.08), 0 24px 60px rgba(11,19,43,0.10)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-[12%] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, transparent 65%)",
          }}
        />
        {TEAM_MEMBERS.map((member, i) => (
          <Bubble key={member.slug} member={member} index={i} />
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <span
          aria-hidden
          className="h-px flex-1"
          style={{ background: "var(--border-color)" }}
        />
        <span
          className="text-[10px] sm:text-[10.5px] font-bold uppercase whitespace-nowrap"
          style={{ color: "var(--muted)", letterSpacing: "0.22em" }}
        >
          MMP Team &middot; Irvine, CA &middot; Est. 2020
        </span>
        <span
          aria-hidden
          className="h-px flex-1"
          style={{ background: "var(--border-color)" }}
        />
      </div>
    </div>
  )
}

interface BubbleProps {
  member: TeamMember
  index: number
}

function Bubble({ member, index }: BubbleProps) {
  const dept = departmentByIdMap[member.department]
  const pos = BUBBLE_POSITIONS[member.slug]
  const isLeader = member.department === "leadership"

  const sizeVar = isLeader
    ? "clamp(92px, 22%, 120px)"
    : "clamp(60px, 14.5%, 80px)"

  const animName = isLeader ? "floatBubbleLg" : "floatBubble"
  const animDuration = isLeader ? "5.6s" : "4.5s"
  const animDelay = `${((index * 0.37) % 2.6).toFixed(2)}s`

  return (
    <div
      className="absolute"
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        transform: "translate(-50%, -50%)",
        width: sizeVar,
        height: sizeVar,
        zIndex: isLeader ? 3 : 2,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          animation: `${animName} ${animDuration} ease-in-out infinite`,
          animationDelay: animDelay,
        }}
      >
        <div
          title={`${member.name} — ${member.role}`}
          aria-label={`${member.name}, ${member.role}`}
          className="rounded-full flex items-center justify-center w-full h-full transition-transform duration-200 ease-out hover:scale-[1.08] cursor-default"
          style={{
            background: "#fff",
            boxShadow: `0 0 0 3px ${dept.accent}, 0 4px 14px rgba(11,19,43,0.12), 0 1px 3px rgba(11,19,43,0.08)`,
          }}
        >
          <span
            aria-hidden
            style={{
              fontSize: `calc(${sizeVar} * 0.55)`,
              lineHeight: 1,
            }}
          >
            {member.emoji}
          </span>
        </div>
      </div>
    </div>
  )
}

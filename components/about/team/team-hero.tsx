import Link from "next/link"
import {
  Sparkles,
  MapPin,
  Users,
  ShieldCheck,
  Home,
} from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  DEPARTMENTS,
  TEAM_MEMBERS,
  type Department,
  type TeamMember,
} from "@/lib/team-data"

const proofPills = [
  { Icon: Users, label: "10 senior specialists" },
  { Icon: MapPin, label: "Irvine, CA HQ" },
  { Icon: ShieldCheck, label: "American team" },
  { Icon: Home, label: "In-office, in-house" },
]

export function TeamHero() {
  return (
    <section
      aria-labelledby="team-hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.14) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.10) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.22) 0%, rgba(22,119,255,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-6%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.18) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[var(--accent)]">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/about" className="hover:text-[var(--accent)]">
                About
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Meet The Team
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-14 items-center">
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(22,119,255,0.35)",
                color: "var(--accent)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Meet the team · Irvine, CA · In-house only
            </span>

            <h1
              id="team-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              The people behind the{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, rgba(116,211,255,0.45) 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                wins
              </span>
              .
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              Ten specialists. One office in Irvine. Zero outsourcing. Every Max
              Market Pros engagement is run end-to-end by the people on this
              page &mdash;{" "}
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                the same people who answer the phone when you call
              </span>
              .
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="/contact/schedule">
                Book a strategy call
              </PrimaryButton>
              <SecondaryButton asLink href="/about/careers">
                We&rsquo;re hiring
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {proofPills.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: "var(--accent)",
                      color: "#fff",
                    }}
                  >
                    <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          <div
            className="relative w-full"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <BubbleCluster />
          </div>
        </div>
      </div>
    </section>
  )
}

const departmentByIdMap: Record<Department, (typeof DEPARTMENTS)[number]> =
  DEPARTMENTS.reduce(
    (acc, d) => {
      acc[d.id] = d
      return acc
    },
    {} as Record<Department, (typeof DEPARTMENTS)[number]>
  )

// Hand-tuned positions (% center within the square wrapper).
// Goal: leaders feel central + weighty; the 8 specialists distribute
// evenly around them. All positions sit roughly inside the inscribed circle.
const BUBBLE_POSITIONS: Record<string, { top: number; left: number }> = {
  "joseph-stirling": { top: 38, left: 40 },
  "lawrence-welsh": { top: 60, left: 62 },
  "lucas-herman": { top: 22, left: 24 },
  "brandon-lopez": { top: 12, left: 50 },
  "mike-stirling": { top: 24, left: 78 },
  "will-cruttenden": { top: 75, left: 80 },
  "hector-camacho": { top: 76, left: 22 },
  "muzammil-ibrahim": { top: 50, left: 12 },
  "myles-mendez": { top: 50, left: 88 },
  "moustafa-ramzy": { top: 86, left: 50 },
}

function BubbleCluster() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      {/* Square stage */}
      <div className="relative w-full aspect-square">
        {/* Containing circle */}
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

        {/* Inner blue aura */}
        <div
          aria-hidden
          className="absolute inset-[12%] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, transparent 65%)",
          }}
        />

        {/* Bubbles */}
        {TEAM_MEMBERS.map((member, i) => (
          <Bubble key={member.slug} member={member} index={i} />
        ))}
      </div>

      {/* Editorial caption */}
      <div className="mt-7 flex items-center gap-3">
        <span
          aria-hidden
          className="h-px flex-1"
          style={{ background: "var(--border-color)" }}
        />
        <span
          className="text-[10px] sm:text-[10.5px] font-bold uppercase whitespace-nowrap"
          style={{ color: "var(--muted)", letterSpacing: "0.22em" }}
        >
          The MMP Team &middot; Irvine, CA &middot; Est. 2020
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

  // Sizes scale with the container width via clamp so they remain
  // proportional on smaller breakpoints.
  const sizeVar = isLeader
    ? "clamp(92px, 22%, 120px)"
    : "clamp(60px, 14.5%, 80px)"

  const animName = isLeader ? "floatBubbleLg" : "floatBubble"
  const animDuration = isLeader ? "5.6s" : "4.5s"
  // Stagger so bubbles bob out of sync — looks organic.
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

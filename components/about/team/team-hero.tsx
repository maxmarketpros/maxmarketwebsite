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
  getInitials,
  type Department,
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

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
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
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <TeamAvatarCluster />
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

function TeamAvatarCluster() {
  // 3x3 cluster of the first 9 members + an "All 10" tile in a corner overlap.
  // Varied rotation/size gives the magazine feel without breaking the grid.
  const ROTATIONS = [-3, 2, -2, 3, -1, 4, -2, 3, -3]
  const tiles = TEAM_MEMBERS.slice(0, 9)

  return (
    <div className="relative mx-auto w-full max-w-[480px] aspect-square">
      {/* Backing panel */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius: "var(--radius-xl)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(235,244,255,0.85) 100%)",
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow:
            "0 4px 24px rgba(11,19,43,0.08), 0 24px 60px rgba(11,19,43,0.10)",
        }}
      />

      {/* Aura behind cluster */}
      <div
        aria-hidden
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "10%",
          left: "10%",
          right: "10%",
          bottom: "10%",
          background:
            "radial-gradient(circle, rgba(22,119,255,0.20) 0%, transparent 65%)",
        }}
      />

      {/* Avatar grid */}
      <div className="absolute inset-6 grid grid-cols-3 grid-rows-3 gap-3 sm:gap-4 place-items-center">
        {tiles.map((member, i) => {
          const dept = departmentByIdMap[member.department]
          const initials = getInitials(member.name)
          // center tile a touch larger
          const isCenter = i === 4
          const sizeClass = isCenter
            ? "w-[78px] h-[78px] sm:w-[120px] sm:h-[120px]"
            : "w-[60px] h-[60px] sm:w-[96px] sm:h-[96px]"
          return (
            <div
              key={member.slug}
              className={`relative rounded-full overflow-hidden flex items-center justify-center ${sizeClass}`}
              style={{
                background: `linear-gradient(135deg, ${dept.accent} 0%, ${dept.accentSoft} 100%)`,
                border: "3px solid #fff",
                boxShadow:
                  "0 4px 14px rgba(11,19,43,0.18), 0 1px 3px rgba(11,19,43,0.12)",
                transform: `rotate(${ROTATIONS[i]}deg)`,
                zIndex: isCenter ? 10 : 5,
              }}
              aria-label={`${member.name} — ${member.role}`}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 90% at 30% 15%, rgba(255,255,255,0.4) 0%, transparent 55%)",
                }}
              />
              <span
                className="relative font-bold tracking-[-0.04em] leading-none"
                style={{
                  color: "rgba(255,255,255,0.95)",
                  fontSize: isCenter
                    ? "clamp(22px, 3.4vw, 34px)"
                    : "clamp(16px, 2.6vw, 26px)",
                  textShadow: "0 1px 8px rgba(11,19,43,0.25)",
                }}
              >
                {initials}
              </span>
            </div>
          )
        })}
      </div>

      {/* Floating "Team of 10" badge */}
      <div
        className="absolute -bottom-5 -right-3 sm:-right-5 px-4 py-3 rounded-[var(--radius-md)] flex items-center gap-3"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <span
          className="text-[22px] sm:text-[24px] font-extrabold leading-none tracking-[-0.02em]"
          style={{
            background:
              "linear-gradient(135deg, #74D3FF 0%, #1677FF 60%, #0D5FD9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          10
        </span>
        <div className="flex flex-col">
          <span
            className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
            style={{ color: "var(--muted)" }}
          >
            Team
          </span>
          <span
            className="text-[11.5px] font-semibold"
            style={{ color: "var(--ink)" }}
          >
            Specialists in-house
          </span>
        </div>
      </div>

      {/* Floating "Irvine, CA" badge */}
      <div
        className="absolute -top-4 -left-3 sm:-left-5 px-3 py-2.5 rounded-[var(--radius-md)] hidden sm:flex flex-col gap-0.5"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        }}
      >
        <span
          className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--muted)" }}
        >
          Home base
        </span>
        <span
          className="text-[13px] font-bold leading-tight"
          style={{ color: "var(--ink)" }}
        >
          Irvine, CA
          <br />
          Office HQ
        </span>
      </div>
    </div>
  )
}

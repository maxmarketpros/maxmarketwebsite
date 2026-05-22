import { type TeamMember, type DepartmentMeta } from "@/lib/team-data"
import { TeamMemberAvatar } from "./team-member-avatar"

interface TeamMemberCardProps {
  member: TeamMember
  department: DepartmentMeta
  /** Per-department index (0-based) — used for stagger + last-item border suppression. */
  index: number
  /** Whether this is the last entry in the department (suppresses bottom rule). */
  isLast?: boolean
  /** Sequential index across the whole roster (1-based), shown in the gutter as 01–10. */
  globalNumber: number
}

export function TeamMemberCard({
  member,
  department,
  index,
  isLast = false,
  globalNumber,
}: TeamMemberCardProps) {
  const numberLabel = globalNumber.toString().padStart(2, "0")

  return (
    <article
      className="group relative"
      style={{
        animation: `fadeInUp 0.7s ease-out ${0.05 + index * 0.05}s both`,
        borderBottom: isLast ? "none" : "1px solid var(--border-color)",
      }}
    >
      {/* MOBILE LAYOUT — stacked: number+avatar on top, then content */}
      <div className="sm:hidden py-8 flex flex-col items-start gap-5">
        <div className="flex items-center gap-4">
          <span
            className="text-[12px] font-semibold tabular-nums"
            style={{
              color: "var(--muted)",
              letterSpacing: "0.08em",
            }}
          >
            {numberLabel}
          </span>
          <TeamMemberAvatar
            member={member}
            department={department}
            size={144}
          />
        </div>

        <div className="w-full min-w-0">
          <h3
            className="text-[24px] font-bold leading-[1.15] tracking-[0.005em]"
            style={{ color: "var(--ink)" }}
          >
            {member.name}
          </h3>
          <p
            className="mt-1.5 text-[15px] italic leading-[1.35]"
            style={{ color: department.accent, fontWeight: 500 }}
          >
            {member.role}
          </p>
          <p
            className="mt-4 text-[15px] leading-[1.65]"
            style={{ color: "var(--muted)" }}
          >
            {member.bio}
          </p>
          <div className="mt-5">
            <DeptTag department={department} />
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT — grid with number gutter | avatar | content | dept tag */}
      <div className="hidden sm:grid items-start gap-6 py-9 grid-cols-[44px_144px_1fr_auto]">
        {/* Number gutter */}
        <div
          className="text-[12.5px] font-semibold tabular-nums pt-2"
          style={{
            color: "var(--muted)",
            letterSpacing: "0.08em",
          }}
        >
          {numberLabel}
        </div>

        {/* Avatar */}
        <div className="pt-0.5">
          <TeamMemberAvatar member={member} department={department} size={144} />
        </div>

        {/* Content */}
        <div className="min-w-0 pt-1">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3
              className="text-[28px] font-bold leading-[1.1] tracking-[0.005em]"
              style={{ color: "var(--ink)" }}
            >
              {member.name}
            </h3>
            <span
              className="text-[16.5px] italic leading-[1.3]"
              style={{ color: department.accent, fontWeight: 500 }}
            >
              {member.role}
            </span>
          </div>

          <p
            className="mt-4 text-[15.5px] leading-[1.65] max-w-[640px]"
            style={{ color: "var(--muted)" }}
          >
            {member.bio}
          </p>
        </div>

        {/* Dept tag column */}
        <div className="pt-2 flex justify-end">
          <DeptTag department={department} />
        </div>
      </div>
    </article>
  )
}

function DeptTag({ department }: { department: DepartmentMeta }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.13em] whitespace-nowrap"
      style={{ color: "var(--muted)" }}
    >
      <span
        aria-hidden
        className="inline-block"
        style={{
          width: 8,
          height: 8,
          background: department.accent,
        }}
      />
      {department.pill}
    </span>
  )
}

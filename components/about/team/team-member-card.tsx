import { type TeamMember, type DepartmentMeta } from "@/lib/team-data"
import { TeamMemberAvatar } from "./team-member-avatar"

interface TeamMemberCardProps {
  member: TeamMember
  department: DepartmentMeta
  index: number
}

export function TeamMemberCard({ member, department, index }: TeamMemberCardProps) {
  return (
    <article
      className="card-surface card-surface-hover group relative overflow-hidden flex flex-col"
      style={{
        borderRadius: "var(--radius-lg)",
        animation: `fadeInUp 0.7s ease-out ${0.05 + index * 0.05}s both`,
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{ height: "clamp(200px, 22vw, 260px)" }}
      >
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <TeamMemberAvatar member={member} department={department} />
        </div>
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(11,19,43,0.18) 100%)",
          }}
        />
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3
          className="text-[24px] sm:text-[26px] font-extrabold leading-[1.1] tracking-[-0.02em]"
          style={{ color: "var(--ink)" }}
        >
          {member.name}
        </h3>
        <p
          className="mt-1.5 text-[14px] font-bold tracking-[-0.005em]"
          style={{ color: department.accent }}
        >
          {member.role}
        </p>

        <p
          className="mt-4 text-[15px] leading-[1.6] font-medium flex-1"
          style={{ color: "var(--muted)" }}
        >
          {member.bio}
        </p>

        <div className="mt-6">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.08em] border"
            style={{
              background: `${department.accent}14`,
              borderColor: `${department.accent}40`,
              color: department.accent,
            }}
          >
            {department.pill}
          </span>
        </div>
      </div>
    </article>
  )
}

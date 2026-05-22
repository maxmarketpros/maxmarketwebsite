import { type TeamMember, type DepartmentMeta } from "@/lib/team-data"

interface TeamMemberAvatarProps {
  member: TeamMember
  department: DepartmentMeta
  size?: number
}

export function TeamMemberAvatar({
  member,
  department,
  size = 56,
}: TeamMemberAvatarProps) {
  return (
    <span
      aria-hidden
      className="rounded-full inline-flex items-center justify-center shrink-0 transition-shadow"
      style={{
        width: size,
        height: size,
        background: "#fff",
        border: `1px solid var(--border-color)`,
        boxShadow: "0 1px 2px rgba(11,19,43,0.06)",
        // dept-accent inner ring picked up via group-hover from parent
        ["--dept-ring" as string]: department.accent,
      }}
    >
      <span
        style={{
          fontSize: Math.round(size * 0.55),
          lineHeight: 1,
        }}
      >
        {member.emoji}
      </span>
    </span>
  )
}

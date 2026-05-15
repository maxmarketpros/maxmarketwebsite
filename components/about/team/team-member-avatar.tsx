import { type TeamMember, type DepartmentMeta, getInitials } from "@/lib/team-data"

interface TeamMemberAvatarProps {
  member: TeamMember
  department: DepartmentMeta
}

/**
 * Placeholder avatar — gradient block + initials. Swap to next/image when
 * real photos arrive (path convention: /about/team/{slug}.jpg).
 */
export function TeamMemberAvatar({ member, department }: TeamMemberAvatarProps) {
  const initials = getInitials(member.name)

  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${department.accent} 0%, ${department.accentSoft} 100%)`,
      }}
    >
      {/* Soft inner highlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 30% 15%, rgba(255,255,255,0.35) 0%, transparent 55%)",
        }}
      />
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      <span
        className="relative font-bold leading-none tracking-[-0.04em]"
        style={{
          color: "rgba(255,255,255,0.92)",
          fontSize: "clamp(44px, 6vw, 72px)",
          textShadow: "0 2px 16px rgba(11,19,43,0.18)",
        }}
      >
        {initials}
      </span>
    </div>
  )
}

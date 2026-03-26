import { cn } from "@/lib/utils"

interface PillProps {
  children: React.ReactNode
  className?: string
}

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.08em]",
        "rounded-full border",
        className
      )}
      style={{
        background: 'var(--accent-bg)',
        borderColor: 'var(--border-color)',
        color: 'var(--accent)',
      }}
    >
      {children}
    </span>
  )
}

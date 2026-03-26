import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  bullets?: string[]
  className?: string
  wide?: boolean
  children?: React.ReactNode
}

export function FeatureCard({ icon, title, description, bullets, className, wide, children }: FeatureCardProps) {
  return (
    <div
      className={cn("card-surface card-surface-hover flex flex-col overflow-hidden", wide ? '' : '', className)}
    >
      {/* Icon area */}
      <div className="p-7 pb-0 flex items-start">
        <div
          className="w-12 h-12 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
          style={{
            background: 'var(--accent-bg)',
            color: 'var(--accent)',
          }}
        >
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 pt-5 flex-1 flex flex-col">
        <h3
          className="text-[24px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
          style={{ color: 'var(--ink)' }}
        >
          {title}
        </h3>
        <p
          className="mt-3 text-[16px] leading-[1.6]"
          style={{ color: 'var(--muted)' }}
        >
          {description}
        </p>

        {children}

        {bullets && bullets.length > 0 && (
          <>
            <div
              className="my-5 h-px"
              style={{ background: 'var(--border-color)' }}
            />
            <ul className="space-y-3">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px]" style={{ color: 'var(--ink)' }}>
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
                  >
                    <Check className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

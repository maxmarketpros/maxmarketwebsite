import { Pill } from "./pill"

interface SectionHeaderProps {
  pill?: string
  heading: React.ReactNode
  paragraph?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ pill, heading, paragraph, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className ?? ''}`}>
      {pill && (
        <div className={`mb-5 ${centered ? 'flex justify-center' : ''}`}>
          <Pill>{pill}</Pill>
        </div>
      )}
      <h2
        className="text-[40px] sm:text-[46px] lg:text-[52px] font-bold leading-[1.1] tracking-[-0.02em]"
        style={{ color: 'var(--ink)' }}
      >
        {heading}
      </h2>
      {paragraph && (
        <p
          className="mt-5 text-[18px] sm:text-[20px] leading-[1.6] max-w-[640px]"
          style={{
            color: 'var(--muted)',
            margin: centered ? '20px auto 0' : '20px 0 0',
          }}
        >
          {paragraph}
        </p>
      )}
    </div>
  )
}

import { cn } from "@/lib/utils"

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  asLink?: boolean
  href?: string
}

export function SecondaryButton({ children, className, asLink, href, ...props }: SecondaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-200",
    "rounded-[var(--radius-sm)] cursor-pointer",
    "px-6 py-2.5 text-[15px]",
    "hover:translate-y-[-1px]",
    className
  )

  const style: React.CSSProperties = {
    color: 'var(--accent)',
    background: 'transparent',
  }

  if (asLink && href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
        <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    )
  }

  return (
    <button className={classes} style={style} {...props}>
      {children}
      <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  )
}

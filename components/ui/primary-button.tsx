import { cn } from "@/lib/utils"

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: 'default' | 'lg'
  asLink?: boolean
  href?: string
}

export function PrimaryButton({ children, size = 'default', className, asLink, href, ...props }: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-200",
    "rounded-[var(--radius-sm)] text-white cursor-pointer",
    "shadow-[0_1px_2px_rgba(17,35,68,0.1),0_4px_12px_rgba(22,119,255,0.25)]",
    "hover:shadow-[0_2px_4px_rgba(17,35,68,0.12),0_8px_24px_rgba(22,119,255,0.3)]",
    "hover:translate-y-[-1px] active:translate-y-0",
    size === 'lg' ? 'px-8 py-3.5 text-[17px]' : 'px-6 py-2.5 text-[15px]',
    className
  )

  const style = {
    background: 'linear-gradient(180deg, #2B8AFF 0%, var(--accent) 100%)',
  }

  if (asLink && href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} style={style} {...props}>
      {children}
    </button>
  )
}

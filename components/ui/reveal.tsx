"use client"

import type { ElementType, ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"

interface RevealProps {
  children: ReactNode
  /** Delay in seconds before the reveal transition starts. */
  delay?: number
  /** Travel distance in px before settling. Default 24. */
  y?: number
  className?: string
  as?: ElementType
  /** id passed through to the rendered element (for aria-labelledby targets). */
  id?: string
}

/**
 * Scroll-reveal wrapper. Fades + slides its children up when scrolled into view.
 * Reduced-motion users get the content immediately (useInView reports true).
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as: Tag = "div",
  id,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.7s var(--ease-spring) ${delay}s, transform 0.7s var(--ease-spring) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  )
}

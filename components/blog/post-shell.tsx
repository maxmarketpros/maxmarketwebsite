import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PostShellProps {
  breadcrumbs: { label: string; href?: string }[]
  children: React.ReactNode
}

export function PostShell({ breadcrumbs, children }: PostShellProps) {
  return (
    <article>
      <nav
        aria-label="Breadcrumb"
        className="section-container pt-5 sm:pt-7"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px]">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1
            return (
              <li key={idx} className="flex items-center gap-1.5">
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="font-medium hover:underline"
                    style={{ color: "var(--muted)" }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className="font-semibold"
                    style={{ color: isLast ? "var(--ink)" : "var(--muted)" }}
                  >
                    {crumb.label}
                  </span>
                )}
                {!isLast ? (
                  <ChevronRight
                    className="w-3 h-3"
                    style={{ color: "var(--muted)" }}
                  />
                ) : null}
              </li>
            )
          })}
        </ol>
      </nav>
      {children}
    </article>
  )
}

export function PostBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-container">
      <div className="max-w-[760px] mx-auto py-2">{children}</div>
    </div>
  )
}

export function PostSection({
  id,
  pill,
  heading,
  intro,
  children,
  variant = "default",
}: {
  id?: string
  pill?: string
  heading: React.ReactNode
  intro?: React.ReactNode
  children: React.ReactNode
  variant?: "default" | "wide"
}) {
  const maxW = variant === "wide" ? "max-w-[1080px]" : "max-w-[860px]"
  return (
    <section
      id={id}
      className="relative scroll-mt-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container py-10 sm:py-14 lg:py-16">
        <div className={`${maxW} mx-auto`}>
          {pill ? (
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.08em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              {pill}
            </span>
          ) : null}
          <h2
            className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            {heading}
          </h2>
          {intro ? (
            <div
              className="mt-4 text-[16px] sm:text-[17px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              {intro}
            </div>
          ) : null}
          <div className="mt-7 sm:mt-9">{children}</div>
        </div>
      </div>
    </section>
  )
}

export function PostProse({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="space-y-4 text-[16px] sm:text-[17px] leading-[1.7]"
      style={{ color: "var(--muted)" }}
    >
      {children}
    </div>
  )
}

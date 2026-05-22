"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  ScrollText,
  CalendarDays,
  ShieldCheck,
  Mail,
  Phone,
  ArrowRight,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"
import { BUSINESS } from "@/lib/seo"

/* ── Types ───────────────────────────────────────────────────────── */

export type LegalSection = {
  id: string
  title: string
  body: React.ReactNode
}

type LegalShellProps = {
  /** Small eyebrow label, e.g. "Legal" */
  eyebrow: string
  /** Page H1, e.g. "Privacy Policy" */
  title: string
  /** Date string, e.g. "May 13, 2024" */
  lastUpdated: string
  /** Lead paragraph below H1 */
  intro: React.ReactNode
  /** Breadcrumb label for current page */
  crumb: string
  /** Sibling legal page link for the cross-link card */
  sibling: { label: string; href: string; description: string }
  /** Ordered content sections — each becomes a TOC entry and an anchor */
  sections: LegalSection[]
}

/* ── Page ────────────────────────────────────────────────────────── */

export function LegalShell(props: LegalShellProps) {
  return (
    <>
      <LegalHero
        eyebrow={props.eyebrow}
        title={props.title}
        lastUpdated={props.lastUpdated}
        intro={props.intro}
        crumb={props.crumb}
        sections={props.sections}
      />
      <LegalBody sections={props.sections} sibling={props.sibling} />
    </>
  )
}

/* ── Hero ────────────────────────────────────────────────────────── */

function LegalHero({
  eyebrow,
  title,
  lastUpdated,
  intro,
  crumb,
  sections,
}: {
  eyebrow: string
  title: string
  lastUpdated: string
  intro: React.ReactNode
  crumb: string
  sections: LegalSection[]
}) {
  return (
    <section
      aria-labelledby="legal-hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.14) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.10) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] right-[-8%] w-[420px] h-[420px] sm:w-[680px] sm:h-[680px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.20) 0%, rgba(22,119,255,0.05) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-6%] w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.16) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-14 lg:pb-16">
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] font-medium"
          style={{ color: "var(--muted)" }}
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[var(--accent)]">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              {crumb}
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-[820px]" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          <span
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
            style={{
              background: "rgba(255,255,255,0.95)",
              borderColor: "rgba(22,119,255,0.35)",
              color: "var(--accent)",
            }}
          >
            <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.5} />
            {eyebrow}
          </span>

          <h1
            id="legal-hero-heading"
            className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            {title}
          </h1>

          <div
            className="mt-6 text-[17px] sm:text-[19px] leading-[1.6]"
            style={{ color: "var(--muted)" }}
          >
            {intro}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
              style={{
                background: "rgba(255,255,255,0.85)",
                borderColor: "var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <span
                className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                <CalendarDays className="w-3 h-3" strokeWidth={2.5} />
              </span>
              Last updated: {lastUpdated}
            </span>

            <a
              href={`mailto:${BUSINESS.email}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-colors hover:bg-white"
              style={{
                background: "rgba(255,255,255,0.85)",
                borderColor: "var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <Mail className="w-3.5 h-3.5" strokeWidth={2.5} />
              {BUSINESS.email}
            </a>

            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border transition-colors hover:bg-white"
              style={{
                background: "rgba(255,255,255,0.85)",
                borderColor: "var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* Inline mini-TOC for mobile (the sticky sidebar handles desktop) */}
          <details
            className="mt-8 lg:hidden rounded-[var(--radius-md)]"
            style={{ background: "#fff", border: "1px solid var(--border-color)" }}
          >
            <summary
              className="flex items-center justify-between cursor-pointer px-4 py-3 text-[13px] font-semibold"
              style={{ color: "var(--ink)" }}
            >
              <span className="inline-flex items-center gap-2">
                <ScrollText className="w-4 h-4" style={{ color: "var(--accent)" }} strokeWidth={2.4} />
                Jump to a section
              </span>
              <ChevronRight className="w-4 h-4 transition-transform" />
            </summary>
            <ol
              className="px-4 pb-3 pt-1 space-y-2 text-[13.5px] leading-[1.5] border-t"
              style={{ borderColor: "var(--border-color)" }}
            >
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block py-1 hover:underline"
                    style={{ color: "var(--muted)" }}
                  >
                    <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                      {String(i + 1).padStart(2, "0")}.
                    </span>{" "}
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </details>
        </div>
      </div>
    </section>
  )
}

/* ── Body: Sticky TOC + Content ──────────────────────────────────── */

function LegalBody({
  sections,
  sibling,
}: {
  sections: LegalSection[]
  sibling: { label: string; href: string; description: string }
}) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "")

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const handler = (entries: IntersectionObserverEntry[]) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActiveId(visible[0].target.id)
    }
    const io = new IntersectionObserver(handler, {
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0,
    })
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    observers.push(io)
    return () => observers.forEach((o) => o.disconnect())
  }, [sections])

  return (
    <section className="relative" style={{ background: "var(--bg)" }}>
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
          {/* Sticky TOC */}
          <aside className="hidden lg:block sticky top-24 self-start">
            <div
              className="rounded-[var(--radius-lg)] p-5"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow:
                  "0 1px 3px rgba(17,35,68,0.05), 0 8px 24px rgba(17,35,68,0.06)",
              }}
            >
              <p
                className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-3 inline-flex items-center gap-1.5"
                style={{ color: "var(--muted)" }}
              >
                <ScrollText className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} strokeWidth={2.5} />
                On this page
              </p>
              <ol className="space-y-1.5">
                {sections.map((s, i) => {
                  const isActive = activeId === s.id
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex items-baseline gap-2 py-1 text-[13px] leading-[1.45] transition-colors"
                        style={{
                          color: isActive ? "var(--accent)" : "var(--muted)",
                          fontWeight: isActive ? 600 : 500,
                        }}
                      >
                        <span
                          className="text-[10.5px] font-semibold w-5 shrink-0 tabular-nums"
                          style={{
                            color: isActive ? "var(--accent)" : "var(--muted)",
                            opacity: 0.7,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="group-hover:underline">{s.title}</span>
                      </a>
                    </li>
                  )
                })}
              </ol>
            </div>

            <a
              href={sibling.href}
              className="mt-5 block rounded-[var(--radius-lg)] p-5 transition-shadow"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 3px rgba(17,35,68,0.05)",
              }}
            >
              <p
                className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "var(--muted)" }}
              >
                Also see
              </p>
              <p
                className="mt-1 text-[15px] font-bold inline-flex items-center gap-1.5"
                style={{ color: "var(--ink)" }}
              >
                {sibling.label}
                <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} strokeWidth={2.5} />
              </p>
              <p
                className="mt-1.5 text-[13px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                {sibling.description}
              </p>
            </a>
          </aside>

          {/* Content */}
          <div className="min-w-0">
            <article
              className="rounded-[var(--radius-xl)] p-6 sm:p-10 lg:p-12 legal-prose"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow:
                  "0 1px 3px rgba(17,35,68,0.05), 0 8px 32px rgba(17,35,68,0.06)",
              }}
            >
              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  aria-labelledby={`${s.id}-heading`}
                  className="scroll-mt-24"
                >
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: "var(--accent)" }}
                  >
                    Section {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2
                    id={`${s.id}-heading`}
                    className="mt-2 text-[26px] sm:text-[30px] lg:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-balance"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.title}
                  </h2>
                  <div className="mt-5 legal-prose-body">{s.body}</div>
                  {i < sections.length - 1 && (
                    <hr
                      className="my-10"
                      style={{ borderColor: "var(--border-color)" }}
                    />
                  )}
                </section>
              ))}
            </article>

            {/* Mobile-only sibling card */}
            <a
              href={sibling.href}
              className="mt-6 lg:hidden flex items-center justify-between rounded-[var(--radius-lg)] p-5"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
              }}
            >
              <div>
                <p
                  className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "var(--muted)" }}
                >
                  Also see
                </p>
                <p
                  className="mt-1 text-[15px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  {sibling.label}
                </p>
              </div>
              <ArrowRight className="w-4 h-4" style={{ color: "var(--accent)" }} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Building blocks for section bodies ──────────────────────────── */

export function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mt-4 first:mt-0 text-[15.5px] sm:text-[16px] leading-[1.75]"
      style={{ color: "var(--muted)" }}
    >
      {children}
    </p>
  )
}

export function LegalH3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mt-8 text-[18px] sm:text-[20px] font-bold leading-tight tracking-[-0.01em]"
      style={{ color: "var(--ink)" }}
    >
      {children}
    </h3>
  )
}

export function LegalH4({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className="mt-6 text-[15px] sm:text-[16px] font-bold leading-tight"
      style={{ color: "var(--ink)" }}
    >
      {children}
    </h4>
  )
}

export function LegalUL({ children }: { children: React.ReactNode }) {
  return (
    <ul
      className="mt-4 space-y-2.5 text-[15.5px] sm:text-[16px] leading-[1.7] pl-1"
      style={{ color: "var(--muted)" }}
    >
      {children}
    </ul>
  )
}

export function LegalLI({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-5">
      <span
        aria-hidden
        className="absolute left-0 top-[0.65em] w-1.5 h-1.5 rounded-full"
        style={{ background: "var(--accent)" }}
      />
      {children}
    </li>
  )
}

export function LegalStrong({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{children}</strong>
}

export function LegalLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:underline break-words"
        style={{ color: "var(--accent)" }}
      >
        {children}
      </a>
    )
  }
  return (
    <Link
      href={href}
      className="font-semibold hover:underline"
      style={{ color: "var(--accent)" }}
    >
      {children}
    </Link>
  )
}

/** Definition row — "Term — meaning" */
export function LegalDef({
  term,
  children,
}: {
  term: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div
      className="mt-3 first:mt-0 rounded-[var(--radius-sm)] p-4 sm:p-5"
      style={{
        background: "#F7FAFC",
        border: "1px solid var(--border-color)",
      }}
    >
      <p className="text-[14px] sm:text-[15px] font-bold" style={{ color: "var(--ink)" }}>
        {term}
      </p>
      <p
        className="mt-1.5 text-[14.5px] sm:text-[15.5px] leading-[1.65]"
        style={{ color: "var(--muted)" }}
      >
        {children}
      </p>
    </div>
  )
}

/** Yes/No "Collected" pill for the CCPA table */
export function LegalChip({
  collected,
}: {
  collected: boolean
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11.5px] font-bold uppercase tracking-[0.06em]"
      style={{
        background: collected ? "rgba(22,119,255,0.10)" : "rgba(74,90,117,0.10)",
        color: collected ? "var(--accent)" : "var(--muted)",
        border: `1px solid ${collected ? "rgba(22,119,255,0.30)" : "var(--border-color)"}`,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: collected ? "var(--accent)" : "var(--muted)" }}
      />
      {collected ? "Collected" : "Not collected"}
    </span>
  )
}

/** CCPA-style category row */
export function LegalCategory({
  letter,
  name,
  examples,
  collected,
}: {
  letter: string
  name: React.ReactNode
  examples: React.ReactNode
  collected: boolean
}) {
  return (
    <div
      className="mt-3 first:mt-0 rounded-[var(--radius-md)] p-4 sm:p-5"
      style={{
        background: "#fff",
        border: "1px solid var(--border-color)",
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <span
            className="shrink-0 w-8 h-8 rounded-full inline-flex items-center justify-center text-[13px] font-bold"
            style={{
              background:
                "linear-gradient(135deg, rgba(116,211,255,0.25) 0%, rgba(22,119,255,0.18) 100%)",
              color: "var(--accent)",
              border: "1px solid rgba(22,119,255,0.25)",
            }}
          >
            {letter}
          </span>
          <p className="text-[15px] sm:text-[16px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
            {name}
          </p>
        </div>
        <LegalChip collected={collected} />
      </div>
      <p
        className="mt-3 text-[14.5px] leading-[1.65]"
        style={{ color: "var(--muted)" }}
      >
        <span style={{ color: "var(--ink)", fontWeight: 600 }}>Examples: </span>
        {examples}
      </p>
    </div>
  )
}

/** Subtle inline callout / contact box */
export function LegalCallout({
  title,
  children,
}: {
  title: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div
      className="mt-5 rounded-[var(--radius-md)] p-5"
      style={{
        background:
          "linear-gradient(135deg, rgba(22,119,255,0.06) 0%, rgba(116,211,255,0.06) 100%)",
        border: "1px solid rgba(22,119,255,0.20)",
      }}
    >
      <p
        className="text-[11px] font-bold uppercase tracking-[0.12em]"
        style={{ color: "var(--accent)" }}
      >
        {title}
      </p>
      <div
        className="mt-2 text-[15px] sm:text-[16px] leading-[1.7]"
        style={{ color: "var(--ink)" }}
      >
        {children}
      </div>
    </div>
  )
}

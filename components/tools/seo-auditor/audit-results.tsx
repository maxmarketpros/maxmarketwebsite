"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { AuditResult, Issue } from "@/lib/seo-audit/types"
import { SiteSnapshot } from "./site-snapshot"
import { CategorySummary } from "./category-summary"
import { HeadingOutlineCard } from "./heading-outline-card"
import { TechStackCard } from "./tech-stack-card"
import { ReadabilityCard } from "./readability-card"
import { IssueRow } from "./issue-row"
import { AuditCtaInline } from "./audit-cta-inline"

interface AuditResultsProps {
  result: AuditResult
}

function groupBySeverity(issues: Issue[]) {
  return {
    critical: issues.filter((i) => i.severity === "critical"),
    warning: issues.filter((i) => i.severity === "warning"),
    notice: issues.filter((i) => i.severity === "notice"),
    passed: issues.filter((i) => i.severity === "passed"),
  }
}

export function AuditResults({ result }: AuditResultsProps) {
  const [showPassed, setShowPassed] = useState(false)
  const grouped = groupBySeverity(result.issues)

  return (
    <div className="space-y-6 sm:space-y-8">
      <SiteSnapshot snapshot={result.snapshot} />

      <CategorySummary
        overallScore={result.overallScore}
        categoryScores={result.categoryScores}
      />

      <AuditCtaInline
        eyebrow="Stuck on what to fix first?"
        title="Get a strategist to walk through your results"
        description="Free 20-minute call. No sales pitch. We'll prioritize the fixes that move the needle for your business."
        ctaLabel="Book a free call"
        href="/contact/schedule"
      />

      {grouped.critical.length > 0 && (
        <IssueGroup
          title="Critical issues"
          subtitle="Fix these first — they're hurting your rankings or user experience."
          tone="critical"
          issues={grouped.critical}
        />
      )}

      {grouped.warning.length > 0 && (
        <IssueGroup
          title="Warnings"
          subtitle="Important opportunities to improve your SEO and performance."
          tone="warning"
          issues={grouped.warning}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <HeadingOutlineCard outline={result.headingOutline} />
        <TechStackCard tech={result.techStack} />
      </div>

      <ReadabilityCard report={result.readability} />

      <AuditCtaInline
        eyebrow="Need it done for you?"
        title="Our SEO team fixes all of this every day"
        description="From technical SEO to content strategy to Google Business Profile optimization — we handle the work so you can run your business."
        ctaLabel="See SEO services"
        href="/services/seo"
      />

      {grouped.notice.length > 0 && (
        <IssueGroup
          title="Notices"
          subtitle="Smaller items worth addressing once the big stuff is handled."
          tone="notice"
          issues={grouped.notice}
        />
      )}

      {grouped.passed.length > 0 && (
        <div>
          <button
            type="button"
            onClick={() => setShowPassed((v) => !v)}
            className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-[var(--bg)]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              borderRadius: showPassed
                ? "var(--radius-lg) var(--radius-lg) 0 0"
                : "var(--radius-lg)",
            }}
          >
            <div>
              <h3
                className="text-[18px] sm:text-[20px] font-bold tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                Passed checks ({grouped.passed.length})
              </h3>
              <p
                className="mt-0.5 text-[13.5px]"
                style={{ color: "var(--muted)" }}
              >
                Things your site is already doing right.
              </p>
            </div>
            <ChevronDown
              className="w-5 h-5 transition-transform shrink-0"
              style={{
                color: "var(--muted)",
                transform: showPassed ? "rotate(180deg)" : "rotate(0)",
              }}
              strokeWidth={2}
            />
          </button>
          {showPassed && (
            <div
              className="space-y-2.5 p-4 sm:p-5"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border-color)",
                borderTop: "none",
                borderRadius: "0 0 var(--radius-lg) var(--radius-lg)",
              }}
            >
              {grouped.passed.map((issue) => (
                <IssueRow key={issue.id} issue={issue} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function IssueGroup({
  title,
  subtitle,
  tone,
  issues,
}: {
  title: string
  subtitle: string
  tone: "critical" | "warning" | "notice"
  issues: Issue[]
}) {
  const accent =
    tone === "critical"
      ? "#B91C1C"
      : tone === "warning"
        ? "#B45309"
        : "var(--accent)"
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-4">
        <div>
          <h3
            className="text-[20px] sm:text-[22px] font-bold tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            {title}{" "}
            <span style={{ color: accent }}>({issues.length})</span>
          </h3>
          <p
            className="mt-0.5 text-[13.5px] sm:text-[14px]"
            style={{ color: "var(--muted)" }}
          >
            {subtitle}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        {issues.map((issue) => (
          <IssueRow key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  )
}

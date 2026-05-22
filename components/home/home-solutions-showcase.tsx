"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Bot,
  Calendar,
  LineChart,
  Mail,
  UserPlus,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { PipelineMockup } from "@/components/solutions/lead-generation/lead-gen-hero"
import { HeroDashboard } from "@/components/solutions/analytics/analytics-hero"
import { ChatTranscriptMockup } from "@/components/solutions/ai-agents/ai-agents-hero"
import { BookingMockup } from "@/components/solutions/calendar/calendar-hero"
import { InboxSequenceMockup } from "@/components/solutions/email-marketing/email-marketing-hero"
import { WorkflowMockup } from "@/components/solutions/task-management/task-management-hero"

type Solution = {
  slug: string
  name: string
  accent: string
  Icon: LucideIcon
  Mockup: React.ComponentType
  description: string
}

const solutions: Solution[] = [
  {
    slug: "lead-generation",
    name: "Lead Generation",
    accent: "#1677FF",
    Icon: UserPlus,
    Mockup: PipelineMockup,
    description: "Unify every call, text, form, and Facebook lead into one auto-tagged inbox.",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    accent: "#8B5CF6",
    Icon: Bot,
    Mockup: ChatTranscriptMockup,
    description: "24/7 AI receptionist that answers chat, SMS, and DMs, then books appointments.",
  },
  {
    slug: "analytics",
    name: "Analytics & Attribution",
    accent: "#0EA5E9",
    Icon: LineChart,
    Mockup: HeroDashboard,
    description: "GA4, call tracking, and dashboards that trace every lead back to source.",
  },
  {
    slug: "calendar",
    name: "Scheduling & Booking",
    accent: "#22C55E",
    Icon: Calendar,
    Mockup: BookingMockup,
    description: "Clients book themselves 24/7 with deposits, reminders, and calendar sync.",
  },
  {
    slug: "email-marketing",
    name: "Email & SMS",
    accent: "#F59E0B",
    Icon: Mail,
    Mockup: InboxSequenceMockup,
    description: "Drag-and-drop campaigns, drip sequences, segmentation wired to your CRM.",
  },
  {
    slug: "task-management",
    name: "Workflows",
    accent: "#EF4444",
    Icon: Zap,
    Mockup: WorkflowMockup,
    description: "Trigger-based routing, follow-ups, and payment chasing. Fully automated.",
  },
]

export function HomeSolutionsShowcase() {
  const [activeSlug, setActiveSlug] = useState(solutions[0].slug)
  const active = solutions.find((s) => s.slug === activeSlug) ?? solutions[0]
  const { Mockup } = active

  return (
    <section
      aria-labelledby="solutions-showcase-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-10%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The Software Suite"
          heading={
            <span id="solutions-showcase-heading">
              All your software in{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">one place</span>.
              </span>
            </span>
          }
          paragraph="Ten integrated solutions sharing one CRM, one analytics layer, one brand. Stop stitching together six SaaS tools that don't talk to each other."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left: vertical tab rail */}
          <div className="flex flex-col gap-2">
            {solutions.map((s) => {
              const on = s.slug === activeSlug
              const { Icon } = s
              return (
                <button
                  key={s.slug}
                  onClick={() => setActiveSlug(s.slug)}
                  aria-pressed={on}
                  className="group relative text-left rounded-[var(--radius-md)] border p-4 transition-all"
                  style={
                    on
                      ? {
                          background: `${s.accent}0F`,
                          borderColor: `${s.accent}55`,
                          boxShadow: `0 2px 8px ${s.accent}1F`,
                        }
                      : {
                          background: "var(--surface)",
                          borderColor: "var(--border-color)",
                        }
                  }
                >
                  {on && (
                    <span
                      aria-hidden
                      className="absolute top-0 bottom-0 left-0 w-1 rounded-l-[var(--radius-md)]"
                      style={{ background: s.accent }}
                    />
                  )}

                  <div className="flex items-start gap-3">
                    <span
                      className="w-10 h-10 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        background: on ? `${s.accent}1F` : "var(--bg)",
                        color: on ? s.accent : "var(--muted)",
                      }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2.25} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="text-[14.5px] font-bold leading-tight"
                          style={{ color: on ? s.accent : "var(--ink)" }}
                        >
                          {s.name}
                        </span>
                        <ArrowRight
                          className="w-3.5 h-3.5 transition-all"
                          style={{
                            color: s.accent,
                            opacity: on ? 1 : 0,
                            transform: on ? "translateX(0)" : "translateX(-4px)",
                          }}
                          strokeWidth={2.5}
                        />
                      </div>
                      <div
                        className="mt-1 text-[12.5px] leading-[1.45]"
                        style={{ color: "var(--muted)" }}
                      >
                        {s.description}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}

            <Link
              href="/solutions"
              className="group mt-2 inline-flex items-center justify-center gap-1.5 text-[13.5px] font-semibold py-3 rounded-[var(--radius-md)] border transition-colors"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--accent)",
              }}
            >
              Explore the full suite
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          </div>

          {/* Right: animated mockup */}
          <div className="relative">
            <div
              key={activeSlug}
              className="card-surface relative overflow-hidden h-full min-h-[480px] flex items-center justify-center px-4 sm:px-8 py-8 sm:py-10"
              style={{ animation: "fadeInUp 0.5s ease-out both" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 transition-all"
                style={{
                  background: `radial-gradient(ellipse 70% 60% at 50% 30%, ${active.accent}14 0%, transparent 70%)`,
                }}
              />
              <div className="relative w-full max-w-[480px]">
                <Mockup />
              </div>

              {/* Per-solution inline CTA */}
              <Link
                href={`/solutions/${active.slug}`}
                className="absolute bottom-4 right-4 group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12.5px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  background: active.accent,
                  boxShadow: `0 4px 14px ${active.accent}55`,
                }}
              >
                Learn more about {active.name}
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

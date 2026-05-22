"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Star, Sparkles, Zap, Clock, ArrowRight, Bell, MessageSquare, UserRound } from "lucide-react"

const trustItems = [
  { label: "50+ pre-built triggers" },
  { label: "6,000+ app integrations" },
  { label: "No-code workflow builder" },
]

export function TaskManagementHero() {
  return (
    <section aria-labelledby="task-mgmt-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] left-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[460px] h-[460px] sm:w-[780px] sm:h-[780px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.16) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div className="max-w-[620px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <nav aria-label="Breadcrumb" className="mb-6 text-[13px] font-medium" style={{ color: "var(--muted)" }}>
              <ol className="flex items-center gap-1.5">
                <li><a href="/" className="hover:text-[var(--accent)]">Home</a></li>
                <li aria-hidden>/</li>
                <li><a href="/solutions" className="hover:text-[var(--accent)]">Solutions</a></li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>Task Management</li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Workflow Automation
            </Pill>

            <h1 id="task-mgmt-hero-heading" className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance" style={{ color: "var(--ink)" }}>
              Stop doing busywork. Start running on{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">autopilot</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]" style={{ color: "var(--muted)" }}>
              Build trigger-based workflows that handle the 10,000 small things your team does every month — routing leads, sending follow-ups, assigning tasks, and chasing payments. All without writing a single line of code.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a workflow audit
              </PrimaryButton>
              <SecondaryButton asLink href="#task-mgmt-features">
                See the features
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Star className="w-4 h-4" style={{ color: "#8B5CF6" }} fill="currentColor" strokeWidth={0} />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}>
            <WorkflowMockup />

            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full opacity-60" style={{ background: "#8B5CF6", animation: "subtlePulse 2s ease-in-out infinite" }} />
                <span className="relative w-2 h-2 rounded-full" style={{ background: "#8B5CF6" }} />
              </span>
              Workflow live
            </div>

            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(139,92,246,0.32)]"
              style={{ background: "#8B5CF6" }}
            >
              <Clock className="w-3.5 h-3.5" strokeWidth={2.75} />
              6 hrs saved/week
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type WorkflowNode = {
  kind: "trigger" | "action" | "delay"
  title: string
  caption: string
  color: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}

const workflowNodes: WorkflowNode[] = [
  { kind: "trigger", title: "Trigger", caption: "New lead captured", color: "#EF4444", icon: Bell },
  { kind: "action", title: "Action", caption: "Send welcome SMS", color: "#1677FF", icon: MessageSquare },
  { kind: "delay", title: "Delay", caption: "Wait 1 day", color: "#F59E0B", icon: Clock },
  { kind: "action", title: "Action", caption: "Add to email sequence", color: "#22C55E", icon: Zap },
  { kind: "action", title: "Action", caption: "Assign to rep", color: "#14B8A6", icon: UserRound },
]

export function WorkflowMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-4 sm:p-5"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 20%, rgba(139,92,246,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border-color)" }}>
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-[var(--radius-xs)] flex items-center justify-center"
              style={{ background: "rgba(139,92,246,0.14)", color: "#8B5CF6" }}
            >
              <Zap className="w-3.5 h-3.5" strokeWidth={2.5} fill="currentColor" />
            </div>
            <div>
              <div className="text-[13px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                New Lead · Welcome Flow
              </div>
              <div className="text-[11px]" style={{ color: "var(--muted)" }}>
                5 nodes · running 247 times/mo
              </div>
            </div>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-semibold"
            style={{ background: "#22C55E14", color: "#22C55E" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E", animation: "subtlePulse 2s ease-in-out infinite" }} />
            Active
          </div>
        </div>

        {/* Node chain — vertical flow */}
        <div className="mt-3 space-y-1">
          {workflowNodes.map((n, i) => (
            <div key={i}>
              <NodeCard node={n} />
              {i < workflowNodes.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <div
                    className="w-[2px] h-3"
                    style={{
                      background: "linear-gradient(180deg, var(--border-color) 0%, var(--accent) 100%)",
                      opacity: 0.5,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer stats */}
        <div
          className="mt-3 p-2.5 rounded-[var(--radius-md)] border flex items-center gap-3"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          <div className="flex-1">
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.06em]" style={{ color: "var(--muted)" }}>
              This month
            </div>
            <div className="text-[12.5px] font-bold mt-0.5" style={{ color: "var(--ink)" }}>
              247 executions · 0 failures
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10.5px] font-bold" style={{ color: "#22C55E" }}>
            <ArrowRight className="w-3 h-3 rotate-[-45deg]" strokeWidth={2.75} />
            +12%
          </div>
        </div>
      </div>
    </div>
  )
}

function NodeCard({ node }: { node: WorkflowNode }) {
  const Icon = node.icon
  const isDelay = node.kind === "delay"
  return (
    <div
      className="flex items-center gap-2.5 rounded-[var(--radius-sm)] border p-2.5"
      style={{
        background: isDelay ? `${node.color}0A` : "var(--surface)",
        borderColor: isDelay ? `${node.color}44` : "var(--border-color)",
        boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
      }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
        style={{ background: `${node.color}1F`, color: node.color }}
      >
        <Icon className="w-4 h-4" strokeWidth={2.25} />
      </div>
      <div className="min-w-0 flex-1">
        <div
          className="text-[9.5px] font-bold uppercase tracking-[0.1em]"
          style={{ color: node.color }}
        >
          {node.title}
        </div>
        <div className="text-[12.5px] font-semibold leading-tight mt-0.5" style={{ color: "var(--ink)" }}>
          {node.caption}
        </div>
      </div>
      <div
        className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full shrink-0"
        style={{ background: "var(--bg)", border: "1px solid var(--border-color)", color: "var(--muted)" }}
      >
        {node.kind === "trigger" ? "When" : node.kind === "delay" ? "Wait" : "Do"}
      </div>
    </div>
  )
}

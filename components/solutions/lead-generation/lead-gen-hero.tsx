"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Star,
  Sparkles,
  Phone,
  Mail,
  MessageSquare,
  FileText,
  Facebook,
  Zap,
  Plus,
  TrendingUp,
  Flame,
  Clock,
} from "lucide-react"

const trustItems = [
  { label: "Built for service businesses" },
  { label: "98% client retention" },
  { label: "4.9★ on Google" },
]

export function LeadGenHero() {
  return (
    <section
      aria-labelledby="lead-gen-hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] left-[-8%] w-[480px] h-[480px] sm:w-[780px] sm:h-[780px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.14) 0%, rgba(34,197,94,0.04) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.05) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[30%] right-[8%] w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.14) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div
            className="max-w-[620px]"
            style={{ animation: "fadeInUp 0.8s ease-out both" }}
          >
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-[13px] font-medium"
              style={{ color: "var(--muted)" }}
            >
              <ol className="flex items-center gap-1.5">
                <li>
                  <a href="/" className="hover:text-[var(--accent)]">
                    Home
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <a href="/solutions" className="hover:text-[var(--accent)]">
                    Solutions
                  </a>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>
                  Lead Generation
                </li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              Lead Generation & Management
            </Pill>

            <h1
              id="lead-gen-hero-heading"
              className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Capture every lead.{" "}
              <span className="whitespace-nowrap">
                Never <span className="accent-underline">lose</span> a deal.
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]"
              style={{ color: "var(--muted)" }}
            >
              Unify every phone call, text, web form, and Facebook lead into one
              inbox — auto-tagged, auto-assigned, and auto-nurtured. A complete
              lead-management system built for service businesses that can't
              afford to let a single inquiry slip through.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a free lead-flow audit
              </PrimaryButton>
              <SecondaryButton asLink href="#lead-gen-features">
                See how it works
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-2 text-[14px] font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: "var(--accent)" }}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative"
            style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}
          >
            <PipelineMockup />

            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--ink)",
              }}
            >
              <span className="relative flex w-2 h-2">
                <span
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{
                    background: "#22C55E",
                    animation: "subtlePulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  className="relative w-2 h-2 rounded-full"
                  style={{ background: "#22C55E" }}
                />
              </span>
              +3 new leads
            </div>

            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(22,119,255,0.32)]"
              style={{ background: "#1677FF" }}
            >
              <Zap className="w-3.5 h-3.5" strokeWidth={2.75} fill="currentColor" />
              Auto-routed in 4 sec
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type Lead = {
  initials: string
  name: string
  service: string
  value: string
  source: "call" | "form" | "text" | "email" | "facebook"
  hot?: boolean
}

type Column = {
  title: string
  count: number
  accent: string
  leads: Lead[]
}

const columns: Column[] = [
  {
    title: "New",
    count: 3,
    accent: "#22C55E",
    leads: [
      {
        initials: "MR",
        name: "Maria R.",
        service: "AC repair — same day",
        value: "$850",
        source: "call",
        hot: true,
      },
      {
        initials: "JD",
        name: "Jordan D.",
        service: "Fence replacement",
        value: "$4.2K",
        source: "form",
      },
    ],
  },
  {
    title: "Contacted",
    count: 2,
    accent: "#1677FF",
    leads: [
      {
        initials: "SK",
        name: "Sarah K.",
        service: "Roof inspection",
        value: "$1.2K",
        source: "text",
      },
    ],
  },
  {
    title: "Quoted",
    count: 2,
    accent: "#F59E0B",
    leads: [
      {
        initials: "TB",
        name: "Terry B.",
        service: "Kitchen remodel",
        value: "$18K",
        source: "facebook",
        hot: true,
      },
    ],
  },
  {
    title: "Won",
    count: 1,
    accent: "#8B5CF6",
    leads: [
      {
        initials: "AL",
        name: "Amy L.",
        service: "Water-heater install",
        value: "$2.4K",
        source: "email",
      },
    ],
  },
]

const sourceIconMap: Record<
  Lead["source"],
  { Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; color: string; label: string }
> = {
  call: { Icon: Phone, color: "#10B981", label: "Call" },
  form: { Icon: FileText, color: "#1677FF", label: "Form" },
  text: { Icon: MessageSquare, color: "#14B8A6", label: "SMS" },
  email: { Icon: Mail, color: "#F59E0B", label: "Email" },
  facebook: { Icon: Facebook, color: "#1877F2", label: "FB Ad" },
}

export function PipelineMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-4 sm:p-5"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 20%, rgba(34,197,94,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between px-1 pb-3">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-[var(--radius-xs)] flex items-center justify-center"
              style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
            >
              <Zap className="w-3.5 h-3.5" strokeWidth={2.5} />
            </div>
            <div>
              <div
                className="text-[13px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                Lead Pipeline
              </div>
              <div
                className="text-[11px]"
                style={{ color: "var(--muted)" }}
              >
                Live · 8 active leads
              </div>
            </div>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-semibold"
            style={{ background: "#22C55E14", color: "#22C55E" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#22C55E",
                animation: "subtlePulse 2s ease-in-out infinite",
              }}
            />
            Live
          </div>
        </div>

        {/* Mobile: vertical lead inbox */}
        <div className="sm:hidden">
          <MobileLeadInbox />
        </div>

        {/* Tablet+: full kanban */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-2.5 mt-1">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col min-w-0">
              <div
                className="flex items-center justify-between px-2 py-1.5 rounded-t-[var(--radius-sm)] border-b-2"
                style={{
                  background: `${col.accent}0D`,
                  borderColor: col.accent,
                }}
              >
                <span
                  className="text-[10.5px] font-bold uppercase tracking-[0.06em] truncate"
                  style={{ color: col.accent }}
                >
                  {col.title}
                </span>
                <span
                  className="text-[10px] font-bold shrink-0 w-4 h-4 flex items-center justify-center rounded-full"
                  style={{ background: col.accent, color: "#fff" }}
                >
                  {col.count}
                </span>
              </div>
              <div className="mt-1.5 space-y-1.5">
                {col.leads.map((l) => (
                  <LeadCard key={l.name} lead={l} accent={col.accent} />
                ))}
                <div
                  className="border border-dashed rounded-[var(--radius-xs)] py-1.5 text-center text-[10px] font-semibold"
                  style={{
                    borderColor: "var(--border-color)",
                    color: "var(--muted)",
                  }}
                >
                  <Plus className="w-3 h-3 inline-block -mt-0.5 mr-0.5" strokeWidth={2.5} />
                  Add
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline stats footer */}
        <div
          className="mt-4 pt-4 border-t grid grid-cols-3 gap-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          <PipelineStat
            Icon={TrendingUp}
            color="#22C55E"
            label="Pipeline value"
            value="$26.7K"
            delta="+18%"
          />
          <PipelineStat
            Icon={Flame}
            color="#F97316"
            label="HOT this week"
            value="2"
            delta="leads"
          />
          <PipelineStat
            Icon={Clock}
            color="#1677FF"
            label="Avg response"
            value="2m 14s"
            delta="−63%"
          />
        </div>
      </div>
    </div>
  )
}

function PipelineStat({
  Icon,
  color,
  label,
  value,
  delta,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  color: string
  label: string
  value: string
  delta: string
}) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <div
        className="shrink-0 w-7 h-7 rounded-[var(--radius-xs)] flex items-center justify-center"
        style={{ background: `${color}14`, color }}
      >
        <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
      </div>
      <div className="min-w-0">
        <div
          className="text-[9.5px] font-bold uppercase tracking-[0.08em] truncate"
          style={{ color: "var(--muted)" }}
        >
          {label}
        </div>
        <div className="flex items-baseline gap-1.5">
          <span
            className="text-[13px] font-bold leading-tight tabular-nums"
            style={{ color: "var(--ink)" }}
          >
            {value}
          </span>
          <span
            className="text-[10px] font-semibold"
            style={{ color }}
          >
            {delta}
          </span>
        </div>
      </div>
    </div>
  )
}

function MobileLeadInbox() {
  const inboxLeads = columns.flatMap((col) =>
    col.leads.map((l) => ({ ...l, stage: col.title, stageColor: col.accent }))
  )
  return (
    <ul className="space-y-2">
      {inboxLeads.map((l) => {
        const meta = sourceIconMap[l.source]
        return (
          <li
            key={l.name}
            className="flex items-center gap-2.5 rounded-[var(--radius-sm)] border p-2.5"
            style={{
              background: "var(--surface)",
              borderColor: l.hot ? `${l.stageColor}55` : "var(--border-color)",
              boxShadow: l.hot
                ? `0 0 0 1px ${l.stageColor}22, 0 2px 10px ${l.stageColor}1C`
                : "0 1px 2px rgba(17,35,68,0.04)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
              style={{ background: `${l.stageColor}1F`, color: l.stageColor }}
            >
              {l.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-bold truncate" style={{ color: "var(--ink)" }}>
                  {l.name}
                </span>
                {l.hot && (
                  <span
                    className="text-[8.5px] font-bold px-1 py-[1px] rounded-full shrink-0"
                    style={{ background: "#EF4444", color: "#fff" }}
                  >
                    HOT
                  </span>
                )}
              </div>
              <div className="text-[11px] truncate" style={{ color: "var(--muted)" }}>
                {l.service}
              </div>
            </div>
            <div className="flex flex-col items-end gap-0.5 shrink-0">
              <span className="text-[12px] font-bold" style={{ color: "var(--ink)" }}>
                {l.value}
              </span>
              <div className="flex items-center gap-1">
                <span
                  className="inline-flex items-center gap-0.5 text-[9px] font-semibold px-1 py-[1px] rounded"
                  style={{ background: `${meta.color}14`, color: meta.color }}
                >
                  <meta.Icon className="w-2 h-2" strokeWidth={2.75} />
                  {meta.label}
                </span>
                <span
                  className="inline-flex text-[9px] font-semibold px-1 py-[1px] rounded-full"
                  style={{ background: `${l.stageColor}14`, color: l.stageColor }}
                >
                  {l.stage}
                </span>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function LeadCard({ lead, accent }: { lead: Lead; accent: string }) {
  const meta = sourceIconMap[lead.source]
  return (
    <div
      className="relative rounded-[var(--radius-xs)] border p-1.5 sm:p-2"
      style={{
        background: "var(--surface)",
        borderColor: lead.hot ? `${accent}66` : "var(--border-color)",
        boxShadow: lead.hot
          ? `0 0 0 1px ${accent}33, 0 2px 8px ${accent}22`
          : "0 1px 2px rgba(17,35,68,0.04)",
      }}
    >
      {lead.hot && (
        <span
          className="absolute -top-1 -right-1 text-[7.5px] font-bold px-1 py-[1px] rounded-full shadow-sm"
          style={{ background: "#EF4444", color: "#fff" }}
        >
          HOT
        </span>
      )}
      <div className="flex items-center gap-1.5">
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
          style={{
            background: `${accent}1F`,
            color: accent,
          }}
        >
          {lead.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div
            className="text-[10.5px] font-bold leading-tight truncate"
            style={{ color: "var(--ink)" }}
          >
            {lead.name}
          </div>
          <div
            className="text-[9px] leading-tight truncate"
            style={{ color: "var(--muted)" }}
          >
            {lead.service}
          </div>
        </div>
      </div>
      <div className="mt-1.5 flex items-center justify-between">
        <span
          className="text-[10px] font-bold"
          style={{ color: "var(--ink)" }}
        >
          {lead.value}
        </span>
        <span
          className="inline-flex items-center gap-0.5 text-[8.5px] font-semibold px-1 py-[1px] rounded"
          style={{ background: `${meta.color}14`, color: meta.color }}
        >
          <meta.Icon className="w-2 h-2" strokeWidth={2.75} />
          {meta.label}
        </span>
      </div>
    </div>
  )
}

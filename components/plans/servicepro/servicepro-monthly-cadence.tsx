import Link from "next/link"
import { ArrowRight, Calendar, Star, Bot, MessageCircle, Phone, Inbox, BarChart3 } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { serviceproCadenceRows, type CadenceRow } from "@/lib/servicepro-data"
import { getIcon } from "@/components/plans/hub/icon-map"
import type { LucideIcon } from "lucide-react"

function MiniTile({ item, accent }: { item: { label: string }; accent: string }) {
  return (
    <div
      className="relative aspect-square rounded-[10px] flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${accent}DD 0%, ${accent}66 100%)`,
        boxShadow: `0 2px 8px ${accent}26`,
      }}
    >
      <div className="absolute inset-0 rounded-[10px]" style={{ background: "rgba(0,0,0,0.10)" }} />
      <span className="relative text-[11px] font-bold text-white tracking-[0.04em]">
        {item.label}
      </span>
    </div>
  )
}

function WeeklyTile({ item, accent }: { item: { label: string; sub?: string }; accent: string }) {
  return (
    <div
      className="relative rounded-[12px] p-3.5 flex flex-col items-start text-left"
      style={{
        background: "var(--bg)",
        border: `1px solid ${accent}33`,
      }}
    >
      <div className="flex items-center gap-1.5">
        <Calendar className="w-3.5 h-3.5" strokeWidth={2.3} style={{ color: accent }} />
        <span className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: accent }}>
          {item.label}
        </span>
      </div>
      {item.sub && (
        <div className="mt-1.5 text-[12px] font-semibold leading-[1.3]" style={{ color: "var(--ink)" }}>
          {item.sub}
        </div>
      )}
      <div className="mt-2 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1877F2" }} title="Facebook" />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#E1306C" }} title="Instagram" />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#34A853" }} title="Google" />
      </div>
    </div>
  )
}

const reviewIconMap: Record<string, LucideIcon> = {
  SMS: MessageCircle,
  Email: Inbox,
  AI: Bot,
}

function ReviewTile({ item, accent }: { item: { label: string; sub?: string }; accent: string }) {
  const Icon = reviewIconMap[item.label] ?? Star
  return (
    <div
      className="relative rounded-[12px] p-4 flex items-start gap-3 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${accent}1F 0%, ${accent}08 100%)`,
        border: `1px solid ${accent}40`,
      }}
    >
      <span
        className="shrink-0 w-9 h-9 rounded-[9px] flex items-center justify-center"
        style={{ background: accent, color: "#fff" }}
      >
        <Icon className="w-4 h-4" strokeWidth={2.4} />
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[12.5px] font-bold leading-[1.2]" style={{ color: "var(--ink)" }}>
          {item.label}
        </div>
        {item.sub && (
          <div className="mt-0.5 text-[12px] leading-[1.35]" style={{ color: "var(--muted)" }}>
            {item.sub}
          </div>
        )}
      </div>
      <Star className="absolute -top-2 -right-2 w-12 h-12 opacity-[0.06]" strokeWidth={1.5} style={{ color: accent }} />
    </div>
  )
}

const automationIconMap: Record<string, LucideIcon> = {
  "AI chatbot": Bot,
  "Missed-call SMS": Phone,
  "Chat widget": MessageCircle,
  "Contact Center": Inbox,
}

function AutomationTile({ item, accent }: { item: { label: string; sub?: string }; accent: string }) {
  const Icon = automationIconMap[item.label] ?? Bot
  return (
    <div
      className="relative rounded-[12px] p-4 flex flex-col items-start overflow-hidden"
      style={{
        background: "var(--bg)",
        border: `1px solid ${accent}33`,
        boxShadow: `0 1px 3px ${accent}14`,
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="inline-flex w-8 h-8 rounded-[8px] items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${accent}26 0%, ${accent}0A 100%)`,
            color: accent,
            border: `1px solid ${accent}33`,
          }}
        >
          <Icon className="w-4 h-4" strokeWidth={2.3} />
        </span>
        <span
          className="inline-flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-full"
          style={{ background: `${accent}14`, color: accent }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: accent, animation: "subtlePulse 2s ease-in-out infinite" }}
          />
          Live
        </span>
      </div>
      <div className="mt-2.5 text-[13px] font-bold leading-[1.25]" style={{ color: "var(--ink)" }}>
        {item.label}
      </div>
      {item.sub && (
        <div className="mt-0.5 text-[12px] leading-[1.4]" style={{ color: "var(--muted)" }}>
          {item.sub}
        </div>
      )}
    </div>
  )
}

function WideTile({ item, accent }: { item: { label: string }; accent: string }) {
  return (
    <div
      className="relative rounded-[14px] overflow-hidden p-5 sm:p-6 flex items-center gap-4"
      style={{
        background: `linear-gradient(135deg, ${accent}1F 0%, ${accent}08 100%)`,
        border: `1px solid ${accent}40`,
      }}
    >
      <span
        className="shrink-0 w-12 h-12 rounded-[10px] flex items-center justify-center"
        style={{ background: accent, color: "#fff" }}
      >
        <BarChart3 className="w-5 h-5" strokeWidth={2.3} />
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-bold leading-[1.3]" style={{ color: "var(--ink)" }}>
          1 monthly report
        </div>
        <div className="mt-0.5 text-[13px]" style={{ color: "var(--muted)" }}>
          {item.label}
        </div>
      </div>
    </div>
  )
}

function CadenceRowEl({ row, rowIndex }: { row: CadenceRow; rowIndex: number }) {
  const Icon = getIcon(row.iconName)

  let gridCols = "grid-cols-2 sm:grid-cols-4"
  if (row.tileType === "mini") gridCols = "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12"
  if (row.tileType === "weekly") gridCols = "grid-cols-2 sm:grid-cols-4"
  if (row.tileType === "review") gridCols = "grid-cols-1 sm:grid-cols-3"
  if (row.tileType === "automation") gridCols = "grid-cols-2 sm:grid-cols-4"
  if (row.tileType === "wide") gridCols = "grid-cols-1"

  return (
    <div
      className="relative grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-5 lg:gap-7 items-start"
      style={{ animation: `fadeInUp 0.7s ease-out ${0.05 + rowIndex * 0.08}s both` }}
    >
      <div className="lg:pt-2">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex w-10 h-10 rounded-[10px] items-center justify-center shrink-0"
            style={{
              background: `linear-gradient(135deg, ${row.accent}26 0%, ${row.accent}0A 100%)`,
              color: row.accent,
              border: `1px solid ${row.accent}33`,
            }}
          >
            <Icon className="w-5 h-5" strokeWidth={2.3} />
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold leading-[1.25]" style={{ color: "var(--ink)" }}>
              {row.label}
            </div>
            <div className="mt-0.5 text-[12.5px] font-semibold" style={{ color: row.accent }}>
              {row.count}
            </div>
          </div>
        </div>
        <p className="hidden lg:block mt-2.5 ml-[52px] text-[12.5px] leading-[1.5]" style={{ color: "var(--muted)" }}>
          {row.tileLabel}
        </p>
      </div>

      <div className={`grid ${gridCols} gap-2.5 sm:gap-3`}>
        {row.items.map((item, i) => {
          if (row.tileType === "mini") return <MiniTile key={i} item={item} accent={row.accent} />
          if (row.tileType === "weekly") return <WeeklyTile key={i} item={item} accent={row.accent} />
          if (row.tileType === "review") return <ReviewTile key={i} item={item} accent={row.accent} />
          if (row.tileType === "automation") return <AutomationTile key={i} item={item} accent={row.accent} />
          if (row.tileType === "wide") return <WideTile key={i} item={item} accent={row.accent} />
          return null
        })}
      </div>
    </div>
  )
}

export function ServiceProMonthlyCadence() {
  return (
    <section
      aria-labelledby="servicepro-cadence-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-10%] w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Every month, on autopilot"
          heading={
            <span id="servicepro-cadence-heading">
              Here&rsquo;s what <em>runs</em>{" "}
              <span className="whitespace-nowrap">
                in the <span className="accent-underline">background</span> — every single month.
              </span>
            </span>
          }
          paragraph="ServicePro isn't a one-time setup. It's a working system that produces graphics, posts socials, asks for reviews, replies in chat, and recovers missed calls — every day, on its own."
        />

        <div
          className="mt-12 rounded-[var(--radius-xl)] p-6 sm:p-8 lg:p-10 space-y-8 lg:space-y-10 relative overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 12px 36px var(--shadow-color)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {serviceproCadenceRows.map((row, i) => (
            <CadenceRowEl key={row.slug} row={row} rowIndex={i} />
          ))}
        </div>

        <div
          className="mt-8 rounded-[var(--radius-xl)] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          style={{
            background: "linear-gradient(135deg, rgba(245,158,11,0.07) 0%, rgba(124,58,237,0.06) 100%)",
            border: "1px solid rgba(245,158,11,0.30)",
          }}
        >
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-bold leading-[1.25]" style={{ color: "var(--ink)" }}>
              The work doesn&rsquo;t stop —{" "}
              <span style={{ color: "#D97706" }}>and neither does the lead flow.</span>
            </h3>
            <p className="mt-1 text-[14.5px]" style={{ color: "var(--muted)" }}>
              16 features. One in-house team. Running while you run your business.
            </p>
          </div>
          <Link
            href="/contact/schedule"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold px-5 py-2.5 rounded-[var(--radius-sm)] text-white transition-all hover:translate-y-[-1px] shrink-0"
            style={{
              background: "linear-gradient(180deg, #FBBF24 0%, #F59E0B 60%, #D97706 100%)",
              boxShadow: "0 4px 14px rgba(245,158,11,0.40)",
            }}
          >
            Book a strategy call
            <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  )
}

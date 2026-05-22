import Link from "next/link"
import { ArrowRight, Play, Calendar } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { monthlyDropRows, type MonthlyDropRow } from "@/lib/signature-data"
import { getIcon } from "@/components/plans/hub/icon-map"

function VideoTile({ item, accent, label }: { item: { label: string; sub?: string }; accent: string; label: string }) {
  return (
    <div
      className="relative aspect-video rounded-[12px] overflow-hidden flex items-end p-3"
      style={{
        background: `linear-gradient(135deg, ${accent} 0%, ${accent}80 60%, ${accent}40 100%)`,
        boxShadow: `0 4px 14px ${accent}33`,
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.18)" }} />
      <div
        className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.08em] text-white"
        style={{ background: "rgba(0,0,0,0.45)" }}
      >
        {label}
      </div>
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.94)", color: accent }}
        >
          <Play className="w-5 h-5 fill-current ml-0.5" strokeWidth={2.4} />
        </span>
      </div>
      <div className="relative text-white">
        <div className="text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.9)" }}>
          {item.label}
        </div>
        {item.sub && (
          <div className="text-[12.5px] font-semibold leading-[1.25] mt-0.5">
            {item.sub}
          </div>
        )}
      </div>
    </div>
  )
}

function SquareTile({ item, accent, iconName }: { item: { label: string; sub?: string }; accent: string; iconName: string }) {
  const Icon = getIcon(iconName)
  return (
    <div
      className="relative aspect-square rounded-[12px] overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${accent} 0%, ${accent}AA 50%, ${accent}60 100%)`,
        boxShadow: `0 4px 14px ${accent}33`,
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
      <Icon className="relative w-6 h-6 text-white" strokeWidth={2.2} />
      <div className="relative mt-1 text-[11px] font-bold text-white tracking-[0.06em]">
        {item.label}
      </div>
    </div>
  )
}

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
        <span className="text-[12px] font-bold uppercase tracking-[0.08em]">Blog</span>
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-bold leading-[1.3]" style={{ color: "var(--ink)" }}>
          1 long-form SEO post
        </div>
        <div className="mt-0.5 text-[13px]" style={{ color: "var(--muted)" }}>
          {item.label}
        </div>
      </div>
    </div>
  )
}

function WeeklyTile({ item, accent }: { item: { label: string }; accent: string }) {
  return (
    <div
      className="relative rounded-[12px] p-3 flex flex-col items-center justify-center text-center"
      style={{
        background: "var(--bg)",
        border: `1px solid ${accent}33`,
      }}
    >
      <Calendar className="w-4 h-4" strokeWidth={2.3} style={{ color: accent }} />
      <div className="mt-1.5 text-[11.5px] font-bold uppercase tracking-[0.1em]" style={{ color: accent }}>
        {item.label}
      </div>
      <div className="mt-0.5 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1877F2" }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#E1306C" }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#34A853" }} />
      </div>
    </div>
  )
}

function QuarterlyTile({ item, accent, isActive }: { item: { label: string }; accent: string; isActive?: boolean }) {
  return (
    <div
      className="relative rounded-[12px] p-4 flex flex-col items-center justify-center text-center"
      style={{
        background: isActive
          ? `linear-gradient(135deg, ${accent} 0%, ${accent}CC 100%)`
          : "var(--bg)",
        border: isActive ? `1px solid ${accent}` : `1px dashed ${accent}55`,
        color: isActive ? "#fff" : accent,
        boxShadow: isActive ? `0 4px 14px ${accent}40` : "none",
      }}
    >
      <div className="text-[11px] font-bold uppercase tracking-[0.12em] opacity-80">Press</div>
      <div className="mt-0.5 text-[20px] font-bold tracking-[-0.01em]">{item.label}</div>
    </div>
  )
}

function DropRow({ row, rowIndex }: { row: MonthlyDropRow; rowIndex: number }) {
  const Icon = getIcon(row.iconName)

  let gridCols = "grid-cols-2 sm:grid-cols-4"
  if (row.tileType === "square") gridCols = "grid-cols-3 sm:grid-cols-6"
  if (row.tileType === "mini") gridCols = "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12"
  if (row.tileType === "wide") gridCols = "grid-cols-1"
  if (row.tileType === "weekly") gridCols = "grid-cols-4"
  if (row.tileType === "quarterly") gridCols = "grid-cols-4"

  return (
    <div
      className="relative grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-5 lg:gap-7 items-start"
      style={{ animation: `fadeInUp 0.7s ease-out ${0.05 + rowIndex * 0.08}s both` }}
    >
      {/* Row label */}
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

      {/* Tiles */}
      <div className={`grid ${gridCols} gap-2.5 sm:gap-3`}>
        {row.items.map((item, i) => {
          if (row.tileType === "video") return <VideoTile key={i} item={item} accent={row.accent} label={row.tileLabel} />
          if (row.tileType === "square") return <SquareTile key={i} item={item} accent={row.accent} iconName={row.iconName} />
          if (row.tileType === "mini") return <MiniTile key={i} item={item} accent={row.accent} />
          if (row.tileType === "wide") return <WideTile key={i} item={item} accent={row.accent} />
          if (row.tileType === "weekly") return <WeeklyTile key={i} item={item} accent={row.accent} />
          if (row.tileType === "quarterly") return <QuarterlyTile key={i} item={item} accent={row.accent} isActive={i === 0} />
          return null
        })}
      </div>
    </div>
  )
}

export function SignatureMonthlyDrop() {
  return (
    <section
      aria-labelledby="signature-drop-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-10%] w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Every month, like clockwork"
          heading={
            <span id="signature-drop-heading">
              Here&rsquo;s what <em>lands</em>{" "}
              <span className="whitespace-nowrap">
                in your <span className="accent-underline">inbox</span> every month.
              </span>
            </span>
          }
          paragraph="No other plan ships this much real, custom content. Videos, photo graphics, brand graphics, blogs, social, press — all produced for you, on schedule."
        />

        <div
          className="mt-12 rounded-[var(--radius-xl)] p-6 sm:p-8 lg:p-10 space-y-8 lg:space-y-10 relative overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 12px 36px var(--shadow-color)",
          }}
        >
          {/* Subtle production-board grid background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {monthlyDropRows.map((row, i) => (
            <DropRow key={row.slug} row={row} rowIndex={i} />
          ))}
        </div>

        {/* Callout strip */}
        <div
          className="mt-8 rounded-[var(--radius-xl)] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          style={{
            background: "linear-gradient(135deg, rgba(236,72,153,0.06) 0%, rgba(124,58,237,0.06) 100%)",
            border: "1px solid rgba(236,72,153,0.30)",
          }}
        >
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-bold leading-[1.25]" style={{ color: "var(--ink)" }}>
              ≈ 27 pieces of brand content every month —{" "}
              <span style={{ color: "#BE185D" }}>plus ads, blogs, and automations.</span>
            </h3>
            <p className="mt-1 text-[14.5px]" style={{ color: "var(--muted)" }}>
              For comparison, ServicePro produces 12 graphics + weekly social posts. Signature is a different category.
            </p>
          </div>
          <Link
            href="/contact/schedule"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold px-5 py-2.5 rounded-[var(--radius-sm)] text-white transition-all hover:translate-y-[-1px] shrink-0"
            style={{
              background: "linear-gradient(135deg, #F472B6 0%, #EC4899 60%, #BE185D 100%)",
              boxShadow: "0 4px 14px rgba(236,72,153,0.40)",
            }}
          >
            Talk about your content needs
            <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Check, Lock, Sparkles } from "lucide-react"
import { getIcon } from "@/components/plans/hub/icon-map"
import { Checkbox } from "@/components/ui/checkbox"
import {
  type ALaCarteItem,
  PLAN_ACCENT,
  PLAN_LABEL,
  type PlanChoice,
} from "@/lib/a-la-carte-catalog"
import { effectivePriceFor } from "@/lib/a-la-carte-pricing"
import { QuantityStepper } from "./quantity-stepper"

interface ServiceCardProps {
  item: ALaCarteItem
  plan: PlanChoice
  // State for THIS item
  checked: boolean
  quantity: number
  isRadioSelected: boolean
  // Handlers
  onToggleCheck: (next: boolean) => void
  onQuantityChange: (next: number) => void
  onSelectRadio: () => void
}

function formatPriceLabel(item: ALaCarteItem): { primary: string; unit?: string } {
  const p = item.pricing
  if (p.type === "monthly") return { primary: `$${p.amount}`, unit: "/ month" }
  if (p.type === "oneTime") return { primary: `$${p.amount.toLocaleString()}`, unit: "one-time" }
  if (p.type === "oneTimeQty") return { primary: `$${p.perUnit}`, unit: `per ${p.unitLabel}` }
  return { primary: "Custom", unit: "quote" }
}

export function ServiceCard({
  item,
  plan,
  checked,
  quantity,
  isRadioSelected,
  onToggleCheck,
  onQuantityChange,
  onSelectRadio,
}: ServiceCardProps) {
  const Icon = getIcon(item.iconName)
  const eff = effectivePriceFor(item, plan)
  const { primary, unit } = formatPriceLabel(item)

  const isLocked = eff.status === "locked"
  const isIncluded = eff.status === "included"
  const isSelected = !isLocked && (
    item.selectionKind === "checkbox" ? checked :
    item.selectionKind === "quantity" ? quantity > 0 :
    isRadioSelected
  )
  const isInteractive = !isLocked && !isIncluded

  const handleCardClick = () => {
    if (!isInteractive) return
    if (item.selectionKind === "checkbox") {
      onToggleCheck(!checked)
    } else if (item.selectionKind === "radio") {
      onSelectRadio()
    } else if (item.selectionKind === "quantity") {
      // Bump to 1 if zero
      if (quantity === 0) onQuantityChange(1)
    }
  }

  const handleControlClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Tier-aware badge color
  const badgeTier = eff.badge?.tier
  const badgeAccent = badgeTier ? PLAN_ACCENT[badgeTier as PlanChoice] : item.accent

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (!isInteractive) return
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault()
          handleCardClick()
        }
      }}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-pressed={isInteractive ? isSelected : undefined}
      aria-disabled={isLocked || isIncluded}
      className={`group relative flex flex-col p-5 sm:p-6 rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 ${
        isInteractive ? "cursor-pointer hover:-translate-y-0.5" : "cursor-default"
      } ${isLocked ? "opacity-65" : ""}`}
      style={{
        background: "var(--surface)",
        border: `${isSelected ? "2px" : "1px"} solid ${
          isSelected ? item.accent : "var(--border-color)"
        }`,
        boxShadow: isSelected
          ? `0 4px 16px ${item.accent}22, 0 1px 3px var(--shadow-color)`
          : "0 1px 3px var(--shadow-color), 0 4px 14px var(--shadow-color)",
      }}
    >
      {/* Hover/selected glow */}
      <div
        aria-hidden
        className={`absolute -top-12 -right-12 w-[180px] h-[180px] rounded-full transition-opacity duration-500 ${
          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{ background: `radial-gradient(circle, ${item.accent}1F 0%, transparent 70%)` }}
      />

      {/* Top row: control + badges */}
      <div className="relative flex items-start justify-between gap-3 mb-4">
        {/* Icon tile */}
        <span
          className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${item.accent}1F 0%, ${item.accent}0A 100%)`,
            color: item.accent,
            border: `1px solid ${item.accent}33`,
            boxShadow: `0 4px 14px ${item.accent}1A`,
          }}
        >
          <Icon className="w-6 h-6" strokeWidth={2} />
        </span>

        {/* Control or status indicator */}
        <div onClick={handleControlClick} className="shrink-0">
          {isLocked ? (
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em]"
              style={{
                background: `${badgeAccent}14`,
                color: badgeAccent,
                border: `1px solid ${badgeAccent}33`,
              }}
            >
              <Lock className="w-2.5 h-2.5" strokeWidth={2.6} />
              {eff.badge?.label}
            </span>
          ) : isIncluded ? (
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em]"
              style={{
                background: `${badgeAccent}14`,
                color: badgeAccent,
                border: `1px solid ${badgeAccent}33`,
              }}
            >
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
              Included
            </span>
          ) : item.selectionKind === "checkbox" ? (
            <Checkbox
              checked={checked}
              onCheckedChange={(v) => onToggleCheck(v === true)}
              className="size-5"
              style={{
                borderColor: checked ? item.accent : undefined,
                background: checked ? item.accent : undefined,
              } as React.CSSProperties}
              aria-label={`Add ${item.label}`}
            />
          ) : item.selectionKind === "radio" ? (
            <button
              type="button"
              onClick={onSelectRadio}
              aria-label={`Select ${item.label}`}
              aria-pressed={isRadioSelected}
              className="w-5 h-5 rounded-full flex items-center justify-center transition-all cursor-pointer"
              style={{
                border: `2px solid ${isRadioSelected ? item.accent : "var(--border-color)"}`,
                background: isRadioSelected ? item.accent : "transparent",
              }}
            >
              {isRadioSelected && (
                <span className="block w-1.5 h-1.5 rounded-full" style={{ background: "#fff" }} />
              )}
            </button>
          ) : (
            <QuantityStepper
              value={quantity}
              max={item.pricing.type === "oneTimeQty" ? item.pricing.maxQty : 20}
              onChange={onQuantityChange}
              accent={item.accent}
              unitLabel={item.pricing.type === "oneTimeQty" ? item.pricing.unitLabel : undefined}
            />
          )}
        </div>
      </div>

      {/* Title + (optional) Popular badge / "Included in X" hint when available */}
      <div className="relative flex flex-wrap items-center gap-2 mb-1.5">
        <h3
          className="text-[16.5px] font-bold leading-[1.3] tracking-[-0.005em]"
          style={{ color: "var(--ink)" }}
        >
          {item.label}
        </h3>
        {item.popular && !isLocked && !isIncluded && (
          <span
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded-full"
            style={{ background: `${item.accent}14`, color: item.accent, border: `1px solid ${item.accent}33` }}
          >
            <Sparkles className="w-2.5 h-2.5" strokeWidth={2.6} />
            Popular
          </span>
        )}
      </div>

      {/* "Available — Included in X+" hint when relevant */}
      {!isLocked && !isIncluded && eff.badge && (
        <div className="relative mb-2">
          <span
            className="inline-flex items-center gap-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] px-2 py-0.5 rounded-full"
            style={{
              background: `${badgeAccent}10`,
              color: badgeAccent,
              border: `1px solid ${badgeAccent}26`,
            }}
          >
            {eff.badge.label}
          </span>
        </div>
      )}

      {/* Description */}
      <p
        className="relative text-[13.5px] leading-[1.55] flex-1"
        style={{ color: "var(--muted)" }}
      >
        {item.description}
      </p>

      {item.note && (
        <p
          className="relative mt-2 text-[11.5px] italic"
          style={{ color: "var(--muted)", opacity: 0.85 }}
        >
          * {item.note}
        </p>
      )}

      {/* Divider */}
      <div className="relative mt-4 h-px" style={{ background: "var(--border-color)" }} />

      {/* Price */}
      <div className="relative mt-3 flex items-end justify-between gap-2">
        <div className="flex items-baseline gap-1.5">
          <span
            className="text-[22px] font-bold leading-none tracking-[-0.015em]"
            style={{ color: isIncluded ? "var(--muted)" : item.accent, textDecoration: isIncluded ? "line-through" : undefined }}
          >
            {primary}
          </span>
          {unit && (
            <span
              className="text-[12px] font-medium"
              style={{ color: "var(--muted)" }}
            >
              {unit}
            </span>
          )}
        </div>
        {isIncluded && (
          <span className="text-[11px] font-semibold" style={{ color: PLAN_ACCENT[plan] }}>
            Included with {PLAN_LABEL[plan]}
          </span>
        )}
      </div>
    </div>
  )
}

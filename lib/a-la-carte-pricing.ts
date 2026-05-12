import type { PlanSlug } from "./plans-data"
import {
  type ALaCarteItem,
  type PlanChoice,
  type Availability,
  PLAN_RANK,
  PLAN_LABEL,
  items as catalogItems,
  getItem,
} from "./a-la-carte-catalog"

// ── State ──

export interface CalcState {
  plan: PlanChoice
  // For checkbox items: id → boolean
  // For radio items: groupName → itemId | null
  // For quantity items: id → number (0 = not selected)
  checks: Record<string, boolean>
  radios: Record<string, string | null>
  quantities: Record<string, number>
}

export function createInitialState(): CalcState {
  return {
    plan: "none",
    checks: {},
    radios: {},
    quantities: {},
  }
}

// ── Effective price per item ──

export type EffectiveStatus = "available" | "included" | "locked"

export interface EffectivePrice {
  status: EffectiveStatus
  badge?: { label: string; tier?: PlanChoice }
  // If "available", these describe the active pricing for the line:
  bucket?: "monthly" | "oneTime" | "custom"
  unitAmount?: number
}

function rankOf(plan: PlanChoice): number {
  return PLAN_RANK[plan]
}

function availabilityBadgeForPlan(availability: Availability): { label: string; tier: PlanSlug } | null {
  if (availability.kind === "included" || availability.kind === "requiresAndIncluded") {
    return { label: `Included in ${PLAN_LABEL[availability.inPlan]}`, tier: availability.inPlan }
  }
  return null
}

export function effectivePriceFor(item: ALaCarteItem, plan: PlanChoice): EffectivePrice {
  const a = item.availability
  const planRank = rankOf(plan)

  // 1) Locked: plan below required minimum
  if (a.kind === "requires" && planRank < rankOf(a.minPlan)) {
    return {
      status: "locked",
      badge: { label: `Requires ${PLAN_LABEL[a.minPlan]}+`, tier: a.minPlan },
    }
  }
  if (a.kind === "requiresAndIncluded" && planRank < rankOf(a.minPlan)) {
    return {
      status: "locked",
      badge: { label: `Requires ${PLAN_LABEL[a.minPlan]}+`, tier: a.minPlan },
    }
  }

  // 2) Included: current plan is the inclusion plan (or higher)
  if (a.kind === "included" && planRank >= rankOf(a.inPlan)) {
    return {
      status: "included",
      badge: { label: `Included in ${PLAN_LABEL[a.inPlan]}`, tier: a.inPlan },
    }
  }
  if (a.kind === "requiresAndIncluded" && planRank >= rankOf(a.inPlan)) {
    return {
      status: "included",
      badge: { label: `Included in ${PLAN_LABEL[a.inPlan]}`, tier: a.inPlan },
    }
  }

  // 3) Available — surface "Included in X" hint when there IS a higher tier that includes it
  const hint = availabilityBadgeForPlan(a)

  switch (item.pricing.type) {
    case "monthly":
      return {
        status: "available",
        bucket: "monthly",
        unitAmount: item.pricing.amount,
        badge: hint ?? undefined,
      }
    case "oneTime":
      return {
        status: "available",
        bucket: "oneTime",
        unitAmount: item.pricing.amount,
        badge: hint ?? undefined,
      }
    case "oneTimeQty":
      return {
        status: "available",
        bucket: "oneTime",
        unitAmount: item.pricing.perUnit,
        badge: hint ?? undefined,
      }
    case "custom":
      return {
        status: "available",
        bucket: "custom",
        badge: hint ?? undefined,
      }
  }
}

// ── Selection helpers ──

export function isItemSelected(item: ALaCarteItem, state: CalcState): boolean {
  if (item.selectionKind === "checkbox") return !!state.checks[item.id]
  if (item.selectionKind === "radio") {
    const group = item.radioGroup ?? "default"
    return state.radios[group] === item.id
  }
  if (item.selectionKind === "quantity") return (state.quantities[item.id] ?? 0) > 0
  return false
}

// ── Totals ──

export interface LineItem {
  id: string
  label: string
  iconName: string
  accent: string
  display: string       // e.g. "$29/mo", "$2,100 one-time", "Custom quote", "$1,000 one-time", "$400 × 2 packs"
  bucket: "monthly" | "oneTime" | "custom"
  amount: number        // 0 for custom
}

export interface Totals {
  monthly: number
  oneTime: number
  customCount: number
  lines: LineItem[]
}

function formatUSD(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n)
}

export function formatLineDisplay(
  bucket: "monthly" | "oneTime" | "custom",
  amount: number,
  qty: number,
  unitLabel?: string,
): string {
  if (bucket === "custom") return "Custom quote"
  if (bucket === "monthly") return `${formatUSD(amount)}/mo`
  if (qty > 1 && unitLabel) {
    return `${formatUSD(amount)} · ${qty} ${unitLabel}s`
  }
  return `${formatUSD(amount)} one-time`
}

export function computeTotals(state: CalcState): Totals {
  const lines: LineItem[] = []
  let monthly = 0
  let oneTime = 0
  let customCount = 0

  for (const item of catalogItems) {
    if (!isItemSelected(item, state)) continue
    const eff = effectivePriceFor(item, state.plan)
    if (eff.status === "locked") continue
    if (eff.status === "included") continue
    if (!eff.bucket) continue

    let amount = 0
    let qty = 1
    let unitLabel: string | undefined

    if (item.pricing.type === "oneTimeQty") {
      qty = Math.max(1, state.quantities[item.id] ?? item.pricing.defaultQty)
      amount = item.pricing.perUnit * qty
      unitLabel = item.pricing.unitLabel
    } else if (eff.bucket !== "custom" && typeof eff.unitAmount === "number") {
      amount = eff.unitAmount
    }

    if (eff.bucket === "monthly") monthly += amount
    else if (eff.bucket === "oneTime") oneTime += amount
    else if (eff.bucket === "custom") customCount += 1

    lines.push({
      id: item.id,
      label: item.label,
      iconName: item.iconName,
      accent: item.accent,
      display: formatLineDisplay(eff.bucket, amount, qty, unitLabel),
      bucket: eff.bucket,
      amount,
    })
  }

  return { monthly, oneTime, customCount, lines }
}

// ── Upsell logic ──

export interface UpsellRecommendation {
  tier: PlanSlug
  reason: string
  triggeredBy: string[]
}

const SIGNATURE_TRIGGERS = [
  "google-ads",
  "custom-backlinks",
  "quarterly-pr",
  "workflow-automation",
  "email-sms-setup",
  "video-pack",
  "drone-video",
]

const SERVICEPRO_TRIGGERS = [
  "review-generation",
  "payment-setup",
  "gmb-optimization",
  "ai-agents",
  "pipeline-creation",
  "workflow-automation",
]

function countSelectedIn(ids: string[], state: CalcState): string[] {
  return ids.filter((id) => {
    const item = getItem(id)
    if (!item) return false
    return isItemSelected(item, state)
  })
}

export function recommendUpsell(state: CalcState): UpsellRecommendation | null {
  // Signature: ≥2 items only-free-in-Signature OR items typically in Signature
  if (state.plan !== "signature") {
    const sig = countSelectedIn(SIGNATURE_TRIGGERS, state)
    if (sig.length >= 2) {
      return {
        tier: "signature",
        reason:
          "Signature bundles Google Ads, custom backlinks, quarterly PR, video, workflow automation, and email/SMS marketing — everything you've stacked, included.",
        triggeredBy: sig,
      }
    }
  }

  // ServicePro: ≥3 ServicePro-flavor items
  if (state.plan !== "signature" && state.plan !== "servicepro") {
    const sp = countSelectedIn(SERVICEPRO_TRIGGERS, state)
    if (sp.length >= 3) {
      return {
        tier: "servicepro",
        reason:
          "ServicePro bundles review tools, payments, AI chatbot, missed-call text back, analytics, and call recording — at a fraction of à la carte pricing.",
        triggeredBy: sp,
      }
    }
  }

  return null
}

// ── Estimate text (for hidden form field) ──

export function buildEstimateText(state: CalcState, totals: Totals): string {
  const lines: string[] = []
  for (const ln of totals.lines) {
    lines.push(`- ${ln.label} — ${ln.display}`)
  }
  return lines.join("\n")
}

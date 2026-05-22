"use client"

import { useMemo, useReducer } from "react"
import { Pill } from "@/components/ui/pill"
import {
  categories,
  items as catalogItems,
  type ALaCarteItem,
  type PlanChoice,
} from "@/lib/a-la-carte-catalog"
import {
  type CalcState,
  computeTotals,
  createInitialState,
  effectivePriceFor,
  recommendUpsell,
} from "@/lib/a-la-carte-pricing"
import { PlanPicker } from "./plan-picker"
import { CategorySection } from "./category-section"
import { SummaryPanelDesktop, SummaryPanelMobile } from "./summary-panel"
import { UpsellBanner } from "./upsell-banner"
import { EstimateForm } from "./estimate-form"

// ── Reducer ──

type Action =
  | { type: "setPlan"; plan: PlanChoice }
  | { type: "toggleCheck"; id: string; value: boolean }
  | { type: "setQty"; id: string; value: number }
  | { type: "selectRadio"; group: string; id: string }
  | { type: "reset" }

function reducer(state: CalcState, action: Action): CalcState {
  switch (action.type) {
    case "setPlan":
      return { ...state, plan: action.plan }
    case "toggleCheck":
      return { ...state, checks: { ...state.checks, [action.id]: action.value } }
    case "setQty":
      return { ...state, quantities: { ...state.quantities, [action.id]: action.value } }
    case "selectRadio": {
      // Toggle off if clicking the already-selected radio
      const current = state.radios[action.group]
      const next = current === action.id ? null : action.id
      return { ...state, radios: { ...state.radios, [action.group]: next } }
    }
    case "reset":
      return { ...createInitialState(), plan: state.plan }
  }
}

// ── Auto-handle locked / included transitions ──

function reconcileStateForPlan(state: CalcState): CalcState {
  // When the plan changes, items locked at the new plan should drop their selection,
  // so they don't silently submit if the user moves "up" then back down.
  const next: CalcState = { ...state, checks: { ...state.checks }, quantities: { ...state.quantities }, radios: { ...state.radios } }
  for (const item of catalogItems) {
    const eff = effectivePriceFor(item, state.plan)
    if (eff.status === "locked") {
      if (item.selectionKind === "checkbox") next.checks[item.id] = false
      if (item.selectionKind === "quantity") next.quantities[item.id] = 0
      if (item.selectionKind === "radio") {
        const group = item.radioGroup ?? "default"
        if (next.radios[group] === item.id) next.radios[group] = null
      }
    }
  }
  return next
}

export function CalculatorRoot() {
  const [stateRaw, dispatch] = useReducer(reducer, undefined, createInitialState)
  const state = useMemo(() => reconcileStateForPlan(stateRaw), [stateRaw])

  const totals = useMemo(() => computeTotals(state), [state])
  const upsell = useMemo(() => recommendUpsell(state), [state])

  const onTogglePlan = (plan: PlanChoice) => dispatch({ type: "setPlan", plan })
  const onToggleCheck = (id: string, value: boolean) => dispatch({ type: "toggleCheck", id, value })
  const onQuantity = (id: string, value: number) => dispatch({ type: "setQty", id, value })
  const onRadio = (group: string, id: string) => dispatch({ type: "selectRadio", group, id })
  const onReset = () => dispatch({ type: "reset" })

  return (
    <div className="relative">
      <div className="section-container">
        {/* Plan picker */}
        <div className="pt-2 sm:pt-4">
          <PlanPicker value={state.plan} onChange={onTogglePlan} />
        </div>

        {/* Calculator section */}
        <section id="calculator" aria-labelledby="calculator-heading" className="scroll-mt-20 pt-12 sm:pt-16">
          <div className="mb-8 flex flex-col items-start gap-3">
            <Pill>Step 2 · Pick services</Pill>
            <h2
              id="calculator-heading"
              className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              Add services, watch your{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">estimate</span> build.
              </span>
            </h2>
            <p className="text-[15.5px] sm:text-[17px] leading-[1.6] max-w-[640px]" style={{ color: "var(--muted)" }}>
              Pricing splits into three buckets — monthly add-ons, one-time builds, and custom-quote items. Plan-locked items grey out and Signature-included items auto-check when you pick that tier.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_400px] gap-8 lg:gap-10">
            {/* LEFT — categories */}
            <div className="flex flex-col gap-12 lg:gap-14 min-w-0">
              {categories.map((cat) => {
                const catItems = catalogItems.filter((i: ALaCarteItem) => i.category === cat.id)
                return (
                  <CategorySection
                    key={cat.id}
                    category={cat}
                    items={catItems}
                    plan={state.plan}
                    checks={state.checks}
                    radios={state.radios}
                    quantities={state.quantities}
                    onToggleCheck={onToggleCheck}
                    onQuantityChange={onQuantity}
                    onSelectRadio={onRadio}
                  />
                )
              })}
            </div>

            {/* RIGHT — sticky summary (desktop only) */}
            <div className="hidden lg:block">
              <SummaryPanelDesktop plan={state.plan} totals={totals} onReset={onReset} />
            </div>
          </div>

        </section>

        {/* Upsell banner — placed between calc and form */}
        {upsell && (
          <div className="mt-12 sm:mt-16">
            <UpsellBanner recommendation={upsell} />
          </div>
        )}

        {/* Estimate form */}
        <div className="mt-12 sm:mt-16 pb-12">
          <EstimateForm plan={state.plan} totals={totals} />
        </div>
      </div>

      {/* Mobile sticky summary */}
      <SummaryPanelMobile plan={state.plan} totals={totals} onReset={onReset} />
    </div>
  )
}

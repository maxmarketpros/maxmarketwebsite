"use client"

import { getIcon } from "@/components/plans/hub/icon-map"
import { type Category, type ALaCarteItem, type PlanChoice } from "@/lib/a-la-carte-catalog"
import { ServiceCard } from "./service-card"

interface CategorySectionProps {
  category: Category
  items: ALaCarteItem[]
  plan: PlanChoice
  checks: Record<string, boolean>
  radios: Record<string, string | null>
  quantities: Record<string, number>
  onToggleCheck: (id: string, next: boolean) => void
  onQuantityChange: (id: string, next: number) => void
  onSelectRadio: (group: string, id: string) => void
}

export function CategorySection({
  category,
  items,
  plan,
  checks,
  radios,
  quantities,
  onToggleCheck,
  onQuantityChange,
  onSelectRadio,
}: CategorySectionProps) {
  const Icon = getIcon(category.iconName)

  return (
    <section
      id={`category-${category.id}`}
      aria-labelledby={`category-${category.id}-heading`}
      className="scroll-mt-24"
    >
      {/* Category header */}
      <div className="flex items-start gap-3 mb-5">
        <span
          className="w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0"
          style={{
            background: `${category.accent}14`,
            color: category.accent,
            border: `1px solid ${category.accent}33`,
          }}
        >
          <Icon className="w-5 h-5" strokeWidth={2.2} />
        </span>
        <div>
          <h3
            id={`category-${category.id}-heading`}
            className="text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.01em]"
            style={{ color: "var(--ink)" }}
          >
            {category.label}
          </h3>
          <p className="mt-1 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
            {category.blurb}
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => {
          const groupName = item.radioGroup ?? "default"
          return (
            <ServiceCard
              key={item.id}
              item={item}
              plan={plan}
              checked={!!checks[item.id]}
              quantity={quantities[item.id] ?? 0}
              isRadioSelected={radios[groupName] === item.id}
              onToggleCheck={(next) => onToggleCheck(item.id, next)}
              onQuantityChange={(next) => onQuantityChange(item.id, next)}
              onSelectRadio={() => onSelectRadio(groupName, item.id)}
            />
          )
        })}
      </div>
    </section>
  )
}

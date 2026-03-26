"use client"

import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { PrimaryButton } from "./primary-button"

interface PricingCardProps {
  name: string
  price: string
  annualPrice?: string
  isAnnual?: boolean
  buildout: string
  features: string[]
  recommended?: boolean
  className?: string
}

export function PricingCard({
  name,
  price,
  annualPrice,
  isAnnual,
  buildout,
  features,
  recommended,
  className,
}: PricingCardProps) {
  const displayPrice = isAnnual && annualPrice ? annualPrice : price

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden transition-all duration-300",
        "rounded-[var(--radius-xl)]",
        recommended ? 'scale-[1.03] z-10' : '',
        className
      )}
      style={{
        background: 'var(--surface)',
        border: recommended
          ? '2px solid var(--accent)'
          : '1px solid var(--border-color)',
        boxShadow: recommended
          ? '0 4px 24px rgba(22,119,255,0.15), 0 1px 3px var(--shadow-color)'
          : '0 1px 3px var(--shadow-color), 0 4px 16px var(--shadow-color)',
      }}
    >
      {/* Recommended badge */}
      {recommended && (
        <div
          className="absolute top-0 left-0 right-0 text-center py-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-white"
          style={{ background: 'var(--accent)' }}
        >
          Most Popular
        </div>
      )}

      <div className={cn("p-8 flex-1 flex flex-col", recommended ? 'pt-14' : '')}>
        {/* Plan name */}
        <h3
          className="text-[22px] font-bold"
          style={{ color: 'var(--ink)' }}
        >
          {name}
        </h3>

        {/* Price */}
        <div className="mt-4 flex items-baseline gap-1">
          <span
            className="text-[48px] font-bold leading-none tracking-[-0.02em]"
            style={{ color: 'var(--ink)' }}
          >
            {displayPrice}
          </span>
          <span
            className="text-[16px] font-medium"
            style={{ color: 'var(--muted)' }}
          >
            /mo
          </span>
        </div>

        {/* Buildout */}
        <p
          className="mt-2 text-[14px]"
          style={{ color: 'var(--muted)' }}
        >
          {buildout}
        </p>

        {/* CTA */}
        <div className="mt-6">
          <PrimaryButton className="w-full">
            Get Started
          </PrimaryButton>
        </div>

        {/* Divider */}
        <div
          className="my-6 h-px"
          style={{ background: 'var(--border-color)' }}
        />

        {/* Features */}
        <ul className="space-y-3.5 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px]" style={{ color: 'var(--ink)' }}>
              <span
                className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
              >
                <Check className="w-3 h-3" strokeWidth={2.5} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

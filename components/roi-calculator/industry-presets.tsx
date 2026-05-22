"use client"

import { icons8Url } from "@/lib/icons8"
import { industryPresets, type IndustryKey } from "@/lib/roi-data"

interface IndustryPresetsProps {
  selected: IndustryKey
  onSelect: (key: IndustryKey) => void
}

export function IndustryPresets({ selected, onSelect }: IndustryPresetsProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span
          className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-bold text-white"
          style={{ background: "var(--accent)" }}
        >
          1
        </span>
        <h3
          className="text-[16px] sm:text-[17px] font-bold tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          What&rsquo;s your trade?
        </h3>
      </div>

      <div
        role="radiogroup"
        aria-label="Industry preset"
        className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-2.5"
      >
        {industryPresets.map((preset) => {
          const isActive = selected === preset.key
          return (
            <button
              key={preset.key}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onSelect(preset.key)}
              className="group relative flex flex-col items-center justify-center gap-2 px-2 py-3 rounded-[var(--radius-sm)] transition-all duration-200 cursor-pointer hover:translate-y-[-1px]"
              style={{
                background: isActive ? "var(--accent-bg)" : "var(--surface)",
                border: `1.5px solid ${isActive ? "var(--accent)" : "var(--border-color)"}`,
                boxShadow: isActive
                  ? "0 4px 14px rgba(22,119,255,0.18)"
                  : "0 1px 2px var(--shadow-color)",
              }}
            >
              <img
                src={icons8Url(preset.icons8Id, 96)}
                alt=""
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-110"
                style={{
                  filter: isActive ? "none" : "saturate(0.85)",
                }}
              />
              <span
                className="text-[11.5px] sm:text-[12.5px] font-semibold leading-tight text-center"
                style={{ color: isActive ? "var(--accent)" : "var(--ink)" }}
              >
                {preset.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

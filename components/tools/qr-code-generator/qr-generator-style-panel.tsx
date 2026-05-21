"use client"

import { useRef } from "react"
import { Upload, X, AlertTriangle } from "lucide-react"
import { contrastRatio } from "./lib/payloads"

export type StyleState = {
  fg: string
  bg: string
  size: number
  format: "png" | "svg"
  logoDataUrl: string | null
}

const FG_PRESETS = ["#0B132B", "#1677FF", "#22C55E", "#EF4444", "#8B5CF6", "#0F766E"]
const BG_PRESETS = ["#FFFFFF", "#F7FAFC", "#FFF7ED", "#F0FDF4", "#EFF6FF", "#FDF2F8"]
const SIZES = [256, 512, 1024, 2048] as const

export function QrGeneratorStylePanel({
  state,
  onChange,
}: {
  state: StyleState
  onChange: (next: StyleState) => void
}) {
  const fileRef = useRef<HTMLInputElement | null>(null)
  const lowContrast = contrastRatio(state.fg, state.bg) < 3.0

  const handleFile = (file: File | null) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () =>
      onChange({ ...state, logoDataUrl: String(reader.result) })
    reader.readAsDataURL(file)
  }

  const svgWithLogoHint = state.format === "svg" && state.logoDataUrl

  return (
    <div
      className="rounded-[var(--radius-lg)] p-5 sm:p-6"
      style={{
        background: "var(--bg)",
        border: "1px dashed var(--border-color)",
      }}
    >
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <h3
          className="text-[13.5px] font-bold uppercase tracking-[0.1em]"
          style={{ color: "var(--ink)" }}
        >
          Style your QR
        </h3>
        {lowContrast && (
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-semibold"
            style={{ background: "#FEF3C7", color: "#92400E" }}
          >
            <AlertTriangle className="w-3 h-3" strokeWidth={2.75} />
            Low contrast — may not scan reliably
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Foreground */}
        <ColorBlock
          label="Foreground"
          value={state.fg}
          presets={FG_PRESETS}
          onChange={(c) => onChange({ ...state, fg: c })}
        />
        {/* Background */}
        <ColorBlock
          label="Background"
          value={state.bg}
          presets={BG_PRESETS}
          onChange={(c) => onChange({ ...state, bg: c })}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Size */}
        <div>
          <div className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--ink)" }}>
            Size
          </div>
          <div className="inline-flex rounded-[var(--radius-sm)] p-1 gap-1" style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}>
            {SIZES.map((s) => {
              const active = state.size === s
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => onChange({ ...state, size: s })}
                  className="px-3 py-1.5 rounded-[10px] text-[12.5px] font-semibold transition-all cursor-pointer"
                  style={{
                    background: active ? "var(--accent)" : "transparent",
                    color: active ? "#fff" : "var(--ink)",
                  }}
                >
                  {s}
                </button>
              )
            })}
          </div>
        </div>

        {/* Format */}
        <div>
          <div className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--ink)" }}>
            Format
          </div>
          <div className="inline-flex rounded-[var(--radius-sm)] p-1 gap-1" style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}>
            {(["png", "svg"] as const).map((f) => {
              const active = state.format === f
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => onChange({ ...state, format: f })}
                  className="px-4 py-1.5 rounded-[10px] text-[12.5px] font-semibold uppercase transition-all cursor-pointer"
                  style={{
                    background: active ? "var(--accent)" : "transparent",
                    color: active ? "#fff" : "var(--ink)",
                  }}
                >
                  {f}
                </button>
              )
            })}
          </div>
          {svgWithLogoHint && (
            <p className="mt-2 text-[11.5px]" style={{ color: "var(--muted)" }}>
              Logo overlay supported on PNG only.
            </p>
          )}
        </div>

        {/* Logo */}
        <div>
          <div className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--ink)" }}>
            Center logo
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg,image/svg+xml"
            className="sr-only"
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          />
          {state.logoDataUrl ? (
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-[10px] overflow-hidden flex items-center justify-center"
                style={{ background: "#fff", border: "1px solid var(--border-color)" }}
              >
                <img
                  src={state.logoDataUrl}
                  alt="Logo preview"
                  className="max-w-full max-h-full"
                />
              </div>
              <button
                type="button"
                onClick={() => onChange({ ...state, logoDataUrl: null })}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] text-[12.5px] font-semibold cursor-pointer"
                style={{
                  background: "var(--surface)",
                  color: "var(--ink)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <X className="w-3.5 h-3.5" strokeWidth={2.5} />
                Remove
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[10px] text-[12.5px] font-semibold cursor-pointer"
              style={{
                background: "var(--surface)",
                color: "var(--ink)",
                border: "1px dashed var(--border-color)",
              }}
            >
              <Upload className="w-3.5 h-3.5" strokeWidth={2.5} />
              Upload PNG / SVG
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function ColorBlock({
  label,
  value,
  presets,
  onChange,
}: {
  label: string
  value: string
  presets: string[]
  onChange: (next: string) => void
}) {
  return (
    <div>
      <div className="mb-2 text-[11.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--ink)" }}>
        {label}
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <label
          className="inline-flex items-center gap-2 px-2 py-1.5 rounded-[10px] cursor-pointer"
          style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}
        >
          <span
            aria-hidden
            className="w-6 h-6 rounded-[6px] block"
            style={{ background: value, border: "1px solid var(--border-color)" }}
          />
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="sr-only"
          />
          <span className="text-[12.5px] font-mono" style={{ color: "var(--ink)" }}>
            {value.toUpperCase()}
          </span>
        </label>
        <div className="flex items-center gap-1.5 flex-wrap">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              aria-label={`Use ${p}`}
              className="w-6 h-6 rounded-full cursor-pointer transition-transform hover:scale-110"
              style={{
                background: p,
                border:
                  value.toUpperCase() === p.toUpperCase()
                    ? "2px solid var(--accent)"
                    : "1px solid var(--border-color)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

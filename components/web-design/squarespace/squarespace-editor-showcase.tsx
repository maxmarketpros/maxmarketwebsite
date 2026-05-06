import { Layers, Type, Image as ImageIcon, MessageSquare, HelpCircle, AlignJustify, Sparkles, Gauge, Code2, ShieldCheck } from "lucide-react"

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const sections = [
  { Icon: Layers, label: "Hero", active: true },
  { Icon: AlignJustify, label: "Services", active: false },
  { Icon: MessageSquare, label: "Reviews", active: false },
  { Icon: HelpCircle, label: "FAQ", active: false },
  { Icon: ImageIcon, label: "Gallery", active: false },
  { Icon: Type, label: "Footer", active: false },
]

const swatches = [
  { hex: "#0B132B", label: "Ink" },
  { hex: "#1677FF", label: "Brand" },
  { hex: "#74D3FF", label: "Cyan" },
  { hex: "#F7FAFC", label: "Bg" },
]

export function SquarespaceEditorShowcase() {
  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted backdrop card for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-2.5deg) translate(-12px, 14px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(232,240,254,0.92) 100%)",
          border: "1px solid rgba(22,119,255,0.22)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(11,11,11,0.16)",
        }}
      />

      {/* Main editor card */}
      <div
        className="relative card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
        }}
      >
        {/* ── Top browser/editor bar ── */}
        <div
          className="flex items-center gap-3 px-4 sm:px-5 py-3"
          style={{
            background: "linear-gradient(180deg, #0B0B0B 0%, #161616 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "#FF5F57" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "#FEBC2E" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "#28C840" }}
            />
          </div>
          <span
            className="flex items-center gap-2 px-2.5 py-1 rounded-md flex-1 min-w-0"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span
              className="w-4 h-4 rounded-sm overflow-hidden flex items-center justify-center shrink-0"
              style={{ background: "#fff" }}
            >
              <img
                src={favicon("squarespace.com", 64)}
                alt="Squarespace"
                width={12}
                height={12}
                loading="lazy"
                decoding="async"
                className="w-[12px] h-[12px] object-contain"
              />
            </span>
            <span
              className="text-[10.5px] font-mono truncate"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              yourdomain.com
            </span>
          </span>
          <span
            className="hidden xs:inline-flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{
              background: "rgba(40,200,64,0.14)",
              color: "#22C55E",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#22C55E",
                animation: "subtlePulse 1.4s ease-in-out infinite",
              }}
            />
            Live · 7.1
          </span>
        </div>

        {/* ── Editor body: 3 columns ── */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "120px 1fr 110px",
            background: "var(--bg)",
          }}
        >
          {/* Left rail: section list */}
          <div
            className="py-3 px-2 border-r"
            style={{
              borderColor: "var(--border-color)",
              background: "var(--surface)",
            }}
          >
            <div
              className="px-2 pb-2 text-[9px] font-extrabold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              Sections
            </div>
            <ul className="space-y-1">
              {sections.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] font-semibold"
                  style={{
                    background: s.active
                      ? "rgba(22,119,255,0.10)"
                      : "transparent",
                    color: s.active ? "#1677FF" : "var(--ink)",
                    border: s.active
                      ? "1px solid rgba(22,119,255,0.22)"
                      : "1px solid transparent",
                  }}
                >
                  <s.Icon className="w-3 h-3 shrink-0" strokeWidth={2.5} />
                  <span className="truncate">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center canvas: mini site preview */}
          <div className="relative px-4 py-4 overflow-hidden">
            {/* Faint Fluid Engine grid overlay */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(22,119,255,0.10) 0 1px, transparent 1px calc(100%/12))",
                opacity: 0.5,
              }}
            />
            <div className="relative">
              <div
                className="text-[8.5px] font-bold uppercase tracking-[0.16em] mb-1"
                style={{ color: "#1677FF" }}
              >
                Hero
              </div>
              <div
                className="text-[15px] sm:text-[16px] font-extrabold leading-[1.1] tracking-[-0.02em]"
                style={{ color: "var(--ink)", fontFamily: "Outfit, sans-serif" }}
              >
                Polished sites,
                <br />
                built to convert.
              </div>
              <div
                className="mt-2 text-[10px] leading-[1.4]"
                style={{ color: "var(--muted)" }}
              >
                Service-business websites that book the call.
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span
                  className="px-2 py-1 rounded-[6px] text-[9px] font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                  }}
                >
                  Get a quote
                </span>
                <span
                  className="px-2 py-1 rounded-[6px] text-[9px] font-bold border"
                  style={{
                    color: "var(--ink)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  See our work
                </span>
              </div>

              {/* Three feature mini-cards */}
              <div className="mt-4 grid grid-cols-3 gap-1.5">
                {[
                  { label: "SEO", color: "#1677FF" },
                  { label: "Speed", color: "#22C55E" },
                  { label: "CRO", color: "#F59E0B" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="card-surface p-2"
                    style={{ borderRadius: 8, padding: 8 }}
                  >
                    <span
                      className="block w-4 h-4 rounded"
                      style={{ background: `${c.color}22` }}
                    />
                    <div
                      className="mt-1 text-[8.5px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {c.label}
                    </div>
                    <div
                      className="text-[7.5px]"
                      style={{ color: "var(--muted)" }}
                    >
                      Tuned, ready
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected-block ring around the H1 zone */}
            <div
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                top: 22,
                left: 14,
                right: 14,
                height: 56,
                border: "1.5px dashed #1677FF",
                borderRadius: 6,
              }}
            />
            <span
              className="absolute -top-0.5 left-3 text-[8.5px] font-extrabold uppercase tracking-[0.1em] px-1 py-0.5 rounded-sm"
              style={{ background: "#1677FF", color: "#fff" }}
            >
              Heading · selected
            </span>
          </div>

          {/* Right rail: design tokens */}
          <div
            className="py-3 px-2 border-l"
            style={{
              borderColor: "var(--border-color)",
              background: "var(--surface)",
            }}
          >
            <div
              className="px-1 pb-2 text-[9px] font-extrabold uppercase tracking-[0.14em]"
              style={{ color: "var(--muted)" }}
            >
              Design
            </div>

            {/* Color swatches */}
            <div
              className="text-[8.5px] font-semibold uppercase tracking-[0.1em] px-1"
              style={{ color: "var(--muted)" }}
            >
              Palette
            </div>
            <div className="grid grid-cols-2 gap-1 px-1 mt-1">
              {swatches.map((s) => (
                <span
                  key={s.hex}
                  className="flex items-center gap-1 px-1 py-0.5 rounded-sm"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <span
                    className="w-3 h-3 rounded-sm shrink-0"
                    style={{
                      background: s.hex,
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  />
                  <span
                    className="text-[8px] font-mono truncate"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.label}
                  </span>
                </span>
              ))}
            </div>

            {/* Type pair */}
            <div
              className="mt-3 text-[8.5px] font-semibold uppercase tracking-[0.1em] px-1"
              style={{ color: "var(--muted)" }}
            >
              Type
            </div>
            <div
              className="mt-1 mx-1 px-1.5 py-1 rounded-sm"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                className="text-[12px] font-extrabold leading-tight"
                style={{ color: "var(--ink)", fontFamily: "Outfit, sans-serif" }}
              >
                Outfit
              </div>
              <div
                className="text-[9px] leading-tight"
                style={{ color: "var(--muted)" }}
              >
                Inter · body
              </div>
            </div>

            {/* Spacing */}
            <div
              className="mt-3 text-[8.5px] font-semibold uppercase tracking-[0.1em] px-1"
              style={{ color: "var(--muted)" }}
            >
              Spacing
            </div>
            <div className="px-1 mt-1 space-y-1">
              {["4 · 8 · 12", "16 · 24 · 32", "48 · 64"].map((s) => (
                <div
                  key={s}
                  className="text-[8.5px] font-mono px-1.5 py-0.5 rounded-sm"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Status footer ── */}
        <div
          className="flex items-center justify-between gap-2 px-4 sm:px-5 py-2.5"
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <span
            className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "#0B0B0B" }}
          >
            <Sparkles className="w-3 h-3" strokeWidth={2.5} />
            Fluid Engine
          </span>
          <span
            className="text-[10.5px] font-mono"
            style={{ color: "var(--muted)" }}
          >
            12-col · auto-saved
          </span>
          <span
            className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-md"
            style={{
              background: "rgba(22,119,255,0.10)",
              color: "var(--accent)",
            }}
          >
            <ShieldCheck className="w-3 h-3" strokeWidth={2.5} />
            SSL · CDN
          </span>
        </div>
      </div>

      {/* ── Floating accents ── */}

      {/* Top-left: PageSpeed badge */}
      <div
        className="absolute -top-5 -left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
          boxShadow:
            "0 2px 6px rgba(245,158,11,0.35), 0 14px 32px rgba(245,158,11,0.28)",
          color: "#422006",
          transform: "rotate(-4deg)",
        }}
      >
        <Gauge className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex items-baseline gap-1">
          <span className="text-[18px] font-extrabold leading-none">+82</span>
          <span className="text-[9.5px] font-bold uppercase tracking-[0.1em]">
            mobile
          </span>
        </div>
      </div>

      {/* Top-right: Custom CSS chip */}
      <div
        className="absolute -top-6 -right-5 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #161616 0%, #0B0B0B 100%)",
          boxShadow:
            "0 2px 6px rgba(11,11,11,0.32), 0 14px 32px rgba(11,11,11,0.28)",
          color: "#fff",
          transform: "rotate(5deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.10)" }}
        >
          <Code2 className="w-3.5 h-3.5" strokeWidth={2.5} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[9.5px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Custom CSS
          </span>
          <span className="text-[13px] font-extrabold">312 lines</span>
        </div>
      </div>

      {/* Bottom-right: schema chip */}
      <div
        className="absolute -bottom-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #ECFDF5 100%)",
          border: "1px solid rgba(34,197,94,0.30)",
          boxShadow:
            "0 2px 6px rgba(34,197,94,0.18), 0 12px 28px rgba(34,197,94,0.14)",
          transform: "rotate(3deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #34D399 0%, #10B981 100%)",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(16,185,129,0.35)",
          }}
        >
          <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[9.5px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            On every page
          </span>
          <span
            className="text-[13px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            Schema markup ✓
          </span>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-60"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,119,255,0.30) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}

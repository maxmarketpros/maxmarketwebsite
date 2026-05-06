import {
  Phone,
  Star,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MapPin,
} from "lucide-react"

const trustChips = [
  { label: "4.9", sub: "★ Google" },
  { label: "BBB", sub: "A+" },
  { label: "Lic.", sub: "#48211" },
]

export function GoDaddySiteShowcase() {
  return (
    <div className="relative max-w-[560px] mx-auto">
      {/* Tilted teal backdrop card */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          transform: "rotate(-2deg) translate(-12px, 16px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(214,247,247,0.92) 100%)",
          border: "1px solid rgba(27,219,219,0.35)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 10px 30px rgba(11,11,11,0.16)",
        }}
      />

      {/* Main browser card */}
      <div
        className="relative card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.18)",
        }}
      >
        {/* ── Browser chrome ── */}
        <div
          className="flex items-center gap-3 px-4 sm:px-5 py-3"
          style={{
            background: "linear-gradient(180deg, #0B132B 0%, #11203F 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
          </div>
          <span
            className="flex items-center gap-2 px-2.5 py-1 rounded-md flex-1 min-w-0"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <ShieldCheck
              className="w-3 h-3 shrink-0"
              style={{ color: "#74D3FF" }}
              strokeWidth={2.5}
            />
            <span
              className="text-[10.5px] font-mono truncate"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              yourbusiness.com
            </span>
          </span>
          <span
            className="hidden xs:inline-flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{
              background: "rgba(27,219,219,0.18)",
              color: "#5EEDED",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#1BDBDB",
                animation: "subtlePulse 1.4s ease-in-out infinite",
              }}
            />
            GoDaddy · Live
          </span>
        </div>

        {/* ── Top trust bar ── */}
        <div
          className="flex items-center justify-between gap-2 px-4 py-2"
          style={{
            background: "linear-gradient(180deg, #0B132B 0%, #11203F 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center gap-3">
            {trustChips.map((t) => (
              <span
                key={t.label}
                className="flex items-baseline gap-1 text-[10px]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                <span className="font-extrabold">{t.label}</span>
                <span style={{ color: "rgba(255,255,255,0.55)" }}>{t.sub}</span>
              </span>
            ))}
          </div>
          <span
            className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold"
            style={{ color: "#1BDBDB" }}
          >
            <Phone className="w-3 h-3" strokeWidth={2.5} />
            (949) 603-0389
          </span>
        </div>

        {/* ── Hero band ── */}
        <div
          className="relative px-5 py-6 sm:py-7"
          style={{
            background:
              "linear-gradient(135deg, #0B132B 0%, #11203F 60%, #1B7A7A 130%)",
          }}
        >
          {/* faint cyan blob */}
          <div
            aria-hidden
            className="absolute -top-10 -right-10 w-[260px] h-[260px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(27,219,219,0.32) 0%, transparent 65%)",
            }}
          />
          <div className="relative">
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-[0.16em]"
              style={{
                background: "rgba(27,219,219,0.18)",
                color: "#74D3FF",
              }}
            >
              <MapPin className="w-2.5 h-2.5" strokeWidth={3} />
              Serving Orange County
            </span>
            <div
              className="mt-2 text-[18px] sm:text-[20px] font-extrabold leading-[1.05] tracking-[-0.02em]"
              style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
            >
              Plumbing repairs,
              <br />
              <span style={{ color: "#1BDBDB" }}>done same-day.</span>
            </div>
            <div
              className="mt-2 text-[11px] leading-[1.4] max-w-[260px]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Licensed, bonded, insured — and on the truck before lunch.
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <span
                className="px-2.5 py-1.5 rounded-[6px] text-[10px] font-bold text-white inline-flex items-center gap-1"
                style={{
                  background:
                    "linear-gradient(180deg, #1BDBDB 0%, #0FB3B3 100%)",
                  boxShadow: "0 2px 6px rgba(27,219,219,0.40)",
                  color: "#0B132B",
                }}
              >
                <Phone className="w-2.5 h-2.5" strokeWidth={3} />
                Book now
              </span>
              <span
                className="px-2 py-1 rounded-[6px] text-[10px] font-bold border"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  borderColor: "rgba(255,255,255,0.25)",
                }}
              >
                See pricing
              </span>
            </div>
          </div>
        </div>

        {/* ── Service tiles ── */}
        <div
          className="grid grid-cols-3 gap-2 px-4 py-4"
          style={{ background: "var(--surface)" }}
        >
          {[
            { label: "Drains", price: "$89" },
            { label: "Heaters", price: "$149" },
            { label: "Leaks", price: "$129" },
          ].map((t) => (
            <div
              key={t.label}
              className="rounded-md p-2"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                className="text-[10px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                {t.label}
              </div>
              <div
                className="mt-0.5 text-[12px] font-extrabold"
                style={{ color: "#0FB3B3" }}
              >
                from {t.price}
              </div>
              <div
                className="mt-1 flex items-center gap-0.5"
                style={{ color: "#F59E0B" }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-2 h-2" fill="#F59E0B" stroke="#F59E0B" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Sticky CTA strip ── */}
        <div
          className="flex items-center justify-between gap-2 px-4 py-2.5"
          style={{
            background:
              "linear-gradient(180deg, #1BDBDB 0%, #0FB3B3 100%)",
            borderTop: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em]"
            style={{ color: "#0B132B" }}
          >
            <Sparkles className="w-3 h-3" strokeWidth={2.75} />
            Same-day available
          </span>
          <span
            className="inline-flex items-center gap-1 text-[11px] font-extrabold"
            style={{ color: "#0B132B" }}
          >
            <Phone className="w-3 h-3" strokeWidth={2.75} />
            Tap to call
          </span>
        </div>
      </div>

      {/* ── Floating accents ── */}

      {/* Top-left: Lighthouse +score chip */}
      <div
        className="absolute -top-5 -left-5 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #34D399 0%, #10B981 100%)",
          boxShadow:
            "0 2px 6px rgba(16,185,129,0.35), 0 14px 32px rgba(16,185,129,0.28)",
          color: "#053826",
          transform: "rotate(-4deg)",
        }}
      >
        <TrendingUp className="w-4 h-4" strokeWidth={2.75} />
        <div className="flex items-baseline gap-1">
          <span className="text-[18px] font-extrabold leading-none">+47</span>
          <span className="text-[9.5px] font-bold uppercase tracking-[0.1em]">
            Lighthouse
          </span>
        </div>
      </div>

      {/* Top-right: GoDaddy chip */}
      <div
        className="absolute -top-6 -right-5 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #E6FBFB 100%)",
          border: "1px solid rgba(27,219,219,0.45)",
          boxShadow:
            "0 2px 6px rgba(11,11,11,0.10), 0 14px 32px rgba(27,219,219,0.28)",
          transform: "rotate(5deg)",
        }}
      >
        <img
          src="/partners/godaddy-logo.svg"
          alt="GoDaddy"
          width={62}
          height={16}
          loading="lazy"
          decoding="async"
          className="h-[16px] w-auto"
        />
        <div className="flex flex-col leading-tight">
          <span
            className="text-[9.5px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--muted)" }}
          >
            Built on
          </span>
          <span
            className="text-[12px] font-extrabold"
            style={{ color: "var(--ink)" }}
          >
            Websites + Mktg
          </span>
        </div>
      </div>

      {/* Bottom-right: leads chip */}
      <div
        className="absolute -bottom-4 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[12px]"
        style={{
          background: "linear-gradient(180deg, #161616 0%, #0B0B0B 100%)",
          color: "#fff",
          boxShadow:
            "0 2px 6px rgba(11,11,11,0.32), 0 12px 28px rgba(11,11,11,0.28)",
          transform: "rotate(2deg)",
        }}
      >
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(27,219,219,0.20)",
            color: "#1BDBDB",
          }}
        >
          <Phone className="w-3.5 h-3.5" strokeWidth={2.75} />
        </span>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[9.5px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Last 30 days
          </span>
          <span className="text-[13px] font-extrabold">28 calls booked</span>
        </div>
      </div>

      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-x-10 -bottom-6 h-12 rounded-[24px] blur-2xl opacity-60"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,219,219,0.32) 0%, transparent 100%)",
        }}
      />
    </div>
  )
}

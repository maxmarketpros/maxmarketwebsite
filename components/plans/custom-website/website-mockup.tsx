"use client"

import { Camera, Phone, Star, MapPin, MessageSquare, Wrench } from "lucide-react"

export type MockupVariant =
  | "hero"
  | "services"
  | "reviews"
  | "map"
  | "gallery"
  | "form"
  | "google-result"

interface WebsiteMockupProps {
  variant: MockupVariant
  accent?: string
  businessName?: string
  className?: string
}

const DEFAULT_ACCENT = "#1677FF"

function BrowserChrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-[14px] overflow-hidden"
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--border-color)",
        boxShadow:
          "0 1px 3px var(--shadow-color), 0 24px 60px rgba(11,19,43,0.18)",
      }}
    >
      <div
        className="flex items-center gap-2 px-3.5 py-2.5"
        style={{ background: "#F7FAFC", borderBottom: "1px solid var(--border-color)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
        <div
          className="ml-3 flex-1 px-3 py-1 rounded-md text-[10.5px] font-medium"
          style={{
            background: "#fff",
            border: "1px solid var(--border-color)",
            color: "var(--muted)",
          }}
        >
          {url}
        </div>
      </div>
      {children}
    </div>
  )
}

function PhoneFrame({ children, accent = DEFAULT_ACCENT }: { children: React.ReactNode; accent?: string }) {
  return (
    <div
      className="rounded-[26px] p-2 inline-block"
      style={{
        background: "linear-gradient(180deg, #1A2436 0%, #0B132B 100%)",
        boxShadow:
          `0 1px 3px rgba(11,19,43,0.2), 0 18px 40px rgba(11,19,43,0.30), 0 0 0 4px ${accent}20`,
      }}
    >
      <div
        className="rounded-[20px] overflow-hidden relative"
        style={{ background: "#fff", width: 220, height: 380 }}
      >
        {/* Notch */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 w-[60px] h-[14px] rounded-full"
          style={{ background: "#0B132B" }}
        />
        {children}
      </div>
    </div>
  )
}

// ─── Variant: HERO (browser + service-business homepage) ──────────────

function HeroMockup({ accent, businessName }: { accent: string; businessName: string }) {
  return (
    <BrowserChrome url={`${businessName.toLowerCase().replace(/\s+/g, "")}.com`}>
      <div className="p-5" style={{ background: "#fff" }}>
        {/* Site nav */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-md inline-flex items-center justify-center"
              style={{ background: accent, color: "#fff" }}
            >
              <Wrench className="w-3.5 h-3.5" strokeWidth={2.4} />
            </span>
            <span
              className="font-bold text-[12px] tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              {businessName}
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-[9.5px] font-semibold" style={{ color: "var(--muted)" }}>
            <span>Services</span>
            <span>Reviews</span>
            <span>Contact</span>
            <span
              className="px-2 py-1 rounded-md text-white text-[9.5px] font-bold"
              style={{ background: accent }}
            >
              (949) 555-0100
            </span>
          </div>
        </div>

        {/* Hero band */}
        <div
          className="rounded-[10px] p-4 relative overflow-hidden mb-3"
          style={{
            background:
              `linear-gradient(135deg, ${accent}1A 0%, ${accent}05 60%, transparent 100%)`,
            border: `1px solid ${accent}26`,
          }}
        >
          <div
            className="absolute -right-6 -top-6 w-[80px] h-[80px] rounded-full"
            style={{ background: `${accent}22` }}
          />
          <span
            className="inline-block px-2 py-0.5 rounded-full text-[8.5px] font-bold uppercase tracking-[0.1em] mb-2"
            style={{ background: "#fff", color: accent, border: `1px solid ${accent}40` }}
          >
            Trusted locally
          </span>
          <h4
            className="text-[15px] font-bold leading-tight"
            style={{ color: "var(--ink)" }}
          >
            Honest pricing.
            <br />
            Same-day service.
          </h4>
          <div className="mt-3 flex items-center gap-2">
            <span
              className="px-2.5 py-1 rounded-md text-[9.5px] font-bold text-white"
              style={{ background: accent, boxShadow: `0 2px 8px ${accent}55` }}
            >
              Get a quote
            </span>
            <span className="text-[9px] font-semibold" style={{ color: "var(--muted)" }}>
              ⭐ 4.9 · 247 reviews
            </span>
          </div>
        </div>

        {/* Service tiles */}
        <div className="grid grid-cols-3 gap-1.5">
          {["Repairs", "Installs", "24/7"].map((label, i) => (
            <div
              key={label}
              className="rounded-[8px] p-2"
              style={{
                background: i === 0 ? `${accent}10` : "var(--bg)",
                border: `1px solid ${i === 0 ? accent + "33" : "var(--border-color)"}`,
              }}
            >
              <span
                className="block w-4 h-4 rounded-full mb-1"
                style={{ background: i === 0 ? accent : "var(--border-color)" }}
              />
              <span
                className="text-[9px] font-bold"
                style={{ color: "var(--ink)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  )
}

// ─── Variant: SERVICES (sub-page mock) ───────────────────────────────

function ServicesMockup({ accent }: { accent: string }) {
  return (
    <BrowserChrome url="yourshop.com/services">
      <div className="p-4 grid grid-cols-2 gap-2" style={{ background: "#fff" }}>
        {[
          { label: "Drain cleaning", color: accent },
          { label: "Water heaters", color: "#22C55E" },
          { label: "Leak repair",   color: "#F59E0B" },
          { label: "Re-pipes",      color: "#EC4899" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-[10px] p-3"
            style={{
              background: `${s.color}0F`,
              border: `1px solid ${s.color}33`,
            }}
          >
            <span
              className="block w-7 h-7 rounded-md mb-2"
              style={{ background: s.color }}
            />
            <span className="text-[10px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
              {s.label}
            </span>
            <span className="block mt-1 text-[8.5px]" style={{ color: "var(--muted)" }}>
              Learn more →
            </span>
          </div>
        ))}
      </div>
    </BrowserChrome>
  )
}

// ─── Variant: REVIEWS ─────────────────────────────────────────────────

function ReviewsMockup({ accent }: { accent: string }) {
  const reviews = [
    { name: "Sarah K.", body: "Same-day fix, fair price.", stars: 5 },
    { name: "Mike T.",  body: "Showed up on time, did clean work.", stars: 5 },
    { name: "Linda R.", body: "Best in town. Hands down.", stars: 5 },
  ]
  return (
    <div
      className="rounded-[14px] p-4"
      style={{
        background: "#fff",
        border: "1px solid var(--border-color)",
        boxShadow: "0 1px 3px var(--shadow-color), 0 12px 28px rgba(11,19,43,0.10)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
          Google Reviews
        </span>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3 h-3" fill="#FBBF24" stroke="#FBBF24" />
          ))}
          <span className="ml-1 text-[10px] font-bold" style={{ color: "var(--ink)" }}>4.9</span>
        </div>
      </div>
      <ul className="space-y-2">
        {reviews.map((r) => (
          <li
            key={r.name}
            className="px-3 py-2 rounded-[8px]"
            style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
          >
            <div className="flex items-center gap-2 mb-0.5">
              <span
                className="w-5 h-5 rounded-full inline-flex items-center justify-center text-[9px] font-bold text-white"
                style={{ background: accent }}
              >
                {r.name[0]}
              </span>
              <span className="text-[10px] font-bold" style={{ color: "var(--ink)" }}>
                {r.name}
              </span>
              <span className="ml-auto flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5" fill="#FBBF24" stroke="#FBBF24" />
                ))}
              </span>
            </div>
            <p className="text-[10px] leading-[1.4]" style={{ color: "var(--muted)" }}>
              &ldquo;{r.body}&rdquo;
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Variant: MAP (service area) ──────────────────────────────────────

function MapMockup({ accent }: { accent: string }) {
  return (
    <div
      className="relative rounded-[14px] p-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EEF6FF 0%, #F7FAFC 100%)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 1px 3px var(--shadow-color), 0 12px 28px rgba(11,19,43,0.10)",
      }}
    >
      <svg viewBox="0 0 280 180" className="w-full h-auto" style={{ maxHeight: 220 }}>
        {/* Grid lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 30 + 10}
            x2={280}
            y2={i * 30 + 10}
            stroke="rgba(11,19,43,0.06)"
            strokeWidth={1}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 28 + 10}
            y1={0}
            x2={i * 28 + 10}
            y2={180}
            stroke="rgba(11,19,43,0.06)"
            strokeWidth={1}
          />
        ))}

        {/* Service zone */}
        <path
          d="M 60 40 Q 100 30 150 50 T 240 70 Q 250 110 220 140 Q 170 160 100 150 Q 50 130 50 100 Q 50 60 60 40 Z"
          fill={`${accent}22`}
          stroke={accent}
          strokeWidth={2}
          strokeDasharray="5 4"
        />

        {/* City pins */}
        {[
          { x: 95,  y: 70,  label: "Irvine" },
          { x: 165, y: 60,  label: "Tustin" },
          { x: 200, y: 110, label: "Costa Mesa" },
          { x: 120, y: 130, label: "Newport" },
        ].map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r={5} fill={accent} />
            <circle cx={p.x} cy={p.y} r={9} fill="none" stroke={accent} strokeWidth={1.5} opacity={0.4} />
            <text
              x={p.x + 9}
              y={p.y + 3}
              fontSize={9}
              fontWeight={700}
              fill="var(--ink)"
              fontFamily="var(--font-outfit)"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-2 flex items-center gap-1.5 text-[10px]" style={{ color: "var(--muted)" }}>
        <MapPin className="w-3 h-3" style={{ color: accent }} strokeWidth={2.4} />
        <span className="font-semibold">Each city = its own page on your site.</span>
      </div>
    </div>
  )
}

// ─── Variant: GALLERY ─────────────────────────────────────────────────

function GalleryMockup({ accent }: { accent: string }) {
  const tiles = [
    { from: "#1677FF", to: "#74D3FF", icon: true },
    { from: "#22C55E", to: "#86EFAC" },
    { from: "#F59E0B", to: "#FDE68A" },
    { from: "#EC4899", to: "#FBCFE8" },
    { from: "#7C3AED", to: "#C4B5FD" },
    { from: "#14B8A6", to: "#5EEAD4" },
  ]
  return (
    <div
      className="rounded-[14px] p-3"
      style={{
        background: "#fff",
        border: "1px solid var(--border-color)",
        boxShadow: "0 1px 3px var(--shadow-color), 0 12px 28px rgba(11,19,43,0.10)",
      }}
    >
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
          Photo gallery
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold" style={{ color: accent }}>
          <Camera className="w-3 h-3" strokeWidth={2.4} />
          24 photos
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {tiles.map((t, i) => (
          <div
            key={i}
            className="aspect-square rounded-[8px] relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${t.from} 0%, ${t.to} 100%)`,
            }}
          >
            {t.icon && (
              <Camera
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-white opacity-70"
                strokeWidth={2}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Variant: FORM (mobile lead form) ─────────────────────────────────

function FormMockup({ accent }: { accent: string }) {
  return (
    <PhoneFrame accent={accent}>
      <div className="pt-7 px-3.5 pb-3.5 h-full flex flex-col">
        <span className="text-[9px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
          Quick quote
        </span>
        <h5 className="mt-1 text-[14px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
          What can we help with?
        </h5>
        <div className="mt-3 space-y-1.5">
          {[
            { label: "Your name",   value: "Sarah K." },
            { label: "Phone",       value: "(949) 555-0144" },
            { label: "What's up?",  value: "Kitchen sink leak…" },
          ].map((f) => (
            <div key={f.label}>
              <span
                className="block text-[8.5px] font-bold mb-0.5"
                style={{ color: "var(--muted)" }}
              >
                {f.label}
              </span>
              <div
                className="px-2 py-1.5 rounded-[6px] text-[9.5px] font-medium"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                  color: "var(--ink)",
                }}
              >
                {f.value}
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-auto py-2 rounded-[8px] text-center text-[10px] font-bold text-white"
          style={{
            background: `linear-gradient(180deg, ${accent}E6 0%, ${accent} 100%)`,
            boxShadow: `0 4px 12px ${accent}55`,
          }}
        >
          Get my quote
        </div>
        <p className="mt-1.5 text-[7.5px] text-center" style={{ color: "var(--muted)" }}>
          Replies in &lt; 1 business hour.
        </p>
      </div>
    </PhoneFrame>
  )
}

// ─── Variant: GOOGLE RESULT preview ───────────────────────────────────

function GoogleResultMockup({ accent }: { accent: string }) {
  return (
    <div
      className="rounded-[14px] p-4"
      style={{
        background: "#fff",
        border: "1px solid var(--border-color)",
        boxShadow: "0 1px 3px var(--shadow-color), 0 12px 28px rgba(11,19,43,0.10)",
      }}
    >
      <div
        className="flex items-center gap-2 mb-3 px-2 py-1.5 rounded-full"
        style={{ background: "var(--bg)", border: "1px solid var(--border-color)" }}
      >
        <span className="text-[10px] font-bold" style={{ color: "var(--muted)" }}>
          🔍
        </span>
        <span className="text-[10px] font-semibold" style={{ color: "var(--ink)" }}>
          plumber near me
        </span>
      </div>

      <div className="mb-2">
        <span
          className="inline-block px-1.5 py-0.5 rounded text-[8.5px] font-bold mb-1"
          style={{ background: "#000", color: "#fff" }}
        >
          Sponsored
        </span>
        <div className="text-[9px]" style={{ color: "var(--muted)" }}>yourshop.com</div>
        <div className="text-[11px] font-bold leading-tight" style={{ color: "#1A0DAB" }}>
          Plumber in Costa Mesa · Same-Day Service
        </div>
        <div className="text-[9.5px] leading-snug mt-0.5" style={{ color: "var(--muted)" }}>
          5-star rated, licensed plumber serving Costa Mesa & nearby cities…
        </div>
      </div>

      {/* Featured listing (you) */}
      <div
        className="mt-3 rounded-[8px] p-2.5"
        style={{
          background: `${accent}0D`,
          border: `2px solid ${accent}40`,
        }}
      >
        <div className="flex items-center gap-1.5 mb-1">
          <span
            className="px-1.5 py-0.5 rounded text-[8.5px] font-bold uppercase tracking-[0.08em]"
            style={{ background: accent, color: "#fff" }}
          >
            You
          </span>
          <span className="text-[9px]" style={{ color: "var(--muted)" }}>yourshop.com</span>
        </div>
        <div className="text-[11px] font-bold leading-tight" style={{ color: "#1A0DAB" }}>
          Your Business — Trusted Local Service
        </div>
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5" fill="#FBBF24" stroke="#FBBF24" />
          ))}
          <span className="text-[9px] font-bold ml-1" style={{ color: "var(--ink)" }}>4.9</span>
          <span className="text-[9px]" style={{ color: "var(--muted)" }}>· 247 reviews</span>
        </div>
        <div className="mt-1 text-[9.5px] leading-snug" style={{ color: "var(--muted)" }}>
          Friendly, on-time service. Honest pricing. Same-day appointments…
        </div>
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────

export function WebsiteMockup({
  variant,
  accent = DEFAULT_ACCENT,
  businessName = "Your Shop",
  className,
}: WebsiteMockupProps) {
  const inner = (() => {
    switch (variant) {
      case "hero":          return <HeroMockup accent={accent} businessName={businessName} />
      case "services":      return <ServicesMockup accent={accent} />
      case "reviews":       return <ReviewsMockup accent={accent} />
      case "map":           return <MapMockup accent={accent} />
      case "gallery":       return <GalleryMockup accent={accent} />
      case "form":          return <FormMockup accent={accent} />
      case "google-result": return <GoogleResultMockup accent={accent} />
    }
  })()

  return <div className={className}>{inner}</div>
}

// Small floating decoration chips for around the hero mockup
export function FloatingProofChip({
  icon,
  label,
  accent = DEFAULT_ACCENT,
  position,
}: {
  icon: "star" | "phone" | "message"
  label: string
  accent?: string
  position: { top?: string; bottom?: string; left?: string; right?: string }
}) {
  const Icon = icon === "star" ? Star : icon === "phone" ? Phone : MessageSquare
  return (
    <div
      className="absolute hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
        ...position,
      }}
    >
      <span
        className="w-6 h-6 rounded-full inline-flex items-center justify-center"
        style={{ background: `${accent}1A`, color: accent }}
      >
        <Icon className="w-3 h-3" strokeWidth={2.4} fill={icon === "star" ? accent : "none"} />
      </span>
      <span className="text-[12px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
        {label}
      </span>
    </div>
  )
}

import { PrimaryButton } from "@/components/ui/primary-button"
import {
  Palette,
  Type as TypeIcon,
  Sparkles,
  Wrench,
  Image as ImageIcon,
  Hammer,
  Wind,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Layers,
} from "lucide-react"

const swatches = [
  { hex: "#0B132B", name: "Ink" },
  { hex: "#1677FF", name: "Trust" },
  { hex: "#74D3FF", name: "Sky" },
  { hex: "#FCD34D", name: "Glow" },
  { hex: "#BE185D", name: "Warmth" },
]

const checklist = [
  "Logo lockups (primary, mark, wordmark)",
  "Color system with hex, RGB, CMYK, accessibility ratios",
  "Typography stack — display, body, UI",
  "Iconography & motion guidelines",
  "Pattern & photo treatment library",
  "Source files + a packaged brand-kit folder",
]

const iconLibrary = [
  { Icon: Wrench, label: "Service" },
  { Icon: Hammer, label: "Trades" },
  { Icon: Wind, label: "HVAC" },
  { Icon: Phone, label: "Call" },
  { Icon: ShieldCheck, label: "Trust" },
  { Icon: Sparkles, label: "Quality" },
]

export function GraphicDesignBrandKit() {
  return (
    <section
      aria-labelledby="graphic-design-brand-kit-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(252,211,77,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] right-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(252,211,77,0.16)",
                borderColor: "rgba(245,158,11,0.30)",
                color: "#92400E",
              }}
            >
              <Palette className="w-3.5 h-3.5" strokeWidth={2.5} />
              Brand Identity
            </span>

            <h2
              id="graphic-design-brand-kit-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Brand kit, locked &{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">ready</span>.
              </span>
            </h2>

            <p
              className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                Branding for service businesses
              </span>{" "}
              starts with one source of truth — logos, colors, typography, and
              icons your whole team can pull from. Once it&rsquo;s locked, every
              ad, post, truck wrap, and email looks like it came from the same
              brand. See how it ties into the rest of your{" "}
              <a
                href="/services"
                className="font-semibold underline decoration-dotted underline-offset-2"
                style={{ color: "var(--accent)" }}
              >
                marketing services
              </a>
              .
            </p>

            <ul className="mt-8 space-y-2.5">
              {checklist.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2.5 text-[15px]"
                  style={{ color: "var(--ink)" }}
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(180deg, #FCD34D 0%, #F59E0B 100%)",
                      color: "#fff",
                    }}
                  >
                    <CheckCircle2 className="w-3 h-3" strokeWidth={2.75} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <PrimaryButton size="lg" asLink href="/contact">
                Build my brand kit
              </PrimaryButton>
            </div>
          </div>

          {/* Right: brand kit panel */}
          <div
            className="relative"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <BrandKitPanel />
          </div>
        </div>
      </div>
    </section>
  )
}

function BrandKitPanel() {
  return (
    <div className="relative">
      <div
        className="card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.10), 0 24px 60px rgba(17,35,68,0.16)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{
            background: "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)",
              }}
            >
              <Layers className="w-3.5 h-3.5" strokeWidth={2.75} style={{ color: "#0B132B" }} />
            </span>
            <div className="leading-tight">
              <div
                className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Brand Kit
              </div>
              <div className="text-[13px] font-bold" style={{ color: "#fff" }}>
                Acme HVAC · v2.4
              </div>
            </div>
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-md"
            style={{ background: "rgba(34,197,94,0.18)", color: "#86EFAC" }}
          >
            Locked
          </span>
        </div>

        {/* Logo lockups */}
        <div className="p-5">
          <KitLabel>Logo lockups</KitLabel>
          <div className="mt-2.5 grid grid-cols-3 gap-2.5">
            <LogoTile variant="primary" />
            <LogoTile variant="mark" />
            <LogoTile variant="wordmark" />
          </div>
        </div>

        {/* Color palette */}
        <div className="px-5 pb-5">
          <KitLabel>Color system</KitLabel>
          <div className="mt-2.5 grid grid-cols-5 gap-2">
            {swatches.map((s) => (
              <div key={s.hex} className="flex flex-col">
                <div
                  className="w-full aspect-square rounded-[10px] border"
                  style={{
                    background: s.hex,
                    borderColor: "var(--border-color)",
                    boxShadow: "inset 0 -8px 0 rgba(0,0,0,0.06)",
                  }}
                />
                <div
                  className="mt-1 text-[10px] font-bold leading-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {s.name}
                </div>
                <div
                  className="text-[9px] font-mono"
                  style={{ color: "var(--muted)" }}
                >
                  {s.hex}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div
          className="px-5 py-4"
          style={{ borderTop: "1px solid var(--border-color)", background: "var(--bg)" }}
        >
          <KitLabel>
            <TypeIcon className="w-3 h-3 inline-block mr-1" strokeWidth={2.5} />
            Typography
          </KitLabel>
          <div className="mt-2.5 grid grid-cols-2 gap-3">
            <div>
              <div
                className="text-[20px] font-extrabold leading-[1.0] tracking-[-0.02em]"
                style={{ color: "var(--ink)" }}
              >
                Aa
              </div>
              <div
                className="text-[10px] font-bold uppercase tracking-[0.1em] mt-1"
                style={{ color: "var(--ink)" }}
              >
                Outfit Bold
              </div>
              <div
                className="text-[10px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                Display · 32–64
              </div>
            </div>
            <div>
              <div
                className="text-[20px] font-medium leading-[1.0] tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                Aa
              </div>
              <div
                className="text-[10px] font-bold uppercase tracking-[0.1em] mt-1"
                style={{ color: "var(--ink)" }}
              >
                Outfit Regular
              </div>
              <div
                className="text-[10px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                Body · 14–19
              </div>
            </div>
          </div>
        </div>

        {/* Icon library + Patterns */}
        <div
          className="grid grid-cols-2 divide-x"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <div className="p-5" style={{ borderColor: "var(--border-color)" }}>
            <KitLabel>Icon set</KitLabel>
            <div className="mt-2.5 grid grid-cols-3 gap-1.5">
              {iconLibrary.map((i) => (
                <span
                  key={i.label}
                  className="aspect-square rounded-[8px] flex items-center justify-center border"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border-color)",
                    color: "var(--accent)",
                  }}
                  title={i.label}
                >
                  <i.Icon className="w-4 h-4" strokeWidth={2.25} />
                </span>
              ))}
            </div>
          </div>
          <div className="p-5">
            <KitLabel>
              <ImageIcon className="w-3 h-3 inline-block mr-1" strokeWidth={2.5} />
              Patterns
            </KitLabel>
            <div className="mt-2.5 grid grid-cols-3 gap-1.5">
              <PatternTile pattern="dots" />
              <PatternTile pattern="grid" />
              <PatternTile pattern="diag" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{
            background: "linear-gradient(180deg, #fff 0%, #FAFBFD 100%)",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold"
            style={{ color: "var(--ink)" }}
          >
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} style={{ color: "#F59E0B" }} />
            18 brand assets, 1 source of truth
          </span>
          <span
            className="text-[10.5px] font-mono"
            style={{ color: "var(--muted)" }}
          >
            kit.fig · ai · pdf
          </span>
        </div>
      </div>

      {/* Floating chip */}
      <div
        className="absolute -top-5 -right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-[14px]"
        style={{
          background: "linear-gradient(180deg, #FBBF24 0%, #F59E0B 100%)",
          boxShadow:
            "0 2px 6px rgba(245,158,11,0.35), 0 14px 32px rgba(245,158,11,0.28)",
          color: "#fff",
          transform: "rotate(4deg)",
        }}
      >
        <Wrench className="w-4 h-4" strokeWidth={2.5} />
        <div className="flex items-baseline gap-1">
          <span className="text-[20px] font-extrabold leading-none">100%</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.1em]">
            on-brand
          </span>
        </div>
      </div>
    </div>
  )
}

function KitLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-[10px] font-bold uppercase tracking-[0.18em]"
      style={{ color: "var(--muted)" }}
    >
      {children}
    </div>
  )
}

function LogoTile({ variant }: { variant: "primary" | "mark" | "wordmark" }) {
  return (
    <div
      className="relative aspect-[4/3] rounded-[10px] flex items-center justify-center border"
      style={{
        background: "var(--bg)",
        borderColor: "var(--border-color)",
      }}
    >
      {variant === "primary" && (
        <div className="flex items-center gap-1.5">
          <span
            className="w-5 h-5 rounded-md flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #2B8AFF 0%, #1677FF 100%)",
              color: "#fff",
            }}
          >
            <Wind className="w-3 h-3" strokeWidth={2.75} />
          </span>
          <span
            className="text-[10px] font-extrabold tracking-[-0.01em]"
            style={{ color: "#0B132B" }}
          >
            ACME HVAC
          </span>
        </div>
      )}
      {variant === "mark" && (
        <span
          className="w-9 h-9 rounded-[10px] flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #2B8AFF 0%, #1677FF 100%)",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(22,119,255,0.30)",
          }}
        >
          <Wind className="w-5 h-5" strokeWidth={2.5} />
        </span>
      )}
      {variant === "wordmark" && (
        <span
          className="text-[12px] font-extrabold tracking-[-0.02em]"
          style={{ color: "#0B132B" }}
        >
          ACME<span style={{ color: "var(--accent)" }}>·</span>HVAC
        </span>
      )}
      <span
        className="absolute bottom-1 right-1.5 text-[8px] font-mono"
        style={{ color: "var(--muted)" }}
      >
        {variant}
      </span>
    </div>
  )
}

function PatternTile({ pattern }: { pattern: "dots" | "grid" | "diag" }) {
  const styles: Record<typeof pattern, React.CSSProperties> = {
    dots: {
      background:
        "radial-gradient(circle, #1677FF 1.2px, transparent 1.4px) 0 0 / 8px 8px, #fff",
    },
    grid: {
      background:
        "linear-gradient(#1677FF22 1px, transparent 1px) 0 0 / 8px 8px, linear-gradient(90deg, #1677FF22 1px, transparent 1px) 0 0 / 8px 8px, #fff",
    },
    diag: {
      background:
        "repeating-linear-gradient(45deg, #1677FF 0 2px, transparent 2px 8px), #fff",
    },
  }
  return (
    <span
      className="aspect-square rounded-[8px] border block"
      style={{
        ...styles[pattern],
        borderColor: "var(--border-color)",
      }}
    />
  )
}

import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Truck, Globe, FileText, Presentation } from "lucide-react"

const items = [
  {
    Icon: Truck,
    label: "Vehicle wraps",
    sub: "Truck side · Door logos · Rear panel",
    accent: "#1677FF",
    Mockup: VehicleWrapMockup,
  },
  {
    Icon: FileText,
    label: "Print collateral",
    sub: "Yard signs · Business cards · Flyers",
    accent: "#BE185D",
    Mockup: PrintCollateralMockup,
  },
  {
    Icon: Globe,
    label: "Web banners",
    sub: "Hero · Programmatic · Display ad set",
    accent: "#16A34A",
    Mockup: WebBannerMockup,
  },
  {
    Icon: Presentation,
    label: "Presentation decks",
    sub: "Pitch decks · Sales sheets · Investor",
    accent: "#F59E0B",
    Mockup: DeckMockup,
  },
]

export function GraphicDesignPrintWeb() {
  return (
    <section
      aria-labelledby="graphic-design-print-web-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Print + Web"
          heading={
            <span id="graphic-design-print-web-heading">
              Beyond the feed:{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">print & web</span>.
              </span>
            </span>
          }
          paragraph="Vehicle wraps for HVAC fleets. Yard signs for contractors. Business cards, flyers, web banners, sales decks — your design team builds every offline and online surface a service business actually shows up on."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-[1100px] mx-auto">
          {items.map((item, i) => (
            <article
              key={item.label}
              className={`relative card-surface card-surface-hover overflow-hidden ${
                i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-8"
              }`}
              style={{
                borderRadius: "var(--radius-xl)",
                animation: "fadeInUp 0.7s ease-out both",
              }}
            >
              {/* Mockup canvas */}
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg) 0%, var(--surface) 100%)",
                }}
              >
                <item.Mockup accent={item.accent} />
                <span
                  className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] z-10"
                  style={{
                    background: "rgba(255,255,255,0.94)",
                    color: item.accent,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  <item.Icon className="w-3 h-3" strokeWidth={2.5} />
                  {item.label}
                </span>
              </div>
              {/* Label */}
              <div className="px-5 py-4 flex items-center justify-between gap-3">
                <div>
                  <h3
                    className="text-[16px] sm:text-[17px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="text-[12.5px] mt-0.5"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.sub}
                  </p>
                </div>
                <span
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: `${item.accent}1A`,
                    color: item.accent,
                  }}
                >
                  <item.Icon className="w-4 h-4" strokeWidth={2.25} />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Have a print or web project lined up?
          </span>
          <SecondaryButton asLink href="/contact">
            Add print & web to your scope
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

/* ---------- Mockups ---------- */

function VehicleWrapMockup({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-6">
      {/* Truck silhouette */}
      <div className="relative w-full" style={{ maxWidth: 360 }}>
        <div
          className="relative h-[110px] sm:h-[130px] rounded-[12px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #fff 0%, #F1F5F9 60%, #E2E8F0 100%)",
            border: "2px solid #0B132B",
            boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
          }}
        >
            {/* Cab */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[34%]"
              style={{
                background:
                  "linear-gradient(135deg, #1E293B 0%, #0B132B 100%)",
                borderRight: "2px solid #0B132B",
              }}
            >
              <span
                className="absolute top-2 left-2 w-9 h-7 rounded-md"
                style={{ background: "rgba(116,211,255,0.85)" }}
              />
            </div>
            {/* Wrap area with branding */}
            <div className="absolute left-[36%] top-2 right-2 bottom-2">
              <div
                className="w-full h-full rounded-md flex flex-col justify-between p-2.5 relative overflow-hidden"
                style={{
                  background: `linear-gradient(120deg, ${accent} 0%, #0B132B 100%)`,
                }}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-5 h-5 rounded-md flex items-center justify-center"
                    style={{ background: "#fff", color: accent }}
                  >
                    <span className="text-[10px] font-extrabold">A</span>
                  </span>
                  <span
                    className="text-[10px] sm:text-[12px] font-extrabold tracking-tight"
                    style={{ color: "#fff" }}
                  >
                    ACME HVAC
                  </span>
                </div>
                <div>
                  <div
                    className="text-[14px] sm:text-[18px] font-extrabold leading-[0.95] tracking-tight"
                    style={{ color: "#fff" }}
                  >
                    24/7 same-day
                  </div>
                  <div
                    className="text-[14px] sm:text-[18px] font-extrabold leading-[0.95] tracking-tight"
                    style={{ color: "#FCD34D" }}
                  >
                    AC repair
                  </div>
                </div>
                <span
                  className="absolute bottom-2 right-2.5 text-[9px] sm:text-[11px] font-bold tracking-tight"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  (949) 603-0389
                </span>
              </div>
            </div>
        </div>
        {/* Wheels */}
        <span
          className="absolute -bottom-3 left-[14%] w-7 h-7 rounded-full"
          style={{
            background: "#0B132B",
            boxShadow: "inset 0 0 0 3px #1E293B, 0 4px 8px rgba(0,0,0,0.18)",
          }}
        />
        <span
          className="absolute -bottom-3 right-[14%] w-7 h-7 rounded-full"
          style={{
            background: "#0B132B",
            boxShadow: "inset 0 0 0 3px #1E293B, 0 4px 8px rgba(0,0,0,0.18)",
          }}
        />
      </div>
    </div>
  )
}

function PrintCollateralMockup({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-6 py-6 gap-4">
      {/* Yard sign */}
      <div className="relative" style={{ transform: "rotate(-4deg)" }}>
        <div
          className="w-[120px] sm:w-[140px] aspect-[5/4] rounded-md flex flex-col items-center justify-center px-3"
          style={{
            background: `linear-gradient(180deg, ${accent} 0%, #0B132B 100%)`,
            boxShadow: "0 8px 22px rgba(11,19,43,0.22)",
          }}
        >
          <div
            className="text-[9px] font-bold uppercase tracking-[0.18em]"
            style={{ color: "#FCD34D" }}
          >
            Voted #1
          </div>
          <div
            className="mt-0.5 text-[14px] sm:text-[16px] font-extrabold leading-[1.0] text-center"
            style={{ color: "#fff" }}
          >
            ACME HVAC
          </div>
          <div
            className="mt-1 text-[8.5px] font-bold uppercase tracking-[0.1em] text-center"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            (949) 603-0389
          </div>
        </div>
        {/* Stake */}
        <span
          aria-hidden
          className="absolute left-1/2 top-full block w-[4px] h-6"
          style={{
            background: "#9CA3AF",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Business card stack */}
      <div className="relative" style={{ transform: "rotate(6deg)" }}>
        <div
          aria-hidden
          className="absolute inset-0 rounded-[8px]"
          style={{
            background: "#fff",
            border: "1px solid var(--border-color)",
            transform: "translate(6px, 6px) rotate(4deg)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.10)",
          }}
        />
        <div
          className="relative w-[140px] sm:w-[160px] aspect-[7/4] rounded-[8px] p-2.5 flex flex-col justify-between"
          style={{
            background: "#fff",
            border: "1px solid var(--border-color)",
            boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="w-4 h-4 rounded-md"
              style={{ background: accent }}
            />
            <span
              className="text-[9px] font-extrabold tracking-[-0.02em]"
              style={{ color: "#0B132B" }}
            >
              ACME HVAC
            </span>
          </div>
          <div>
            <div
              className="text-[10px] font-bold leading-tight"
              style={{ color: "#0B132B" }}
            >
              Will Rojas
            </div>
            <div className="text-[8px]" style={{ color: "var(--muted)" }}>
              Service Manager
            </div>
            <div
              className="mt-0.5 text-[7.5px] font-mono"
              style={{ color: "var(--muted)" }}
            >
              acmehvac.com · (949) 603-0389
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WebBannerMockup({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 px-5 py-5 flex flex-col gap-3 justify-center">
      {/* Browser chrome */}
      <div
        className="rounded-[10px] overflow-hidden border"
        style={{
          borderColor: "var(--border-color)",
          background: "#fff",
          boxShadow: "0 8px 22px rgba(11,19,43,0.10)",
        }}
      >
        <div
          className="flex items-center gap-1.5 px-3 py-1.5"
          style={{
            background: "var(--bg)",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <span className="w-2 h-2 rounded-full bg-[#28C840]" />
          <span
            className="ml-2 text-[8.5px] font-mono"
            style={{ color: "var(--muted)" }}
          >
            acmehvac.com
          </span>
        </div>
        {/* Hero banner */}
        <div
          className="relative h-[80px] sm:h-[100px] flex"
          style={{
            background: `linear-gradient(120deg, ${accent} 0%, #064E3B 100%)`,
          }}
        >
          <div className="flex-1 flex flex-col justify-center px-4">
            <div
              className="text-[9px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Spring promo
            </div>
            <div
              className="mt-1 text-[14px] sm:text-[18px] font-extrabold leading-[1.0]"
              style={{ color: "#fff" }}
            >
              $89 tune-up
            </div>
            <div
              className="text-[14px] sm:text-[18px] font-extrabold leading-[1.0]"
              style={{ color: "#FCD34D" }}
            >
              this week only
            </div>
          </div>
          <div className="flex items-center pr-4">
            <span
              className="px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-[0.1em]"
              style={{ background: "#fff", color: accent }}
            >
              Book →
            </span>
          </div>
        </div>
      </div>
      {/* Display ad strip */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { w: "1:1", g: `linear-gradient(135deg, ${accent} 0%, #0B132B 100%)` },
          { w: "16:9", g: "linear-gradient(120deg, #FCD34D 0%, #F59E0B 100%)" },
          { w: "1:2", g: "linear-gradient(180deg, #1677FF 0%, #0B132B 100%)" },
        ].map((d, i) => (
          <div
            key={i}
            className="relative rounded-[6px] aspect-[5/3] overflow-hidden"
            style={{ background: d.g }}
          >
            <span
              className="absolute bottom-1 left-1.5 text-[7.5px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              {d.w}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DeckMockup({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-6 py-6">
      <div className="relative w-full max-w-[300px]">
        {/* Background slides */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[10px]"
          style={{
            background: "#fff",
            border: "1px solid var(--border-color)",
            transform: "translate(10px, 10px)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 rounded-[10px]"
          style={{
            background: "#fff",
            border: "1px solid var(--border-color)",
            transform: "translate(5px, 5px)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
          }}
        />
        {/* Top slide */}
        <div
          className="relative rounded-[10px] aspect-[16/10] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${accent} 0%, #92400E 100%)`,
            boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
          }}
        >
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div>
              <div
                className="text-[8.5px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                Q2 sales pitch
              </div>
              <div
                className="mt-1 text-[18px] sm:text-[22px] font-extrabold leading-[0.95] tracking-tight"
                style={{ color: "#fff" }}
              >
                The service brand
              </div>
              <div
                className="text-[18px] sm:text-[22px] font-extrabold leading-[0.95] tracking-tight"
                style={{ color: "#FCD34D" }}
              >
                neighbors trust.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md" style={{ background: "#fff" }} />
              <span
                className="text-[8.5px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Acme HVAC · 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { SectionHeader } from "@/components/ui/section-header"
import { Reveal } from "@/components/ui/reveal"
import { Check, Sparkles } from "lucide-react"

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

type Row = {
  feature: string
  apple: string
  google: string
  appleWin?: boolean
}

const rows: Row[] = [
  {
    feature: "Where you show up",
    apple: "Maps, Siri, Spotlight, CarPlay, Safari & Wallet",
    google: "Google Maps & Search",
  },
  {
    feature: "Who's searching",
    apple: "1.3B+ iPhones — higher-income, brand-loyal",
    google: "Broad Android + web audience",
  },
  {
    feature: "Local competition",
    apple: "~58% unclaimed · only 16% actively managed",
    google: "Saturated & heavily optimized",
    appleWin: true,
  },
  {
    feature: "Maps ads",
    apple: "New for 2026 · one ad per search · first-mover",
    google: "Mature, crowded, rising cost-per-click",
    appleWin: true,
  },
  {
    feature: "Customer privacy",
    apple: "On-device · contextual · no account tracking",
    google: "Personalized ad tracking",
    appleWin: true,
  },
  {
    feature: "Showcases & actions",
    apple: "Showcases + one-tap Book / Order / Pay",
    google: "Posts + actions",
  },
  {
    feature: "Managed by Max Market Pros",
    apple: "Yes — fully done for you",
    google: "Yes — fully done for you",
  },
]

const cols = [
  { key: "apple", name: "Apple Business", domain: "apple.com", highlight: true },
  { key: "google", name: "Google Business Profile", domain: "google.com", highlight: false },
] as const

export function AppleBusinessCompare() {
  return (
    <section
      aria-labelledby="apple-business-compare-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[12%] left-[-6%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Apple vs Google"
          heading={
            <span id="apple-business-compare-heading">
              We manage both. Apple is just the{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">open lane</span>
              </span>{" "}
              right now.
            </span>
          }
          paragraph="Google Business Profile is essential and we run it too. But Apple's map is where local visibility is still uncrowded — fewer claimed listings, brand-new ads, and a privacy-first audience that converts."
        />

        {/* Desktop comparison grid */}
        <Reveal className="mt-12 hidden lg:block">
          <div
            className="rounded-[var(--radius-xl)] overflow-hidden card-surface"
            role="table"
            aria-label="Apple Business compared to Google Business Profile"
          >
            {/* Header row */}
            <div
              className="grid items-stretch"
              style={{ gridTemplateColumns: "minmax(220px, 1.4fr) repeat(2, minmax(180px, 1fr))" }}
              role="row"
            >
              <div
                className="p-5 flex items-end"
                style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-color)" }}
              >
                <span
                  className="text-[12px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "var(--muted)" }}
                >
                  Compare
                </span>
              </div>
              {cols.map((c) => (
                <div
                  key={c.key}
                  className="relative p-5 flex flex-col items-center text-center gap-2"
                  style={{
                    background: c.highlight ? "rgba(22,119,255,0.06)" : "var(--bg)",
                    borderBottom: c.highlight
                      ? "2px solid var(--accent)"
                      : "1px solid var(--border-color)",
                    borderLeft: "1px solid var(--border-color)",
                  }}
                >
                  {c.highlight && (
                    <span
                      className="absolute -top-0 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-b-md text-[9.5px] font-extrabold uppercase tracking-[0.1em] text-white"
                      style={{ background: "var(--accent)" }}
                    >
                      <Sparkles className="w-2.5 h-2.5" strokeWidth={2.75} />
                      Opportunity
                    </span>
                  )}
                  <span
                    className="w-10 h-10 rounded-[11px] flex items-center justify-center"
                    style={{ background: "#fff", border: "1px solid var(--border-color)" }}
                  >
                    <img
                      src={favicon(c.domain, 128)}
                      alt={c.name}
                      width={22}
                      height={22}
                      className="w-[22px] h-[22px] object-contain"
                    />
                  </span>
                  <span
                    className="text-[14.5px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {c.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Rows */}
            {rows.map((r, idx) => (
              <div
                key={r.feature}
                className="grid items-stretch"
                style={{
                  gridTemplateColumns: "minmax(220px, 1.4fr) repeat(2, minmax(180px, 1fr))",
                  borderBottom: idx < rows.length - 1 ? "1px solid var(--border-color)" : "none",
                }}
                role="row"
              >
                <div
                  className="p-5 flex items-center text-[14px] font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  {r.feature}
                </div>
                <div
                  className="p-5 flex items-center gap-2 text-[13.5px] leading-[1.45]"
                  style={{
                    background: "rgba(22,119,255,0.04)",
                    borderLeft: "1px solid var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  {r.appleWin && (
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)" }}
                    >
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                  )}
                  <span>{r.apple}</span>
                </div>
                <div
                  className="p-5 flex items-center text-[13.5px] leading-[1.45]"
                  style={{ borderLeft: "1px solid var(--border-color)", color: "var(--muted)" }}
                >
                  {r.google}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile stacked cards */}
        <div className="mt-10 lg:hidden space-y-4">
          {cols.map((c, ci) => (
            <Reveal key={c.key} delay={0.05 * ci}>
              <div
                className="card-surface overflow-hidden"
                style={{
                  borderColor: c.highlight ? "var(--accent)" : "var(--border-color)",
                  boxShadow: c.highlight
                    ? "0 8px 30px rgba(22,119,255,0.16)"
                    : undefined,
                }}
              >
                <div
                  className="flex items-center gap-3 p-4"
                  style={{
                    background: c.highlight ? "rgba(22,119,255,0.06)" : "var(--bg)",
                    borderBottom: "1px solid var(--border-color)",
                  }}
                >
                  <span
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                    style={{ background: "#fff", border: "1px solid var(--border-color)" }}
                  >
                    <img
                      src={favicon(c.domain, 128)}
                      alt={c.name}
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain"
                    />
                  </span>
                  <span className="text-[15px] font-bold" style={{ color: "var(--ink)" }}>
                    {c.name}
                  </span>
                  {c.highlight && (
                    <span
                      className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-extrabold uppercase tracking-[0.1em] text-white"
                      style={{ background: "var(--accent)" }}
                    >
                      <Sparkles className="w-2.5 h-2.5" strokeWidth={2.75} />
                      Opportunity
                    </span>
                  )}
                </div>
                <ul className="divide-y" style={{ borderColor: "var(--border-color)" }}>
                  {rows.map((r) => (
                    <li key={r.feature} className="p-4" style={{ borderColor: "var(--border-color)" }}>
                      <div
                        className="text-[11px] font-bold uppercase tracking-[0.08em]"
                        style={{ color: "var(--muted)" }}
                      >
                        {r.feature}
                      </div>
                      <div
                        className="mt-1 text-[14px] leading-[1.45]"
                        style={{ color: c.highlight ? "var(--ink)" : "var(--muted)" }}
                      >
                        {c.key === "apple" ? r.apple : r.google}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

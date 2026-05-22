import { SectionHeader } from "@/components/ui/section-header"
import { WebflowGlyph } from "./webflow-hero"

const WF_BLUE = "#146EF5"

type Tile = {
  name: string
  monogram: string
  bg: string
  fg: string
  webflowNative?: boolean
}

const native: Tile[] = [
  { name: "Forms", monogram: "Fm", bg: WF_BLUE, fg: "#fff", webflowNative: true },
  { name: "Logic", monogram: "Lg", bg: WF_BLUE, fg: "#fff", webflowNative: true },
  { name: "Memberships", monogram: "Mb", bg: WF_BLUE, fg: "#fff", webflowNative: true },
  { name: "Ecommerce", monogram: "Ec", bg: WF_BLUE, fg: "#fff", webflowNative: true },
  { name: "Localization", monogram: "Lc", bg: WF_BLUE, fg: "#fff", webflowNative: true },
  { name: "Optimize", monogram: "Op", bg: WF_BLUE, fg: "#fff", webflowNative: true },
]

const middleware: Tile[] = [
  { name: "Make.com", monogram: "M", bg: "#6D5DE6", fg: "#fff" },
  { name: "Zapier", monogram: "Z", bg: "#FF4A00", fg: "#fff" },
  { name: "Stripe", monogram: "S", bg: "#635BFF", fg: "#fff" },
  { name: "Memberstack", monogram: "Ms", bg: "#0B0B0B", fg: "#fff" },
  { name: "Finsweet", monogram: "Fs", bg: "#0066FF", fg: "#fff" },
  { name: "Jetboost", monogram: "Jb", bg: "#FF6B35", fg: "#fff" },
]

const downstream: Tile[] = [
  { name: "HubSpot", monogram: "H", bg: "#FF7A59", fg: "#fff" },
  { name: "Mailchimp", monogram: "M", bg: "#FFE01B", fg: "#0B0B0B" },
  { name: "Notion", monogram: "N", bg: "#000000", fg: "#fff" },
  { name: "Airtable", monogram: "A", bg: "#FCB400", fg: "#0B0B0B" },
  { name: "Google Sheets", monogram: "Gs", bg: "#0F9D58", fg: "#fff" },
  { name: "Slack", monogram: "Sl", bg: "#4A154B", fg: "#ECB22E" },
]

export function WebflowEcosystem() {
  return (
    <section
      id="webflow-ecosystem"
      aria-labelledby="webflow-ecosystem-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[8%] right-[-6%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(67,83,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Ecosystem · the integration mesh"
          heading={
            <span id="webflow-ecosystem-heading">
              A modern Webflow website design is a{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(20,110,245,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  hub, not an island
                </span>
                .
              </span>
            </span>
          }
          paragraph="Webflow ships native apps for forms, logic, members, ecommerce, localization, and optimization. We wire them through Zapier, Make, and Stripe into the CRM and storage tools your team already uses."
        />

        <div
          className="mt-12 rounded-[var(--radius-xl)] p-5 sm:p-7"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color), 0 12px 32px var(--shadow-color)",
            animation: "fadeInUp 0.7s ease-out both",
          }}
        >
          {/* Column headers */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 lg:gap-5 items-start">
            <ColumnHeader
              eyebrow="Webflow native"
              title="Built into the .webflow file"
              accent={WF_BLUE}
              showWebflowMark
            />
            <span className="hidden lg:block" aria-hidden />
            <ColumnHeader
              eyebrow="Middleware"
              title="Connect anything to anything"
              accent="#6D5DE6"
            />
            <span className="hidden lg:block" aria-hidden />
            <ColumnHeader
              eyebrow="CRM / storage"
              title="Where your team already lives"
              accent="#22C55E"
            />
          </div>

          {/* Flow grid */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 lg:gap-5 items-stretch">
            <Column tiles={native} index={0} />
            <FlowArrows accent={WF_BLUE} />
            <Column tiles={middleware} index={1} />
            <FlowArrows accent="#6D5DE6" />
            <Column tiles={downstream} index={2} />
          </div>

          {/* Sample flow strip */}
          <div
            className="mt-7 rounded-[var(--radius-md)] p-4"
            style={{
              background: "linear-gradient(90deg, rgba(20,110,245,0.06) 0%, rgba(34,197,94,0.06) 100%)",
              border: "1px dashed rgba(20,110,245,0.30)",
            }}
          >
            <div className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] mb-2" style={{ color: WF_BLUE }}>
              Example flow
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[13px]" style={{ color: "var(--ink)" }}>
              <Step label="Form submission" />
              <Arrow />
              <Step label="Webflow Logic" />
              <Arrow />
              <Step label="Zapier filter" />
              <Arrow />
              <Step label="Stripe checkout" />
              <Arrow />
              <Step label="HubSpot deal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ColumnHeader({
  eyebrow,
  title,
  accent,
  showWebflowMark,
}: {
  eyebrow: string
  title: string
  accent: string
  showWebflowMark?: boolean
}) {
  return (
    <div className="text-center lg:text-left">
      <span
        className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.14em] px-2 py-1 rounded"
        style={{ background: `${accent}1A`, color: accent }}
      >
        {showWebflowMark && <WebflowGlyph size={11} />}
        {eyebrow}
      </span>
      <h3
        className="mt-1.5 text-[14.5px] font-bold leading-[1.3]"
        style={{ color: "var(--ink)" }}
      >
        {title}
      </h3>
    </div>
  )
}

function Column({ tiles, index }: { tiles: Tile[]; index: number }) {
  return (
    <ul className="space-y-2.5" style={{ animation: `fadeInUp 0.6s ease-out ${0.05 * index + 0.1}s both` }}>
      {tiles.map((t) => (
        <li
          key={t.name}
          className="flex items-center gap-2.5 px-3 py-2 rounded-[10px]"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 2px var(--shadow-color)",
          }}
        >
          <span
            className="w-8 h-8 shrink-0 rounded-[8px] flex items-center justify-center text-[12px] font-extrabold"
            style={{
              background: t.bg,
              color: t.fg,
              fontFamily: "Outfit, sans-serif",
              letterSpacing: "-0.04em",
            }}
            aria-hidden
          >
            {t.webflowNative ? <WebflowGlyph size={14} /> : t.monogram}
          </span>
          <span
            className="text-[13.5px] font-semibold flex-1"
            style={{ color: "var(--ink)" }}
          >
            {t.name}
          </span>
          {t.webflowNative && (
            <span
              className="text-[9.5px] font-bold px-1.5 py-0.5 rounded"
              style={{
                background: "rgba(20,110,245,0.10)",
                color: WF_BLUE,
              }}
            >
              native
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

function FlowArrows({ accent }: { accent: string }) {
  return (
    <div className="hidden lg:flex flex-col items-center justify-around py-2" aria-hidden>
      {Array.from({ length: 6 }).map((_, i) => (
        <svg key={i} width="36" height="14" viewBox="0 0 36 14">
          <path
            d="M0 7 H30 M24 2 L30 7 L24 12"
            stroke={accent}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.55"
          />
        </svg>
      ))}
    </div>
  )
}

function Step({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-md text-[12.5px] font-semibold"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-color)",
        color: "var(--ink)",
      }}
    >
      {label}
    </span>
  )
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden>
      <path
        d="M0 5 H10 M7 1 L11 5 L7 9"
        stroke={WF_BLUE}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

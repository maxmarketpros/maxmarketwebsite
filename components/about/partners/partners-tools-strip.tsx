import { icons8Url } from "@/lib/icons8"
import { SectionHeader } from "@/components/ui/section-header"
import { TOOLS } from "./partners-data"

export function PartnersToolsStrip() {
  return (
    <section aria-labelledby="partners-tools-heading" className="relative">
      <div className="section-container py-14 sm:py-16 lg:py-20">
        <SectionHeader
          pill="Plus"
          heading={
            <span id="partners-tools-heading">
              Tools we design and{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">ship in</span>.
              </span>
            </span>
          }
          paragraph="The supporting cast — what's open in the background while the work gets done."
        />

        <div
          className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-[920px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="card-surface card-surface-hover inline-flex items-center gap-3 pl-2.5 pr-4 py-2 rounded-[var(--radius-pill)]"
              title={tool.role}
            >
              <ToolIcon partner={tool} />
              <div className="flex flex-col leading-tight">
                <span className="text-[14px] font-bold" style={{ color: "var(--ink)" }}>
                  {tool.name}
                </span>
                <span className="text-[11.5px]" style={{ color: "var(--muted)" }}>
                  {tool.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolIcon({ partner: p }: { partner: typeof TOOLS[number] }) {
  if (p.iconKind === "icons8" && p.iconId) {
    return (
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
        style={{ background: `${p.color}14` }}
      >
        <img
          src={icons8Url(p.iconId, 96)}
          alt={`${p.name} logo`}
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
          className="object-contain"
        />
      </div>
    )
  }

  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-[18px] font-bold"
      style={{
        background: p.monogramBg,
        color: p.monogramColor,
        letterSpacing: "-0.02em",
        fontFamily: "Outfit, sans-serif",
      }}
      aria-label={`${p.name} logo`}
    >
      {p.monogram}
    </div>
  )
}

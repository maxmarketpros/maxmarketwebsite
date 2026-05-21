import { Favicon } from "@/components/about/practices/favicon"
import { SectionHeader } from "@/components/ui/section-header"
import { visibilityPlatforms } from "@/lib/roi-data"

export function VisibilityStrip() {
  return (
    <section
      aria-labelledby="visibility-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Where you show up"
          heading={
            <span id="visibility-heading">
              Every plan puts you{" "}
              <span className="accent-underline">in front of more buyers</span>.
            </span>
          }
          paragraph="One profile to maintain, eight directories your customers actually check before they call."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:gap-x-10 sm:gap-y-6">
          {visibilityPlatforms.map((p) => (
            <div
              key={p.domain}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-[var(--radius-sm)] flex items-center justify-center"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 1px 3px var(--shadow-color)",
                }}
              >
                <Favicon domain={p.domain} name={p.name} size={36} fetchSize={128} />
              </div>
              <span
                className="text-[12.5px] font-semibold"
                style={{ color: "var(--muted)" }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

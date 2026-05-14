import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { pillars } from "@/lib/practices-data"

const spanClass: Record<number, string> = {
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  7: "lg:col-span-7",
  12: "lg:col-span-12",
}

export function PracticesPillars() {
  return (
    <section
      aria-labelledby="practices-pillars-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Six things every engagement gets"
          heading={
            <span id="practices-pillars-heading">
              The standards we run every account by.
            </span>
          }
          paragraph="Whether you're on StarterMark or Signature, these six things ship with every engagement — by default, in writing, no add-ons."
        />

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={`relative card-surface card-surface-hover overflow-hidden p-7 sm:p-8 ${spanClass[p.span]}`}
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.7s ease-out ${0.05 + i * 0.05}s both`,
              }}
            >
              {/* Radial aura — bigger on featured */}
              <div
                aria-hidden
                className={`absolute pointer-events-none rounded-full ${
                  p.feature
                    ? "-top-24 -right-20 w-[320px] h-[320px]"
                    : "-top-16 -right-12 w-[220px] h-[220px]"
                }`}
                style={{
                  background: `radial-gradient(circle, ${p.accent}26 0%, ${p.accent}00 65%)`,
                }}
              />

              <div className="relative flex flex-col h-full">
                <span
                  className={`inline-flex items-center justify-center rounded-[14px] mb-5 ${
                    p.feature ? "w-14 h-14" : "w-12 h-12"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${p.accent} 0%, ${p.accent}AA 100%)`,
                    color: "#fff",
                    boxShadow: `0 8px 22px ${p.accent}44`,
                  }}
                >
                  <img
                    src={icons8Url(p.iconId, 128)}
                    alt=""
                    width={p.feature ? 32 : 28}
                    height={p.feature ? 32 : 28}
                    loading="lazy"
                    decoding="async"
                    className="invert-0"
                    style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.18))" }}
                  />
                </span>

                <h3
                  className={`font-bold leading-tight tracking-[-0.015em] ${
                    p.feature
                      ? "text-[24px] sm:text-[26px]"
                      : "text-[20px] sm:text-[22px]"
                  }`}
                  style={{ color: "var(--ink)" }}
                >
                  {p.title}
                </h3>

                <p
                  className="mt-3 leading-[1.65] flex-1"
                  style={{
                    color: "var(--muted)",
                    fontSize: p.feature ? "16px" : "15px",
                  }}
                >
                  {p.body}
                </p>

                {p.chips && p.chips.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11.5px] font-semibold"
                        style={{
                          background: `${p.accent}14`,
                          color: p.accent,
                          border: `1px solid ${p.accent}33`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: p.accent }}
                        />
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

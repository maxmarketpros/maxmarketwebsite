import { SectionHeader } from "@/components/ui/section-header"
import { toolGroups } from "@/lib/practices-data"
import { Favicon } from "./favicon"

export function PracticesToolkit() {
  return (
    <section
      aria-labelledby="practices-toolkit-heading"
      className="relative"
      style={{ background: "#FFFFFF" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="The toolkit"
          heading={
            <span id="practices-toolkit-heading">
              The tools we work in,{" "}
              <span className="accent-underline">every day</span>.
            </span>
          }
          paragraph="Every logo on this page is the actual favicon, pulled live from each tool's domain. The point: we use the platforms your business already lives on — and the ones we'd move you to."
        />

        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {toolGroups.map((g, i) => (
            <article
              key={g.label}
              className="card-surface p-6 sm:p-7 relative overflow-hidden"
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.7s ease-out ${0.1 + i * 0.08}s both`,
              }}
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-12 w-[220px] h-[220px] rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${g.accent}1F 0%, ${g.accent}00 65%)`,
                }}
              />

              <div className="relative">
                <p
                  className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.12em]"
                  style={{
                    background: `${g.accent}14`,
                    color: g.accent,
                    border: `1px solid ${g.accent}33`,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: g.accent }}
                  />
                  {g.label}
                </p>
                <p
                  className="mt-4 text-[14.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {g.summary}
                </p>

                <ul className="mt-6 grid grid-cols-4 gap-3">
                  {g.tools.map((t) => (
                    <li
                      key={t.domain}
                      className="group relative flex items-center justify-center"
                    >
                      <span
                        className="w-14 h-14 rounded-[12px] flex items-center justify-center transition-all duration-200 group-hover:-translate-y-0.5"
                        style={{
                          background: "#fff",
                          border: "1px solid var(--border-color)",
                          boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                        }}
                      >
                        <Favicon
                          domain={t.domain}
                          name={t.name}
                          iconId={t.iconId}
                          size={28}
                        />
                      </span>
                      <span
                        className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10.5px] font-semibold whitespace-nowrap rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: "var(--ink)",
                          color: "#fff",
                          zIndex: 10,
                        }}
                      >
                        {t.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p
          className="mt-10 text-center text-[13.5px]"
          style={{ color: "var(--muted)" }}
        >
          Don&rsquo;t see your stack?{" "}
          <a
            href="/contact/schedule"
            className="font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Ask us &mdash; we probably already use it.
          </a>
        </p>
      </div>
    </section>
  )
}

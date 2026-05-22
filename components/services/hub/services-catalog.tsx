import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { services } from "@/lib/site-map"

const sectionAccents: Record<string, string> = {
  "/services/seo":          "#22C55E",
  "/services/web-design":   "#1677FF",
  "/services/social-media": "#EC4899",
  "/services/paid-ads":     "#F59E0B",
}

const sectionSlugs: Record<string, string> = {
  "/services/seo":          "seo",
  "/services/web-design":   "web-design",
  "/services/social-media": "social-media",
  "/services/paid-ads":     "paid-ads",
}

export function ServicesCatalog() {
  const total = services.sections!.reduce((sum, sec) => sum + (sec.children?.length ?? 0), 0)

  return (
    <section id="services-catalog" aria-labelledby="services-catalog-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="The full catalog"
          heading={
            <>
              {total} services.{" "}
              <span className="whitespace-nowrap">
                One <span className="accent-underline">in-house</span> team.
              </span>
            </>
          }
          paragraph={"Browse every service we offer, grouped by pillar. Each one links to its own playbook page — no marketing fluff, just what we do and how we do it."}
        />

        {/* Category nav (anchor rail) */}
        <div className="mt-12 overflow-x-auto -mx-6 px-6 pb-2">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] pr-1" style={{ color: "var(--muted)" }}>
              Jump to
            </span>
            {services.sections!.map((sec) => {
              const accent = sectionAccents[sec.href] ?? "#1677FF"
              const slug = sectionSlugs[sec.href] ?? sec.label.toLowerCase()
              return (
                <a
                  key={sec.href}
                  href={`#cat-${slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    background: "var(--surface)",
                    border: `1px solid ${accent}2A`,
                    color: "var(--ink)",
                    boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                  {sec.label}
                </a>
              )
            })}
          </div>
        </div>

        {/* Category blocks */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.sections!.map((sec) => {
            const accent = sectionAccents[sec.href] ?? "#1677FF"
            const slug = sectionSlugs[sec.href] ?? sec.label.toLowerCase()
            const SectionIcon = sec.icon
            return (
              <article
                key={sec.href}
                id={`cat-${slug}`}
                className="relative card-surface overflow-hidden p-6 sm:p-7 scroll-mt-24"
              >
                {/* Side accent strip */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-[4px]"
                  style={{ background: `linear-gradient(180deg, ${accent} 0%, ${accent}66 100%)` }}
                />
                {/* Soft aura */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-6 -top-6 w-[260px] h-[180px]"
                  style={{
                    background: `radial-gradient(ellipse 70% 100% at 20% 30%, ${accent}18 0%, transparent 70%)`,
                  }}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-11 h-11 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
                      style={{
                        background: `${accent}14`,
                        boxShadow: `inset 0 0 0 1px ${accent}1A, inset 0 1px 0 rgba(255,255,255,0.6)`,
                      }}
                    >
                      <SectionIcon className="w-5 h-5" style={{ color: accent }} strokeWidth={2.1} />
                    </span>
                    <div>
                      <h3
                        className="text-[18px] sm:text-[20px] font-bold leading-tight tracking-[-0.01em]"
                        style={{ color: "var(--ink)" }}
                      >
                        {sec.label}
                      </h3>
                      <Link
                        href={sec.href}
                        className="group inline-flex items-center gap-1 mt-0.5 text-[12px] font-semibold"
                        style={{ color: accent }}
                      >
                        View all {sec.children?.length ?? 0} services
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>

                  <span
                    className="text-[10.5px] font-semibold uppercase tracking-[0.08em] px-2 py-1 rounded-full whitespace-nowrap"
                    style={{ background: `${accent}14`, color: accent }}
                  >
                    {sec.children?.length ?? 0} services
                  </span>
                </div>

                {/* Service grid */}
                <ul className="relative mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sec.children?.map((child) => {
                    const ChildIcon = child.icon
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="group flex items-start gap-3 px-3 py-2.5 rounded-[var(--radius-xs)] transition-all hover:-translate-y-0.5"
                          style={{
                            background: "var(--surface)",
                            border: "1px solid var(--border-color)",
                            boxShadow: "0 1px 2px rgba(17,35,68,0.03)",
                          }}
                        >
                          <span
                            className="w-8 h-8 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0 transition-colors"
                            style={{
                              background: `${accent}10`,
                              color: accent,
                            }}
                          >
                            <ChildIcon className="w-4 h-4" strokeWidth={2.1} />
                          </span>
                          <div className="flex-1 min-w-0">
                            <div
                              className="text-[13.5px] font-semibold leading-tight truncate"
                              style={{ color: "var(--ink)" }}
                            >
                              {child.label}
                            </div>
                            {child.description && (
                              <div
                                className="text-[11.5px] leading-snug mt-0.5 line-clamp-1"
                                style={{ color: "var(--muted)" }}
                              >
                                {child.description}
                              </div>
                            )}
                          </div>
                          <ArrowRight
                            className="w-3.5 h-3.5 mt-2 shrink-0 opacity-40 transition-all group-hover:opacity-100 group-hover:translate-x-0.5"
                            style={{ color: accent }}
                            strokeWidth={2.5}
                          />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>

        {/* Footer summary strip */}
        <div
          className="mt-12 overflow-hidden rounded-[var(--radius-xl)] p-6 sm:p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #EBF4FF 0%, #F7FAFC 50%, #FEF3C7 100%)",
            border: "1px solid var(--border-color)",
          }}
        >
          <p className="text-[15px] sm:text-[16px] font-medium max-w-[680px] mx-auto" style={{ color: "var(--ink)" }}>
            Not sure which service to start with? We&rsquo;ll audit your business for free and tell you exactly which 2&ndash;3 services will move the needle fastest.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[var(--radius-sm)] font-semibold text-[14.5px] text-white"
              style={{ background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)" }}
            >
              Get a free audit
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
            <Link href="/plans" className="text-[13.5px] font-semibold" style={{ color: "var(--accent)" }}>
              Or browse our plans &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

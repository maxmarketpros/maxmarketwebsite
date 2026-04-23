import Link from "next/link"
import { Siren, ClipboardList, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

type Row = {
  dimension: string
  emergency: string
  planned: string
}

const rows: Row[] = [
  {
    dimension: "Response window",
    emergency: "Must answer inside 12 min or the homeowner calls the next ad.",
    planned: "24\u201372 hrs to return the form \u2014 quote quality matters more than speed.",
  },
  {
    dimension: "Top channel",
    emergency: "Google call-only ads + GBP call button + AI after-hours agent.",
    planned: "SEO service-area landing pages + Meta retargeting + email drip.",
  },
  {
    dimension: "Ad angle",
    emergency: "\u2018Open now\u2019, \u201824/7\u2019, \u2018Storm response\u2019, \u2018On my way in 30\u2019.",
    planned: "\u2018Financing available\u2019, \u2018Free in-home consult\u2019, \u2018Portfolio-led\u2019.",
  },
  {
    dimension: "Close window",
    emergency: "Decision in minutes. Price, availability, reviews \u2014 in that order.",
    planned: "Decision in weeks. Trust, portfolio, reviews \u2014 often after 3 touches.",
  },
  {
    dimension: "Tech that runs it",
    emergency: "AI answer-bot, call tracking, dispatch SMS, review-ask 3h later.",
    planned: "CRM pipeline, email drip, doc signing, deposit collection, schedule-in.",
  },
]

const footerLinks = [
  { label: "AI agents", href: "/solutions/ai-agents" },
  { label: "Lead gen", href: "/solutions/lead-generation" },
  { label: "Email & SMS", href: "/solutions/email-marketing" },
  { label: "Doc signing", href: "/solutions/document-signing" },
]

export function ContEmergencyPlanned() {
  return (
    <section aria-labelledby="cont-emergency-heading" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-5%] left-[-8%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(71,85,105,0.10) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Two Operating Modes"
          heading={
            <span id="cont-emergency-heading">
              Emergency leads and planned projects{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">don&rsquo;t look the same</span>.
              </span>
            </span>
          }
          paragraph={"Every contractor runs both modes \u2014 and most marketing treats them like one. We split the funnels so each lane gets the angle, the tech, and the timing it needs."}
        />

        <article
          className="mt-12 sm:mt-14 card-surface relative overflow-hidden"
          style={{ borderRadius: "var(--radius-xl)", animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Band headers */}
          <div className="relative grid grid-cols-1 md:grid-cols-2">
            <div
              className="p-5 sm:p-6 flex items-start gap-3"
              style={{ background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)", color: "#fff" }}
            >
              <div
                className="shrink-0 w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.22)" }}
              >
                <Siren className="w-5 h-5" strokeWidth={2.3} />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Mode A
                </div>
                <div className="mt-0.5 text-[18px] sm:text-[20px] font-bold leading-tight">
                  Emergency work
                </div>
                <div className="mt-1 text-[13px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.92)" }}>
                  24/7 dispatch &mdash; burst pipe, AC down, storm damage.
                </div>
              </div>
            </div>
            <div
              className="p-5 sm:p-6 flex items-start gap-3"
              style={{ background: "linear-gradient(135deg, #475569 0%, #334155 100%)", color: "#fff" }}
            >
              <div
                className="shrink-0 w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.22)" }}
              >
                <ClipboardList className="w-5 h-5" strokeWidth={2.3} />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Mode B
                </div>
                <div className="mt-0.5 text-[18px] sm:text-[20px] font-bold leading-tight">
                  Planned work
                </div>
                <div className="mt-1 text-[13px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.92)" }}>
                  Quoted projects &mdash; remodels, roof replacements, installs.
                </div>
              </div>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="relative p-5 sm:p-7">
            <ul className="divide-y" style={{ borderColor: "var(--border-color)" }}>
              {rows.map((r) => (
                <li
                  key={r.dimension}
                  className="py-4 grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] gap-3 md:gap-5"
                  style={{ borderTop: "1px solid var(--border-color)" }}
                >
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.12em] md:pt-0.5" style={{ color: "var(--muted)" }}>
                    {r.dimension}
                  </div>
                  <div
                    className="text-[13.5px] leading-[1.55] p-3 rounded-[var(--radius-sm)]"
                    style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.18)", color: "var(--ink)" }}
                  >
                    <div className="text-[9.5px] font-bold uppercase tracking-[0.15em] mb-1 md:hidden" style={{ color: "#EF4444" }}>
                      Emergency
                    </div>
                    {r.emergency}
                  </div>
                  <div
                    className="text-[13.5px] leading-[1.55] p-3 rounded-[var(--radius-sm)]"
                    style={{ background: "rgba(71,85,105,0.07)", border: "1px solid rgba(71,85,105,0.22)", color: "var(--ink)" }}
                  >
                    <div className="text-[9.5px] font-bold uppercase tracking-[0.15em] mb-1 md:hidden" style={{ color: "#475569" }}>
                      Planned
                    </div>
                    {r.planned}
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer row */}
            <div
              className="mt-2 pt-5 text-center text-[14px] leading-[1.6]"
              style={{ borderTop: "1px solid var(--border-color)", color: "var(--muted)" }}
            >
              Most contractors run both. We tune each lane separately &mdash; and make sure the same brand voice carries across.
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group inline-flex items-center gap-1 text-[12.5px] font-semibold px-3 py-1.5 rounded-full transition-colors"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--border-color)", color: "var(--ink)" }}
                >
                  {l.label}
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

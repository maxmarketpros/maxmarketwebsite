import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { AlertTriangle, Check, ArrowRight } from "lucide-react"

type LeakRow = {
  problem: string
  problemSub: string
  fix: string
  fixSub: string
}

const leaks: LeakRow[] = [
  {
    problem: "Pixel firing, but no Conversions API",
    problemSub: "Losing 30&ndash;50% of iOS signal post-ATT",
    fix: "Server-side CAPI deployed",
    fixSub: "Stape or direct &mdash; every key event mirrored server-side",
  },
  {
    problem: "Event Match Quality below 7/10",
    problemSub: "Advantage+ flying blind on conversions",
    fix: "EMQ rebuilt to 8.5+",
    fixSub: "Hashed email, phone, and FBP/FBC parameters wired correctly",
  },
  {
    problem: "Same creative running 6+ weeks",
    problemSub: "Frequency at 5+, CPL doubling",
    fix: "4&ndash;8 fresh creatives shipped monthly",
    fixSub: "Reels + static + carousel rotated by audience cohort",
  },
  {
    problem: "No offline conversion uploads",
    problemSub: "Booked-job revenue invisible to Meta",
    fix: "CRM offline conv. piped via API",
    fixSub: "ServiceTitan / Jobber / HubSpot / Housecall Pro supported",
  },
  {
    problem: "Retargeting bleeding into prospecting",
    problemSub: "Paying $40 CPM to chase your own warm list",
    fix: "Audience exclusion tree rebuilt",
    fixSub: "Cold, mid-funnel, and warm pools cleanly separated",
  },
  {
    problem: "Lead-form leads sitting in Ads Manager",
    problemSub: "Sales team calling 4 hours late, lead is dead",
    fix: "Real-time CRM sync via Zapier or native",
    fixSub: "Every lead in your CRM and SMS-pinged in &lt; 60 seconds",
  },
  {
    problem: "Boosting posts instead of running campaigns",
    problemSub: "No optimization goal, no funnel, no objective",
    fix: "Full-funnel campaign structure",
    fixSub: "Cold prospecting, mid retargeting, and warm conversion ad sets",
  },
]

export function FacebookAdsLeakAudit() {
  return (
    <section
      id="facebook-ads-leak-audit"
      aria-labelledby="facebook-ads-leak-audit-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] right-[-8%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The free audit"
          heading={
            <span id="facebook-ads-leak-audit-heading">
              The{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">7 leaks</span>
              </span>{" "}
              we plug in your Facebook Ads account.
            </span>
          }
          paragraph="Most Meta accounts hand 30&ndash;55% of spend back to Facebook for free &mdash; broken Pixel signal, stale creative, no offline conversions. Here&rsquo;s where the money goes, and exactly what we ship in your first 30 days."
        />

        <div
          className="mt-12 sm:mt-14"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* X-ray panel */}
          <div
            className="relative overflow-hidden rounded-[var(--radius-xl)]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-color)",
              boxShadow:
                "0 1px 3px var(--shadow-color), 0 16px 40px var(--shadow-color)",
            }}
          >
            {/* Header bar */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2"
              style={{
                background:
                  "linear-gradient(180deg, #FAFBFD 0%, #F4F7FB 100%)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <div
                className="px-5 sm:px-7 py-4 flex items-center gap-3 lg:border-r"
                style={{ borderColor: "var(--border-color)" }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(239,68,68,0.12)",
                    color: "#B91C1C",
                  }}
                >
                  <AlertTriangle className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <div>
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "#B91C1C" }}
                  >
                    Your Meta account today
                  </div>
                  <div
                    className="text-[13px] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    Where the spend leaks out
                  </div>
                </div>
              </div>
              <div className="px-5 sm:px-7 py-4 flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(34,197,94,0.14)",
                    color: "#15803D",
                  }}
                >
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                <div>
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "#15803D" }}
                  >
                    After 30 days with us
                  </div>
                  <div
                    className="text-[13px] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    What we shipped
                  </div>
                </div>
              </div>
            </div>

            {/* Rows */}
            <ul
              className="divide-y"
              style={{ borderColor: "var(--border-color)" }}
            >
              {leaks.map((row, i) => (
                <li
                  key={row.problem}
                  className="grid grid-cols-1 lg:grid-cols-2 relative"
                >
                  {/* Connector dot — desktop only */}
                  <span
                    aria-hidden
                    className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #fff 0%, #F0FDF4 100%)",
                      border: "1px solid var(--border-color)",
                      boxShadow: "0 1px 3px rgba(17,35,68,0.08)",
                      color: "#15803D",
                    }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.75} />
                  </span>

                  {/* Problem column */}
                  <div
                    className="px-5 sm:px-7 py-5 flex items-start gap-3 lg:border-r"
                    style={{
                      borderColor: "var(--border-color)",
                      background:
                        "linear-gradient(90deg, rgba(239,68,68,0.05) 0%, transparent 100%)",
                    }}
                  >
                    <span
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-extrabold"
                      style={{
                        background: "rgba(239,68,68,0.12)",
                        color: "#B91C1C",
                      }}
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-[14.5px] sm:text-[15px] font-bold leading-tight"
                        style={{ color: "var(--ink)" }}
                      >
                        {row.problem}
                      </div>
                      <div
                        className="mt-1 text-[12.5px] leading-[1.4]"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: row.problemSub }}
                      />
                    </div>
                    <span
                      className="shrink-0 hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.08em]"
                      style={{
                        background: "rgba(239,68,68,0.10)",
                        color: "#B91C1C",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#EF4444" }}
                      />
                      Leak
                    </span>
                  </div>

                  {/* Fix column */}
                  <div
                    className="px-5 sm:px-7 py-5 flex items-start gap-3"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(34,197,94,0.06) 0%, transparent 100%)",
                    }}
                  >
                    <span
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(34,197,94,0.14)",
                        color: "#15803D",
                      }}
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-[14.5px] sm:text-[15px] font-bold leading-tight"
                        style={{ color: "var(--ink)" }}
                      >
                        {row.fix}
                      </div>
                      <div
                        className="mt-1 text-[12.5px] leading-[1.4]"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: row.fixSub }}
                      />
                    </div>
                    <span
                      className="shrink-0 hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-[0.08em]"
                      style={{
                        background: "rgba(34,197,94,0.14)",
                        color: "#15803D",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#22C55E" }}
                      />
                      Fixed
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Aggregate band */}
            <div
              className="px-5 sm:px-7 py-5 grid grid-cols-3 gap-3 sm:gap-6"
              style={{
                background:
                  "linear-gradient(90deg, rgba(34,197,94,0.06) 0%, rgba(24,119,242,0.06) 100%)",
                borderTop: "1px solid var(--border-color)",
              }}
            >
              {[
                { v: "30–55%", l: "Spend recovered" },
                { v: "2.6×", l: "Avg ROAS lift, 90 days" },
                { v: "$0", l: "Audit cost" },
              ].map((m) => (
                <div key={m.l} className="text-center">
                  <div
                    className="text-[18px] sm:text-[24px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{ color: "#15803D" }}
                  >
                    {m.v}
                  </div>
                  <div
                    className="text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.1em] mt-1.5"
                    style={{ color: "var(--muted)" }}
                  >
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center text-center gap-3">
            <PrimaryButton size="lg" asLink href="#contact">
              Get your free 30-min audit
            </PrimaryButton>
            <p
              className="text-[13.5px] max-w-[520px]"
              style={{ color: "var(--muted)" }}
            >
              Loom video walkthrough delivered in 3 business days. Read-only
              Meta Business Manager access only. No sales pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

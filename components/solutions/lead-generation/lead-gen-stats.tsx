import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "15693",
    number: "3×",
    title: "conversion lift when you respond to inbound leads within 1 minute.",
    source: "Harvard Business Review",
  },
  {
    iconId: "12184",
    number: "78%",
    title: "of inbound leads are never followed up on — they go to whoever calls first.",
    source: "InsideSales.com",
  },
  {
    iconId: "12208",
    number: "30%",
    title: "more deals closed by service businesses that use a dedicated CRM.",
    source: "Salesforce Research",
  },
]

export function LeadGenStats() {
  return (
    <section aria-labelledby="lead-gen-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why Lead Management Matters"
          heading={
            <span id="lead-gen-stats-heading">
              The lead you lose tonight is the job you lose{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">tomorrow.</span>
              </span>
            </span>
          }
          paragraph="Speed and follow-up are the single biggest drivers of conversion for service businesses. Here's what the data says."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {stats.map((s) => (
            <article
              key={s.number}
              className="card-surface card-surface-hover p-7 sm:p-8 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-30px] top-[-30px] w-[160px] h-[160px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(22,119,255,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <img
                  src={icons8Url(s.iconId, 128)}
                  alt=""
                  aria-hidden="true"
                  width={52}
                  height={52}
                  loading="lazy"
                  decoding="async"
                  className="w-[52px] h-[52px] object-contain"
                />

                <div
                  className="mt-5 text-[44px] sm:text-[52px] font-bold leading-none tracking-[-0.03em]"
                  style={{ color: "var(--ink)" }}
                >
                  <span className="text-gradient">{s.number}</span>
                </div>

                <p
                  className="mt-3 text-[16px] sm:text-[17px] leading-[1.5] font-medium"
                  style={{ color: "var(--ink)" }}
                >
                  {s.title}
                </p>

                <p
                  className="mt-3 text-[12.5px] uppercase tracking-[0.08em] font-semibold"
                  style={{ color: "var(--muted)" }}
                >
                  Source — {s.source}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

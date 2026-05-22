import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "12920",
    number: "59%",
    title: "faster invoice collection with text-to-pay vs. mailed paper invoices.",
    source: "Square Payments Report",
  },
  {
    iconId: "15693",
    number: "32%",
    title: "fewer no-pay invoices when auto-reminders run on a schedule.",
    source: "Intuit QuickBooks Data",
  },
  {
    iconId: "13013",
    number: "$8.2T",
    title: "in B2B transactions now flow through digital invoicing.",
    source: "Juniper Research",
  },
]

export function PaymentsStats() {
  return (
    <section aria-labelledby="payments-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why Modern Payments Matter"
          heading={
            <span id="payments-stats-heading">
              Customers pay faster when you make it{" "}
              <span className="accent-underline">
                ridiculously <span className="whitespace-nowrap">easy.</span>
              </span>
            </span>
          }
          paragraph="Paper invoices and voicemail tag are killing your cash flow. Tap-to-pay, text-to-pay, and recurring billing change the math."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {stats.map((s) => (
            <article key={s.number} className="card-surface card-surface-hover p-7 sm:p-8 relative overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute right-[-30px] top-[-30px] w-[160px] h-[160px]" style={{ background: "radial-gradient(ellipse at center, rgba(22,119,255,0.08) 0%, transparent 70%)" }} />
              <div className="relative">
                <img src={icons8Url(s.iconId, 128)} alt="" aria-hidden="true" width={52} height={52} loading="lazy" decoding="async" className="w-[52px] h-[52px] object-contain" />
                <div className="mt-5 text-[44px] sm:text-[52px] font-bold leading-none tracking-[-0.03em]" style={{ color: "var(--ink)" }}>
                  <span className="text-gradient">{s.number}</span>
                </div>
                <p className="mt-3 text-[16px] sm:text-[17px] leading-[1.5] font-medium" style={{ color: "var(--ink)" }}>{s.title}</p>
                <p className="mt-3 text-[12.5px] uppercase tracking-[0.08em] font-semibold" style={{ color: "var(--muted)" }}>Source — {s.source}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

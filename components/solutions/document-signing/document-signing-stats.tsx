import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "15693",
    number: "80%",
    title: "faster contract close time vs. print-sign-scan-return paper workflow.",
    source: "Adobe Document Cloud",
  },
  {
    iconId: "QanbId3SGVR7",
    number: "27%",
    title: "higher close rate on proposals that include a one-click e-signature.",
    source: "PandaDoc 2024 Report",
  },
  {
    iconId: "16236",
    number: "100%",
    title: "legally binding in the US (ESIGN + UETA) and EU (eIDAS) with full audit trail.",
    source: "US Federal Law",
  },
]

export function DocumentSigningStats() {
  return (
    <section aria-labelledby="doc-signing-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why E-Signatures Matter"
          heading={
            <span id="doc-signing-stats-heading">
              Paper contracts are killing your{" "}
              <span className="accent-underline">
                close <span className="whitespace-nowrap">rate.</span>
              </span>
            </span>
          }
          paragraph="Every day a contract sits on a kitchen counter waiting for a pen is a day you're not getting paid. The data is unambiguous."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {stats.map((s) => (
            <article key={s.number} className="card-surface card-surface-hover p-7 sm:p-8 relative overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute right-[-30px] top-[-30px] w-[160px] h-[160px]" style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />
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

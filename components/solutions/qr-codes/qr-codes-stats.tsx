import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "15152",
    number: "450%",
    title: "growth in QR code scanning since 2021 — and still climbing.",
    source: "Statista Digital Market Outlook",
  },
  {
    iconId: "RzakrK96dC5U",
    number: "30%",
    title: "higher engagement on branded vs. plain black-and-white QR codes.",
    source: "QR Code Tiger 2024",
  },
  {
    iconId: "107439",
    number: "60%",
    title: "of QR scans happen on print, signage, and physical product packaging.",
    source: "Bluebite Scan Data Report",
  },
]

export function QRCodesStats() {
  return (
    <section aria-labelledby="qr-codes-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why QR Codes Matter"
          heading={
            <span id="qr-codes-stats-heading">
              Offline is still where most of your{" "}
              <span className="accent-underline">
                customers <span className="whitespace-nowrap">live.</span>
              </span>
            </span>
          }
          paragraph="QR codes make print, signage, vehicle wraps, and product tags trackable — turning analog touchpoints into digital leads."
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

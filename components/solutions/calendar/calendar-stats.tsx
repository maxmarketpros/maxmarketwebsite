import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "TWgnOuDDzAih",
    number: "38%",
    title: "of customers book appointments outside of business hours.",
    source: "Weave Survey 2024",
  },
  {
    iconId: "12920",
    number: "29%",
    title: "fewer no-shows when you enable automated SMS reminders.",
    source: "GetApp Research",
  },
  {
    iconId: "15685",
    number: "2.5×",
    title: "more appointments booked by service businesses using online booking.",
    source: "Square Appointments",
  },
]

export function CalendarStats() {
  return (
    <section aria-labelledby="calendar-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why Online Booking Matters"
          heading={
            <span id="calendar-stats-heading">
              Customers don't want to call.{" "}
              <span className="accent-underline">
                They want to <span className="whitespace-nowrap">book.</span>
              </span>
            </span>
          }
          paragraph="If you require a phone call, you lose the customers who'd rather tap a button at 9:47 PM on a Tuesday."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {stats.map((s) => (
            <article key={s.number} className="card-surface card-surface-hover p-7 sm:p-8 relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-30px] top-[-30px] w-[160px] h-[160px]"
                style={{ background: "radial-gradient(ellipse at center, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
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
                <div className="mt-5 text-[44px] sm:text-[52px] font-bold leading-none tracking-[-0.03em]" style={{ color: "var(--ink)" }}>
                  <span className="text-gradient">{s.number}</span>
                </div>
                <p className="mt-3 text-[16px] sm:text-[17px] leading-[1.5] font-medium" style={{ color: "var(--ink)" }}>
                  {s.title}
                </p>
                <p className="mt-3 text-[12.5px] uppercase tracking-[0.08em] font-semibold" style={{ color: "var(--muted)" }}>
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

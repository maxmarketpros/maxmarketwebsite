import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

const stats = [
  {
    iconId: "L3uh0mNuxBXw",
    number: "67%",
    title: "of consumers prefer self-service over speaking to a human for basic questions.",
    source: "Zendesk CX Trends",
  },
  {
    iconId: "114322",
    number: "80%+",
    title: "of common customer questions can be resolved by a well-trained AI agent.",
    source: "Gartner Research",
  },
  {
    iconId: "TWgnOuDDzAih",
    number: "3×",
    title: "more conversions at night-time when a 24/7 assistant is answering.",
    source: "Drift Conversational Benchmarks",
  },
]

export function AIAgentsStats() {
  return (
    <section aria-labelledby="ai-agents-stats-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="Why AI Agents Matter"
          heading={
            <span id="ai-agents-stats-heading">
              Your customers are ready to{" "}
              <span className="accent-underline">
                self-<span className="whitespace-nowrap">serve.</span>
              </span>
            </span>
          }
          paragraph="AI isn't a replacement for your team — it's the difference between answering at 11PM and missing the lead altogether."
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

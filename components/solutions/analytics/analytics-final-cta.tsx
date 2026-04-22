import { icons8Url } from "@/lib/icons8"
import { ArrowRight } from "lucide-react"

const relatedLinks = [
  { href: "/solutions/lead-generation", label: "Lead Generation" },
  { href: "/solutions/qr-codes", label: "QR Codes" },
  { href: "/solutions/task-management", label: "Task Automation" },
  { href: "/services/paid-ads", label: "Paid Ads" },
  { href: "/services/seo", label: "SEO" },
]

export function AnalyticsFinalCta() {
  return (
    <section aria-labelledby="analytics-final-cta-heading" className="relative">
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden text-center"
          style={{
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(135deg, #1677FF 0%, #2B8AFF 45%, #74D3FF 100%)",
            boxShadow: "0 10px 30px rgba(22,119,255,0.25), 0 30px 80px rgba(22,119,255,0.22)",
          }}
        >
          <div aria-hidden className="pointer-events-none absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 60%)" }} />
          <div aria-hidden className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(11,19,43,0.22) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
            <img src={icons8Url("12184", 256)} alt="Analytics chart illustration" width={110} height={110} className="mx-auto w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] object-contain drop-shadow-[0_16px_32px_rgba(11,19,43,0.25)]" />

            <h2 id="analytics-final-cta-heading" className="mt-6 text-[32px] sm:text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white">
              Know exactly what's{" "}
              <span className="whitespace-nowrap">working.</span>
            </h2>
            <p className="mt-5 text-[17px] sm:text-[19px] leading-[1.6] max-w-[620px] mx-auto" style={{ color: "rgba(255,255,255,0.88)" }}>
              Book a free analytics audit. We'll check your current GA4 setup, fix what's broken, and build you a dashboard that actually tracks leads and revenue.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]" style={{ color: "var(--accent)" }}>
                Request a free analytics audit
              </a>
              <a href="/plans/localmark" className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border-2 hover:bg-white/10 transition-colors" style={{ borderColor: "rgba(255,255,255,0.35)" }}>
                See the LocalMark Plan
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </div>

            <div className="mt-10 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
              <div className="text-[12.5px] font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Also explore</div>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {relatedLinks.map((r) => (
                  <a key={r.href} href={r.href} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[14px] font-semibold text-white bg-white/10 hover:bg-white/20 border transition-colors" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
                    {r.label}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

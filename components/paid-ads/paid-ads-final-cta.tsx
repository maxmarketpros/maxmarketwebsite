import { icons8Url } from "@/lib/icons8"
import { ArrowRight, TrendingUp, Target } from "lucide-react"

const relatedServices = [
  { href: "/services/seo", label: "SEO" },
  { href: "/services/web-design", label: "Web Design" },
  { href: "/services/social-media", label: "Social Media" },
]

const platformLogos = [
  { id: "ui4CTPMMDCFh", name: "Google Ads" },
  { id: "118497", name: "Facebook" },
  { id: "32323", name: "Instagram" },
]

export function PaidAdsFinalCta() {
  return (
    <section
      aria-labelledby="paid-ads-final-cta-heading"
      className="relative"
    >
      <div className="section-container pb-20 sm:pb-24 lg:pb-28">
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, #4285F4 0%, #1877F2 40%, #E1306C 80%, #FF0000 100%)",
            boxShadow:
              "0 10px 30px rgba(66,133,244,0.25), 0 30px 80px rgba(225,48,108,0.22)",
          }}
        >
          {/* decorative glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(11,19,43,0.28) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-center px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
            {/* Left: copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11.5px] sm:text-[12.5px] font-semibold uppercase tracking-[0.12em] text-white"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <Target className="w-3 h-3" strokeWidth={2.5} />
                Ready when you are
              </div>

              <h2
                id="paid-ads-final-cta-heading"
                className="mt-5 text-[30px] sm:text-[40px] lg:text-[50px] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-white"
              >
                Ready to turn clicks into customers?
              </h2>

              <p
                className="mt-5 text-[16px] sm:text-[18px] leading-[1.6] max-w-[520px]"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                Book a free 30-minute ad audit. We'll look at your current
                spend, show you where you're leaking budget, and forecast a
                realistic ROAS for the next 90 days — no pressure, no pitch
                deck.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-[var(--radius-sm)] font-semibold text-[15px] sm:text-[17px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_1px_2px_rgba(17,35,68,0.1),0_8px_24px_rgba(11,19,43,0.18)]"
                  style={{ color: "#1877F2" }}
                >
                  Book a free ad audit
                </a>
                <a
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white border-2 hover:bg-white/10 transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.35)" }}
                >
                  See pricing
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>

              <div
                className="mt-10 pt-8 border-t"
                style={{ borderColor: "rgba(255,255,255,0.18)" }}
              >
                <div
                  className="text-[12.5px] font-semibold uppercase tracking-[0.1em] mb-4"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Also explore
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {relatedServices.map((r) => (
                    <a
                      key={r.href}
                      href={r.href}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[14px] font-semibold text-white bg-white/10 hover:bg-white/20 border transition-colors"
                      style={{ borderColor: "rgba(255,255,255,0.25)" }}
                    >
                      {r.label}
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: mini dashboard mockup */}
            <div className="flex justify-center lg:justify-end">
              <MiniDashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MiniDashboardMockup() {
  return (
    <div
      className="relative w-full max-w-[320px] sm:max-w-[360px] rounded-[var(--radius-lg)] p-4 sm:p-5"
      style={{
        background: "rgba(255,255,255,0.98)",
        boxShadow:
          "0 20px 60px rgba(11,19,43,0.35), 0 4px 12px rgba(11,19,43,0.18)",
        border: "1px solid rgba(255,255,255,0.9)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-[var(--radius-xs)] flex items-center justify-center"
            style={{ background: "#10B98114", color: "#10B981" }}
          >
            <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
          </div>
          <div>
            <div
              className="text-[12px] font-bold leading-tight"
              style={{ color: "#0B132B" }}
            >
              Campaign: Live
            </div>
            <div
              className="text-[10px] font-medium"
              style={{ color: "#5B6B84" }}
            >
              Updated 2 min ago
            </div>
          </div>
        </div>
        <div
          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold"
          style={{ background: "#10B98114", color: "#10B981" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#10B981" }}
          />
          Healthy
        </div>
      </div>

      {/* Giant ROAS badge */}
      <div
        className="mt-4 p-4 rounded-[var(--radius-md)] border flex items-center gap-4"
        style={{
          background:
            "linear-gradient(135deg, #10B98114 0%, #F59E0B0D 100%)",
          borderColor: "#DCE6F2",
        }}
      >
        <div>
          <div
            className="text-[10.5px] font-semibold uppercase tracking-[0.1em]"
            style={{ color: "#5B6B84" }}
          >
            ROAS (30d)
          </div>
          <div
            className="mt-1 text-[30px] font-bold leading-none tracking-[-0.02em]"
            style={{ color: "#0B132B" }}
          >
            4.64×
          </div>
        </div>
        <div
          className="ml-auto inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold"
          style={{ background: "#10B98114", color: "#10B981" }}
        >
          <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
          +312%
        </div>
      </div>

      {/* Mini stat row */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div
          className="p-2.5 rounded-[var(--radius-sm)] border"
          style={{ background: "#F7FAFC", borderColor: "#DCE6F2" }}
        >
          <div
            className="text-[9px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: "#5B6B84" }}
          >
            Spend
          </div>
          <div
            className="mt-0.5 text-[15px] font-bold leading-none"
            style={{ color: "#0B132B" }}
          >
            $4,280
          </div>
        </div>
        <div
          className="p-2.5 rounded-[var(--radius-sm)] border"
          style={{ background: "#F7FAFC", borderColor: "#DCE6F2" }}
        >
          <div
            className="text-[9px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: "#5B6B84" }}
          >
            Revenue
          </div>
          <div
            className="mt-0.5 text-[15px] font-bold leading-none"
            style={{ color: "#10B981" }}
          >
            $19,850
          </div>
        </div>
      </div>

      {/* Platforms dock */}
      <div
        className="mt-3 px-3 py-2 rounded-full flex items-center justify-between gap-2 border"
        style={{ background: "#F7FAFC", borderColor: "#DCE6F2" }}
      >
        <div className="flex items-center gap-2">
          {platformLogos.map((p) => (
            <img
              key={p.id}
              src={icons8Url(p.id, 48)}
              alt={p.name}
              width={18}
              height={18}
              loading="lazy"
              decoding="async"
              className="w-[18px] h-[18px] object-contain"
            />
          ))}
        </div>
        <div
          className="text-[10.5px] font-semibold"
          style={{ color: "#5B6B84" }}
        >
          3 platforms · 5 campaigns
        </div>
      </div>
    </div>
  )
}

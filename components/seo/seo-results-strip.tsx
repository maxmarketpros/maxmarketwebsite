import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import { TrendingUp } from "lucide-react"

const results = [
  { number: "3.2x", label: "average organic traffic lift" },
  { number: "Top 3", label: "rankings within 90 days" },
  { number: "120+", label: "keywords ranked per client" },
  { number: "7.5x", label: "average ROI on SEO spend" },
]

export function SeoResultsStrip() {
  return (
    <section
      id="seo-results"
      aria-labelledby="seo-results-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.35) 0%, rgba(22,119,255,0.08) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.22) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="section-container relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-12 items-center">
          <div>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em]"
              style={{
                background: "rgba(22,119,255,0.15)",
                borderColor: "rgba(116,211,255,0.28)",
                color: "var(--cyan)",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Proven Results
            </span>

            <h2
              id="seo-results-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[52px] font-bold leading-[1.08] tracking-[-0.025em] text-balance text-white"
            >
              Real rankings.{" "}
              <span className="text-gradient">Real revenue.</span>
              <br />
              Real clients you can call.
            </h2>

            <p
              className="mt-5 text-[16px] sm:text-[18px] leading-[1.65] max-w-[560px]"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              We measure SEO the only way that matters: booked jobs and revenue
              your business can actually see in the bank.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 max-w-[640px]">
              {results.map((r) => (
                <div
                  key={r.label}
                  className="border-l pl-4"
                  style={{ borderColor: "rgba(255,255,255,0.18)" }}
                >
                  <div
                    className="text-[32px] sm:text-[36px] font-bold leading-none tracking-[-0.02em]"
                    style={{ color: "var(--cyan)" }}
                  >
                    {r.number}
                  </div>
                  <div
                    className="mt-2 text-[13px] leading-[1.4]"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {r.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <PrimaryButton size="lg" asLink href="#contact">
                Get your free ranking report
              </PrimaryButton>
            </div>
          </div>

          {/* Trophy illustration */}
          <div className="hidden lg:block justify-self-end">
            <div
              className="relative w-[280px] h-[280px] rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(22,119,255,0.25) 0%, rgba(22,119,255,0.05) 50%, transparent 75%)",
              }}
            >
              <img
                src={icons8Url("16951", 256)}
                alt="SEO results trophy"
                width={220}
                height={220}
                className="w-[220px] h-[220px] object-contain drop-shadow-[0_24px_60px_rgba(22,119,255,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

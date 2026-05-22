import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"

const tiles = [
  {
    iconId: "18911",
    label: "Marketing Blog",
    sub: "Playbooks & benchmarks",
    href: "/resources/blog",
    tint: "rgba(22,119,255,0.10)",
  },
  {
    iconId: "16951",
    label: "Case Studies",
    sub: "Real client results",
    href: "/resources/case-studies",
    tint: "rgba(245,158,11,0.10)",
  },
  {
    iconId: "12780",
    label: "ROI Calculator",
    sub: "Break-even in seconds",
    href: "/resources/roi-calculator",
    tint: "rgba(34,197,94,0.10)",
  },
  {
    iconId: "13558",
    label: "FAQ",
    sub: "40 answers, fast",
    href: "/resources/faq",
    tint: "rgba(116,211,255,0.14)",
  },
]

export function ResourcesHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] sm:w-[900px] sm:h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.18) 0%, rgba(22,119,255,0.06) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[25%] right-[8%] w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.15) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-10 sm:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left — Content */}
          <div
            className="lg:col-span-6 max-w-[600px]"
            style={{ animation: "fadeInUp 0.8s ease-out both" }}
          >
            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Resources Hub</span>
            </Pill>

            <h1
              className="mt-6 text-[42px] xs:text-[46px] sm:text-[54px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Everything we{" "}
              <span className="accent-underline">know</span> about growing
              service businesses.
            </h1>

            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[520px]"
              style={{ color: "var(--muted)" }}
            >
              Marketing playbooks, real client case studies, an ROI
              calculator, and 40 plain-English answers — all in one place,
              built for owners who'd rather get more booked jobs than read
              another fluff article.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="/contact/schedule">
                Get a free strategy call
              </PrimaryButton>
              <SecondaryButton asLink href="/resources/roi-calculator">
                Use the ROI calculator
              </SecondaryButton>
            </div>
          </div>

          {/* Right — Preview tile bento */}
          <div
            className="lg:col-span-6"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-[560px] lg:ml-auto">
              {tiles.map((t, i) => (
                <Link
                  key={t.label}
                  href={t.href}
                  className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6 block group"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${0.18 + i * 0.08}s both`,
                  }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-0 w-[70%] h-[70%]"
                    style={{
                      background: `radial-gradient(ellipse 80% 100% at 75% 25%, ${t.tint} 0%, transparent 70%)`,
                    }}
                  />
                  <div className="relative">
                    <img
                      src={icons8Url(t.iconId, 128)}
                      alt=""
                      width={44}
                      height={44}
                      loading="lazy"
                      decoding="async"
                      className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] object-contain"
                    />
                    <div
                      className="mt-4 text-[15px] sm:text-[16px] font-semibold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {t.label}
                    </div>
                    <div
                      className="mt-1 text-[12.5px] sm:text-[13px] leading-snug"
                      style={{ color: "var(--muted)" }}
                    >
                      {t.sub}
                    </div>
                    <div
                      className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.06em] transition-transform group-hover:translate-x-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      Explore
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

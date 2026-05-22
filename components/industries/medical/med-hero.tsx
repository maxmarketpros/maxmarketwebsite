import { HeartPulse, ShieldCheck, Calendar, Sparkles } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"

const trustChips = [
  { Icon: ShieldCheck, label: "HIPAA-aware intake" },
  { Icon: Calendar,    label: "24/7 consult booking" },
  { Icon: Sparkles,    label: "Before/After-safe ads" },
]

type Chip = { id: string; label: string; top: string; left: string; delay: string; size?: number }

const chips: Chip[] = [
  { id: "xw4jzVybHk9z", label: "Botox",            top: "6%",  left: "8%",  delay: "0.05s" },
  { id: "40231",        label: "Lip Filler",       top: "2%",  left: "54%", delay: "0.12s" },
  { id: "14868",        label: "Invisalign",       top: "22%", left: "72%", delay: "0.18s" },
  { id: "3AuIQ5jPt28G", label: "IV Drip",          top: "18%", left: "2%",  delay: "0.22s" },
  { id: "sm38rlKXiLSn", label: "GLP-1",            top: "44%", left: "2%",  delay: "0.28s" },
  { id: "MuQfy47ptidH", label: "Microneedling",    top: "42%", left: "72%", delay: "0.32s" },
  { id: "12289",        label: "Laser Hair",       top: "64%", left: "4%",  delay: "0.38s" },
  { id: "ZIiKmAjYlK4S", label: "Chiropractic",     top: "64%", left: "66%", delay: "0.42s" },
  { id: "86rLulV0srkZ", label: "Skin Tightening",  top: "82%", left: "20%", delay: "0.48s" },
  { id: "23042",        label: "CoolSculpting",    top: "84%", left: "56%", delay: "0.54s" },
  { id: "78394",        label: "HRT",              top: "4%",  left: "30%", delay: "0.58s" },
]

export function MedHero() {
  return (
    <section aria-labelledby="med-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] sm:w-[900px] sm:h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(244,63,94,0.16) 0%, rgba(244,63,94,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[20%] right-[5%] w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(253,164,175,0.18) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="max-w-[600px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <Pill>
              <HeartPulse className="w-3.5 h-3.5" strokeWidth={2.4} />
              Medical
            </Pill>

            <h1
              id="med-hero-heading"
              className="mt-6 text-[42px] xs:text-[46px] sm:text-[54px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Med spa marketing that{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">fills your calendar</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[520px]" style={{ color: "var(--muted)" }}>
              HIPAA-aware lead capture, consult-booking funnels, compliant ad campaigns, and AI follow-up for med spas, dermatology, dental, chiropractic, and wellness clinics — one stack, top to bottom.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a growth consult
              </PrimaryButton>
              <SecondaryButton asLink href="#med-solutions">
                See our medical stack
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {trustChips.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Icon className="w-4 h-4" style={{ color: "#F43F5E" }} strokeWidth={2.2} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — treatment chip constellation */}
          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.12s both" }}>
            <div
              className="card-surface relative overflow-hidden p-5 sm:p-7"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 75% at 75% 25%, rgba(244,63,94,0.16) 0%, transparent 65%), radial-gradient(ellipse 75% 60% at 20% 85%, rgba(245,158,11,0.12) 0%, transparent 65%)",
                }}
              />

              {/* Desktop: absolute-positioned chip constellation */}
              <div className="relative hidden md:block" style={{ minHeight: "440px" }}>
                {/* central "your practice" chip */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2.5 rounded-full text-[14px] font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #F43F5E 0%, #EC4899 100%)",
                    color: "#fff",
                    boxShadow: "0 10px 30px rgba(244,63,94,0.35), 0 0 0 6px rgba(253,164,175,0.25)",
                    animation: "fadeInUp 0.8s ease-out 0.35s both",
                  }}
                >
                  <Sparkles className="w-4 h-4" strokeWidth={2.4} />
                  Your practice
                </div>

                {chips.map((c) => (
                  <div
                    key={c.label}
                    className="absolute flex items-center gap-1.5 pl-1.5 pr-3 py-1.5 rounded-full"
                    style={{
                      top: c.top,
                      left: c.left,
                      background: "rgba(255,255,255,0.85)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid var(--border-color)",
                      boxShadow: "0 4px 12px rgba(11,19,43,0.06)",
                      animation: `fadeInUp 0.7s ease-out ${c.delay} both`,
                    }}
                  >
                    <img
                      src={icons8Url(c.id, 64)}
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                      loading="eager"
                    />
                    <span className="text-[12px] font-semibold whitespace-nowrap" style={{ color: "var(--ink)" }}>
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile: tidy 2-column grid */}
              <div className="relative md:hidden grid grid-cols-2 gap-2.5">
                <div
                  className="col-span-2 flex items-center justify-center gap-2 px-4 py-3 rounded-full text-[14px] font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #F43F5E 0%, #EC4899 100%)",
                    color: "#fff",
                    boxShadow: "0 8px 24px rgba(244,63,94,0.3)",
                  }}
                >
                  <Sparkles className="w-4 h-4" strokeWidth={2.4} />
                  Your practice
                </div>
                {chips.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-1.5 pl-1.5 pr-2.5 py-1.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: "1px solid var(--border-color)",
                      boxShadow: "0 3px 10px rgba(11,19,43,0.05)",
                    }}
                  >
                    <img
                      src={icons8Url(c.id, 64)}
                      alt=""
                      width={22}
                      height={22}
                      className="w-[22px] h-[22px]"
                      loading="eager"
                    />
                    <span className="text-[11.5px] font-semibold whitespace-nowrap" style={{ color: "var(--ink)" }}>
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

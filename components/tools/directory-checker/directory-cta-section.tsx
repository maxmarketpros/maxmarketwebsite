import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"

const BENEFITS = [
  "Corrects wrong, missing, and duplicate listings everywhere",
  "Syncs name, address, phone, and hours across 70+ sources",
  "Monitors changes so rogue edits get reverted automatically",
  "Real reporting — see exactly what we fixed and where",
]

export function DirectoryCtaSection() {
  return (
    <section
      aria-labelledby="directory-cta-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.16) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.16) 0%, transparent 65%), var(--bg)",
      }}
    >
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="section-container relative z-10 section-y">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center">
          {/* LEFT — pitch */}
          <div>
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(22,119,255,0.30)",
                color: "var(--accent)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Listings Management
            </span>
            <h2
              id="directory-cta-heading"
              className="mt-5 text-[34px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Listings broken? We can{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, rgba(22,119,255,0.30) 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                fix them all in 24 hours
              </span>
              .
            </h2>
            <p
              className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.6] max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              Our Listings Management plan corrects, syncs, and protects your
              business info across every directory in your scan &mdash;
              automatically. No more chasing down old phone numbers on Yelp at
              midnight.
            </p>
            <ul className="mt-6 space-y-2.5">
              {BENEFITS.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-[14.5px]"
                  style={{ color: "var(--ink)" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: "var(--accent-bg)",
                      color: "var(--accent)",
                    }}
                  >
                    <CheckCircle className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — CTA card */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 pointer-events-none"
              style={{
                background:
                  "radial-gradient(80% 70% at 50% 30%, rgba(22,119,255,0.22) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <div
              className="relative p-[1.5px]"
              style={{
                borderRadius: "var(--radius-xl)",
                background:
                  "linear-gradient(140deg, rgba(22,119,255,0.55) 0%, rgba(116,211,255,0.40) 40%, rgba(220,230,242,0.40) 100%)",
                boxShadow:
                  "0 4px 14px rgba(17,35,68,0.10), 0 30px 80px rgba(22,119,255,0.18)",
              }}
            >
              <div
                className="relative overflow-hidden p-8 sm:p-10"
                style={{
                  borderRadius: "calc(var(--radius-xl) - 2px)",
                  background: "var(--surface)",
                }}
              >
                <h3
                  className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  Talk to a strategist about your scan results.
                </h3>
                <p
                  className="mt-2 text-[14.5px] leading-[1.6]"
                  style={{ color: "var(--muted)" }}
                >
                  20-minute call with a senior strategist. We&rsquo;ll walk
                  through what&rsquo;s broken, what to fix first, and what it
                  would cost to put it on autopilot.
                </p>

                <PrimaryButton
                  asLink
                  href="/contact/schedule"
                  size="lg"
                  className="w-full mt-6"
                >
                  Book a free call
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.75} />
                </PrimaryButton>

                <a
                  href="/services/seo/local"
                  className="mt-4 inline-flex items-center justify-center w-full text-[14px] font-semibold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Or see our Local SEO services
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" strokeWidth={2.5} />
                </a>

                <p
                  className="mt-4 text-center text-[12px] leading-[1.5]"
                  style={{ color: "var(--muted)" }}
                >
                  No sales pitch. Real strategist, not a closer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

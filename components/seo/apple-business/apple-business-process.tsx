import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

type Step = {
  when: string
  title: string
  body: string
  tag: string
}

const steps: Step[] = [
  {
    when: "Week 1",
    title: "Claim & verify",
    body: "We claim or re-claim your Apple Business location and pass verification — even if it migrated from old Business Connect.",
    tag: "Setup",
  },
  {
    when: "Week 1–2",
    title: "Optimize the profile",
    body: "Every field filled, plus NAP reconciled across Google, Yelp, and Tripadvisor so Apple trusts your data.",
    tag: "Optimize",
  },
  {
    when: "Week 2",
    title: "Showcases & Actions",
    body: "We publish your first Showcases and wire one-tap Book / Order / Reserve actions to your tools with UTM tracking.",
    tag: "Activate",
  },
  {
    when: "Week 3+",
    title: "Launch Maps Ads",
    body: "When ads are live in your market, we launch and tune campaigns to your cost-per-lead and reserve the top spot.",
    tag: "Launch",
  },
  {
    when: "Monthly",
    title: "Insights & reporting",
    body: "A monthly report from Apple's Location Insights — searches, views, direction taps, calls, and action conversions.",
    tag: "Measure",
  },
]

export function AppleBusinessProcess() {
  return (
    <section
      aria-labelledby="apple-business-process-heading"
      className="relative"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="How we run it"
          heading={
            <span id="apple-business-process-heading">
              From unclaimed to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">first on the map</span>
              </span>{" "}
              — done for you.
            </span>
          }
          paragraph="A transparent, fixed schedule so you always know what we're doing on your behalf and when. No dashboards to learn, no Apple paperwork to wrestle with."
        />

        <div className="mt-14 relative">
          {/* Connecting rail (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[3px] rounded-full z-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(116,211,255,0.7) 0%, rgba(22,119,255,0.9) 60%, rgba(22,119,255,0.7) 100%)",
            }}
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 relative items-stretch">
            {steps.map((s, idx) => (
              <li
                key={s.title}
                className="relative flex flex-col"
                style={{ animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both` }}
              >
                <div className="flex items-center justify-center relative z-10">
                  <div
                    className="relative w-[48px] h-[48px] rounded-full flex items-center justify-center z-10"
                    style={{
                      background:
                        idx === steps.length - 1
                          ? "linear-gradient(180deg, #16A34A 0%, #15803D 100%)"
                          : "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                      color: "#fff",
                      boxShadow:
                        idx === steps.length - 1
                          ? "0 4px 14px rgba(22,163,74,0.35)"
                          : "0 4px 14px rgba(22,119,255,0.35)",
                      border: "4px solid #fff",
                    }}
                  >
                    <span className="text-[14px] font-extrabold">{idx + 1}</span>
                  </div>
                </div>

                <div
                  className="mt-4 card-surface card-surface-hover p-5 relative flex-1"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
                      style={{ color: "var(--accent)" }}
                    >
                      {s.when}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded-md"
                      style={{
                        background: "rgba(22,119,255,0.08)",
                        color: "var(--accent)",
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    className="mt-2 text-[16px] font-bold leading-[1.25]"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-[13.5px] leading-[1.55]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Start with a free audit
          </PrimaryButton>
          <SecondaryButton asLink href="#apple-business-faq">
            Have questions first?
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

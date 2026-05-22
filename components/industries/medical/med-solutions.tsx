import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"

type Solution = {
  key: string
  name: string
  accent: string
  icons8Id: string
  pitch: string
  chips: string[]
  href: string
}

type Phase = {
  key: string
  label: string
  pillColor: string
  solutions: Solution[]
}

const phases: Phase[] = [
  {
    key: "intake",
    label: "Phase 1 \u00B7 Intake",
    pillColor: "#1677FF",
    solutions: [
      {
        key: "lead-gen",
        name: "Lead Generation",
        accent: "#1677FF",
        icons8Id: "12144",
        pitch: "Text a lead back in 5 seconds when they DM you from a Reel. Unified inbox across web, IG, and GBP.",
        chips: ["Missed-call text-back", "Unified inbox", "Web forms"],
        href: "/solutions/lead-generation",
      },
      {
        key: "ai-agents",
        name: "AI Chat & Voice",
        accent: "#1677FF",
        icons8Id: "59023",
        pitch: "A 24/7 front-desk agent that qualifies, books, and escalates \u2014 without violating scope-of-practice rules.",
        chips: ["After-hours receptionist", "Books consults", "Qualifies leads"],
        href: "/solutions/ai-agents",
      },
      {
        key: "calendar",
        name: "Calendar & Booking",
        accent: "#1677FF",
        icons8Id: "12776",
        pitch: "Online consult booking with deposits, SMS reminders, and Google/Outlook sync for every provider.",
        chips: ["Deposits", "SMS reminders", "Provider sync"],
        href: "/solutions/calendar",
      },
    ],
  },
  {
    key: "visit",
    label: "Phase 2 \u00B7 Visit",
    pillColor: "#4F46E5",
    solutions: [
      {
        key: "docs",
        name: "Document Signing",
        accent: "#4F46E5",
        icons8Id: "107203",
        pitch: "HIPAA-aware consent, intake, and telehealth documents \u2014 signed before the patient walks in.",
        chips: ["Consent", "Intake", "Telehealth"],
        href: "/solutions/document-signing",
      },
      {
        key: "payments",
        name: "Payments",
        accent: "#4F46E5",
        icons8Id: "78394",
        pitch: "Memberships, deposits on booking, no-show fees, and package pricing. Stripe-native, ACH-ready.",
        chips: ["Memberships", "Deposits", "No-show fees"],
        href: "/solutions/payments",
      },
    ],
  },
  {
    key: "retention",
    label: "Phase 3 \u00B7 Retention",
    pillColor: "#0F766E",
    solutions: [
      {
        key: "email",
        name: "Email & SMS Marketing",
        accent: "#0F766E",
        icons8Id: "71474",
        pitch: "90-day rebook cadences, seasonal campaigns, win-backs, and membership onboarding flows.",
        chips: ["Rebook cadences", "Seasonal promos", "Win-backs"],
        href: "/solutions/email-marketing",
      },
      {
        key: "analytics",
        name: "Analytics & Call Tracking",
        accent: "#0F766E",
        icons8Id: "SROvvC91x7DL",
        pitch: "Source-specific numbers, GA4 attribution, Looker dashboards showing booked consults \u2014 not vanity traffic.",
        chips: ["Call tracking", "GA4", "Weekly reports"],
        href: "/solutions/analytics",
      },
    ],
  },
]

const alsoHelpful: { label: string; href: string; reason: string }[] = [
  { label: "QR Codes",        href: "/solutions/qr-codes",        reason: "in-room feedback cards that skip straight to the 5-star flow" },
  { label: "Task Management", href: "/solutions/task-management", reason: "treatment-room prep checklists and provider handoffs" },
  { label: "Custom Web Apps", href: "/solutions/custom-web-apps", reason: "bespoke membership portals and intake flows" },
]

export function MedSolutions() {
  return (
    <section
      id="med-solutions"
      aria-labelledby="med-solutions-heading"
      className="relative scroll-mt-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-5%] right-[-8%] w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(15,118,110,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Operations Stack"
          heading={
            <span id="med-solutions-heading">
              One{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">continuous patient loop</span>.
              </span>
            </span>
          }
          paragraph="Intake, visit, retention. Seven solutions built into one stack so every consult gets captured, every visit gets compliant paperwork, and every patient has a reason to come back."
        />

        <div
          className="mt-12 sm:mt-14 card-surface relative overflow-hidden p-6 sm:p-8 lg:p-10"
          style={{ borderRadius: "28px", animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 15% 10%, rgba(22,119,255,0.10) 0%, transparent 65%), radial-gradient(ellipse 70% 50% at 85% 90%, rgba(15,118,110,0.10) 0%, transparent 65%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {phases.map((phase, pIdx) => (
              <div key={phase.key} className="relative">
                {/* phase label */}
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex items-center text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                    style={{ background: `${phase.pillColor}14`, color: phase.pillColor, border: `1px solid ${phase.pillColor}2E` }}
                  >
                    {phase.label}
                  </span>
                  {pIdx < phases.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden lg:block flex-1 h-[2px]"
                      style={{
                        background: `repeating-linear-gradient(90deg, ${phase.pillColor}44 0 6px, transparent 6px 12px)`,
                      }}
                    />
                  )}
                </div>

                <div className="mt-4 space-y-4">
                  {phase.solutions.map((s) => (
                    <div
                      key={s.key}
                      className="relative overflow-hidden rounded-[var(--radius-md)] p-4"
                      style={{
                        background: "var(--bg)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{ background: `radial-gradient(ellipse 70% 50% at 15% 10%, ${s.accent}14 0%, transparent 70%)` }}
                      />

                      <div className="relative flex items-start gap-3">
                        <div
                          className="shrink-0 rounded-[var(--radius-sm)] p-1.5 flex items-center justify-center"
                          style={{ background: `${s.accent}12`, border: `1px solid ${s.accent}2E` }}
                        >
                          <img
                            src={icons8Url(s.icons8Id, 112)}
                            alt=""
                            width={40}
                            height={40}
                            className="w-10 h-10"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[16px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
                            {s.name}
                          </h4>
                          <p className="mt-1.5 text-[13px] leading-[1.5]" style={{ color: "var(--muted)" }}>
                            {s.pitch}
                          </p>
                        </div>
                      </div>

                      <div className="relative mt-3 flex flex-wrap gap-1.5">
                        {s.chips.map((c) => (
                          <span
                            key={c}
                            className="inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full"
                            style={{ background: `${s.accent}0F`, color: s.accent }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={s.href}
                        className="group relative mt-3 inline-flex items-center gap-1 text-[12.5px] font-semibold"
                        style={{ color: s.accent }}
                      >
                        Open {s.name.toLowerCase()}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px]">
          <span className="font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }}>
            Also helpful for practices:
          </span>
          {alsoHelpful.map((item, i) => (
            <span key={item.href} className="inline-flex items-center gap-2">
              <Link
                href={item.href}
                className="font-semibold underline decoration-dotted underline-offset-4"
                style={{ color: "var(--ink)" }}
              >
                {item.label}
              </Link>
              <span style={{ color: "var(--muted)" }}>&mdash; {item.reason}</span>
              {i < alsoHelpful.length - 1 && (
                <span aria-hidden style={{ color: "var(--border-color)" }}>
                  &middot;
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

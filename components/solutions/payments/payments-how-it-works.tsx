import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { FileText, Smartphone, Receipt, Landmark, Check, ArrowRight } from "lucide-react"

type Step = {
  step: number
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  color: string
  title: string
  time: string
  caption: string
}

const steps: Step[] = [
  {
    step: 1,
    icon: FileText,
    color: "#1677FF",
    title: "Send the invoice",
    time: "< 60 seconds",
    caption: "Create a branded invoice from an estimate, a job, or scratch. Send it via SMS, email, or both.",
  },
  {
    step: 2,
    icon: Smartphone,
    color: "#22C55E",
    title: "Customer taps to pay",
    time: "~ 30 seconds",
    caption: "They get a text with a 'Pay Now' link, tap once, and pay with Apple Pay, card, or ACH.",
  },
  {
    step: 3,
    icon: Receipt,
    color: "#F59E0B",
    title: "Auto receipt & CRM update",
    time: "Instant",
    caption: "Receipt fires automatically. Job record marks paid. Rep gets a notification. No manual entry.",
  },
  {
    step: 4,
    icon: Landmark,
    color: "#8B5CF6",
    title: "Money in your bank",
    time: "1–2 business days",
    caption: "Funds deposit straight to your business account via Stripe ACH. Instant deposits available for a fee.",
  },
]

export function PaymentsHowItWorks() {
  return (
    <section aria-labelledby="payments-how-it-works-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-8%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="How You Get Paid"
          heading={
            <span id="payments-how-it-works-heading">
              From sent invoice to bank deposit in{" "}
              <span className="accent-underline">
                four <span className="whitespace-nowrap">steps.</span>
              </span>
            </span>
          }
          paragraph="A clear, measurable process. No chasing down customers, no manual bookkeeping, no waiting on the mail."
        />

        <div className="mt-14 relative" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {/* Connector */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #1677FF 10%, #22C55E 35%, #F59E0B 60%, #8B5CF6 85%, transparent 100%)",
              opacity: 0.3,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <StepCard key={s.title} step={s} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <SecondaryButton asLink href="/solutions/document-signing">
            Pair with e-signatures
          </SecondaryButton>
          <a href="/solutions/lead-generation" className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold group" style={{ color: "var(--accent)" }}>
            And lead generation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon
  return (
    <article className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 text-center flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 100% 60% at 50% 0%, ${step.color}12 0%, transparent 60%)` }}
      />
      <div className="relative">
        <div
          className="mx-auto w-[60px] h-[60px] rounded-full flex items-center justify-center relative z-10"
          style={{
            background: `linear-gradient(180deg, ${step.color}DD 0%, ${step.color} 100%)`,
            boxShadow: `0 1px 2px rgba(17,35,68,0.1), 0 8px 22px ${step.color}40`,
          }}
        >
          <Icon className="w-6 h-6 text-white" strokeWidth={2.25} />
        </div>

        <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: step.color }}>
          Step {step.step}
        </div>

        <h3 className="mt-1 text-[19px] sm:text-[21px] font-bold leading-[1.2] tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
          {step.title}
        </h3>

        <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border" style={{ background: "var(--bg)", borderColor: "var(--border-color)", color: "var(--ink)" }}>
          <Check className="w-3 h-3" strokeWidth={3} style={{ color: step.color }} />
          {step.time}
        </div>

        <p className="mt-3 text-[14.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
          {step.caption}
        </p>
      </div>
    </article>
  )
}

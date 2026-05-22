import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { ArrowRight } from "lucide-react"

type Stage = {
  step: number
  iconId: string
  title: string
  caption: string
  chip: string
  chipColor: string
}

const stages: Stage[] = [
  {
    step: 1,
    iconId: "18944",
    title: "Capture",
    caption:
      "Inbound lead hits any channel — form, call, text, chat, Facebook, or Google — and lands in the unified inbox in real time.",
    chip: "0 seconds",
    chipColor: "#1677FF",
  },
  {
    step: 2,
    iconId: "12148",
    title: "Qualify",
    caption:
      "Lead gets auto-scored against your rules, enriched with location and property data, and assigned to the right rep instantly.",
    chip: "< 30 seconds",
    chipColor: "#0EA5E9",
  },
  {
    step: 3,
    iconId: "vc6t1qwimoh5",
    title: "Nurture",
    caption:
      "Automated SMS + email sequences keep the conversation warm, with manual hand-off the moment the lead replies or re-engages.",
    chip: "Day 1–14",
    chipColor: "#22C55E",
  },
  {
    step: 4,
    iconId: "16951",
    title: "Close",
    caption:
      "Quotes, contracts, deposits, and booked appointments all happen inside the same record — nothing slips between tools.",
    chip: "Booked job",
    chipColor: "#F59E0B",
  },
]

export function LeadGenLifecycle() {
  return (
    <section aria-labelledby="lead-gen-lifecycle-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-10%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The Lead Lifecycle"
          heading={
            <span id="lead-gen-lifecycle-heading">
              From first hand-raise to booked job in{" "}
              <span className="accent-underline">
                four <span className="whitespace-nowrap">stages.</span>
              </span>
            </span>
          }
          paragraph="Every lead follows the same disciplined path — so you never wonder what happens after an inquiry lands."
        />

        <div
          className="mt-12 sm:mt-14 relative"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[64px] left-[10%] right-[10%] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--accent) 10%, var(--cyan) 50%, var(--accent) 90%, transparent 100%)",
              opacity: 0.35,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {stages.map((s) => (
              <StageCard key={s.title} stage={s} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <SecondaryButton asLink href="#lead-gen-features">
            Explore the full feature list
          </SecondaryButton>
          <a
            href="/solutions/email-marketing"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold group"
            style={{ color: "var(--accent)" }}
          >
            See how nurture sequences work
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

function StageCard({ stage }: { stage: Stage }) {
  return (
    <article
      className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 text-center"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 100% 60% at 50% 0%, ${stage.chipColor}14 0%, transparent 60%)`,
        }}
      />

      <div className="relative">
        <div
          className="mx-auto w-[130px] h-[130px] rounded-full flex items-center justify-center"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border-color)",
            boxShadow: "inset 0 1px 2px rgba(17,35,68,0.03)",
          }}
        >
          <img
            src={icons8Url(stage.iconId, 192)}
            alt=""
            width={88}
            height={88}
            loading="lazy"
            decoding="async"
            className="w-[88px] h-[88px] object-contain"
          />
        </div>

        <div
          className="mt-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.1em]"
          style={{ background: `${stage.chipColor}14`, color: stage.chipColor }}
        >
          Step {stage.step}
        </div>

        <h3
          className="mt-3 text-[22px] font-bold tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          {stage.title}
        </h3>

        <p
          className="mt-2.5 text-[14.5px] leading-[1.55]"
          style={{ color: "var(--muted)" }}
        >
          {stage.caption}
        </p>

        <div
          className="mt-4 inline-block px-2.5 py-1 rounded-full text-[11.5px] font-semibold border"
          style={{
            background: "var(--bg)",
            borderColor: "var(--border-color)",
            color: "var(--ink)",
          }}
        >
          {stage.chip}
        </div>
      </div>
    </article>
  )
}

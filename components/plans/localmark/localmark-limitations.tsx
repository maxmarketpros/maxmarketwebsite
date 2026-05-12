import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  limitationsServicePro,
  limitationsSignature,
  type LocalMarkLimitation,
} from "@/lib/localmark-data"
import { getIcon } from "@/components/plans/hub/icon-map"

function LimitationColumn({
  tierName,
  tierPrice,
  blurb,
  accent,
  items,
  href,
}: {
  tierName: string
  tierPrice: string
  blurb: string
  accent: string
  items: LocalMarkLimitation[]
  href: string
}) {
  return (
    <div
      className="relative overflow-hidden p-7 sm:p-8 rounded-[var(--radius-xl)] flex flex-col"
      style={{
        background: "var(--surface)",
        border: `1px solid ${accent}40`,
        boxShadow: `0 1px 3px var(--shadow-color), 0 6px 20px ${accent}1A`,
      }}
    >
      {/* Subtle aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[50%] h-[50%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 80% 20%, ${accent}1F 0%, transparent 70%)`,
        }}
      />

      <div className="relative">
        <span
          className="inline-flex items-center text-[10.5px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
          style={{ background: `${accent}14`, color: accent }}
        >
          Available in {tierName}
        </span>
        <div className="mt-3 flex items-baseline gap-1.5">
          <span className="text-[28px] font-bold leading-none tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
            {tierName}
          </span>
          <span className="text-[16px] font-semibold" style={{ color: accent }}>
            {tierPrice}
          </span>
        </div>
        <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: "var(--muted)" }}>
          {blurb}
        </p>

        {/* Divider */}
        <div className="my-5 h-px" style={{ background: "var(--border-color)" }} />

        <ul className="space-y-2.5">
          {items.map((item) => {
            const Icon = getIcon(item.iconName)
            // strip rendered HTML entity for safe text display
            const labelHtml = { __html: item.label }
            return (
              <li
                key={item.label}
                className="flex items-start gap-2.5 text-[14px] leading-[1.5]"
                style={{ color: "var(--ink)" }}
              >
                <span
                  className="mt-0.5 w-6 h-6 rounded-[7px] flex items-center justify-center shrink-0"
                  style={{ background: `${accent}14`, color: accent }}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={2.3} />
                </span>
                <span dangerouslySetInnerHTML={labelHtml} />
              </li>
            )
          })}
        </ul>

        <Link
          href={href}
          className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-semibold transition-colors hover:opacity-80"
          style={{ color: accent }}
        >
          Talk to us about {tierName}
          <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
        </Link>
      </div>
    </div>
  )
}

export function LocalMarkLimitations() {
  return (
    <section
      aria-labelledby="localmark-limits-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-10%] w-[480px] h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] left-[-10%] w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Honest limits"
          heading={
            <span id="localmark-limits-heading">
              What LocalMark doesn’t include —{" "}
              <span className="whitespace-nowrap">
                and where to <span className="accent-underline">get it</span>.
              </span>
            </span>
          }
          paragraph="LocalMark is built for local SEO foundations. If you need any of the below, you’ll want the next tier up. We’d rather be honest now than oversell."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LimitationColumn
            tierName="ServicePro"
            tierPrice="$899/mo"
            blurb="Need any of these? ServicePro adds social media publishing, full review automation, AI chatbot, payments, Analytics, call recording, and 70+ directories."
            accent="#F59E0B"
            items={limitationsServicePro}
            href="/contact/schedule"
          />
          <LimitationColumn
            tierName="Signature"
            tierPrice="$1,499/mo"
            blurb="Need these? Signature includes Google Ads management, full social media + video, custom SMS, workflow automation, blog content, custom backlinks, and quarterly PR."
            accent="#EC4899"
            items={limitationsSignature}
            href="/contact/schedule"
          />
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-10 rounded-[var(--radius-xl)] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color)",
          }}
        >
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-bold" style={{ color: "var(--ink)" }}>
              Not sure which tier fits?
            </h3>
            <p className="mt-1 text-[14.5px]" style={{ color: "var(--muted)" }}>
              Side-by-side comparison of all four plans is one click away.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <SecondaryButton asLink href="/plans#compare">
              Compare all plans
            </SecondaryButton>
            <Link
              href="/contact/schedule"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-[var(--radius-sm)] font-semibold text-[15px] text-white transition-all hover:translate-y-[-1px]"
              style={{
                background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                boxShadow: "0 1px 2px rgba(17,35,68,0.1), 0 4px 12px rgba(22,119,255,0.25)",
              }}
            >
              Book a strategy call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

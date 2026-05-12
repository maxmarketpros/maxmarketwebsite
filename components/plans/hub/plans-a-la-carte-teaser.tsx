import Link from "next/link"
import { ArrowRight, ArrowUpRight, Wrench, Sparkles, Check } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { aLaCarteHighlights } from "@/lib/plans-data"
import { getIcon } from "./icon-map"

export function PlansALaCarteTeaser() {
  return (
    <section id="a-la-carte" aria-labelledby="a-la-carte-heading" className="relative scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[8%] left-[-10%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="À la carte"
          heading={
            <span id="a-la-carte-heading">
              Need something{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">specific</span>?
              </span>
            </span>
          }
          paragraph="Skip the bundle and add only what you need — review generation, automation, video, payment setup, GMB rebuilds, custom sites, and more. No plan required, no minimum commitment."
        />

        {/* Trust strip */}
        <div
          className="mt-8 mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium px-5 py-3 rounded-full max-w-fit"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            boxShadow: "0 1px 3px var(--shadow-color)",
            color: "var(--ink)",
          }}
        >
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" strokeWidth={3} style={{ color: "#22C55E" }} />
            One-time or monthly
          </span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" strokeWidth={3} style={{ color: "#22C55E" }} />
            Stack onto any plan
          </span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" strokeWidth={3} style={{ color: "#22C55E" }} />
            No minimums
          </span>
        </div>

        {/* Tiles grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {aLaCarteHighlights.map((item) => {
            const Icon = getIcon(item.iconName)
            return (
              <div
                key={item.label}
                className="group relative flex flex-col p-6 rounded-[var(--radius-xl)] transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "0 1px 3px var(--shadow-color), 0 6px 20px var(--shadow-color)",
                }}
              >
                {/* Hover glow */}
                <div
                  aria-hidden
                  className="absolute -top-12 -right-12 w-[180px] h-[180px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${item.accent}1F 0%, transparent 70%)` }}
                />

                {/* Popular badge */}
                {item.popular && (
                  <span
                    className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full"
                    style={{ background: `${item.accent}14`, color: item.accent, border: `1px solid ${item.accent}33` }}
                  >
                    <Sparkles className="w-2.5 h-2.5" strokeWidth={2.6} />
                    Popular
                  </span>
                )}

                {/* Icon tile */}
                <span
                  className="w-14 h-14 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 relative"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent}1F 0%, ${item.accent}0A 100%)`,
                    color: item.accent,
                    border: `1px solid ${item.accent}33`,
                    boxShadow: `0 4px 14px ${item.accent}1A`,
                  }}
                >
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </span>

                {/* Title */}
                <h3
                  className="mt-5 text-[16.5px] font-bold leading-[1.3] tracking-[-0.005em]"
                  style={{ color: "var(--ink)" }}
                >
                  {item.label}
                </h3>

                {/* Description */}
                <p
                  className="mt-2 text-[13.5px] leading-[1.55] flex-1"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>

                {/* Divider */}
                <div className="mt-5 h-px" style={{ background: "var(--border-color)" }} />

                {/* Price + arrow */}
                <div className="mt-4 flex items-end justify-between gap-2">
                  <div className="flex flex-col">
                    <span
                      className="text-[22px] font-bold leading-none tracking-[-0.015em]"
                      style={{ color: item.accent }}
                    >
                      {item.price}
                    </span>
                    {item.priceUnit && (
                      <span
                        className="mt-1 text-[12px] font-medium"
                        style={{ color: "var(--muted)" }}
                      >
                        {item.priceUnit}
                      </span>
                    )}
                  </div>
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{
                      background: item.accent,
                      color: "#fff",
                      boxShadow: `0 4px 14px ${item.accent}40`,
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.4} />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bundle callout */}
        <div
          className="mt-12 relative overflow-hidden rounded-[var(--radius-xl)] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #0B132B 0%, #1B2D5B 60%, #1677FF 100%)",
            boxShadow: "0 8px 24px rgba(11,19,43,0.20), 0 24px 60px rgba(22,119,255,0.18)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-10 w-[420px] h-[420px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(116,211,255,0.28) 0%, transparent 60%)" }}
          />
          <div className="absolute inset-0 noise-overlay" />

          <div className="relative flex-1 max-w-2xl">
            <span
              className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full text-white"
              style={{ background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.26)" }}
            >
              <Wrench className="w-3 h-3" strokeWidth={2.4} />
              Full menu
            </span>
            <h3 className="mt-4 text-[22px] sm:text-[26px] lg:text-[28px] font-bold leading-[1.2] tracking-[-0.015em] text-white text-balance">
              Browse 30+ individual services & one-time builds.
            </h3>
            <p className="mt-2 text-[14.5px] sm:text-[15.5px] leading-[1.55]" style={{ color: "rgba(255,255,255,0.86)" }}>
              The full à la carte menu — pricing, scope, what&rsquo;s included, and how it stacks onto your plan.
            </p>
          </div>

          <div className="relative shrink-0">
            <Link
              href="/plans/a-la-carte"
              className="inline-flex items-center justify-center gap-1.5 px-7 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[16px] bg-white transition-all duration-200 hover:translate-y-[-1px] shadow-[0_2px_4px_rgba(11,19,43,0.18),0_8px_24px_rgba(11,19,43,0.22)]"
              style={{ color: "var(--accent)" }}
            >
              View A La Carte Services
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

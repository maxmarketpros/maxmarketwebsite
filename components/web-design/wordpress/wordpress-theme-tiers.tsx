import { SectionHeader } from "@/components/ui/section-header"
import { Blocks, Layers, Wrench, Star, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WP_BLUE = "#00749C"

type Spec = { label: string; value: string }
type Tier = {
  badge: string
  title: string
  bestFor: string
  blurb: string
  themes: string[]
  specs: Spec[]
  Icon: LucideIcon
  tone: string
  recommended?: boolean
}

const tiers: Tier[] = [
  {
    badge: "Tier 1",
    title: "Block themes (FSE)",
    bestFor: "Content-led brands, blogs, fast launches",
    blurb:
      "Native Gutenberg, full site editor, fastest stack on the block. Ships with the lowest long-term maintenance.",
    themes: ["Twenty Twenty-Four", "Frost", "Ollie", "Spectra One"],
    specs: [
      { label: "Lighthouse", value: "95–99" },
      { label: "Design ceiling", value: "Medium" },
      { label: "Dev cost", value: "$" },
    ],
    Icon: Blocks,
    tone: "rgba(34,197,94,0.10)",
  },
  {
    badge: "Tier 2",
    title: "Premium frameworks",
    bestFor: "Most service businesses & local agencies",
    blurb:
      "Drop-in design system on top of a fast PHP foundation. Hooks for custom code without the upstream surprises of Divi or Elementor themes.",
    themes: ["GeneratePress", "Astra", "Kadence", "Blocksy"],
    specs: [
      { label: "Lighthouse", value: "90–96" },
      { label: "Design ceiling", value: "High" },
      { label: "Dev cost", value: "$$" },
    ],
    Icon: Layers,
    tone: "rgba(0,116,156,0.14)",
    recommended: true,
  },
  {
    badge: "Tier 3",
    title: "Custom theme dev",
    bestFor: "Brands with strong design, high traffic, or custom data",
    blurb:
      "Hand-coded child theme on Underscores or Sage 10. Pixel control, full design system, no upstream surprises ever.",
    themes: ["Underscores _s", "Sage 10", "Genesis Framework", "Custom Block Theme"],
    specs: [
      { label: "Lighthouse", value: "94–99" },
      { label: "Design ceiling", value: "Unlimited" },
      { label: "Dev cost", value: "$$$" },
    ],
    Icon: Wrench,
    tone: "rgba(11,19,43,0.06)",
  },
]

export function WordpressThemeTiers() {
  return (
    <section
      id="wordpress-theme-tiers"
      aria-labelledby="wordpress-theme-tiers-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,116,156,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Theme path"
          heading={
            <span id="wordpress-theme-tiers-heading">
              Three ways to{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(0,116,156,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  ship a theme
                </span>
                .
              </span>
            </span>
          }
          paragraph="Your WordPress website design starts with one of three theme paths. We'll recommend the cheapest option that hits your design ceiling — never sell a custom build you don't need."
        />

        <div
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {tiers.map((tier, idx) => (
            <TierCard key={tier.title} tier={tier} index={idx} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Not sure which tier you need?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
            style={{ color: WP_BLUE }}
          >
            Get a theme recommendation
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

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  return (
    <div
      className="card-surface card-surface-hover relative overflow-hidden flex flex-col"
      style={{
        borderRadius: "var(--radius-lg)",
        animation: `fadeInUp 0.55s ease-out ${0.06 * index}s both`,
        border: tier.recommended
          ? `2px solid ${WP_BLUE}`
          : "1px solid var(--border-color)",
        boxShadow: tier.recommended
          ? `0 4px 18px rgba(0,116,156,0.18), 0 1px 3px var(--shadow-color)`
          : undefined,
        transform: tier.recommended ? "scale(1.02)" : "none",
      }}
    >
      {tier.recommended && (
        <div
          className="text-center text-[10px] font-extrabold uppercase tracking-[0.14em] py-1.5"
          style={{ background: WP_BLUE, color: "#fff" }}
        >
          <span className="inline-flex items-center gap-1">
            <Star className="w-3 h-3" strokeWidth={2.75} fill="#fff" />
            Best for most
          </span>
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3">
          <span
            className="w-12 h-12 rounded-[14px] flex items-center justify-center"
            style={{
              background: tier.tone,
              border: "1px solid var(--border-color)",
            }}
          >
            <tier.Icon
              className="w-5 h-5"
              strokeWidth={2.25}
              style={{ color: WP_BLUE }}
            />
          </span>
          <div>
            <p
              className="text-[10.5px] font-extrabold uppercase tracking-[0.14em]"
              style={{ color: WP_BLUE }}
            >
              {tier.badge}
            </p>
            <h3
              className="text-[17.5px] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              {tier.title}
            </h3>
          </div>
        </div>

        <p
          className="mt-3 text-[12.5px] font-bold uppercase tracking-[0.08em]"
          style={{ color: "var(--muted)" }}
        >
          Best for
        </p>
        <p
          className="mt-1 text-[14px] font-semibold leading-[1.45]"
          style={{ color: "var(--ink)" }}
        >
          {tier.bestFor}
        </p>

        <p
          className="mt-4 text-[13.5px] leading-[1.6]"
          style={{ color: "var(--muted)" }}
        >
          {tier.blurb}
        </p>

        <div
          className="mt-5 pt-5 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <p
            className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] mb-2"
            style={{ color: "var(--muted)" }}
          >
            Themes we ship
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tier.themes.map((t) => (
              <span
                key={t}
                className="text-[11.5px] font-bold px-2 py-1 rounded-md"
                style={{
                  background: "var(--bg)",
                  color: "var(--ink)",
                  border: "1px solid var(--border-color)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className="mt-5 pt-5 border-t grid grid-cols-3 gap-2 mt-auto"
          style={{ borderColor: "var(--border-color)" }}
        >
          {tier.specs.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-[10px] font-extrabold uppercase tracking-[0.10em]"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </div>
              <div
                className="mt-1 text-[14px] font-extrabold"
                style={{ color: "var(--ink)" }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { SectionHeader } from "@/components/ui/section-header"
import { ArrowRight, Sparkles, Star } from "lucide-react"

const WP_BLUE = "#00749C"

type Builder = {
  name: string
  domain: string
  blurb: string
  speed: number // 0-5
  flexibility: number // 0-5
  curve: number // 0-5 (lower = easier)
  monogram?: { text: string; bg: string; fg: string }
  recommended?: boolean
}

const builders: Builder[] = [
  {
    name: "Gutenberg",
    domain: "wordpress.org",
    blurb: "Native block editor. Lightest. Future-proof. Our default.",
    speed: 5,
    flexibility: 4,
    curve: 2,
    recommended: true,
  },
  {
    name: "Elementor",
    domain: "elementor.com",
    blurb: "Most popular drag-and-drop. Big design ceiling. Heavier on speed.",
    speed: 3,
    flexibility: 5,
    curve: 2,
  },
  {
    name: "Divi",
    domain: "elegantthemes.com",
    blurb: "Theme + builder combo. Polished templates. Lifetime license.",
    speed: 3,
    flexibility: 4,
    curve: 2,
  },
  {
    name: "Beaver Builder",
    domain: "wpbeaverbuilder.com",
    blurb: "Stable, lean, agency-favorite. Clean output, slow design pace.",
    speed: 4,
    flexibility: 3,
    curve: 2,
  },
  {
    name: "Bricks",
    domain: "bricksbuilder.io",
    blurb: "Newer, code-aware builder. Fast renders. Steeper learning curve.",
    speed: 5,
    flexibility: 5,
    curve: 4,
  },
  {
    name: "Oxygen",
    domain: "oxygenbuilder.com",
    blurb: "Replaces the theme entirely. Pixel control for devs.",
    speed: 5,
    flexibility: 5,
    curve: 5,
  },
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function WordpressPageBuilders() {
  return (
    <section
      id="wordpress-page-builders"
      aria-labelledby="wordpress-page-builders-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-6%] w-[440px] h-[440px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,116,156,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-12%] right-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Page builders we ship in"
          heading={
            <span id="wordpress-page-builders-heading">
              Pick your page builder.{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(0,116,156,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  We're fluent
                </span>
                .
              </span>
            </span>
          }
          paragraph="Every WordPress website design we ship can run on Gutenberg, Elementor, Divi, Beaver Builder, Bricks, or Oxygen — whichever your team will actually maintain. Here's how each one trades speed against flexibility."
        />

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {builders.map((b, i) => (
            <BuilderCard key={b.name} builder={b} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Already on a different builder?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
            style={{ color: WP_BLUE }}
          >
            <Sparkles className="w-4 h-4" strokeWidth={2.5} />
            Tell us what you use
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

function BuilderCard({ builder, index }: { builder: Builder; index: number }) {
  return (
    <div
      className="card-surface card-surface-hover relative overflow-hidden"
      style={{
        borderRadius: "var(--radius-lg)",
        animation: `fadeInUp 0.55s ease-out ${0.05 * index}s both`,
        border: builder.recommended
          ? `2px solid ${WP_BLUE}`
          : "1px solid var(--border-color)",
        boxShadow: builder.recommended
          ? `0 4px 18px rgba(0,116,156,0.18), 0 1px 3px var(--shadow-color)`
          : undefined,
      }}
    >
      {builder.recommended && (
        <div
          className="text-center text-[10px] font-extrabold uppercase tracking-[0.14em] py-1.5"
          style={{ background: WP_BLUE, color: "#fff" }}
        >
          <span className="inline-flex items-center gap-1">
            <Star className="w-3 h-3" strokeWidth={2.75} fill="#fff" />
            Our default
          </span>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-3">
          <span
            className="w-11 h-11 rounded-[12px] flex items-center justify-center overflow-hidden"
            style={{
              background: "#fff",
              border: "1px solid var(--border-color)",
            }}
          >
            <img
              src={favicon(builder.domain, 128)}
              alt={`${builder.name} logo`}
              width={26}
              height={26}
              loading="lazy"
              decoding="async"
              className="w-[26px] h-[26px] object-contain"
            />
          </span>
          <div>
            <h3
              className="text-[16px] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              {builder.name}
            </h3>
            <p
              className="text-[11.5px] font-medium mt-0.5"
              style={{ color: "var(--muted)" }}
            >
              {builder.domain}
            </p>
          </div>
        </div>
        <p
          className="mt-4 text-[13.5px] leading-[1.55]"
          style={{ color: "var(--muted)" }}
        >
          {builder.blurb}
        </p>

        <div
          className="mt-4 pt-4 border-t space-y-2.5"
          style={{ borderColor: "var(--border-color)" }}
        >
          <Meter label="Speed" value={builder.speed} positive />
          <Meter label="Flexibility" value={builder.flexibility} positive />
          <Meter label="Learning curve" value={builder.curve} positive={false} />
        </div>
      </div>
    </div>
  )
}

function Meter({
  label,
  value,
  positive,
}: {
  label: string
  value: number
  positive: boolean
}) {
  // For "Learning curve", lower is better — invert the color logic but keep visual fill the same.
  return (
    <div className="flex items-center gap-3">
      <span
        className="text-[11px] font-bold uppercase tracking-[0.08em] w-[100px] shrink-0"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </span>
      <div className="flex items-center gap-1 flex-1">
        {[0, 1, 2, 3, 4].map((i) => {
          const filled = i < value
          const isHigh = value >= 4
          const isLow = value <= 2
          let color = "rgba(11,19,43,0.10)"
          if (filled) {
            if (positive) {
              color = isHigh ? "#15803D" : isLow ? "#A16207" : WP_BLUE
            } else {
              // Learning curve: low value = good (green), high = harder (amber/red)
              color = isLow ? "#15803D" : isHigh ? "#B45309" : WP_BLUE
            }
          }
          return (
            <span
              key={i}
              className="h-1.5 flex-1 rounded-full"
              style={{ background: color }}
            />
          )
        })}
      </div>
    </div>
  )
}

import { SectionHeader } from "@/components/ui/section-header"
import {
  Type,
  Brush,
  Sparkles,
  Target,
  Accessibility,
  Smartphone,
} from "lucide-react"

const CD_INK = "#0B132B"
const CD_ROSE = "#F43F5E"
const CD_VIOLET = "#8B5CF6"
const CD_AMBER = "#FBBF24"
const CD_TEAL = "#14B8A6"

export function CustomDesignedBento() {
  return (
    <section
      id="custom-designed-bento"
      aria-labelledby="custom-designed-bento-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="What custom-designed actually means"
          heading={
            <span id="custom-designed-bento-heading">
              Six things a{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, rgba(244,63,94,0.30) 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                custom website design
              </span>{" "}
              gives you that templates can&rsquo;t.
            </span>
          }
          paragraph="When the design is built around your brand — not the other way around — every component pulls its weight. Here's what's different about a custom-designed site."
        />

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Brand identity — large feature */}
          <article
            className="lg:col-span-7 card-surface p-7 sm:p-8 relative overflow-hidden"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-16 w-[280px] h-[280px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(244,63,94,0.18) 0%, transparent 65%)",
              }}
            />
            <div className="relative">
              <span
                className="w-11 h-11 rounded-[12px] inline-flex items-center justify-center mb-5"
                style={{
                  background: `linear-gradient(135deg, ${CD_ROSE} 0%, ${CD_VIOLET} 100%)`,
                  color: "#fff",
                  boxShadow: "0 8px 24px rgba(244,63,94,0.30)",
                }}
              >
                <Type className="w-5 h-5" strokeWidth={2.25} />
              </span>
              <h3
                className="text-[22px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                A brand identity, not a layout
              </h3>
              <p
                className="mt-3 text-[15px] leading-[1.6] max-w-[480px]"
                style={{ color: "var(--muted)" }}
              >
                Logo lockups, type pairings, color stories, voice — designed
                cohesively so the homepage, the FAQ, and the 404 page all feel
                like the same business.
              </p>

              {/* Mini brand lockup */}
              <div className="mt-6 flex items-center gap-4 flex-wrap">
                <div
                  className="px-4 py-3 rounded-md"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    className="font-extrabold text-[18px] leading-none"
                    style={{
                      color: CD_INK,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    Brand<span style={{ color: CD_ROSE }}>·</span>You
                  </div>
                  <div
                    className="text-[10px] font-mono mt-1"
                    style={{ color: "var(--muted)" }}
                  >
                    Outfit · Display · 800
                  </div>
                </div>
                <div
                  className="flex gap-1.5 items-center px-3 py-2 rounded-md"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  {[CD_INK, CD_ROSE, CD_VIOLET, CD_AMBER].map((c) => (
                    <span
                      key={c}
                      className="w-5 h-5 rounded-full"
                      style={{
                        background: c,
                        border: "1.5px solid #fff",
                        boxShadow: "0 1px 2px rgba(11,19,43,0.20)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Custom illustrations */}
          <article
            className="lg:col-span-5 card-surface p-7 relative overflow-hidden"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <span
              className="w-10 h-10 rounded-[10px] inline-flex items-center justify-center mb-5"
              style={{
                background: "rgba(251,191,36,0.16)",
                color: "#A16207",
                border: "1px solid rgba(251,191,36,0.35)",
              }}
            >
              <Brush className="w-5 h-5" strokeWidth={2.25} />
            </span>
            <h3
              className="text-[19px] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              Custom illustrations & iconography
            </h3>
            <p
              className="mt-2 text-[14.5px] leading-[1.55]"
              style={{ color: "var(--muted)" }}
            >
              Stop using stock photos and Heroicons that ship in every other
              site. Your icon set, your spot illustrations, your texture.
            </p>
            <div className="mt-5 grid grid-cols-4 gap-2">
              {[CD_ROSE, CD_VIOLET, CD_AMBER, CD_TEAL].map((c, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md flex items-center justify-center"
                  style={{
                    background: `${c}1A`,
                    border: `1px solid ${c}40`,
                  }}
                >
                  <span
                    className="block w-5 h-5 rounded-sm"
                    style={{
                      background: c,
                      transform: `rotate(${i * 22}deg)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </article>

          {/* Motion & micro-interactions */}
          <article
            className="lg:col-span-5 card-surface p-7"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <span
              className="w-10 h-10 rounded-[10px] inline-flex items-center justify-center mb-5"
              style={{
                background: "rgba(139,92,246,0.14)",
                color: CD_VIOLET,
                border: "1px solid rgba(139,92,246,0.30)",
              }}
            >
              <Sparkles className="w-5 h-5" strokeWidth={2.25} />
            </span>
            <h3
              className="text-[19px] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              Motion & micro-interactions
            </h3>
            <p
              className="mt-2 text-[14.5px] leading-[1.55]"
              style={{ color: "var(--muted)" }}
            >
              Hover states, scroll reveals, button press, page transition —
              tuned with the same easing curves and durations across the site.
            </p>
            <div
              className="mt-5 px-3 py-3 rounded-md font-mono text-[11.5px] leading-[1.55]"
              style={{
                background: "#0F1014",
                color: "#C3E88D",
              }}
            >
              <span style={{ color: "#C792EA" }}>transition</span>:{" "}
              <span style={{ color: "#FFCB6B" }}>all</span>{" "}
              <span style={{ color: "#74D3FF" }}>240ms</span>{" "}
              <span style={{ color: "#82AAFF" }}>ease-snap</span>;
            </div>
          </article>

          {/* Conversion-tuned layout — feature */}
          <article
            className="lg:col-span-7 card-surface p-7 sm:p-8 relative overflow-hidden"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div
              aria-hidden
              className="absolute -bottom-20 -right-16 w-[280px] h-[280px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 65%)",
              }}
            />
            <div className="relative">
              <span
                className="w-11 h-11 rounded-[12px] inline-flex items-center justify-center mb-5"
                style={{
                  background: CD_TEAL,
                  color: "#fff",
                  boxShadow: "0 8px 24px rgba(20,184,166,0.30)",
                }}
              >
                <Target className="w-5 h-5" strokeWidth={2.25} />
              </span>
              <h3
                className="text-[22px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                Layouts engineered to convert
              </h3>
              <p
                className="mt-3 text-[15px] leading-[1.6] max-w-[480px]"
                style={{ color: "var(--muted)" }}
              >
                CTAs above and below the fold. Hierarchy that funnels eyes to
                the offer. Every section earns its space — or it doesn&rsquo;t
                ship.
              </p>

              {/* Mini funnel viz */}
              <div className="mt-6 flex items-end gap-2">
                {[100, 78, 54, 38].map((w, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="rounded-t-md"
                      style={{
                        width: `${w * 0.6}px`,
                        height: 12 + i * 6,
                        background: i === 3 ? CD_TEAL : `rgba(20,184,166,${0.25 + i * 0.18})`,
                      }}
                    />
                    <span
                      className="text-[10px] font-mono"
                      style={{ color: "var(--muted)" }}
                    >
                      {["View", "Scroll", "Click", "Convert"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Accessibility */}
          <article
            className="lg:col-span-6 card-surface p-7"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <span
              className="w-10 h-10 rounded-[10px] inline-flex items-center justify-center mb-5"
              style={{
                background: "rgba(34,197,94,0.14)",
                color: "#15803D",
                border: "1px solid rgba(34,197,94,0.30)",
              }}
            >
              <Accessibility className="w-5 h-5" strokeWidth={2.25} />
            </span>
            <h3
              className="text-[19px] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              Accessibility baked in
            </h3>
            <p
              className="mt-2 text-[14.5px] leading-[1.55]"
              style={{ color: "var(--muted)" }}
            >
              WCAG AA contrast on every text/background pair. Keyboard focus
              styles. Aria labels on every interactive element. Designed in,
              not patched on.
            </p>
            <div
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-bold"
              style={{
                background: "rgba(34,197,94,0.10)",
                color: "#15803D",
                border: "1px solid rgba(34,197,94,0.30)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#22C55E" }}
              />
              WCAG 2.2 AA · contrast 4.5:1+
            </div>
          </article>

          {/* Mobile-native design */}
          <article
            className="lg:col-span-6 card-surface p-7"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <span
              className="w-10 h-10 rounded-[10px] inline-flex items-center justify-center mb-5"
              style={{
                background: "rgba(244,63,94,0.14)",
                color: CD_ROSE,
                border: "1px solid rgba(244,63,94,0.30)",
              }}
            >
              <Smartphone className="w-5 h-5" strokeWidth={2.25} />
            </span>
            <h3
              className="text-[19px] font-bold leading-tight"
              style={{ color: "var(--ink)" }}
            >
              Mobile-native, not mobile-shrunk
            </h3>
            <p
              className="mt-2 text-[14.5px] leading-[1.55]"
              style={{ color: "var(--muted)" }}
            >
              We design mobile first — thumb-friendly tap zones, sticky CTAs,
              and an information density built for a 5-inch screen. Then we
              scale up.
            </p>
            <div className="mt-4 flex items-end gap-3">
              <div
                className="rounded-md flex flex-col gap-1 p-1.5"
                style={{
                  width: 38,
                  height: 64,
                  background: "#fff",
                  border: `1px solid ${CD_ROSE}`,
                }}
              >
                <span
                  className="block rounded-sm"
                  style={{ background: CD_INK, height: 4 }}
                />
                <span
                  className="block rounded-sm"
                  style={{ background: "rgba(11,19,43,0.20)", height: 3 }}
                />
                <span
                  className="block rounded-sm mt-auto"
                  style={{ background: CD_ROSE, height: 6 }}
                />
              </div>
              <div
                className="rounded-md flex flex-col gap-1 p-1.5"
                style={{
                  width: 80,
                  height: 56,
                  background: "#fff",
                  border: "1px solid var(--border-color)",
                }}
              >
                <span
                  className="block rounded-sm"
                  style={{ background: CD_INK, height: 4 }}
                />
                <span
                  className="block rounded-sm"
                  style={{ background: "rgba(11,19,43,0.20)", height: 3 }}
                />
                <span
                  className="block rounded-sm mt-auto"
                  style={{ background: "rgba(11,19,43,0.40)", height: 5 }}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

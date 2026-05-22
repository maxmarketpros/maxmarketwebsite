import { Check } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { localmarkFeatures, type LocalMarkFeature } from "@/lib/localmark-data"

function FeatureCard({ feature }: { feature: LocalMarkFeature }) {
  const { flagship } = feature

  return (
    <div
      id={`feature-${feature.slug}`}
      className={`relative overflow-hidden card-surface card-surface-hover p-7 sm:p-8 flex flex-col scroll-mt-24 ${
        flagship ? "md:col-span-2" : ""
      }`}
    >
      {/* Aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[60%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${feature.pillColor}1A 0%, transparent 70%)`,
        }}
      />

      <div
        className={`relative flex-1 ${
          flagship ? "md:grid md:grid-cols-[auto_1fr] md:gap-8 md:items-start" : "flex flex-col"
        }`}
      >
        {/* Icons8 image */}
        <div className={flagship ? "shrink-0" : ""}>
          <img
            src={icons8Url(feature.iconId, flagship ? 256 : 192)}
            alt={feature.iconAlt}
            width={flagship ? 132 : 96}
            height={flagship ? 132 : 96}
            loading="lazy"
            decoding="async"
            className={`object-contain shrink-0 ${
              flagship ? "w-[110px] h-[110px] md:w-[132px] md:h-[132px]" : "w-[96px] h-[96px]"
            }`}
          />
        </div>

        <div className={`flex flex-col ${flagship ? "mt-5 md:mt-0" : "mt-5"} flex-1`}>
          {/* Pill */}
          <span
            className="self-start inline-flex items-center px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] rounded-full"
            style={{
              background: `${feature.pillColor}14`,
              color: feature.pillColor,
              border: `1px solid ${feature.pillColor}33`,
            }}
          >
            {feature.pillLabel}
          </span>

          {/* Title */}
          <h3
            className={`mt-4 font-bold leading-[1.2] tracking-[-0.01em] ${
              flagship ? "text-[24px] sm:text-[28px] lg:text-[32px]" : "text-[19px] sm:text-[21px]"
            }`}
            style={{ color: "var(--ink)" }}
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p
            className={`mt-3 leading-[1.6] ${
              flagship ? "text-[16px] sm:text-[17px]" : "text-[14.5px]"
            }`}
            style={{ color: "var(--muted)" }}
          >
            {feature.description}
          </p>

          {/* Deliverables */}
          <ul
            className={`mt-5 ${
              flagship ? "sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-2.5" : "space-y-2"
            }`}
          >
            {feature.deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2.5 text-[14px]"
                style={{ color: "var(--ink)" }}
              >
                <span
                  className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: `${feature.pillColor}1A`,
                    color: feature.pillColor,
                  }}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

          {/* Benefit */}
          <p
            className={`mt-5 pt-4 italic text-[14px] leading-[1.55] ${
              flagship ? "border-t" : "border-t"
            }`}
            style={{ color: "var(--ink)", borderColor: "var(--border-color)" }}
          >
            <span style={{ color: feature.pillColor, fontWeight: 600, fontStyle: "normal" }}>
              Why this matters:
            </span>{" "}
            {feature.benefit}
          </p>
        </div>
      </div>
    </div>
  )
}

export function LocalMarkFeatures() {
  return (
    <section
      id="localmark-features"
      aria-labelledby="localmark-features-heading"
      className="relative scroll-mt-20"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="What’s included"
          heading={
            <span id="localmark-features-heading">
              Everything in LocalMark —{" "}
              <span className="whitespace-nowrap">
                feature by <span className="accent-underline">feature</span>.
              </span>
            </span>
          }
          paragraph="Eight things you get every single month. Every one is built to do a specific job in growing local visibility — no fluff, no bundled mystery."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {localmarkFeatures.map((f) => (
            <FeatureCard key={f.slug} feature={f} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { startermarkFeatures, type StarterMarkFeature } from "@/lib/startermark-data"

function FeatureCard({ feature }: { feature: StarterMarkFeature }) {
  const { flagship } = feature

  return (
    <div
      id={`feature-${feature.slug}`}
      className={`relative overflow-hidden card-surface card-surface-hover p-6 sm:p-7 flex flex-col scroll-mt-24 ${
        flagship ? "md:col-span-2" : ""
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[55%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${feature.pillColor}1A 0%, transparent 70%)`,
        }}
      />

      <div
        className={`relative flex-1 ${
          flagship ? "md:grid md:grid-cols-[auto_1fr] md:gap-7 md:items-start" : "flex flex-col"
        }`}
      >
        <div className={flagship ? "shrink-0" : ""}>
          <img
            src={icons8Url(feature.iconId, flagship ? 256 : 192)}
            alt={feature.iconAlt}
            width={flagship ? 120 : 80}
            height={flagship ? 120 : 80}
            loading="lazy"
            decoding="async"
            className={`object-contain shrink-0 ${
              flagship ? "w-[100px] h-[100px] md:w-[120px] md:h-[120px]" : "w-[80px] h-[80px]"
            }`}
          />
        </div>

        <div className={`flex flex-col ${flagship ? "mt-4 md:mt-0" : "mt-4"} flex-1`}>
          <span
            className="self-start inline-flex items-center px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] rounded-full"
            style={{
              background: `${feature.pillColor}14`,
              color: feature.pillColor,
              border: `1px solid ${feature.pillColor}33`,
            }}
          >
            {feature.pillLabel}
          </span>

          <h3
            className={`mt-3 font-bold leading-[1.2] tracking-[-0.01em] ${
              flagship ? "text-[22px] sm:text-[26px] lg:text-[30px]" : "text-[18px] sm:text-[19px]"
            }`}
            style={{ color: "var(--ink)" }}
          >
            {feature.title}
          </h3>

          <p
            className={`mt-2.5 leading-[1.55] ${
              flagship ? "text-[15.5px] sm:text-[16.5px]" : "text-[14px]"
            }`}
            style={{ color: "var(--muted)" }}
          >
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function StarterMarkFeatures() {
  return (
    <section
      id="startermark-features"
      aria-labelledby="startermark-features-heading"
      className="relative scroll-mt-20"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-10%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] left-[-10%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="What's in StarterMark"
          heading={
            <span id="startermark-features-heading">
              Seven essentials.{" "}
              <span className="whitespace-nowrap">
                Nothing <span className="accent-underline">extra</span>.
              </span>
            </span>
          }
          paragraph="The minimum a small local business needs to look professional and start ranking on Google — and not a feature more than that."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {startermarkFeatures.map((f) => (
            <FeatureCard key={f.slug} feature={f} />
          ))}
        </div>
      </div>
    </section>
  )
}

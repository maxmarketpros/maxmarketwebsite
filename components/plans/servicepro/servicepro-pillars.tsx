import {
  Check, Globe, Share2, MessageCircle, BarChart3,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import {
  serviceproPillars,
  type ServiceProFeature,
  type ServiceProPillar,
} from "@/lib/servicepro-data"

const pillarIconMap: Record<string, LucideIcon> = {
  Globe,
  Share2,
  MessageCircle,
  BarChart3,
}

function FeatureCard({ feature, pillarAccent }: { feature: ServiceProFeature; pillarAccent: string }) {
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
            width={flagship ? 124 : 88}
            height={flagship ? 124 : 88}
            loading="lazy"
            decoding="async"
            className={`object-contain shrink-0 ${
              flagship ? "w-[104px] h-[104px] md:w-[124px] md:h-[124px]" : "w-[88px] h-[88px]"
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

          <ul
            className={`mt-4 ${
              flagship ? "sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-2.5" : "space-y-2"
            }`}
          >
            {feature.deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2.5 text-[13.5px]"
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

          <p
            className="mt-4 pt-3.5 text-[13.5px] leading-[1.55] border-t"
            style={{ color: "var(--ink)", borderColor: "var(--border-color)" }}
          >
            <span style={{ color: pillarAccent, fontWeight: 700 }}>Why this matters:</span>{" "}
            <span style={{ color: "var(--muted)" }}>{feature.benefit}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

function Pillar({ pillar }: { pillar: ServiceProPillar }) {
  const Icon = pillarIconMap[pillar.iconName] ?? Globe
  const slugAnchor = pillar.title.toLowerCase().split(" ")[0]

  return (
    <div id={`pillar-${slugAnchor}`} className="relative scroll-mt-20">
      {/* Pillar header */}
      <div className="relative">
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Big number tile */}
          <span
            className="hidden sm:flex w-16 h-16 lg:w-20 lg:h-20 rounded-[var(--radius-lg)] items-center justify-center text-white font-bold text-[22px] lg:text-[26px] shrink-0"
            style={{
              background: `linear-gradient(135deg, ${pillar.accent}E6 0%, ${pillar.accent} 100%)`,
              boxShadow: `0 8px 24px ${pillar.accent}33, 0 2px 6px ${pillar.accent}26`,
            }}
          >
            {pillar.number}
          </span>

          <div className="flex-1">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <span
                className="sm:hidden inline-flex w-9 h-9 rounded-[10px] items-center justify-center"
                style={{ background: `${pillar.accent}14`, color: pillar.accent }}
              >
                <Icon className="w-5 h-5" strokeWidth={2.4} />
              </span>
              <span
                className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                style={{ background: `${pillar.accent}14`, color: pillar.accent }}
              >
                Pillar {pillar.number} · {pillar.features.length} features
              </span>
            </div>
            <h3
              className="mt-2.5 text-[28px] sm:text-[34px] lg:text-[40px] font-bold leading-[1.1] tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              {pillar.title}
            </h3>
            <p className="mt-2 text-[15.5px] sm:text-[16.5px] leading-[1.5]" style={{ color: "var(--muted)" }}>
              {pillar.tagline}
            </p>
          </div>

          {/* Pillar icon on the right (desktop) */}
          <span
            className="hidden lg:flex w-20 h-20 rounded-[var(--radius-lg)] items-center justify-center shrink-0"
            style={{
              background: `linear-gradient(135deg, ${pillar.accent}1F 0%, ${pillar.accent}05 100%)`,
              color: pillar.accent,
              border: `1px solid ${pillar.accent}33`,
            }}
          >
            <Icon className="w-10 h-10" strokeWidth={2} />
          </span>
        </div>

        {/* Accent rule */}
        <div
          className="mt-6 h-[3px] w-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${pillar.accent} 0%, ${pillar.accent}40 60%, transparent 100%)`,
          }}
        />
      </div>

      {/* Feature cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {pillar.features.map((f) => (
          <FeatureCard key={f.slug} feature={f} pillarAccent={pillar.accent} />
        ))}
      </div>
    </div>
  )
}

export function ServiceProPillars() {
  return (
    <section
      id="servicepro-pillars"
      aria-labelledby="servicepro-pillars-heading"
      className="relative scroll-mt-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-10%] w-[480px] h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[20%] left-[-10%] w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="The four pillars"
          heading={
            <span id="servicepro-pillars-heading">
              16 features, organized into{" "}
              <span className="whitespace-nowrap">
                4 working <span className="accent-underline">pillars</span>.
              </span>
            </span>
          }
          paragraph="Every feature in ServicePro does a job — and every job belongs to one of four pillars: getting found, showing up everywhere, converting every lead, and running the business."
        />

        <div className="mt-16 space-y-20 lg:space-y-24">
          {serviceproPillars.map((p) => (
            <Pillar key={p.slug} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

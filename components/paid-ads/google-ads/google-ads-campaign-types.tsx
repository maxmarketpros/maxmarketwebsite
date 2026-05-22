import { SectionHeader } from "@/components/ui/section-header"
import {
  Search,
  ShieldCheck,
  Sparkles,
  MapPin,
  Phone,
  Play,
  ArrowRight,
} from "lucide-react"
import { GoogleGuaranteedBadge } from "./google-ads-hero"

type CampaignType = {
  name: string
  Icon: typeof Search
  brandColor: string
  description: string
  bestFor: string
  metric: { value: string; label: string }
  badge?: "guaranteed" | null
}

const campaignTypes: CampaignType[] = [
  {
    name: "Local Services Ads",
    Icon: ShieldCheck,
    brandColor: "#34A853",
    description:
      "Pay-per-lead placement above the regular Sponsored ads, with the Google Guaranteed trust badge built in.",
    bestFor: "Emergency-service trades",
    metric: { value: "$28", label: "Avg / qualified call" },
    badge: "guaranteed",
  },
  {
    name: "Google Search",
    Icon: Search,
    brandColor: "#1A73E8",
    description:
      "High-intent keyword targeting with negative-keyword sculpting and weekly Quality Score audits.",
    bestFor: "Planned services",
    metric: { value: "8.4%", label: "Avg conv. rate" },
  },
  {
    name: "Performance Max",
    Icon: Sparkles,
    brandColor: "#9334EA",
    description:
      "Automated multi-channel reach across Search, Maps, YouTube, Gmail, and Display from one campaign.",
    bestFor: "Lead-gen scale",
    metric: { value: "5.1×", label: "Avg ROAS" },
  },
  {
    name: "Google Maps Ads",
    Icon: MapPin,
    brandColor: "#EA4335",
    description:
      "Promoted pin placements that boost your Map Pack rank and capture &ldquo;directions&rdquo; intent.",
    bestFor: "Walk-in / drive-by trades",
    metric: { value: "+38%", label: "Direction clicks" },
  },
  {
    name: "Call-Only Ads",
    Icon: Phone,
    brandColor: "#0EA5E9",
    description:
      "Phone-first mobile ads that route directly to your line &mdash; no clicks to website, no friction.",
    bestFor: "HVAC, plumbing, locksmith",
    metric: { value: "92%", label: "Mobile traffic" },
  },
  {
    name: "YouTube Ads",
    Icon: Play,
    brandColor: "#FF0000",
    description:
      "Local-targeted skippable and bumper ads built for brand recall in your service zones.",
    bestFor: "Brand recall locally",
    metric: { value: "$0.04", label: "Cost per view" },
  },
]

export function GoogleAdsCampaignTypes() {
  return (
    <section
      id="google-ads-campaign-types"
      aria-labelledby="google-ads-campaign-types-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-8%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(66,133,244,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(52,168,83,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="What we run"
          heading={
            <span id="google-ads-campaign-types-heading">
              Every Google ad slot,{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">one team</span>.
              </span>
            </span>
          }
          paragraph="We don&rsquo;t just run Google Search. For local service businesses, the leads come from a stack of placements working together. Our Google Ads management covers every campaign type Google offers."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {campaignTypes.map((c) => (
            <article
              key={c.name}
              className="relative card-surface p-6 lg:p-7 flex flex-col"
              style={{
                borderRadius: "var(--radius-lg)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
            >
              {/* Aura */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  borderRadius: "var(--radius-lg)",
                  background: `radial-gradient(ellipse 90% 60% at 0% 0%, ${c.brandColor}10 0%, transparent 60%)`,
                }}
              />

              <div className="relative flex items-start justify-between gap-3">
                <span
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                  style={{
                    background: `${c.brandColor}14`,
                    color: c.brandColor,
                    border: `1px solid ${c.brandColor}26`,
                  }}
                >
                  <c.Icon className="w-5 h-5" strokeWidth={2.25} />
                </span>
                {c.badge === "guaranteed" && (
                  <GoogleGuaranteedBadge withWordmark size={28} />
                )}
              </div>

              <h3
                className="relative mt-4 text-[20px] sm:text-[21px] font-bold leading-[1.2] tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                {c.name}
              </h3>
              <p
                className="relative mt-2 text-[14.5px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
                dangerouslySetInnerHTML={{ __html: c.description }}
              />

              <div
                className="relative mt-5 pt-4 border-t flex items-center justify-between gap-3"
                style={{ borderColor: "var(--border-color)" }}
              >
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    Best for
                  </div>
                  <div
                    className="mt-0.5 text-[13px] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {c.bestFor}
                  </div>
                </div>
                <div
                  className="text-right shrink-0 pl-3 border-l"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div
                    className="text-[18px] sm:text-[20px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{ color: c.brandColor }}
                  >
                    {c.metric.value}
                  </div>
                  <div
                    className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {c.metric.label}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Not sure which Google Ads campaign types fit your business?
          </span>
          <a
            href="#google-ads-leak-audit"
            className="inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
            style={{ color: "var(--accent)" }}
          >
            Get a free strategy audit
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

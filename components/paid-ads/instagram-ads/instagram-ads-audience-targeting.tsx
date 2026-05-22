import { SectionHeader } from "@/components/ui/section-header"
import {
  MapPin,
  Heart,
  Users,
  UserPlus,
  Repeat,
  Star,
  ArrowRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { IG_GRADIENT_CSS } from "./instagram-ads-hero"

type Layer = {
  n: string
  Icon: LucideIcon
  title: string
  tune: string
  preview: React.ReactNode
}

const layers: Layer[] = [
  {
    n: "01",
    Icon: MapPin,
    title: "Geo + service-area exclusions",
    tune: "Polygon radius around your service zone, with negative geo on cities you can&rsquo;t profitably dispatch to.",
    preview: (
      <span
        className="font-mono text-[11px] px-2 py-0.5 rounded-md"
        style={{
          background: "rgba(250,126,30,0.10)",
          color: "#B47119",
        }}
      >
        25mi · −LA core
      </span>
    ),
  },
  {
    n: "02",
    Icon: Heart,
    title: "Interest & behavior stacks",
    tune: "Home-improvement intent, lifestyle signals, household-income brackets &mdash; layered, not stacked, so Meta&rsquo;s auction stays open.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        14 interests · 3 stacks
      </span>
    ),
  },
  {
    n: "03",
    Icon: Users,
    title: "Custom audiences",
    tune: "CRM upload, 90-day site visitors, IG profile engagers, and lead-form openers &mdash; rebuilt weekly with Conversions API events.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        7 customs · CAPI fed
      </span>
    ),
  },
  {
    n: "04",
    Icon: UserPlus,
    title: "Lookalikes",
    tune: "1-3% lookalikes seeded off your last 180 days of <em>booked jobs</em>, not just leads. Quality of seed list &gt; size of audience.",
    preview: (
      <span
        className="font-mono text-[11px] px-2 py-0.5 rounded-md"
        style={{
          background: "rgba(150,47,191,0.10)",
          color: "#7A2999",
        }}
      >
        LAL 1% · booked-job seed
      </span>
    ),
  },
  {
    n: "05",
    Icon: Repeat,
    title: "Retargeters",
    tune: "Layered by intent: 75%+ video viewers, profile visitors, lead-form openers, abandon-quote audiences. Each gets its own creative.",
    preview: (
      <span className="text-[11px]" style={{ color: "var(--muted)" }}>
        4 RT segments
      </span>
    ),
  },
  {
    n: "06",
    Icon: Star,
    title: "Creator/whitelisting audiences",
    tune: "Lookalikes off creator followers + engagers when we run partner ads from a creator handle. Often the cheapest cold cohort on the account.",
    preview: (
      <span
        className="font-mono text-[11px] px-2 py-0.5 rounded-md"
        style={{
          background: "rgba(214,41,118,0.10)",
          color: "#B83265",
        }}
      >
        Whitelist LAL
      </span>
    ),
  },
]

export function InstagramAdsAudienceTargeting() {
  return (
    <section
      id="instagram-ads-audience-targeting"
      aria-labelledby="instagram-ads-audience-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-5%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(150,47,191,0.10) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Audience targeting"
          heading={
            <span id="instagram-ads-audience-heading">
              Six layers Instagram{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    background: IG_GRADIENT_CSS,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  actually rewards
                </span>
                .
              </span>
            </span>
          }
          paragraph="Most Meta accounts run two interest audiences and call it targeting. We build six layers that compound &mdash; geo, interest stacks, custom audiences, lookalikes, retargeters, and whitelisted creator audiences. Skip a layer and your Instagram Ads management caps out fast."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Left: copy + sticky legend */}
          <div className="lg:sticky lg:top-28">
            <h3
              className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              Six layers. They compound.
            </h3>
            <p
              className="mt-4 text-[15.5px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Top layer is what Meta sees first (your geo). Bottom is what it
              sees last (creator-audience lookalikes). The cold-prospecting,
              mid-funnel, and warm-conversion ad sets pull from different
              layers &mdash; so the same audience never sees the same creative
              at the wrong stage.
            </p>

            <div
              className="mt-6 p-5 rounded-[var(--radius-lg)] border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border-color)",
              }}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                style={{
                  background: IG_GRADIENT_CSS,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                How to read this stack
              </div>
              <p
                className="mt-2 text-[14px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                Each layer is a building block we tune in isolation, then we
                let Meta&rsquo;s Advantage+ blend them. Every audit we deliver
                is scored against this exact stack &mdash; so you know which
                layer is leaking before we run a single dollar.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[15.5px] group"
              style={{ color: "#B83265" }}
            >
              Audit my current audiences
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </a>
          </div>

          {/* Right: vertical stack */}
          <div className="relative">
            <ol className="space-y-3">
              {layers.map((layer, idx) => (
                <li
                  key={layer.n}
                  className="relative card-surface card-surface-hover"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    padding: "16px 18px",
                    borderLeft: "3px solid transparent",
                    borderImage: `${IG_GRADIENT_CSS} 1`,
                    borderImageSlice: 1,
                    transform: `translateX(${idx * 8}px)`,
                    maxWidth: "calc(100% - 48px)",
                  }}
                >
                  {/* corner glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-50"
                    style={{
                      borderRadius: "var(--radius-lg)",
                      background:
                        "radial-gradient(ellipse 80% 50% at 0% 0%, rgba(214,41,118,0.08) 0%, transparent 60%)",
                    }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <span
                        className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center"
                        style={{
                          background: IG_GRADIENT_CSS,
                          color: "#fff",
                          boxShadow: "0 4px 10px rgba(214,41,118,0.28)",
                        }}
                      >
                        <layer.Icon className="w-[18px] h-[18px]" strokeWidth={2.25} />
                      </span>
                      <span
                        className="text-[10px] font-bold tracking-[0.08em]"
                        style={{ color: "var(--muted)" }}
                      >
                        {layer.n}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <h4
                          className="text-[16px] sm:text-[17px] font-bold leading-[1.25] tracking-[-0.01em]"
                          style={{ color: "var(--ink)" }}
                        >
                          {layer.title}
                        </h4>
                        <div className="shrink-0">{layer.preview}</div>
                      </div>
                      <p
                        className="mt-1.5 text-[13.5px] sm:text-[14px] leading-[1.55]"
                        style={{ color: "var(--muted)" }}
                        dangerouslySetInnerHTML={{ __html: layer.tune }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

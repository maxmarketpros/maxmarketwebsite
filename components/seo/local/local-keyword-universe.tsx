import Link from "next/link"
import {
  ArrowRight,
  Siren,
  MapPin,
  Building2,
  Scale,
} from "lucide-react"
import { Pill } from "@/components/ui/pill"

type Cluster = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  pill: string
  title: string
  accent: string
  chips: string[]
}

const clusters: Cluster[] = [
  {
    Icon: Siren,
    pill: "Emergency intent",
    title: "Ready-to-call, 24/7",
    accent: "#EF4444",
    chips: [
      "emergency plumber near me",
      "24/7 HVAC repair",
      "after-hours locksmith",
      "same day water damage",
    ],
  },
  {
    Icon: MapPin,
    pill: "Service + city",
    title: "Geo-qualified buyers",
    accent: "#1677FF",
    chips: [
      "roof repair Irvine",
      "tile installer Newport Beach",
      "auto detail Costa Mesa",
      "pool service Anaheim",
    ],
  },
  {
    Icon: Building2,
    pill: "Hyperlocal neighborhood",
    title: "Block-by-block rankings",
    accent: "#F59E0B",
    chips: [
      "handyman University Park",
      "salon Laguna Niguel",
      "gym Woodbridge",
      "chiropractor Turtle Rock",
    ],
  },
  {
    Icon: Scale,
    pill: "Brand & comparison",
    title: "Late-stage shoppers",
    accent: "#14B8A6",
    chips: [
      "best plumber near me",
      "your-company reviews",
      "top-rated HVAC in OC",
      "cheapest electrician quote",
    ],
  },
]

export function LocalKeywordUniverse() {
  return (
    <section
      id="local-keyword-universe"
      aria-labelledby="local-universe-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] right-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left copy */}
          <div className="lg:col-span-5">
            <Pill>The Local Keyword Universe</Pill>
            <h2
              id="local-universe-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Every search pattern a local{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">buyer</span> uses.
              </span>
            </h2>
            <p
              className="mt-6 text-[17px] sm:text-[19px] leading-[1.65]"
              style={{ color: "var(--muted)" }}
            >
              Local SEO isn&rsquo;t one keyword. It&rsquo;s a universe of
              intent patterns a real buyer types into Google when they&rsquo;re
              a phone tap away from booking. We map every pattern for your
              service area, then rank you across all four clusters — not just
              the obvious ones.
            </p>

            <div
              className="mt-8 p-5 rounded-[var(--radius-md)] border"
              style={{
                background: "var(--accent-bg)",
                borderColor: "rgba(22,119,255,0.18)",
              }}
            >
              <div
                className="text-[11.5px] font-semibold uppercase tracking-[0.1em]"
                style={{ color: "var(--accent)" }}
              >
                Why this matters
              </div>
              <p
                className="mt-2 text-[14.5px] leading-[1.55]"
                style={{ color: "var(--ink)" }}
              >
                Emergency + hyperlocal queries convert{" "}
                <span className="font-bold">3-5× higher</span> than generic
                &ldquo;plumber&rdquo; searches. Most agencies only chase the
                obvious head terms. We chase the whole long tail.
              </p>
            </div>

            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-[15.5px] font-semibold"
              style={{ color: "var(--accent)" }}
            >
              Map my local keywords
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </Link>
          </div>

          {/* Right clusters card */}
          <div className="lg:col-span-7">
            <div
              className="card-surface relative overflow-hidden p-5 sm:p-6"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0"
                style={{
                  width: "55%",
                  height: "45%",
                  background:
                    "radial-gradient(ellipse 80% 100% at 85% 0%, rgba(245,158,11,0.08), transparent 65%)",
                }}
              />
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clusters.map((c) => (
                  <ClusterCard key={c.pill} cluster={c} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ClusterCard({ cluster }: { cluster: Cluster }) {
  const { Icon, pill, title, accent, chips } = cluster
  return (
    <div
      className="relative rounded-[var(--radius-md)] border p-5 overflow-hidden"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border-color)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[80%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${accent}14 0%, transparent 70%)`,
        }}
      />
      <div className="relative flex items-center gap-2.5">
        <span
          className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
          style={{
            background: `${accent}14`,
            boxShadow: `inset 0 0 0 1px ${accent}22, inset 0 1px 0 rgba(255,255,255,0.6)`,
          }}
        >
          <Icon className="w-4 h-4" style={{ color: accent }} strokeWidth={2.25} />
        </span>
        <span
          className="text-[10.5px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
          style={{ background: `${accent}1A`, color: accent }}
        >
          {pill}
        </span>
      </div>

      <div
        className="relative mt-3 text-[15.5px] font-bold"
        style={{ color: "var(--ink)" }}
      >
        {title}
      </div>

      <div className="relative mt-3 flex flex-wrap gap-1.5">
        {chips.map((chip) => (
          <span
            key={chip}
            className="text-[12px] font-medium px-2.5 py-1 rounded-full"
            style={{
              background: "var(--bg)",
              color: "var(--ink)",
              border: "1px solid var(--border-color)",
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}

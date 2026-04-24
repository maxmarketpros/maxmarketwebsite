import { SectionHeader } from "@/components/ui/section-header"
import { Newspaper, Mic, FileText, MapPin, Radio } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Channel = {
  n: string
  Icon: LucideIcon
  title: string
  desc: string
  produces: string[]
  flagship?: boolean
  examples?: string
}

const channels: Channel[] = [
  {
    n: "01",
    Icon: Newspaper,
    title: "Digital PR + earned media",
    desc: "Newsroom-quality pitches to journalists — proprietary data, industry trend commentary, expert insights — placed through relationships and cold outreach at tier-1 publications.",
    produces: [
      "Editorial dofollow links from DR 80+ sites",
      "Branded mentions across news syndication",
      "Authority compounding across topical clusters",
    ],
    flagship: true,
    examples:
      "Forbes · Inc · Entrepreneur · Business Insider · industry flagships",
  },
  {
    n: "02",
    Icon: Mic,
    title: "HARO + expert sourcing",
    desc: "Daily journalist queries answered with original expert commentary to earn quote-based editorial links.",
    produces: [
      "Quote-linked mentions in live news cycles",
      "Dofollow + branded anchor mix",
    ],
  },
  {
    n: "03",
    Icon: FileText,
    title: "Guest content placements",
    desc: "Bylined articles on relevant industry sites — original research, frameworks, and teardowns, not spun content.",
    produces: [
      "Author-box editorial backlinks",
      "Topical relevance + E-E-A-T signals",
    ],
  },
  {
    n: "04",
    Icon: MapPin,
    title: "Citations & directories",
    desc: "NAP-consistent foundational citations across the top general, geo, and niche directories — the base of the link pyramid.",
    produces: [
      "50+ manually verified citations",
      "Duplicate cleanup + NAP audit",
    ],
  },
  {
    n: "05",
    Icon: Radio,
    title: "Brand mention monitoring",
    desc: "Daily scan for unlinked brand mentions — we convert them into dofollow links via editor outreach.",
    produces: [
      "Free authority lift from existing mentions",
      "New link acquisition without new outreach",
    ],
  },
]

export function OffPageChannels() {
  return (
    <section
      id="off-page-channels"
      aria-labelledby="off-page-channels-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] right-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="How we earn"
          heading={
            <span id="off-page-channels-heading">
              Five{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">channels</span>.
              </span>{" "}
              One compounding strategy.
            </span>
          }
          paragraph="Every channel feeds the pyramid. Digital PR lands the peak; citations build the base. Together they produce the domain-rating growth Google actually rewards."
        />

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {channels.map((ch) => (
            <div
              key={ch.n}
              className={`relative card-surface card-surface-hover overflow-hidden group ${
                ch.flagship ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ borderRadius: "var(--radius-lg)", padding: "22px" }}
            >
              {/* Corner aura */}
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-[160px] h-[160px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="w-11 h-11 rounded-[var(--radius-xs)] flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #EDE9FE 0%, #DDD6FE 100%)",
                      color: "#6D28D9",
                    }}
                  >
                    <ch.Icon className="w-5 h-5" strokeWidth={2.25} />
                  </span>
                  <span
                    className="text-[10.5px] font-bold tracking-[0.1em]"
                    style={{ color: "var(--muted)" }}
                  >
                    {ch.n}
                  </span>
                </div>

                <h3
                  className="mt-4 text-[17px] sm:text-[18px] font-bold leading-[1.25] tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {ch.title}
                </h3>
                <p
                  className="mt-2 text-[14px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {ch.desc}
                </p>

                {ch.flagship && ch.examples && (
                  <div
                    className="mt-3 text-[12px] font-mono px-3 py-2 rounded-md"
                    style={{
                      background: "rgba(139,92,246,0.08)",
                      color: "#6D28D9",
                      border: "1px solid rgba(139,92,246,0.18)",
                    }}
                  >
                    {ch.examples}
                  </div>
                )}

                <ul
                  className="mt-4 pt-4 border-t space-y-1.5"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  {ch.produces.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-[13px] leading-[1.5]"
                      style={{ color: "var(--ink)" }}
                    >
                      <span
                        className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#8B5CF6" }}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

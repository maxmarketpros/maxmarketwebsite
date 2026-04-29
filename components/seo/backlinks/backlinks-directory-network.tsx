import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { ArrowRight } from "lucide-react"

type Directory = { name: string; domain: string; brand: string }

type Quadrant = {
  key: string
  label: string
  stat: string
  iconId: string
  accent: string
  accentDark: string
  accentSoft: string
  directories: Directory[]
}

const quadrants: Quadrant[] = [
  {
    key: "local",
    label: "Local Citations",
    stat: "50+ avg. per client",
    iconId: "19326",
    accent: "#14B8A6",
    accentDark: "#0F766E",
    accentSoft: "#CCFBF1",
    directories: [
      { name: "Google Business", domain: "business.google.com", brand: "#4285F4" },
      { name: "Yelp", domain: "yelp.com", brand: "#D32323" },
      { name: "Bing Places", domain: "bingplaces.com", brand: "#008373" },
      { name: "Apple Business", domain: "apple.com", brand: "#0B132B" },
      { name: "Foursquare", domain: "foursquare.com", brand: "#F94877" },
      { name: "Yellow Pages", domain: "yellowpages.com", brand: "#F0A800" },
      { name: "MapQuest", domain: "mapquest.com", brand: "#1B6AC6" },
      { name: "Citysearch", domain: "citysearch.com", brand: "#0B132B" },
    ],
  },
  {
    key: "industry",
    label: "Industry Directories",
    stat: "DR 60+ avg.",
    iconId: "Xvgz6ComUhTH",
    accent: "#0EA5E9",
    accentDark: "#0369A1",
    accentSoft: "#E0F2FE",
    directories: [
      { name: "Angi", domain: "angi.com", brand: "#FF7424" },
      { name: "HomeAdvisor", domain: "homeadvisor.com", brand: "#F58025" },
      { name: "Houzz", domain: "houzz.com", brand: "#7AC142" },
      { name: "Thumbtack", domain: "thumbtack.com", brand: "#009FD9" },
      { name: "Avvo", domain: "avvo.com", brand: "#1A4977" },
      { name: "Healthgrades", domain: "healthgrades.com", brand: "#0078A4" },
      { name: "Cars.com", domain: "cars.com", brand: "#9C0A0A" },
      { name: "TripAdvisor", domain: "tripadvisor.com", brand: "#34E0A1" },
    ],
  },
  {
    key: "reviews",
    label: "Review & Trust",
    stat: "Real customer signals",
    iconId: "19417",
    accent: "#F59E0B",
    accentDark: "#B45309",
    accentSoft: "#FEF3C7",
    directories: [
      { name: "Trustpilot", domain: "trustpilot.com", brand: "#00B67A" },
      { name: "BBB", domain: "bbb.org", brand: "#0033A0" },
      { name: "G2", domain: "g2.com", brand: "#FF492C" },
      { name: "Glassdoor", domain: "glassdoor.com", brand: "#0CAA41" },
      { name: "Clutch", domain: "clutch.co", brand: "#17313B" },
      { name: "Birdeye", domain: "birdeye.com", brand: "#0E3F5C" },
      { name: "Reviews.io", domain: "reviews.io", brand: "#0E1E40" },
      { name: "Sitejabber", domain: "sitejabber.com", brand: "#FFB400" },
    ],
  },
  {
    key: "authority",
    label: "Authority Publications",
    stat: "DR 80+ editorial",
    iconId: "16951",
    accent: "#1677FF",
    accentDark: "#0D5FD9",
    accentSoft: "#EBF4FF",
    directories: [
      { name: "Forbes", domain: "forbes.com", brand: "#0B132B" },
      { name: "Inc", domain: "inc.com", brand: "#D6001C" },
      { name: "Entrepreneur", domain: "entrepreneur.com", brand: "#000000" },
      { name: "HubSpot", domain: "hubspot.com", brand: "#FF7A59" },
      { name: "Yahoo Finance", domain: "finance.yahoo.com", brand: "#6001D2" },
      { name: "Business Insider", domain: "businessinsider.com", brand: "#185ADB" },
      { name: "Bloomberg", domain: "bloomberg.com", brand: "#1D1D1B" },
      { name: "MarketWatch", domain: "marketwatch.com", brand: "#00A94F" },
    ],
  },
]

function favicon(domain: string, size = 64) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

function DirectoryChip({ d, accent }: { d: Directory; accent: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 pl-1.5 pr-2.5 py-1.5 rounded-[10px] min-w-0 transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        background: "#fff",
        border: `1px solid ${accent}26`,
        boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
      }}
    >
      <span
        className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center shrink-0"
        style={{
          background: "#fff",
          border: `1px solid ${d.brand}33`,
        }}
      >
        <img
          src={favicon(d.domain, 64)}
          alt={d.name}
          width={14}
          height={14}
          loading="lazy"
          decoding="async"
          className="w-[14px] h-[14px] object-contain"
        />
      </span>
      <span
        className="text-[12px] font-semibold truncate"
        style={{ color: "var(--ink)" }}
      >
        {d.name}
      </span>
    </span>
  )
}

function QuadrantPanel({ q, index }: { q: Quadrant; index: number }) {
  return (
    <div
      className="relative overflow-hidden p-5 sm:p-6"
      style={{
        animation: `fadeInUp 0.7s ease-out ${0.06 * index}s both`,
      }}
    >
      {/* Corner aura */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-12 w-[240px] h-[240px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${q.accent}1F 0%, transparent 65%)`,
        }}
      />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span
            className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0"
            style={{
              background: q.accentSoft,
              border: `1px solid ${q.accent}33`,
            }}
          >
            <img
              src={icons8Url(q.iconId, 96)}
              alt=""
              width={28}
              height={28}
              loading="lazy"
              decoding="async"
              className="w-[28px] h-[28px] object-contain"
            />
          </span>
          <div className="flex-1 min-w-0">
            <h3
              className="text-[16px] sm:text-[17px] font-bold leading-tight tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              {q.label}
            </h3>
            <span
              className="inline-flex mt-1 text-[11px] font-bold uppercase tracking-[0.1em]"
              style={{ color: q.accentDark }}
            >
              {q.stat}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {q.directories.map((d) => (
            <DirectoryChip key={d.domain} d={d} accent={q.accent} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function BacklinksDirectoryNetwork() {
  return (
    <section
      id="backlinks-network"
      aria-labelledby="backlinks-network-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] right-[-10%] w-[620px] h-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Where we get you placed"
          heading={
            <span id="backlinks-network-heading">
              Featured across 200+ directories real customers{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">actually use</span>.
              </span>
            </span>
          }
          paragraph="Every campaign mixes four directory categories — local citations, industry-specific hubs, review platforms, and authority publications — so your business shows up wherever your buyers are searching."
        />

        <div className="mt-14">
          <div
            className="relative card-surface overflow-hidden"
            style={{
              borderRadius: "var(--radius-xl)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.06), 0 16px 40px rgba(17,35,68,0.10)",
            }}
          >
            {/* 2x2 quadrant mosaic */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:[&>*:nth-child(-n+2)]:border-b"
              style={{
                borderColor: "var(--border-color)",
              }}
            >
              {quadrants.map((q, idx) => (
                <div
                  key={q.key}
                  className={
                    idx % 2 === 0
                      ? "md:border-r"
                      : ""
                  }
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <QuadrantPanel q={q} index={idx} />
                </div>
              ))}
            </div>

            {/* Inline CTA band */}
            <div
              className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 border-t"
              style={{
                borderColor: "var(--border-color)",
                background:
                  "linear-gradient(180deg, #FAFBFD 0%, #fff 100%)",
              }}
            >
              <span
                className="inline-flex items-center gap-2 text-[14px] font-semibold flex-1 text-center sm:text-left"
                style={{ color: "var(--ink)" }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(20,184,166,0.14)",
                    color: "#0F766E",
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
                Don&rsquo;t see your industry? We have 200+ niche directories on file.
              </span>
              <SecondaryButton asLink href="#contact">
                Map my directory mix
              </SecondaryButton>
            </div>
          </div>

          {/* Cross-link inline */}
          <p
            className="mt-6 text-center text-[14px]"
            style={{ color: "var(--muted)" }}
          >
            Citations are the foundation of{" "}
            <a
              href="/services/seo/local"
              className="font-semibold underline decoration-[var(--accent)]/30 hover:decoration-[var(--accent)]"
              style={{ color: "var(--accent)" }}
            >
              local SEO
            </a>
            . For Tier-1 editorial pickups, see{" "}
            <a
              href="/services/seo/press-releases"
              className="font-semibold underline decoration-[var(--accent)]/30 hover:decoration-[var(--accent)]"
              style={{ color: "var(--accent)" }}
            >
              press release distribution
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

import { SectionHeader } from "@/components/ui/section-header"
import { icons8Url } from "@/lib/icons8"
import { Globe, MapPin, Briefcase, Star, Mic } from "lucide-react"

type Dir = { name: string; domain: string; brand: string }

type Industry = {
  key: string
  label: string
  iconId: string
  href: string
  cells: Dir[][] // 5 columns: General, Local, Industry, Reviews, Voice/Maps
}

const categories = [
  { Icon: Globe, label: "General" },
  { Icon: MapPin, label: "Local" },
  { Icon: Briefcase, label: "Industry" },
  { Icon: Star, label: "Reviews" },
  { Icon: Mic, label: "Voice & Maps" },
]

const industries: Industry[] = [
  {
    key: "home",
    label: "Home Services",
    iconId: "23340",
    href: "/industries/home-services",
    cells: [
      [
        { name: "Yellow Pages", domain: "yellowpages.com", brand: "#F0A800" },
        { name: "Citysearch", domain: "citysearch.com", brand: "#0B132B" },
      ],
      [
        { name: "Google Business", domain: "business.google.com", brand: "#4285F4" },
        { name: "Yelp", domain: "yelp.com", brand: "#D32323" },
        { name: "BBB", domain: "bbb.org", brand: "#0033A0" },
      ],
      [
        { name: "Angi", domain: "angi.com", brand: "#FF7424" },
        { name: "HomeAdvisor", domain: "homeadvisor.com", brand: "#F58025" },
        { name: "Houzz", domain: "houzz.com", brand: "#7AC142" },
      ],
      [
        { name: "Trustpilot", domain: "trustpilot.com", brand: "#00B67A" },
        { name: "Birdeye", domain: "birdeye.com", brand: "#0E3F5C" },
      ],
      [
        { name: "Apple Business", domain: "apple.com", brand: "#0B132B" },
        { name: "Bing Places", domain: "bingplaces.com", brand: "#008373" },
      ],
    ],
  },
  {
    key: "local",
    label: "Local Pros",
    iconId: "11901",
    href: "/industries/local-service",
    cells: [
      [
        { name: "Yellow Pages", domain: "yellowpages.com", brand: "#F0A800" },
        { name: "Foursquare", domain: "foursquare.com", brand: "#F94877" },
      ],
      [
        { name: "Google Business", domain: "business.google.com", brand: "#4285F4" },
        { name: "Yelp", domain: "yelp.com", brand: "#D32323" },
        { name: "Nextdoor", domain: "nextdoor.com", brand: "#0CAA41" },
      ],
      [
        { name: "Avvo", domain: "avvo.com", brand: "#1A4977" },
        { name: "Clutch", domain: "clutch.co", brand: "#17313B" },
        { name: "Bark", domain: "bark.com", brand: "#FF4060" },
      ],
      [
        { name: "Trustpilot", domain: "trustpilot.com", brand: "#00B67A" },
        { name: "BBB", domain: "bbb.org", brand: "#0033A0" },
      ],
      [
        { name: "Apple Business", domain: "apple.com", brand: "#0B132B" },
        { name: "Bing Places", domain: "bingplaces.com", brand: "#008373" },
      ],
    ],
  },
  {
    key: "restaurants",
    label: "Restaurants",
    iconId: "12040",
    href: "/industries/restaurants",
    cells: [
      [
        { name: "Yellow Pages", domain: "yellowpages.com", brand: "#F0A800" },
        { name: "Foursquare", domain: "foursquare.com", brand: "#F94877" },
      ],
      [
        { name: "Google Business", domain: "business.google.com", brand: "#4285F4" },
        { name: "Yelp", domain: "yelp.com", brand: "#D32323" },
      ],
      [
        { name: "OpenTable", domain: "opentable.com", brand: "#DA3743" },
        { name: "TripAdvisor", domain: "tripadvisor.com", brand: "#34E0A1" },
        { name: "Grubhub", domain: "grubhub.com", brand: "#F63440" },
      ],
      [
        { name: "TripAdvisor", domain: "tripadvisor.com", brand: "#34E0A1" },
        { name: "Zomato", domain: "zomato.com", brand: "#E23744" },
      ],
      [
        { name: "Apple Maps", domain: "apple.com", brand: "#0B132B" },
        { name: "Waze", domain: "waze.com", brand: "#33CCFF" },
      ],
    ],
  },
  {
    key: "medical",
    label: "Medical",
    iconId: "14867",
    href: "/industries/medical",
    cells: [
      [
        { name: "WebMD", domain: "webmd.com", brand: "#1A1F71" },
        { name: "Yellow Pages", domain: "yellowpages.com", brand: "#F0A800" },
      ],
      [
        { name: "Google Business", domain: "business.google.com", brand: "#4285F4" },
        { name: "Yelp", domain: "yelp.com", brand: "#D32323" },
      ],
      [
        { name: "Healthgrades", domain: "healthgrades.com", brand: "#0078A4" },
        { name: "Vitals", domain: "vitals.com", brand: "#0F8C7C" },
        { name: "Zocdoc", domain: "zocdoc.com", brand: "#1A6FF8" },
      ],
      [
        { name: "Healthgrades", domain: "healthgrades.com", brand: "#0078A4" },
        { name: "BBB", domain: "bbb.org", brand: "#0033A0" },
      ],
      [
        { name: "Apple Business", domain: "apple.com", brand: "#0B132B" },
        { name: "Bing Places", domain: "bingplaces.com", brand: "#008373" },
      ],
    ],
  },
  {
    key: "automotive",
    label: "Automotive",
    iconId: "15126",
    href: "/industries/automotive",
    cells: [
      [
        { name: "Cars.com", domain: "cars.com", brand: "#9C0A0A" },
        { name: "AutoTrader", domain: "autotrader.com", brand: "#E31E26" },
      ],
      [
        { name: "Google Business", domain: "business.google.com", brand: "#4285F4" },
        { name: "Yelp", domain: "yelp.com", brand: "#D32323" },
      ],
      [
        { name: "DealerRater", domain: "dealerrater.com", brand: "#0066B3" },
        { name: "Edmunds", domain: "edmunds.com", brand: "#1B96D6" },
        { name: "KBB", domain: "kbb.com", brand: "#003E7E" },
      ],
      [
        { name: "DealerRater", domain: "dealerrater.com", brand: "#0066B3" },
        { name: "BBB", domain: "bbb.org", brand: "#0033A0" },
      ],
      [
        { name: "Apple Maps", domain: "apple.com", brand: "#0B132B" },
        { name: "Waze", domain: "waze.com", brand: "#33CCFF" },
      ],
    ],
  },
  {
    key: "beauty",
    label: "Beauty & Wellness",
    iconId: "18371",
    href: "/industries/local-service",
    cells: [
      [
        { name: "Yellow Pages", domain: "yellowpages.com", brand: "#F0A800" },
        { name: "Citysearch", domain: "citysearch.com", brand: "#0B132B" },
      ],
      [
        { name: "Google Business", domain: "business.google.com", brand: "#4285F4" },
        { name: "Yelp", domain: "yelp.com", brand: "#D32323" },
      ],
      [
        { name: "Booksy", domain: "booksy.com", brand: "#1A1A2C" },
        { name: "StyleSeat", domain: "styleseat.com", brand: "#5046C9" },
        { name: "Vagaro", domain: "vagaro.com", brand: "#FF541B" },
      ],
      [
        { name: "Trustpilot", domain: "trustpilot.com", brand: "#00B67A" },
        { name: "BBB", domain: "bbb.org", brand: "#0033A0" },
      ],
      [
        { name: "Apple Business", domain: "apple.com", brand: "#0B132B" },
        { name: "Bing Places", domain: "bingplaces.com", brand: "#008373" },
      ],
    ],
  },
]

function favicon(domain: string, size = 64) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

function CellPill({ d }: { d: Dir }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-full max-w-full min-w-0"
      style={{
        background: "#fff",
        border: "1px solid var(--border-color)",
        boxShadow: "0 1px 2px rgba(17,35,68,0.04)",
      }}
    >
      <span
        className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center shrink-0"
        style={{
          background: "#fff",
          border: `1px solid ${d.brand}33`,
        }}
      >
        <img
          src={favicon(d.domain, 64)}
          alt={d.name}
          width={12}
          height={12}
          loading="lazy"
          decoding="async"
          className="w-[12px] h-[12px] object-contain"
        />
      </span>
      <span
        className="text-[11.5px] font-semibold truncate"
        style={{ color: "var(--ink)" }}
      >
        {d.name}
      </span>
    </span>
  )
}

export function BacklinksCoverageMatrix() {
  return (
    <section
      id="backlinks-coverage"
      aria-labelledby="backlinks-coverage-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[560px] h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Citation coverage matrix"
          heading={
            <span id="backlinks-coverage-heading">
              The right directories for{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">your industry</span>.
              </span>
            </span>
          }
          paragraph="Every vertical has its own ranking-grade directories. Here’s the playbook we use to map citations and editorial backlinks to where your buyers actually search."
        />

        {/* Desktop matrix */}
        <div
          className="mt-14 hidden lg:block"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            className="relative card-surface overflow-hidden"
            style={{
              borderRadius: "var(--radius-xl)",
              boxShadow:
                "0 1px 3px rgba(17,35,68,0.06), 0 16px 40px rgba(17,35,68,0.10)",
            }}
          >
            {/* Header row */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: "minmax(200px, 1.2fr) repeat(5, 1fr)",
                background:
                  "linear-gradient(180deg, #F8FAFC 0%, #fff 100%)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <div
                className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "var(--muted)" }}
              >
                Industry
              </div>
              {categories.map((c) => (
                <div
                  key={c.label}
                  className="px-4 py-4 flex items-center gap-2 border-l"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <span
                    className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(20,184,166,0.12)",
                      color: "#0F766E",
                    }}
                  >
                    <c.Icon className="w-3.5 h-3.5" strokeWidth={2.25} />
                  </span>
                  <span
                    className="text-[12px] font-bold tracking-[-0.005em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Industry rows */}
            {industries.map((ind, rowIdx) => (
              <div
                key={ind.key}
                className="grid border-t group"
                style={{
                  gridTemplateColumns: "minmax(200px, 1.2fr) repeat(5, 1fr)",
                  borderColor: "var(--border-color)",
                  background:
                    rowIdx % 2 === 1 ? "rgba(20,184,166,0.025)" : "transparent",
                }}
              >
                <a
                  href={ind.href}
                  className="px-5 py-4 flex items-center gap-3 transition-colors hover:bg-[rgba(20,184,166,0.06)]"
                >
                  <span
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{
                      background: "#fff",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <img
                      src={icons8Url(ind.iconId, 96)}
                      alt=""
                      width={26}
                      height={26}
                      loading="lazy"
                      decoding="async"
                      className="w-[26px] h-[26px] object-contain"
                    />
                  </span>
                  <span
                    className="text-[14px] font-bold leading-tight tracking-[-0.005em]"
                    style={{ color: "var(--ink)" }}
                  >
                    {ind.label}
                  </span>
                </a>
                {ind.cells.map((cell, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-4 flex flex-wrap content-start gap-1.5 border-l transition-colors hover:bg-[rgba(20,184,166,0.04)]"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    {cell.map((d) => (
                      <CellPill key={d.domain + ind.key + idx} d={d} />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet stacked view */}
        <div
          className="mt-12 lg:hidden space-y-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {industries.map((ind) => (
            <div
              key={ind.key}
              className="card-surface overflow-hidden p-5"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <a
                href={ind.href}
                className="flex items-center gap-3"
              >
                <span
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <img
                    src={icons8Url(ind.iconId, 96)}
                    alt=""
                    width={26}
                    height={26}
                    loading="lazy"
                    decoding="async"
                    className="w-[26px] h-[26px] object-contain"
                  />
                </span>
                <span
                  className="text-[16px] font-bold tracking-[-0.005em]"
                  style={{ color: "var(--ink)" }}
                >
                  {ind.label}
                </span>
              </a>
              <div className="mt-4 space-y-2.5">
                {ind.cells.map((cell, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span
                      className="shrink-0 inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em] mt-0.5"
                      style={{
                        background: "rgba(20,184,166,0.10)",
                        color: "#0F766E",
                        minWidth: 110,
                      }}
                    >
                      {(() => {
                        const C = categories[idx].Icon
                        return <C className="w-3 h-3" strokeWidth={2.5} />
                      })()}
                      {categories[idx].label}
                    </span>
                    <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                      {cell.map((d) => (
                        <CellPill key={d.domain + ind.key + idx} d={d} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cross-links */}
        <p
          className="mt-8 text-center text-[14px]"
          style={{ color: "var(--muted)" }}
        >
          Citations are foundational for{" "}
          <a
            href="/services/seo/local"
            className="font-semibold underline decoration-[var(--accent)]/30 hover:decoration-[var(--accent)]"
            style={{ color: "var(--accent)" }}
          >
            local SEO
          </a>
          . Pair them with{" "}
          <a
            href="/services/seo/off-page"
            className="font-semibold underline decoration-[var(--accent)]/30 hover:decoration-[var(--accent)]"
            style={{ color: "var(--accent)" }}
          >
            off-page authority
          </a>{" "}
          for compounding lift.
        </p>
      </div>
    </section>
  )
}

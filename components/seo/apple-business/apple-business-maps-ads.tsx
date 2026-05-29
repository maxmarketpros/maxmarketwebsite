import {
  Sparkles,
  Crosshair,
  Gauge,
  SlidersHorizontal,
  ShieldCheck,
  Search,
  Star,
  Coffee,
  ArrowRight,
} from "lucide-react"

const features = [
  {
    Icon: Crosshair,
    title: "The only ad in the result",
    body: "Apple shows just one ad at the top of Maps search and in the new Suggested Places feed — marked by a subtle blue halo. No cluttered auction page; you either own the spot or you don't.",
  },
  {
    Icon: Gauge,
    title: "Pay only on outcomes",
    body: "Auction-based pricing where you pay when someone views or taps your ad — at a budget you set, with the freedom to start or stop a campaign anytime.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Automated or advanced",
    body: "Launch in a few simple steps from your profile, or run advanced campaigns with scheduling and location targeting through Apple Ads. We manage whichever fits your goals.",
  },
  {
    Icon: ShieldCheck,
    title: "Private by design",
    body: "Targeting is contextual — search term, approximate location, the map area on screen — and never tied to a customer's Apple Account. All on-device. A trust signal iPhone users notice.",
  },
]

export function AppleBusinessMapsAds() {
  return (
    <section
      id="apple-maps-ads"
      aria-labelledby="apple-business-mapsads-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-6%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.12) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        {/* New banner */}
        <div className="flex justify-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-[0.12em]"
            style={{
              background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
              color: "#fff",
              boxShadow: "0 6px 18px rgba(22,119,255,0.35)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2.75} />
            New · Launching summer 2026 · US & Canada
          </span>
        </div>

        <div className="mt-6 text-center max-w-[760px] mx-auto">
          <h2
            id="apple-business-mapsads-heading"
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Be the <span className="accent-underline">one ad</span> your customer
            sees on Apple Maps.
          </h2>
          <p
            className="mt-5 text-[17px] sm:text-[19px] leading-[1.6]"
            style={{ color: "var(--muted)", margin: "20px auto 0" }}
          >
            Apple Maps Ads reach people the moment they&rsquo;re searching for a
            business like yours and deciding where to go. We get you claimed and
            optimized now so you launch on day one — and claim the top spot before
            your competitors even know it exists.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
          {/* Search results mockup */}
          <div style={{ animation: "fadeInUp 0.7s ease-out both" }}>
            <MapsSearchMock />
          </div>

          {/* Feature points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, idx) => (
              <div
                key={f.title}
                className="card-surface card-surface-hover p-6"
                style={{
                  borderRadius: "var(--radius-lg)",
                  animation: `fadeInUp 0.6s ease-out ${0.07 * idx}s both`,
                }}
              >
                <span
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                  style={{
                    background: "rgba(22,119,255,0.1)",
                    color: "var(--accent)",
                  }}
                >
                  <f.Icon className="w-[22px] h-[22px]" strokeWidth={2.25} />
                </span>
                <h3
                  className="mt-4 text-[16.5px] font-bold leading-[1.25]"
                  style={{ color: "var(--ink)" }}
                >
                  {f.title}
                </h3>
                <p
                  className="mt-2 text-[13.5px] leading-[1.55]"
                  style={{ color: "var(--muted)" }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA band */}
        <div
          className="mt-12 rounded-[var(--radius-xl)] px-6 sm:px-10 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          style={{
            background:
              "linear-gradient(135deg, rgba(22,119,255,0.1) 0%, rgba(116,211,255,0.12) 100%)",
            border: "1px solid rgba(22,119,255,0.22)",
          }}
        >
          <div>
            <h3
              className="text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
              style={{ color: "var(--ink)" }}
            >
              First-mover advantage closes fast.
            </h3>
            <p
              className="mt-2 text-[15px] leading-[1.55] max-w-[560px]"
              style={{ color: "var(--muted)" }}
            >
              We&rsquo;ll have your profile launch-ready and reserve your category
              the day Apple Maps Ads go live in your market.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[var(--radius-sm)] font-semibold text-[16px] text-white transition-all duration-200 hover:translate-y-[-1px]"
            style={{
              background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
              boxShadow:
                "0 1px 2px rgba(17,35,68,0.12), 0 8px 24px rgba(22,119,255,0.35)",
            }}
          >
            Claim my market
            <ArrowRight className="w-4 h-4" strokeWidth={2.75} />
          </a>
        </div>
      </div>
    </section>
  )
}

type Result = {
  name: string
  meta: string
  rating: string
  sponsored?: boolean
}

const results: Result[] = [
  {
    name: "Blue Harbor Coffee",
    meta: "Coffee shop · 0.3 mi · Open now",
    rating: "4.8",
    sponsored: true,
  },
  { name: "The Daily Grind", meta: "Cafe · 0.5 mi · Open now", rating: "4.6" },
  { name: "Roast & Co.", meta: "Coffee shop · 0.7 mi · Open now", rating: "4.5" },
]

function MapsSearchMock() {
  return (
    <div className="relative max-w-[420px] mx-auto">
      <div
        className="card-surface overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          boxShadow:
            "0 1px 3px rgba(17,35,68,0.1), 0 24px 60px rgba(17,35,68,0.18)",
        }}
      >
        {/* search bar */}
        <div
          className="px-4 py-3"
          style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-color)" }}
        >
          <div
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-full"
            style={{ background: "var(--surface)", border: "1px solid var(--border-color)" }}
          >
            <Search
              className="w-4 h-4"
              strokeWidth={2.5}
              style={{ color: "var(--muted)" }}
            />
            <span
              className="text-[13.5px] font-medium"
              style={{ color: "var(--ink)" }}
            >
              coffee near me
            </span>
          </div>
        </div>

        {/* results */}
        <ul>
          {results.map((r, idx) => (
            <li
              key={r.name}
              className="relative flex items-center gap-3 px-4 py-3.5"
              style={{
                borderBottom:
                  idx < results.length - 1
                    ? "1px solid var(--border-color)"
                    : "none",
                background: r.sponsored ? "rgba(22,119,255,0.05)" : "transparent",
              }}
            >
              {/* pin */}
              <span className="relative shrink-0">
                {r.sponsored && (
                  <span
                    aria-hidden
                    className="absolute inset-0 -m-1.5 rounded-full"
                    style={{
                      background: "rgba(22,119,255,0.2)",
                      animation: "subtlePulse 1.8s ease-in-out infinite",
                    }}
                  />
                )}
                <span
                  className="relative w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: r.sponsored
                      ? "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)"
                      : "var(--bg)",
                    color: r.sponsored ? "#fff" : "var(--muted)",
                    border: r.sponsored
                      ? "2px solid #fff"
                      : "1px solid var(--border-color)",
                    boxShadow: r.sponsored
                      ? "0 3px 8px rgba(22,119,255,0.4)"
                      : "none",
                  }}
                >
                  <Coffee className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="text-[14.5px] font-bold truncate"
                    style={{ color: "var(--ink)" }}
                  >
                    {r.name}
                  </span>
                  {r.sponsored && (
                    <span
                      className="shrink-0 text-[9px] font-extrabold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
                      style={{ background: "var(--accent)", color: "#fff" }}
                    >
                      Ad
                    </span>
                  )}
                </div>
                <div
                  className="text-[11.5px] font-medium mt-0.5 truncate"
                  style={{ color: "var(--muted)" }}
                >
                  {r.meta}
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <Star
                  className="w-3.5 h-3.5"
                  strokeWidth={2.5}
                  style={{ color: "#F5A623", fill: "#F5A623" }}
                />
                <span
                  className="text-[12.5px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  {r.rating}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* floating label */}
      <div
        className="absolute -top-4 -right-3 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full"
        style={{
          background: "var(--surface)",
          border: "1px solid rgba(22,119,255,0.3)",
          boxShadow: "0 8px 22px rgba(22,119,255,0.18)",
          transform: "rotate(3deg)",
        }}
      >
        <Crosshair
          className="w-3.5 h-3.5"
          strokeWidth={2.5}
          style={{ color: "var(--accent)" }}
        />
        <span
          className="text-[11.5px] font-bold"
          style={{ color: "var(--ink)" }}
        >
          Top of search
        </span>
      </div>
    </div>
  )
}

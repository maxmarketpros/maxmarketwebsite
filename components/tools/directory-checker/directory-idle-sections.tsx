import {
  Search,
  MapPin,
  Mic,
  Star,
  Compass,
  Network,
  ArrowRight,
  Sparkles,
} from "lucide-react"

const SOURCES = [
  {
    Icon: Search,
    title: "Search engines",
    body: "Google Business Profile, Bing Places, Yahoo Local — the listings that decide whether you show up in the map pack at all.",
  },
  {
    Icon: MapPin,
    title: "Map & GPS apps",
    body: "Apple Maps, Waze, TomTom, HERE — driving customers right to your door instead of a competitor's.",
  },
  {
    Icon: Mic,
    title: "Voice assistants",
    body: "Siri, Alexa, Google Assistant — the source of truth they read out loud when someone asks for a local provider.",
  },
  {
    Icon: Star,
    title: "Review sites",
    body: "Yelp, TripAdvisor, BBB, Yellow Pages — high-authority pages that often outrank your own website.",
  },
  {
    Icon: Compass,
    title: "Local directories",
    body: "Citysearch, Foursquare, MerchantCircle, Manta — niche sites that still feed Google's local index.",
  },
  {
    Icon: Network,
    title: "Data aggregators",
    body: "Factual, Neustar/Localeze, Data Axle — the wholesalers that quietly push your info to hundreds of other sites.",
  },
]

const STEPS = [
  {
    num: "01",
    title: "Tell us about your business",
    body: "One short form. Just business name, address, and phone — that's it.",
  },
  {
    num: "02",
    title: "We scan 50+ sources in seconds",
    body: "Powered by Yext's listing-scan engine — the same one Fortune 500 brands use to keep their data clean.",
  },
  {
    num: "03",
    title: "See exactly what's broken",
    body: "Missing, wrong, and duplicate listings — color-coded so you know what to fix first.",
  },
]

export function DirectoryIdleSections() {
  return (
    <>
      {/* What we scan */}
      <section
        aria-labelledby="directory-coverage-heading"
        className="section-container py-16 sm:py-20 lg:py-24"
      >
        <div className="text-center max-w-[720px] mx-auto">
          <span
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
            style={{
              background: "var(--accent-bg)",
              borderColor: "var(--border-color)",
              color: "var(--accent)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
            What we check
          </span>
          <h2
            id="directory-coverage-heading"
            className="mt-5 text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Every directory that decides{" "}
            <span className="accent-underline">whether you get found</span>.
          </h2>
          <p
            className="mt-4 text-[16px] sm:text-[17.5px] leading-[1.55]"
            style={{ color: "var(--muted)" }}
          >
            Inconsistent name, address, or phone info across the web confuses
            Google and costs you map-pack rankings. We scan the sources that
            actually move the needle.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOURCES.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="card-surface card-surface-hover p-6"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <span
                className="w-12 h-12 rounded-[var(--radius-md)] inline-flex items-center justify-center"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                }}
              >
                <Icon className="w-6 h-6" strokeWidth={2} />
              </span>
              <h3
                className="mt-4 text-[18px] font-bold tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                {title}
              </h3>
              <p
                className="mt-1.5 text-[14px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        aria-labelledby="directory-how-heading"
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, rgba(22,119,255,0.10) 0%, transparent 60%), var(--bg)",
        }}
      >
        <div className="absolute inset-0 noise-overlay pointer-events-none" />
        <div className="section-container relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-[640px] mx-auto">
            <h2
              id="directory-how-heading"
              className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              How it works.
            </h2>
            <p
              className="mt-4 text-[16px] sm:text-[17.5px] leading-[1.55]"
              style={{ color: "var(--muted)" }}
            >
              A clear picture of your local visibility in under a minute.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="relative card-surface p-6 sm:p-7"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span
                  className="inline-block text-[12px] font-bold font-mono tracking-[0.08em] px-2.5 py-1 rounded-full"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  {s.num}
                </span>
                <h3
                  className="mt-4 text-[20px] font-bold tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-1.5 text-[14.5px] leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft CTA strip */}
      <section className="section-container py-14 sm:py-16 lg:py-20">
        <div
          className="relative overflow-hidden p-6 sm:p-10"
          style={{
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, rgba(22,119,255,0.95) 0%, rgba(11,19,43,0.95) 100%)",
            boxShadow:
              "0 4px 14px rgba(17,35,68,0.10), 0 30px 80px rgba(22,119,255,0.18)",
          }}
        >
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(116,211,255,0.40) 0%, transparent 65%)",
              filter: "blur(20px)",
            }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-8">
            <div className="flex-1 min-w-0">
              <h3
                className="text-[22px] sm:text-[28px] font-bold leading-[1.2] tracking-[-0.01em]"
                style={{ color: "#FFFFFF" }}
              >
                Skip the scan. Let us fix your listings.
              </h3>
              <p
                className="mt-2 text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-[560px]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                We manage listings across 70+ sources, monitor for changes, and
                push updates everywhere instantly &mdash; so your info stays
                clean for good.
              </p>
            </div>
            <a
              href="/contact/schedule"
              className="inline-flex items-center justify-center font-bold transition-all duration-200 rounded-[var(--radius-sm)] px-6 py-3 text-[15px] shrink-0 shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:translate-y-[-1px]"
              style={{ background: "#FFFFFF", color: "var(--accent)" }}
            >
              Book a free call
              <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2.75} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

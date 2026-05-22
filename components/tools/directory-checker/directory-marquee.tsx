const DIRECTORIES: { name: string; domain: string }[] = [
  { name: "Google", domain: "google.com" },
  { name: "Apple Maps", domain: "apple.com" },
  { name: "Bing", domain: "bing.com" },
  { name: "Yelp", domain: "yelp.com" },
  { name: "Facebook", domain: "facebook.com" },
  { name: "Yahoo", domain: "yahoo.com" },
  { name: "TripAdvisor", domain: "tripadvisor.com" },
  { name: "Foursquare", domain: "foursquare.com" },
  { name: "MapQuest", domain: "mapquest.com" },
  { name: "Yellow Pages", domain: "yellowpages.com" },
  { name: "Citysearch", domain: "citysearch.com" },
  { name: "BBB", domain: "bbb.org" },
  { name: "Waze", domain: "waze.com" },
  { name: "Alexa", domain: "alexa.com" },
  { name: "Nextdoor", domain: "nextdoor.com" },
  { name: "DuckDuckGo", domain: "duckduckgo.com" },
  { name: "MerchantCircle", domain: "merchantcircle.com" },
  { name: "Manta", domain: "manta.com" },
  { name: "ShowMeLocal", domain: "showmelocal.com" },
  { name: "HERE", domain: "here.com" },
  { name: "TomTom", domain: "tomtom.com" },
  { name: "Factual", domain: "factual.com" },
]

function favicon(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
}

export function DirectoryMarquee() {
  // Render the list twice so the keyframe can translateX(-50%) seamlessly.
  const loop = [...DIRECTORIES, ...DIRECTORIES]

  return (
    <section
      aria-label="Directories we scan"
      className="relative py-10 sm:py-14"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div className="section-container">
        <p
          className="text-center text-[11.5px] sm:text-[12.5px] font-semibold uppercase tracking-[0.12em] mb-6 sm:mb-8"
          style={{ color: "var(--muted)" }}
        >
          Scanning your business across 50+ sources
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-16 sm:w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--surface), transparent)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-16 sm:w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--surface), transparent)",
          }}
        />

        <div
          className="flex items-center gap-10 sm:gap-14 w-max"
          style={{ animation: "marquee 60s linear infinite" }}
        >
          {loop.map((d, i) => (
            <div
              key={`${d.domain}-${i}`}
              className="flex items-center gap-2.5 shrink-0 opacity-70 hover:opacity-100 transition-opacity"
              title={d.name}
            >
              <img
                src={favicon(d.domain)}
                alt=""
                width={28}
                height={28}
                loading="lazy"
                className="w-7 h-7 rounded-[6px] shrink-0"
              />
              <span
                className="text-[14.5px] sm:text-[15.5px] font-semibold whitespace-nowrap"
                style={{ color: "var(--ink)" }}
              >
                {d.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

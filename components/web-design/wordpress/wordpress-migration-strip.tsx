import { SectionHeader } from "@/components/ui/section-header"
import { ArrowRight } from "lucide-react"

const WP_BLUE = "#00749C"

type Source = { name: string; domain: string; href: string }

const sources: Source[] = [
  { name: "Squarespace", domain: "squarespace.com", href: "/services/web-design/squarespace" },
  { name: "Wix", domain: "wix.com", href: "/services/web-design/wix" },
  { name: "GoDaddy", domain: "godaddy.com", href: "/services/web-design/godaddy" },
  { name: "Shopify", domain: "shopify.com", href: "/services/web-design" },
  { name: "Webflow", domain: "webflow.com", href: "/services/web-design/webflow" },
]

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

export function WordpressMigrationStrip() {
  return (
    <section
      id="wordpress-migration"
      aria-labelledby="wordpress-migration-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Migration paths"
          heading={
            <span id="wordpress-migration-heading">
              Move your site{" "}
              <span className="whitespace-nowrap">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 65%, rgba(0,116,156,0.30) 65%)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                >
                  onto WordPress
                </span>
                .
              </span>
            </span>
          }
          paragraph="A 301 redirect map, careful content migration, no ranking loss, and a zero-downtime DNS cutover. Most clients see traffic recover or grow within 30 days."
        />

        <div
          className="mt-12 max-w-[920px] mx-auto"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <div
            className="card-surface p-5 sm:p-7"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap justify-center">
              {sources.map((s, i) => (
                <SourceTile key={s.name} source={s} index={i} />
              ))}
              <div
                className="flex items-center gap-1 mx-1 hidden sm:flex"
                aria-hidden
              >
                <span
                  className="block w-6 h-px"
                  style={{ background: WP_BLUE }}
                />
                <ArrowRight
                  className="w-4 h-4"
                  strokeWidth={2.5}
                  style={{ color: WP_BLUE }}
                />
              </div>
              <a
                href="#contact"
                className="shrink-0 inline-flex flex-col items-center gap-2 group"
              >
                <span
                  className="w-[64px] h-[64px] rounded-full flex items-center justify-center text-[24px] font-extrabold transition-transform group-hover:scale-105"
                  style={{
                    background: WP_BLUE,
                    color: "#fff",
                    fontFamily: "Outfit, sans-serif",
                    letterSpacing: "-0.04em",
                    boxShadow: "0 8px 22px rgba(0,116,156,0.35)",
                  }}
                >
                  W
                </span>
                <span
                  className="text-[12.5px] font-extrabold uppercase tracking-[0.10em]"
                  style={{ color: WP_BLUE }}
                >
                  WordPress
                </span>
              </a>
            </div>

            <div
              className="mt-6 pt-6 border-t flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13.5px]"
              style={{ borderColor: "var(--border-color)" }}
            >
              <span style={{ color: "var(--muted)" }}>
                Coming from another platform? Read its page:
              </span>
              {sources.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="font-semibold hover:underline"
                  style={{ color: WP_BLUE }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SourceTile({ source, index }: { source: Source; index: number }) {
  return (
    <a
      href={source.href}
      className="shrink-0 inline-flex flex-col items-center gap-2 group"
      style={{ animation: `fadeInUp 0.5s ease-out ${0.05 * index}s both` }}
    >
      <span
        className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105"
        style={{
          background: "#fff",
          border: "1px solid var(--border-color)",
          boxShadow: "0 2px 8px rgba(11,19,43,0.06)",
        }}
      >
        <img
          src={favicon(source.domain, 128)}
          alt={`${source.name} logo`}
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
          className="w-[28px] h-[28px] object-contain"
        />
      </span>
      <span
        className="text-[11.5px] font-bold"
        style={{ color: "var(--ink)" }}
      >
        {source.name}
      </span>
    </a>
  )
}

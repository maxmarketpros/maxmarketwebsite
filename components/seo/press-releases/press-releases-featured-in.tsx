import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Radio } from "lucide-react"

type Outlet = {
  name: string
  domain: string
  accent: string
}

const outletsA: Outlet[] = [
  { name: "Yahoo Finance", domain: "finance.yahoo.com", accent: "#6001D2" },
  { name: "AP News", domain: "apnews.com", accent: "#E03A3E" },
  { name: "MarketWatch", domain: "marketwatch.com", accent: "#00A94F" },
  { name: "Business Insider", domain: "businessinsider.com", accent: "#185ADB" },
  { name: "Benzinga", domain: "benzinga.com", accent: "#EA580C" },
  { name: "Digital Journal", domain: "digitaljournal.com", accent: "#0B132B" },
  { name: "Bloomberg", domain: "bloomberg.com", accent: "#1D1D1B" },
  { name: "Fox Business", domain: "foxbusiness.com", accent: "#003366" },
]

const outletsB: Outlet[] = [
  { name: "NBC News", domain: "nbcnews.com", accent: "#6B46C1" },
  { name: "CBS News", domain: "cbsnews.com", accent: "#D6001C" },
  { name: "MSN Money", domain: "msn.com", accent: "#0078D4" },
  { name: "Morningstar", domain: "morningstar.com", accent: "#C8102E" },
  { name: "Street Insider", domain: "streetinsider.com", accent: "#F59E0B" },
  { name: "Google News", domain: "news.google.com", accent: "#4285F4" },
  { name: "Apple News", domain: "apple.com", accent: "#000000" },
  { name: "Reuters", domain: "reuters.com", accent: "#FF8000" },
]

function favicon(domain: string, size = 64) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

function OutletChip({ name, domain, accent }: Outlet) {
  return (
    <span
      className="inline-flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-[14px] shrink-0 card-surface card-surface-hover"
      style={{ borderRadius: 14 }}
    >
      <span
        className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center shrink-0"
        style={{
          background: "#fff",
          border: `1px solid ${accent}33`,
          boxShadow: `0 0 0 2px ${accent}10`,
        }}
      >
        <img
          src={favicon(domain, 64)}
          alt={name}
          width={18}
          height={18}
          loading="lazy"
          decoding="async"
          className="w-[18px] h-[18px] object-contain"
        />
      </span>
      <span
        className="text-[14px] sm:text-[15px] font-semibold whitespace-nowrap"
        style={{ color: "var(--ink)" }}
      >
        {name}
      </span>
    </span>
  )
}

export function PressReleasesFeaturedIn() {
  return (
    <section
      aria-labelledby="press-releases-featured-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Featured in outlets that matter"
          heading={
            <span id="press-releases-featured-heading">
              Placements across{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">200+ real newsrooms</span>,
              </span>{" "}
              not press-release farms.
            </span>
          }
          paragraph="Every campaign goes out through the same PR wires journalists and investors read. You walk away with real dofollow links and real brand credibility — not syndicated junk nobody sees."
        />

        {/* Marquee */}
        <div
          className="mt-12 relative"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          }}
        >
          <style>{`
            @keyframes pr-marquee-a {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes pr-marquee-b {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .pr-marquee-track {
              display: flex;
              gap: 14px;
              width: max-content;
              padding: 8px 0;
            }
            .pr-marquee-a { animation: pr-marquee-a 38s linear infinite; }
            .pr-marquee-b { animation: pr-marquee-b 44s linear infinite; }
            @media (prefers-reduced-motion: reduce) {
              .pr-marquee-a, .pr-marquee-b { animation: none; }
            }
          `}</style>
          <div className="pr-marquee-track pr-marquee-a">
            {[...outletsA, ...outletsA].map((o, idx) => (
              <OutletChip key={`${o.name}-${idx}`} {...o} />
            ))}
          </div>
          <div className="pr-marquee-track pr-marquee-b mt-3">
            {[...outletsB, ...outletsB].map((o, idx) => (
              <OutletChip key={`${o.name}-${idx}`} {...o} />
            ))}
          </div>
        </div>

        {/* Inline CTA band */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          <span
            className="inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{ color: "var(--muted)" }}
          >
            <Radio className="w-4 h-4" strokeWidth={2.5} />
            Want to see if your industry qualifies?
          </span>
          <SecondaryButton asLink href="#contact">
            Check outlet fit for my business
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

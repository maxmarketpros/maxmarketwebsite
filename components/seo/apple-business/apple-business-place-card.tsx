import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  BadgeCheck,
  Building2,
  LayoutGrid,
  Camera,
  Zap,
  Mail,
  Gift,
  CalendarClock,
  Sparkles,
} from "lucide-react"

const features = [
  {
    Icon: BadgeCheck,
    title: "Claim & verify your location",
    body: "We claim (or re-claim) your business on Apple Business and pass verification — then reconcile your name, address, and phone so Apple trusts your data over scraped sources.",
  },
  {
    Icon: Building2,
    title: "Brand Profile",
    body: "Your real name and logo, displayed consistently across Apple Maps, Wallet, Tap to Pay, and tracked orders — so customers recognize you everywhere Apple shows your brand.",
  },
  {
    Icon: LayoutGrid,
    title: "Rich place card",
    body: "Hours (including holidays), categories, and attributes like parking, accessibility, payment types, and pet-friendly — every field filled to maximize ranking and clarity.",
  },
  {
    Icon: Camera,
    title: "Photos & Look Around",
    body: "Real, current, high-resolution interior and exterior shots that outperform stock — plus Look Around imagery for flagship locations where presentation closes the sale.",
  },
  {
    Icon: Zap,
    title: "Showcases",
    body: "Evergreen and seasonal tiles for offers, new products, menus, and announcements — refreshed monthly. Active Showcases lift visibility in category searches.",
  },
  {
    Icon: Mail,
    title: "Branded Mail & Caller ID",
    body: "Your logo and verified name appear in Apple Mail and on inbound calls through Business Caller ID — fewer ignored calls, more trust on every touchpoint.",
  },
]

const showcaseExamples = [
  {
    Icon: Gift,
    tag: "Offer",
    title: "$59 drain cleaning",
    sub: "Limited-time promo tile",
  },
  {
    Icon: CalendarClock,
    tag: "Seasonal",
    title: "Book your fall furnace tune-up",
    sub: "Auto-swaps every season",
  },
  {
    Icon: Sparkles,
    tag: "New",
    title: "Now offering tankless installs",
    sub: "Announce new services",
  },
]

export function AppleBusinessPlaceCard() {
  return (
    <section
      aria-labelledby="apple-business-placecard-heading"
      className="relative"
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Your place card, perfected"
          heading={
            <span id="apple-business-placecard-heading">
              Everything Apple shows about you —{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">set up right</span>
              </span>{" "}
              and kept fresh.
            </span>
          }
          paragraph="Apple ranks complete, consistent, actively-managed profiles above thin ones. We build out every field, keep your NAP consistent across Google, Yelp, and Tripadvisor, and refresh your Showcases so your card never goes stale."
        />

        {/* Feature bento */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="card-surface card-surface-hover p-6"
              style={{
                borderRadius: "var(--radius-lg)",
                animation: `fadeInUp 0.6s ease-out ${0.06 * idx}s both`,
              }}
            >
              <span
                className="w-11 h-11 rounded-[12px] flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(22,119,255,0.14) 0%, rgba(116,211,255,0.14) 100%)",
                  color: "var(--accent)",
                }}
              >
                <f.Icon className="w-[22px] h-[22px]" strokeWidth={2.25} />
              </span>
              <h3
                className="mt-4 text-[17.5px] font-bold leading-[1.25]"
                style={{ color: "var(--ink)" }}
              >
                {f.title}
              </h3>
              <p
                className="mt-2 text-[14px] leading-[1.55]"
                style={{ color: "var(--muted)" }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Showcases highlight panel */}
        <div
          className="mt-8 rounded-[var(--radius-xl)] overflow-hidden border"
          style={{
            borderColor: "var(--border-color)",
            background:
              "linear-gradient(135deg, rgba(22,119,255,0.06) 0%, rgba(116,211,255,0.06) 100%)",
            animation: "fadeInUp 0.7s ease-out 0.1s both",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 p-6 sm:p-8 items-center">
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                <Zap className="w-3 h-3" strokeWidth={2.75} />
                Showcases
              </span>
              <h3
                className="mt-4 text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                Turn your place card into a storefront.
              </h3>
              <p
                className="mt-3 text-[14.5px] leading-[1.6]"
                style={{ color: "var(--muted)" }}
              >
                Showcases are tappable tiles that live right on your Apple Maps
                card. We plan and publish 3&ndash;5 per location and refresh them
                on a monthly cadence so your latest offer is always front and
                center.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {showcaseExamples.map((s) => (
                <div
                  key={s.title}
                  className="card-surface p-4 flex flex-col"
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-8 h-8 rounded-[9px] flex items-center justify-center"
                      style={{
                        background: "rgba(22,119,255,0.12)",
                        color: "var(--accent)",
                      }}
                    >
                      <s.Icon className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                    <span
                      className="text-[9.5px] font-extrabold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded"
                      style={{
                        background: "rgba(22,119,255,0.1)",
                        color: "var(--accent)",
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <div
                    className="mt-3 text-[13.5px] font-bold leading-[1.25]"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.title}
                  </div>
                  <div
                    className="mt-1 text-[11.5px] leading-[1.4]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Not sure what your card looks like today?
          </span>
          <SecondaryButton asLink href="#contact">
            Get a free profile teardown
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

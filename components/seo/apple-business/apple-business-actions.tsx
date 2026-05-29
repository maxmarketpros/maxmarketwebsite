import { SectionHeader } from "@/components/ui/section-header"
import {
  CalendarCheck,
  ShoppingBag,
  UtensilsCrossed,
  CreditCard,
  MousePointerClick,
  TrendingUp,
} from "lucide-react"

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const actionTypes = [
  {
    Icon: CalendarCheck,
    label: "Book an appointment",
    sub: "Calendar & scheduling tools",
  },
  {
    Icon: ShoppingBag,
    label: "Order online",
    sub: "Storefronts & online ordering",
  },
  {
    Icon: UtensilsCrossed,
    label: "Reserve a table",
    sub: "Reservation platforms",
  },
  {
    Icon: CreditCard,
    label: "Pay or check out",
    sub: "Payments & loyalty",
  },
]

const integrations = [
  { name: "OpenTable", domain: "opentable.com" },
  { name: "Resy", domain: "resy.com" },
  { name: "Toast", domain: "toasttab.com" },
  { name: "Square", domain: "squareup.com" },
  { name: "Shopify", domain: "shopify.com" },
  { name: "Mindbody", domain: "mindbodyonline.com" },
  { name: "Booksy", domain: "booksy.com" },
  { name: "Yelp", domain: "yelp.com" },
  { name: "Tripadvisor", domain: "tripadvisor.com" },
]

export function AppleBusinessActions() {
  return (
    <section
      aria-labelledby="apple-business-actions-heading"
      className="relative"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Custom Actions · +31% CTR"
          heading={
            <span id="apple-business-actions-heading">
              Turn map views into booked jobs —{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">with one tap</span>.
              </span>
            </span>
          }
          paragraph="Action links put Book, Order, Reserve, and Pay buttons right on your Apple Maps card, deep-linked to the tools you already use and tagged with UTM parameters — so every lead is tracked in GA4, not lost."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8 items-stretch">
          {/* Left: action types + stat */}
          <div className="flex flex-col gap-5">
            <div
              className="rounded-[var(--radius-lg)] p-6 sm:p-7 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #0B132B 0%, #1F2937 60%, #0B132B 100%)",
                boxShadow: "0 10px 30px rgba(11,19,43,0.2)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute top-[-30%] right-[-10%] w-[300px] h-[300px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(22,119,255,0.4) 0%, transparent 60%)",
                }}
              />
              <div className="relative flex items-center gap-3">
                <span
                  className="w-12 h-12 rounded-[13px] flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                    color: "#fff",
                  }}
                >
                  <TrendingUp className="w-6 h-6" strokeWidth={2.5} />
                </span>
                <div>
                  <div className="text-[40px] font-extrabold leading-none text-white">
                    +31%
                  </div>
                  <div
                    className="text-[12.5px] font-semibold mt-1"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    average lift in click-through with Action links
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {actionTypes.map((a) => (
                <div
                  key={a.label}
                  className="card-surface p-4 flex items-center gap-3"
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  <span
                    className="w-10 h-10 rounded-[11px] flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(22,119,255,0.1)",
                      color: "var(--accent)",
                    }}
                  >
                    <a.Icon className="w-5 h-5" strokeWidth={2.25} />
                  </span>
                  <div className="min-w-0">
                    <div
                      className="text-[14px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {a.label}
                    </div>
                    <div
                      className="text-[12px] leading-tight mt-0.5"
                      style={{ color: "var(--muted)" }}
                    >
                      {a.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: integrations */}
          <div
            className="card-surface p-6 sm:p-8"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div className="flex items-center gap-2">
              <MousePointerClick
                className="w-4 h-4"
                strokeWidth={2.5}
                style={{ color: "var(--accent)" }}
              />
              <span
                className="text-[12px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "var(--accent)" }}
              >
                Wired to the tools you already use
              </span>
            </div>
            <h3
              className="mt-3 text-[20px] sm:text-[23px] font-bold leading-[1.25]"
              style={{ color: "var(--ink)" }}
            >
              We connect your booking, ordering, and payment partners directly to
              your card.
            </h3>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {integrations.map((i) => (
                <span
                  key={i.domain}
                  className="inline-flex items-center gap-2.5 px-3 py-2.5 rounded-[12px] card-surface card-surface-hover"
                  style={{ borderRadius: 12 }}
                >
                  <span
                    className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center shrink-0"
                    style={{
                      background: "#fff",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <img
                      src={favicon(i.domain, 64)}
                      alt={i.name}
                      width={18}
                      height={18}
                      loading="lazy"
                      decoding="async"
                      className="w-[18px] h-[18px] object-contain"
                    />
                  </span>
                  <span
                    className="text-[13px] font-semibold truncate"
                    style={{ color: "var(--ink)" }}
                  >
                    {i.name}
                  </span>
                </span>
              ))}
            </div>

            <p
              className="mt-5 text-[12.5px] leading-[1.5]"
              style={{ color: "var(--muted)" }}
            >
              Don&rsquo;t see your platform? Apple supports custom and third-party
              partner actions — if it has a booking or order link, we can wire it
              in.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

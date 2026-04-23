import { UtensilsCrossed, Smartphone, Star, Truck } from "lucide-react"
import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

const trustChips = [
  { Icon: Smartphone, label: "Order-ready websites" },
  { Icon: Star,       label: "Review auto-requests" },
  { Icon: Truck,      label: "Delivery-stack aware" },
]

type Source = {
  label: string
  bg: string
  color: string
}

const sources: Record<string, Source> = {
  web:   { label: "Website",   bg: "rgba(22,119,255,0.12)",  color: "#1677FF" },
  dd:    { label: "DoorDash",  bg: "rgba(220,38,38,0.12)",   color: "#DC2626" },
  ue:    { label: "UberEats",  bg: "rgba(34,197,94,0.14)",   color: "#15803D" },
  store: { label: "In-Store",  bg: "rgba(245,158,11,0.14)",  color: "#B45309" },
  cat:   { label: "Catering",  bg: "rgba(185,28,28,0.12)",   color: "#B91C1C" },
  phone: { label: "Phone",     bg: "rgba(11,19,43,0.08)",    color: "#334155" },
}

type Order = { src: keyof typeof sources; item: string; time: string; total: string; delay: string }

const orders: Order[] = [
  { src: "web",   item: "Hot honey chicken bowl",      time: "12:47", total: "$14.20", delay: "0.05s" },
  { src: "dd",    item: "2\u00D7 Margherita + Caesar", time: "12:46", total: "$38.90", delay: "0.12s" },
  { src: "store", item: "Turkey panini + cold brew",   time: "12:45", total: "$16.75", delay: "0.18s" },
  { src: "ue",    item: "Veggie burrito, extra queso", time: "12:44", total: "$12.40", delay: "0.24s" },
  { src: "cat",   item: "10-person sandwich platter",  time: "12:42", total: "$195.00", delay: "0.32s" },
  { src: "phone", item: "Large pepperoni, side salad", time: "12:40", total: "$26.50", delay: "0.40s" },
]

export function RestHero() {
  return (
    <section aria-labelledby="rest-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] sm:w-[900px] sm:h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(249,115,22,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-[20%] right-[5%] w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(220,38,38,0.14) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-14 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="max-w-[600px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <Pill>
              <UtensilsCrossed className="w-3.5 h-3.5" strokeWidth={2.4} />
              Restaurants
            </Pill>

            <h1
              id="rest-hero-heading"
              className="mt-6 text-[42px] xs:text-[46px] sm:text-[54px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance"
              style={{ color: "var(--ink)" }}
            >
              Restaurant marketing that{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">fills every seat</span>.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.65] max-w-[520px]" style={{ color: "var(--muted)" }}>
              Ordering-ready websites, Google + Yelp review engines, daypart-tuned ad campaigns, and loyalty funnels for fast-casual, fine dining, cafes, bars, breweries, and catering &mdash; one stack, from the POS to the parking lot.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a restaurant consult
              </PrimaryButton>
              <SecondaryButton asLink href="#rest-services">
                See our restaurant stack
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {trustChips.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Icon className="w-4 h-4" style={{ color: "#F97316" }} strokeWidth={2.2} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — live order feed */}
          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.12s both" }}>
            <div
              className="card-surface relative overflow-hidden p-5 sm:p-7"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 75% at 75% 20%, rgba(249,115,22,0.18) 0%, transparent 65%), radial-gradient(ellipse 75% 60% at 20% 90%, rgba(245,158,11,0.14) 0%, transparent 65%)",
                }}
              />

              {/* Header */}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex w-2 h-2">
                    <span
                      className="absolute inline-flex w-full h-full rounded-full opacity-75"
                      style={{ background: "#DC2626", animation: "fadeInUp 1.2s ease-in-out infinite alternate" }}
                    />
                    <span className="relative inline-flex w-2 h-2 rounded-full" style={{ background: "#DC2626" }} />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--muted)" }}>
                    Today &mdash; 12:47pm
                  </span>
                </div>
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#F97316" }}>
                  Live feed
                </span>
              </div>

              {/* Order rows */}
              <ul className="relative mt-5 space-y-2.5">
                {orders.map((o, i) => {
                  const src = sources[o.src]
                  return (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-[var(--radius-sm)]"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        border: "1px solid var(--border-color)",
                        boxShadow: "0 3px 10px rgba(11,19,43,0.05)",
                        animation: `fadeInUp 0.7s ease-out ${o.delay} both`,
                      }}
                    >
                      <span
                        className="shrink-0 text-[10.5px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: src.bg, color: src.color }}
                      >
                        {src.label}
                      </span>
                      <span className="flex-1 text-[13px] font-medium truncate" style={{ color: "var(--ink)" }}>
                        {o.item}
                      </span>
                      <span className="hidden sm:inline text-[11px] tabular-nums" style={{ color: "var(--muted)" }}>
                        {o.time}
                      </span>
                      <span className="text-[12.5px] font-semibold tabular-nums" style={{ color: "#F97316" }}>
                        {o.total}
                      </span>
                    </li>
                  )
                })}
              </ul>

              {/* Footer */}
              <div
                className="relative mt-5 flex flex-wrap items-center justify-between gap-2 pt-4 text-[11.5px]"
                style={{ borderTop: "1px solid var(--border-color)", color: "var(--muted)" }}
              >
                <span className="font-semibold" style={{ color: "var(--ink)" }}>6 orders</span>
                <span>&middot;</span>
                <span className="tabular-nums font-semibold" style={{ color: "#F97316" }}>$303.75</span>
                <span>&middot;</span>
                <span>avg prep 4:12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

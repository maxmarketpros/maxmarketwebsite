"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { Reveal } from "@/components/ui/reveal"
import {
  CalendarCheck,
  ShoppingBag,
  UtensilsCrossed,
  CreditCard,
  MousePointerClick,
  TrendingUp,
  Check,
} from "lucide-react"

function favicon(domain: string, size = 128) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

const actionTypes = [
  { Icon: CalendarCheck, label: "Book", full: "Book an appointment", confirm: "Appointment booked", sub: "Calendar & scheduling" },
  { Icon: ShoppingBag, label: "Order", full: "Order online", confirm: "Order placed", sub: "Storefronts & ordering" },
  { Icon: UtensilsCrossed, label: "Reserve", full: "Reserve a table", confirm: "Table reserved", sub: "Reservation platforms" },
  { Icon: CreditCard, label: "Pay", full: "Pay or check out", confirm: "Payment sent", sub: "Payments & loyalty" },
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
  const [active, setActive] = useState(0)
  const userOverride = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => {
      if (userOverride.current) return
      setActive((i) => (i + 1) % actionTypes.length)
    }, 2600)
    return () => clearInterval(t)
  }, [])

  const pick = (i: number) => {
    userOverride.current = true
    setActive(i)
  }

  const current = actionTypes[active]

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
          {/* Left: interactive action demo */}
          <Reveal className="flex flex-col gap-5">
            {/* +31% stat */}
            <div
              className="rounded-[var(--radius-lg)] p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0B132B 0%, #1F2937 60%, #0B132B 100%)",
                boxShadow: "0 10px 30px rgba(11,19,43,0.2)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute top-[-30%] right-[-10%] w-[300px] h-[300px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(22,119,255,0.4) 0%, transparent 60%)" }}
              />
              <div className="relative flex items-center gap-3">
                <span
                  className="w-12 h-12 rounded-[13px] flex items-center justify-center text-white"
                  style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)" }}
                >
                  <TrendingUp className="w-6 h-6" strokeWidth={2.5} />
                </span>
                <div>
                  <div className="text-[40px] font-extrabold leading-none text-white">+31%</div>
                  <div className="text-[12.5px] font-semibold mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                    average lift in click-through with Action links
                  </div>
                </div>
              </div>
            </div>

            {/* Action picker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {actionTypes.map((a, i) => {
                const on = i === active
                return (
                  <button
                    key={a.label}
                    type="button"
                    onMouseEnter={() => pick(i)}
                    onFocus={() => pick(i)}
                    onClick={() => pick(i)}
                    aria-pressed={on}
                    className="flex flex-col items-center gap-1.5 py-3 rounded-[14px] border transition-all duration-200 cursor-pointer"
                    style={{
                      background: on ? "linear-gradient(180deg,#2B8AFF,#1677FF)" : "var(--surface)",
                      borderColor: on ? "transparent" : "var(--border-color)",
                      color: on ? "#fff" : "var(--ink)",
                      boxShadow: on ? "0 8px 20px rgba(22,119,255,0.3)" : "none",
                    }}
                  >
                    <a.Icon className="w-5 h-5" strokeWidth={2.25} />
                    <span className="text-[12px] font-bold">{a.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Tap → confirmation preview */}
            <div
              className="card-surface p-5 flex-1 flex flex-col justify-center"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--muted)" }}>
                On your place card
              </div>
              <button
                type="button"
                className="mt-3 w-full flex items-center justify-center gap-2 py-3.5 rounded-[14px] text-[15px] font-bold text-white"
                style={{ background: "linear-gradient(180deg,#2B8AFF,#1677FF)", boxShadow: "0 8px 20px rgba(22,119,255,0.3)" }}
              >
                <current.Icon strokeWidth={2.5} style={{ width: 18, height: 18 }} />
                {current.full}
              </button>
              <div
                key={active}
                className="mt-3 flex items-center gap-2.5 px-3.5 py-2.5 rounded-[12px]"
                style={{
                  background: "rgba(22,163,74,0.1)",
                  border: "1px solid rgba(22,163,74,0.28)",
                  animation: "fadeInUp 0.4s var(--ease-spring) both",
                }}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: "#16A34A" }}>
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="text-[13.5px] font-semibold" style={{ color: "#15803D" }}>
                  {current.confirm} — tracked in GA4
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: integrations */}
          <Reveal delay={0.1}>
            <div className="card-surface p-6 sm:p-8 h-full" style={{ borderRadius: "var(--radius-lg)" }}>
              <div className="flex items-center gap-2">
                <MousePointerClick className="w-4 h-4" strokeWidth={2.5} style={{ color: "var(--accent)" }} />
                <span className="text-[12px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
                  Wired to the tools you already use
                </span>
              </div>
              <h3 className="mt-3 text-[20px] sm:text-[23px] font-bold leading-[1.25]" style={{ color: "var(--ink)" }}>
                We connect your booking, ordering, and payment partners directly to your card.
              </h3>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {integrations.map((i) => (
                  <span
                    key={i.domain}
                    title={i.name}
                    className="inline-flex items-center gap-2.5 px-3 py-2.5 rounded-[12px] card-surface card-surface-hover"
                    style={{ borderRadius: 12 }}
                  >
                    <span
                      className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center shrink-0"
                      style={{ background: "#fff", border: "1px solid var(--border-color)" }}
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
                    <span className="text-[13px] font-semibold truncate" style={{ color: "var(--ink)" }}>
                      {i.name}
                    </span>
                  </span>
                ))}
              </div>

              <p className="mt-5 text-[12.5px] leading-[1.5]" style={{ color: "var(--muted)" }}>
                Don&rsquo;t see your platform? Apple supports custom and third-party
                partner actions — if it has a booking or order link, we can wire it in.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

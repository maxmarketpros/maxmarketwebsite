import { SectionHeader } from "@/components/ui/section-header"
import {
  ArrowRight,
  Check,
  Palette,
  BarChart3,
  Target,
  Megaphone,
} from "lucide-react"

const upsells = [
  {
    href: "/solutions/qr-codes",
    eyebrow: "Upgrade · Branded",
    eyebrowColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.10)",
    Icon: Palette,
    title: "On-brand QR codes, scannability-stress-tested",
    bullets: [
      "Custom colors, rounded modules, center logo",
      "Vector files for print, billboards, vehicle wraps",
      "We test every design across iPhone, Android, and 3rd-party scanners",
    ],
    cta: "See branded QR plans",
  },
  {
    href: "/solutions/analytics",
    eyebrow: "Upgrade · Dynamic + Analytics",
    eyebrowColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.10)",
    Icon: BarChart3,
    title: "Edit destinations anytime. Track every scan.",
    bullets: [
      "Swap the URL after the QR is printed — no reprint required",
      "Scan location, device, time-of-day breakdowns",
      "UTM auto-tagging + GA4 forwarding",
    ],
    cta: "Explore analytics & tracking",
  },
  {
    href: "/solutions/lead-generation",
    eyebrow: "Upgrade · Capture & Convert",
    eyebrowColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.10)",
    Icon: Target,
    title: "Don't just drive scans — close the loop.",
    bullets: [
      "Custom landing page tuned to the offline campaign",
      "Lead-capture form with instant SMS/email follow-up",
      "Built-in nurture sequence to recover no-shows",
    ],
    cta: "See lead-gen solutions",
  },
  {
    href: "/services/paid-ads",
    eyebrow: "Upgrade · Paid Ads",
    eyebrowColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    Icon: Megaphone,
    title: "Pair print + outdoor QR with paid distribution.",
    bullets: [
      "Google + Meta campaigns that reinforce your offline reach",
      "Retargeting pixels fired on QR scan",
      "Unified weekly reporting across channels",
    ],
    cta: "See paid-ads services",
  },
]

export function QrGeneratorUpsells() {
  return (
    <section
      aria-labelledby="qr-upsells-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="When you outgrow the free tool"
          heading={
            <span id="qr-upsells-heading">
              Make your QR codes{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">work harder.</span>
              </span>
            </span>
          }
          paragraph="The free tool ships static QR codes. When you need brand polish, editable destinations, scan analytics, or a landing page to convert the traffic — that's where we come in."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {upsells.map((u) => (
            <article
              key={u.href}
              className="card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 w-[60%] h-[50%]"
                style={{
                  background: `radial-gradient(ellipse 80% 100% at 75% 25%, ${u.auraColor} 0%, transparent 70%)`,
                }}
              />
              <div className="relative flex-1 flex flex-col">
                <div className="flex items-start gap-4">
                  <span
                    className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-[14px]"
                    style={{
                      background: `${u.eyebrowColor}1A`,
                      color: u.eyebrowColor,
                    }}
                  >
                    <u.Icon className="w-5 h-5" strokeWidth={2.4} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span
                      className="inline-flex items-center text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                      style={{
                        background: `${u.eyebrowColor}1A`,
                        color: u.eyebrowColor,
                      }}
                    >
                      {u.eyebrow}
                    </span>
                    <h3
                      className="mt-3 text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.01em]"
                      style={{ color: "var(--ink)" }}
                    >
                      {u.title}
                    </h3>
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {u.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[14px]"
                      style={{ color: "var(--ink)" }}
                    >
                      <span
                        className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: "var(--accent-bg)",
                          color: "var(--accent)",
                        }}
                      >
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span className="leading-[1.45]">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={u.href}
                  className="group/link mt-6 pt-5 flex items-center gap-2 text-[14.5px] font-semibold border-t hover:opacity-80 transition-opacity"
                  style={{
                    borderColor: "var(--border-color)",
                    color: "var(--accent)",
                  }}
                >
                  <span>{u.cta}</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    strokeWidth={2.5}
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

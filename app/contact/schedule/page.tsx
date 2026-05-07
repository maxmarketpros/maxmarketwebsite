import type { Metadata } from "next"
import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { Calendar, Phone, Mail, Clock, ShieldCheck, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Schedule a Call — Max Market Pros",
  description:
    "Book a free 20-minute strategy call with a senior local-marketing strategist. Pick a time that works for you — no sales pitch.",
  alternates: { canonical: "/contact/schedule" },
  openGraph: {
    title: "Schedule a Call — Max Market Pros",
    description:
      "Book a free 20-minute strategy call. Pick a time that works for you.",
    type: "website",
    url: "/contact/schedule",
    siteName: "Max Market Pros",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const trustBullets = [
  { Icon: Clock, text: "20 minutes — start to finish" },
  { Icon: ShieldCheck, text: "Free audit, zero commitment" },
  { Icon: MapPin, text: "Run by a senior strategist, not a closer" },
]

export default function Page() {
  return (
    <main>
      <Navbar />

      <section
        aria-labelledby="schedule-heading"
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(140% 100% at 100% 0%, rgba(22,119,255,0.14) 0%, transparent 60%), radial-gradient(120% 100% at 0% 100%, rgba(116,211,255,0.14) 0%, transparent 65%), var(--bg)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[-12%] right-[-8%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(22,119,255,0.20) 0%, rgba(116,211,255,0.06) 45%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
          <nav
            aria-label="Breadcrumb"
            className="text-[13px] font-medium"
            style={{ color: "var(--muted)" }}
          >
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <a href="/" className="hover:text-[var(--accent)]">
                  Home
                </a>
              </li>
              <li aria-hidden>/</li>
              <li>
                <a href="/contact" className="hover:text-[var(--accent)]">
                  Contact
                </a>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" style={{ color: "var(--ink)" }}>
                Schedule a Call
              </li>
            </ol>
          </nav>

          <div
            className="mt-8 max-w-[760px] mx-auto text-center"
            style={{ animation: "fadeInUp 0.8s ease-out both" }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(22,119,255,0.30)",
                color: "var(--accent)",
              }}
            >
              <Calendar className="w-3.5 h-3.5" strokeWidth={2.5} />
              Free 20-min strategy call
            </span>

            <h1
              id="schedule-heading"
              className="mt-5 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Pick a time that{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, rgba(22,119,255,0.30) 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                works for you
              </span>
              .
            </h1>

            <p
              className="mt-5 text-[16.5px] sm:text-[18px] leading-[1.6] mx-auto max-w-[600px]"
              style={{ color: "var(--muted)" }}
            >
              We&rsquo;ll audit your local rankings, sketch a growth plan, and
              answer questions. No deck, no hard sell &mdash; just a real
              conversation.
            </p>

            <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
              {trustBullets.map((b) => (
                <li
                  key={b.text}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12.5px] font-semibold border"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: "var(--border-color)",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full inline-flex items-center justify-center"
                    style={{
                      background: "var(--accent)",
                      color: "#fff",
                    }}
                  >
                    <b.Icon className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  {b.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Calendar embed card */}
          <div
            className="mt-12 max-w-[920px] mx-auto"
            style={{ animation: "fadeInUp 0.9s ease-out 0.1s both" }}
          >
            <div
              className="relative p-[1.5px]"
              style={{
                borderRadius: "var(--radius-xl)",
                background:
                  "linear-gradient(140deg, rgba(22,119,255,0.55) 0%, rgba(116,211,255,0.40) 40%, rgba(220,230,242,0.40) 100%)",
                boxShadow:
                  "0 4px 14px rgba(17,35,68,0.10), 0 30px 80px rgba(22,119,255,0.18)",
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "calc(var(--radius-xl) - 2px)",
                  background: "var(--surface)",
                }}
              >
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/5sJMdV1pT45P5L9zjjoM"
                  title="Schedule a strategy call with Max Market Pros"
                  scrolling="no"
                  id="5sJMdV1pT45P5L9zjjoM_1778177808101"
                  style={{
                    width: "100%",
                    minHeight: 720,
                    border: "none",
                    overflow: "hidden",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Fallback channels */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <span
              className="text-[14.5px]"
              style={{ color: "var(--muted)" }}
            >
              Don&rsquo;t see a time that works?
            </span>
            <a
              href="tel:+19496030389"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              (949) 603-0389
            </a>
            <a
              href="mailto:info@maxmarketpros.com"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              <Mail className="w-4 h-4" strokeWidth={2.5} />
              info@maxmarketpros.com
            </a>
          </div>
        </div>
      </section>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </main>
  )
}

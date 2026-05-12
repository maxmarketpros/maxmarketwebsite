import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Phone, Mail, Calendar, Clock, MapPin } from "lucide-react"

const replyPills = [
  { Icon: Clock, label: "Replies within one business day" },
  { Icon: Phone, label: "Real strategists — not a call center" },
  { Icon: MapPin, label: "Based in Irvine, CA · serving the U.S." },
]

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
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
              "radial-gradient(circle, rgba(22,119,255,0.22) 0%, rgba(116,211,255,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-6%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.20) 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
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
            <li aria-current="page" style={{ color: "var(--ink)" }}>
              Contact
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-[820px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
          <span
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.08em] rounded-full border"
            style={{
              background: "rgba(255,255,255,0.95)",
              borderColor: "rgba(22,119,255,0.30)",
              color: "var(--accent)",
            }}
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
            Contact Max Market Pros
          </span>

          <h1
            id="contact-hero-heading"
            className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Talk to a local{" "}
            <span
              className="relative inline-block"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent 65%, rgba(22,119,255,0.30) 65%)",
                paddingLeft: 4,
                paddingRight: 4,
              }}
            >
              growth strategist
            </span>
            .
          </h1>

          <p
            className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[620px]"
            style={{ color: "var(--muted)" }}
          >
            Call, email, or book a free 20-minute strategy call. We&rsquo;ll
            audit your current marketing, sketch a growth plan, and quote a
            fixed monthly scope &mdash; no pressure, no agency runaround.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton size="lg" asLink href="#contact">
              <Calendar className="w-4 h-4 mr-2" strokeWidth={2.5} />
              Book a free strategy call
            </PrimaryButton>
            <SecondaryButton asLink href="tel:+19496030389">
              <Phone className="w-4 h-4 mr-2" strokeWidth={2.5} />
              Call (949) 603-0389
            </SecondaryButton>
            <a
              href="mailto:info@maxmarketpros.com"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline"
              style={{ color: "var(--accent)" }}
            >
              <Mail className="w-4 h-4" strokeWidth={2.5} />
              info@maxmarketpros.com
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {replyPills.map((p) => (
              <span
                key={p.label}
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
                  <p.Icon className="w-3 h-3" strokeWidth={2.5} />
                </span>
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

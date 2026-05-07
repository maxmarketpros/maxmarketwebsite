import { SectionHeader } from "@/components/ui/section-header"
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react"

const channels = [
  {
    Icon: Phone,
    pill: "Fastest",
    title: "Call us",
    value: "(949) 603-0389",
    body:
      "Reach a real strategist during business hours. Voicemails returned same day.",
    cta: "Call now",
    href: "tel:+19496030389",
  },
  {
    Icon: Mail,
    pill: "Best for details",
    title: "Email us",
    value: "info@maxmarketpros.com",
    body:
      "Send your site, goals, or current numbers. We reply within one business day.",
    cta: "Send email",
    href: "mailto:info@maxmarketpros.com",
  },
  {
    Icon: Calendar,
    pill: "Recommended",
    title: "Book a call",
    value: "Free 20-minute strategy session",
    body: "Pick a time that works for you. We'll audit your site and walk through a growth plan.",
    cta: "Book now",
    href: "#contact",
  },
]

export function ContactChannels() {
  return (
    <section
      aria-labelledby="contact-channels-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="Reach us"
          heading={
            <span id="contact-channels-heading">
              Three ways to{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">reach us</span>.
              </span>
            </span>
          }
          paragraph="Pick whichever feels easiest. Every channel goes to a senior strategist — not a queue, not a chatbot."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="card-surface card-surface-hover group relative flex flex-col p-7 transition-all duration-200 hover:translate-y-[-2px]"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="w-12 h-12 rounded-[var(--radius-sm)] inline-flex items-center justify-center"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  <c.Icon className="w-6 h-6" strokeWidth={2} />
                </span>
                <span
                  className="text-[10.5px] font-bold uppercase tracking-[0.10em] px-2 py-1 rounded-full"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  {c.pill}
                </span>
              </div>
              <h3
                className="mt-5 text-[20px] font-bold tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                {c.title}
              </h3>
              <p
                className="mt-1 text-[15.5px] font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {c.value}
              </p>
              <p
                className="mt-3 text-[14.5px] leading-[1.6]"
                style={{ color: "var(--muted)" }}
              >
                {c.body}
              </p>
              <span
                className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold group-hover:gap-2 transition-all"
                style={{ color: "var(--accent)" }}
              >
                {c.cta}
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
            </a>
          ))}
        </div>

        <p
          className="mt-10 text-center text-[14px]"
          style={{ color: "var(--muted)" }}
        >
          Already a client? Head to{" "}
          <a
            href="/contact/support"
            className="font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            support
          </a>{" "}
          or your{" "}
          <a
            href="/client-portal"
            className="font-semibold hover:underline"
            style={{ color: "var(--accent)" }}
          >
            client portal
          </a>
          .
        </p>
      </div>
    </section>
  )
}

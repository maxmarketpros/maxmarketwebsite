import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { MessageSquare, Search, Map, Rocket } from "lucide-react"

const steps = [
  {
    Icon: MessageSquare,
    title: "You reach out",
    body:
      "Send a message, call, or book a slot. We confirm a time that fits — no back-and-forth scheduling.",
  },
  {
    Icon: Search,
    title: "We audit your market",
    body: (
      <>
        Before the call, a strategist audits your{" "}
        <a
          href="/services/seo/local"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          local rankings
        </a>
        ,{" "}
        <a
          href="/services/web-design"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          website
        </a>
        , and competitors so we show up with real numbers.
      </>
    ),
  },
  {
    Icon: Map,
    title: "We sketch a plan",
    body:
      "On the call we walk through what we&rsquo;d do month one, what to expect month three, and how we&rsquo;d measure it.",
  },
  {
    Icon: Rocket,
    title: "You decide",
    body: (
      <>
        If it&rsquo;s a fit, we send a fixed scope. If not, you keep the audit
        notes and tactics — no hard sell. See{" "}
        <a
          href="/about/testimonials"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          what other clients say
        </a>
        .
      </>
    ),
  },
]

export function ContactWhatHappensNext() {
  return (
    <section
      aria-labelledby="contact-next-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container section-y">
        <SectionHeader
          pill="What happens next"
          heading={
            <span id="contact-next-heading">
              From hello to a{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">growth plan</span>.
              </span>
            </span>
          }
          paragraph="Here's exactly what to expect after you submit the form below — no mystery, no pressure."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="card-surface p-6 relative"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <span
                className="absolute top-4 right-5 text-[11px] font-bold font-mono tracking-[0.06em]"
                style={{ color: "var(--muted)" }}
              >
                0{idx + 1}
              </span>
              <span
                className="w-11 h-11 rounded-[var(--radius-sm)] inline-flex items-center justify-center"
                style={{
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                }}
              >
                <s.Icon className="w-5 h-5" strokeWidth={2} />
              </span>
              <h3
                className="mt-4 text-[17px] font-bold tracking-[-0.01em]"
                style={{ color: "var(--ink)" }}
              >
                {s.title}
              </h3>
              <p
                className="mt-2 text-[14.5px] leading-[1.6]"
                style={{ color: "var(--muted)" }}
              >
                {typeof s.body === "string"
                  ? s.body.replace(/&rsquo;/g, "’")
                  : s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-[15.5px]" style={{ color: "var(--muted)" }}>
            Want to see pricing first?
          </span>
          <SecondaryButton asLink href="/plans">
            View our plans
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

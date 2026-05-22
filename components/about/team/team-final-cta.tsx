import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"

const guarantees = [
  "In-house team",
  "5-year track record",
  "American team",
  "Senior-only execution",
]

const footerLinks = [
  { label: "Our story", href: "/about/our-story" },
  { label: "Testimonials", href: "/about/testimonials" },
  { label: "Case studies", href: "/resources/case-studies" },
  { label: "Careers", href: "/about/careers" },
]

export function TeamFinalCta() {
  return (
    <section
      aria-labelledby="team-final-cta-heading"
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-container pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28">
        {/* Top hairline + chapter eyebrow row */}
        <div
          aria-hidden
          style={{ borderTop: "1px solid var(--border-color)" }}
        />
        <div className="flex items-center justify-between gap-4 pt-3 sm:pt-4">
          <span
            className="text-[10.5px] sm:text-[11px] font-bold uppercase"
            style={{ color: "var(--muted)", letterSpacing: "0.18em" }}
          >
            From the Editors
          </span>
          <span
            className="text-[10.5px] sm:text-[11px] font-bold uppercase text-right"
            style={{ color: "var(--accent)", letterSpacing: "0.18em" }}
          >
            Closing Note
          </span>
        </div>

        <div className="max-w-[760px] pt-10 sm:pt-12">
          <h2
            id="team-final-cta-heading"
            className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Want this team on{" "}
            <span className="whitespace-nowrap">
              <span
                className="relative"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 65%, rgba(116,211,255,0.45) 65%)",
                  paddingLeft: 4,
                  paddingRight: 4,
                }}
              >
                your business
              </span>
              ?
            </span>
          </h2>

          <p
            className="mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] max-w-[640px]"
            style={{ color: "var(--muted)" }}
          >
            Book a 30-minute strategy call and meet the people who&rsquo;ll
            actually run your account. No sales reps, no junior handoffs
            &mdash; a senior strategist reviews your business and leaves you
            with a clearer plan whether you hire us or not.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton size="lg" asLink href="/contact/schedule">
              Book a strategy call
            </PrimaryButton>
            <SecondaryButton asLink href="/about/careers">
              Or join us
            </SecondaryButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2.5">
            {guarantees.map((g) => (
              <span
                key={g}
                className="inline-flex items-center gap-2 text-[12.5px] font-semibold"
                style={{ color: "var(--ink)" }}
              >
                <span
                  aria-hidden
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "#16A34A" }}
                />
                {g}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom hairline + inline links */}
        <div
          className="mt-12 sm:mt-14 pt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px]"
          style={{
            borderTop: "1px solid var(--border-color)",
            color: "var(--muted)",
          }}
        >
          <span
            className="font-bold uppercase"
            style={{ letterSpacing: "0.14em" }}
          >
            More about us
          </span>
          {footerLinks.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-semibold inline-flex items-center gap-1 hover:underline"
              style={{ color: "var(--ink)" }}
            >
              {l.label}
              {i === footerLinks.length - 1 ? (
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Quote } from "lucide-react"

export function OurStoryDecision() {
  return (
    <section
      aria-labelledby="our-story-decision-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 80% at 0% 100%, rgba(22,119,255,0.06) 0%, transparent 60%), #FFFFFF",
      }}
    >
      <div className="section-container relative z-10 section-y">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
          {/* Photo + floating quote — left */}
          <div
            className="relative order-2 lg:order-1"
            style={{ animation: "fadeInUp 0.9s ease-out both" }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-color)",
                boxShadow:
                  "0 4px 24px rgba(11,19,43,0.14), 0 24px 60px rgba(11,19,43,0.22)",
              }}
            >
              <Image
                src="/about/our-story/team-space.webp"
                alt="Inside the Max Market Pros workspace — murals, a pool table, and a creative open-plan studio in Irvine"
                width={1200}
                height={1500}
                sizes="(max-width: 1024px) 92vw, 540px"
                className="w-full h-auto block"
              />
            </div>

            {/* Floating pull-quote card */}
            <div
              className="absolute -bottom-6 -right-4 sm:-right-8 max-w-[260px] sm:max-w-[300px] px-5 py-4 rounded-[var(--radius-lg)]"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow: "0 12px 32px rgba(11,19,43,0.18)",
              }}
            >
              <Quote
                className="w-5 h-5 mb-2"
                strokeWidth={2.4}
                style={{ color: "var(--accent)" }}
              />
              <p
                className="text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.02em]"
                style={{ color: "var(--ink)" }}
              >
                &ldquo;Now or never.&rdquo;
              </p>
              <p
                className="mt-2 text-[12px] font-semibold uppercase tracking-[0.10em]"
                style={{ color: "var(--muted)" }}
              >
                &mdash; The team, March 2020
              </p>
            </div>
          </div>

          {/* Copy — right */}
          <div
            className="order-1 lg:order-2"
            style={{ animation: "fadeInUp 0.8s ease-out 0.05s both" }}
          >
            <p
              className="text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{ color: "var(--accent)" }}
            >
              Chapter 02 &middot; The pivot
            </p>
            <h2
              id="our-story-decision-heading"
              className="mt-3 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Going all-in.
            </h2>

            <div
              className="mt-6 space-y-5 text-[16.5px] sm:text-[17.5px] leading-[1.7]"
              style={{ color: "var(--muted)" }}
            >
              <p>
                For years prior to 2020, we had practiced our digital marketing
                skills with some of the most talented people in the industry,
                yet still, we were afraid of what was coming.
              </p>
              <p>
                Not all of us were ready to quit our full-time jobs and commit
                to a new business venture with the fate of the world hanging in
                the balance. Then, some of us lost our jobs or were asked to
                stay home, and others took pay-cuts.
              </p>
              <p>
                Together as a team we realized that this was our{" "}
                <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                  &ldquo;now or never&rdquo;
                </span>{" "}
                moment. With so many people relying on us, families to feed and
                bills to pay&hellip;
              </p>
            </div>

            <p
              className="mt-8 text-[22px] sm:text-[26px] font-bold leading-tight tracking-[-0.02em]"
              style={{ color: "var(--ink)" }}
            >
              So we went all-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

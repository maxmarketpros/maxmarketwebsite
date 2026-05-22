import { Shield, Sparkles, Users } from "lucide-react"

const beliefs = [
  {
    Icon: Shield,
    title: "Confidence in chaos",
    body: "Business owners deserve to feel certain about their growth, even when nothing else feels certain.",
  },
  {
    Icon: Sparkles,
    title: "Skill without agency theater",
    body: "Years inside the best agencies in the country meant we knew what actually worked — and what was just billing.",
  },
  {
    Icon: Users,
    title: "A team that's all-in",
    body: "Families to feed, bills to pay. The same urgency you bring to your business is the urgency we bring to ours.",
  },
]

export function OurStoryBelief() {
  return (
    <section
      aria-labelledby="our-story-belief-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[760px] h-[560px] sm:w-[1180px] sm:h-[780px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(22,119,255,0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container relative z-10 section-y">
        <div
          className="max-w-[760px] mx-auto text-center"
          style={{ animation: "fadeInUp 0.8s ease-out both" }}
        >
          <p
            className="text-[12px] font-bold uppercase tracking-[0.16em]"
            style={{ color: "var(--accent)" }}
          >
            Chapter 03 &middot; The mission
          </p>
          <h2
            id="our-story-belief-heading"
            className="mt-3 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            What Max Market Pros set out to{" "}
            <span
              className="relative inline-block"
              style={{
                backgroundImage: `linear-gradient(180deg, transparent 65%, rgba(116,211,255,0.45) 65%)`,
                paddingLeft: 4,
                paddingRight: 4,
              }}
            >
              do
            </span>
            .
          </h2>
          <p
            className="mt-5 text-[16.5px] sm:text-[18px] leading-[1.65] max-w-[640px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            We started Max Market Pros believing thousands of business owners
            needed steady, capable marketing help &mdash; especially when
            everything else felt uncertain. That belief still guides how we run
            the company today.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {beliefs.map((b, i) => (
            <article
              key={b.title}
              className="card-surface card-surface-hover p-6 sm:p-7"
              style={{
                animation: `fadeInUp 0.8s ease-out ${0.1 + i * 0.08}s both`,
              }}
            >
              <span
                className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(116,211,255,0.18) 0%, rgba(22,119,255,0.12) 100%)",
                  border: "1px solid rgba(22,119,255,0.18)",
                  color: "var(--accent)",
                }}
              >
                <b.Icon className="w-5.5 h-5.5" strokeWidth={2.2} />
              </span>
              <h3
                className="mt-5 text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em]"
                style={{ color: "var(--ink)" }}
              >
                {b.title}
              </h3>
              <p
                className="mt-3 text-[15px] leading-[1.65]"
                style={{ color: "var(--muted)" }}
              >
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

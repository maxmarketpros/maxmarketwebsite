import Link from "next/link"
import { Shield, Sparkles, Users } from "lucide-react"

const beliefs = [
  {
    Icon: Shield,
    title: "Independence",
    body: "We answer to our clients, not investors or a holding company. The way we run the agency is the way we'd want one run for our own businesses.",
  },
  {
    Icon: Sparkles,
    title: "Real mentorship",
    body: "You sit next to senior strategists, designers, and operators who've actually shipped at scale. No black boxes — you learn what works and why.",
  },
  {
    Icon: Users,
    title: "Work that ships",
    body: "Client work in market this quarter. No decks for the sake of decks, no projects that quietly die. What you build, customers use.",
  },
]

export function CareersWhy() {
  return (
    <section
      aria-labelledby="careers-why-heading"
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
            Why work here
          </p>
          <h2
            id="careers-why-heading"
            className="mt-3 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-balance"
            style={{ color: "var(--ink)" }}
          >
            Why people{" "}
            <span
              className="relative inline-block"
              style={{
                backgroundImage: `linear-gradient(180deg, transparent 65%, rgba(116,211,255,0.45) 65%)`,
                paddingLeft: 4,
                paddingRight: 4,
              }}
            >
              stay here
            </span>
            .
          </h2>
          <p
            className="mt-5 text-[16.5px] sm:text-[18px] leading-[1.65] max-w-[640px] mx-auto"
            style={{ color: "var(--muted)" }}
          >
            We've been an independent shop since{" "}
            <Link
              href="/about/our-story"
              className="font-semibold hover:underline"
              style={{ color: "var(--ink)" }}
            >
              March 19, 2020
            </Link>
            . The three things below have shaped every hire we've made since
            day one.
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
                <b.Icon className="w-5 h-5" strokeWidth={2.2} />
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

import Link from "next/link"
import { icons8Url } from "@/lib/icons8"

type Fact = {
  iconId: string
  title: string
  body: string
  accent: string
  href: string
  cta: string
}

const facts: Fact[] = [
  {
    iconId: "63765",
    title: "Local SEO + lead gen specialists.",
    body:
      "We focus on one thing: getting service businesses found on Google and turning those clicks into booked jobs.",
    accent: "#1677FF",
    href: "/services/seo",
    cta: "How we rank you →",
  },
  {
    iconId: "11901",
    title: "Senior team. Zero offshoring.",
    body:
      "Ten in-house specialists in Irvine — designers, developers, ad buyers, SEOs. No subcontractors, no junior handoffs.",
    accent: "#0EA5E9",
    href: "/about/team",
    cta: "Meet the team →",
  },
  {
    iconId: "13794",
    title: "Irvine HQ. Clients in 50 states.",
    body:
      "Founded March 19, 2020. Still independent, still in the same office — now serving 1,000+ businesses nationwide.",
    accent: "#7C3AED",
    href: "/about/our-story",
    cta: "Read the founding story →",
  },
]

export function AboutQuickFacts() {
  return (
    <section
      aria-labelledby="about-quick-facts-heading"
      className="relative"
      style={{ background: "#FFFFFF" }}
    >
      <div className="section-container section-y">
        <h2 id="about-quick-facts-heading" className="sr-only">
          Three things to know about Max Market Pros
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {facts.map((f, i) => (
            <article
              key={f.iconId}
              className="card-surface card-surface-hover p-6 sm:p-7 flex flex-col"
              style={{
                animation: `fadeInUp 0.7s ease-out ${0.05 + i * 0.08}s both`,
                borderRadius: "var(--radius-lg)",
              }}
            >
              <span
                className="w-14 h-14 rounded-[14px] inline-flex items-center justify-center shrink-0"
                style={{
                  background: `${f.accent}14`,
                  border: `1px solid ${f.accent}33`,
                }}
              >
                <img
                  src={icons8Url(f.iconId, 96)}
                  alt=""
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                />
              </span>

              <h3
                className="mt-5 text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em]"
                style={{ color: "var(--ink)" }}
              >
                {f.title}
              </h3>

              <p
                className="mt-3 text-[15px] leading-[1.6] flex-1"
                style={{ color: "var(--muted)" }}
              >
                {f.body}
              </p>

              <Link
                href={f.href}
                className="mt-5 inline-flex items-center text-[14px] font-semibold hover:underline"
                style={{ color: f.accent }}
              >
                {f.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

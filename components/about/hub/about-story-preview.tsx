import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { SecondaryButton } from "@/components/ui/secondary-button"

type Chapter = {
  num: string
  title: string
  body: React.ReactNode
}

const chapters: Chapter[] = [
  {
    num: "01",
    title: "Built in lockdown.",
    body: (
      <>
        Joseph and Lawrence opened the doors on{" "}
        <span className="font-semibold" style={{ color: "var(--ink)" }}>
          March 19, 2020
        </span>{" "}
        &mdash; the same day California shut down. We had a phone, a few clients,
        and a stubborn belief that owners deserved more than agency theater.{" "}
        <Link
          href="/about/our-story"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          The beginning &rarr;
        </Link>
      </>
    ),
  },
  {
    num: "02",
    title: "Three things we still believe.",
    body: (
      <>
        Confidence in chaos. Skill without the agency-theater fluff. A team
        that&rsquo;s all-in &mdash; same urgency you bring to your business is
        the urgency we bring to ours.{" "}
        <Link
          href="/about/our-story"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          What we believe &rarr;
        </Link>
      </>
    ),
  },
  {
    num: "03",
    title: "Five years on, still independent.",
    body: (
      <>
        Same office in Irvine. Same founders on the floor. 1,000+ businesses
        helped nationwide &mdash; from HVAC and plumbing to medical, restaurants,
        and everything in between.{" "}
        <Link
          href="/about/our-story"
          className="font-semibold hover:underline"
          style={{ color: "var(--accent)" }}
        >
          Where we are today &rarr;
        </Link>
      </>
    ),
  },
]

export function AboutStoryPreview() {
  return (
    <section
      aria-labelledby="about-story-preview-heading"
      className="relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[20%] left-[-6%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(116,211,255,0.18) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — image with floating overlays */}
          <div
            className="relative order-2 lg:order-1"
            style={{ animation: "fadeInUp 0.8s ease-out both" }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "var(--radius-xl)",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow:
                  "0 4px 24px rgba(11,19,43,0.18), 0 24px 80px rgba(11,19,43,0.22)",
              }}
            >
              <Image
                src="/about/our-story/irvine-hq.jpg"
                alt="Max Market Pros Irvine, CA headquarters at 2600 Michelson Drive"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 92vw, 560px"
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>

            {/* Floating "5+ years" card */}
            <div
              className="absolute -top-5 -left-4 sm:-left-6 px-4 py-3 rounded-[var(--radius-md)] flex items-center gap-3"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
              }}
            >
              <span
                className="text-[22px] sm:text-[26px] font-extrabold leading-none tracking-[-0.02em]"
                style={{
                  background:
                    "linear-gradient(135deg, #74D3FF 0%, #1677FF 60%, #0D5FD9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                5+
              </span>
              <div className="flex flex-col">
                <span
                  className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "var(--muted)" }}
                >
                  Years
                </span>
                <span
                  className="text-[11.5px] font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  Still independent
                </span>
              </div>
            </div>

            {/* Floating "Irvine HQ" card */}
            <div
              className="absolute -bottom-5 -right-4 sm:-right-6 px-4 py-3 rounded-[var(--radius-md)] hidden sm:flex flex-col gap-0.5"
              style={{
                background: "#fff",
                border: "1px solid var(--border-color)",
                boxShadow: "0 8px 24px rgba(11,19,43,0.18)",
              }}
            >
              <span
                className="text-[9.5px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "var(--muted)" }}
              >
                HQ
              </span>
              <span
                className="text-[14px] font-bold leading-tight"
                style={{ color: "var(--ink)" }}
              >
                2600 Michelson Dr
                <br />
                Irvine, CA
              </span>
            </div>
          </div>

          {/* Right — chapters */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(22,119,255,0.35)",
                color: "var(--accent)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
              Our story
            </span>

            <h2
              id="about-story-preview-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Built in lockdown.{" "}
              <span className="accent-underline">Still standing</span>.
            </h2>

            <ol className="mt-8 space-y-6">
              {chapters.map((c, i) => (
                <li
                  key={c.num}
                  className="flex gap-4"
                  style={{
                    animation: `fadeInUp 0.7s ease-out ${0.1 + i * 0.08}s both`,
                  }}
                >
                  <span
                    className="shrink-0 w-9 h-9 rounded-full inline-flex items-center justify-center text-[12px] font-bold"
                    style={{
                      background: "rgba(22,119,255,0.10)",
                      color: "var(--accent)",
                      border: "1px solid rgba(22,119,255,0.22)",
                    }}
                  >
                    {c.num}
                  </span>
                  <div>
                    <h3
                      className="text-[17px] sm:text-[18px] font-bold leading-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="mt-1.5 text-[15px] sm:text-[16px] leading-[1.6]"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex items-center gap-2">
              <SecondaryButton asLink href="/about/our-story">
                Read the full story
              </SecondaryButton>
              <span
                className="text-[13px] hidden sm:inline-flex items-center gap-1"
                style={{ color: "var(--muted)" }}
              >
                <ArrowRight className="w-3.5 h-3.5" />
                5-minute read
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

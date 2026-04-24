import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  PenLine,
  Radio,
  Link2,
  Quote,
  BarChart3,
  ShieldCheck,
} from "lucide-react"

const deliverables = [
  {
    Icon: PenLine,
    title: "We write the release",
    desc: "A senior PR writer crafts a newsworthy angle, a headline that gets picked up, and SEO-tuned body copy journalists actually quote.",
  },
  {
    Icon: Radio,
    title: "We distribute to 200+ outlets",
    desc: "Yahoo Finance, AP News, MarketWatch, Business Insider, Benzinga, Digital Journal and 194+ real newsrooms — not PR-farm recycling.",
  },
  {
    Icon: Link2,
    title: "Dofollow authority links",
    desc: "Real links back to your site from publications with DR 70–92. The kind of links that move rankings and survive Google updates.",
  },
  {
    Icon: Quote,
    title: "Brand credibility assets",
    desc: "Forbes, Yahoo Finance, and MarketWatch badges you can drop on your homepage, emails, and sales decks the day your release goes live.",
  },
  {
    Icon: BarChart3,
    title: "Placement reporting",
    desc: "A live report with every URL, domain rating, estimated reach, and referral traffic so you can measure ROI on every release you buy.",
  },
  {
    Icon: ShieldCheck,
    title: "Compliance + legal review",
    desc: "Claims reviewed against FTC guidelines, disclosures baked in, and legal-safe phrasing so the release actually passes newsroom gates.",
  },
]

export function PressReleasesWhatsIncluded() {
  return (
    <section
      id="press-releases-included"
      aria-labelledby="press-releases-included-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] left-[-8%] w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(234,179,8,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-start">
          {/* Left: sticky copy */}
          <div className="lg:sticky lg:top-24 self-start">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.08em] rounded-full border"
              style={{
                background: "rgba(234,179,8,0.10)",
                borderColor: "rgba(234,179,8,0.28)",
                color: "#A16207",
              }}
            >
              What&rsquo;s included
            </span>

            <h2
              id="press-releases-included-heading"
              className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-balance"
              style={{ color: "var(--ink)" }}
            >
              Every press release we ship is{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">done-for-you</span>,
              </span>{" "}
              end-to-end.
            </h2>

            <p
              className="mt-5 text-[16.5px] sm:text-[18px] leading-[1.65] max-w-[480px]"
              style={{ color: "var(--muted)" }}
            >
              You don&rsquo;t write it. You don&rsquo;t pitch it. You don&rsquo;t
              hunt outlets. We run the whole campaign — from angle workshop to
              placement reporting — so you can buy a press release and get back
              to running your business.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <img
                src={icons8Url("tgRqDvvOOuEF", 192)}
                alt=""
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div>
                <div
                  className="text-[13px] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "#A16207" }}
                >
                  Campaign lead time
                </div>
                <div
                  className="text-[18px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  Live in as little as 48 hours
                </div>
              </div>
            </div>

            <div className="mt-8">
              <PrimaryButton size="lg" asLink href="#contact">
                Start a press release campaign
              </PrimaryButton>
            </div>
          </div>

          {/* Right: deliverables stack */}
          <div className="space-y-4">
            {deliverables.map((d, idx) => (
              <div
                key={d.title}
                className="card-surface card-surface-hover relative p-5 sm:p-6"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.05 * idx}s both`,
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <div className="flex items-start gap-5">
                  <span
                    className="shrink-0 w-12 h-12 rounded-[14px] flex items-center justify-center relative"
                    style={{
                      background:
                        "linear-gradient(180deg, #FEF3C7 0%, #FDE68A 100%)",
                      border: "1px solid rgba(234,179,8,0.35)",
                      color: "#A16207",
                    }}
                  >
                    <d.Icon className="w-5 h-5" strokeWidth={2.25} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className="text-[17px] sm:text-[19px] font-bold leading-[1.25]"
                        style={{ color: "var(--ink)" }}
                      >
                        {d.title}
                      </h3>
                      <span
                        className="text-[10.5px] font-bold tracking-[0.1em] px-1.5 py-0.5 rounded-md"
                        style={{
                          background: "rgba(22,119,255,0.08)",
                          color: "var(--accent)",
                        }}
                      >
                        0{idx + 1}
                      </span>
                    </div>
                    <p
                      className="mt-1.5 text-[14.5px] sm:text-[15px] leading-[1.6]"
                      style={{ color: "var(--muted)" }}
                    >
                      {d.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

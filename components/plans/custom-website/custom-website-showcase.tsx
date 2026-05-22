import { SectionHeader } from "@/components/ui/section-header"
import { showcaseCards } from "@/lib/custom-website-data"
import { WebsiteMockup } from "./website-mockup"

const spanClasses = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-6",
  "lg:col-span-6",
]

export function CustomWebsiteShowcase() {
  return (
    <section
      id="custom-website-showcase"
      aria-labelledby="custom-website-showcase-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[-5%] w-[480px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[5%] left-[-5%] w-[480px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="What your site will look like"
          heading={
            <span id="custom-website-showcase-heading">
              A site that turns visitors into{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">customers</span>.
              </span>
            </span>
          }
          paragraph="Here's a peek at how your site comes together — designed around your brand, your services, and the towns you actually work in."
        />

        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {showcaseCards.map((card, idx) => {
            const spanClass = spanClasses[idx] ?? "lg:col-span-6"
            return (
              <article
                key={card.key}
                className={`card-surface p-6 sm:p-7 relative overflow-hidden flex flex-col ${spanClass}`}
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div
                  aria-hidden
                  className="absolute -top-20 -right-16 w-[260px] h-[260px] rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${card.accent}1A 0%, transparent 65%)`,
                  }}
                />

                <div className="relative flex-1 flex flex-col">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.1em] mb-4 self-start"
                    style={{
                      background: `${card.accent}14`,
                      color: card.accent,
                      border: `1px solid ${card.accent}33`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: card.accent }}
                    />
                    On your site
                  </span>

                  <h3
                    className="text-[19px] sm:text-[20px] font-bold leading-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-2 text-[14.5px] leading-[1.55] max-w-[440px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {card.body}
                  </p>

                  <div className="mt-6 flex-1 flex items-end">
                    <WebsiteMockup
                      variant={card.variant}
                      accent={card.accent}
                      businessName="Your Shop"
                      className="w-full"
                    />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Check, X, Sparkles, Wrench } from "lucide-react"

type Row = {
  feature: string
  diy: string
  mmp: string
}

const rows: Row[] = [
  {
    feature: "Design quality",
    diy: "Template-locked, everyone looks the same",
    mmp: "Custom design system built around your brand",
  },
  {
    feature: "Conversion strategy",
    diy: "Pick a template, hope it converts",
    mmp: "Hook, proof, offer, CTA baked into every page",
  },
  {
    feature: "SEO foundation",
    diy: "Generic plugins, broken schema",
    mmp: "Schema, OG, sitemap, semantic HTML on day 1",
  },
  {
    feature: "Page speed",
    diy: "70–80 Lighthouse, bloated scripts",
    mmp: "95+ Lighthouse, sub-second LCP",
  },
  {
    feature: "Integrations",
    diy: "Whatever plugins you can wrangle",
    mmp: "Stripe, HighLevel, GA4, calendars wired to work",
  },
  {
    feature: "Ongoing support",
    diy: "YouTube tutorials at 2am",
    mmp: "Real human on email/Slack, responds in hours",
  },
  {
    feature: "Launch time",
    diy: "2–6 months of nights & weekends",
    mmp: "3–5 weeks start to live",
  },
  {
    feature: "Analytics & tracking",
    diy: "Forgot to install it",
    mmp: "GA4, Search Console, call tracking pre-wired",
  },
  {
    feature: "Hosting & backups",
    diy: "DIY, crossed fingers",
    mmp: "Managed hosting, daily backups, SSL included",
  },
  {
    feature: "Outcome",
    diy: "A website that exists",
    mmp: "A website that books jobs",
  },
]

export function WebComparison() {
  return (
    <section aria-labelledby="web-comparison-heading" className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="DIY vs Max Market Pros"
          heading={
            <span id="web-comparison-heading">
              DIY builder vs Max Market{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">Pros</span>.
              </span>
            </span>
          }
          paragraph="We love the DIY spirit. But a website that ranks, loads fast, and converts is a full-time job. Here's the honest difference."
        />

        {/* Desktop table */}
        <div
          className="mt-12 hidden md:block card-surface overflow-hidden"
          style={{ borderRadius: "var(--radius-xl)", animation: "fadeInUp 0.7s ease-out both" }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_minmax(0,1.4fr)] border-b"
            style={{
              borderColor: "var(--border-color)",
              background: "var(--surface)",
            }}
          >
            <div
              className="p-5 text-[12.5px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--muted)" }}
            >
              Feature
            </div>
            <div
              className="p-5 flex items-center gap-2 text-[13.5px] font-bold"
              style={{
                color: "#9CA3AF",
                borderLeft: "1px solid var(--border-color)",
              }}
            >
              <Wrench className="w-4 h-4" strokeWidth={2.25} />
              DIY Site Builder
            </div>
            <div
              className="p-5 flex items-center gap-2 text-[13.5px] font-bold"
              style={{
                color: "var(--accent)",
                borderLeft: "1px solid var(--border-color)",
                background:
                  "linear-gradient(180deg, rgba(22,119,255,0.06) 0%, rgba(116,211,255,0.04) 100%)",
              }}
            >
              <Sparkles className="w-4 h-4" strokeWidth={2.25} />
              Max Market Pros
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, idx) => (
            <div
              key={r.feature}
              className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_minmax(0,1.4fr)]"
              style={{
                borderTop: idx === 0 ? "none" : "1px solid var(--border-color)",
                background: idx % 2 === 0 ? "#fff" : "rgba(247,250,252,0.5)",
              }}
            >
              <div
                className="p-5 text-[14.5px] font-semibold"
                style={{ color: "var(--ink)" }}
              >
                {r.feature}
              </div>
              <div
                className="p-5 flex items-start gap-2.5"
                style={{ borderLeft: "1px solid var(--border-color)" }}
              >
                <span
                  className="shrink-0 mt-[3px] w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "#FEE2E2", color: "#DC2626" }}
                >
                  <X className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
                <span
                  className="text-[14px] leading-[1.5]"
                  style={{ color: "var(--muted)" }}
                  dangerouslySetInnerHTML={{ __html: r.diy }}
                />
              </div>
              <div
                className="p-5 flex items-start gap-2.5"
                style={{
                  borderLeft: "1px solid var(--border-color)",
                  background:
                    "linear-gradient(180deg, rgba(22,119,255,0.04) 0%, rgba(116,211,255,0.02) 100%)",
                }}
              >
                <span
                  className="shrink-0 mt-[3px] w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.15)", color: "#059669" }}
                >
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
                <span
                  className="text-[14px] leading-[1.5] font-medium"
                  style={{ color: "var(--ink)" }}
                  dangerouslySetInnerHTML={{ __html: r.mmp }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked */}
        <div
          className="mt-12 md:hidden space-y-4"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {rows.map((r) => (
            <article
              key={r.feature}
              className="card-surface overflow-hidden p-5"
            >
              <div
                className="text-[11.5px] font-bold uppercase tracking-[0.08em] mb-3"
                style={{ color: "var(--muted)" }}
              >
                {r.feature}
              </div>
              <div className="flex items-start gap-2.5 mb-3">
                <span
                  className="shrink-0 mt-[2px] w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "#FEE2E2", color: "#DC2626" }}
                  aria-label="DIY"
                >
                  <X className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
                <div>
                  <div
                    className="text-[11px] font-bold uppercase tracking-[0.06em] mb-0.5"
                    style={{ color: "#9CA3AF" }}
                  >
                    DIY builder
                  </div>
                  <div
                    className="text-[14px] leading-[1.5]"
                    style={{ color: "var(--muted)" }}
                    dangerouslySetInnerHTML={{ __html: r.diy }}
                  />
                </div>
              </div>
              <div
                className="flex items-start gap-2.5 pt-3 border-t"
                style={{ borderColor: "var(--border-color)" }}
              >
                <span
                  className="shrink-0 mt-[2px] w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.15)", color: "#059669" }}
                  aria-label="Max Market Pros"
                >
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
                <div>
                  <div
                    className="text-[11px] font-bold uppercase tracking-[0.06em] mb-0.5"
                    style={{ color: "var(--accent)" }}
                  >
                    Max Market Pros
                  </div>
                  <div
                    className="text-[14px] leading-[1.5] font-medium"
                    style={{ color: "var(--ink)" }}
                    dangerouslySetInnerHTML={{ __html: r.mmp }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <PrimaryButton size="lg" asLink href="#contact">
            Skip the DIY — book a strategy call
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

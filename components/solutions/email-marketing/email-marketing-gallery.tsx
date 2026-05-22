import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Sparkles, Mail, ArrowRight } from "lucide-react"

type Template = {
  category: string
  categoryColor: string
  subject: string
  preheader: string
  bodyLines: string[]
  cta: string
  sentFrom: string
  result: string
}

const templates: Template[] = [
  {
    category: "Welcome Series",
    categoryColor: "#1677FF",
    subject: "Welcome to [Business Name] 👋",
    preheader: "Here's what happens next + what to expect from us...",
    bodyLines: [
      "Hey {{first_name}},",
      "Thanks for reaching out — we got your info and a tech will be in touch within 2 hours.",
      "In the meantime, here's our service area + pricing guide:",
    ],
    cta: "View service areas",
    sentFrom: "Email 1 of 4 · Sent immediately",
    result: "42% open · 12% click",
  },
  {
    category: "Quote Follow-up",
    categoryColor: "#F59E0B",
    subject: "Any questions on your quote, {{first_name}}?",
    preheader: "Reply to this email — I'll personally help.",
    bodyLines: [
      "Hey {{first_name}},",
      "I wanted to follow up on the {{service_type}} quote we sent last week.",
      "A lot of folks have questions about timing or payment plans — happy to clear those up.",
    ],
    cta: "Reply with questions",
    sentFrom: "Email 2 of 3 · 3 days after quote",
    result: "31% reply rate",
  },
  {
    category: "Re-engagement",
    categoryColor: "#8B5CF6",
    subject: "We miss you, {{first_name}} — 20% off just for you",
    preheader: "It's been a while since your last service...",
    bodyLines: [
      "Hey {{first_name}},",
      "Looks like your last tune-up with us was {{last_service_date}}.",
      "Here's 20% off your next service as a thank-you for being a past customer.",
    ],
    cta: "Book 20% off service",
    sentFrom: "Triggered · 90 days since last job",
    result: "18% reactivation rate",
  },
  {
    category: "Seasonal Promo",
    categoryColor: "#22C55E",
    subject: "Beat the summer rush — book your AC tune-up now",
    preheader: "Our calendar fills up fast once it hits 90°...",
    bodyLines: [
      "Hey {{first_name}},",
      "Every year our AC calendar books out 3 weeks deep by the first hot week.",
      "Lock in your spring tune-up now — $89 through April only.",
    ],
    cta: "Claim spring pricing",
    sentFrom: "Segment · Past HVAC customers",
    result: "$12K revenue · 1 campaign",
  },
]

export function EmailMarketingGallery() {
  return (
    <section aria-labelledby="email-marketing-gallery-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-5%] w-[400px] h-[400px] sm:w-[620px] sm:h-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-8%] w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Real Campaign Examples"
          heading={
            <span id="email-marketing-gallery-heading">
              Campaigns that are{" "}
              <span className="accent-underline">
                already <span className="whitespace-nowrap">working.</span>
              </span>
            </span>
          }
          paragraph="Four proven campaign templates we set up for service-business clients — with real open, reply, and revenue numbers."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {templates.map((t) => <TemplateCard key={t.subject} template={t} />)}
        </div>

        <div className="mt-12 flex justify-center">
          <SecondaryButton asLink href="/solutions/lead-generation">
            Pair with lead generation
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

function TemplateCard({ template }: { template: Template }) {
  return (
    <article className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6 flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 100% 60% at 50% 0%, ${template.categoryColor}10 0%, transparent 60%)` }}
      />

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full"
            style={{ background: `${template.categoryColor}1A`, color: template.categoryColor }}
          >
            <Sparkles className="w-2.5 h-2.5" strokeWidth={2.5} />
            {template.category}
          </span>
          <span className="text-[10.5px] font-semibold" style={{ color: "var(--muted)" }}>
            Template
          </span>
        </div>

        {/* Email client mockup */}
        <div
          className="rounded-[var(--radius-md)] border overflow-hidden"
          style={{ background: "var(--surface)", borderColor: "var(--border-color)" }}
        >
          <div
            className="px-3 py-2 flex items-center gap-2 border-b"
            style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
              style={{ background: template.categoryColor, color: "#fff" }}
            >
              <Mail className="w-3 h-3" strokeWidth={2.5} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10.5px] font-bold leading-tight truncate" style={{ color: "var(--ink)" }}>
                Max Market Pros
              </div>
              <div className="text-[9.5px] truncate" style={{ color: "var(--muted)" }}>
                hello@maxmarketpros.com
              </div>
            </div>
            <span className="text-[9.5px] font-semibold shrink-0" style={{ color: "var(--muted)" }}>
              9:14 AM
            </span>
          </div>

          <div className="px-4 py-3">
            <div className="text-[13px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
              {template.subject}
            </div>
            <div className="text-[11px] mt-0.5 truncate" style={{ color: "var(--muted)" }}>
              {template.preheader}
            </div>
            <div
              className="mt-3 pt-3 border-t space-y-1.5"
              style={{ borderColor: "var(--border-color)" }}
            >
              {template.bodyLines.map((line, i) => (
                <div key={i} className="text-[11.5px] leading-[1.4]" style={{ color: i === 0 ? "var(--ink)" : "var(--muted)" }}>
                  {line}
                </div>
              ))}
              <div
                className="inline-flex items-center gap-1 mt-2 px-3 py-1.5 rounded-[var(--radius-xs)] text-[10.5px] font-semibold"
                style={{
                  background: "linear-gradient(180deg, #2B8AFF 0%, #1677FF 100%)",
                  color: "#fff",
                  boxShadow: "0 1px 3px rgba(22,119,255,0.3)",
                }}
              >
                {template.cta}
                <ArrowRight className="w-2.5 h-2.5" strokeWidth={2.75} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 text-[11.5px]">
          <span className="font-semibold" style={{ color: "var(--muted)" }}>
            {template.sentFrom}
          </span>
          <span
            className="inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded-full"
            style={{ background: `${template.categoryColor}14`, color: template.categoryColor }}
          >
            {template.result}
          </span>
        </div>
      </div>
    </article>
  )
}

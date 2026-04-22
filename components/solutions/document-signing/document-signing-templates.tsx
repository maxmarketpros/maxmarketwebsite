import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { icons8Url } from "@/lib/icons8"
import { FileText, Check, Plus } from "lucide-react"

type Template = {
  iconId: string
  category: string
  categoryColor: string
  title: string
  useCase: string
  fields: string[]
  typicalTurnaround: string
}

const templates: Template[] = [
  {
    iconId: "QanbId3SGVR7",
    category: "Service Agreement",
    categoryColor: "#8B5CF6",
    title: "Master Service Agreement",
    useCase: "Standard service terms for recurring work, ongoing maintenance, or retainer clients.",
    fields: ["Scope of work", "Pricing & terms", "Cancellation policy", "Liability language"],
    typicalTurnaround: "~ 12 minutes to sign",
  },
  {
    iconId: "18944",
    category: "Proposal",
    categoryColor: "#1677FF",
    title: "Project Proposal",
    useCase: "Branded proposal with pricing, timeline, and deliverables — signable in one flow.",
    fields: ["Line-item pricing", "Timeline & milestones", "Acceptance checkbox", "Deposit trigger"],
    typicalTurnaround: "~ 8 minutes to sign",
  },
  {
    iconId: "19216",
    category: "Change Order",
    categoryColor: "#F59E0B",
    title: "Change Order Form",
    useCase: "Mid-project changes or scope additions that need documented client approval.",
    fields: ["Change description", "New pricing delta", "Revised timeline", "Authorization"],
    typicalTurnaround: "~ 4 minutes to sign",
  },
  {
    iconId: "16236",
    category: "NDA",
    categoryColor: "#0EA5E9",
    title: "Non-Disclosure Agreement",
    useCase: "Protect confidential info when you're discussing sensitive work with a prospect.",
    fields: ["Mutual or one-way", "Scope of info", "Term length", "Jurisdiction"],
    typicalTurnaround: "~ 3 minutes to sign",
  },
]

export function DocumentSigningTemplates() {
  return (
    <section aria-labelledby="doc-signing-templates-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-8%] w-[400px] h-[400px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-8%] w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Template Library"
          heading={
            <span id="doc-signing-templates-heading">
              Built-in templates for every{" "}
              <span className="accent-underline">
                common <span className="whitespace-nowrap">contract.</span>
              </span>
            </span>
          }
          paragraph="Start from a template, merge in the contact's info, and send in 60 seconds. Or upload your own and turn it into a reusable template forever."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {templates.map((t) => <TemplateCard key={t.title} template={t} />)}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <SecondaryButton asLink href="/solutions/payments">
            Pair with text-to-pay invoicing
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

function TemplateCard({ template }: { template: Template }) {
  return (
    <article
      className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6 flex flex-col group"
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 80% 60% at 30% 0%, ${template.categoryColor}10 0%, transparent 65%)` }}
      />

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start gap-3">
          <img
            src={icons8Url(template.iconId, 128)}
            alt=""
            width={52}
            height={52}
            loading="lazy"
            decoding="async"
            className="w-[52px] h-[52px] object-contain shrink-0"
          />
          <div className="min-w-0 flex-1">
            <span
              className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full"
              style={{ background: `${template.categoryColor}1A`, color: template.categoryColor }}
            >
              <FileText className="w-2.5 h-2.5" strokeWidth={2.5} />
              {template.category}
            </span>
            <h3 className="mt-2 text-[19px] sm:text-[21px] font-bold leading-tight tracking-[-0.01em]" style={{ color: "var(--ink)" }}>
              {template.title}
            </h3>
          </div>
        </div>

        <p className="mt-3 text-[14.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>
          {template.useCase}
        </p>

        <div
          className="mt-4 rounded-[var(--radius-md)] border p-3"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          <div className="text-[10.5px] font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "var(--muted)" }}>
            Included fields
          </div>
          <ul className="space-y-1.5">
            {template.fields.map((f) => (
              <li key={f} className="flex items-center gap-2 text-[12.5px]" style={{ color: "var(--ink)" }}>
                <span
                  className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `${template.categoryColor}1F`, color: template.categoryColor }}
                >
                  <Check className="w-2 h-2" strokeWidth={3.5} />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1 text-[11.5px] font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "var(--bg)", border: "1px solid var(--border-color)", color: "var(--muted)" }}
          >
            {template.typicalTurnaround}
          </span>
          <span
            className="inline-flex items-center gap-1 text-[12px] font-bold transition-all group-hover:translate-x-1"
            style={{ color: template.categoryColor }}
          >
            <Plus className="w-3 h-3" strokeWidth={3} />
            Start from template
          </span>
        </div>
      </div>
    </article>
  )
}

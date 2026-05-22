import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Zap, Clock, ArrowDown } from "lucide-react"

type Node = {
  kind: "trigger" | "action" | "delay"
  label: string
  detail: string
  color: string
}

type Recipe = {
  badge: string
  badgeColor: string
  title: string
  caption: string
  nodes: Node[]
  impact: string
}

const recipes: Recipe[] = [
  {
    badge: "Lead Rescue",
    badgeColor: "#EF4444",
    title: "Missed call → Auto text-back",
    caption: "The #1 most-requested workflow. Turns missed calls into booked jobs.",
    nodes: [
      { kind: "trigger", label: "Trigger", detail: "Missed call on business line", color: "#EF4444" },
      { kind: "action", label: "Action", detail: "Send SMS: 'Sorry we missed you — what's going on?'", color: "#1677FF" },
      { kind: "delay", label: "Delay", detail: "If no reply in 2 min", color: "#F59E0B" },
      { kind: "action", label: "Action", detail: "Assign callback task to on-duty rep", color: "#22C55E" },
    ],
    impact: "~47% of missed calls convert",
  },
  {
    badge: "Proposal Close",
    badgeColor: "#1677FF",
    title: "Quote sent → 3-step follow-up",
    caption: "Three emails spaced over a week — with an exit if the quote is signed.",
    nodes: [
      { kind: "trigger", label: "Trigger", detail: "Proposal sent to contact", color: "#1677FF" },
      { kind: "delay", label: "Delay", detail: "Wait 3 days", color: "#F59E0B" },
      { kind: "action", label: "Action", detail: "Email: 'Any questions on your quote?'", color: "#14B8A6" },
      { kind: "delay", label: "Delay", detail: "Wait 4 more days (exit on sign)", color: "#F59E0B" },
      { kind: "action", label: "Action", detail: "Email: final reminder + testimonial", color: "#8B5CF6" },
    ],
    impact: "+31% close rate on stale quotes",
  },
  {
    badge: "Post-Job Delight",
    badgeColor: "#22C55E",
    title: "Payment received → Thank-you + review",
    caption: "Auto-thank the customer, then ask for a Google review the next day.",
    nodes: [
      { kind: "trigger", label: "Trigger", detail: "Invoice marked Paid", color: "#22C55E" },
      { kind: "action", label: "Action", detail: "Send SMS: 'Thanks {{first_name}}! 🙏'", color: "#1677FF" },
      { kind: "delay", label: "Delay", detail: "Wait 24 hours", color: "#F59E0B" },
      { kind: "action", label: "Action", detail: "Send Google review request SMS", color: "#EAB308" },
      { kind: "action", label: "Action", detail: "Tag contact: Promoter · Reviewed", color: "#8B5CF6" },
    ],
    impact: "~6× more 5-star reviews",
  },
]

export function TaskManagementRecipes() {
  return (
    <section aria-labelledby="task-mgmt-recipes-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-5%] w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Real Automation Recipes"
          heading={
            <span id="task-mgmt-recipes-heading">
              Three workflows we set up for almost every{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">client.</span>
              </span>
            </span>
          }
          paragraph="You don't start from scratch. You start from what's already working — and tune it to your business."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {recipes.map((r) => <RecipeCard key={r.title} recipe={r} />)}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <SecondaryButton asLink href="/solutions/ai-agents">
            Add an AI agent to any workflow
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6 flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 100% 60% at 50% 0%, ${recipe.badgeColor}10 0%, transparent 60%)` }}
      />
      <div className="relative flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span
            className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full"
            style={{ background: `${recipe.badgeColor}1A`, color: recipe.badgeColor }}
          >
            <Zap className="w-2.5 h-2.5" strokeWidth={2.5} />
            {recipe.badge}
          </span>
        </div>

        <h3 className="text-[18px] sm:text-[20px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
          {recipe.title}
        </h3>
        <p className="mt-1 text-[13px] leading-[1.5]" style={{ color: "var(--muted)" }}>
          {recipe.caption}
        </p>

        {/* Node chain */}
        <div
          className="mt-4 rounded-[var(--radius-md)] border p-3 space-y-1.5 flex-1"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          {recipe.nodes.map((n, i) => (
            <div key={i}>
              <NodeRow node={n} />
              {i < recipe.nodes.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <ArrowDown className="w-2.5 h-2.5" style={{ color: "var(--muted)" }} strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-4 inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-[11.5px] font-bold"
          style={{ background: `${recipe.badgeColor}14`, color: recipe.badgeColor }}
        >
          {recipe.impact}
        </div>
      </div>
    </article>
  )
}

function NodeRow({ node }: { node: Node }) {
  const isDelay = node.kind === "delay"
  return (
    <div
      className="flex items-start gap-2 p-2 rounded-[var(--radius-xs)] border"
      style={{
        background: isDelay ? `${node.color}0A` : "var(--surface)",
        borderColor: isDelay ? `${node.color}33` : "var(--border-color)",
      }}
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
        style={{ background: `${node.color}22`, color: node.color }}
      >
        {isDelay ? (
          <Clock className="w-2.5 h-2.5" strokeWidth={2.5} />
        ) : (
          <Zap className="w-2.5 h-2.5" strokeWidth={2.5} fill="currentColor" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div
          className="text-[9.5px] font-bold uppercase tracking-[0.08em]"
          style={{ color: node.color }}
        >
          {node.label}
        </div>
        <div className="text-[11px] font-medium leading-tight" style={{ color: "var(--ink)" }}>
          {node.detail}
        </div>
      </div>
    </div>
  )
}

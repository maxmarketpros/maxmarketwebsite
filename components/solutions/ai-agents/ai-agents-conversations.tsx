import { SectionHeader } from "@/components/ui/section-header"
import { Bot, Sparkles, Check, Clock } from "lucide-react"

type Message =
  | { role: "user"; text: string; time?: string }
  | { role: "ai"; text: string; time?: string; showActions?: boolean }

type Scenario = {
  badge: string
  badgeColor: string
  title: string
  caption: string
  messages: Message[]
  outcome: string
  outcomeIcon: "check" | "clock"
}

const scenarios: Scenario[] = [
  {
    badge: "Pricing question",
    badgeColor: "#F59E0B",
    title: "Qualifies and quotes",
    caption: "AI handles pricing questions without under- or over-committing.",
    messages: [
      { role: "user", text: "Hey — how much for a standard AC tune-up?", time: "8:42 PM" },
      {
        role: "ai",
        text: "Our standard AC tune-up is $99 and includes a 22-point check + coil rinse. If we find anything that needs fixing, we quote before touching it. Want to book a time?",
        time: "8:42 PM",
      },
      { role: "user", text: "Yeah book me in", time: "8:43 PM" },
    ],
    outcome: "Booked + $99 deposit",
    outcomeIcon: "check",
  },
  {
    badge: "Scheduling",
    badgeColor: "#22C55E",
    title: "Books a job end-to-end",
    caption: "AI reads the calendar and fills open slots.",
    messages: [
      { role: "user", text: "I need someone to look at a leaky faucet tomorrow", time: "11:04 PM" },
      {
        role: "ai",
        text: "Got it. Tomorrow I have 9:00 AM, 11:30 AM, or 2:00 PM open. Any preference?",
        time: "11:04 PM",
      },
      { role: "user", text: "11:30 works", time: "11:05 PM" },
      {
        role: "ai",
        text: "Locked in. Confirmation sent to your phone + a reminder 2 hours before.",
        time: "11:05 PM",
        showActions: true,
      },
    ],
    outcome: "Appt created + SMS sent",
    outcomeIcon: "check",
  },
  {
    badge: "Emergency routing",
    badgeColor: "#EF4444",
    title: "Knows when to escalate",
    caption: "Sensitive cases hand off to a human instantly.",
    messages: [
      { role: "user", text: "Water is POURING out from under my sink HELP", time: "2:17 AM" },
      {
        role: "ai",
        text: "This is an emergency — shut off the water valve under your sink (turn the handle clockwise). I'm ringing our on-call tech right now. Stay on this chat.",
        time: "2:17 AM",
      },
      {
        role: "ai",
        text: "✓ Tech Mike acknowledged. He'll call you in 90 seconds.",
        time: "2:18 AM",
      },
    ],
    outcome: "Routed to on-call rep",
    outcomeIcon: "clock",
  },
]

export function AIAgentsConversations() {
  return (
    <section aria-labelledby="ai-agents-convos-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-8%] w-[400px] h-[400px] sm:w-[620px] sm:h-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-8%] w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.10) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Real Conversation Examples"
          heading={
            <span id="ai-agents-convos-heading">
              How the AI actually{" "}
              <span className="accent-underline">
                <span className="whitespace-nowrap">talks.</span>
              </span>
            </span>
          }
          paragraph="Three real scenarios showing how the agent qualifies, books, and escalates — word-for-word."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {scenarios.map((s) => <ScenarioCard key={s.title} scenario={s} />)}
        </div>
      </div>
    </section>
  )
}

function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <article className="card-surface card-surface-hover relative overflow-hidden p-5 sm:p-6 flex flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 100% 60% at 50% 0%, ${scenario.badgeColor}10 0%, transparent 60%)` }}
      />
      <div className="relative flex flex-col flex-1">
        <div className="flex items-center justify-between mb-1">
          <span
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full"
            style={{ background: `${scenario.badgeColor}14`, color: scenario.badgeColor }}
          >
            {scenario.badge}
          </span>
          <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold" style={{ color: "var(--muted)" }}>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#22C55E", animation: "subtlePulse 2s ease-in-out infinite" }}
            />
            Live
          </span>
        </div>
        <h3 className="text-[18px] sm:text-[19px] font-bold leading-tight" style={{ color: "var(--ink)" }}>{scenario.title}</h3>
        <p className="mt-1 text-[13.5px]" style={{ color: "var(--muted)" }}>{scenario.caption}</p>

        <div
          className="mt-4 rounded-[var(--radius-md)] border p-3 space-y-2.5 flex-1"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          {scenario.messages.map((m, i) => (
            <Bubble key={i} msg={m} />
          ))}
        </div>

        <div
          className="mt-4 inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full text-[11.5px] font-semibold"
          style={{
            background: scenario.outcomeIcon === "check" ? "#22C55E14" : "#EF444414",
            color: scenario.outcomeIcon === "check" ? "#16A34A" : "#DC2626",
          }}
        >
          {scenario.outcomeIcon === "check" ? (
            <Check className="w-3 h-3" strokeWidth={3} />
          ) : (
            <Clock className="w-3 h-3" strokeWidth={2.5} />
          )}
          {scenario.outcome}
        </div>
      </div>
    </article>
  )
}

function Bubble({ msg }: { msg: Message }) {
  const isAi = msg.role === "ai"
  return (
    <div className={`flex items-end gap-1.5 ${isAi ? "" : "flex-row-reverse"}`}>
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[8px] font-bold`}
        style={{
          background: isAi ? "#14B8A6" : "#1677FF",
          color: "#fff",
        }}
      >
        {isAi ? <Bot className="w-3 h-3" strokeWidth={2.5} /> : "U"}
      </div>
      <div
        className={`max-w-[86%] rounded-[12px] px-3 py-2 text-[12.5px] leading-[1.4]`}
        style={{
          background: isAi ? "var(--surface)" : "#1677FF",
          color: isAi ? "var(--ink)" : "#fff",
          border: isAi ? "1px solid var(--border-color)" : "none",
          borderBottomLeftRadius: isAi ? "4px" : "12px",
          borderBottomRightRadius: isAi ? "12px" : "4px",
        }}
      >
        <div className="flex items-start gap-1">
          {isAi && (
            <Sparkles className="w-2.5 h-2.5 shrink-0 mt-[3px]" style={{ color: "#14B8A6" }} strokeWidth={2.5} />
          )}
          <span>{msg.text}</span>
        </div>
        {msg.time && (
          <div
            className="text-[9px] mt-1 font-medium"
            style={{ color: isAi ? "var(--muted)" : "rgba(255,255,255,0.7)" }}
          >
            {msg.time}
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { Pill } from "@/components/ui/pill"
import { PrimaryButton } from "@/components/ui/primary-button"
import { SecondaryButton } from "@/components/ui/secondary-button"
import { Star, Sparkles, Bot, Zap } from "lucide-react"

const trustItems = [
  { label: "Trained on your FAQs" },
  { label: "Books jobs autonomously" },
  { label: "Handoff to humans" },
]

export function AIAgentsHero() {
  return (
    <section aria-labelledby="ai-agents-hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-12%] left-[-10%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, rgba(20,184,166,0.05) 40%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[520px] h-[520px] sm:w-[820px] sm:h-[820px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(22,119,255,0.16) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[25%] right-[5%] w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(116,211,255,0.14) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div className="max-w-[620px]" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <nav aria-label="Breadcrumb" className="mb-6 text-[13px] font-medium" style={{ color: "var(--muted)" }}>
              <ol className="flex items-center gap-1.5">
                <li><a href="/" className="hover:text-[var(--accent)]">Home</a></li>
                <li aria-hidden>/</li>
                <li><a href="/solutions" className="hover:text-[var(--accent)]">Solutions</a></li>
                <li aria-hidden>/</li>
                <li aria-current="page" style={{ color: "var(--ink)" }}>AI Customer Service</li>
              </ol>
            </nav>

            <Pill>
              <Sparkles className="w-3.5 h-3.5" />
              AI Chat & Voice Agents
            </Pill>

            <h1 id="ai-agents-hero-heading" className="mt-6 text-[40px] xs:text-[44px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.025em] sm:tracking-[-0.03em] sm:text-balance" style={{ color: "var(--ink)" }}>
              Your 24/7 AI receptionist —{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">always</span> on.
              </span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.6] max-w-[540px]" style={{ color: "var(--muted)" }}>
              A trained AI agent that answers chats, phone calls, SMS, and DMs
              — qualifies leads, books appointments, collects deposits, and
              hands off to humans when it matters. Built specifically for
              service businesses.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton size="lg" asLink href="#contact">
                Book a free AI-agent demo
              </PrimaryButton>
              <SecondaryButton asLink href="#ai-agents-features">
                See the features
              </SecondaryButton>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustItems.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--muted)" }}>
                  <Star className="w-4 h-4" style={{ color: "#14B8A6" }} fill="currentColor" strokeWidth={0} />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}>
            <ChatTranscriptMockup />

            <div
              className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-full bg-white border text-[12.5px] font-semibold shadow-[0_8px_24px_rgba(17,35,68,0.08)]"
              style={{ borderColor: "var(--border-color)", color: "var(--ink)" }}
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full opacity-60" style={{ background: "#14B8A6", animation: "subtlePulse 2s ease-in-out infinite" }} />
                <span className="relative w-2 h-2 rounded-full" style={{ background: "#14B8A6" }} />
              </span>
              AI live
            </div>

            <div
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-semibold text-white shadow-[0_8px_24px_rgba(20,184,166,0.32)]"
              style={{ background: "#14B8A6" }}
            >
              <Zap className="w-3.5 h-3.5" strokeWidth={2.75} fill="currentColor" />
              84% handled solo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type Msg = {
  role: "user" | "ai"
  text: string
  time: string
  typing?: boolean
}

const transcript: Msg[] = [
  { role: "user", text: "Do you guys do emergency calls?", time: "11:42 PM" },
  {
    role: "ai",
    text: "Yes — we have a tech available within 2 hours for urgent plumbing calls. Want me to pull up slots?",
    time: "11:42 PM",
  },
  { role: "user", text: "Yes please", time: "11:43 PM" },
  {
    role: "ai",
    text: "I have 12:30 AM tonight or 8:00 AM tomorrow. The 12:30 AM call is a $150 after-hours fee.",
    time: "11:43 PM",
  },
  { role: "user", text: "12:30 works", time: "11:44 PM" },
  { role: "ai", text: "Locked in. I just texted you the confirmation + tech's ETA.", time: "11:44 PM" },
]

export function ChatTranscriptMockup() {
  return (
    <div
      className="card-surface relative overflow-hidden p-4 sm:p-5"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 10%, rgba(20,184,166,0.10) 0%, transparent 70%)" }}
      />
      <div className="relative">
        {/* Chat header */}
        <div
          className="flex items-center justify-between px-1 pb-3 border-b"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(180deg, #2DD4BF 0%, #14B8A6 100%)", color: "#fff" }}
            >
              <Bot className="w-4 h-4" strokeWidth={2.25} />
            </div>
            <div>
              <div className="text-[13px] font-bold leading-tight" style={{ color: "var(--ink)" }}>
                Max Market Pros · AI
              </div>
              <div className="text-[11px] font-medium flex items-center gap-1" style={{ color: "#14B8A6" }}>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#14B8A6", animation: "subtlePulse 2s ease-in-out infinite" }}
                />
                Online · replies instantly
              </div>
            </div>
          </div>
          <div className="text-[11px] font-semibold" style={{ color: "var(--muted)" }}>
            Website chat
          </div>
        </div>

        {/* Messages */}
        <div className="mt-3 space-y-2.5 max-h-[320px] overflow-hidden">
          {transcript.map((m, i) => <Bubble key={i} msg={m} />)}

          {/* Typing indicator */}
          <div className="flex items-end gap-1.5">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(180deg, #2DD4BF 0%, #14B8A6 100%)", color: "#fff" }}
            >
              <Bot className="w-3 h-3" strokeWidth={2.5} />
            </div>
            <div
              className="rounded-[14px] px-3 py-2.5 flex items-center gap-1"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                borderBottomLeftRadius: "4px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#14B8A6",
                    animation: `subtlePulse 1.4s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Input */}
        <div
          className="mt-3 flex items-center gap-2 px-3 py-2 rounded-full border"
          style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}
        >
          <span className="text-[12.5px]" style={{ color: "var(--muted)" }}>
            Type a message...
          </span>
          <div className="ml-auto flex items-center gap-1 text-[10px] font-semibold" style={{ color: "var(--muted)" }}>
            <Sparkles className="w-3 h-3" style={{ color: "#14B8A6" }} strokeWidth={2.5} />
            AI-powered
          </div>
        </div>
      </div>
    </div>
  )
}

function Bubble({ msg }: { msg: Msg }) {
  const isAi = msg.role === "ai"
  return (
    <div className={`flex items-end gap-1.5 ${isAi ? "" : "flex-row-reverse"}`}>
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[9px] font-bold"
        style={{
          background: isAi ? "linear-gradient(180deg, #2DD4BF 0%, #14B8A6 100%)" : "#1677FF",
          color: "#fff",
        }}
      >
        {isAi ? <Bot className="w-3 h-3" strokeWidth={2.5} /> : "U"}
      </div>
      <div
        className="max-w-[80%] rounded-[14px] px-3 py-2 text-[13px] leading-[1.4]"
        style={{
          background: isAi ? "var(--surface)" : "#1677FF",
          color: isAi ? "var(--ink)" : "#fff",
          border: isAi ? "1px solid var(--border-color)" : "none",
          borderBottomLeftRadius: isAi ? "4px" : "14px",
          borderBottomRightRadius: isAi ? "14px" : "4px",
          boxShadow: isAi ? "0 1px 2px rgba(17,35,68,0.04)" : "0 4px 12px rgba(22,119,255,0.25)",
        }}
      >
        {msg.text}
        <div
          className="text-[9.5px] mt-1 font-medium"
          style={{ color: isAi ? "var(--muted)" : "rgba(255,255,255,0.75)" }}
        >
          {msg.time}
        </div>
      </div>
    </div>
  )
}

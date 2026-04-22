import { SectionHeader } from "@/components/ui/section-header"
import { PrimaryButton } from "@/components/ui/primary-button"
import { icons8Url } from "@/lib/icons8"
import {
  ArrowRight,
  MessageCircle,
  PhoneCall,
  CalendarCheck,
  Languages,
  UserRound,
  BookOpen,
  Check,
} from "lucide-react"

type Feature = {
  iconId: string
  pill: string
  pillColor: string
  auraColor: string
  LucideIcon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  description: string
  deliverables: string[]
  flagship?: boolean
}

const features: Feature[] = [
  {
    iconId: "L3uh0mNuxBXw",
    pill: "Flagship · Always-On",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.11)",
    LucideIcon: MessageCircle,
    title: "AI Chat Assistant",
    description:
      "A trained chat agent on your website, SMS, Facebook Messenger, and Instagram DMs that answers service questions, qualifies leads, and books jobs — 24/7, without a single missed reply.",
    deliverables: [
      "Trained on your FAQs",
      "Multi-channel inbox",
      "Lead qualification flow",
      "Books directly to calendar",
      "Hands off to humans smartly",
    ],
    flagship: true,
  },
  {
    iconId: "12379",
    pill: "Voice",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.09)",
    LucideIcon: PhoneCall,
    title: "AI Voice Receptionist",
    description:
      "Answer every inbound call with a natural-sounding AI that triages, books, and escalates — so no call ever rolls to voicemail again.",
    deliverables: [
      "24/7 call answering",
      "Natural voice responses",
      "Smart call routing",
      "Full call transcription",
    ],
  },
  {
    iconId: "15685",
    pill: "Book",
    pillColor: "#22C55E",
    auraColor: "rgba(34,197,94,0.10)",
    LucideIcon: CalendarCheck,
    title: "Appointment Booking AI",
    description:
      "The agent reads live availability from your calendar and walks customers through booking — deposit and all — inside a single conversation.",
    deliverables: [
      "Live calendar sync",
      "Qualifies before booking",
      "Collects deposits",
      "Sends confirmation texts",
    ],
  },
  {
    iconId: "31016",
    pill: "Multilingual",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.09)",
    LucideIcon: Languages,
    title: "Multi-language Support",
    description:
      "Serve Spanish-speaking, bilingual, and ESL customers with native-sounding conversations in 50+ languages — all from one trained agent.",
    deliverables: [
      "50+ languages",
      "Auto-detect caller language",
      "Culturally tuned phrasing",
      "Instant switching mid-chat",
    ],
  },
  {
    iconId: "13548",
    pill: "Escalate",
    pillColor: "#8B5CF6",
    auraColor: "rgba(139,92,246,0.09)",
    LucideIcon: UserRound,
    title: "Seamless Human Handoff",
    description:
      "The moment a customer asks something sensitive, emotional, or outside scope, the AI pings a human rep with the full conversation history attached.",
    deliverables: [
      "Custom escalation triggers",
      "Live transcript handoff",
      "After-hours fallback rules",
      "Rep-specific routing",
    ],
  },
  {
    iconId: "114322",
    pill: "Knowledge",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.10)",
    LucideIcon: BookOpen,
    title: "Trained On Your Business",
    description:
      "Locked to your FAQs, service pages, pricing, and policies — no hallucinated answers, no generic chatbot fluff. The agent knows exactly what you offer.",
    deliverables: [
      "Custom knowledge base",
      "No hallucination guard",
      "Continuous learning",
      "Policy & pricing rules",
    ],
  },
]

export function AIAgentsBento() {
  return (
    <section aria-labelledby="ai-agents-features-heading" className="relative" style={{ background: "var(--surface)" }}>
      <div className="section-container section-y">
        <SectionHeader
          pill="AI Agent Features"
          heading={
            <span id="ai-agents-features-heading">
              Every channel. One{" "}
              <span className="accent-underline">
                trained <span className="whitespace-nowrap">brain.</span>
              </span>
            </span>
          }
          paragraph="A complete AI customer service stack — chat, voice, bookings, and escalation — tuned specifically for your service business."
        />

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ animation: "fadeInUp 0.7s ease-out both" }}>
          {features.map((f) => <FeatureCard key={f.title} feature={f} />)}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <PrimaryButton size="lg" asLink href="#contact">
            Book a free AI-agent demo
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { LucideIcon, flagship } = feature
  const spanClass = flagship ? "md:col-span-2 lg:col-span-2" : ""
  return (
    <article className={`${spanClass} card-surface card-surface-hover relative overflow-hidden p-6 sm:p-7 flex flex-col`}>
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]" style={{ background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${feature.auraColor} 0%, transparent 70%)` }} />
      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start gap-3">
          <img src={icons8Url(feature.iconId, flagship ? 192 : 128)} alt="" width={flagship ? 68 : 52} height={flagship ? 68 : 52} loading="lazy" decoding="async" className={`${flagship ? "w-[68px] h-[68px]" : "w-[52px] h-[52px]"} object-contain shrink-0`} />
          <span className="self-center inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full" style={{ background: `${feature.pillColor}1A`, color: feature.pillColor }}>
            <LucideIcon className="w-3 h-3" strokeWidth={2.5} />
            {feature.pill}
          </span>
        </div>
        <h3 className={`mt-4 ${flagship ? "text-[24px] sm:text-[28px]" : "text-[20px] sm:text-[22px]"} font-bold leading-[1.2] tracking-[-0.01em]`} style={{ color: "var(--ink)" }}>{feature.title}</h3>
        <p className={`mt-2 ${flagship ? "text-[16px] sm:text-[17px]" : "text-[15px]"} leading-[1.55]`} style={{ color: "var(--muted)" }}>{feature.description}</p>
        <ul className={`mt-5 space-y-2 ${flagship ? "sm:grid sm:grid-cols-2 sm:gap-x-4 sm:space-y-0 sm:gap-y-2.5" : ""}`}>
          {feature.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2.5 text-[14px]" style={{ color: "var(--ink)" }}>
              <span className="mt-[3px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--accent-bg)", color: "var(--accent)" }}>
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              <span className="leading-[1.45]">{d}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group/link mt-6 pt-5 flex items-center gap-2 text-[14.5px] font-semibold border-t hover:opacity-80 transition-opacity"
          style={{ borderColor: "var(--border-color)", color: "var(--accent)" }}
        >
          <span>See it in action</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" strokeWidth={2.5} />
        </a>
      </div>
    </article>
  )
}

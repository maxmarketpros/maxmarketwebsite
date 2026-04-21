"use client"

import { Check } from "lucide-react"
import { SectionHeader } from "./ui/section-header"
import { icons8Url } from "@/lib/icons8"

type SubCard = {
  iconId: string
  title: string
  description: string
}

type PlatformCard = {
  pill: string
  pillColor: string
  auraColor: string
  iconId: string
  title: string
  description: string
  bullets?: string[]
  chips?: string[]
  subCards?: SubCard[]
  chart?: boolean
  /** Tailwind col-span classes for md and lg breakpoints */
  spanMd: string
  spanLg: string
}

const cards: PlatformCard[] = [
  {
    pill: "Local Search",
    pillColor: "#F59E0B",
    auraColor: "rgba(245,158,11,0.09)",
    iconId: "tXg90mCMJpUq",
    title: "Dominate the Map Pack",
    description:
      "Claim and optimize every relevant listing to own the top 3 positions in Google Maps for your key service areas.",
    chips: ["Profile optimization", "Local citations", "Geo‑targeted keywords"],
    subCards: [
      {
        iconId: "70714",
        title: "Top 3 visibility",
        description: "Get found where it matters most.",
      },
      {
        iconId: "11901",
        title: "Local intent traffic",
        description: "High‑intent leads ready to buy.",
      },
    ],
    spanMd: "md:col-span-2",
    spanLg: "lg:col-span-4",
  },
  {
    pill: "Speed",
    pillColor: "#EF4444",
    auraColor: "rgba(239,68,68,0.08)",
    iconId: "12995",
    title: "Built to Convert",
    description:
      "Every page engineered to turn visitors into booked jobs with speed‑optimized, mobile‑first design.",
    bullets: [
      "Sub‑2s load times",
      "Click‑to‑call CTAs",
      "Trust signals",
      "Mobile‑first design",
    ],
    spanMd: "md:col-span-1",
    spanLg: "lg:col-span-2",
  },
  {
    pill: "Reviews",
    pillColor: "#EAB308",
    auraColor: "rgba(234,179,8,0.09)",
    iconId: "19417",
    title: "Automated Reviews",
    description:
      "Automatically request and collect 5‑star reviews after every job to build unstoppable social proof and higher rankings.",
    bullets: [
      "SMS review requests",
      "Review monitoring",
      "Auto‑responses",
      "Multi‑platform collection",
    ],
    spanMd: "md:col-span-1",
    spanLg: "lg:col-span-2",
  },
  {
    pill: "Lead Operations",
    pillColor: "#0EA5E9",
    auraColor: "rgba(14,165,233,0.08)",
    iconId: "SROvvC91x7DL",
    title: "Your Growth Engine CRM",
    description:
      "Track every lead from first click to booked job. See exactly what's working and what's driving revenue in real‑time.",
    chips: [
      "Pipeline tracking",
      "Revenue attribution",
      "Monthly reports",
      "Lead visibility",
    ],
    chart: true,
    subCards: [
      {
        iconId: "13013",
        title: "More leads. More jobs.",
        description: "Data‑driven growth you can see.",
      },
    ],
    spanMd: "md:col-span-2",
    spanLg: "lg:col-span-4",
  },
  {
    pill: "Inbox",
    pillColor: "#1677FF",
    auraColor: "rgba(22,119,255,0.08)",
    iconId: "108780",
    title: "Unified Inbox",
    description:
      "Every SMS, email, form submission, and chat in one place. Never miss a conversation or let a lead slip through.",
    chips: ["Multi‑channel messages", "Team assignments", "Read receipts"],
    spanMd: "md:col-span-1",
    spanLg: "lg:col-span-3",
  },
  {
    pill: "Callback",
    pillColor: "#14B8A6",
    auraColor: "rgba(20,184,166,0.08)",
    iconId: "13512",
    title: "Missed Call Recovery",
    description:
      "Instantly text back every missed call with a personalized message so potential customers never call a competitor instead.",
    chips: ["Instant text‑back", "Custom templates", "Call tracking"],
    spanMd: "md:col-span-1",
    spanLg: "lg:col-span-3",
  },
]

export function PlatformSection() {
  return (
    <section className="relative">
      <div
        className="section-container"
        style={{
          paddingTop: "var(--section-py)",
          paddingBottom: "var(--section-py)",
        }}
      >
        <SectionHeader
          pill="The Platform"
          heading={
            <>
              An unfair <span className="accent-underline">advantage</span>
              <br />
              for your local business.
            </>
          }
          paragraph="Everything you need to dominate local search and turn web traffic into booked jobs — all completely managed for you."
        />

        <div
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {cards.map((card) => (
            <BentoCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BentoCard({ card }: { card: PlatformCard }) {
  return (
    <div
      className={`${card.spanMd} ${card.spanLg} card-surface card-surface-hover relative overflow-hidden p-6`}
    >
      {/* Aura — from top-left corner behind icon */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${card.auraColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative">
        {/* Icon + pill row */}
        <div className="flex items-start gap-3">
          <img
            src={icons8Url(card.iconId, 128)}
            alt=""
            width={52}
            height={52}
            loading="lazy"
            className="w-[52px] h-[52px] object-contain shrink-0"
          />
          <span
            className="self-center inline-block text-[11.5px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
            style={{
              background: `${card.pillColor}1A`,
              color: card.pillColor,
            }}
          >
            {card.pill}
          </span>
        </div>

        {/* Title */}
        <h3
          className="mt-4 text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.01em]"
          style={{ color: "var(--ink)" }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className="mt-2 text-[15px] leading-[1.55]"
          style={{ color: "var(--muted)" }}
        >
          {card.description}
        </p>

        {/* Bullets */}
        {card.bullets && (
          <ul className="mt-4 space-y-2">
            {card.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2.5 text-[14.5px]"
                style={{ color: "var(--ink)" }}
              >
                <span
                  className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* Chips */}
        {card.chips && (
          <div className="mt-4 flex flex-wrap gap-2">
            {card.chips.map((c) => (
              <span
                key={c}
                className="inline-block px-3 py-1 text-[12.5px] font-medium rounded-full"
                style={{
                  background: "var(--surface)",
                  color: "var(--muted)",
                  border: "1px solid var(--border-color)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Chart visualization (CRM only) */}
        {card.chart && (
          <div
            className="mt-4 rounded-[var(--radius-sm)] px-3.5 py-3 bg-white border relative overflow-hidden"
            style={{ borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center gap-1 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB]" />
            </div>
            <svg
              viewBox="0 0 300 50"
              className="w-full h-[48px]"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1677FF" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#1677FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,38 C30,34 55,36 80,30 C110,22 140,26 170,16 C200,4 230,10 260,12 C280,13 295,11 300,10 L300,50 L0,50 Z"
                fill="url(#chartFill)"
              />
              <path
                d="M0,38 C30,34 55,36 80,30 C110,22 140,26 170,16 C200,4 230,10 260,12 C280,13 295,11 300,10"
                fill="none"
                stroke="#1677FF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}

        {/* Sub-cards */}
        {card.subCards && card.subCards.length > 0 && (
          <div
            className={`mt-4 grid gap-2.5 ${
              card.subCards.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {card.subCards.map((s) => (
              <div
                key={s.title}
                className="rounded-[var(--radius-sm)] p-3 bg-white border flex items-center gap-3"
                style={{ borderColor: "var(--border-color)" }}
              >
                <div
                  className="w-9 h-9 rounded-[var(--radius-xs)] flex items-center justify-center shrink-0"
                  style={{ background: "var(--accent-bg)" }}
                >
                  <img
                    src={icons8Url(s.iconId, 64)}
                    alt=""
                    width={22}
                    height={22}
                    loading="lazy"
                    className="w-[22px] h-[22px] object-contain"
                  />
                </div>
                <div className="min-w-0 leading-tight">
                  <div
                    className="text-[13.5px] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.title}
                  </div>
                  <div
                    className="text-[12.5px] mt-1 leading-[1.4]"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

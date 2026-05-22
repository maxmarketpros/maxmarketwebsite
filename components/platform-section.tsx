"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
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
  href: string
  ctaLabel: string
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
    href: "/services/seo/local",
    ctaLabel: "Explore Local SEO",
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
    href: "/services/web-design/custom-coded",
    ctaLabel: "Explore Custom Sites",
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
    href: "/services/social-media/review-generation",
    ctaLabel: "Explore Review Generation",
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
    href: "/solutions/analytics",
    ctaLabel: "Explore Analytics & Attribution",
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
    href: "/solutions/lead-generation",
    ctaLabel: "Explore Lead Generation",
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
    href: "/solutions/ai-agents",
    ctaLabel: "Explore AI Agents",
    spanMd: "md:col-span-1",
    spanLg: "lg:col-span-3",
  },
]

export function PlatformSection() {
  return (
    <section className="relative">
      <div className="section-container section-y">
        <SectionHeader
          pill="The Platform"
          heading={
            <>
              An unfair <span className="accent-underline">advantage</span>
              <br />
              for your{" "}
              <span className="whitespace-nowrap">local business.</span>
            </>
          }
          paragraph="Everything you need to dominate local search and turn web traffic into booked jobs, all completely managed for you."
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
      className={`${card.spanMd} ${card.spanLg} card-surface card-surface-hover group relative overflow-hidden p-6 flex flex-col`}
    >
      {/* Aura — from top-left corner behind icon */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-[70%] h-[55%]"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 25% 25%, ${card.auraColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex flex-col flex-1">
        {/* Icon + pill row */}
        <div className="flex items-start gap-3">
          <img
            src={icons8Url(card.iconId, 128)}
            alt=""
            width={52}
            height={52}
            loading="lazy"
            decoding="async"
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
            className="mt-4 rounded-[var(--radius-sm)] px-3.5 py-2.5 bg-white border relative overflow-hidden"
            style={{ borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "var(--muted)" }}
              >
                Pipeline value · 90 days
              </span>
              <span
                className="inline-flex items-center gap-1 text-[10.5px] font-bold px-1.5 py-0.5 rounded-full tabular-nums"
                style={{ background: "rgba(34,197,94,0.12)", color: "#16A34A" }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
                  <path
                    d="M4 1.5L7 5H1L4 1.5Z"
                    fill="currentColor"
                  />
                </svg>
                +47% MoM
              </span>
            </div>
            <div className="relative">
              <svg
                viewBox="0 0 300 40"
                className="w-full h-[38px] block"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1677FF" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#1677FF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#1677FF" />
                    <stop offset="100%" stopColor="#74D3FF" />
                  </linearGradient>
                </defs>
                {/* Dashed baseline */}
                <line
                  x1="0"
                  y1="34"
                  x2="300"
                  y2="34"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Area fill */}
                <path
                  d="M0,30 C30,27 55,28 80,23 C110,18 140,20 170,12 C200,3 230,7 260,8 C280,9 295,7 300,6 L300,40 L0,40 Z"
                  fill="url(#chartFill)"
                />
                {/* Line stroke */}
                <path
                  d="M0,30 C30,27 55,28 80,23 C110,18 140,20 170,12 C200,3 230,7 260,8 C280,9 295,7 300,6"
                  fill="none"
                  stroke="url(#chartStroke)"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Mid data dots */}
                {[
                  { x: 80, y: 23 },
                  { x: 170, y: 12 },
                ].map((p) => (
                  <circle
                    key={p.x}
                    cx={p.x}
                    cy={p.y}
                    r="2"
                    fill="#fff"
                    stroke="#1677FF"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
              {/* End-cap dot with halo — HTML overlay so it stays circular */}
              <span
                aria-hidden
                className="absolute"
                style={{
                  right: 0,
                  top: "calc((6 / 40) * 100% - 5px)",
                  width: 10,
                  height: 10,
                }}
              >
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ background: "#74D3FF", opacity: 0.32 }}
                />
                <span
                  className="absolute rounded-full"
                  style={{
                    inset: 2,
                    background: "#1677FF",
                    boxShadow: "0 0 0 1.5px #fff",
                  }}
                />
              </span>
            </div>
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
                    decoding="async"
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

        {/* CTA — link out to the matching service / solution page */}
        <Link
          href={card.href}
          className="mt-auto inline-flex items-center justify-between gap-2 text-[13.5px] font-semibold"
          style={{
            color: card.pillColor,
            marginTop: "auto",
            paddingTop: 20,
            marginInline: -2,
          }}
        >
          <span className="inline-flex items-center gap-1.5">
            {card.ctaLabel}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </span>
        </Link>
      </div>
    </div>
  )
}

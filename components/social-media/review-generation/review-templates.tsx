"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import { SecondaryButton } from "@/components/ui/secondary-button"
import {
  Wrench,
  Stethoscope,
  UtensilsCrossed,
  Car,
  HardHat,
  Store,
  MessageSquare,
  Mail,
  Clock,
  RefreshCw,
  Star,
} from "lucide-react"

type IndustryKey =
  | "hvac"
  | "medical"
  | "restaurant"
  | "auto"
  | "contractor"
  | "local"

type Industry = {
  key: IndustryKey
  label: string
  Icon: typeof Wrench
  color: string
  business: string
  domain: string
  customer: string
  technician: string
  initial: string
  reviewLink: string
  followup: string
  thanks: string
  emailSubject: string
  emailPreview: string
  signOff: string
  stats: { replyRate: string; conversion: string; timeToPost: string }
}

const industries: Industry[] = [
  {
    key: "hvac",
    label: "HVAC",
    Icon: Wrench,
    color: "#1677FF",
    business: "Acme HVAC",
    domain: "acmehvac.com/r",
    customer: "Sarah",
    technician: "Marcus",
    initial:
      "Hey Sarah — Marcus here from Acme HVAC. Hope your AC is running cooler! Mind sharing how today went? It takes 30 seconds: ",
    reviewLink: "acmehvac.com/r",
    followup:
      "Hi Sarah — quick one: did the AC kick back on without issue last night? If anything still feels off, just reply here and I'll come back out. — Marcus",
    thanks:
      "Sarah, that 5★ review just made my whole week 🙌 Thanks for trusting us — Marcus",
    emailSubject: "How did Marcus do today, Sarah?",
    emailPreview:
      "Quick favor — would you mind sharing a quick review of today's AC tune-up? Even one line helps another homeowner pick the right HVAC team next summer.",
    signOff: "Marcus",
    stats: { replyRate: "47%", conversion: "33%", timeToPost: "3h 41m" },
  },
  {
    key: "medical",
    label: "Medical",
    Icon: Stethoscope,
    color: "#0EA5E9",
    business: "Coastal Family Medical",
    domain: "coastalfamily.com/r",
    customer: "James",
    technician: "Dr. Patel",
    initial:
      "Hi James — thanks for visiting Coastal Family Medical today. If Dr. Patel made you feel heard, would you mind sharing a quick review? Helps other patients like you: ",
    reviewLink: "coastalfamily.com/r",
    followup:
      "Hi James — checking in. If you have a moment, your feedback on today's visit really helps the practice. If anything wasn't a 5★ experience, please reply here first. — The Coastal team",
    thanks:
      "Thank you, James — we shared your kind words with Dr. Patel and the front-desk team. See you at your next appointment 🙏",
    emailSubject: "A quick favor about today's visit",
    emailPreview:
      "Patient reviews help families in our area find a primary-care doctor they can trust. If today went well, we'd be grateful for one line.",
    signOff: "The Coastal team",
    stats: { replyRate: "39%", conversion: "29%", timeToPost: "5h 22m" },
  },
  {
    key: "restaurant",
    label: "Restaurants",
    Icon: UtensilsCrossed,
    color: "#EC4899",
    business: "Third Coast Kitchen",
    domain: "thirdcoast.com/r",
    customer: "Mia",
    technician: "Chef Daniel",
    initial:
      "Hi Mia — thanks for joining us at Third Coast tonight! Chef Daniel hopes you loved the tasting menu. A quick review goes a long way: ",
    reviewLink: "thirdcoast.com/r",
    followup:
      "Mia — hope you got home okay! If anything felt off about your meal, message me directly and I'll make it right next visit. — Daniel, Chef/Owner",
    thanks:
      "Mia — five stars and a smile, that's what we work for 🙌 Next time the bottle of natural wine is on me. — Daniel",
    emailSubject: "Hope you loved the tasting menu, Mia",
    emailPreview:
      "If tonight hit the mark, would you mind dropping a line on Google or Yelp? Independent restaurants live and die by reviews — and ours read every one.",
    signOff: "Chef Daniel",
    stats: { replyRate: "44%", conversion: "36%", timeToPost: "2h 18m" },
  },
  {
    key: "auto",
    label: "Auto",
    Icon: Car,
    color: "#F59E0B",
    business: "Westside Auto",
    domain: "westsideauto.com/r",
    customer: "Tony",
    technician: "Rico",
    initial:
      "Hey Tony — Rico from Westside Auto. Brakes feeling smooth on the drive home? Quick review helps the shop a ton: ",
    reviewLink: "westsideauto.com/r",
    followup:
      "Tony — checking in. If anything feels off with the new brakes, swing by this week and I'll re-bleed them at no charge. — Rico",
    thanks:
      "Appreciate the 5★, Tony! 🚗 Tell the next person who needs brakes about us — and tell them to ask for me. — Rico",
    emailSubject: "How are the new brakes feeling, Tony?",
    emailPreview:
      "If the service hit the mark, a quick line on Google or DealerRater would mean a lot. Independent shops compete with dealer chains — reviews are how we punch up.",
    signOff: "Rico",
    stats: { replyRate: "41%", conversion: "31%", timeToPost: "4h 02m" },
  },
  {
    key: "contractor",
    label: "Contractors",
    Icon: HardHat,
    color: "#22C55E",
    business: "Coastal Builders",
    domain: "coastalbuilders.com/r",
    customer: "Karen",
    technician: "the crew",
    initial:
      "Hi Karen — Coastal Builders here. Now that the kitchen is fully wrapped, we'd love your honest take. Two minutes here: ",
    reviewLink: "coastalbuilders.com/r",
    followup:
      "Karen — hope you're settling into the new kitchen! If any punch-list items popped up, just reply — we'll come handle them. Otherwise, would love your review when you have a sec. — The Coastal crew",
    thanks:
      "Karen — that review will help another homeowner take the leap on their reno. Thank you 🙏 Send us a photo of the first dinner party!",
    emailSubject: "Your kitchen reno · would love your honest review",
    emailPreview:
      "Big remodels are stressful — choosing the right builder is the biggest piece. If we earned your trust, your review on Google + Angi helps the next homeowner choose well too.",
    signOff: "The Coastal crew",
    stats: { replyRate: "48%", conversion: "38%", timeToPost: "6h 14m" },
  },
  {
    key: "local",
    label: "Local services",
    Icon: Store,
    color: "#8B5CF6",
    business: "Bayside Cleaners",
    domain: "baysidecleaners.com/r",
    customer: "Aisha",
    technician: "Maria",
    initial:
      "Hi Aisha — Maria from Bayside. Hope the place is sparkling! A quick review takes 20 seconds and helps other neighbors find us: ",
    reviewLink: "baysidecleaners.com/r",
    followup:
      "Aisha — checking in! If anything was missed, just message and we'll send someone back at no charge. Otherwise we'd love your review. — Maria",
    thanks:
      "Aisha — thank you so much! 🌟 We'll keep the same team on your home for next month. — Maria",
    emailSubject: "Hope the deep clean hit the spot, Aisha",
    emailPreview:
      "Local service businesses live or die by reviews from neighbors like you. If we earned 5★, would you mind sharing on Google or Nextdoor? It takes a minute.",
    signOff: "Maria",
    stats: { replyRate: "43%", conversion: "32%", timeToPost: "3h 09m" },
  },
]

export function ReviewTemplates() {
  const [active, setActive] = useState<IndustryKey>("hvac")
  const industry = industries.find((i) => i.key === active) ?? industries[0]

  return (
    <section
      id="review-templates"
      aria-labelledby="review-templates-heading"
      className="relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] left-[-6%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,119,255,0.08) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[10%] right-[-6%] w-[460px] h-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="section-container section-y relative z-10">
        <SectionHeader
          pill="Request Templates"
          heading={
            <span id="review-templates-heading">
              Words tuned for your industry — not a generic{" "}
              <span className="whitespace-nowrap">
                <span className="accent-underline">&ldquo;leave us a review&rdquo;</span>
              </span>{" "}
              nag.
            </span>
          }
          paragraph="Every industry needs different copy, different timing, and different platforms. Our templates are A/B tested across 1,400+ jobs/month so the message that hits a customer's phone is the one most likely to actually earn a reply."
        />

        {/* Industry switcher */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-2"
          style={{ animation: "fadeInUp 0.7s ease-out both" }}
        >
          {industries.map((ind) => {
            const isActive = ind.key === active
            return (
              <button
                key={ind.key}
                type="button"
                onClick={() => setActive(ind.key)}
                aria-pressed={isActive}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all"
                style={{
                  background: isActive ? ind.color : "var(--surface)",
                  border: isActive
                    ? `1px solid ${ind.color}`
                    : "1px solid var(--border-color)",
                  color: isActive ? "#fff" : "var(--ink)",
                  boxShadow: isActive
                    ? `0 4px 14px ${ind.color}40`
                    : "0 1px 2px rgba(17,35,68,0.04)",
                }}
              >
                <ind.Icon
                  className="w-3.5 h-3.5"
                  strokeWidth={2.5}
                  style={{ color: isActive ? "#fff" : ind.color }}
                />
                {ind.label}
              </button>
            )
          })}
        </div>

        {/* SMS + Email mockups */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* SMS card */}
          <div
            className="card-surface relative overflow-hidden"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{
                background: "linear-gradient(180deg, #0B132B 0%, #111B3A 100%)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2">
                <MessageSquare
                  className="w-4 h-4"
                  strokeWidth={2.5}
                  style={{ color: industry.color }}
                />
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "#fff" }}
                >
                  SMS · 3-message sequence
                </span>
              </div>
              <span
                className="text-[10.5px] font-mono"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {industry.business}
              </span>
            </div>

            <div className="px-4 sm:px-5 py-5 space-y-3">
              <TimestampLabel label="60 seconds after job complete" />
              <BubbleOut business={industry.business}>
                {industry.initial}
                <span style={{ color: industry.color, fontWeight: 600 }}>
                  {industry.reviewLink}
                </span>
              </BubbleOut>

              <TimestampLabel label="Day 3 · gentle nudge" />
              <BubbleOut business={industry.business}>
                {industry.followup}
              </BubbleOut>

              <TimestampLabel label="Auto-sent when 5★ posts" />
              <BubbleIn color={industry.color}>{industry.thanks}</BubbleIn>
            </div>

            <div
              className="px-5 py-3 grid grid-cols-3 gap-2"
              style={{
                background: "var(--bg)",
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <Stat
                Icon={MessageSquare}
                label="Reply rate"
                value={industry.stats.replyRate}
                color={industry.color}
              />
              <Stat
                Icon={Star}
                label="→ public review"
                value={industry.stats.conversion}
                color={industry.color}
              />
              <Stat
                Icon={Clock}
                label="Avg time to post"
                value={industry.stats.timeToPost}
                color={industry.color}
              />
            </div>
          </div>

          {/* Email card */}
          <div
            className="card-surface relative overflow-hidden"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{
                background: "linear-gradient(180deg, #fff 0%, #FAFBFD 100%)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <div className="flex items-center gap-2">
                <Mail
                  className="w-4 h-4"
                  strokeWidth={2.5}
                  style={{ color: industry.color }}
                />
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "var(--ink)" }}
                >
                  Email · backup channel
                </span>
              </div>
              <span
                className="text-[10.5px] font-mono"
                style={{ color: "var(--muted)" }}
              >
                Sent at hour 24
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div
                className="flex items-start gap-3 pb-4 mb-4"
                style={{ borderBottom: "1px solid var(--border-color)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: `linear-gradient(180deg, ${industry.color}DD 0%, ${industry.color} 100%)`,
                    color: "#fff",
                  }}
                >
                  <industry.Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span
                      className="text-[14px] font-bold"
                      style={{ color: "var(--ink)" }}
                    >
                      {industry.business}
                    </span>
                    <span
                      className="text-[11.5px]"
                      style={{ color: "var(--muted)" }}
                    >
                      hello@{industry.business
                        .toLowerCase()
                        .replace(/\s+/g, "")}.com
                    </span>
                  </div>
                  <div
                    className="text-[12.5px]"
                    style={{ color: "var(--muted)" }}
                  >
                    to {industry.customer}
                  </div>
                </div>
              </div>

              <div
                className="text-[18px] font-bold leading-[1.3] mb-4"
                style={{ color: "var(--ink)" }}
              >
                {industry.emailSubject}
              </div>

              <div
                className="text-[14.5px] leading-[1.6] mb-5"
                style={{ color: "var(--ink)" }}
              >
                {industry.emailPreview}
              </div>

              <div
                className="flex items-center gap-1.5 p-4 rounded-[12px] mb-4"
                style={{
                  background: `${industry.color}0D`,
                  border: `1px solid ${industry.color}40`,
                }}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className="w-9 h-9 rounded-[8px] flex items-center justify-center"
                    style={{
                      background: "#fff",
                      border: `1px solid ${industry.color}40`,
                    }}
                  >
                    <Star
                      className="w-4 h-4"
                      fill={industry.color}
                      strokeWidth={0}
                    />
                  </span>
                ))}
                <span
                  className="ml-auto text-[12px] font-bold"
                  style={{ color: industry.color }}
                >
                  Tap a star →
                </span>
              </div>

              <div
                className="text-[11.5px] leading-[1.5]"
                style={{ color: "var(--muted)" }}
              >
                — {industry.signOff}
                <br />
                Reply STOP to opt out anytime.
              </div>
            </div>
          </div>
        </div>

        {/* A/B test note + CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span
            className="inline-flex items-center gap-2 text-[13.5px] font-medium"
            style={{ color: "var(--muted)" }}
          >
            <RefreshCw
              className="w-4 h-4"
              strokeWidth={2}
              style={{ color: "var(--accent)" }}
            />
            All copy A/B tested across 1,400+ jobs/month — refreshed quarterly.
          </span>
          <SecondaryButton asLink href="#contact">
            Get the full template library
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}

function TimestampLabel({ label }: { label: string }) {
  return (
    <div
      className="text-[10px] font-bold uppercase tracking-[0.14em] text-center"
      style={{ color: "var(--muted)" }}
    >
      {label}
    </div>
  )
}

function BubbleOut({
  business,
  children,
}: {
  business: string
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-start">
      <div
        className="max-w-[88%] px-3.5 py-2.5 rounded-[18px] rounded-bl-[6px]"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border-color)",
          color: "var(--ink)",
        }}
      >
        <div
          className="text-[10px] font-bold uppercase tracking-[0.1em] mb-1"
          style={{ color: "var(--muted)" }}
        >
          {business}
        </div>
        <div className="text-[13.5px] leading-[1.5]">{children}</div>
      </div>
    </div>
  )
}

function BubbleIn({
  color,
  children,
}: {
  color: string
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-end">
      <div
        className="max-w-[88%] px-3.5 py-2.5 rounded-[18px] rounded-br-[6px]"
        style={{
          background: `linear-gradient(180deg, ${color}DD 0%, ${color} 100%)`,
          color: "#fff",
          boxShadow: `0 4px 12px ${color}40`,
        }}
      >
        <div className="flex items-center gap-0.5 mb-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-3 h-3" fill="#FCD34D" strokeWidth={0} />
          ))}
        </div>
        <div className="text-[13.5px] leading-[1.5]">{children}</div>
      </div>
    </div>
  )
}

function Stat({
  Icon,
  label,
  value,
  color,
}: {
  Icon: typeof MessageSquare
  label: string
  value: string
  color: string
}) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-center">
      <div className="flex items-center gap-1">
        <Icon className="w-3 h-3" strokeWidth={2.5} style={{ color }} />
        <span
          className="text-[9.5px] font-bold uppercase tracking-[0.08em]"
          style={{ color: "var(--muted)" }}
        >
          {label}
        </span>
      </div>
      <div
        className="text-[15px] font-extrabold"
        style={{ color: "var(--ink)" }}
      >
        {value}
      </div>
    </div>
  )
}

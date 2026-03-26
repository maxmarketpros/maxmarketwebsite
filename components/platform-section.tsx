"use client"

import { SectionHeader } from "./ui/section-header"
import {
  MapPin,
  Globe,
  Star,
  BarChart3,
  MessageSquare,
  Smartphone,
} from "lucide-react"

const platforms = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Dominate the Map Pack",
    description:
      "Claim and optimize every relevant listing to own the top 3 positions in Google Maps for your key service areas.",
    highlights: ["Profile optimization", "Local citations", "Geo-targeted keywords"],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Built to Convert",
    description:
      "Every page is engineered for one purpose — turning a visitor into a booked job with speed-optimized, mobile-first design.",
    highlights: ["Sub-2s load times", "Click-to-call CTAs", "Trust signals"],
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Automated Reviews",
    description:
      "Automatically request and collect 5-star reviews after every job to build unstoppable social proof and higher rankings.",
    highlights: ["SMS review requests", "Review monitoring", "Auto-responses"],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Your Growth Engine CRM",
    description:
      "Track every lead from first click to booked job. See exactly what's working and what's driving revenue in real-time.",
    highlights: ["Pipeline tracking", "Revenue attribution", "Monthly reports"],
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Unified Inbox",
    description:
      "Every SMS, email, form submission, and chat in one place. Never miss a conversation or let a lead slip through.",
    highlights: ["Multi-channel messages", "Team assignments", "Read receipts"],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Missed Call Recovery",
    description:
      "Instantly text back every missed call with a personalized message so potential customers never call a competitor instead.",
    highlights: ["Instant text-back", "Custom templates", "Call tracking"],
  },
]

export function PlatformSection() {
  return (
    <section className="relative">
      <div
        className="section-container"
        style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}
      >
        {/* Section intro */}
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

        {/* Feature panels grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.title}
              className="card-surface card-surface-hover flex flex-col p-7"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[var(--radius-xs)] flex items-center justify-center mb-5"
                style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
              >
                {platform.icon}
              </div>

              {/* Title */}
              <h3
                className="text-[22px] sm:text-[24px] font-bold leading-[1.2] tracking-[-0.01em]"
                style={{ color: 'var(--ink)' }}
              >
                {platform.title}
              </h3>

              {/* Description */}
              <p
                className="mt-3 text-[15px] leading-[1.6] flex-1"
                style={{ color: 'var(--muted)' }}
              >
                {platform.description}
              </p>

              {/* Highlight pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {platform.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-block px-3 py-1 text-[12px] font-medium rounded-full"
                    style={{
                      background: 'var(--bg)',
                      color: 'var(--muted)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
